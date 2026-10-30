import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Tone = "white" | "mist" | "ink";

const tones: Record<Tone, string> = {
  white: "bg-white text-ink",
  mist: "bg-mist-100 text-ink",
  ink: "bg-ink text-white",
};

export function Section({
  children,
  tone = "white",
  id,
  className,
  containerClassName,
  labelledBy,
  bordered = false,
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  containerClassName?: string;
  labelledBy?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-tone={tone}
      className={cn(
        "relative overflow-hidden py-20 sm:py-24 lg:py-32",
        tones[tone],
        bordered && "border-t border-mist",
        className,
      )}
    >
      <Container className={cn("relative", containerClassName)}>{children}</Container>
    </section>
  );
}
