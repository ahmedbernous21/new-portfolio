export const site = {
  name: "Ahmed Bernous",
  title: "Full Stack Software Engineer",
  tagline:
    "I ship full-stack products — ERP platforms, marketplaces, and apps that stay up in production.",
  email: "bernousahmed51@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahmed-bernous-08703025a",
  linkedinRecommendations:
    "https://www.linkedin.com/in/ahmed-bernous-08703025a/details/recommendations/",
  github: "https://github.com/ahmedbernous21",
  url: "https://ahmedbernous.tech",
  cv: "/Ahmed_Bernous_CV.pdf",
} as const;

export const metrics = [
  { value: "200K+", label: "Users at Bricoram" },
  { value: "100K+", label: "App downloads" },
  { value: "20+", label: "ERP deployments" },
] as const;

export const about = {
  headline: "I build products that hold up in production.",
  intro:
    "Full-stack engineer working across ERP platforms, business workflows, marketplaces and mobile. I take features from a business requirement to production, and I own the product end to end when it's mine.",
  journey: [
    "Started in Computer Science at the University of Skikda, then joined Bricoram as one of three developers under Younes Chaoui. We scaled a marketplace to 200K+ users and 100K+ app downloads across iOS, Android, web, and PWA.",
    "That stretch covered full-stack, DevOps, performance, and shipping against real business pressure. After Bricoram I moved into freelance and contract work — owning projects from requirements to deployment.",
    "Today I build ERP modules at Tangle, turning client processes into workflows, dashboards and integrations that run in production. Alongside that I'm building Nadhim, my own management ERP for kindergartens and private schools in Algeria, and I publish open-source tools like Islamic Feed Eradicator.",
  ],
} as const;

export const experience = [
  {
    company: "Tangle Software Inc",
    location: "Remote",
    role: "Software Engineer",
    type: "Full Time",
    period: "September 2025 – Present",
    highlights: [
      "Maintain and enhance a business workflow platform supporting ERP builds for 20+ companies.",
      "Implement ERP modules — projects, tasks, invoicing, permissions, workflows — from client processes.",
      "Resolve production issues and deploy fixes to live environments.",
      "Partner with stakeholders on integrations and operational efficiency.",
    ],
    tags: ["ERP", "Workflows", "Production Support", "Integrations"],
  },
  {
    company: "My Language Connection",
    location: "Remote · UK",
    role: "Software Developer",
    type: "Freelance · Part Time",
    period: "July 2025 – March 2026",
    highlights: [
      "Maintain the Translation Management System used daily by PMs and clients.",
      "Customize Zoho CRM with automation workflows and notifications.",
      "Integrate client systems and external services with the company platform.",
      "Support users, troubleshoot issues, and ship operational improvements.",
    ],
    tags: ["Tangle", "Vue.js", "Zoho CRM", "SQL"],
  },
  {
    company: "HaulHub",
    location: "Remote · Netherlands",
    role: "Full Stack Software Engineer",
    type: "Part Time",
    period: "July 2025 – September 2025",
    highlights: [
      "Developed application features and APIs for an internal product platform.",
      "Assisted with deployments and release preparation.",
      "Collaborated with developers to deliver production-ready features.",
    ],
    tags: ["React Native", "Expo", "NestJS", "PostgreSQL", "APIs"],
  },
  {
    company: "Upwork",
    location: "Remote",
    role: "Freelance Full-Stack Software Engineer",
    type: "Contract",
    period: "March 2025 – Present",
    highlights: [
      "Delivered and maintained business applications for international clients.",
      "Gathered requirements directly from stakeholders.",
      "Deployed updates and provided post-deployment support.",
    ],
    tags: ["Django", "Angular", "Stripe", "Client Delivery"],
  },
  {
    company: "Bricoram",
    location: "Remote",
    role: "Full Stack Software Engineer",
    type: "Full Time",
    period: "March 2023 – August 2025",
    highlights: [
      "Developed a marketplace connecting clients with service providers.",
      "Built accounts, messaging, project posting, and order tracking.",
      "Improved performance via database optimization and caching.",
      "Deployed updates and monitored system behavior for active users.",
    ],
    tags: [
      "Angular",
      "Django",
      "Docker",
      "GitLab CI/CD",
      "AWS",
      "Cypress",
      "Pytest",
    ],
  },
] as const;

export const education = {
  degree: "Bachelor's Degree in Computer Science",
  institution: "University of Skikda",
  location: "Skikda, Algeria",
} as const;

export const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "Vue.js",
      "React Native",
      "Expo",
      "TypeScript",
      "Tailwind CSS",
      "Chrome Extensions",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      "Django",
      "NestJS",
      "Express",
      "Python",
      "PostgreSQL",
      "REST APIs",
      "WebSockets",
      "OpenAI Integration",
    ],
  },
  {
    id: "devops",
    label: "Tools & DevOps",
    skills: [
      "Docker",
      "GitLab CI/CD",
      "AWS",
      "Coolify",
      "Hetzner",
      "Cypress",
      "Pytest",
      "Git",
    ],
  },
] as const;

export type ProjectLink = { label: string; href: string };

export type CaseStudy = {
  problem: string;
  built: readonly string[];
  decisions?: readonly string[];
  outcome?: string;
};

export type FeaturedProject = {
  id: string;
  title: string;
  kind: string;
  status: string;
  summary: string;
  role: string;
  scope: readonly string[];
  stack?: readonly string[];
  mark: { type: "image"; src: string; alt: string } | { type: "text"; text: string };
  links: readonly ProjectLink[];
  note?: string;
  caseStudy?: CaseStudy;
};

export const featuredProjects: readonly FeaturedProject[] = [
  {
    id: "nadhim",
    title: "Nadhim",
    kind: "Kindergarten & school management ERP",
    status: "My product · In active development",
    summary:
      "A web ERP for kindergartens, crèches and private schools in Algeria. It replaces the paper registers and Excel files most schools still run on with one tool for enrolment, attendance, fees, staff and parent communication, in Arabic and French.",
    role: "Founder & engineer — product, architecture and build",
    scope: [
      "Students & parents",
      "Attendance",
      "Fees, invoices & cash book",
      "Dashboards & statistics",
      "Document & invoice printing",
      "WhatsApp reminders",
      "Customisable workspace",
    ],
    stack: ["Django", "DRF", "Angular", "PostgreSQL", "Cypress"],
    mark: { type: "image", src: "/projects/nadhim.jpg", alt: "Nadhim logo" },
    links: [{ label: "nadhim.org", href: "https://nadhim.org" }],
    caseStudy: {
      problem:
        "Most kindergartens and small private schools in Algeria are run from notebooks and spreadsheets. Fees get chased by hand, invoices need local tax identifiers, and directors have no clear view of attendance or cash flow. Generic ERPs don't speak Arabic well and don't fit how these schools work.",
      built: [
        "Records for children, parents, classes and staff, with Excel import and export.",
        "Daily attendance, fee tracking, invoices and receipts with continuous numbering, and a cash book.",
        "Dashboards and monthly statistics for directors.",
        "Customisable print templates for documents and invoices.",
        "Parent messaging with templates and a WhatsApp send queue for reminders.",
        "A Studio where each school adds fields, lists and hides modules without code.",
      ],
      decisions: [
        "Built as a metadata-driven ERP builder: the kindergarten module set is an installable pack, not hard-coded screens, so other school types reuse the same engine.",
        "Arabic-first with full right-to-left support, French second, with language chosen per user.",
        "Browser-based, so schools don't install anything. Core flows are covered by Cypress end-to-end tests in CI.",
      ],
    },
  },
  {
    id: "islamic-feed-eradicator",
    title: "Islamic Feed Eradicator",
    kind: "Open-source Chrome extension",
    status: "Open source · MIT",
    summary:
      "Replaces the feed on YouTube, Facebook, LinkedIn and Instagram with a Qur’an verse, hadith or scholar reminder. Search, messages and playback keep working, so the site stays useful without the endless scroll.",
    role: "Sole author — design, extension engineering and release",
    scope: [
      "Feed replacement on 4 sites",
      "Bundled, sourced reminders",
      "No network calls while browsing",
    ],
    stack: ["TypeScript", "React", "Manifest V3", "Vite", "Vitest"],
    mark: {
      type: "image",
      src: "/projects/islamic-feed-eradicator.svg",
      alt: "Islamic Feed Eradicator logo",
    },
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ahmedbernous21/islamic-feed-eradicator",
      },
    ],
    caseStudy: {
      problem:
        "I wanted to break my own habit of opening a social app and scrolling without thinking. Blocking sites outright breaks the parts you actually need, like search and messages.",
      built: [
        "Content scripts that find and replace only the feed on each site, leaving navigation, search, messaging and playback intact.",
        "A reminder card with Arabic text and a short English rendering, plus settings and a toolbar badge.",
        "A build step that pulls Qur’an text from the Quran.com API and Arabic hadith from Sahih al-Bukhari and Sahih Muslim into a bundled library.",
      ],
      decisions: [
        "Reminders ship inside the extension, so nothing is fetched while you browse and no browsing data leaves the device.",
        "Minimal Chrome permissions (storage, alarms, scripting, activeTab).",
        "Suggestions and reports open a public GitHub issue, so the extension holds no tokens.",
      ],
    },
  },
  {
    id: "bricoram",
    title: "Bricoram",
    kind: "Home-services marketplace",
    status: "Production · 2023 – 2025",
    summary:
      "A marketplace connecting clients with artisans and service providers across web, PWA, iOS and Android. I was one of three developers on the team that grew it to 200K+ users and 100K+ app downloads.",
    role: "Full-stack engineer — one of three developers",
    scope: [
      "Accounts & profiles",
      "Messaging",
      "Project posting",
      "Order tracking",
      "Performance & caching",
      "App Store releases",
    ],
    stack: ["Angular", "Django", "Docker", "GitLab CI/CD", "AWS", "Cypress", "Pytest"],
    mark: { type: "text", text: "BR" },
    links: [{ label: "bricoram.com", href: "https://bricoram.com/" }],
    caseStudy: {
      problem:
        "Clients needed a reliable way to find and hire tradespeople, and providers needed a steady flow of jobs, on whatever device they had.",
      built: [
        "Core marketplace flows: accounts, messaging, project posting and order tracking.",
        "Web, PWA and mobile clients on one Django API, including iOS App Store publication.",
        "Database optimisation and caching as traffic grew.",
        "CI/CD on GitLab with Cypress and Pytest, plus monitoring after each release.",
      ],
      outcome:
        "The platform reached 200K+ users and 100K+ app downloads while a three-person team kept it running.",
    },
  },
  {
    id: "mlc-tms",
    title: "My Language Connection — TMS",
    kind: "Translation management system",
    status: "Client work · 2025 – 2026",
    summary:
      "Maintained and extended the translation management system a UK language-services company runs on every day. Project managers and clients rely on it daily, so changes had to land without disrupting live work.",
    role: "Software developer — features, integrations, automation and support",
    scope: [
      "Feature work from business requirements",
      "Zoho CRM automation & notifications",
      "Client & third-party integrations",
      "Production debugging",
      "User support",
    ],
    stack: ["Tangle", "Vue.js", "Zoho CRM", "SQL"],
    mark: { type: "text", text: "TMS" },
    links: [],
  },
  {
    id: "erp-production",
    title: "ERP systems in production",
    kind: "Business workflow platform · Tangle Software",
    status: "Current role · 2025 – Present",
    summary:
      "I build and maintain ERP modules on a workflow platform used for ERP builds at 20+ companies. The work starts from how a client actually operates and ends with a feature their team uses daily. Client details are kept private.",
    role: "Software engineer — module development, integrations and production support",
    scope: [
      "Supplier dashboards & scorecards",
      "Purchasing & procurement workflows",
      "Ticketing & notifications",
      "Reporting & business metrics",
      "Workflow automation",
      "Integrations",
      "Production fixes",
    ],
    mark: { type: "text", text: "ERP" },
    links: [],
    note: "Anonymised — no client names, data or screenshots.",
  },
];

export const moreProjects = [
  {
    title: "SaaS Boiler CLI",
    description:
      "CLI that scaffolds full-stack apps from a choice of frontend, backend and database.",
    tags: ["Next.js", "Angular", "Nuxt", "Express", "Go", "Django"],
    href: null,
  },
  {
    title: "Joker Graphics Agency",
    description:
      "Agency site with an in-browser canvas editor for customising designs and placing orders.",
    tags: ["Next.js", "Fabric.js", "Django", "OpenAI"],
    href: "https://github.com/ahmedbernous21/joker_front",
  },
  {
    title: "MoneyPool",
    description:
      "Group fundraising with shared pools, invites and live contribution tracking.",
    tags: ["Angular", "Django", "Stripe", "WebSockets"],
    href: null,
  },
] as const;

export const testimonials = [
  {
    id: "glyn-keachie",
    featured: true,
    quote:
      "I had the pleasure of working with Ahmed during his time as a Junior Developer, and I highly recommend him. Ahmed consistently demonstrated strong responsiveness and a proactive attitude in his work. He quickly adapted to both low-code and no-code environments, showing impressive flexibility and problem-solving skills. His ability to understand requirements and translate them into practical solutions made him a valuable contributor to our team. He played a key role in supporting and improving internal automation processes, helping streamline workflows and increase efficiency. Ahmed approaches tasks with reliability, attention to detail, and a genuine willingness to learn and improve.",
    author: "Glyn Keachie",
    role: "Leadership Systems & Operational Performance",
    company: "Glyn Keachie Advisory",
    relation: "Direct manager · March 2, 2026",
    linkedinUrl:
      "https://www.linkedin.com/in/ahmed-bernous-08703025a/details/recommendations/",
    authorLinkedin: "https://www.linkedin.com/in/glyn-keachie-08187b76",
  },
  {
    id: "younes-chaoui",
    featured: false,
    quote:
      "I worked with Ahmed for 2 years, and he always showed great dedication and resilience. He faces every challenge with patience and positivity, and always finds solutions, no matter how complex. I was impressed by how fast he grew. He learns quickly, adapts easily, and made strong progress in a short time. Ahmed will be a real asset to any team.",
    author: "Younes Chaoui",
    role: "CEO",
    company: "Bricoram",
    relation: "Tech lead & mentor · 2 years",
    linkedinUrl:
      "https://www.linkedin.com/in/ahmed-bernous-08703025a/details/recommendations/",
    authorLinkedin: null,
  },
  {
    id: "jose-muniz",
    featured: false,
    quote:
      "I highly recommend working with Ahmed for development requirements. He is available, present, effective and reliable. I've had great joy working with Ahmed, and peace knowing I'm working with someone I can trust to deliver on the requirements.",
    author: "Jose Muniz",
    role: "Director",
    company: "GrowthTech Development House",
    relation: "Client & project director",
    linkedinUrl:
      "https://www.linkedin.com/in/ahmed-bernous-08703025a/details/recommendations/",
    authorLinkedin: null,
  },
] as const;

export const navLinks = [
  { href: "#recommendations", label: "Recs" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;
