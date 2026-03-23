# Suriya C — Portfolio

A fully animated, 3D interactive personal portfolio built with **React + Vite**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:5173
```

---

## 📁 Project Structure

```
suriya_portfolio/
├── public/
│   ├── favicon.svg          # Site icon
│   └── Suriya_C_Resume.pdf  # ⚠️  PUT YOUR RESUME PDF HERE
│
├── src/
│   ├── components/
│   │   ├── Cursor.jsx       # Triple-layer custom cursor
│   │   ├── Particles.jsx    # Interactive particle canvas
│   │   ├── Navbar.jsx       # Nav + animated burger menu
│   │   ├── DownloadBtn.jsx  # Animated download button
│   │   ├── CountUp.jsx      # Number count-up animation
│   │   ├── SkillBar.jsx     # Animated skill progress bars
│   │   ├── TiltCard.jsx     # 3D tilt card with cursor glow
│   │   └── SvgIcons.jsx     # Animated SVG icons (email, phone, etc.)
│   │
│   ├── hooks/
│   │   ├── useTyping.js     # Typewriter effect hook
│   │   └── useScrollReveal.js # Scroll-triggered reveal animations
│   │
│   ├── styles/
│   │   └── global.css       # All styles (colours, layout, animations)
│   │
│   ├── data.js              # ✏️  ALL YOUR CONTENT LIVES HERE
│   ├── App.jsx              # Main layout — assembles all sections
│   └── main.jsx             # React entry point
│
├── index.html
├── vite.config.js
└── package.json
```

---

## ✏️ How to Edit Your Content

**All text content is in one place: `src/data.js`**

### Personal Info & Links
```js
export const PERSONAL = {
  name:       "Suriya C",
  email:      "mrsuriyan200549@gmail.com",
  phone:      "+91 7904998763",
  linkedin:   "https://linkedin.com/in/suriya-c-64218930b",
  github:     "https://github.com/mrsuriyan",
  resumePath: "/Suriya_C_Resume.pdf",  // ← path to your PDF in /public
};
```

### Add a New Project
```js
export const PROJECTS = [
  {
    number: "03",
    icon:   "🔥",
    title:  "My New Project",
    desc:   "Brief description of what it does.",
    chips:  ["React", "Node.js", "MongoDB"],
    liveUrl:   "https://myproject.com",
    sourceUrl: "https://github.com/mrsuriyan/myproject",
  },
];
```

### Add a New Skill Bar
```js
export const PROFICIENCIES = [
  { label: "React", pct: 80 },
  // ... add more here
];
```

### Change Colour Theme
Open `src/styles/global.css` and edit the `:root` variables:
```css
:root {
  --a1: #00f5c4;   /* primary teal   → change this */
  --a2: #7c3aed;   /* purple accent  → change this */
  --a3: #f59e0b;   /* amber download → change this */
  --a4: #ec4899;   /* pink hover     → change this */
}
```

### Change Side Padding
```css
:root {
  --px: 64px;  /* desktop side padding — reduce for less breathing room */
}
```

---

## 📄 Resume PDF

1. Place your PDF file inside the `/public` folder
2. Name it `Suriya_C_Resume.pdf` (or update `PERSONAL.resumePath` in `data.js`)

---

## 🏗️ Build for Production

```bash
npm run build
```

Output is in the `/dist` folder — deploy to Vercel, Netlify, or GitHub Pages.

### Deploy to Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag the /dist folder to netlify.com/drop
```

---

## 🎨 Features

| Feature | Component |
|---|---|
| Custom 3-layer cursor | `Cursor.jsx` |
| Interactive particle network | `Particles.jsx` |
| Animated burger menu | `Navbar.jsx` |
| Resume download button | `DownloadBtn.jsx` |
| Typing effect (4 roles) | `useTyping.js` |
| Count-up numbers | `CountUp.jsx` |
| Animated skill bars | `SkillBar.jsx` |
| 3D tilt cards with glow | `TiltCard.jsx` |
| Animated SVG icons | `SvgIcons.jsx` |
| Scroll reveal animations | `useScrollReveal.js` |
| Infinite cert marquee | `App.jsx` |
| Fully responsive layout | `global.css` |

---

Built with ❤️ in Tamil Nadu
