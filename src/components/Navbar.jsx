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
    const onScroll = () => setScrolled(window.scrollY > 50);
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
      {/* ── Desktop nav ── */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-logo" onClick={() => handleNavTo("home")}>
          {PERSONAL.logoText}
        </div>

        <div className="nav-desktop">
          {NAV_ITEMS.map(s => (
            <button
              key={s}
              className={`nav-btn${activeNav === s ? " active" : ""}`}
              onClick={() => handleNavTo(s)}
            >
              {s}
            </button>
          ))}
          <DownloadBtn label="Download CV" className="nav-dl" />
          <button className="nav-cta" onClick={() => handleNavTo("contact")}>
            Hire Me
          </button>
        </div>

        {/* Mobile burger area */}
        <div className="burger-wrap">
          <DownloadBtn label="CV" className="nav-dl" />
          <button
            className={`burger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="burger-bar" />
            <span className="burger-bar" />
            <span className="burger-bar" />
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen menu ── */}
      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {NAV_ITEMS.map((s, i) => (
          <button
            key={s}
            className={`mob-nav-btn${activeNav === s ? " active" : ""}`}
            style={{ transitionDelay: menuOpen ? `${i * 0.055}s` : "0s" }}
            onClick={() => handleNavTo(s)}
          >
            {s}
          </button>
        ))}
        <DownloadBtn label="Download Resume" className="mob-dl-btn" />
      </div>
    </>
  );
}
