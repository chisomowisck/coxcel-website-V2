import { cn } from "@/lib/utils";

/** AI assistant conversation with cited sources and a hand-over step. Illustrative only. */
export function AgentFlowMock({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Illustration of an AI assistant answering a question with cited policy sources and offering to hand over to a person"
      className={cn("w-full bg-white p-4 text-left text-[0.8rem] ring-1 ring-mist ring-inset clip-corner-lg sm:p-5", className)}
    >
      <div className="flex items-center justify-between border-b border-mist pb-3">
        <span className="font-semibold">Support assistant</span>
        <span className="flex items-center gap-1.5 text-[0.7rem] text-ink-600">
          <span className="size-2 bg-brand clip-hex" /> Online
        </span>
      </div>
      <div className="mt-4 space-y-3">
        <p className="ml-auto max-w-[80%] bg-ink px-3 py-2 text-white">Can I defer my course start date?</p>
        <div className="max-w-[88%] bg-mist-100 px-3 py-2 text-ink">
          <p>Yes. You can defer once, up to 6 months, by request before your start date.</p>
          <p className="mt-2 flex flex-wrap gap-1.5 text-[0.68rem]">
            <span className="border border-mist-300 bg-white px-1.5 py-0.5 text-ink-700">Source: Deferral policy, s.2</span>
            <span className="border border-mist-300 bg-white px-1.5 py-0.5 text-ink-700">Source: Learner handbook</span>
          </p>
        </div>
        <div className="flex items-center gap-2 border-l-2 border-brand pl-3 text-[0.72rem] text-ink-600">
          Requests involving fees are passed to a person with the conversation history.
        </div>
      </div>
    </div>
  );
}
