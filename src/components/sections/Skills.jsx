import React, { memo } from 'react';
import SkillBar from "../SkillBar";
import { PROFICIENCIES } from "../../data";

const Skills = memo(() => {
  return (
    <section id="skills" className="bg-card">
      <div className="container reveal">
        <span className="section-subtitle">02 / Skills</span>
        <h2 className="section-title reveal">My <span className="grad-text">Tech Stack</span></h2>
        
        <div className="skills-rows-wrapper">
          {PROFICIENCIES.map((cat, i) => (
            <div key={i} className="glass skill-row-card reveal" data-delay={i * 0.1}>
              <div className="skill-row-header">
                <span className="category-indicator"></span>
                <h3 className="skill-row-title">{cat.category}</h3>
              </div>
              <div className="skill-row-tags">
                {cat.skills.map((s, j) => (
                  <div key={j} className="skill-tag">
                    <span className="tag-icon">{s.icon}</span>
                    <div className="tag-content">
                      <span className="tag-label">{s.label}</span>
                      <span className={`tag-level ${s.level.toLowerCase()}`}>{s.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;
