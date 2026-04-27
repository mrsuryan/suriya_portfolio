import React, { memo, useEffect, useRef } from 'react';

const ProjectModal = memo(({ selectedProject, isModalOpen, setIsModalOpen }) => {
  const scrollRef = useRef(null);

  // Reset scroll to top when modal opens or project changes
  useEffect(() => {
    if (isModalOpen && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [isModalOpen, selectedProject]);

  if (!selectedProject) return null;

  return (
    <div className={`modal-overlay ${isModalOpen ? "active" : ""}`} onClick={() => setIsModalOpen(false)}>
      <div className="modal-content glass" onClick={e => e.stopPropagation()} data-lenis-prevent>
        {/* Fixed Close Button */}
        <button className="modal-close-btn" onClick={() => setIsModalOpen(false)} aria-label="Close Modal">
          <span className="close-icon">&times;</span>
        </button>

        {/* Scrollable Content Area */}
        <div className="modal-scroll-area" ref={scrollRef}>
          <div className="modal-inner">
            {/* Left Side: Visuals */}
            <div className="modal-visuals">
              <div className="modal-img-wrapper">
                <img src={selectedProject.image} alt={selectedProject.title} loading="eager" />
                <div className="modal-img-overlay"></div>
              </div>
              <div className="modal-visual-footer">
                 <div className="modal-number">{selectedProject.number}</div>
                 <div className="modal-category">Project Case Study</div>
              </div>
            </div>
            
            {/* Right Side: Details */}
            <div className="modal-details scroll-custom">
              <div className="modal-header-section">
                <div className="modal-badge">Featured Work</div>
                <h2 className="modal-main-title">{selectedProject.title}</h2>
                <div className="modal-meta">
                  <span className="modal-icon-bg">{selectedProject.icon}</span>
                  <span className="modal-role">Full Stack Solution</span>
                </div>
              </div>
              
              <div className="modal-body-section">
                <div className="modal-info-group">
                  <h3 className="modal-sub">Overview</h3>
                  <p className="modal-text-large">{selectedProject.detailedDesc}</p>
                </div>
                
                <div className="modal-info-group">
                  <h3 className="modal-sub">Key Capabilities</h3>
                  <ul className="modal-feature-list">
                    {selectedProject.features.map((f, i) => (
                      <li key={i} style={{ "--delay": i * 0.1 + "s" }}>
                        <i className="fas fa-check-circle"></i>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-info-group">
                  <h3 className="modal-sub">Core Technologies</h3>
                  <div className="modal-tech-stack">
                    {selectedProject.chips.map(c => <span key={c} className="tech-pill">{c}</span>)}
                  </div>
                </div>
              </div>
              
              <div className="modal-actions">
                {selectedProject.liveUrl.toLowerCase().includes("soon") ? (
                  <div className="btn-premium-disabled">
                     <span>Live Demo Coming Soon</span>
                  </div>
                ) : (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-premium primary">
                    <i className="fas fa-external-link-alt"></i>
                    <span>Launch Live Site</span>
                  </a>
                )}
                
                {selectedProject.sourceUrl.toLowerCase().includes("soon") ? (
                  <div className="btn-premium-disabled">
                     <span>Source Code Private</span>
                  </div>
                ) : (
                  <a href={selectedProject.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-premium outline">
                    <i className="fab fa-github"></i>
                    <span>Explore Source</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProjectModal;
