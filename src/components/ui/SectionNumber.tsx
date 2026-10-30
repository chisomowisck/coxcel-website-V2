import { cn, pad } from "@/lib/utils";

/** Oversized outline section number (01, 02, 03). Decorative. */
export function SectionNumber({
  n,
  tone = "light",
  className,
}: {
  n: number;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block text-[5.5rem] leading-none font-semibold tracking-[-0.06em] select-none sm:text-[8rem] lg:text-[10rem]",
        tone === "light" ? "text-mist" : "text-ink-700",
        className,
      )}
    >
      {pad(n)}
    </span>
  );
}
