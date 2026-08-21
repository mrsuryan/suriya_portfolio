import { useState, useEffect, useCallback, useMemo, lazy, Suspense } from "react";
import Lenis from 'lenis';
import "./styles/global.css";

// ── Core Components ──
import Preloader   from "./components/Preloader";
import Cursor      from "./components/Cursor";
import Navbar      from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";

// ── Sections (Non-Lazy for Stability) ──
import Hero         from "./components/sections/Hero";
import About        from "./components/sections/About";
import Skills       from "./components/sections/Skills";
import Experience   from "./components/sections/Experience";
import Projects     from "./components/sections/Projects";
import Contact      from "./components/sections/Contact";
import Footer       from "./components/sections/Footer";

// ── Heavy Components (Lazy) ──
const Particles     = lazy(() => import("./components/Particles"));
const ShootingStars = lazy(() => import("./components/ShootingStars"));
const MobileBackground = lazy(() => import("./components/MobileBackground"));
const ProjectModal  = lazy(() => import("./components/sections/ProjectModal"));

// ── Hooks ──
import useScrollReveal from "./hooks/useScrollReveal";

export default function App() {
  const [activeNav, setActiveNav] = useState("home");
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [siteReady, setSiteReady] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "";
    document.documentElement.style.scrollBehavior = "smooth";
  }, [theme]);
  
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isModalOpen]);

  useEffect(() => {
    if (isMobile) {
      document.documentElement.style.scrollBehavior = "smooth";
      return;
    }

    // Force auto scroll-behavior for Lenis to work perfectly
    document.documentElement.style.scrollBehavior = "auto";

    const lenis = new Lenis({
      lerp: 0.15, // Snappier feel
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 1.0,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
      document.documentElement.style.scrollBehavior = "smooth";
    };
  }, [isMobile]);

  useScrollReveal();

  const handleFormSubmit = useCallback(async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://formspree.io/f/mgonjndk", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json
      });
      const data = await response.json();
      if (response.ok || data.ok) {
        setSent(true);
      } else {
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    }
    setIsSubmitting(false);
  }, []);

  const navTo = useCallback((id) => {
    setActiveNav(id);
    if (window.lenis) {
      window.lenis.scrollTo(`#${id}`, { offset: -80, duration: 1.5 });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const ids = ["home", "about", "skills", "experience", "projects", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // More precise for section detection
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    }, observerOptions);

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main-wrapper" style={{ overflowX: "hidden", position: "relative", background: "transparent", zIndex: 1 }}>
      <ScrollProgress />
      <Preloader onFinish={() => {
        setSiteReady(true);
        setTimeout(() => window.scrollTo(0, 0), 0);
      }} />
      <ScrollToTop />
      
      <Suspense fallback={null}>
        {!isMobile && !isModalOpen && <ShootingStars />}
        {!isMobile && !isModalOpen && <Particles />}
        {!isModalOpen && <MobileBackground />}
      </Suspense>
      
      <Cursor />
      <Navbar activeNav={activeNav} navTo={navTo} theme={theme} toggleTheme={toggleTheme} />
      
      <div 
        className={`site-container ${siteReady ? "is-revealed" : ""}`} 
        style={{ 
          overflowX: "hidden", 
          visibility: isModalOpen ? "hidden" : "visible",
          pointerEvents: isModalOpen ? "none" : "all"
        }}
      >
        <Hero navTo={navTo} />
        <About navTo={navTo} />
        <Skills />
        <Experience />
        <Projects setSelectedProject={setSelectedProject} setIsModalOpen={setIsModalOpen} />
        <Contact sent={sent} isSubmitting={isSubmitting} handleFormSubmit={handleFormSubmit} />
        <Footer navTo={navTo} />
      </div>

      <Suspense fallback={null}>
        <ProjectModal 
          selectedProject={selectedProject} 
          isModalOpen={isModalOpen} 
          setIsModalOpen={setIsModalOpen} 
        />
      </Suspense>
    </div>
  );
}
