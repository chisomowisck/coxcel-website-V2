import type { CaseStudy } from "@/content/case-studies";
import { AgentFlowMock } from "./AgentFlowMock";
import { CodeWindowMock } from "./CodeWindowMock";
import { DashboardMock } from "./DashboardMock";
import { PipelineDiagram } from "./PipelineDiagram";

export function CaseVisual({ visual, className }: { visual: CaseStudy["visual"]; className?: string }) {
  switch (visual) {
    case "dashboard":
      return <DashboardMock className={className} />;
    case "code":
      return <CodeWindowMock className={className} />;
    case "pipeline":
      return (
        <div className={className}>
          <div className="bg-white p-4 ring-1 ring-mist ring-inset clip-corner-lg">
            <PipelineDiagram />
          </div>
        </div>
      );
    case "agent":
      return <AgentFlowMock className={className} />;
  }
}
