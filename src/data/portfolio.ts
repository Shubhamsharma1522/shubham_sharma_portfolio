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
  image?: string;
}

export interface JourneyCard {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  narrative: string;
  bullets: string[];
  skills: string[];
  accentColor: string;
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

export interface PolaroidItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  initialX: number;
  initialY: number;
  rotation: number;
  zIndex: number;
}

export interface MusicTrackItem {
  id: string;
  title: string;
  artist: string;
  cover: string;
  initialX: number;
  initialY: number;
  rotation: number;
  duration: string;
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
  instagram: "https://instagram.com",
  stats: [
    { label: "Experience", value: "3+ Years" },
    { label: "Completed Projects", value: "10+" },
    { label: "Tech Stack", value: "React • Node • Web3 • AI" },
    { label: "Performance", value: "Production Tested" },
  ],
};

// Screen 1: Journey Arc Deck
export const JOURNEY_CARDS: JourneyCard[] = [
  {
    id: "octal",
    company: "Octal IT Solutions",
    role: "Full Stack Software Developer",
    period: "Apr 2026 – Present",
    location: "Jaipur, Rajasthan",
    narrative: "Architecting high-frequency fintech and crypto platforms. Leading full-stack engineering for KuberPay & KuberCrypto, ensuring bulletproof identity verification and liquidity workflows.",
    bullets: [
      "Engineered cryptocurrency exchange matching workflows, real-time prices & Web3 wallet screening.",
      "Implemented automated KYC identity verification pipelines with stringent regulatory security.",
      "Maintained zero-defect code standards using Jest, Supertest, and SonarQube automated gates."
    ],
    skills: ["React.js", "Next.js", "Node.js", "Web3", "Crypto", "SonarQube"],
    accentColor: "#3b82f6"
  },
  {
    id: "owebest",
    company: "Owebest Technologies",
    role: "Software Developer",
    period: "Nov 2025 – Apr 2026",
    location: "Jaipur, Rajasthan",
    narrative: "Designed core mobility algorithms, live driver allocations, and high-concurrency dispatch mechanisms connecting thousands of riders and captains in real time.",
    bullets: [
      "Implemented dynamic surge pricing algorithms and booking lifecycle finite state machines.",
      "Integrated low-latency WebSockets & Firebase Cloud Messaging for live GPS geo-tracking.",
      "Built cross-platform React Native modules shared between Android and iOS production builds."
    ],
    skills: ["React Native", "WebSockets", "Firebase", "Node.js", "MongoDB"],
    accentColor: "#10b981"
  },
  {
    id: "fargowiz",
    company: "FargoWiz Software",
    role: "Full Stack Software Developer",
    period: "Nov 2023 – Nov 2025",
    location: "Jaipur, Rajasthan",
    narrative: "Built scalable multi-tenant SaaS features, speech-to-action AI pipelines, and distributed event-driven microservices for global enterprise clients.",
    bullets: [
      "Integrated OpenAI and Google Gemini APIs for streaming voice transcription and workflow automation.",
      "Developed high-throughput REST APIs and Redis caching layers for sub-millisecond responses.",
      "Spearheaded database schema design in MongoDB and MySQL supporting high transaction volumes."
    ],
    skills: ["React.js", "Node.js", "OpenAI API", "Google Gemini", "Redis", "AWS"],
    accentColor: "#8b5cf6"
  },
  {
    id: "academic",
    company: "Academic & Engineering Bedrock",
    role: "B.Tech in Computer Science Engineering",
    period: "2019 – 2023",
    location: "RTU / Stani Memorial",
    narrative: "The foundational bedrock: Mastered algorithms, data structures, computer networks, and distributed systems while building production-grade software prototypes.",
    bullets: [
      "Graduated with 7.9 CGPA; specialized in software engineering and database management systems.",
      "Led university technical teams and built end-to-end full stack web platforms for academic events."
    ],
    skills: ["Data Structures", "Algorithms", "System Design", "Networking", "DBMS"],
    accentColor: "#f59e0b"
  }
];

// Screen 2: Bento Projects (7 Projects)
export const BENTO_PROJECTS: ProjectCard[] = [
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
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1000&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "sports-gaming",
    title: "Sports Gaming & Social Platform",
    subtitle: "High-Concurrency Contests & Real-Time Leaderboards",
    description: "Engineered scalable mobile contest features, live scores, Redis caching layers for instant leaderboards, and targeted OneSignal notification pipelines.",
    techStack: ["React Native", "Node.js", "Express.js", "MongoDB", "MySQL", "Redis", "OneSignal"],
    link: "https://github.com/shubhamsharma1522",
    accentColor: "#8b5cf6",
    badge: "Gaming & High Concurrency",
    stats: "Sub-millisecond Redis Caching",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "dev-ecosystem",
    title: "Distributed Microservices & Cloud Ecosystem",
    subtitle: "Event-Driven Backends & DevOps Tooling",
    description: "Architected resilient event-driven microservices, Redis Pub/Sub pipelines, automated Dockerized container workflows, and cloud deployments on AWS.",
    techStack: ["Docker", "AWS", "Redis Pub/Sub", "TypeScript", "Jest", "CI/CD"],
    link: "https://github.com/shubhamsharma1522",
    accentColor: "#06b6d4",
    badge: "Architecture & DevOps",
    stats: "99.9% Production Uptime",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop"
  }
];

export const PROJECTS = BENTO_PROJECTS;

// Screen 3: Philosophy 3D Photo Fan Items
export const PHILOSOPHY_PHOTOS = [
  {
    id: "photo-1",
    title: "Engineering Workspace",
    caption: "Dual-monitor ergonomic setup where high-frequency architectures take shape.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    accent: "#3b82f6"
  },
  {
    id: "photo-2",
    title: "Architecture & Whiteboarding",
    caption: "Designing distributed state machines and system scalability patterns.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop",
    accent: "#10b981"
  },
  {
    id: "photo-3",
    title: "Team Collaborative Sprints",
    caption: "Brainstorming and shipping production releases in fast-paced agile teams.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    accent: "#8b5cf6"
  },
  {
    id: "photo-4",
    title: "Deep Focus & Hardware Tinkering",
    caption: "Bridging software with hardware sensors and IoT communications.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    accent: "#f59e0b"
  }
];

// Screen 4: Playground Draggable Polaroids & Music Widgets
export const PLAYGROUND_POLAROIDS: PolaroidItem[] = [
  {
    id: "pol-1",
    title: "Skydiving 15,000 ft",
    caption: "Conquering new heights & pushing boundaries outside the IDE.",
    image: "https://images.unsplash.com/photo-1521673845961-d60969dd42c2?q=80&w=800&auto=format&fit=crop",
    initialX: -360,
    initialY: -120,
    rotation: -8,
    zIndex: 12
  },
  {
    id: "pol-2",
    title: "Custom Mechanical Keeb",
    caption: "Tactile switches + clean desk aesthetics.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop",
    initialX: -260,
    initialY: 130,
    rotation: 12,
    zIndex: 14
  },
  {
    id: "pol-3",
    title: "Team Hackathon Night",
    caption: "When pizza, coffee, and green tests fuel the night.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    initialX: -140,
    initialY: -220,
    rotation: -4,
    zIndex: 11
  },
  {
    id: "pol-4",
    title: "Vintage Ride",
    caption: "Classic two-wheeler restoration & weekend rides.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
    initialX: 280,
    initialY: -140,
    rotation: 7,
    zIndex: 13
  },
  {
    id: "pol-5",
    title: "Tech Conference Speaker",
    caption: "Sharing insights on Web3 and scalable React Native applications.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
    initialX: 350,
    initialY: 120,
    rotation: -10,
    zIndex: 15
  },
  {
    id: "pol-6",
    title: "Lego & Mecha Tech",
    caption: "Tinkering with robotics models and mechanical builds.",
    image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=800&auto=format&fit=crop",
    initialX: 130,
    initialY: 200,
    rotation: 6,
    zIndex: 10
  }
];

export const PLAYGROUND_TRACKS: MusicTrackItem[] = [
  {
    id: "track-1",
    title: "Midnight Synthwave",
    artist: "Coding Flow • Deep Focus",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=300&auto=format&fit=crop",
    initialX: -180,
    initialY: 40,
    rotation: -6,
    duration: "3:42"
  },
  {
    id: "track-2",
    title: "Ambient Lofi Beats",
    artist: "Coffee & Commits",
    cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=300&auto=format&fit=crop",
    initialX: 180,
    initialY: -40,
    rotation: 8,
    duration: "2:58"
  }
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
