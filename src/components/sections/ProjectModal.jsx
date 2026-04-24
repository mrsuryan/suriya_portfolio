import React, { memo } from 'react';

const ProjectModal = memo(({ selectedProject, isModalOpen, setIsModalOpen }) => {
  if (!selectedProject) return null;

  return (
    <div className={`modal-overlay ${isModalOpen ? "active" : ""}`} onClick={() => setIsModalOpen(false)}>
      <div className="modal-content glass" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setIsModalOpen(false)}>&times;</button>
        
        <div className="modal-body scroll-custom">
          <div className="modal-img-container">
            <img src={selectedProject.image} alt={selectedProject.title} />
          </div>
          
          <div className="modal-info">
            <div className="modal-header">
              <div className="modal-icon">{selectedProject.icon}</div>
              <h2 className="modal-title">{selectedProject.title}</h2>
            </div>
            
            <p className="modal-desc">{selectedProject.detailedDesc}</p>
            
            <div className="modal-section">
              <h3>Key Features</h3>
              <ul className="modal-features">
                {selectedProject.features.map((f, i) => (
                  <li key={i}>
                    <span className="dot"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="modal-section">
              <h3>Technologies Used</h3>
              <div className="project-tags">
                {selectedProject.chips.map(c => <span key={c} className="tag">{c}</span>)}
              </div>
            </div>

            <div className="modal-footer project-links">
              {selectedProject.liveUrl.toLowerCase().includes("soon") ? (
                <div className="btn btn-outline btn-coming-soon" style={{ padding: "10px 24px", fontSize: "0.9rem", cursor: "default" }}>
                   <span className="btn-text-main">Live Demo</span>
                   <span className="btn-text-hover">Coming Soon</span>
                </div>
              ) : (
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
              )}
              
              {selectedProject.sourceUrl.toLowerCase().includes("soon") ? (
                <div className="btn btn-outline btn-coming-soon" style={{ padding: "10px 24px", fontSize: "0.9rem", cursor: "default" }}>
                   <span className="btn-text-main">View Code</span>
                   <span className="btn-text-hover">Coming Soon</span>
                </div>
              ) : (
                <a href={selectedProject.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">View Code</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProjectModal;
