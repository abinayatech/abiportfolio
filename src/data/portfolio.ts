
import profileImage from "@/assets/images/profile.jpg";
import hacksporaCertificate from "@/assets/images/hackspora.jpg";
import kanamCertificate from "@/assets/images/kanam.jpg";
import israelIndiaCertificate from "@/assets/images/israel-india.jpg";
import outskillCertificate from "@/assets/images/outskill.jpg";
import linkedinMlCertificate from "@/assets/images/linkedin-ml.jpg";
import ieeeCertificate from "@/assets/images/ieee-icirca.jpg";
import sparknovaCertificate from "@/assets/images/sparknova.jpg";
import deloitteCertificate from "@/assets/images/deloitte.jpg";
import celonisBusiness from "@/assets/images/celonis-business.jpg";
import celonisTechnical from "@/assets/images/celonis-technical.jpg";
import nptelCertificate from "@/assets/images/nptel-data-analytics.jpg";
import mongodbCertificate from "../assets/images/mongodbCertificate.jpg";
export const profile = {
  name: "ABINAYA S",
roles: [
  "Aspiring Software Developer",
  "Full-Stack Application Builder",
  "Machine Learning & AI Enthusiast",
  "Exploring Agentic AI",
  "Tech Explorer",
],

  tagline:
    "Passionate about building scalable software, AI-powered applications, and user-centric digital experiences through modern software engineering.",
  email: "abinayatech.dev@gmail.com",
  location: "Coimbatore, Tamil Nadu, India",
  github: "https://github.com/abinayatech",
  linkedin: "https://linkedin.com/in/abinayatechdev",
  photo: profileImage,
};

export const summary =
  "Computer Science and Engineering undergraduate with a strong foundation in software development, artificial intelligence, and prompt engineering. Experienced in full-stack application development through internships, research, and hackathons. Passionate about building scalable, user-centric software solutions, solving real-world problems, and continuously learning emerging technologies.";

export const education = [
  {
    institution: "Sri Ramakrishna Engineering College, Coimbatore",
    degree: "B.E. Computer Science and Engineering",
    period: "2024 – Present",
    detail: "CGPA: 8.45 / 10 (Current)",
  },
  {
    institution: "Higher Secondary (Class XII)",
    degree: "HSC",
    period: "2023 – 2024",
    detail: "92.67%",
  },
  {
    institution: "Secondary School (Class X)",
    degree: "SSLC",
    period: "2021 – 2022",
    detail: "94.20%",
  },
];

export const experience = [
 {
  company: "Benchmarrk",
  role: "Full Stack Development Intern",
  period: "Jun 2026",

  bullets: [
    "Developed responsive full-stack web applications using React, REST APIs, authentication, reusable UI components, and database integration following modern software engineering practices.",
    "Applied Git, GitHub, Agile methodologies, SDLC, debugging, DevOps fundamentals, AI automation, and software architecture principles to build scalable and maintainable applications.",
  ],

  highlights: [
    "Built responsive production-ready UI components",
    "Integrated REST APIs into React applications",
    "Followed Agile software development practices",
    "Collaborated using Git and GitHub"
  ],

  tech: [
    "React",
    "TypeScript",
    "REST API",
    "Git",
    "Tailwind CSS",
    "Node.js"
  ]
},
{
  company: "CodeAlpha",
  role: "Data Analytics Intern (Remote)",
  period: "Jan 2026 – Feb 2026",

  bullets: [
    "Developed interactive analytics dashboards using Python, Streamlit, Plotly, Pandas, and NumPy.",
    "Built Scrapy-based web scraping pipelines and automated preprocessing workflows."
  ],

  highlights: [
    "Built interactive dashboards",
    "Automated web scraping pipelines",
    "Performed exploratory data analysis",
    "Generated business insights"
  ],

  tech: [
    "Python",
    "Pandas",
    "NumPy",
    "Plotly",
    "Streamlit"
  ]
},
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["C", "C++", "Java", "Python", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Technologies",
    items: ["React.js", "Tailwind CSS", "Node.js", "Django", "Streamlit"],
  },
   {
    category: "Databases",
    items: ["MySQL", "Supabase"],
  },
    {
    category: "AI & Emerging Technologies ",
    items: [ "Machine Learning", "Prompt Engineering"],
  },
  {
    category: "Developer Tools ",
    items: ["Git", "GitHub", "VS Code", "Power BI", "Vercel"],
  },
  {
    category: "AI & Emerging Technologies ",
    items: [ "Machine Learning", "Prompt Engineering"],
  },
];

export const featuredProjects = [
  {emoji: "🔐",
    slug: "passive-captcha",
    title: "Privacy-Preserving Passive CAPTCHA using Federated Learning",
    period: "Nov 2025",
    tagline: "Privacy-preserving CAPTCHA using Federated Learning and behavioural biometrics for seamless human verification.",
    overview:
      "A passive CAPTCHA system that distinguishes humans from bots through behavioural biometrics — mouse movement, typing dynamics, and scrolling patterns — while preserving user privacy with Federated Learning.",
    problem:
      "Traditional CAPTCHAs hurt UX and centralised ML models for bot detection require sensitive behaviour data to leave the user's device, raising serious privacy concerns.",
    solution:
      "Capture lightweight behavioural signals locally, train classifier updates on-device, and aggregate model weights via Federated Learning so raw behaviour data never leaves the client.",
    features: [
      "Frictionless, invisible verification",
      "Mouse, keyboard and scroll behaviour capture",
      "Federated training loop with weighted averaging",
      "Pluggable Flask backend for aggregation",
      "Lightweight client-side instrumentation",
    ],
    architecture:
      "Client collects behavioural signals → local model trains a delta → encrypted weights sent to the Flask aggregator → global model redistributed to clients. No raw data is ever uploaded.",
    tech: ["Python", "Flask", "Federated Learning", "Machine Learning"],
    challenges: [
      "Balancing detection accuracy with on-device compute budget",
      "Designing a privacy-preserving aggregation protocol",
      "Synthesising labelled bot behaviour for training",
    ],
    future: [
      "Differential privacy on model updates",
      "Browser extension deployment",
      "Adversarial robustness against scripted bots",
    ],
    repo: "https://github.com/abinayatech/privacypreservingpassivecaptcha.git",
  },
  {emoji: "❤️‍🩹",
    slug: "healvent",
    title: "HealVent – AI Health Engagement Platform",
    period: "Jan 2026",
    tagline: "AI-powered healthcare platform delivering personalised health recommendations and engagement rewards.",
    overview:
      "HealVent is an AI-driven health engagement platform that promotes healthy daily habits via personalised recommendations and a reward-based engagement loop.",
    problem:
      "Health apps struggle with long-term engagement — users abandon generic tracking quickly and lose motivation without personalised feedback.",
    solution:
      "Combine intelligent health monitoring dashboards, personalised recommendations, and reward-based engagement to keep users active and consistent.",
    features: [
      "Personalised health recommendations",
      "Reward-based engagement loop",
      "Responsive monitoring dashboards",
      "Secure authentication",
      "Real-time updates via Supabase",
    ],
    architecture:
      "Next.js App Router frontend with Supabase Auth and Postgres for storage. AI recommendation logic runs server-side and personalises content per user.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    challenges: [
      "Designing engagement mechanics without becoming gimmicky",
      "Keeping personalisation feedback fast and relevant",
      "Secure handling of health-adjacent user data",
    ],
    future: [
      "Wearable device integration",
      "Habit-streak social layer",
      "On-device ML for offline insights",
    ],
    repo: "https://github.com/abinayatech/Healvent-main",
  },
  {
  emoji: "🎙️",
  slug: "lumi",
  title: "LUMI – Voice-First Health Companion for the Elderly",
  period: "FEB 2026",
  tagline:
    "Voice-first AI healthcare platform designed to make digital healthcare simpler, safer, and more accessible for elderly users.",

  overview:
    "LUMI is a full-stack AI-powered healthcare web application that combines voice interaction, AI assistance, health monitoring, medication tracking, and emergency support into an accessible platform for elderly users and their caretakers.",

  problem:
    "Elderly users often face difficulties with traditional healthcare applications due to complex navigation, small text, and the need for typing. Caretakers also need a simple way to monitor their loved one's health, medication, and emergency situations.",

  solution:
    "Developed a voice-first healthcare platform that enables elderly users to interact naturally through voice while providing health monitoring, medication tracking, AI assistance, and one-tap emergency support. A dedicated caretaker dashboard allows caretakers to monitor linked patients and receive emergency alerts.",

  features: [
    "Voice-based AI assistant",
    "Natural language interaction",
    "AI assistance powered by Phi3 and Ollama",
    "Patient health monitoring dashboard",
    "Heart rate, blood pressure, and step tracking",
    "Medication tracking and reminders",
    "One-tap emergency SOS",
    "Caretaker dashboard",
    "Patient management and health information",
    "Emergency alert workflow",
    "Health history tracking",
    "Elderly-friendly and accessible UI",
    "Separate patient and caretaker experiences",
  ],

  architecture:
  "Full-stack architecture with a React and TypeScript frontend, Python FastAPI backend services, SQLite database, and locally hosted Phi3 model through Ollama for AI-powered voice interaction.",


  tech: [
    "React.js",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "Python",
    "FastAPI",
    "SQLite",
    "Ollama",
    "Phi3",
    "Web Speech API",
    "REST API",
  ],
  
future: [
  "Real-time wearable and IoT health data integration",
  "Multilingual and personalized voice interaction",
  "Cross-platform mobile application",
  "AI-driven personalized health analytics",
],

  repo:
    "https://github.com/abinayatech/LUMI----Voice-First-Health-Companion",
},
  {
  emoji: "⚖️",
  slug: "lex-triage",
  title: "Lex Triage – AI Legal Intake & Client Query Triage System",
  period: "Jun 2026",
  tagline:
    "AI-powered legal intake platform that automates matter categorization, urgency assessment, and client management for modern law firms.",

  overview:
    "Lex Triage is a full-stack AI-powered legal operations platform that streamlines client onboarding, automates legal matter classification, assesses urgency, and centralizes case management through an intuitive dashboard for legal professionals.",

  problem:
    "Law firms often spend significant time manually reviewing client inquiries, categorizing legal matters, collecting supporting documents, and assigning cases, resulting in slower response times and inefficient workflows.",

  solution:
    "Developed a centralized legal intake platform that enables clients to submit matters digitally, leverages AI to categorize cases and estimate urgency, and provides administrators with real-time dashboards, analytics, client management, and secure workflow management.",

  features: [
    "AI-powered legal matter categorization",
    "Urgency prediction with confidence scoring",
    "Multi-step legal intake workflow",
    "Client Directory with matter tracking",
    "Admin dashboard with real-time analytics",
    "Ticket management system",
    "Role-based authentication",
    "AI insights and reporting dashboard",
    "Responsive modern UI",
    "Secure document upload integration"
  ],

  architecture:
    "Built using a React and TypeScript frontend with Node.js and Express backend APIs. Supabase provides authentication, PostgreSQL database, and secure file storage, while an AI service performs legal matter classification and urgency prediction.",

  tech: [
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Supabase",
    "PostgreSQL",
    "REST API",
    "Vite",
    "TanStack Router"
  ],

  challenges: [
    "Designing an intuitive multi-step legal intake workflow",
    "Integrating AI predictions with legal case management",
    "Building responsive admin dashboards with real-time statistics",
    "Managing secure authentication and role-based access",
    "Synchronizing client data, analytics, and ticket workflows"
  ],

  future: [
    "AI-generated legal case summaries",
    "Email notification system",
    "Lawyer case assignment workflow",
    "Advanced analytics and reporting",
    "Calendar and hearing management",
    "OCR-based legal document analysis",
    "Digital signature integration"
  ],

  repo: "https://github.com/abinayatech/AI-Legal-Intake",
},
];

export const additionalProjects = [
  {
    emoji: "🛍️",
    title: "Smart Deal",
    description: "AI-powered shopping assistant with price comparison, deal discovery, and smart purchase recommendations.",
    tech: ["React", "TypeScript", "AI"],
   
    repo: "https://github.com/abinayatech/smartdeals",
  },
  {
    emoji: "🛡️",
    title: "Kaaval",
    description: "AI-powered source code vulnerability scanner for secure software development.",
    tech: ["AI", "Security", "Python"],
    
    repo: "https://github.com/abinayatech/Kaaval_AI-Code-Vulnerability-Scanner",
  },
];

export const research = {
  title:
    "Privacy-Preserving Federated Learning-Based Passive CAPTCHA System for Human-Bot Detection in Aadhaar-like Web Portals",

  conference: "IEEE ICIRCA 2026 • Published in IEEE Xplore",

  status: "Published in IEEE Xplore",

  summary:
    "Published in the IEEE Xplore Digital Library following presentation at the 7th International Conference on Inventive Research in Computing Applications (IEEE ICIRCA 2026), held from 3–5 June 2026 at RVS College of Engineering and Technology, Coimbatore, India.",

  highlights: [
    "Published in IEEE Xplore Digital Library",
    "Privacy-preserving Federated Learning framework",
    "Passive CAPTCHA using behavioural biometrics",
    "Designed for Aadhaar-like secure web portals",
    "Lightweight and deployable client-side architecture",
  ],

  tech: [
    "Federated Learning",
    "Machine Learning",
    "Behavioural Biometrics",
    "Python",
    "Flask",
  ],

  authors: [
  "Abinaya S",
  "Ashirwaya S",
  "Dharshina S",
  "Sayeetha V",
  "Kingzy Grace R",
  "Vijay Kumar T",
],

  certificate: ieeeCertificate,

  relatedProjectSlug: "passive-captcha",

  // Replace with your direct IEEE Xplore article URL when available
  paperUrl: "https://ieeexplore.ieee.org/document/11570566",
};

export const certifications = [
  {
  name: "🏆Elite NPTEL Certification – Data Analytics with Python",
  org: "NPTEL (SWAYAM) • IIT Roorkee",
  description:
    "Successfully completed the Elite NPTEL certification in Data Analytics with Python. Covered Python programming, NumPy, Pandas, data visualization and data analytics.",
  image: nptelCertificate,
},
  {
  name: "Process Mining Rising Star - Business",
  org: "Celonis Academy",
  image: celonisBusiness,
  verifyUrl: "https://www.credly.com/earner/earned/badge/60c05f6c-9cb6-42c0-bda9-75eab28ee007",
  description: "Business process mining credential from Celonis Academy.",
  },
  {
  name: "Process Mining Rising Star - Technical",
  org: "Celonis Academy",
  image: celonisTechnical,
  verifyUrl: "https://www.credly.com/earner/earned/badge/916ba264-5d1b-4411-b6f4-712f7f204189",
  description: "Technical process mining credential from Celonis Academy.",
  },
  {
  name: "AI Agents with MongoDB",
  org: "MongoDB",
  description:
    "Successfully completed the Building AI Agents with MongoDB course and earned the MongoDB Skill credential.",
  image: mongodbCertificate,
},
  {
    name: "AI Foundations: Machine Learning",
    org: "LinkedIn Learning",
    description: "Artificial Intelligence Foundations course on Machine Learning.",
    image:linkedinMlCertificate ,
  },
  {
    name: "Data Analytics Job Simulation",
    org: "Deloitte (Forage)",
    description: "Practical tasks in data analysis and forensic technology.",
    image: deloitteCertificate  ,
  },
    {
    name: "Generative AI Mastermind",
    org: "Outskill",
    description: "Completion certificate for the Generative AI Mastermind program.",
    image: outskillCertificate,
  },
 
];

export const achievements = [
 
   {
  title: "IEEE ICIRCA 2026 — Certificate of Presentation",
  org: "IEEE | ICIRCA 2026",
  description:
    "Presented the research paper 'Privacy-Preserving Federated Learning-Based Passive CAPTCHA System for Human-Bot Detection in Aadhaar-like Web Portals' at the 7th International Conference on Inventive Research in Computing Applications (ICIRCA 2026).",
  date: "3–5 June 2026",
  image: ieeeCertificate,
},
 {
    title: "3rd Place — IEEE SparkNova'26 Project Expo",
    org: "KPR Institute of Engineering and Technology",
    date: "13 March 2026",
    description: "Secured 3rd prize in the Project Presentation event organised by IEEE KPRIET PES SBC and the Department of EEE.",
    image: sparknovaCertificate,
  },
  {
  title: "Top 10 Team — Israel–India Global Innovators Hackathon'26",
  org: "Ariel University × Sri Ramakrishna Engineering College",
  date: "5–6 January 2026",
  description:
    "Selected among the Top 10 teams from 500+ participating teams in the Israel–India Global Innovators Hackathon'26, advancing to the final stage of the competition.",
  image: israelIndiaCertificate,
},
  {
    title: "Kanam'26 — 24 Hours Hackathon",
    org: "Dr. N.G.P. Arts & Science College and Dr. N.G.P. Institute of Technology",
    date: "28–29 January 2026",
    description: "Participated in the National-Level 24 Hours Hackathon during Kanam 2026.",
    image: kanamCertificate,
  },
  {
    title: "HackSpora 2k25 — National Level 24 Hours Hackathon",
    org: "Karpagam Academy of Higher Education",
    date: "12–13 September 2025",
    description: "Participated in the National Level 24 Hours Hackathon organised by the AiQubit Association.",
    image: hacksporaCertificate,
  },
  {
  title: "Coding Problems Solved on LeetCode",
  org: "LeetCode",
  description:
    "Solved coding challenges on LeetCode to strengthen proficiency in Data Structures, Algorithms, problem-solving, and competitive programming.",
  date: "Ongoing",
  verifyUrl: "https://leetcode.com/u/abinaya__saravanan/",
},
];

export const stats = [
  { label: "Featured Projects", value: 3 },
  { label: "Internships", value: 2 },
  { label: "Research Publication", value: 1 },
  { label: "Certifications", value: 7 },
  { label: "Hackathons", value: 4 },
  { label: "LeetCode Problems", value: 50, suffix: "+" },
];

export const heroTechBadges = [
  "React", "TypeScript", "Python", "Java", "Tailwind CSS",
  "MySQL", "Supabase", "Git", "Prompt Engineering", "Machine Learning",
];
