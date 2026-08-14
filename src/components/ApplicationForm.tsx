import { useForm, type SubmitHandler } from "react-hook-form";
import Input from "./ui/Input";
import FormField from "./ui/FormField";
import Button from "./ui/Button";
import TextArea from "./ui/TextArea";
import Select from "./ui/Select";
import { useDialog } from "../hooks/useDialog";
type jobStatus =
  | "Ghosted"
  | "HR Interview"
  | "Technical Interview"
  | "Assessment"
  | "ghosted"
  | "Rejected";
type ApplicationFormFileds = {
  jobTitle: string;
  jobDescription: string;
  jobUrl: string;
  jobStatus: jobStatus;
  company: string;
  notes: string;
  resumeUsed: string;
};
const jobStatusOption: string[] = [
  "Ghosted",
  "HR Interview",
  "Technical Interview",
  "Assessment",
  "ghosted",
  "Rejected",
];
export default function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormFileds>();
  const onSubmit: SubmitHandler<ApplicationFormFileds> = (data) => {
    console.log(data);
  };
  const { closeDialog } = useDialog();
  return (
    <form
      action=""
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormField label="Job Title" id="jobTitle" error={errors.jobTitle?.message}>
        <Input type="text" id="jobTitle" {...register("jobTitle", { required: "Job title is required" })} />
      </FormField>

      <FormField label="Company" id="company" error={errors.company?.message}>
        <Input type="text" id="company" {...register("company", { required: "Company is required" })} />
      </FormField>

      <FormField label="Job Description" id="jobDescription" error={errors.jobDescription?.message}>
        <Input type="text" id="jobDescription" {...register("jobDescription")} />
      </FormField>

      <FormField label="Job URL" id="jobUrl" error={errors.jobUrl?.message}>
        <Input type="text" id="jobUrl" {...register("jobUrl")} />
      </FormField>

      <FormField label="Status" id="jobStatus" error={errors.jobStatus?.message}>
        <Select id="jobStatus" {...register("jobStatus")}>
          {jobStatusOption.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField label="Notes" id="notes" error={errors.notes?.message}>
        <TextArea id="notes" {...register("notes")} />
      </FormField>

      <div className="flex justify-end gap-4">
        <Button variant="ghost" onClick={closeDialog}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Submit Application
        </Button>
      </div>
    </form>
  );
}
