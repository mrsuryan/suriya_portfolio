/* ─────────────────────────────────────────────────────────────────
   PORTFOLIO DATA — edit your content here
   All text, links, skills, projects, etc. live in this file.
───────────────────────────────────────────────────────────────── */

import Cursor from "./components/Cursor";

export const PERSONAL = {
  name:       "Suriya C",
  logoText:   "SURIYA.DEV",
  tagline:    "Crafting clean, scalable, and intelligent web solutions with Python & Django.",
  description: "Aspiring Full Stack Developer and Computer Science Engineer (Class of 2026). I specialize in building clean, scalable web applications using Python and Django, with a focus on efficient system design and modern AI integration.\n\nHaving successfully completed my Full Stack Internship at Pydun Technology, I am now focused on applying my skills to complex challenges and creating high-performance digital experiences.",
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
  { 
    category: "Frontend", 
    skills: [
      { label: "HTML5", icon: "🎨", level: "Intermediate" },
      { label: "CSS3", icon: "🎨", level: "Intermediate" },
      { label: "JavaScript", icon: "📜", level: "Beginner" },
      { label: "React", icon: "⚛️", level: "Beginner" },
      { label: "Tailwind CSS", icon: "🌊", level: "Beginner" }
    ] 
  },
  { 
    category: "Backend", 
    skills: [
      { label: "Python", icon: "🐍", level: "Intermediate" },
      { label: "Django", icon: "🎯", level: "Intermediate" },
      { label: "Django REST Framework", icon: "🚀", level: "Beginner" }
    ] 
  },
  { 
    category: "Database", 
    skills: [
      { label: "MySQL", icon: "🗄️", level: "Intermediate" },
    ] 
  },
  { 
    category: "Tools", 
    skills: [
      { label: "Git", icon: "🔧", level: "Intermediate" },
      { label: "GitHub", icon: "🐙", level: "Intermediate" },
      { label: "VS Code", icon: "💻", level: "Intermediate" }
    ] 
  },
  { 
    category: "AI Tools", 
    skills: [
      { label: "Cursor", icon: "🤖", level: "AI-assisted coding" },
      { label: "ChatGPT", icon: "🧠", level: "debugging & logic building" },
      { label: "GitHub Copilot", icon: "🐙", level: "code suggestions" },
      { label: "Claude", icon: "🎭", level: "Advanced coding & reasoning" },
      { label: "Antigravity", icon: "🌌", level: "Autonomous coding & Full-stack partner" }
    ] 
  },
  { 
    category: "Other", 
    skills: [
      { label: "AI Integration", icon: "🤖", level: "Beginner" },
      { label: "Deployment (Netlify, Render)", icon: "☁️", level: "Intermediate" },
      { label: "Problem Solving", icon: "🧠", level: "Beginner" }
    ] 
  }
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
    period:  "Jan 2026 – Apr 2026",
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
    detailedDesc: {
      problem: "Users struggle to find movies they actually like amidst thousands of choices, leading to 'decision paralysis'.",
      solution: "Built a sophisticated ML-based recommendation system using NLP (TF-IDF) and Cosine Similarity to match user intent.",
      tech: "Django, Python, Scikit-learn, MySQL",
      impact: "Improved recommendation accuracy and discovery speed by 30% for personalized user experiences."
    },
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
    icon:   "🎓",
    title:  "EduHub - Digital Learning Portal",
    desc:   "A modern educational platform designed to streamline access to digital courses and study materials.",
    detailedDesc: {
      problem: "Students and educators lack a centralized, high-performance platform for organized digital resource access.",
      solution: "Developed a comprehensive learning portal with a focus on fast navigation, categorized resources, and modern UI.",
      tech: "SvelteKit, Tailwind CSS, JavaScript, Responsive UI",
      impact: "Improved resource discovery speed and provided a seamless educational experience across all devices."
    },
    features: [
      "Modern & Fast UI built with SvelteKit",
      "Dynamic Resource Categorization for easy access",
      "Tailwind CSS for pixel-perfect responsive design",
      "Optimized Asset Loading for high performance",
      "Interactive Course & Material Showcase"
    ],
    chips:  ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design", "Frontend"],
    image:  "/projects/eduhub_premium.webp",
    liveUrl:   "https://eduhuba.netlify.app/",
    sourceUrl: "https://github.com/mrsuryan/studio",
  },
  {
    number: "03",
    icon:   "💼",
    title:  "Full-Stack E-Commerce Website",
    desc:   "A responsive and dynamic e-commerce website, built with product management and a seamless checkout experience.",
    detailedDesc: {
      problem: "Small businesses struggle with fragmented inventory and insecure checkout processes for online sales.",
      solution: "Developed an end-to-end commerce platform with secure authentication, admin dashboard, and cart management.",
      tech: "Python, Django, MySQL, Full Stack",
      impact: "Automated inventory tracking and streamlined the customer checkout experience significantly."
    },
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

