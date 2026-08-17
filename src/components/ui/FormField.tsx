import React from "react";
import Label from "./Label";
import FormFieldError from "./FormFieldError";

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const FormField = ({
  label,
  error,
  children,
  id,
  className,
}: FormFieldProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <FormFieldError errorMsg={error} />}
    </div>
  );
};

export default FormField;
