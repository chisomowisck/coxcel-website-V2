/** "How we work" phases used on Home and Process. */
export const phases = [
  {
    title: "Discover",
    text: "We learn your goals, users, constraints and data, and agree what success will be measured by.",
    outputs: ["Goals and success measures", "Scope and priorities", "Risks and assumptions"],
  },
  {
    title: "Design",
    text: "We shape architecture, journeys and interfaces, and test them with prototypes before building.",
    outputs: ["Architecture", "Prototypes", "Delivery plan"],
  },
  {
    title: "Build",
    text: "We deliver in short sprints, demonstrating working software and adjusting with your feedback.",
    outputs: ["Working increments", "Automated tests", "Sprint reviews"],
  },
  {
    title: "Launch",
    text: "We test, secure and release carefully, with training, documentation and a rollback plan.",
    outputs: ["Release plan", "Training", "Documentation"],
  },
  {
    title: "Grow",
    text: "We monitor, support and improve, using real usage data to decide what comes next.",
    outputs: ["Monitoring", "Support", "Improvement backlog"],
  },
] as const;
