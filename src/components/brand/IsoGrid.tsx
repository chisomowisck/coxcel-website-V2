import { useId } from "react";
import { cn } from "@/lib/utils";

/** Isometric (30/60 degree) line grid drawn with thin strokes. Decorative. */
export function IsoGrid({
  className,
  tone = "light",
  cell = 48,
}: {
  className?: string;
  tone?: "light" | "dark";
  cell?: number;
}) {
  const id = useId().replace(/:/g, "");
  const h = cell * Math.tan(Math.PI / 6); // tile height so diagonals run at 30 degrees
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      <defs>
        <pattern id={`iso-${id}`} width={cell} height={h} patternUnits="userSpaceOnUse">
          <path
            d={`M0 ${h / 2} L${cell / 2} 0 M${cell / 2} ${h} L${cell} ${h / 2} M0 ${h / 2} L${cell / 2} ${h} M${cell / 2} 0 L${cell} ${h / 2} M${cell / 2} 0 V${h}`}
            fill="none"
            strokeWidth="1"
            className={tone === "light" ? "stroke-mist" : "stroke-ink-700"}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#iso-${id})`} />
    </svg>
  );
}
