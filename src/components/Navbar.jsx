import { useState, useEffect } from "react";
import DownloadBtn from "./DownloadBtn";
import { NAV_ITEMS, PERSONAL } from "../data";

/**
 * Fixed top navigation bar.
 * – Desktop: nav links + download button + "Hire Me" CTA
 * – Mobile:  animated burger → full-screen slide-in menu
 */
export default function Navbar({ activeNav, navTo }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  // Scrolled state for backdrop
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <nav className={`nav${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
        <div className="container nav-container">
          <div className="nav-logo" onClick={() => handleNavTo("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/brand_logo.png" alt="Logo" style={{ width: "32px", height: "32px", borderRadius: "6px" }} />
            <span>{PERSONAL.logoText}</span>
          </div>

          <div className="nav-links desktop-only">
            {NAV_ITEMS.map(s => (
              <button
                key={s}
                className={`nav-link${activeNav === s ? " active" : ""}`}
                style={{ background: "none", border: "none", cursor: "pointer", textTransform: "capitalize" }}
                onClick={() => handleNavTo(s)}
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

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close Menu">×</button>
        <div className="mobile-menu-links">
          {NAV_ITEMS.map(s => (
            <button
              key={s}
              className={`mobile-nav-link${activeNav === s ? " active" : ""}`}
              onClick={() => handleNavTo(s)}
            >
              {s}
            </button>
          ))}
          <div style={{ marginTop: "20px" }}>
            <DownloadBtn label="Download Resume" className="btn btn-primary" />
          </div>
        </div>
      </div>
    </>
  );
}
