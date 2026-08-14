const Input = ({
  className = "",
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...rest} className={`input ${className}`} />;
};

export default Input;
