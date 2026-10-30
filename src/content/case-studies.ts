/**
 * Case studies. Drives the Work index, detail pages and the Home "Selected work" section.
 * SAMPLE: replace before launch. These describe representative projects, not real clients.
 * Hide them all with site.features.caseStudies = false.
 */
export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  sector: string;
  services: string[]; // service slugs
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string[];
  visual: "dashboard" | "pipeline" | "agent" | "code";
  sample: boolean;
};

export const caseStudies: CaseStudy[] = [
  // SAMPLE: replace before launch
  {
    slug: "regional-distributor-sales-dashboard",
    title: "A single view of sales and stock for a regional distributor",
    client: "Sample client: regional distributor",
    sector: "Retail & E-commerce",
    services: ["data-engineering-pipelines", "data-visualization-bi-dashboards"],
    summary:
      "Replacing a weekly spreadsheet exercise with automated dashboards that sales and finance both trust.",
    challenge:
      "Sales, stock and credit data lived in an ERP, two spreadsheets and a delivery app. Compiling the weekly report took two people most of a day, and figures rarely matched finance.",
    approach: [
      "Mapped each metric to its source and agreed definitions with sales and finance",
      "Built nightly pipelines into a cloud warehouse with reconciliation checks",
      "Designed role-based dashboards for directors, branch managers and sales staff",
      "Trained branch managers and set a monthly review of the definitions",
    ],
    outcome: [
      "Weekly reporting moves from manual compilation to automatic refresh",
      "One agreed definition for each sales and stock metric",
      "Branch managers see stock and credit positions the same morning",
    ],
    visual: "dashboard",
    sample: true,
  },
  // SAMPLE: replace before launch
  {
    slug: "clinic-network-patient-booking",
    title: "Online booking and reminders for a network of clinics",
    client: "Sample client: clinic network",
    sector: "Healthcare",
    services: [
      "web-application-development",
      "mobile-app-development",
      "workflow-business-process-automation",
    ],
    summary: "A booking platform and staff app that reduces phone queues and missed appointments.",
    challenge:
      "Patients could only book by phone during opening hours. Reception staff were overwhelmed and missed appointments were common because reminders were sent by hand.",
    approach: [
      "Interviewed reception staff and patients to map the booking journey",
      "Built a responsive booking site and a staff scheduling app",
      "Automated SMS and WhatsApp reminders with easy rescheduling",
      "Integrated with the existing patient records system",
    ],
    outcome: [
      "Patients can book and reschedule at any time",
      "Reception time shifts from phone calls to patient care",
      "Automated reminders replace manual calls",
    ],
    visual: "code",
    sample: true,
  },
  // SAMPLE: replace before launch
  {
    slug: "lender-document-processing",
    title: "Automated document checks for a lending business",
    client: "Sample client: lending business",
    sector: "Finance",
    services: [
      "document-processing-intelligent-search",
      "ai-integration",
      "workflow-business-process-automation",
    ],
    summary:
      "Extracting and checking applicant documents so credit officers focus on decisions, not data entry.",
    challenge:
      "Loan applications arrived with scanned IDs, payslips and bank statements. Officers typed key fields by hand and applications queued for days.",
    approach: [
      "Defined an extraction schema and validation rules with the credit team",
      "Built an ingestion pipeline with OCR and structured extraction",
      "Added confidence scores and a human review queue for uncertain fields",
      "Logged every decision for audit",
    ],
    outcome: [
      "Key fields are pre-filled for officers to confirm",
      "Uncertain extractions are routed to people, not guessed",
      "A complete audit trail for each application",
    ],
    visual: "pipeline",
    sample: true,
  },
  // SAMPLE: replace before launch
  {
    slug: "training-provider-support-assistant",
    title: "A knowledge assistant for a training provider's support team",
    client: "Sample client: training provider",
    sector: "Education",
    services: ["ai-agents-chatbots", "document-processing-intelligent-search"],
    summary:
      "Answering learner questions from course policies, with citations and a clean hand-over to staff.",
    challenge:
      "The support inbox received hundreds of similar questions about enrolment, fees and certificates each week, and answers varied by staff member.",
    approach: [
      "Collected and cleaned policy documents and past answers",
      "Built a retrieval-based assistant that cites its sources",
      "Defined escalation rules for payments and complaints",
      "Measured answer quality weekly against a test set",
    ],
    outcome: [
      "Consistent answers grounded in current policy",
      "Staff handle exceptions instead of repeat questions",
      "Clear reporting on the questions learners ask most",
    ],
    visual: "agent",
    sample: true,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
