import { useRef, useState, type ReactNode } from "react";
import { DialogContext } from "./DialogContext";
import Dialog from "../components/ui/Dialog";

type DialogContent = {
  title: string;
  desc: string;
  dialogChildren: ReactNode;
};
export function DialogProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
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
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };
  return (
    <DialogContext.Provider value={{ openDialog, closeDialog }}>
      {children}
      <Dialog
        ref={dialogRef}
        title={content.title}
        desc={content.desc}
        onClose={closeDialog}
        dialogChildren={content.dialogChildren}
      />
    </DialogContext.Provider>
  );
}
