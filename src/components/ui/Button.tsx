import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "inverse" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors duration-200 clip-corner disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Brand blue CTA. brand-600 keeps the white label above 4.5:1.
  primary: "bg-brand-600 text-white hover:bg-ink",
  // Outline on light backgrounds.
  secondary: "bg-white text-ink ring-1 ring-inset ring-ink hover:bg-ink hover:text-white",
  // For Ink sections.
  inverse: "bg-white text-ink hover:bg-brand-600 hover:text-white",
  ghost: "text-ink hover:text-brand-700",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-[0.95rem]",
  lg: "px-7 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
};

function Arrow() {
  return (
    <ArrowUpRight
      aria-hidden="true"
      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
    />
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  arrow = true,
  className,
  children,
  ...rest
}: CommonProps & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
      {arrow ? <Arrow /> : null}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  ...rest
}: CommonProps & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
      {arrow ? <Arrow /> : null}
    </button>
  );
}
