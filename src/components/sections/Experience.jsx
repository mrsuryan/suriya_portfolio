import React, { memo } from 'react';
import { EXPERIENCE, EDUCATION } from "../../data";

const Experience = memo(() => {
  return (
    <section id="experience" className="bg-card">
      <div className="container">
        <div className="exp-edu-grid">
          {/* ── EXPERIENCE ── */}
          <div>
            <span className="section-subtitle rev" data-delay="0">03 / Experience</span>
            <h2 className="section-title exp-title rev" data-delay="0.05">
              Where I've <span className="grad-text">Worked</span>
            </h2>
            <div className="timeline-wrapper">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="timeline-item rev-left" data-delay={`${i * 0.15}`}>
                  <div className="timeline-dot">
                    <span className="timeline-dot-inner" />
                  </div>
                  <div className="timeline-line" />
                  <div className="glass exp-card hover-glow timeline-card">
                    <div className="exp-header">
                      <h3 className="exp-role">{exp.role}</h3>
                      <span className="tag exp-period">{exp.period}</span>
                    </div>
                    <p className="exp-company">{exp.company}</p>
                    <ul className="exp-bullets">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="exp-bullet">
                          <span className="bullet-arrow">▹</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── EDUCATION ── */}
          <div>
            <span className="section-subtitle rev" data-delay="0.1">04 / Education</span>
            <h2 className="section-title edu-title rev" data-delay="0.15">
              Educational <span className="grad-text">Background</span>
            </h2>
            <div className="timeline-wrapper">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="timeline-item rev-right" data-delay={`${i * 0.15}`}>
                  <div className="timeline-dot">
                    <span className="timeline-dot-inner" />
                  </div>
                  {i < EDUCATION.length - 1 && <div className="timeline-line" />}
                  <div className="glass edu-card hover-glow timeline-card">
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-institution">{edu.institution}</p>
                    <span className="tag edu-year">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Experience;
