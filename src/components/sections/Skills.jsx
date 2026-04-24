import React, { memo } from 'react';
import SkillBar from "../SkillBar";
import { PROFICIENCIES } from "../../data";

const Skills = memo(() => {
  return (
    <section id="skills" className="bg-card">
      <div className="container reveal">
        <span className="section-subtitle">02 / Skills</span>
        <h2 className="section-title reveal">My <span className="grad-text">Tech Stack</span></h2>
        
        <div className="contact-container reveal" data-delay="0.2" style={{ marginBottom: "60px" }}>
          <div style={{ display: "grid", gap: "20px" }}>
            {PROFICIENCIES.slice(0, 4).map(s => <SkillBar key={s.label} {...s} />)}
          </div>
          <div style={{ display: "grid", gap: "20px" }}>
            {PROFICIENCIES.slice(4).map(s => <SkillBar key={s.label} {...s} />)}
          </div>
        </div>

        <div className="skill-grid">
          {PROFICIENCIES.map((s, i) => (
            <div key={i} className="glass skill-card hover-glow reveal" data-delay={i * 0.05} title={s.label}>
              <div className="skill-icon" style={{ marginBottom: 0, fontSize: "3rem" }}>{s.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;
