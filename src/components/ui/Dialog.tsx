import Plus from "../icons/Plus";
import Button from "./Button";

type DialogProps = {
  title: string;
  desc: string;
};

export default function Dialog({ title, desc }: DialogProps) {
  return (
    <dialog
      id="app-form"
      className="m-auto w-[calc(100%-2rem)] max-w-106.25 rounded-2xl border border-border bg-card shadow-lg backdrop:bg-black/20 backdrop:backdrop-blur-sm open:flex flex-col"
      onClick={(e) => {
        if (e.target === this) this.close();
      }}
    >
      <header className="flex items-center justify-between p-6">
        <div className="flex flex-col gap-1.5">
          <h4
            className="text-lg font-semibold leading-none text-foreground"
            id="dialog-title"
          >
            {title}
          </h4>
          <p className="text-sm text-muted-foreground" id="dialog-description">
            {desc}
          </p>
        </div>
        <Button
          commandfor="app-form"
          command="close"
          className="btn-icon size-8 -mt-2 -mr-2 svg-wrapper"
          variant="icon"
        >
          <Plus className="rotate-45" />
        </Button>
      </header>
    </dialog>
  );
}
