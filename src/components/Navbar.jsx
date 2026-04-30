import { useState, useEffect } from "react";
import DownloadBtn from "./DownloadBtn";
import { NAV_ITEMS, PERSONAL } from "../data";
import { SunIcon, MoonIcon } from "./SvgIcons";

/**
 * Fixed top navigation bar.
 * – Desktop: nav links + download button + "Hire Me" CTA
 * – Mobile:  animated burger → full-screen slide-in menu
 */
export default function Navbar({ activeNav, navTo, theme, toggleTheme }) {
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
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            // Increased to 400px to cover the entire footer area
            const isNearBottom = (currentScrollY + clientHeight) > (scrollHeight - 400);

            // Always show at the top 50px
            if (currentScrollY <= 50) {
              setIsVisible(true);
            }
            // Hide very quickly (after 20px) when scrolling down
            else if (currentScrollY > lastScrollY && currentScrollY > 20) {
              setIsVisible(false); // Scrolling down - hide
            } 
            // Only show if user scrolls up significantly (at least 100px) 
            // AND not near the bottom of the page
            else if (lastScrollY - currentScrollY > 100 && !isNearBottom) {
              setIsVisible(true);  // Scrolling up - show
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
              src="/brand_logo.webp" 
              alt="Suriya C Logo" 
              width="32" 
              height="32" 
              style={{ width: "32px", height: "32px", borderRadius: "6px" }} 
            />
            <span className="logo-text">{PERSONAL.logoText}</span>
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

          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <div className="nav-cta-group">
              <button 
                className="theme-toggle" 
                onClick={toggleTheme} 
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>
              <div className="desktop-only">
                <DownloadBtn label="CV" className="btn btn-outline" style={{ padding: "8px 16px", fontSize: "0.8rem" }} />
              </div>
            </div>

            <button className={`burger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              <div className="burger-line"></div>
              <div className="burger-line"></div>
              <div className="burger-line"></div>
            </button>
          </div>
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
          <div style={{ marginTop: "20px", opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(15px)', transition: 'all 0.4s', transitionDelay: `${NAV_ITEMS.length * 0.1}s`, display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
            <DownloadBtn label="Download Resume" className="btn btn-primary" />
          </div>
        </div>
      </div>
    </>
  );
}
