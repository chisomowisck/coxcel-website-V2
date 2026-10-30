import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Small uppercase label above a heading, with the split-cut marker. */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase",
        tone === "light" ? "text-ink-600" : "text-ink-300",
        className,
      )}
    >
      <span aria-hidden="true" className="flex items-center gap-[3px]">
        <span className="h-[2px] w-5 bg-brand" />
        <span className="h-[2px] w-1.5 -skew-x-[30deg] bg-brand" />
      </span>
      {children}
    </p>
  );
}
