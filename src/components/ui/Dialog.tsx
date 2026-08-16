import { type ReactNode } from "react";
import Plus from "../icons/Plus";
import Button from "./Button";

type DialogProps = {
  isOpen: boolean;
  title: string;
  desc: string;
  onClose: () => void;
  dialogChildren: ReactNode;
};

export default function Dialog({
  isOpen,
  title,
  desc,
  onClose,
  dialogChildren,
}: DialogProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px] transition-opacity duration-200"
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        className="
          fixed inset-0 z-50 m-auto
          flex flex-col
          h-fit max-h-[90vh]
          w-[calc(100%-2rem)]
          max-w-2xl
          p-6 gap-4
          rounded-2xl
          border border-border
          bg-card
          shadow-lg
        "
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
            className="btn-icon size-8 -mt-2 -mr-2 svg-wrapper"
            variant="icon"
            onClick={onClose}
          >
            <Plus className="rotate-45" />
          </Button>
        </header>
        {dialogChildren}
      </div>
    </>
  );
}