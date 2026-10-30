import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { cn } from "@/lib/utils";

/** Asymmetric section opening: oversized number left, eyebrow, heading and intro right. */
export function SectionIntro({
  n,
  eyebrow,
  title,
  intro,
  id,
  tone = "light",
  className,
  aside,
}: {
  n?: number;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  id: string;
  tone?: "light" | "dark";
  className?: string;
  aside?: ReactNode;
}) {
  return (
    <div className={cn("grid grid-cols-12 gap-y-6 lg:gap-x-6", className)} data-reveal>
      {n ? (
        <div className="col-span-12 lg:col-span-3">
          <SectionNumber n={n} tone={tone} className="-ml-1" />
        </div>
      ) : null}
      <div className={cn("col-span-12", n ? "lg:col-span-7" : "lg:col-span-8")}>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <Heading id={id} size="lg" className="mt-5">
          {title}
        </Heading>
        {intro ? (
          <p
            className={cn(
              "mt-6 max-w-2xl text-lg",
              tone === "light" ? "text-ink-600" : "text-ink-300",
            )}
          >
            {intro}
          </p>
        ) : null}
      </div>
      {aside ? (
        <div className="col-span-12 flex items-end lg:col-span-2 lg:justify-end">{aside}</div>
      ) : null}
    </div>
  );
}
