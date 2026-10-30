import { ARROW_PATH, C_BLOCKS } from "./geometry";
import { cn } from "@/lib/utils";

/**
 * Hero illustration: four isometric blocks settle into the hexagonal C, then the arrow head
 * arrives and rises gently. Construction lines trace the logo's 30 degree geometry.
 * CSS-only motion, disabled for reduced-motion users (see globals.css).
 */
export function HeroGraphic({
  className,
  tone = "light",
  decorative = false,
}: {
  className?: string;
  tone?: "light" | "dark";
  decorative?: boolean;
}) {
  const lines = [
    "M-120 186 L880 -391",
    "M-120 551 L880 -26",
    "M-60 -40 L860 491",
    "M-60 300 L860 831",
    "M0 -60 V820",
    "M162 -60 V820",
  ];
  const dark = tone === "dark";
  return (
    <svg
      viewBox="-60 -60 880 860"
      className={className}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : "The Coxcel mark assembling from isometric blocks, its arrow pointing upward"}
      focusable="false"
    >
      <g className={dark ? "stroke-ink-700" : "stroke-mist-300"} fill="none" strokeWidth="1">
        {lines.map((d, i) => (
          <path key={d} d={d} pathLength={1} className="hero-line" style={{ ["--i" as string]: i }} />
        ))}
      </g>

      <g fill="none" strokeWidth="1.5" className={dark ? "stroke-ink-500" : "stroke-ink-300"}>
        <path
          d="M560 640 L650 588 L740 640 L740 744 L650 796 L560 744 Z M560 640 L650 692 L740 640 M650 692 V796"
          pathLength={1}
          className="hero-line"
          style={{ ["--i" as string]: 6 }}
        />
      </g>

      <g className={cn("fill-logo", dark ? "stroke-ink" : "stroke-white")} strokeWidth="3" strokeLinejoin="round">
        {C_BLOCKS.map((d, i) => (
          <path key={d} d={d} className="hero-block" style={{ ["--i" as string]: i }} />
        ))}
      </g>
      <path d={ARROW_PATH} className="hero-arrow fill-logo" />
    </svg>
  );
}
