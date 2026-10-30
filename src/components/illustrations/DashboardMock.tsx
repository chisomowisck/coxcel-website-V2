import { cn } from "@/lib/utils";

const bars = [42, 58, 51, 67, 73, 64, 81, 77, 88, 84, 92, 97];
const line = [30, 34, 33, 41, 46, 44, 52, 57, 55, 63, 66, 72];

/** A BI dashboard composition built from HTML and SVG. Illustrative data only. */
export function DashboardMock({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const max = 100;
  const points = line.map((v, i) => `${(i / (line.length - 1)) * 100},${100 - v}`).join(" ");
  return (
    <div
      role="img"
      aria-label="Illustration of a sales dashboard with KPI tiles, a monthly bar chart and a trend line"
      className={cn(
        "w-full overflow-hidden text-left clip-corner-lg",
        dark
          ? "bg-ink-800 text-white ring-1 ring-ink-700 ring-inset"
          : "bg-white text-ink ring-1 ring-mist ring-inset",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 border-b px-4 py-3",
          dark ? "border-ink-700" : "border-mist",
        )}
      >
        <span className={cn("size-2.5 clip-hex", dark ? "bg-ink-500" : "bg-mist-300")} />
        <span className={cn("size-2.5 clip-hex", dark ? "bg-ink-500" : "bg-mist-300")} />
        <span className="size-2.5 bg-brand clip-hex" />
        <span
          className={cn("ml-3 text-[0.7rem] font-medium", dark ? "text-ink-300" : "text-ink-600")}
        >
          Sales overview / Year to date
        </span>
      </div>
      <div className="grid grid-cols-3 gap-px p-4">
        {[
          { k: "Revenue", v: "4.82m", d: "+12.4%" },
          { k: "Orders", v: "18,306", d: "+8.1%" },
          { k: "Margin", v: "31.6%", d: "+1.9 pts" },
        ].map((t) => (
          <div key={t.k} className={cn("p-3", dark ? "bg-ink-900/40" : "bg-mist-100")}>
            <p
              className={cn(
                "text-[0.65rem] tracking-wide uppercase",
                dark ? "text-ink-300" : "text-ink-600",
              )}
            >
              {t.k}
            </p>
            <p className="mt-1 text-lg font-semibold tracking-tight sm:text-xl">{t.v}</p>
            <p
              className={cn(
                "text-[0.65rem] font-medium",
                dark ? "text-brand-300" : "text-brand-700",
              )}
            >
              {t.d}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-4 px-4 pb-4">
        <div className="col-span-3">
          <p className={cn("text-[0.65rem] font-medium", dark ? "text-ink-300" : "text-ink-600")}>
            Monthly revenue
          </p>
          <div className="mt-2 flex h-28 items-end gap-1">
            {bars.map((b, i) => (
              <span
                key={i}
                className={cn(
                  "flex-1",
                  i === bars.length - 1 ? "bg-brand" : dark ? "bg-ink-600" : "bg-mist-300",
                )}
                style={{ height: `${(b / max) * 100}%` }}
              />
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <p className={cn("text-[0.65rem] font-medium", dark ? "text-ink-300" : "text-ink-600")}>
            Customer growth
          </p>
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="mt-2 h-28 w-full overflow-visible"
          >
            {[25, 50, 75].map((y) => (
              <line
                key={y}
                x1="0"
                x2="100"
                y1={y}
                y2={y}
                className={dark ? "stroke-ink-700" : "stroke-mist"}
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            ))}
            <polyline
              points={points}
              fill="none"
              className="stroke-brand"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
