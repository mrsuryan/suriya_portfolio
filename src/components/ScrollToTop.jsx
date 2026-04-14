import { useState, useEffect, useRef } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const circleRef = useRef(null);

  // SVG Circle properties
  const radius = 22;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const handleScroll = () => {
      // Visibility toggle
      const scrolled = window.scrollY;
      setVisible(scrolled > 50);

      // Hyper-sensitive Direct DOM Update
      if (circleRef.current) {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPct = Math.max(0, Math.min(1, scrolled / totalScroll));
        const offset = circumference - scrollPct * circumference;
        circleRef.current.style.strokeDashoffset = offset;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [circumference]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg className="progress-ring" width="50" height="50">
        <circle
          ref={circleRef}
          className="progress-ring-circle"
          stroke="var(--accent-cyan)"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          fill="transparent"
          r={radius}
          cx="25"
          cy="25"
          style={{ transition: "none" }}
        />
      </svg>
      <div className="arrow-icon">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </div>
    </button>
  );
}
