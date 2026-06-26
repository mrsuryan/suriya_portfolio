import React, { memo } from 'react';
import { EmailIcon, PhoneIcon, LinkedInIcon, WhatsAppIcon } from "../SvgIcons";
import { PERSONAL } from "../../data";

const Contact = memo(({ sent, isSubmitting, handleFormSubmit }) => {
  return (
    <section id="contact">
      <div className="container reveal">
        <span className="section-subtitle">06 / Contact</span>
        <h2 className="section-title reveal">Get In <span className="grad-text">Touch</span></h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="availability-badge">
              <span className="pulse-dot"></span>
              <span className="availability-text">Open to Work | Available for Full-Time Roles</span>
            </div>
            <p>I’m currently open to full-time opportunities.<br />If you have a project or opportunity, feel free to reach out.</p>
            <div className="contact-items">
              <a href={PERSONAL.emailLink} target="_blank" rel="noopener noreferrer" className="contact-item" aria-label="Send me an email">
                <div className="contact-icon"><EmailIcon /></div>
                <div>
                  <div className="form-label" style={{ marginBottom: 0 }}>Email</div>
                  <div className="skill-name">{PERSONAL.email}</div>
                </div>
              </a>
              <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item" aria-label="Visit my LinkedIn profile">
                <div className="contact-icon"><LinkedInIcon /></div>
                <div>
                  <div className="form-label" style={{ marginBottom: 0 }}>LinkedIn</div>
                  <div className="skill-name">Suriya C</div>
                </div>
              </a>
              <a href={PERSONAL.whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-item" aria-label="Chat with me on WhatsApp">
                <div className="contact-icon"><WhatsAppIcon /></div>
                <div>
                  <div className="form-label" style={{ marginBottom: 0 }}>WhatsApp</div>
                  <div className="skill-name">Chat with Me</div>
                </div>
              </a>
            </div>
          </div>

          <div className="glass contact-form-glass" style={{ padding: "40px" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🚀</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input className="form-input" name="name" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" name="email" required placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" name="message" required placeholder="How can I help you?" />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
