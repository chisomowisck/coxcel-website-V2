import { cn } from "@/lib/utils";

const sources = ["ERP", "CRM", "Files", "Apps"];

/** Data pipeline diagram drawn as isometric blocks and connector lines. Illustrative only. */
export function PipelineDiagram({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const stroke = dark ? "stroke-ink-500" : "stroke-ink-300";
  const box = dark ? "fill-ink-800 stroke-ink-600" : "fill-white stroke-mist-300";
  const text = dark ? "fill-ink-200" : "fill-ink-700";
  return (
    <svg
      viewBox="0 0 520 300"
      role="img"
      aria-label="Diagram: data from ERP, CRM, files and apps flows through pipelines into a warehouse, then to dashboards and models"
      className={cn("h-auto w-full", className)}
    >
      {sources.map((s, i) => {
        const y = 30 + i * 62;
        return (
          <g key={s}>
            <rect x="10" y={y} width="96" height="40" className={box} strokeWidth="1" />
            <text
              x="58"
              y={y + 25}
              textAnchor="middle"
              className={cn("text-[13px] font-medium", text)}
            >
              {s}
            </text>
            <path
              d={`M106 ${y + 20} C150 ${y + 20} 150 150 196 150`}
              fill="none"
              className={stroke}
              strokeWidth="1.25"
            />
          </g>
        );
      })}

      {/* Warehouse as an isometric hexagonal block */}
      <g transform="translate(196 95)">
        <path d="M60 0 120 34 120 76 60 110 0 76 0 34Z" className="fill-brand" />
        <path
          d="M0 34 60 68 120 34 M60 68 V110"
          fill="none"
          className="stroke-white"
          strokeWidth="1.5"
        />
        <text
          x="60"
          y="140"
          textAnchor="middle"
          className={cn("text-[13px] font-semibold", dark ? "fill-white" : "fill-ink")}
        >
          Warehouse
        </text>
      </g>

      <path d="M316 150 H360" className={stroke} strokeWidth="1.25" />
      <path
        d="M360 150 C380 150 380 80 404 80 M360 150 C380 150 380 220 404 220"
        fill="none"
        className={stroke}
        strokeWidth="1.25"
      />

      <g>
        <rect x="404" y="58" width="106" height="44" className={box} strokeWidth="1" />
        <rect x="414" y="80" width="8" height="14" className="fill-brand" />
        <rect
          x="426"
          y="72"
          width="8"
          height="22"
          className={dark ? "fill-ink-500" : "fill-mist-300"}
        />
        <rect
          x="438"
          y="76"
          width="8"
          height="18"
          className={dark ? "fill-ink-500" : "fill-mist-300"}
        />
        <text x="490" y="85" textAnchor="end" className={cn("text-[12px] font-medium", text)}>
          BI
        </text>
      </g>
      <g>
        <rect x="404" y="198" width="106" height="44" className={box} strokeWidth="1" />
        <polyline
          points="414,232 428,222 440,226 454,210"
          fill="none"
          className="stroke-brand"
          strokeWidth="2"
        />
        <text x="498" y="225" textAnchor="end" className={cn("text-[12px] font-medium", text)}>
          ML
        </text>
      </g>
    </svg>
  );
}
