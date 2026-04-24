import React, { memo } from 'react';
import CountUp from "../CountUp";
import DownloadBtn from "../DownloadBtn";
import { PERSONAL, SOFT_SKILLS, STATS } from "../../data";

const About = memo(({ navTo }) => {
  return (
    <section id="about">
      <div className="container reveal">
        <span className="section-subtitle">01 / Foundation</span>
        <h2 className="section-title reveal">Who <span className="grad-text">I Am</span></h2>
        
        <div className="about-split reveal" data-delay="0.1">
          <div className="about-text-content">
            <p style={{ fontSize: "1.2rem", color: "var(--text-main)", marginBottom: "30px", lineHeight: "1.7", whiteSpace: "pre-line" }}>
              {PERSONAL.description}
            </p>
            <div className="project-tags" style={{ marginBottom: "40px" }}>
              {SOFT_SKILLS.map(s => <span key={s} className="tag">{s}</span>)}
            </div>
             <div className="hero-btns" style={{ gap: "15px" }}>
              <button className="btn btn-primary" onClick={() => navTo("contact")}>Let's Connect</button>
              <DownloadBtn label="Download CV" className="btn btn-outline" />
            </div>
          </div>

          <div className="about-metrics">
             {STATS.filter(s => ["Projects Built", "Internship Exp", "Certifications"].includes(s.label)).map(x => (
              <div key={x.label} className="ach-card glass hover-glow" style={{ textAlign: "left", padding: "20px 30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="ach-label" style={{ fontSize: "1.1rem", color: "var(--text-main)", fontWeight: "600" }}>{x.label}</span>
                <span className="ach-number" style={{ fontSize: "2rem", marginBottom: 0 }}>
                  <CountUp end={x.n} suffix={x.suffix} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
