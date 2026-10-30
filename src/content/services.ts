/**
 * Single source of truth for services. Pages, navigation, sitemap, structured data and the
 * contact form options are all generated from this file.
 */

export type ServiceGroupId = "build" | "data" | "ai" | "cloud" | "advisory" | "growth";

export type IconName =
  | "Code" | "Globe" | "AppWindow" | "Smartphone" | "ShoppingCart" | "PenTool" | "Rocket" | "Plug"
  | "ChartColumn" | "LayoutDashboard" | "Database" | "ChartPie" | "TrendingUp" | "Sparkles" | "Bot"
  | "Workflow" | "FileSearch" | "Cloud" | "GitBranch" | "ShieldCheck" | "TestTube" | "Wrench"
  | "Lightbulb" | "Compass" | "ScanSearch" | "Target" | "Search" | "MousePointerClick" | "Newspaper"
  | "Gauge";

export type ServiceGroup = {
  id: ServiceGroupId;
  label: string;
  /** Display name as written in the brief, for example "Build: Software & Product". */
  name: string;
  title: string;
  summary: string;
};

export type Service = {
  slug: string;
  title: string;
  group: ServiceGroupId;
  icon: IconName;
  summary: string;
  valueProp: string;
  problems: string[];
  deliverables: string[];
  process: { title: string; text: string }[];
  technologies: string[];
  faqs: { q: string; a: string }[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "build",
    label: "Build",
    name: "Build: Software & Product",
    title: "Software & Product",
    summary: "Websites, web and mobile applications, and the product thinking that makes them worth building.",
  },
  {
    id: "data",
    label: "Data",
    name: "Data: Analytics & Intelligence",
    title: "Analytics & Intelligence",
    summary: "Pipelines, dashboards and models that turn operational data into decisions.",
  },
  {
    id: "ai",
    label: "AI",
    name: "AI: Intelligent Automation",
    title: "Intelligent Automation",
    summary: "Practical AI inside your products and workflows, with guardrails and measurable outcomes.",
  },
  {
    id: "cloud",
    label: "Cloud",
    name: "Cloud & Operations",
    title: "Cloud & Operations",
    summary: "Reliable infrastructure, delivery pipelines, security reviews and ongoing support.",
  },
  {
    id: "advisory",
    label: "Advisory",
    name: "Advisory",
    title: "Consulting & Reviews",
    summary: "Independent technology advice, transformation roadmaps and architecture reviews.",
  },
  {
    id: "growth",
    label: "Growth",
    name: "Growth: Digital Marketing",
    title: "Digital Marketing",
    summary: "Search, paid media, content and conversion work tied to pipeline, not vanity metrics.",
  },
];

/** Standard delivery steps reused where a service follows the core Coxcel process. */
const buildProcess = [
  { title: "Discover", text: "Workshops with your team to agree goals, users, constraints and what success looks like." },
  { title: "Design", text: "Architecture, user flows and interface designs, validated with clickable prototypes." },
  { title: "Build", text: "Two-week sprints with working software demonstrated at the end of each one." },
  { title: "Launch", text: "Testing, security checks, data migration and a planned, reversible release." },
  { title: "Grow", text: "Monitoring, support and a backlog of improvements driven by real usage." },
];

const dataProcess = [
  { title: "Assess", text: "Map data sources, owners and quality, and agree the questions the business needs answered." },
  { title: "Model", text: "Define metrics, a clean data model and the logic behind every number." },
  { title: "Build", text: "Pipelines, warehouse tables and reports built iteratively with your analysts." },
  { title: "Validate", text: "Reconcile figures against source systems and sign off definitions with stakeholders." },
  { title: "Adopt", text: "Training, documentation and a support rhythm so the work is used, not shelved." },
];

const aiProcess = [
  { title: "Identify", text: "Pick use cases with clear value, available data and acceptable risk." },
  { title: "Prototype", text: "A working proof of concept on your data within weeks, measured against a baseline." },
  { title: "Harden", text: "Evaluation suites, guardrails, access controls, logging and cost limits." },
  { title: "Integrate", text: "Connect to your systems and roll out to a pilot group before scaling." },
  { title: "Improve", text: "Monitor quality and cost in production and refine prompts, models and data." },
];

const advisoryProcess = [
  { title: "Listen", text: "Interviews with leadership and teams to understand goals, pressures and history." },
  { title: "Assess", text: "Review systems, processes, contracts and capabilities against your objectives." },
  { title: "Recommend", text: "Clear options with costs, risks and trade-offs, not a single unexplained answer." },
  { title: "Plan", text: "A sequenced roadmap with owners, milestones and quick wins." },
  { title: "Support", text: "Optional ongoing guidance as decisions are made and work is delivered." },
];

const growthProcess = [
  { title: "Audit", text: "Review analytics, channels, content and competitors to establish a baseline." },
  { title: "Plan", text: "Set targets tied to leads or revenue and choose the channels most likely to reach them." },
  { title: "Launch", text: "Build campaigns, pages and content with tracking in place from day one." },
  { title: "Measure", text: "Weekly reporting on the numbers that matter, with plain-English commentary." },
  { title: "Optimise", text: "Test, learn and move budget towards what is working." },
];

export const services: Service[] = [
  // Build: Software & Product
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    group: "build",
    icon: "Code",
    summary: "Bespoke software built around how your organisation actually works, not how an off-the-shelf tool assumes it does.",
    valueProp: "When packaged software forces workarounds, we build systems that fit your processes and scale with you.",
    problems: [
      "Teams rely on spreadsheets and manual copying between systems",
      "Off-the-shelf tools cover 70% of needs and the rest is painful",
      "A legacy system is hard to change and few people understand it",
      "Growth is limited by software that cannot handle more users or data",
    ],
    deliverables: [
      "Discovery report with scope, architecture and estimates",
      "Production-ready application with source code you own",
      "Automated tests and continuous integration",
      "Technical and user documentation",
      "Deployment to your cloud or ours",
      "Handover sessions and optional support plan",
    ],
    process: buildProcess,
    technologies: ["TypeScript", "Node.js", ".NET", "Python", "Java", "PostgreSQL", "SQL Server", "Docker"],
    faqs: [
      { q: "Who owns the code?", a: "You do. Source code, designs and documentation are transferred to you on payment, and we work in repositories you control wherever possible." },
      { q: "Can you work with our existing systems?", a: "Yes. Most projects integrate with existing databases, ERPs, CRMs or identity providers, and we plan those integrations during discovery." },
      { q: "How do you estimate cost?", a: "After a short discovery we give a fixed price for a defined scope or a monthly rate for a dedicated team. See our engagement models on the Process page." },
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    group: "build",
    icon: "Globe",
    summary: "Fast, accessible corporate sites, landing pages and CMS-driven sites your team can update without a developer.",
    valueProp: "A website that loads quickly, ranks well, meets accessibility standards and is easy for your team to keep current.",
    problems: [
      "The current site is slow, dated or hard to update",
      "Marketing waits on developers for simple content changes",
      "Poor mobile experience and low search visibility",
      "Enquiry forms are unreliable or go unanswered",
    ],
    deliverables: [
      "Sitemap, content plan and wireframes",
      "Visual design system aligned to your brand",
      "Responsive build with a headless or traditional CMS",
      "Technical SEO, analytics and consent setup",
      "Accessibility review against WCAG 2.1 AA",
      "Training for content editors",
    ],
    process: buildProcess,
    technologies: ["Next.js", "React", "WordPress", "Sanity", "Contentful", "Tailwind CSS", "Vercel"],
    faqs: [
      { q: "Which CMS do you recommend?", a: "It depends on who edits the site and how often. We recommend after understanding your team, then build editing screens around your content." },
      { q: "Will the site be accessible?", a: "Yes. We design and test against WCAG 2.1 AA, including keyboard navigation, colour contrast and screen reader checks." },
      { q: "How long does a website take?", a: "A focused landing page can take two to three weeks. A full corporate site with a CMS usually takes six to ten weeks." },
    ],
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    group: "build",
    icon: "AppWindow",
    summary: "SaaS products, customer portals and internal dashboards with secure accounts, roles and integrations.",
    valueProp: "Browser-based applications that are secure, responsive and built to grow from first customers to thousands.",
    problems: [
      "Customers need self-service access to accounts, orders or documents",
      "An internal process needs a proper tool instead of shared files",
      "A SaaS idea needs a reliable, multi-tenant foundation",
      "An existing app is slow, fragile or hard to extend",
    ],
    deliverables: [
      "Product requirements and user journeys",
      "Interface design and component library",
      "Authentication, roles and permissions",
      "APIs and integrations with your existing systems",
      "Automated testing and deployment pipeline",
      "Monitoring, logging and error tracking",
    ],
    process: buildProcess,
    technologies: ["React", "Next.js", "TypeScript", "Node.js", ".NET", "PostgreSQL", "Redis", "AWS", "Azure"],
    faqs: [
      { q: "Can you build multi-tenant SaaS?", a: "Yes. We design tenancy, billing and data isolation early because they are expensive to retrofit." },
      { q: "Do you handle hosting?", a: "We can deploy to your cloud account or manage hosting for you under a support agreement." },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    group: "build",
    icon: "Smartphone",
    summary: "iOS, Android and cross-platform apps with offline support, notifications and app store delivery.",
    valueProp: "Mobile apps people keep using: fast, reliable on poor connections and simple to update.",
    problems: [
      "Field teams need tools that work offline",
      "Customers expect an app rather than a mobile website",
      "Two separate native apps are expensive to maintain",
      "An existing app has poor reviews and frequent crashes",
    ],
    deliverables: [
      "User research and app flow design",
      "Cross-platform or native app builds",
      "Backend APIs and push notifications",
      "Offline data sync where needed",
      "App Store and Google Play submission",
      "Crash reporting and analytics",
    ],
    process: buildProcess,
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase", "REST and GraphQL APIs"],
    faqs: [
      { q: "Native or cross-platform?", a: "Cross-platform suits most business apps and halves maintenance. We recommend native where you need deep device features or maximum performance." },
      { q: "Do you publish to the app stores?", a: "Yes. We prepare listings, handle review requirements and publish under your developer accounts." },
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    group: "build",
    icon: "ShoppingCart",
    summary: "Online stores and B2B ordering portals connected to payments, inventory, fulfilment and accounting.",
    valueProp: "Commerce that converts, with stock, orders and payments flowing cleanly into the systems behind it.",
    problems: [
      "Orders are re-keyed by hand into stock or accounting systems",
      "Checkout abandonment is high, especially on mobile",
      "Trade customers need pricing and ordering that consumer platforms do not support",
      "The store struggles during promotions and peak periods",
    ],
    deliverables: [
      "Platform recommendation and store architecture",
      "Storefront design and build",
      "Payment gateway and local payment method integration",
      "Inventory, ERP and fulfilment integrations",
      "Product data migration",
      "Conversion tracking and performance tuning",
    ],
    process: buildProcess,
    technologies: ["Shopify", "WooCommerce", "Medusa", "Stripe", "Next.js", "Headless commerce APIs"],
    faqs: [
      { q: "Which platform should we use?", a: "Hosted platforms suit most retailers. Custom or headless builds make sense for complex pricing, B2B workflows or high traffic." },
      { q: "Can you connect local payment methods?", a: "Yes. We integrate card, mobile money and bank transfer providers that operate in your markets." },
    ],
  },
  {
    slug: "ui-ux-product-design",
    title: "UI/UX & Product Design",
    group: "build",
    icon: "PenTool",
    summary: "Research, user flows, interface design and design systems that make products clear and easy to use.",
    valueProp: "Design grounded in how your users work, tested before it is built, and documented so it stays consistent.",
    problems: [
      "Users struggle to complete key tasks or need constant support",
      "The product looks inconsistent across screens and teams",
      "Developers build from vague requirements and rework is common",
      "Stakeholders disagree on what the product should be",
    ],
    deliverables: [
      "User interviews and usability findings",
      "User journeys and information architecture",
      "Wireframes and high-fidelity interface designs",
      "Interactive prototypes",
      "Design system with reusable components",
      "Developer-ready specifications",
    ],
    process: [
      { title: "Research", text: "Interviews, analytics and task reviews to understand users and their goals." },
      { title: "Define", text: "Agree problems, priorities and success measures with your team." },
      { title: "Explore", text: "Sketch and compare alternative flows before committing to detail." },
      { title: "Prototype", text: "Clickable prototypes tested with real users." },
      { title: "Handover", text: "Design system and specifications that developers can build from directly." },
    ],
    technologies: ["Figma", "FigJam", "Maze", "Design tokens", "Storybook"],
    faqs: [
      { q: "Can you design without building?", a: "Yes. We regularly design for in-house development teams and support them during implementation." },
      { q: "Do you test with real users?", a: "Yes. Even five sessions with representative users reliably surface the biggest problems." },
    ],
  },
  {
    slug: "mvp-product-strategy",
    title: "MVP & Product Strategy",
    group: "build",
    icon: "Rocket",
    summary: "Shape an idea into a focused first release, test it with real users and decide what to build next.",
    valueProp: "Spend less to learn more: a focused MVP that tests your riskiest assumptions with real customers.",
    problems: [
      "An idea has broad scope and an uncertain market",
      "Investors or leadership want evidence before full funding",
      "A previous build took too long and missed what users wanted",
      "The team cannot agree what belongs in version one",
    ],
    deliverables: [
      "Assumption map and riskiest-assumption tests",
      "Prioritised feature scope for the first release",
      "Clickable prototype for early feedback",
      "MVP build in weeks, not months",
      "Analytics and feedback loops",
      "Post-launch roadmap based on evidence",
    ],
    process: [
      { title: "Frame", text: "Clarify the customer, problem and business model you are betting on." },
      { title: "Prioritise", text: "Cut scope to the smallest product that can test the riskiest assumptions." },
      { title: "Prototype", text: "Put something clickable in front of customers within two weeks." },
      { title: "Build", text: "Deliver the MVP on a foundation that can grow if it works." },
      { title: "Learn", text: "Measure usage and decide what to build, change or stop." },
    ],
    technologies: ["Next.js", "React Native", "Supabase", "Firebase", "Stripe", "PostHog"],
    faqs: [
      { q: "How small is an MVP?", a: "Small enough to ship in six to ten weeks and still answer whether customers will use and pay for it." },
      { q: "Will we have to rebuild later?", a: "Not if we plan for it. We choose a stack and architecture that can grow, while keeping the first release lean." },
    ],
  },
  {
    slug: "api-development-systems-integration",
    title: "API Development & Systems Integration",
    group: "build",
    icon: "Plug",
    summary: "Well-documented APIs and integrations that connect ERPs, CRMs, payment providers and partner systems.",
    valueProp: "Systems that share data reliably, so information is entered once and is correct everywhere.",
    problems: [
      "The same data is typed into several systems by hand",
      "Integrations break silently and nobody knows until a customer complains",
      "Partners need secure access to your data or services",
      "A vendor API change causes outages",
    ],
    deliverables: [
      "Integration map and data ownership model",
      "REST or GraphQL APIs with OpenAPI documentation",
      "Middleware, queues and retry handling",
      "Authentication and rate limiting",
      "Monitoring and alerting for every integration",
      "Runbooks for common failures",
    ],
    process: buildProcess,
    technologies: ["REST", "GraphQL", "OpenAPI", "Webhooks", "Azure Service Bus", "AWS SQS", "Postman", "OAuth 2.0"],
    faqs: [
      { q: "Can you integrate with our ERP?", a: "Usually, yes. We have worked with common ERP and CRM APIs and can build adapters where only files or databases are available." },
      { q: "How do you stop integrations failing silently?", a: "Every integration gets health checks, retries, dead-letter handling and alerts to a named owner." },
    ],
  },

  // Data: Analytics & Intelligence
  {
    slug: "data-analysis",
    title: "Data Analysis",
    group: "data",
    icon: "ChartColumn",
    summary: "Focused analysis that answers specific business questions with clear findings and recommendations.",
    valueProp: "Clear answers to the questions that matter, backed by data you can trace and trust.",
    problems: [
      "Leadership has questions the current reports cannot answer",
      "Data exists but nobody has time to analyse it properly",
      "Decisions are made on instinct because numbers conflict",
      "A one-off investigation is needed before a major decision",
    ],
    deliverables: [
      "Agreed questions and hypotheses",
      "Cleaned, documented analysis datasets",
      "Findings report with charts and plain-English conclusions",
      "Recommendations with expected impact",
      "Reproducible notebooks or queries",
    ],
    process: dataProcess,
    technologies: ["SQL", "Python", "pandas", "Excel", "Power BI", "Jupyter"],
    faqs: [
      { q: "What do you need from us?", a: "Access to the relevant data, a business owner for the questions, and an hour or two of their time each week." },
      { q: "How quickly can we get answers?", a: "Most focused analyses take two to four weeks depending on data access and quality." },
    ],
  },
  {
    slug: "data-visualization-bi-dashboards",
    title: "Data Visualization & BI Dashboards",
    group: "data",
    icon: "LayoutDashboard",
    summary: "Dashboards in Power BI, Tableau, Looker or custom web apps that people check daily and trust.",
    valueProp: "Dashboards designed around decisions, with consistent definitions and numbers that reconcile.",
    problems: [
      "Reports take days to compile by hand every month",
      "Different teams quote different numbers for the same metric",
      "Existing dashboards are cluttered and rarely used",
      "Executives need a single view of performance",
    ],
    deliverables: [
      "Metric definitions agreed with stakeholders",
      "Dashboard wireframes and visual design",
      "Semantic model and row-level security",
      "Dashboards in your chosen BI tool or a custom web app",
      "Scheduled refresh and data quality checks",
      "User training and documentation",
    ],
    process: dataProcess,
    technologies: ["Power BI", "Tableau", "Looker", "Looker Studio", "Metabase", "D3.js", "Recharts"],
    faqs: [
      { q: "Which BI tool should we use?", a: "Usually the one that fits your existing licences and skills. We also build custom dashboards when you need them inside your own product." },
      { q: "Can dashboards update automatically?", a: "Yes. We set up scheduled or near real-time refresh depending on the source systems." },
    ],
  },
  {
    slug: "data-engineering-pipelines",
    title: "Data Engineering & Pipelines",
    group: "data",
    icon: "Database",
    summary: "ETL and ELT pipelines and cloud data warehouses that bring scattered data into one reliable place.",
    valueProp: "A dependable data foundation: tested pipelines, documented models and a warehouse your analysts can build on.",
    problems: [
      "Data lives in many systems and spreadsheets with no single source",
      "Reports break whenever a source system changes",
      "Analysts spend most of their time preparing data",
      "Data volumes have outgrown the current setup",
    ],
    deliverables: [
      "Source inventory and target architecture",
      "Ingestion pipelines with scheduling and monitoring",
      "Warehouse or lakehouse data models",
      "Transformation code with tests and documentation",
      "Data quality checks and alerting",
      "Access controls and cost management",
    ],
    process: dataProcess,
    technologies: ["dbt", "Airflow", "Azure Data Factory", "Fivetran", "Snowflake", "BigQuery", "Databricks", "PostgreSQL"],
    faqs: [
      { q: "Do we need a data warehouse?", a: "If you report across more than two or three systems, a warehouse usually saves time and errors. We will tell you if a simpler setup is enough." },
      { q: "How do you keep cloud costs under control?", a: "We size compute to workloads, schedule jobs sensibly and set budgets and alerts from the start." },
    ],
  },
  {
    slug: "business-intelligence-reporting",
    title: "Business Intelligence & Reporting",
    group: "data",
    icon: "ChartPie",
    summary: "Regular management, financial and operational reporting that is automated, accurate and on time.",
    valueProp: "Reporting that arrives on time, reconciles with finance and frees your team from manual compilation.",
    problems: [
      "Month-end reporting takes too long and relies on one person",
      "Board packs are assembled manually from many sources",
      "Regulatory or donor reporting is stressful and error-prone",
      "Managers lack timely operational figures",
    ],
    deliverables: [
      "Reporting inventory and rationalisation plan",
      "Automated report packs and distribution",
      "KPI framework with owners and targets",
      "Reconciliation and audit trail",
      "Self-service reporting for managers",
    ],
    process: dataProcess,
    technologies: ["Power BI", "SQL Server Reporting Services", "Excel", "Tableau", "Python", "Paginated reports"],
    faqs: [
      { q: "Can you automate our board pack?", a: "Usually most of it. We automate the data and charts and leave room for written commentary." },
      { q: "How is this different from dashboards?", a: "Dashboards support daily exploration. Reporting delivers fixed, reconciled figures on a schedule for governance and compliance." },
    ],
  },
  {
    slug: "predictive-analytics-machine-learning",
    title: "Predictive Analytics & Machine Learning",
    group: "data",
    icon: "TrendingUp",
    summary: "Forecasting, churn, risk and recommendation models built on your data and deployed into daily operations.",
    valueProp: "Models that make measurable predictions, are explainable to stakeholders and run reliably in production.",
    problems: [
      "Demand or cash flow forecasts are guesswork",
      "Customer churn is noticed too late to act",
      "Fraud or credit risk is assessed manually",
      "Teams want to act on data but do not know which signals matter",
    ],
    deliverables: [
      "Use case assessment and data readiness review",
      "Baseline and candidate models with evaluation",
      "Explainability reports for stakeholders",
      "Model deployment as an API or scheduled job",
      "Monitoring for drift and performance",
      "Retraining process and documentation",
    ],
    process: aiProcess,
    technologies: ["Python", "scikit-learn", "XGBoost", "PyTorch", "MLflow", "Azure ML", "SageMaker", "Vertex AI"],
    faqs: [
      { q: "How much data do we need?", a: "It depends on the problem. We assess your data first and tell you honestly whether a model will beat simpler methods." },
      { q: "Can people understand the model's decisions?", a: "Yes. We favour interpretable models where possible and provide explanations for individual predictions." },
    ],
  },

  // AI: Intelligent Automation
  {
    slug: "ai-integration",
    title: "AI Integration",
    group: "ai",
    icon: "Sparkles",
    summary: "Add large language models to existing products and workflows for drafting, summarising, classifying and extracting.",
    valueProp: "AI features that solve a defined problem, are evaluated against real examples and keep your data protected.",
    problems: [
      "Staff spend hours summarising, drafting or classifying text",
      "Customers expect smarter search and assistance in your product",
      "Leadership wants an AI strategy grounded in real use cases",
      "Concerns about data privacy, accuracy and cost are blocking adoption",
    ],
    deliverables: [
      "Use case shortlist with value and risk assessment",
      "Prototype integrated with your product or workflow",
      "Evaluation set and quality benchmarks",
      "Guardrails, logging and human review where needed",
      "Cost controls and model selection",
      "Production deployment and monitoring",
    ],
    process: aiProcess,
    technologies: ["Claude", "OpenAI", "Azure OpenAI", "Amazon Bedrock", "Vertex AI", "LangChain", "Vercel AI SDK"],
    faqs: [
      { q: "Is our data used to train the model?", a: "We use enterprise API terms and configurations where your data is not used for model training, and we document data flows for your review." },
      { q: "How do you measure quality?", a: "We build an evaluation set from real examples and track accuracy, failure cases and cost for every change." },
    ],
  },
  {
    slug: "ai-agents-chatbots",
    title: "AI Agents & Chatbots",
    group: "ai",
    icon: "Bot",
    summary: "Assistants for customers and staff that answer from your knowledge, take actions in your systems and hand over to people when needed.",
    valueProp: "Assistants that resolve real requests, stay within clear boundaries and escalate to people at the right moment.",
    problems: [
      "Support teams answer the same questions every day",
      "Customers wait for answers outside office hours",
      "Staff cannot find policies and procedures quickly",
      "Simple requests still need someone to log into several systems",
    ],
    deliverables: [
      "Conversation design and escalation rules",
      "Knowledge ingestion from your documents and systems",
      "Agent tools for approved actions such as bookings or status checks",
      "Web, WhatsApp or Microsoft Teams channels",
      "Evaluation, safety tests and analytics",
      "Admin controls for content and behaviour",
    ],
    process: aiProcess,
    technologies: ["Claude", "OpenAI", "Model Context Protocol", "WhatsApp Business API", "Microsoft Teams", "Vector databases"],
    faqs: [
      { q: "What if the assistant does not know the answer?", a: "It says so and hands over to a person with the conversation history, rather than guessing." },
      { q: "Can it take actions in our systems?", a: "Yes, through a limited set of approved tools with permissions and logging. High-impact actions can require human confirmation." },
    ],
  },
  {
    slug: "workflow-business-process-automation",
    title: "Workflow & Business Process Automation",
    group: "ai",
    icon: "Workflow",
    summary: "Automate approvals, hand-offs, data entry and notifications across your existing tools.",
    valueProp: "Remove repetitive work from your team's day and make every step of a process visible and auditable.",
    problems: [
      "Approvals stall in email inboxes",
      "Staff copy data between systems every day",
      "Nobody can see where a request is in the process",
      "Errors creep in at every manual hand-off",
    ],
    deliverables: [
      "Process maps of current and future state",
      "Automated workflows with approvals and notifications",
      "Integrations with email, forms, ERP and CRM",
      "AI steps for reading and classifying documents where useful",
      "Dashboards showing volumes and bottlenecks",
      "Training and process documentation",
    ],
    process: aiProcess,
    technologies: ["Power Automate", "n8n", "Zapier", "Make", "Temporal", "Azure Logic Apps", "Python"],
    faqs: [
      { q: "Low-code or custom code?", a: "Low-code platforms are quick for simple flows. We use custom code when volumes, logic or reliability needs outgrow them." },
      { q: "Which processes should we automate first?", a: "High-volume, rules-based steps with clear inputs and outputs usually return value fastest." },
    ],
  },
  {
    slug: "document-processing-intelligent-search",
    title: "Document Processing & Intelligent Search (RAG)",
    group: "ai",
    icon: "FileSearch",
    summary: "Extract data from invoices, forms and contracts, and search your knowledge base in plain language with cited answers.",
    valueProp: "Find the right information in seconds and turn paperwork into structured data, with sources shown for every answer.",
    problems: [
      "Staff key in data from invoices, forms or IDs by hand",
      "Policies and contracts are hard to search",
      "Answers depend on who remembers where a document is",
      "Compliance reviews require reading large document sets",
    ],
    deliverables: [
      "Document inventory and extraction schema",
      "Ingestion pipeline with OCR and chunking",
      "Retrieval-augmented generation with source citations",
      "Access controls that respect document permissions",
      "Accuracy evaluation and human review queue",
      "Search interface or API",
    ],
    process: aiProcess,
    technologies: ["Azure AI Document Intelligence", "AWS Textract", "pgvector", "Elasticsearch", "Claude", "OpenAI embeddings"],
    faqs: [
      { q: "How do we know an answer is correct?", a: "Every answer links to the source passages it used, and we measure accuracy on a test set before go-live." },
      { q: "Will people see documents they should not?", a: "No. Retrieval respects the same permissions as your document stores." },
    ],
  },

  // Cloud & Operations
  {
    slug: "cloud-solutions-migration",
    title: "Cloud Solutions & Migration",
    group: "cloud",
    icon: "Cloud",
    summary: "Plan and execute moves to AWS, Azure or Google Cloud, and design cloud architecture that is secure and cost-aware.",
    valueProp: "Move to the cloud with a clear plan, minimal downtime and costs you can predict.",
    problems: [
      "On-premise servers are ageing and expensive to maintain",
      "Cloud bills are growing faster than usage",
      "Disaster recovery is untested or missing",
      "Environments are configured by hand and drift over time",
    ],
    deliverables: [
      "Cloud readiness assessment and migration plan",
      "Landing zone with networking, identity and guardrails",
      "Infrastructure as code",
      "Workload migration with rollback plans",
      "Backup and disaster recovery setup",
      "Cost optimisation review",
    ],
    process: buildProcess,
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Terraform", "Bicep", "Kubernetes", "Docker"],
    faqs: [
      { q: "Which cloud provider is best?", a: "The one that fits your skills, licences, data residency and workloads. We work across all three major providers." },
      { q: "Will there be downtime?", a: "We plan migrations to minimise it, often to a short, scheduled window, with a tested rollback path." },
    ],
  },
  {
    slug: "devops-ci-cd",
    title: "DevOps & CI/CD",
    group: "cloud",
    icon: "GitBranch",
    summary: "Automated build, test and deployment pipelines so releases become routine instead of risky.",
    valueProp: "Ship more often with fewer incidents through automated pipelines, environments and observability.",
    problems: [
      "Releases are manual, infrequent and stressful",
      "Bugs reach production because testing is inconsistent",
      "Environments differ and problems cannot be reproduced",
      "Nobody knows something is broken until users report it",
    ],
    deliverables: [
      "Delivery pipeline assessment",
      "CI/CD pipelines with automated tests and approvals",
      "Infrastructure as code for all environments",
      "Containerisation where it helps",
      "Logging, metrics and alerting",
      "Release and incident runbooks",
    ],
    process: buildProcess,
    technologies: ["GitHub Actions", "Azure DevOps", "GitLab CI", "Docker", "Kubernetes", "Terraform", "Grafana", "OpenTelemetry"],
    faqs: [
      { q: "Can you work with our existing tools?", a: "Yes. We improve what you have before suggesting new tools." },
      { q: "How quickly will we see results?", a: "Most teams see faster, safer releases within the first month." },
    ],
  },
  {
    slug: "cybersecurity-compliance-reviews",
    title: "Cybersecurity & Compliance Reviews",
    group: "cloud",
    icon: "ShieldCheck",
    summary: "Practical security assessments of applications, cloud and processes, with prioritised fixes mapped to recognised frameworks.",
    valueProp: "Know where you are exposed, what to fix first and how to evidence it to auditors, customers and regulators.",
    problems: [
      "Customers or regulators are asking for security assurances",
      "No one has reviewed application or cloud security recently",
      "Data protection obligations are unclear",
      "Access is granted informally and never reviewed",
    ],
    deliverables: [
      "Scoped security assessment",
      "Application and cloud configuration review",
      "Findings rated by risk with clear remediation steps",
      "Gap analysis against frameworks such as ISO 27001 or data protection law",
      "Policies and procedures where missing",
      "Remediation support and re-testing",
    ],
    process: advisoryProcess,
    technologies: ["OWASP ASVS", "CIS Benchmarks", "ISO 27001", "Microsoft Defender", "AWS Security Hub", "Static analysis tools"],
    faqs: [
      { q: "Is this a penetration test?", a: "It can include one through a qualified partner. Most clients start with a configuration and design review, which finds many issues at lower cost." },
      { q: "Will you help fix the issues?", a: "Yes. We can remediate findings ourselves or support your team, then re-test." },
    ],
  },
  {
    slug: "quality-assurance-testing",
    title: "Quality Assurance & Testing",
    group: "cloud",
    icon: "TestTube",
    summary: "Manual and automated testing of functionality, performance and accessibility before your users find the problems.",
    valueProp: "Release with confidence through a test strategy that matches your risk, with automation where it pays back.",
    problems: [
      "Releases introduce regressions in features that used to work",
      "Testing is left to the end and rushed",
      "The system slows down under real load",
      "Accessibility has never been tested",
    ],
    deliverables: [
      "Test strategy and plan",
      "Automated end-to-end, API and unit test suites",
      "Performance and load testing",
      "Accessibility audit against WCAG 2.1 AA",
      "Test reports with clear defect priorities",
      "Integration with your CI pipeline",
    ],
    process: buildProcess,
    technologies: ["Playwright", "Cypress", "Jest", "Vitest", "k6", "Postman", "axe", "Lighthouse"],
    faqs: [
      { q: "Can you test software you did not build?", a: "Yes. Independent testing is a large part of this service." },
      { q: "Should we automate everything?", a: "No. We automate stable, high-value paths and keep exploratory testing for new features." },
    ],
  },
  {
    slug: "maintenance-support-managed-services",
    title: "Maintenance, Support & Managed Services",
    group: "cloud",
    icon: "Wrench",
    summary: "Ongoing support, monitoring, security updates and small enhancements under clear service levels.",
    valueProp: "Keep critical systems healthy and improving, with a named team and agreed response times.",
    problems: [
      "The original developer has left and nobody owns the system",
      "Security updates are overdue",
      "Small changes take weeks because there is no capacity",
      "Outages are discovered by customers",
    ],
    deliverables: [
      "Onboarding review of code, infrastructure and risks",
      "Service level agreement with response times",
      "Monitoring, backups and security patching",
      "Monthly allowance for enhancements",
      "Monthly service reports",
      "Named contacts and an escalation path",
    ],
    process: [
      { title: "Onboard", text: "Review the system, document risks and set up access, monitoring and backups." },
      { title: "Stabilise", text: "Fix urgent issues and apply overdue updates." },
      { title: "Operate", text: "Respond to incidents and requests within agreed service levels." },
      { title: "Report", text: "Monthly reports on uptime, tickets, changes and recommendations." },
      { title: "Improve", text: "Plan enhancements and reduce technical debt over time." },
    ],
    technologies: ["Uptime monitoring", "Sentry", "Grafana", "Azure Monitor", "AWS CloudWatch", "Jira", "Statuspage"],
    faqs: [
      { q: "Do you support systems you did not build?", a: "Yes. We start with an onboarding review so we understand the system and its risks." },
      { q: "What hours do you cover?", a: "Standard plans cover business hours. Extended and out-of-hours cover is available for critical systems." },
    ],
  },

  // Advisory
  {
    slug: "it-consultancy",
    title: "IT Consultancy",
    group: "advisory",
    icon: "Lightbulb",
    summary: "Independent advice on technology choices, vendors, budgets and team structure from people who also build.",
    valueProp: "Experienced, vendor-neutral guidance so technology decisions are made with clear options and costs.",
    problems: [
      "A major technology decision is due and the options are unclear",
      "Vendor proposals are hard to compare",
      "IT spend is rising without clear value",
      "The organisation lacks senior technology leadership",
    ],
    deliverables: [
      "Options analysis with costs, risks and recommendations",
      "Vendor selection support and proposal reviews",
      "Technology budget review",
      "Fractional CTO or technology lead support",
      "Board and leadership briefings",
    ],
    process: advisoryProcess,
    technologies: ["Vendor-neutral", "Cloud and on-premise", "Open source and commercial"],
    faqs: [
      { q: "Are you tied to any vendor?", a: "No. We do not take referral fees from vendors we recommend, and we disclose any partnerships." },
      { q: "Can you act as our CTO part-time?", a: "Yes. Fractional technology leadership is available on a monthly retainer." },
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    group: "advisory",
    icon: "Compass",
    summary: "Modernise how your organisation serves customers and runs operations, one measurable step at a time.",
    valueProp: "Transformation planned around outcomes and people, delivered in stages that each prove their value.",
    problems: [
      "Customers expect digital services you do not yet offer",
      "Processes are paper-based or spread across disconnected tools",
      "Previous change programmes stalled or lost support",
      "Leadership wants a roadmap the whole organisation can follow",
    ],
    deliverables: [
      "Current-state assessment of services, processes and systems",
      "Target operating model and digital roadmap",
      "Business cases for priority initiatives",
      "Change and adoption plan",
      "Delivery of first initiatives to build momentum",
      "Benefits tracking",
    ],
    process: advisoryProcess,
    technologies: ["Service design", "Process mapping", "Cloud platforms", "Low-code", "Data platforms", "AI"],
    faqs: [
      { q: "Where do we start?", a: "With the services and processes that matter most to your customers and staff. We look for early wins that build confidence." },
      { q: "Do you also deliver the work?", a: "Yes. Our advisory and delivery teams work together, so the plan is realistic and gets built." },
    ],
  },
  {
    slug: "technology-audits-architecture-reviews",
    title: "Technology Audits & Architecture Reviews",
    group: "advisory",
    icon: "ScanSearch",
    summary: "Independent reviews of code, architecture, security and delivery practices before investment, acquisition or scale.",
    valueProp: "An honest, evidence-based view of your technology: what is sound, what is risky and what to do about it.",
    problems: [
      "You are investing in or acquiring a company and need technical due diligence",
      "A system is about to scale and you are unsure it will cope",
      "Delivery has slowed and nobody can explain why",
      "You inherited a codebase with unknown quality",
    ],
    deliverables: [
      "Architecture and code quality assessment",
      "Security and scalability risk review",
      "Delivery process and team capability review",
      "Prioritised findings with effort estimates",
      "Executive summary for non-technical stakeholders",
    ],
    process: advisoryProcess,
    technologies: ["Static analysis", "Dependency auditing", "Architecture decision records", "Load testing", "Cloud cost analysis"],
    faqs: [
      { q: "How long does a review take?", a: "Typically one to three weeks depending on system size and the depth required." },
      { q: "Is the report suitable for investors?", a: "Yes. We provide an executive summary alongside the detailed technical findings." },
    ],
  },

  // Growth: Digital Marketing
  {
    slug: "digital-marketing-strategy",
    title: "Digital Marketing Strategy",
    group: "growth",
    icon: "Target",
    summary: "A clear plan for audiences, channels, messages and budget, tied to leads and revenue.",
    valueProp: "Know who you are targeting, where to reach them and how every channel contributes to pipeline.",
    problems: [
      "Marketing activity is busy but its impact is unclear",
      "Budget is spread thinly across too many channels",
      "Messaging differs across website, social and sales",
      "There is no reliable way to attribute leads",
    ],
    deliverables: [
      "Audience and competitor research",
      "Positioning and key messages",
      "Channel plan with budget allocation",
      "Measurement framework and dashboards",
      "Twelve-month marketing roadmap",
    ],
    process: growthProcess,
    technologies: ["Google Analytics 4", "Google Tag Manager", "HubSpot", "Looker Studio", "Semrush"],
    faqs: [
      { q: "Do you also execute the plan?", a: "Yes. We can deliver SEO, paid media and content ourselves or support your in-house team." },
      { q: "How do you measure success?", a: "Against agreed targets for qualified leads, cost per acquisition and revenue, not just traffic." },
    ],
  },
  {
    slug: "search-engine-optimisation",
    title: "Search Engine Optimisation (SEO)",
    group: "growth",
    icon: "Search",
    summary: "Technical, content and local SEO that earns visibility for the searches your customers actually make.",
    valueProp: "Sustainable search visibility built on a fast, well-structured site and content that answers real questions.",
    problems: [
      "Competitors outrank you for your core services",
      "Traffic dropped after a redesign or algorithm update",
      "The site has technical issues that block indexing",
      "Content exists but does not attract qualified visitors",
    ],
    deliverables: [
      "Technical SEO audit and fixes",
      "Keyword and intent research",
      "Content plan and on-page optimisation",
      "Local SEO and business profile setup",
      "Structured data implementation",
      "Monthly ranking and traffic reporting",
    ],
    process: growthProcess,
    technologies: ["Google Search Console", "Semrush", "Ahrefs", "Screaming Frog", "Schema.org", "PageSpeed Insights"],
    faqs: [
      { q: "How long does SEO take?", a: "Technical fixes can show results within weeks. Content-led growth usually builds over three to six months." },
      { q: "Do you guarantee rankings?", a: "No one honestly can. We commit to clear activity, transparent reporting and targets based on your market." },
    ],
  },
  {
    slug: "paid-media",
    title: "Paid Media (Search and Social)",
    group: "growth",
    icon: "MousePointerClick",
    summary: "Search and social campaigns managed against cost per lead and return on ad spend.",
    valueProp: "Paid campaigns that reach the right people at a cost you can justify, with every click tracked.",
    problems: [
      "Ad spend is rising but leads are not",
      "Campaigns are set up but rarely optimised",
      "Tracking is incomplete so results cannot be trusted",
      "Landing pages do not convert paid traffic",
    ],
    deliverables: [
      "Account audit and tracking fixes",
      "Campaign structure, audiences and creative",
      "Landing page recommendations or builds",
      "Weekly optimisation and budget management",
      "Monthly performance reporting",
    ],
    process: growthProcess,
    technologies: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Microsoft Ads", "Google Tag Manager"],
    faqs: [
      { q: "Is there a minimum ad budget?", a: "We recommend a budget that can produce statistically useful results for your market. We will advise during the audit." },
      { q: "Who owns the ad accounts?", a: "You do. We work inside accounts you own so history and data stay with you." },
    ],
  },
  {
    slug: "content-social-media-marketing",
    title: "Content & Social Media Marketing",
    group: "growth",
    icon: "Newspaper",
    summary: "Useful articles, case studies and social content that build authority and support sales conversations.",
    valueProp: "Content with a purpose: answering buyer questions, earning search visibility and giving sales something to share.",
    problems: [
      "Social channels are inconsistent or inactive",
      "There is no content that explains your expertise",
      "Sales teams lack material for prospects",
      "Content is produced but nobody knows if it works",
    ],
    deliverables: [
      "Content strategy and editorial calendar",
      "Articles, guides and case studies",
      "Social media posts and scheduling",
      "Newsletter content",
      "Performance reporting by piece and channel",
    ],
    process: growthProcess,
    technologies: ["LinkedIn", "Instagram", "Facebook", "X", "Buffer", "Canva", "Mailchimp", "HubSpot"],
    faqs: [
      { q: "Who writes the content?", a: "Our writers interview your experts so the content reflects real knowledge, then we edit and publish it." },
      { q: "How often should we post?", a: "Consistency matters more than volume. We agree a sustainable cadence for your team." },
    ],
  },
  {
    slug: "analytics-conversion-optimisation",
    title: "Analytics & Conversion Optimisation",
    group: "growth",
    icon: "Gauge",
    summary: "Reliable tracking and structured experiments that turn more of your existing visitors into enquiries and sales.",
    valueProp: "Grow results from the traffic you already have, using accurate data and properly run tests.",
    problems: [
      "Analytics data is incomplete or not trusted",
      "Visitors arrive but few enquire or buy",
      "Website changes are made on opinion",
      "Consent and privacy settings are not configured correctly",
    ],
    deliverables: [
      "Analytics and tag audit",
      "Event tracking and conversion setup",
      "Consent management configuration",
      "Funnel analysis and user behaviour insights",
      "A/B test plan and execution",
      "Conversion reporting dashboard",
    ],
    process: growthProcess,
    technologies: ["Google Analytics 4", "Google Tag Manager", "Microsoft Clarity", "Hotjar", "VWO", "Looker Studio"],
    faqs: [
      { q: "Do we have enough traffic to A/B test?", a: "Not always. With lower traffic we use qualitative research and larger changes rather than small tests." },
      { q: "Is tracking compliant with privacy law?", a: "We configure consent management so tracking respects visitor choices and applicable law." },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getGroup(id: ServiceGroupId): ServiceGroup {
  const group = serviceGroups.find((g) => g.id === id);
  if (!group) throw new Error(`Unknown service group: ${id}`);
  return group;
}

export const servicesByGroup = serviceGroups.map((group) => ({
  ...group,
  services: services.filter((s) => s.group === group.id),
}));

export const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: "other", label: "Other" },
];

export const serviceSlugs = services.map((s) => s.slug);
