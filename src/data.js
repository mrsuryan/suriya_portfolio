/* ─────────────────────────────────────────────────────────────────
   PORTFOLIO DATA — edit your content here
   All text, links, skills, projects, etc. live in this file.
───────────────────────────────────────────────────────────────── */

import Cursor from "./components/Cursor";

export const PERSONAL = {
  name:       "Suriya C",
  logoText:   "SURIYA.DEV",
  tagline:    "Crafting clean, scalable, and intelligent web solutions with Python & Django.",
  description: "I am a Full Stack Developer specializing in Python and Django, with a strong foundation in Computer Science and a keen interest in AI/ML. I recently completed my internship at Pydun Technology, where I worked on real-world applications and strengthened my practical development skills.\nI am currently pursuing my degree (graduating in 2026) and actively looking for opportunities to apply my skills, contribute to meaningful projects, and grow as a developer.",
  badge:      "AVAILABLE FOR INTERNSHIPS & ROLES — 2026",

  email:    "mrsuriyan200549@gmail.com",
  emailLink: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlzpFgCmBnFkjDZnTrNBlrgmVfFFwhBNgvQhvSQMTqWDtVmZWfkLBKnqkHZrTkkCBdtQq",
  phone:    "+91 7904998763",
  linkedin: "https://linkedin.com/in/suriya-c-64218930b",
  github:   "https://github.com/mrsuriyan",
  whatsapp: "https://wa.me/917904998763",
  location: "Madurai, Tamil Nadu, India",

  resumePath: "/Suriya_Resume.pdf",
};

export const TYPING_ROLES = [
  "Full Stack Developer",
  "Python & Django Developer",
  "AI/ML Enthusiast",
  "Frontend Enthusiast",
  "Software Engineer",
];

export const STATS = [
  { n: "5",    suffix: "+",   label: "Projects Built" },
  { n: "3",    suffix: " mo", label: "Internship Exp" },
  { n: "4",    suffix: "+",   label: "Certifications" },
];

export const SOFT_SKILLS = [
  "Problem Solving", "Agile Methodology", "System Design", "Technical Writing", "Team Collaboration",
];

export const PROFICIENCIES = [
  { label: "Python",          pct: 70 },
  { label: "Django",          pct: 60 },
  { label: "JavaScript",      pct: 55 },
  { label: "SQL / MySQL",     pct: 75 },
  { label: "HTML5 & CSS3",    pct: 80 },
  { label: "Git & GitHub",    pct: 70 },
  { label: "AI Integration",  pct: 50 },
];

export const STACK_CARDS = [
  { icon: "🐍", label: "Backend",   items: ["Python", "Django", "FastAPI", "Rest API"] },
  { icon: "⚛️", label: "Frontend",  items: ["JavaScript (ES6+)", "HTML5", "CSS3", "Vite", "Modern UI Design"] },
  { icon: "🗄️", label: "Database",  items: ["MySQL", "PostgreSQL", "Query Optimization"] },
  { icon: "🔧", label: "AI Tools",     items: ["Git", "GitHub", "VS Code", "GitHub Copilot", "LLMs", "Gemini","Cursor","Antigravity"] },
  { icon: "🤖", label: "AI / ML",   items: ["Scikit-learn", "Natural Language Processing", "LLMs"] },
  { icon: "🎨", label: "UI / UX",   items: ["Vanilla CSS", "Responsive Design", "Figma Basics", "Animations","Stitch","Canva","Framer"] },
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
    image:  "/projects/cinemaflow.png",
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
    image:  "/projects/trev.png",
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
    image:  "/projects/ecommerce.png",
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

