import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface HeadingProps {
  asChild?: boolean;
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Heading({
  asChild,
  children,
  className,
  size = "md",
}: HeadingProps) {
  const Component = asChild ? Slot : "h2";

  return (
    <Component
      className={clsx(
        "text-gray-100 font-sans font-bold",
        {
          "text-lg": size === "sm",
          "text-xl": size === "md",
          "text-2xl": size === "lg",
        },
        className
      )}
    >
      {children}
    </Component>
  );
}
