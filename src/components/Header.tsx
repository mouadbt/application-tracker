import Plus from "./icons/Plus";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-8 pb-0">
      <div className="flex flex-col gap-1.5">
        <h1
          className="text-lg font-semibold leading-none text-foreground"
          id="dialog-title"
        >
          Job Applications
        </h1>
        <hr className="bg-border h-0.5 w-12" />
      </div>
      <Button variant="icon">
        <span className="sr-only">Add new job application</span>
        <Plus />
      </Button>
    </header>
  );
}
