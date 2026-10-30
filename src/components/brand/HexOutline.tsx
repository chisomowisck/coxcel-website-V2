import { ARROW_PATH, C_PATH, MARK_VIEWBOX } from "./geometry";
import { cn } from "@/lib/utils";

/** Large outline of the mark used as background line art. Decorative. */
export function HexOutline({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      aria-hidden="true"
      className={cn(
        "pointer-events-none fill-none",
        tone === "light" ? "stroke-mist" : "stroke-ink-700",
        className,
      )}
      strokeWidth="2"
      vectorEffect="non-scaling-stroke"
    >
      <path d={C_PATH} vectorEffect="non-scaling-stroke" />
      <path d={ARROW_PATH} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** A single flat-top hexagon outline. Decorative. */
export function Hexagon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 87"
      aria-hidden="true"
      className={cn("pointer-events-none fill-none", className)}
    >
      <path
        d="M25 1.5H75L98.5 43.5 75 85.5H25L1.5 43.5Z"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
