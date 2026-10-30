import { cn } from "@/lib/utils";

const lines: { indent: number; tokens: { t: string; c?: "k" | "s" | "f" | "m" }[] }[] = [
  { indent: 0, tokens: [{ t: "export async function ", c: "k" }, { t: "bookAppointment", c: "f" }, { t: "(req) {" }] },
  { indent: 1, tokens: [{ t: "const ", c: "k" }, { t: "slot = " }, { t: "await ", c: "k" }, { t: "schedule." }, { t: "reserve", c: "f" }, { t: "(req.slotId)" }] },
  { indent: 1, tokens: [{ t: "if ", c: "k" }, { t: "(!slot) " }, { t: "return ", c: "k" }, { t: "conflict", c: "f" }, { t: "(" }, { t: '"Slot taken"', c: "s" }, { t: ")" }] },
  { indent: 1, tokens: [{ t: "await ", c: "k" }, { t: "reminders." }, { t: "queue", c: "f" }, { t: "(slot, { channel: " }, { t: '"whatsapp"', c: "s" }, { t: " })" }] },
  { indent: 1, tokens: [{ t: "return ", c: "k" }, { t: "ok", c: "f" }, { t: "(slot)" }] },
  { indent: 0, tokens: [{ t: "}" }] },
  { indent: 0, tokens: [{ t: "// 24 tests passing", c: "m" }] },
];

const colour = { k: "text-brand-300", s: "text-mist", f: "text-white", m: "text-ink-300" } as const;

/** Code editor composition built from HTML. Illustrative only. */
export function CodeWindowMock({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Illustration of a code editor showing a booking function and passing tests"
      className={cn("w-full overflow-hidden bg-ink-900 text-left font-mono text-[0.72rem] leading-6 text-ink-200 clip-corner-lg sm:text-[0.8rem]", className)}
    >
      <div className="flex items-center gap-2 border-b border-ink-700 px-4 py-3 font-sans">
        <span className="size-2.5 bg-ink-600 clip-hex" />
        <span className="size-2.5 bg-ink-600 clip-hex" />
        <span className="size-2.5 bg-brand clip-hex" />
        <span className="ml-3 text-[0.7rem] text-ink-300">booking/service.ts</span>
      </div>
      <div className="overflow-hidden px-4 py-4">
        {lines.map((line, i) => (
          <div key={i} className="flex whitespace-pre">
            <span className="mr-4 w-4 shrink-0 text-right text-ink-500 select-none">{i + 1}</span>
            <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
              {line.tokens.map((tok, j) => (
                <span key={j} className={tok.c ? colour[tok.c] : undefined}>
                  {tok.t}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 border-t border-ink-700 px-4 py-2.5 font-sans text-[0.7rem] text-ink-300">
        <span className="h-2 w-2 bg-brand clip-hex" />
        Build passed
        <span className="ml-auto">main</span>
      </div>
    </div>
  );
}
