import { useState, useEffect } from "react";
import "./styles/global.css";

// ── Components ──
import Cursor      from "./components/Cursor";
import Particles   from "./components/Particles";
import Navbar      from "./components/Navbar";
import DownloadBtn from "./components/DownloadBtn";
import SkillBar    from "./components/SkillBar";
import TiltCard    from "./components/TiltCard";
import {
  EmailIcon, PhoneIcon, LinkedInIcon, GitHubIcon, WhatsAppIcon,
  LinkedInIconSm, GitHubIconSm, EmailIconSm, WhatsAppIconSm,
} from "./components/SvgIcons";

// ── Hooks ──
import useTyping      from "./hooks/useTyping";
import useScrollReveal from "./hooks/useScrollReveal";

// ── Data ──
import {
  PERSONAL, TYPING_ROLES, STATS, SOFT_SKILLS,
  PROFICIENCIES, STACK_CARDS, EXPERIENCE, EDUCATION,
  PROJECTS, CERTIFICATIONS, NAV_ITEMS,
} from "./data";

export default function App() {
  const typed = useTyping(TYPING_ROLES);
  const [activeNav, setActiveNav] = useState("home");
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useScrollReveal();

  const handleFormSubmit = async (event) => {
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
  };

  useEffect(() => {
    const ids = ["home", "about", "skills", "experience", "projects", "contact"];
    const onScroll = () => {
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveNav(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
  };

  return (
    <div className="bg-dark">
      <Particles />
      <Cursor />
      <Navbar activeNav={activeNav} navTo={navTo} />

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="container hero-content reveal">
          <div className="hero-text-block">
            <span className="section-subtitle" style={{ textAlign: "left", marginBottom: "10px" }}>Software Engineer & Full Stack Developer</span>
            <h1 className="hero-name">
              Hey, I'm <span className="grad-text">Suriya C</span><br />
              <span style={{ fontSize: "0.5em", opacity: 0.8 }}>I'm a {typed}</span>
            </h1>
            <p className="hero-tagline">{PERSONAL.tagline}</p>
            <p className="hero-desc">{PERSONAL.description}</p>
            <div className="hero-btns">
              <button className="btn btn-primary" onClick={() => navTo("projects")}>Explore My Work</button>
              <DownloadBtn label="Download Resume" className="btn btn-outline" />
            </div>
          </div>

          <div className="hero-profile-container">
            <img 
              src="/suriya_img.png" 
              alt={PERSONAL.name} 
              className="hero-profile-img"
              onError={(e) => { e.target.src = "/suriya_img.png" }}
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about">
        <div className="container reveal">
          <span className="section-subtitle">01 / Foundation</span>
          <h2 className="section-title">Who I <span className="grad-text">Am</span></h2>
          
          <div className="about-split">
            <div className="about-text-content">
              <p style={{ fontSize: "1.2rem", color: "var(--text-main)", marginBottom: "30px", lineHeight: "1.7" }}>{PERSONAL.description}</p>
              <div className="project-tags" style={{ marginBottom: "40px" }}>
                {SOFT_SKILLS.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
              <button className="btn btn-outline" onClick={() => navTo("contact")}>Let's Connect</button>
            </div>

            <div className="about-metrics">
               {STATS.filter(s => ["Projects Built", "Internship Exp", "Certifications"].includes(s.label)).map(x => (
                <div key={x.label} className="ach-card glass" style={{ textAlign: "left", padding: "20px 30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="ach-label" style={{ fontSize: "1.1rem", color: "var(--text-main)", fontWeight: "600" }}>{x.label}</span>
                  <span className="ach-number" style={{ fontSize: "2rem", marginBottom: 0 }}>{x.n}{x.suffix}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="bg-card">
        <div className="container reveal">
          <span className="section-subtitle">02 / Expertise</span>
          <h2 className="section-title">My Tech <span className="grad-text">Stack</span></h2>
          
          <div className="contact-container" style={{ marginBottom: "60px" }}>
            <div style={{ display: "grid", gap: "20px" }}>
              {PROFICIENCIES.slice(0, 4).map(s => <SkillBar key={s.label} {...s} />)}
            </div>
            <div style={{ display: "grid", gap: "20px" }}>
              {PROFICIENCIES.slice(4).map(s => <SkillBar key={s.label} {...s} />)}
            </div>
          </div>

          <div className="skill-grid">
            {STACK_CARDS.map((c, i) => (
              <div key={c.label} className="skill-card glass">
                <div className="skill-icon">{c.icon}</div>
                <div className="skill-name">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE & EDUCATION ── */}
      <section id="experience" className="bg-card">
        <div className="container reveal">
          <div className="contact-container">
            <div>
              <span className="section-subtitle">04 / Experience</span>
              <h2 className="section-title" style={{ textAlign: "left" }}>Where I've <span className="grad-text">Worked</span></h2>
              <div className="contact-items">
                {EXPERIENCE.map((exp, i) => (
                  <div key={i} className="glass" style={{ padding: "30px", marginBottom: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                      <h3 style={{ fontSize: "1.3rem" }}>{exp.role}</h3>
                      <span className="tag" style={{ color: "var(--accent-cyan)", borderColor: "var(--accent-cyan)" }}>{exp.period}</span>
                    </div>
                    <p style={{ color: "var(--accent-cyan)", marginBottom: "15px", fontWeight: "600" }}>{exp.company}</p>
                    <ul style={{ listStyle: "none" }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{ color: "var(--text-muted)", marginBottom: "10px", paddingLeft: "20px", position: "relative" }}>
                          <span style={{ position: "absolute", left: 0, color: "var(--accent-cyan)" }}>▹</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="section-subtitle">05 / Education</span>
              <h2 className="section-title" style={{ textAlign: "left" }}>Background</h2>
              <div className="contact-items">
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="glass" style={{ padding: "30px", marginBottom: "20px" }}>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "10px" }}>{edu.degree}</h3>
                    <p style={{ color: "var(--text-muted)", marginBottom: "5px" }}>{edu.institution}</p>
                    <span className="tag">{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects">
        <div className="container reveal">
          <span className="section-subtitle">03 / Portfolio</span>
          <h2 className="section-title">Featured <span className="grad-text">Projects</span></h2>
          <div className="project-grid">
            {PROJECTS.map(p => (
              <div key={p.number} className="project-card glass">
                <div className="project-content">
                  <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>{p.icon}</div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.chips.map(c => <span key={c} className="tag">{c}</span>)}
                  </div>
                  <div className="project-links">
                    {p.liveUrl.toLowerCase().includes("soon") ? (
                      <div className="btn btn-outline btn-coming-soon" style={{ padding: "8px 16px", fontSize: "0.8rem", cursor: "default" }}>
                         <span className="btn-text-main">Live Demo</span>
                         <span className="btn-text-hover">Coming Soon</span>
                      </div>
                    ) : (
                      <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: "8px 16px", fontSize: "0.8rem" }}>Live Demo</a>
                    )}
                    
                    {p.sourceUrl.toLowerCase().includes("soon") ? (
                      <div className="btn btn-outline btn-coming-soon" style={{ padding: "8px 16px", fontSize: "0.8rem", cursor: "default" }}>
                         <span className="btn-text-main">View Code</span>
                         <span className="btn-text-hover">Coming Soon</span>
                      </div>
                    ) : (
                      <a href={p.sourceUrl} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: "8px 16px", fontSize: "0.8rem" }}>View Code</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="container reveal">
          <span className="section-subtitle">06 / Contact</span>
          <h2 className="section-title">Let's <span className="grad-text">Build Something</span></h2>
          
          <div className="contact-container">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
              <div className="contact-items">
                <a href={PERSONAL.email} className="contact-item">
                  <div className="contact-icon"><EmailIcon /></div>
                  <div>
                    <div className="form-label" style={{ marginBottom: 0 }}>Email</div>
                    <div className="skill-name">mrsuriyan200549@gmail.com</div>
                  </div>
                </a>
                <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" className="contact-item">
                  <div className="contact-icon"><LinkedInIcon /></div>
                  <div>
                    <div className="form-label" style={{ marginBottom: 0 }}>LinkedIn</div>
                    <div className="skill-name">Suriya C</div>
                  </div>
                </a>
                <a href={PERSONAL.whatsapp} target="_blank" rel="noreferrer" className="contact-item">
                  <div className="contact-icon"><WhatsAppIcon /></div>
                  <div>
                    <div className="form-label" style={{ marginBottom: 0 }}>WhatsApp</div>
                    <div className="skill-name">Chat with Me</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass" style={{ padding: "40px" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🚀</div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input className="form-input" name="name" required placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" name="email" required placeholder="john@example.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-textarea" name="message" required placeholder="How can I help you?" />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          {/* LEFT: Brand & Location */}
          <div className="footer-col">
            <h4>Information</h4>
            <div className="footer-brand">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src="/brand_logo.png" alt="Logo" style={{ width: "30px", height: "30px", borderRadius: "6px" }} />
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
            </div>
          </div>

          {/* RIGHT: Contact Details */}
          <div className="footer-col" style={{ textAlign: "right" }}>
            <h4>Contact Me</h4>
            <div className="footer-nav" style={{ alignItems: "flex-end" }}>
              <a href={PERSONAL.email} target="_blank" rel="noreferrer" className="footer-contact-item" style={{ textDecoration: "none" }}>
                <EmailIconSm />
                <span>mrsuriyan200549@gmail.com</span>
              </a>
              <a href={PERSONAL.whatsapp} target="_blank" rel="noreferrer" className="footer-contact-item" style={{ textDecoration: "none" }}>
                <WhatsAppIconSm />
                <span>{PERSONAL.phone}</span>
              </a>
              <a href={PERSONAL.github} target="_blank" rel="noreferrer" className="footer-contact-item" style={{ textDecoration: "none" }}>
                <GitHubIconSm />
                <span>GitHub</span>
              </a>
              <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" className="footer-contact-item" style={{ textDecoration: "none" }}>
                <LinkedInIconSm />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <p className="copyright">© {new Date().getFullYear()} {PERSONAL.name}. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
