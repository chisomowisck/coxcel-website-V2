/** Industries served. Drives the Industries page and the Home industries section. */
export type Industry = {
  slug: string;
  name: string;
  summary: string;
  challenges: string[];
  services: string[]; // service slugs
};

export const industries: Industry[] = [
  {
    slug: "finance",
    name: "Finance",
    summary:
      "Banks, microfinance institutions, insurers and fintechs that need secure, compliant and auditable systems.",
    challenges: [
      "Regulatory reporting that is manual and time-consuming",
      "Customer onboarding and KYC that frustrates applicants",
      "Fraud and credit risk assessed without enough data",
    ],
    services: [
      "web-application-development",
      "business-intelligence-reporting",
      "predictive-analytics-machine-learning",
      "cybersecurity-compliance-reviews",
    ],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    summary: "Retailers and distributors selling in store, online and to trade customers.",
    challenges: [
      "Stock and orders out of sync across channels",
      "Low online conversion, especially on mobile",
      "Limited insight into customer behaviour and margin",
    ],
    services: [
      "ecommerce-development",
      "data-visualization-bi-dashboards",
      "analytics-conversion-optimisation",
      "paid-media",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary:
      "Clinics, hospitals, labs and health programmes handling sensitive data and critical workflows.",
    challenges: [
      "Patient records spread across paper and disconnected systems",
      "Appointment and referral processes that waste staff time",
      "Programme reporting to funders and regulators",
    ],
    services: [
      "custom-software-development",
      "workflow-business-process-automation",
      "data-engineering-pipelines",
      "cybersecurity-compliance-reviews",
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    summary:
      "Transport, freight and distribution businesses where visibility and timing drive margin.",
    challenges: [
      "Limited real-time visibility of vehicles and consignments",
      "Manual paperwork for proof of delivery and customs",
      "Route and capacity planning done by hand",
    ],
    services: [
      "mobile-app-development",
      "api-development-systems-integration",
      "document-processing-intelligent-search",
      "predictive-analytics-machine-learning",
    ],
  },
  {
    slug: "education",
    name: "Education",
    summary: "Schools, universities and training providers serving learners on and off campus.",
    challenges: [
      "Admissions and fee collection handled on paper",
      "Learning platforms that are hard to use on mobile",
      "Little data on learner progress and retention",
    ],
    services: [
      "web-application-development",
      "mobile-app-development",
      "data-analysis",
      "ai-agents-chatbots",
    ],
  },
  {
    slug: "public-sector",
    name: "Public sector",
    summary:
      "Government departments, agencies and development programmes delivering services to citizens.",
    challenges: [
      "Citizen services that require in-person visits",
      "Legacy systems that are costly and hard to change",
      "Strict procurement, accessibility and data protection requirements",
    ],
    services: [
      "digital-transformation",
      "website-development",
      "cloud-solutions-migration",
      "technology-audits-architecture-reviews",
    ],
  },
  {
    slug: "startups",
    name: "Startups",
    summary:
      "Founders and early-stage teams who need to validate quickly and build on solid foundations.",
    challenges: [
      "Limited runway to prove the product",
      "No in-house technical leadership",
      "Investors asking for traction and technical due diligence",
    ],
    services: [
      "mvp-product-strategy",
      "ui-ux-product-design",
      "it-consultancy",
      "digital-marketing-strategy",
    ],
  },
];
