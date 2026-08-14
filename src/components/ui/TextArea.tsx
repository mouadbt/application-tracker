const TextArea = ({
  className = "",
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea {...rest} className={`textarea ${className}`} />;
};

export default TextArea;
