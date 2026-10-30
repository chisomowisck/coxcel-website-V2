import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Level = 1 | 2 | 3 | 4;
type Size = "display" | "xl" | "lg" | "md" | "sm";

const sizes: Record<Size, string> = {
  display: "text-display font-semibold",
  xl: "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]",
  lg: "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.08]",
  md: "text-2xl sm:text-3xl font-semibold tracking-[-0.02em]",
  sm: "text-lg sm:text-xl font-semibold tracking-[-0.01em]",
};

export function Heading({
  as = 2,
  size = "lg",
  id,
  className,
  children,
}: {
  as?: Level;
  size?: Size;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const Tag = `h${as}` as const;
  return (
    <Tag id={id} className={cn(sizes[size], className)}>
      {children}
    </Tag>
  );
}

/** Highlighted words inside a heading. Large text only, so Brand Blue meets AA large-text contrast. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-brand">{children}</span>;
}
