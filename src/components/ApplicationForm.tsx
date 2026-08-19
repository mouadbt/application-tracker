import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import Input from "./ui/Input";
import FormField from "./ui/FormField";
import Button from "./ui/Button";
import TextArea from "./ui/TextArea";
import Select from "./ui/Select";
import { useDialog } from "../hooks/useDialog";
import FormFieldError from "./ui/FormFieldError";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "../lib/supabaseClient";
import { toast } from "sonner";

const jobStatusOptions: string[] = [
  "Ghosted",
  "HR Interview",
  "Technical Interview",
  "Assessment",
  "Rejected",
];

const sourceOptions: string[] = [
  "LinkedIn",
  "Indeed",
  "Glassdoor",
  "Company Website",
  "Referral",
  "Job Fair",
  "Facebook",
  "Other",
];

const schema = z.object({
  jobTitle: z.string().min(5),
  jobDescription: z.string().min(5),
  jobUrl: z.url(),
  jobStatus: z.enum(jobStatusOptions),
  company: z.string().min(5),
  notes: z.string().min(5),
  appliedAt: z.iso.date(),
  cv: z
    .instanceof(File)
    .refine((file) => file.size <= 2 * 1024 * 1024, "CV must be less than 5MB")
    .refine(
      (file) =>
        file.type === "application/pdf" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "CV must be a PDF/DOCX",
    ),
  source: z.enum(sourceOptions),
  sourceOther: z.string().optional(),
});

type ApplicationFormFileds = z.infer<typeof schema>;

export default function ApplicationForm() {
  const { closeDialog } = useDialog();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting },

    // setError,
  } = useForm<ApplicationFormFileds>({
    defaultValues: {
      jobStatus: "Ghosted",
      appliedAt: new Date().toISOString().split("T")[0],
      source: "Indeed",
      sourceOther: "",
    },
    resolver: zodResolver(schema),
  });
  const source = useWatch({
    control,
    name: "source",
  });
  const onSubmit: SubmitHandler<ApplicationFormFileds> = async (formData) => {
    try {
      // Upload CV first
      const fileExt = formData.cv.name.split(".").pop();
      const fileName =
        `${crypto.randomUUID()}_${formData.company}_${formData.jobTitle}.${fileExt}`
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "_");

      const { error: uploadError } = await supabase.storage
        .from("cvs")
        .upload(fileName, formData.cv);

      if (uploadError) throw uploadError;

      // Insert application with cv path
      const { data, error } = await supabase
        .from("jobApplication")
        .insert({
          jobTitle: formData.jobTitle,
          jobDescription: formData.jobDescription,
          jobUrl: formData.jobUrl,
          jobStatus: formData.jobStatus,
          company: formData.company,
          notes: formData.notes,
          appliedAt: formData.appliedAt,
          cvPath: fileName,
        })
        .select()
        .single();

      if (error) throw error;

      handleSuccessedSubmit(data.id);
    } catch (error) {
      if (error instanceof Error) {
        toast(error.message);
      }
    }
  };
  const handleSuccessedSubmit = (rowId: number): void => {
    toast(`Job Application saved successfuly, ID: ${rowId}`);
    reset();
    closeDialog();
  };
  return (
    <form
      action=""
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-12 gap-4">
        <FormField
          label="Job Title"
          id="jobTitle"
          error={errors.jobTitle?.message}
          className="col-span-8"
        >
          <Input type="text" id="jobTitle" {...register("jobTitle")} />
        </FormField>

        <FormField
          label="Company"
          className="col-span-4"
          id="company"
          error={errors.company?.message}
        >
          <Input type="text" id="company" {...register("company")} />
        </FormField>
      </div>

      <FormField
        label="Job Description"
        id="jobDescription"
        error={errors.jobDescription?.message}
      >
        <TextArea id="jobDescription" {...register("jobDescription")} />
      </FormField>

      <div className="grid grid-cols-12 gap-4">
        <FormField
          label="Job URL"
          id="jobUrl"
          className="col-span-8"
          error={errors.jobUrl?.message}
        >
          <Input type="text" id="jobUrl" {...register("jobUrl")} />
        </FormField>
        <FormField
          label="Date"
          id="date"
          className="col-span-4"
          error={errors.appliedAt?.message}
        >
          <Input type="date" id="date" {...register("appliedAt")} />
        </FormField>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <FormField
          className="col-span-7"
          label="Status"
          id="jobStatus"
          error={errors.jobStatus?.message}
        >
          <Select id="jobStatus" {...register("jobStatus")}>
            {jobStatusOptions.map((el) => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField
          label="CV"
          id="cv"
          className="col-span-5"
          error={errors.cv?.message}
        >
          <Input
            type="file"
            id="cv"
            accept=".pdf,.docx"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setValue("cv", file);
            }}
          />
        </FormField>
      </div>

      <Select id="source" {...register("source")}>
        {sourceOptions.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </Select>

      {source === "Other" && (
        <FormField
          label="Other source"
          id="sourceOther"
          error={errors.sourceOther?.message}
        >
          <Input
            type="text"
            id="sourceOther"
            {...register("sourceOther", {
              validate: (value) =>
                source !== "Other" ||
                !!value.trim() ||
                "Please specify where you found this job",
            })}
          />
        </FormField>
      )}

      <FormField label="Notes" id="notes" error={errors.notes?.message}>
        <TextArea id="notes" {...register("notes")} />
      </FormField>

      {errors.root && <FormFieldError errorMsg={errors.root.message} />}

      <div className="flex justify-end gap-4">
        <Button variant="ghost" onClick={closeDialog}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </form>
  );
}
