import { cn } from "@/lib/utils";

/** Thin rule with the arrow's split cut: a short angled break in Brand Blue. Decorative. */
export function Divider({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const line = tone === "light" ? "bg-mist" : "bg-ink-700";
  return (
    <div aria-hidden="true" className={cn("flex items-center gap-1.5", className)}>
      <span className={cn("h-px flex-1", line)} />
      <span className="h-3 w-[3px] skew-x-[-30deg] bg-brand" />
      <span className="h-3 w-[3px] skew-x-[-30deg] bg-brand" />
      <span className={cn("h-px w-16 sm:w-32", line)} />
    </div>
  );
}

/** Small hexagon bullet used as a list marker. */
export function HexBullet({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("mt-[0.55em] inline-block h-2.5 w-3 shrink-0 bg-brand clip-hex", className)}
    />
  );
}
