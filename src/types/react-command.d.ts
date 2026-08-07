import "react";

declare module "react" {
  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    command?: "show-modal" | "close" | `--${string}`;
    commandfor?: string;
  }
}
