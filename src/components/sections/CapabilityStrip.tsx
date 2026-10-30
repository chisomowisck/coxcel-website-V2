import { Container } from "@/components/ui/Container";

const capabilities = [
  "Web and mobile applications",
  "Cloud architecture",
  "Data warehouses and BI",
  "Applied AI and automation",
  "Security reviews",
  "Search and paid media",
  "Accessibility to WCAG 2.1 AA",
  "Support with clear service levels",
];

/** Short credibility strip: what we do, stated plainly. No logos or invented claims. */
export function CapabilityStrip() {
  return (
    <section aria-label="Capabilities" className="bg-ink text-white">
      <Container className="py-6">
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          {capabilities.map((c) => (
            <li key={c} className="flex items-center gap-3 text-ink-200">
              <span aria-hidden="true" className="h-2 w-2.5 bg-brand clip-hex" />
              {c}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
