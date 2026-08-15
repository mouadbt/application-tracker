type FormFieldErrorProps = {
  errorMsg: string;
};
export default function FormFieldError({ errorMsg }: FormFieldErrorProps) {
  return <span className="text-xs text-destructive">{errorMsg}</span>;
}
