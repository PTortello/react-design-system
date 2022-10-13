import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface HeadingProps {
  asChild?: boolean;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

export function Heading({ asChild, children, size = "md" }: HeadingProps) {
  const Component = asChild ? Slot : "h2";

  return (
    <Component
      className={clsx("text-gray-100 font-sans font-bold", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </Component>
  );
}
