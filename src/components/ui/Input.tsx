interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  id?: string;
}

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  disabled,
  required,
  className = "",
  name,
  id,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      className={`input ${className}`}
      name={name}
      id={id}
    />
  );
};

export default Input;
