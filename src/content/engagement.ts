/** Engagement models described on the Process page. */
export const engagementModels = [
  {
    slug: "fixed-scope",
    title: "Fixed scope",
    bestFor: "Well-defined projects such as a website, an MVP, an audit or a specific integration.",
    how: [
      "A paid discovery phase defines scope, deliverables and acceptance criteria",
      "We agree a fixed price and timeline for that scope",
      "Changes go through a simple, priced change request",
      "Payments are tied to milestones you can see and test",
    ],
    commercial: "Fixed price per milestone",
    timeline: "Typically 2 to 16 weeks",
  },
  {
    slug: "dedicated-team",
    title: "Dedicated team",
    bestFor: "Evolving products and larger programmes where priorities will change as you learn.",
    how: [
      "A cross-functional team sized to your roadmap, led by a Coxcel delivery lead",
      "You set priorities each sprint; we plan, build and report",
      "Team size can scale up or down with one month's notice",
      "Full transparency on velocity, budget and quality",
    ],
    commercial: "Monthly rate per team member",
    timeline: "Minimum three months, then rolling",
  },
  {
    slug: "retainer",
    title: "Retainer",
    bestFor: "Ongoing support, maintenance, marketing or advisory work with a predictable monthly budget.",
    how: [
      "A monthly allowance of hours or deliverables",
      "Agreed service levels for support requests",
      "Monthly planning and reporting meeting",
      "Unused capacity can roll into improvement work",
    ],
    commercial: "Fixed monthly fee",
    timeline: "Rolling, with a three-month initial term",
  },
] as const;
