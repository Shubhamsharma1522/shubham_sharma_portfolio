export interface ProjectCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  link: string;
  github?: string;
  accentColor: string;
  badge: string;
  stats?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Shubham Sharma",
  title: "Full Stack Software Engineer",
  tagline: "Building High-Impact Web, Fintech & AI-Powered Applications",
  bio: "Full Stack Software Engineer with 3+ years of experience building scalable web and cross-platform mobile applications. Experienced in fintech, cryptocurrency, blockchain/Web3, mobility, and AI-powered systems.",
  location: "Jaipur, Rajasthan, India",
  email: "shubhamsharma.in1522@gmail.com",
  phone: "+91 9521441522",
  github: "https://github.com/shubhamsharma1522",
  linkedin: "https://linkedin.com/in/shubhamsharma1522",
  stats: [
    { label: "Experience", value: "3+ Years" },
    { label: "Completed Projects", value: "10+" },
    { label: "Tech Stack", value: "React • Node • Web3 • AI" },
    { label: "Performance", value: "Production Tested" },
  ],
};

export const PROJECTS: ProjectCard[] = [
  {
    id: "kuberpay",
    title: "KuberPay / KuberCrypto",
    subtitle: "Crypto Exchange & Web3 Financial Platform",
    description: "Developed comprehensive cryptocurrency exchange workflows, real-time crypto prices, wallet-screening, KYC identity verification, and multi-currency blockchain integrations.",
    techStack: ["React.js", "Next.js", "Node.js", "MongoDB", "Web3", "Blockchain"],
    link: "https://github.com/shubhamsharma1522",
    accentColor: "#f59e0b",
    badge: "Fintech & Web3",
    stats: "Production Exchange Platform",
  },
  {
    id: "gigpay",
    title: "GigPay Platform",
    subtitle: "Fintech Payments & Milestone Escrow System",
    description: "Built end-to-end admin, contractor, and client workflows including automated escrow tracking, attendance validation, dispute resolutions, and instant contractor payouts.",
    techStack: ["React Native", "React.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
    link: "https://github.com/shubhamsharma1522",
    accentColor: "#10b981",
    badge: "Payments & Escrow",
    stats: "Milestone Escrow Architecture",
  },
  {
    id: "ai-voice",
    title: "AI Voice Intelligence Platform",
    subtitle: "Real-time AI Transcription & Workflow Automation",
    description: "Integrated OpenAI & Google Gemini APIs for low-latency speech transcription, AI response generation, and automated business workflows seamlessly connected with Zoho CRM.",
    techStack: ["React Native", "Node.js", "MongoDB", "OpenAI API", "Google Gemini API", "Zoho CRM"],
    link: "https://github.com/shubhamsharma1522",
    accentColor: "#6366f1",
    badge: "Generative AI",
    stats: "Speech-to-Action Pipeline",
  },
  {
    id: "mobility-platform",
    title: "On-Demand Mobility & Service Platform",
    subtitle: "Real-time Dispatch, Dynamic Pricing & Geo-Tracking",
    description: "Architected driver allocation algorithms, dynamic surge pricing, booking lifecycle state machines, and real-time live GPS tracking using WebSockets and Google Maps.",
    techStack: ["React Native", "Node.js", "Express.js", "MongoDB", "Firebase", "Google Maps API"],
    link: "https://github.com/shubhamsharma1522",
    accentColor: "#0ea5e9",
    badge: "Mobility & Maps",
    stats: "Real-time WebSocket Tracking",
  },
  {
    id: "industrial-safety",
    title: "Industrial Safety Compliance Platform",
    subtitle: "Hardware-Integrated Testing & Report Generation",
    description: "Developed hardware-integrated workflows for safety equipment diagnostics, automated testing, and compliance documentation via Web Serial API device communication.",
    techStack: ["React.js", "Node.js", "MongoDB", "Web Serial API"],
    link: "https://github.com/shubhamsharma1522",
    accentColor: "#ec4899",
    badge: "Hardware & IoT",
    stats: "Web Serial Hardware Integration",
  },
  {
    id: "sports-gaming",
    title: "Sports Gaming & Social Platform",
    subtitle: "High-Concurrency Contests & Real-Time Leaderboards",
    description: "Engineered scalable mobile contest features, live scores, Redis caching layers for instant leaderboards, and targeted OneSignal notification pipelines.",
    techStack: ["React Native", "Node.js", "Express.js", "MongoDB", "MySQL", "Redis", "OneSignal"],
    link: "https://github.com/shubhamsharma1522",
    accentColor: "#8b5cf6",
    badge: "Gaming & Social",
    stats: "Sub-millisecond Redis Caching",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Octal IT Solutions",
    role: "Full Stack Software Developer",
    location: "Jaipur, Rajasthan",
    period: "08 Apr. 2026 – Present",
    highlights: [
      "Develop full-stack web and mobile features using React.js, React Native, Node.js, and Express.js.",
      "Build fintech and cryptocurrency platform functionality for KuberPay and KuberCrypto, including exchange workflows and Web3 integrations.",
      "Implement KYC and compliance integrations involving identity verification and wallet-screening workflows.",
      "Develop REST APIs and platform modules, resolve application issues, and maintain code quality through testing and SonarQube.",
    ],
    skills: ["React.js", "Next.js", "Node.js", "Web3", "Crypto", "SonarQube"],
  },
  {
    company: "Owebest Technologies Pvt. Ltd.",
    role: "Software Developer",
    location: "Jaipur, Rajasthan",
    period: "17 Nov. 2025 – 07 Apr. 2026",
    highlights: [
      "Developed mobility and booking application features using React Native, Node.js, Express.js, and MongoDB.",
      "Implemented ride allocation, dynamic pricing, booking lifecycle management, and real-time location tracking.",
      "Integrated WebSockets and Firebase Cloud Messaging (FCM) for real-time updates and push notifications.",
      "Built reusable React Native components and backend APIs for Android and iOS application workflows.",
    ],
    skills: ["React Native", "WebSockets", "Firebase", "Node.js", "MongoDB"],
  },
  {
    company: "FargoWiz Software Services Pvt. Ltd.",
    role: "Full Stack Software Developer",
    location: "Jaipur, Rajasthan",
    period: "Nov. 2023 – 14 Nov. 2025",
    highlights: [
      "Developed RESTful APIs and backend services using Node.js and Express.js, integrated with React.js and React Native applications.",
      "Built cross-platform mobile applications and responsive web interfaces, contributing to feature development and release preparation.",
      "Integrated OpenAI and Google Gemini APIs for speech transcription, AI-generated responses, and automated workflows.",
      "Worked with MongoDB, MySQL, Redis, AWS, Firebase, payment services, and CRM integrations.",
    ],
    skills: ["React.js", "Node.js", "OpenAI API", "Google Gemini API", "Redis", "AWS"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Core",
    skills: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3 / Modern Styling"],
  },
  {
    category: "Frontend & Mobile",
    skills: ["React.js", "Next.js (App Router)", "React Native", "Redux Toolkit", "Framer Motion", "Tailwind CSS"],
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js", "Express.js", "RESTful APIs", "WebSockets", "Microservices", "Event-Driven Architecture"],
  },
  {
    category: "Databases & Caching",
    skills: ["MongoDB", "MySQL", "Redis (In-Memory Caching & PubSub)"],
  },
  {
    category: "AI, Web3 & Integrations",
    skills: ["OpenAI API", "Google Gemini API", "Anthropic API", "Web3.js", "Smart Contracts Integration", "Zoho CRM"],
  },
  {
    category: "Cloud, DevOps & Testing",
    skills: ["AWS", "Firebase", "Git & GitHub", "Postman", "Jest", "Supertest", "SonarQube Quality Gates"],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Technology (B.Tech) – Computer Science Engineering",
  institution: "Stani Memorial College of Engineering & Technology, Jaipur",
  university: "Rajasthan Technical University",
  period: "2019 – 2023",
  grade: "CGPA: 7.9 / 10",
};

