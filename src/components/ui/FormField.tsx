import React from "react";
import Label from "./Label";

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
  id?: string;
}

const FormField = ({ label, error, children, id }: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <span className="text-xs text-destructive">{error}</span>}
    </div>
  );
};

export default FormField;
