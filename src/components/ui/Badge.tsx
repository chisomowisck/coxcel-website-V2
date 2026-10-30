import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark" | "accent";
  className?: string;
}) {
  const toneClass =
    tone === "dark"
      ? "border-ink-700 text-ink-100"
      : tone === "accent"
        ? "border-brand bg-brand-50 text-brand-800"
        : "border-mist-300 text-ink-700";
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2.5 py-1 text-xs font-medium tracking-wide",
        toneClass,
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Visible label for sample content that must be replaced before launch. */
export function SampleBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border border-dashed border-ink-400 bg-white px-2 py-0.5 text-[0.7rem] font-semibold tracking-[0.12em] text-ink-700 uppercase",
        className,
      )}
    >
      Sample
    </span>
  );
}
