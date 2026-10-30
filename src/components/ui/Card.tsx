import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Card with the angled corner cut. When `href` is set the whole card is a link and the
 * corner marker shifts on hover.
 */
export function Card({
  children,
  href,
  className,
  tone = "white",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  tone?: "white" | "mist" | "ink";
}) {
  const toneClass =
    tone === "ink"
      ? "bg-ink-800 text-white"
      : tone === "mist"
        ? "bg-mist-100 text-ink"
        : "bg-white text-ink ring-1 ring-inset ring-mist";

  const inner = (
    <>
      <span
        aria-hidden="true"
        className="absolute top-0 right-0 size-9 bg-brand transition-transform duration-300 [clip-path:polygon(11%_0,33%_0,100%_67%,100%_89%)] group-hover:-translate-x-1 group-hover:translate-y-1 motion-reduce:transition-none"
      />
      {children}
    </>
  );

  const classes = cn(
    "group relative flex h-full flex-col p-6 clip-corner sm:p-8",
    toneClass,
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "transition-colors duration-200 hover:ring-ink")}>
        {inner}
      </Link>
    );
  }
  return <div className={classes}>{inner}</div>;
}
