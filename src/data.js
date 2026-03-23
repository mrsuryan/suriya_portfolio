/* ─────────────────────────────────────────────────────────────────
   PORTFOLIO DATA — edit your content here
   All text, links, skills, projects, etc. live in this file.
───────────────────────────────────────────────────────────────── */

export const PERSONAL = {
  name:       "Suriya.C",
  logoText:   "SURIYA.DEV",
  tagline:    "COMPUTER SCIENCE ENGINEER",
  description:"Building full-stack web apps & AI-powered products with Python, Django, and modern web tech. Interning at Pydun Technology · graduating 2026.",
  badge:      "OPEN TO OPPORTUNITIES — 2026",

  email:    "mrsuriyan200549@gmail.com",
  phone:    "+91 7904998763",
  linkedin: "https://linkedin.com/in/suriya-c-64218930b",
  github:   "https://github.com/mrsuriyan",
  whatsapp: "https://wa.me/917904998763",

  /* ⚠️  Replace with your actual PDF path, e.g. "/Suriya_C_Resume.pdf"
     Place the PDF inside the /public folder of the project.           */
  resumePath: "/Suriya_Resume.pdf",
};

export const TYPING_ROLES = [
  "Full Stack Developer",
  "Django Engineer",
  "AI App Builder",
  "CS Engineer 2026",
];

export const STATS = [
  { n: "2",    suffix: "+",   label: "Projects"       },
  { n: "3",    suffix: "+",   label: "Certifications"  },
  { n: "3",    suffix: " mo", label: "Internship"      },
  { n: "2026", suffix: "",    label: "Graduation"      },
];

export const SOFT_SKILLS = [
  "Problem Solving", "Teamwork", "Communication", "Adaptability", "Time Management",
];

export const PROFICIENCIES = [
  { label: "Python",          pct: 60 },
  { label: "JavaScript",      pct: 55 },
  { label: "Django",          pct: 50 },
  { label: "HTML & CSS",      pct: 90 },
  { label: "MySQL",           pct: 70 },
  { label: "Git & GitHub",    pct: 75 },
  { label: "AI Tools",        pct: 68 },

];

export const STACK_CARDS = [
  { icon: "⌨️", label: "Languages", items: ["Python", "JavaScript"] },
  { icon: "🎨", label: "Frontend",  items: ["HTML5", "CSS3", "Responsive UI"] },
  { icon: "⚙️", label: "Framework", items: ["Django"] },
  { icon: "🗄️", label: "Database",  items: ["MySQL"] },
  { icon: "🛠️", label: "Dev Tools", items: ["Git", "GitHub", "VS Code", "GitHub Copilot","Cursor","Antigravity"] },
  { icon: "🤖", label: "AI / ML",   items: ["Scikit-learn", "TF-IDF", "AI Tools"] },
];

export const EXPERIENCE = [
  {
    role:    "Full Stack Developer Intern",
    company: "Pydun Technology Private Limited",
    period:  "Jan 2026 – Mar 2026",
    bullets: [
      "Full stack web application development using Python and Django",
      "Backend logic & MySQL database design and management",
      "Responsive frontend UIs with HTML5 and CSS3",
      "Collaborated with team on real-time project requirements",
    ],
  },
];

export const EDUCATION = [
  { degree: "B.E. — Computer Science & Engineering", institution: "Chendhuran College of Engineering and Technology, Pudukkottai", year: "Expected 2026" },
  { degree: "HSC — 12th Grade",  institution: "Government Higher Secondary School, Tamil Nadu", year: "2022" },
  { degree: "SSLC — 10th Grade", institution: "Don Bosco Higher Secondary School, Tamil Nadu",  year: "2020" },
];

export const PROJECTS = [
  {
    number: "01",
    icon:   "🎬",
    title:  "AI Movie Recommendation System",
    desc:   "Content-based ML engine using TF-IDF + cosine similarity. Recommends similar films from metadata via Django backend and MySQL.",
    chips:  ["Python", "Django", "Scikit-learn", "TF-IDF", "MySQL", "HTML", "CSS", "JS"],
    liveUrl:   "https://movie-recommendations-1-90ca.onrender.com/",
    sourceUrl: "https://github.com/mrsuryan/Movie-recommendations",
  },
  {
    number: "02",
    icon:   "🖥️",
    title:  "Modern Landing Page Clone",
    desc:   "Pixel-perfect recreation of a modern landing page with responsive grid, CSS animations, transitions, and cross-browser compatibility.",
    chips:  ["HTML5", "CSS3", "JavaScript", "Responsive", "CSS Animations"],
    liveUrl:   "https://terrv.netlify.app/",
    sourceUrl: "https://github.com/mrsuryan/pro",
  },
];

export const CERTIFICATIONS = [
  { icon: "💻", name: "Full-Stack Web Development with AI", issuer: "Pydun Technology Private Limited" },
  { icon: "🔧", name: "Git & GitHub", issuer: "Udemy" },
  { icon: "🌐", name: "Web Dev for Beginners", issuer: "Simplilearn" },
  { icon: "🐍", name: "Introduction to Python", issuer: "SoloLearn" },
];

export const NAV_ITEMS = ["home", "about", "skills", "experience", "projects", "contact"];
