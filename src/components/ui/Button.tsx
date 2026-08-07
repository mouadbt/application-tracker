type Command =
  | "show-modal"
  | "close"
  | `--${string}`;

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost" | "icon";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  commandfor?: string;
  command?: Command;
}

const Button = ({
  children,
  variant = "primary",
  type = "button",
  onClick,
  disabled,
  className = "",
  commandfor,
  command,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} ${className}`}
      commandfor={commandfor}
      command={command}
    >
      {children}
    </button>
  );
};
export default Button;
