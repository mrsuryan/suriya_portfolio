import React, { memo } from 'react';
import { PROFICIENCIES } from "../../data";

const levelConfig = {
  expert:        { label: "Expert",        cls: "level-expert" },
  intermediate:  { label: "Intermediate",  cls: "level-intermediate" },
  beginner:      { label: "Beginner",      cls: "level-beginner" },
};

function getLevelCls(level = "") {
  const key = level.toLowerCase();
  return levelConfig[key] || { label: level, cls: "level-other" };
}

const Skills = memo(() => {
  return (
    <section id="skills" className="bg-card">
      <div className="container">
        <span className="section-subtitle rev" data-delay="0">02 / Skills</span>
        <h2 className="section-title rev" data-delay="0.05">My <span className="grad-text">Tech Stack</span></h2>

        <div className="skills-rows-wrapper">
          {PROFICIENCIES.map((cat, i) => (
            <div key={i} className="glass skill-row-card rev" data-delay={`${i * 0.1}`}>
              <div className="skill-row-header">
                <span className="category-indicator"></span>
                <h3 className="skill-row-title">{cat.category}</h3>
              </div>
              <div className="skill-row-tags">
                {cat.skills.map((s, j) => {
                  const lvl = getLevelCls(s.level);
                  return (
                    <div
                      key={j}
                      className="skill-tag rev-scale"
                      data-delay={`${i * 0.08 + j * 0.06}`}
                    >
                      <span className="tag-icon">{s.icon}</span>
                      <div className="tag-content">
                        <span className="tag-label">{s.label}</span>
                        <span className={`tag-level ${lvl.cls}`}>{lvl.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;
