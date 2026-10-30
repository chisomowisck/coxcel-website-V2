import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Inline text link with animated underline. Uses brand-700 on light and brand-300 on dark for AA. */
export function TextLink({
  href,
  children,
  tone = "light",
  arrow = false,
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  arrow?: boolean;
  className?: string;
}) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const classes = cn(
    "group inline-flex items-center gap-1.5 font-medium",
    tone === "light" ? "text-brand-700" : "text-brand-300",
    className,
  );
  const content = (
    <>
      <span className="link-underline">{children}</span>
      {arrow ? (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
        />
      ) : null}
    </>
  );
  if (external) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
