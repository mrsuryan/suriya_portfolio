import { useState, useEffect } from "react";
import "./styles/global.css";

// ── Components ──
import Cursor      from "./components/Cursor";
import Particles   from "./components/Particles";
import Navbar      from "./components/Navbar";
import DownloadBtn from "./components/DownloadBtn";
import CountUp     from "./components/CountUp";
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
  PROJECTS, CERTIFICATIONS,
} from "./data";

export default function App() {
  const typed     = useTyping(TYPING_ROLES);
  const [activeNav, setActiveNav] = useState("home");
  const [sent,      setSent]      = useState(false);
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
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
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

  // Duplicate certs for infinite marquee
  const certsLoop = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS];

  // Track active section on scroll
  useEffect(() => {
    const ids = ["home","about","skills","experience","projects","contact"];
    const onScroll = () => {
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
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

  /* ══════════════════════════════════════════════════════════════
     RENDER
  ══════════════════════════════════════════════════════════════ */
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Fixed background layers */}
      <div className="noise" />
      <Particles />
      <Cursor />

      {/* ── Navigation ── */}
      <Navbar activeNav={activeNav} navTo={navTo} />

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="page-s hero" id="home">
        <div className="hero-ambient" />
        <div className="hero-grid-bg" />

        {/* Spinning orbital rings */}
        {[
          { s:580, c:"rgba(0,245,196,.035)",  dur:"40s", rev:false },
          { s:380, c:"rgba(124,58,237,.05)",  dur:"28s", rev:true  },
          { s:200, c:"rgba(236,72,153,.07)",  dur:"18s", rev:false },
        ].map((r, i) => (
          <div key={i} className="spin-ring" style={{
            width:r.s, height:r.s,
            border:`1px dashed ${r.c}`,
            animation:`spinSlow ${r.dur} linear infinite${r.rev?" reverse":""}`,
          }} />
        ))}

        {/* Floating ambient orbs */}
        {[
          { w:320,h:320, top:"8%",    right:"-2%",  bg:"radial-gradient(circle,rgba(124,58,237,.13),transparent 70%)", dur:"8s",   delay:"0s"   },
          { w:260,h:260, bottom:"12%",left:"-2%",   bg:"radial-gradient(circle,rgba(0,245,196,.09),transparent 70%)",  dur:"9.5s", delay:"3s"   },
          { w:180,h:180, top:"38%",   right:"12%",  bg:"radial-gradient(circle,rgba(236,72,153,.09),transparent 70%)", dur:"7s",   delay:"1.5s" },
        ].map((o, i) => (
          <div key={i} style={{
            position:"absolute", width:o.w, height:o.h,
            top:o.top, bottom:o.bottom, left:o.left, right:o.right,
            background:o.bg, borderRadius:"50%", pointerEvents:"none",
            animation:`floatOrb ${o.dur} ease-in-out infinite ${o.delay}`,
          }} />
        ))}

        <div className="hero-badge">
          <span className="badge-pulse" />{PERSONAL.badge}
        </div>

        <h1 className="hero-name glitch">
          <span className="grad-text">{PERSONAL.name.split(" ")[0]}</span>
          {/* <span className="outline-text">{PERSONAL.name.split(" ")[0]}</span> */}
        </h1>

        <p className="hero-sub">{PERSONAL.tagline}</p>
        <div className="scan-line" style={{ width:180 }} />
        <p className="hero-typed">{typed}<span className="tcursor" /></p>

        <p className="hero-desc">{PERSONAL.description}</p>

        <div className="hero-btns">
          <button className="btn-pri"   onClick={() => navTo("projects")}>⚡ View Projects</button>
          <button className="btn-ghost" onClick={() => navTo("contact")}>📡 Contact Me</button>
          <DownloadBtn label="Download Resume" className="dl-btn" />
        </div>

        <div className="hero-stats">
          {STATS.map(x => (
            <div key={x.label} style={{ textAlign:"center" }}>
              <div className="hstat-n"><CountUp end={x.n} suffix={x.suffix} /></div>
              <div className="hstat-l">{x.label}</div>
            </div>
          ))}
        </div>

        <div className="scroll-hint">
          <div className="scroll-bar" />SCROLL DOWN
        </div>
      </section>

      <div className="sdiv" />

      {/* ════════════════════════════════════════
          ABOUT
      ════════════════════════════════════════ */}
      <section className="page-s" id="about">
        <div className="wrap sw">
          <div className="eyebrow rev" data-delay="0"><span className="eyebrow-line" />01 — About Me</div>
          <h2 className="sh2 rev" data-delay=".1">Who I <em className="hl">Am</em></h2>

          <div className="about-grid">
            <div className="revl" data-delay=".15">
              <p className="about-p">
                I'm <strong>{PERSONAL.name}</strong>, a final-year{" "}
                <span className="hl-inline">Computer Science &amp; Engineering</span>{" "}
                student at Chendhuran College of Engineering and Technology, Pudukkottai — graduating <strong>2026</strong>.
              </p>
              <p className="about-p">
                I specialize in <strong>Full Stack Development</strong> with Python &amp; Django,
                and I'm passionate about integrating <strong>AI/ML</strong> into real-world apps.
                Clean code, fast shipping.
              </p>
              <p className="about-p">
                Currently gaining hands-on experience as a <strong>Full Stack Developer Intern</strong>{" "}
                at <span className="hl-inline">Pydun Technology</span>, building production Django apps.
              </p>
              <div className="softpills">
                {SOFT_SKILLS.map(s => <span key={s} className="spill">{s}</span>)}
              </div>
              <div style={{ marginTop:32 }}>
                <DownloadBtn label="Download Resume" />
              </div>
            </div>

            <div className="revr" data-delay=".2">
              <div className="stat-cubes">
                {STATS.map(x => (
                  <div key={x.label} className="scube">
                    <span className="scube-n"><CountUp end={x.n} suffix={x.suffix} /></span>
                    <span className="scube-l">{x.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sdiv" />

      {/* ════════════════════════════════════════
          SKILLS
      ════════════════════════════════════════ */}
      <section className="page-s" id="skills">
        <div className="wrap sw">
          <div className="eyebrow rev"><span className="eyebrow-line" />02 — Skills</div>
          <h2 className="sh2 rev" data-delay=".1">Tech <em className="hl">Stack</em></h2>

          <div className="sbar-cols">
            <div className="revl" data-delay=".15">
              {PROFICIENCIES.slice(0, 4).map(s => <SkillBar key={s.label} {...s} />)}
            </div>
            <div className="revr" data-delay=".2">
              {PROFICIENCIES.slice(4).map(s => <SkillBar key={s.label} {...s} />)}
            </div>
          </div>

          <div className="stag-grid">
            {STACK_CARDS.map((c, i) => (
              <div key={c.label} className="stagcard rev" data-delay={.1 + i * .07}>
                <div className="stag-head"><div className="stag-ico">{c.icon}</div>{c.label}</div>
                <div className="tagcloud">{c.items.map(t => <span key={t} className="ttag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sdiv" />

      {/* ════════════════════════════════════════
          EXPERIENCE
      ════════════════════════════════════════ */}
      <section className="page-s" id="experience">
        <div className="wrap sw">
          <div className="eyebrow rev"><span className="eyebrow-line" />03 — Experience</div>
          <h2 className="sh2 rev" data-delay=".1">Work <em className="hl2">History</em></h2>

          <div className="tl-wrap rev" data-delay=".15">
            <div className="tl-rail" />
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="tl-node" data-delay={.2 + i * .1}>
                <div className="tl-orb"><div className="tl-orb-inner" /></div>
                <div className="tlcard">
                  <div className="tlcard-head">
                    <div>
                      <div className="tl-role">{exp.role}</div>
                      <div className="tl-co">⚡ {exp.company}</div>
                    </div>
                    <span className="tl-badge">{exp.period}</span>
                  </div>
                  <ul className="tl-list">
                    {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="edu-rows">
            <div className="eyebrow rev" style={{ marginBottom:16 }}>
              <span className="eyebrow-line" />Education
            </div>
            {EDUCATION.map((e, i) => (
              <div key={e.year} className="edu-row rev" data-delay={.1 + i * .08}>
                <div>
                  <div className="edu-deg">{e.degree}</div>
                  <div className="edu-inst">{e.institution}</div>
                </div>
                <span className="tl-badge">{e.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sdiv" />

      {/* ════════════════════════════════════════
          PROJECTS
      ════════════════════════════════════════ */}
      <section className="page-s" id="projects">
        <div className="wrap sw">
          <div className="eyebrow rev"><span className="eyebrow-line" />04 — Projects</div>
          <h2 className="sh2 rev" data-delay=".1">What I've <em className="hl">Built</em></h2>

          <div className="proj-grid">
            {PROJECTS.map(p => (
              <TiltCard key={p.number}>
                <div className="pcard-glow" />
                <div className="pcard-body">
                  <div className="pcard-num">{p.number}</div>
                  <span className="pcard-icon">{p.icon}</span>
                  <div className="pcard-title">{p.title}</div>
                  <p className="pcard-desc">{p.desc}</p>
                  <div className="pchips">
                    {p.chips.map(c => <span key={c} className="pchip">{c}</span>)}
                  </div>
                </div>
                <div className="pcard-foot">
                  <a className="pfoot-link" href={p.liveUrl} target="_blank" rel="noreferrer">◈ VIEW PROJECT</a>
                  <a className="pfoot-link" href={p.sourceUrl} target="_blank" rel="noreferrer" style={{ marginLeft:"auto" }}>⎘ SOURCE</a>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <div className="sdiv" />

      {/* ════════════════════════════════════════
          CERTIFICATIONS
      ════════════════════════════════════════ */}
      <section className="page-s">
        <div className="wrap sw">
          <div className="eyebrow rev"><span className="eyebrow-line" />05 — Certifications</div>
          <h2 className="sh2 rev" data-delay=".1">Learning <em className="hl2">Path</em></h2>
        </div>
        <div className="mq-wrap rev" data-delay=".15">
          <div className="mq-track">
            {certsLoop.map((c, i) => (
              <div key={i} className="ccard">
                <div className="ccard-ico">{c.icon}</div>
                <div>
                  <div className="ccard-name">{c.name}</div>
                  <div className="ccard-iss">{c.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sdiv" />

      {/* ════════════════════════════════════════
          CONTACT
      ════════════════════════════════════════ */}
      <section className="page-s" id="contact">
        <div className="wrap sw">
          <div className="eyebrow rev"><span className="eyebrow-line" />06 — Contact</div>
          <h2 className="sh2 rev" data-delay=".1">Let's <em className="hl">Connect</em></h2>

          <div className="contact-grid">
            {/* Left — contact links */}
            <div>
              <p className="contact-lede revl" data-delay=".15">
                Actively seeking full-time roles &amp; internships. Have a project or opportunity?
                My inbox is always open.
              </p>
              <div className="clinks">
                {[
                  { id:"email",    label:"Email",    val: PERSONAL.email,    href:`mailto:${PERSONAL.email}`,    Icon:EmailIcon    },
                  { id:"phone",    label:"Phone",    val: PERSONAL.phone,    href:`tel:${PERSONAL.phone.replace(/\s/g,"")}`,  Icon:PhoneIcon    },
                  { id:"linkedin", label:"LinkedIn", val: "suriya-c-64218930b", href:PERSONAL.linkedin,          Icon:LinkedInIcon },
                  { id:"github",   label:"GitHub",   val: "mrsuriyan",          href:PERSONAL.github,            Icon:GitHubIcon   },
                  { id:"whatsapp", label:"WhatsApp", val: "+91 7904998763",     href:PERSONAL.whatsapp,          Icon:WhatsAppIcon },
                ].map((c, i) => (
                  <a
                    key={c.id}
                    className="clrow revl"
                    data-delay={.2 + i * .06}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="cl-ico"><c.Icon /></div>
                    <div>
                      <div className="cl-label">{c.label}</div>
                      <div className="cl-val">{c.val}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — contact form */}
            <div className="cf-wrap revr" data-delay=".2">
              <div className="cf-title">// SEND A MESSAGE</div>
              {sent ? (
                <div className="form-ok">
                  <div className="form-ok-ico">✅</div>
                  <div className="form-ok-t">MESSAGE TRANSMITTED</div>
                  <div className="form-ok-s">I'll get back to you ASAP.</div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="fg">
                    <label className="flabel">Name</label>
                    <input className="finput" name="name" required placeholder="Your full name" />
                  </div>
                  <div className="fg">
                    <label className="flabel">Email</label>
                    <input className="finput" type="email" name="email" required placeholder="your@email.com" />
                  </div>
                  <div className="fg">
                    <label className="flabel">Message</label>
                    <textarea className="ftarea" name="message" required placeholder="Tell me about your opportunity…" />
                  </div>
                  <button
                    type="submit"
                    className="btn-pri"
                    style={{ width:"100%", justifyContent:"center" }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "📡 TRANSMITTING..." : "📡 TRANSMIT MESSAGE"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer className="footer">
        <div className="footer-logo">{PERSONAL.logoText}</div>
        <div className="footer-copy">
          BUILT BY <span>{PERSONAL.name.toUpperCase()}</span> · <span>2026</span> · TAMIL NADU
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:14 }}>
          <DownloadBtn label="Resume" className="dl-btn" />
          <div className="fsoc-row">
            <a className="fsoc fsoc-li" href={PERSONAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIconSm />
            </a>
            <a className="fsoc fsoc-gh" href={PERSONAL.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIconSm />
            </a>
            <a className="fsoc fsoc-wa" href={PERSONAL.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsAppIconSm />
            </a>
            <a className="fsoc fsoc-em" href={`mailto:${PERSONAL.email}`} target="_blank" rel="noreferrer" aria-label="Email">
              <EmailIconSm />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
