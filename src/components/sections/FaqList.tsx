import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/** Accessible FAQ list using native details/summary (works without JavaScript). */
export function FaqList({
  items,
  className,
}: {
  items: readonly { q: string; a: string }[];
  className?: string;
}) {
  return (
    <div className={cn("border-t border-mist", className)}>
      {items.map((item) => (
        <details key={item.q} className="group border-b border-mist">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-medium tracking-tight [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <span
              aria-hidden="true"
              className="mt-0.5 flex size-8 shrink-0 items-center justify-center bg-mist-100 transition-colors group-open:bg-brand-600 group-open:text-white"
            >
              <Plus className="size-4 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none" />
            </span>
          </summary>
          <p className="max-w-3xl pr-14 pb-6 text-ink-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
