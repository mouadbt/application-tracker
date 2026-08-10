import { useContext } from "react";
import { DialogContext } from "../contexts/DialogContext";

export function useDialog() {
  const ctx = useContext(DialogContext);
  if (!ctx) {
    throw new Error("useDialog must be used inside a DialogProvider");
  }
  return ctx;
}
