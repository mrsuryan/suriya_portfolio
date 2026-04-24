import React, { memo } from 'react';
import { EXPERIENCE, EDUCATION } from "../../data";

const Experience = memo(() => {
  return (
    <section id="experience" className="bg-card">
      <div className="container reveal">
        <div className="contact-container">
          <div>
            <span className="section-subtitle">03 / Experience</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>Where I've <span className="grad-text">Worked</span></h2>
            <div className="contact-items">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="glass exp-card hover-glow reveal" style={{ padding: "30px", marginBottom: "20px" }}>
                  <div className="exp-header" style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", alignItems: "flex-start", gap: "15px" }}>
                    <h3 style={{ fontSize: "1.3rem" }}>{exp.role}</h3>
                    <span className="tag" style={{ color: "var(--accent-cyan)", borderColor: "var(--accent-cyan)", whiteSpace: "nowrap" }}>{exp.period}</span>
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
            <span className="section-subtitle">04 / Education</span>
            <h2 className="section-title reveal">Educational <span className="grad-text">Background</span></h2>
            <div className="contact-items">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="glass edu-card hover-glow" style={{ padding: "30px", marginBottom: "20px" }}>
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
  );
});

export default Experience;
