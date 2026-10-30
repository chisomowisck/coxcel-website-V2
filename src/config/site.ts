/**
 * Site-wide configuration. Edit contact details, social links and feature flags here.
 * Every value marked TODO is a placeholder that must be replaced before launch.
 */

export const site = {
  name: "Coxcel",
  legalName: "Coxcel", // TODO: replace with the registered company name
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://coxcel.com",
  tagline: "Software, data and AI built to move your business forward.",
  description:
    "Coxcel designs and builds software, data platforms, AI automation and digital growth programmes for organisations that want measurable progress.",
  foundedYear: 2026, // TODO: confirm founding year (used in the copyright line)

  email: "info@coxcel.com",

  phones: {
    // TODO: replace with the real main line before launch
    main: { label: "Main line", display: "+00 00 000 0000", href: "tel:+0000000000" },
    // TODO: replace with the real WhatsApp / mobile number before launch
    whatsapp: {
      label: "WhatsApp / mobile",
      display: "+00 00 000 0000",
      href: "https://wa.me/0000000000",
    },
  },

  // TODO: replace with the real office address
  address: {
    lines: ["Office address line 1", "City, Postcode", "Country"],
    mapLabel: "Office location (map placeholder)",
  },

  // TODO: confirm business hours and time zone
  hours: [
    { days: "Monday to Friday", time: "08:00 to 17:00" },
    { days: "Saturday", time: "By appointment" },
    { days: "Sunday and public holidays", time: "Closed" },
  ],
  timeZoneNote: "Local time", // TODO: name the time zone, for example "CAT (UTC+2)"

  // TODO: replace every social URL with the real profile
  socials: [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/coxcel" },
    { name: "X", href: "https://x.com/coxcel" },
    { name: "GitHub", href: "https://github.com/coxcel" },
    { name: "Facebook", href: "https://www.facebook.com/coxcel" },
    { name: "Instagram", href: "https://www.instagram.com/coxcel" },
  ],

  /**
   * Proof sections. Each is fully built and filled with labelled sample content.
   * Switch a flag to false to hide that section everywhere.
   */
  features: {
    caseStudies: true, // SAMPLE content: replace before launch
    team: true, // SAMPLE content: replace before launch
    capabilityNumbers: true, // SAMPLE content: replace before launch
    testimonials: false, // SAMPLE content: hidden until real quotes exist
    clientLogos: false, // SAMPLE content: hidden until real logos are approved
  },

  budgetRanges: [
    "Under $10k",
    "$10k to $25k",
    "$25k to $50k",
    "$50k to $100k",
    "$100k+",
    "Not sure yet",
  ],
} as const;

export type Site = typeof site;

export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
] as const;

export const companyNav = [
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalNav = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Cookie notice", href: "/legal/cookies" },
] as const;
