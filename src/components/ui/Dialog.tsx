import { forwardRef, type ReactNode } from "react";
import Plus from "../icons/Plus";
import Button from "./Button";

type DialogProps = {
  title: string;
  desc: string;
  onClose: () => void;
  dialogChildren: ReactNode;
};

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ title, desc, onClose, dialogChildren }, ref) => {
    return (
      <dialog
        ref={ref}
        className="
          flex flex-col
          p-6 gap-4 
          fixed inset-0 m-auto
          w-[calc(100%-2rem)]
          max-w-2xl
          rounded-2xl
          border border-border
          bg-card
          shadow-lg

          opacity-0
          translate-y-8
          transition-all
          duration-200
          ease-out
          transition-discrete

          open:opacity-100
          open:translate-y-0
          open:scale-100

          backdrop:bg-black/20
          backdrop:backdrop-blur-[1px]
          backdrop:opacity-0
          open:backdrop:opacity-100
          backdrop:transition-opacity
          backdrop:duration-200

          starting:open:opacity-0
          starting:open:translate-y-8
        "
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
      >
        <header className="flex items-center justify-between">
          <div className="flex flex-col gap-1.5">
            <h4
              className="text-lg font-semibold leading-none text-foreground"
              id="dialog-title"
            >
              {title}
            </h4>
            <p
              className="text-sm text-muted-foreground"
              id="dialog-description"
            >
              {desc}
            </p>
          </div>
          <Button
            commandfor="app-form"
            command="close"
            className="btn-icon size-8 -mt-2 -mr-2 svg-wrapper"
            variant="icon"
            onClick={onClose}
          >
            <Plus className="rotate-45" />
          </Button>
        </header>
        {dialogChildren}
      </dialog>
    );
  },
);

export default Dialog;
