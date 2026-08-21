import React, { memo } from 'react';
import { PROJECTS } from "../../data";

const Projects = memo(({ setSelectedProject, setIsModalOpen }) => {
  return (
    <section id="projects">
      <div className="container">
        <span className="section-subtitle rev" data-delay="0">05 / Projects</span>
        <h2 className="section-title rev" data-delay="0.05">Featured <span className="grad-text">Projects</span></h2>
        <div className="project-grid">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="glass project-card rev-scale"
              data-delay={`${i * 0.12}`}
              onClick={() => {
                setSelectedProject(p);
                setIsModalOpen(true);
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="project-img-container">
                <img
                  src={p.image}
                  alt={`Fullstack Project: ${p.title} built with ${p.chips.join(', ')}`}
                  className="project-img"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="338"
                />
                <div className="project-hover-hint">
                  <span className="hint-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </span>
                  <span className="hint-text">View Project Details</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{p.title}</h3>
                <div className="project-card-details">
                  <div className="card-detail-item">
                    <span className="card-detail-label">Problem:</span>
                    <p className="card-detail-text">{p.detailedDesc.problem}</p>
                  </div>
                  <div className="card-detail-item">
                    <span className="card-detail-label">Impact:</span>
                    <p className="card-detail-text">{p.detailedDesc.impact}</p>
                  </div>
                </div>
                <div className="project-tags">
                  {p.chips.map(c => <span key={c} className="tag">{c}</span>)}
                </div>
                <div className="project-links" onClick={e => e.stopPropagation()}>
                  {p.liveUrl.toLowerCase().includes("soon") ? (
                    <div className="btn btn-outline btn-coming-soon" style={{ padding: "8px 16px", fontSize: "0.8rem", cursor: "default" }}>
                      <span className="btn-text-main">Live Demo</span>
                      <span className="btn-text-hover">Coming Soon</span>
                    </div>
                  ) : (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: "8px 16px", fontSize: "0.8rem" }}>Live Demo</a>
                  )}

                  {p.sourceUrl.toLowerCase().includes("soon") ? (
                    <div className="btn btn-outline btn-coming-soon" style={{ padding: "8px 16px", fontSize: "0.8rem", cursor: "default" }}>
                      <span className="btn-text-main">View Code</span>
                      <span className="btn-text-hover">Coming Soon</span>
                    </div>
                  ) : (
                    <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: "8px 16px", fontSize: "0.8rem" }}>View Code</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
