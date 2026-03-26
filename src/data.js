/* ─────────────────────────────────────────────────────────────────
   PORTFOLIO DATA — edit your content here
   All text, links, skills, projects, etc. live in this file.
───────────────────────────────────────────────────────────────── */

import Cursor from "./components/Cursor";

export const PERSONAL = {
  name:       "Suriya.C",
  logoText:   "SURIYA.DEV",
  tagline:    "Building scalable and high-performance web applications",
  description: "I am a dedicated Full Stack Developer with a strong focus on Python and Django. With a solid foundation in Computer Science and a passion for AI/ML, I am committed to building robust, user-centric web applications. Graduating in 2026, I am currently interning at Pydun Technology, where I am gaining hands-on experience by applying my Python and Django knowledge to professional projects.",
  badge:      "AVAILABLE FOR INTERNSHIPS & ROLES — 2026",

  email:    "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlzpFgCmBnFkjDZnTrNBlrgmVfFFwhBNgvQhvSQMTqWDtVmZWfkLBKnqkHZrTkkCBdtQq",
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
  "Software Engineer 2026",
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
  { label: "SQL / MySQL",     pct: 80 },
  { label: "HTML5 & CSS3",    pct: 85 },
  { label: "Git & GitHub",    pct: 85 },
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
    desc:   "A sophisticated recommendation engine using TF-IDF and Cosine Similarity. Built with a Django backend and MySQL, it analyzes movie metadata to provide personalized suggestions.",
    chips:  ["Python", "Django", "Scikit-learn", "MySQL", "Machine Learning"],
    liveUrl:   "https://movie-recommendations-1-90ca.onrender.com/",
    sourceUrl: "https://github.com/mrsuryan/Movie-recommendations",
  },
  {
    number: "02",
    icon:   "🛍️",
    title:  "Trev Page Clone",
    desc:   "A responsive and dynamic clone of the Trev page, built with a focus on high-performance and responsiveness. Includes product management, cart functionality, and a seamless checkout experience.",
    chips:  ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl:   "https://terrv.netlify.app/",
    sourceUrl: "https://github.com/mrsuryan/pro",
  },
  {
    number: "03",
    icon:   "💼",
    title:  "Full-Stack E-Commerce Website",
    desc:   "A responsive and dynamic e-commerce website, built with a focus on high-performance and responsiveness. Includes product management, cart functionality, and a seamless checkout experience.",
    chips:  ["Python", "Django", "MySQL", "Responsive Design"],
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

