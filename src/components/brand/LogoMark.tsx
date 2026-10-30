import { ARROW_PATH, C_PATH, MARK_VIEWBOX } from "./geometry";
import { cn } from "@/lib/utils";

/**
 * The Coxcel mark: a hexagonal C whose lower stroke ends in an upward arrow head,
 * separated by a thin gap. Colour comes from the single --color-logo token.
 */
export function LogoMark({
  className,
  title,
}: {
  className?: string;
  /** Provide a title when the mark is used on its own as meaningful content. */
  title?: string;
}) {
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      className={cn("fill-logo", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <path d={C_PATH} />
      <path d={ARROW_PATH} />
    </svg>
  );
}
