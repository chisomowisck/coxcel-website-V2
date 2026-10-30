/**
 * Testimonials and client logos.
 * SAMPLE: replace before launch. Hidden by default (site.features.testimonials / clientLogos).
 * Only publish real quotes and logos with written permission.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  sample: boolean;
};

export const testimonials: Testimonial[] = [
  // SAMPLE: replace before launch
  {
    quote: "Sample quote. Replace with a real client testimonial, used with written permission.",
    name: "Client name",
    role: "Role",
    company: "Company",
    sample: true,
  },
  // SAMPLE: replace before launch
  {
    quote: "Sample quote. Replace with a real client testimonial, used with written permission.",
    name: "Client name",
    role: "Role",
    company: "Company",
    sample: true,
  },
];

// SAMPLE: replace before launch. Names only; logos must be supplied as approved image files.
export const clientLogos: { name: string; src?: string; sample: boolean }[] = [
  { name: "Client A", sample: true },
  { name: "Client B", sample: true },
  { name: "Client C", sample: true },
  { name: "Client D", sample: true },
  { name: "Client E", sample: true },
];

/**
 * Capability numbers. SAMPLE: replace before launch.
 * These describe the offer (counts from the services data), not invented performance claims.
 */
export const capabilityNumbers = [
  { value: "30", label: "Services across six disciplines" }, // derived from services.ts
  { value: "5", label: "Phase delivery process" },
  { value: "3", label: "Engagement models" },
  { value: "AA", label: "WCAG 2.1 accessibility target" },
];
