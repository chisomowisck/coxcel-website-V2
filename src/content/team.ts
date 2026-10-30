/**
 * Team members shown on About.
 * SAMPLE: replace before launch. Names and roles below are placeholders, not real people.
 * Hide the section with site.features.team = false.
 */
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  sample: boolean;
};

export const team: TeamMember[] = [
  // SAMPLE: replace before launch
  {
    name: "Team member name",
    role: "Founder and Managing Director",
    bio: "Sets direction, leads client relationships and oversees delivery quality.",
    initials: "FD",
    sample: true,
  },
  // SAMPLE: replace before launch
  {
    name: "Team member name",
    role: "Head of Engineering",
    bio: "Leads architecture, engineering standards and the delivery teams.",
    initials: "HE",
    sample: true,
  },
  // SAMPLE: replace before launch
  {
    name: "Team member name",
    role: "Head of Data and AI",
    bio: "Leads data platforms, analytics and applied AI engagements.",
    initials: "DA",
    sample: true,
  },
  // SAMPLE: replace before launch
  {
    name: "Team member name",
    role: "Design Lead",
    bio: "Leads research, product design and the Coxcel design system.",
    initials: "DL",
    sample: true,
  },
  // SAMPLE: replace before launch
  {
    name: "Team member name",
    role: "Growth Lead",
    bio: "Leads digital marketing strategy, SEO and paid media.",
    initials: "GL",
    sample: true,
  },
  // SAMPLE: replace before launch
  {
    name: "Team member name",
    role: "Delivery Manager",
    bio: "Plans engagements, manages risk and keeps clients informed.",
    initials: "DM",
    sample: true,
  },
];
