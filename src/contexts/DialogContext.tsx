import { createContext, type ReactNode } from "react";

type DialogContextType = {
  openDialog: (title: string, desc: string, dialogChildren: ReactNode) => void;
  closeDialog: () => void;
};
export const DialogContext = createContext<DialogContextType | null>(null);
