/* ─────────────────────────────────────────────────────────────────
   PORTFOLIO DATA — edit your content here
   All text, links, skills, projects, etc. live in this file.
───────────────────────────────────────────────────────────────── */

import Cursor from "./components/Cursor";

export const PERSONAL = {
  name:       "Suriya C",
  logoText:   "SURIYA.DEV",
  tagline:    "Crafting clean, scalable, and intelligent web solutions with Python & Django.",
  description: "I am an aspiring Full Stack Developer and Computer Science Engineer (Class of 2026) with a strong foundational grasp of backend and frontend technologies. My practical journey began during my internship at Pydun Technology, where I learned to apply Python and Django to solve real-world development challenges.\n\nI focus on writing clean, effective code and building a solid understanding of database management and system architecture. I am a fast learner and tech enthusiast, always looking for opportunities to contribute my skills to meaningful projects while continuously growing as a developer.",
  badge:      "AVAILABLE FOR INTERNSHIPS & ROLES — 2026",

  email:    "mrsuriyan200549@gmail.com",
  emailLink: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlzpFgCmBnFkjDZnTrNBlrgmVfFFwhBNgvQhvSQMTqWDtVmZWfkLBKnqkHZrTkkCBdtQq",
  phone:    "+91 7904998763",
  linkedin: "https://linkedin.com/in/suriya-c-64218930b",
  github:   "https://github.com/mrsuriyan",
  whatsapp: "Chat with me",
  whatsappLink: "https://wa.me/917904998763",
  location: "Madurai, Tamil Nadu, India",

  resumePath: "/Suriya_Resume.pdf",
};

export const TYPING_ROLES = [
  "Full Stack Developer",
  "AI/ML Engineer",
  "Django Expert",
  "Python Developer",
];

export const STATS = [
  { n: 5,    suffix: "+",   label: "Projects Built" },
  { n: 3,    suffix: "mo",  label: "Internship Exp" },
  { n: 4,    suffix: "+",   label: "Certifications" },
];

export const SOFT_SKILLS = [
  "Problem Solving", "Agile Methodology", "System Design", "Technical Writing", "Team Collaboration",
];

export const PROFICIENCIES = [
  { label: "Python",          pct: 70, icon: "🐍" },
  { label: "Django",          pct: 60, icon: "🎯" },
  { label: "JavaScript",      pct: 55, icon: "📜" },
  { label: "SQL / MySQL",     pct: 75, icon: "🗄️" },
  { label: "HTML5 & CSS3",    pct: 80, icon: "🎨" },
  { label: "Git & GitHub",    pct: 70, icon: "🔧" },
  { label: "AI Integration",  pct: 50, icon: "🤖" },
];

export const STACK_CARDS = [
  { icon: "🐍", label: "Backend Core",   items: ["Python", "Django", "FastAPI", "Rest API", "Authentication"] },
  { icon: "⚛️", label: "Modern Frontend",  items: ["React.js", "JavaScript (ES6+)", "Vite", "Responsive UI", "Animations"] },
  { icon: "🗄️", label: "Data Architecture",  items: ["MySQL", "PostgreSQL", "Query Optimization", "Database Design"] },
  { icon: "🔧", label: "Dev Tools",  items: ["Git & GitHub", "GitHub Copilot", "LLMs", "Cursor / Antigravity"] },
  { icon: "🤖", label: "Intelligence",   items: ["Scikit-learn", "NLP Basics", "LLM Integration", "Prompt Engineering"] },
  { icon: "🎨", label: "Design System",   items: ["Vanilla CSS", "Figma", "Interaction Design", "Canva / Framer"] },
];

export const EXPERIENCE = [
  {
    role:    "Full Stack Developer Intern",
    company: "Pydun Technology Private Limited",
    period:  "Jan 2026 – Present",
    bullets: [
      "Architecting and implementing full-stack web applications using Python and Django framework.",
      "Optimizing MySQL database schemas for better performance and scalability.",
      "Developing responsive and high-fidelity frontend interfaces with HTML5, CSS3, and JavaScript.",
      "Integrating third-party APIs and AI tools to enhance application functionality.",
    ],
  },
];

export const EDUCATION = [
  { degree: "B.E. — Computer Science & Engineering", institution: "Chendhuran College of Engineering and Technology", year: "Expected 2026" },
  { degree: "HSC — 12th Grade",  institution: "Government Higher Secondary School", year: "2022" },
];

export const PROJECTS = [
  {
    number: "01",
    icon:   "🎬",
    title:  "AI Movie Recommendation System",
    desc:   "A sophisticated recommendation engine using TF-IDF and Cosine Similarity. Built with a Django backend and MySQL.",
    detailedDesc: "A powerhouse movie recommendation platform that leverages advanced Natural Language Processing (NLP) and Machine Learning (ML) algorithms. It provides a truly personalized experience by understanding movie semantics and deep metadata to match viewer preferences with high precision.",
    features: [
      "Semantic matching using TF-IDF & Cosine Similarity",
      "Hybrid Recommendation Engine (Content + Collaborative elements)",
      "Real-time metadata analysis from extensive movie datasets",
      "Robust Django & MySQL architecture for scalability",
      "Dynamic search & filter capabilities for intuitive discovery"
    ],
    chips:  ["Python", "Django", "Scikit-learn", "MySQL", "Machine Learning"],
    image:  "/projects/cinemaflow_premium.webp",
    liveUrl:   "https://movie-recommendations-1-90ca.onrender.com/",
    sourceUrl: "https://github.com/mrsuryan/Movie-recommendations",
  },
  {
    number: "02",
    icon:   "🛍️",
    title:  "Trev Page Clone",
    desc:   "A responsive and dynamic clone of the Trev page, built with a focus on high-performance and luxury aesthetics.",
    detailedDesc: "A pixel-perfect reconstruction of high-end software landing pages. This project focuses on replicating premium dark-mode aesthetics, complex layout transitions, and fluid animations that define elite software brand identities.",
    features: [
      "Fluid Scroll & Reveal animations using Intersection Observer",
      "Custom CSS Grid & Flexbox for pixel-perfect responsiveness",
      "High-performance asset optimization for near-instant loads",
      "Modern Glassmorphism UI elements with backdrop filtering",
      "Interactive product showcases and dynamic hover states"
    ],
    chips:  ["HTML", "CSS", "JavaScript", "Responsive Design", "Animations"],
    image:  "/projects/trev_premium.webp",
    liveUrl:   "https://terrv.netlify.app/",
    sourceUrl: "https://github.com/mrsuryan/pro",
  },
  {
    number: "03",
    icon:   "💼",
    title:  "Full-Stack E-Commerce Website",
    desc:   "A responsive and dynamic e-commerce website, built with product management and a seamless checkout experience.",
    detailedDesc: "An end-to-end commerce solution allowing users to browse, search, and manage their purchases with ease. It features a fully integrated shopping cart system and a comprehensive administration panel for inventory and order management.",
    features: [
      "Secure User Authentication & Profile management",
      "Comprehensive CRUD operations for product inventory",
      "Dynamic Shopping Cart & real-time price calculations",
      "Full-featured Admin Dashboard for business oversight",
      "Modular backend architecture using Python/Django"
    ],
    chips:  ["Python", "Django", "MySQL", "Responsive Design", "Full Stack"],
    image:  "/projects/ecommerce_premium.webp",
    liveUrl:   "comming Soon",
    sourceUrl: "Comming Soon",
  },
];

export const CERTIFICATIONS = [
  { icon: "💻", name: "Full-Stack Web Development with AI", issuer: "Pydun Technology" },
  { icon: "🔧", name: "Git & GitHub", issuer: "Udemy" },
  { icon: "🌐", name: "Web Dev for Beginners", issuer: "Simplilearn" },
  { icon: "🐍", name: "Introduction to Python", issuer: "SoloLearn" },
];

export const NAV_ITEMS = ["home", "about", "skills", "experience", "projects", "contact"];

