import { useState, useEffect } from "react";
import DownloadBtn from "./DownloadBtn";
import { NAV_ITEMS, PERSONAL } from "../data";

/**
 * Fixed top navigation bar.
 * – Desktop: nav links + download button + "Hire Me" CTA
 * – Mobile:  animated burger → full-screen slide-in menu
 */
export default function Navbar({ activeNav, navTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scrolled state & Hide-on-scroll logic
  useEffect(() => {
    let isTicking = false;
    const onScroll = () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Background solid state
          setScrolled(currentScrollY > 20);

          // Hide/Show logic (Desktop only - simplified check)
          if (window.innerWidth > 768) {
            // Threshold reduced to 50 for faster hiding
            // Added currentScrollY > 10 to avoid jitter at the very top
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
              setIsVisible(false); // Scrolling down - hide
            } else if (lastScrollY - currentScrollY > 5) {
              setIsVisible(true);  // Scrolling up (at least 5px) - show
            }
          } else {
            setIsVisible(true);    // Always visible on mobile
          }

          setLastScrollY(currentScrollY);
          isTicking = false;
        });
        isTicking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavTo = id => {
    navTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""} ${!isVisible ? "nav-hidden" : ""}`}>
        <div className="container nav-container">
          <button 
            type="button"
            className="nav-logo" 
            onClick={() => handleNavTo("home")} 
            aria-label="Back to top"
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", padding: 0 }}
          >
            <img 
              src="/brand_logo.png" 
              alt="Suriya C Logo" 
              width="32" 
              height="32" 
              style={{ width: "32px", height: "32px", borderRadius: "6px" }} 
            />
            <span>{PERSONAL.logoText}</span>
          </button>

          <div className="nav-links desktop-only">
            {NAV_ITEMS.map(s => (
              <button
                key={s}
                type="button"
                className={`nav-link${activeNav === s ? " active" : ""}`}
                style={{ background: "none", border: "none", cursor: "pointer", textTransform: "capitalize" }}
                onClick={() => handleNavTo(s)}
                aria-label={`Scroll to ${s}`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="nav-cta-group desktop-only">
            <DownloadBtn label="Resume" className="btn btn-outline" style={{ padding: "8px 16px", fontSize: "0.8rem" }} />
          </div>

          <button className={`burger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close Menu">×</button>
        <div className="mobile-menu-links" onClick={(e) => e.stopPropagation()}>
          {NAV_ITEMS.map((s, i) => (
            <button
              key={s}
              type="button"
              className={`mobile-nav-link${activeNav === s ? " active" : ""}`}
              onClick={() => handleNavTo(s)}
              style={{ transitionDelay: `${i * 0.1}s` }}
              aria-label={`Navigate to ${s}`}
            >
              {s}
            </button>
          ))}
          <div style={{ marginTop: "20px", opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(15px)', transition: 'all 0.4s', transitionDelay: `${NAV_ITEMS.length * 0.1}s` }}>
            <DownloadBtn label="Download Resume" className="btn btn-primary" />
          </div>
        </div>
      </div>
    </>
  );
}
