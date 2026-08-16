import { useForm, type SubmitHandler } from "react-hook-form";
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
const schema = z.object({
  jobTitle: z.string().min(5),
  jobDescription: z.string().min(5),
  jobUrl: z.string().min(5),
  jobStatus: z.enum(jobStatusOptions),
  company: z.string().min(5),
  notes: z.string().min(5),
  // resumeUsed: z.string().min(5),
});

type ApplicationFormFileds = z.infer<typeof schema>;

export default function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // setError,
  } = useForm<ApplicationFormFileds>({
    defaultValues: {
      jobStatus: "Ghosted",
    },
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<ApplicationFormFileds> = async (formData) => {
    try {
      const { data, error } = await supabase
        .from("jobApplication")
        .insert({
          jobTitle: formData.jobTitle,
          jobDescription: formData.jobDescription,
          jobUrl: formData.jobUrl,
          jobStatus: formData.jobStatus,
          company: formData.company,
          notes: formData.notes,
        })
        .single();

      if (error) throw error;
      console.log(data);
    } catch (error) {
      console.error(error.message);
      toast(error.message);
    }
  };
  const { closeDialog } = useDialog();
  return (
    <form
      action=""
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormField
        label="Job Title"
        id="jobTitle"
        error={errors.jobTitle?.message}
      >
        <Input type="text" id="jobTitle" {...register("jobTitle")} />
      </FormField>

      <FormField label="Company" id="company" error={errors.company?.message}>
        <Input type="text" id="company" {...register("company")} />
      </FormField>

      <FormField
        label="Job Description"
        id="jobDescription"
        error={errors.jobDescription?.message}
      >
        <Input
          type="text"
          id="jobDescription"
          {...register("jobDescription")}
        />
      </FormField>

      <FormField label="Job URL" id="jobUrl" error={errors.jobUrl?.message}>
        <Input type="text" id="jobUrl" {...register("jobUrl")} />
      </FormField>

      <FormField
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
