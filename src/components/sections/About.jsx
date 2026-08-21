import React, { memo } from 'react';
import CountUp from "../CountUp";
import DownloadBtn from "../DownloadBtn";
import { PERSONAL, SOFT_SKILLS, STATS } from "../../data";

const About = memo(({ navTo }) => {
  return (
    <section id="about">
      <div className="container">
        <span className="section-subtitle rev" data-delay="0">01 / Foundation</span>
        <h2 className="section-title rev" data-delay="0.05">Who <span className="grad-text">I Am</span></h2>

        <div className="about-split">
          <div className="about-text-content rev-left" data-delay="0.1">
            <p className="about-desc">
              {PERSONAL.description}
            </p>
            <div className="project-tags soft-skills-tags" style={{ marginBottom: "40px" }}>
              {SOFT_SKILLS.map((s, i) => (
                <span
                  key={s}
                  className="tag rev-scale"
                  data-delay={`${0.15 + i * 0.07}`}
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="hero-btns rev" data-delay="0.35" style={{ gap: "15px" }}>
              <button className="btn btn-primary" onClick={() => navTo("contact")}>Let's Connect</button>
              <DownloadBtn label="Download CV" className="btn btn-outline" />
            </div>
          </div>

          <div className="about-metrics">
            {STATS.filter(s => ["Projects Built", "Internship Exp", "Certifications"].includes(s.label)).map((x, i) => (
              <div
                key={x.label}
                className="ach-card glass hover-glow rev-right"
                data-delay={`${0.1 + i * 0.1}`}
              >
                <span className="ach-label">{x.label}</span>
                <span className="ach-number">
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
