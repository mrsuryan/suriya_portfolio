import React, { memo } from 'react';
import DownloadBtn from "../DownloadBtn";
import { EmailIconSm, WhatsAppIconSm, GitHubIconSm, LinkedInIconSm } from "../SvgIcons";
import { PERSONAL, NAV_ITEMS } from "../../data";

const Footer = memo(({ navTo }) => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* LEFT: Brand & Location */}
        <div className="footer-col">
          <h4>Information</h4>
          <div className="footer-brand">
            <div 
              className="footer-logo-link hoverable" 
              onClick={() => navTo('home')}
              style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
            >
              <img 
                src="/brand_logo.png" 
                alt="Suriya C Logo" 
                width="30" 
                height="30" 
                loading="lazy"
                style={{ width: "30px", height: "30px", borderRadius: "6px" }} 
              />
              <span className="footer-logo grad-text" style={{ fontSize: "1.2rem", marginBottom: 0 }}>{PERSONAL.logoText}</span>
            </div>
            <div className="footer-contact-item">
              <span>📍 {PERSONAL.location}</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{PERSONAL.tagline}</p>
          </div>
        </div>

        {/* CENTER: Navigation */}
        <div className="footer-col" style={{ textAlign: "center" }}>
          <h4>Quick Links</h4>
          <div className="footer-nav" style={{ alignItems: "center" }}>
            {NAV_ITEMS.map(s => (
              <button key={s} className="footer-nav-link" onClick={() => navTo(s)}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
            <div style={{ marginTop: "10px" }}>
              <DownloadBtn label="Download Resume" className="footer-nav-link" style={{ fontSize: "0.95rem", padding: 0 }} />
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Details */}
        <div className="footer-col contact-col">
          <h4>Contact Me</h4>
          <div className="footer-nav">
            <a href={PERSONAL.emailLink} target="_blank" rel="noopener noreferrer" className="footer-contact-item" aria-label="Send me an email">
              <EmailIconSm />
              <span>{PERSONAL.email}</span>
            </a>
            <a href={PERSONAL.whatsappLink} target="_blank" rel="noopener noreferrer" className="footer-contact-item" aria-label="Chat with me on WhatsApp">
              <WhatsAppIconSm />
              <span>{PERSONAL.whatsapp}</span>
            </a>
            <div className="footer-social-row" style={{ marginTop: "10px", display: "flex", gap: "15px" }}>
              <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="footer-social-icon-circle" aria-label="Visit my GitHub profile">
                <GitHubIconSm />
              </a>
              <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-icon-circle" aria-label="Visit my LinkedIn profile">
                <LinkedInIconSm />
              </a>
            </div>
          </div>
        </div>

        <p className="copyright">© {new Date().getFullYear()} {PERSONAL.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
});

export default Footer;
