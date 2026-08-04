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
} as const;

export const metrics = [
  { value: "200K+", label: "Users at Bricoram" },
  { value: "100K+", label: "App downloads" },
  { value: "20+", label: "ERP deployments" },
] as const;

export const about = {
  headline: "I build products that hold up in production.",
  intro:
    "Full-stack engineer working across ERP platforms, translation systems, marketplaces, and mobile. I care about architecture that stays maintainable and features that actually ship.",
  journey: [
    "Started in Computer Science at the University of Skikda, then joined Bricoram as one of three developers under Younes Chaoui. We scaled a marketplace to 200K+ users and 100K+ app downloads across iOS, Android, web, and PWA.",
    "That stretch covered full-stack, DevOps, performance, and shipping against real business pressure. After Bricoram I moved into freelance and contract work — owning projects from requirements to deployment.",
    "Now I build ERP modules at Tangle, maintain translation workflows for international clients, and deliver full-stack apps for Upwork clients.",
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

export const projects = [
  {
    title: "SaaS Boiler CLI",
    description:
      "A flexible SaaS boilerplate generator for scaffolding full-stack apps with your choice of frontend, backend, and database.",
    tags: [
      "Next.js",
      "Angular",
      "Nuxt",
      "Express",
      "Go Fiber",
      "Django",
      "MySQL",
      "MongoDB",
    ],
    features: [
      "Frontend: Next.js, Angular, or Nuxt",
      "Backend: Gin (Go), Django, or Express",
      "Databases: MySQL, Postgres, MongoDB, Supabase",
    ],
    liveUrl: "https://saas-boiler-cli-web.vercel.app/",
    sourceUrl: "https://github.com/ahmedbernous21/saas-boiler-cli",
  },
  {
    title: "Joker Graphics Agency",
    description:
      "Interactive agency site with in-browser design customization and order workflows.",
    tags: ["Next.js", "Shadcn", "Fabric.js", "Django", "OpenAI"],
    features: [
      "Real-time canvas editor with drag-and-drop customization",
      "Django backend for projects, orders, and user sessions",
    ],
    liveUrl: "https://jokergraphics.com/",
    sourceUrl: null,
  },
  {
    title: "MoneyPool",
    description:
      "Group fundraising platform for shared money pools, events, and contribution goals.",
    tags: ["Angular", "Django", "Stripe", "Heroku", "WebSockets"],
    features: [
      "Real-time tracking via Django Channels and WebSockets",
      "Invite system, contribution logic, and goal tracking",
    ],
    liveUrl: "https://moneypool-front-880b35135b09.herokuapp.com/",
    sourceUrl: null,
  },
  {
    title: "Bricoram",
    description:
      "Marketplace connecting artisans and clients for home services — web, PWA, and mobile.",
    tags: ["Angular", "Django", "Docker", "Cypress", "Pytest"],
    features: [
      "Responsive UI and API integrations at scale",
      "iOS App Store publication and production monitoring",
    ],
    liveUrl: "https://bricoram.com/",
    sourceUrl: null,
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
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const;
