import { cn, pad } from "@/lib/utils";

/**
 * Oversized section number (01, 02, 03). Purely decorative: the digits are CSS-generated
 * content, so they are not read out or treated as body text.
 */
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
      data-num={pad(n)}
      className={cn(
        "block text-[5.5rem] leading-none font-semibold tracking-[-0.06em] select-none before:content-[attr(data-num)] sm:text-[8rem] lg:text-[10rem]",
        tone === "light" ? "text-mist" : "text-ink-700",
        className,
      )}
    />
  );
}
