import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { cn } from "@/lib/utils";

/**
 * Full logo: mark plus "Coxcel" wordmark.
 * variant "light" is for white and Mist backgrounds; "reversed" is for Ink backgrounds.
 */
export function Logo({
  variant = "light",
  className,
  href = "/",
  size = "md",
}: {
  variant?: "light" | "reversed";
  className?: string;
  href?: string | null;
  size?: "md" | "lg";
}) {
  const content = (
    <span className={cn("inline-flex items-center", size === "lg" ? "gap-3" : "gap-2.5")}>
      <LogoMark className={size === "lg" ? "h-10 w-auto" : "h-8 w-auto"} />
      <span
        className={cn(
          "leading-none font-bold tracking-[-0.03em]",
          size === "lg" ? "text-[1.9rem]" : "text-[1.55rem]",
          variant === "light" ? "text-ink" : "text-white",
        )}
      >
        Coxcel
      </span>
    </span>
  );

  if (href === null) return <span className={className}>{content}</span>;

  return (
    <Link href={href} className={cn("inline-flex", className)} aria-label="Coxcel, go to home page">
      {content}
    </Link>
  );
}
