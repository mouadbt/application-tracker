const Select = ({
  className = "",
  children,
  ...rest
}: React.SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <select {...rest} className={`select ${className}`}>
      {children}
    </select>
  );
};

export default Select;