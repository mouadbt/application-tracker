import { useState, type ReactNode } from "react";
import { DialogContext } from "./DialogContext";
import Dialog from "../components/ui/Dialog";

type DialogContent = {
  title: string;
  desc: string;
  dialogChildren: ReactNode;
};

export function DialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<DialogContent>({
    title: "",
    desc: "",
    dialogChildren: null,
  });

  const openDialog = (
    title: string,
    desc: string,
    dialogChildren: ReactNode,
  ) => {
    setContent({ title, desc, dialogChildren });
    setIsOpen(true);
  };

  const closeDialog = () => setIsOpen(false);

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog }}>
      {children}
      <Dialog
        isOpen={isOpen}
        title={content.title}
        desc={content.desc}
        onClose={closeDialog}
        dialogChildren={content.dialogChildren}
      />
    </DialogContext.Provider>
  );
}