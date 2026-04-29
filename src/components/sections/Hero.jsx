import React, { memo } from 'react';
import TypingHero from "../TypingHero";
import TiltCard from "../TiltCard";
import DownloadBtn from "../DownloadBtn";
import { PERSONAL } from "../../data";

const Hero = memo(({ navTo }) => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content reveal">
        <div className="hero-text-block">
          <span className="section-subtitle" style={{ textAlign: "left", marginBottom: "10px", marginLeft: "0", marginRight: "auto" }}>
            Software Engineer & Full Stack Developer
          </span>
          <h1 className="hero-title">
            I Am <span className="grad-text">Suriya C</span><br />
            <TypingHero />
          </h1>
          <p className="hero-desc">
            I build <span className="accent-text">AI-powered</span> web applications using <span className="accent-text">Django</span> & <span className="accent-text">Machine Learning</span>.
          </p>
          <ul className="hero-highlights">
            <li className="reveal" data-delay="0.4"><span className="highlight-icon">→</span> Developing <strong>Scalable Backend with Python & Django</strong></li>
            <li className="reveal" data-delay="0.5"><span className="highlight-icon">→</span> Integrating <strong>AI to Solve Real-World Challenges</strong></li>
            <li className="reveal" data-delay="0.6"><span className="highlight-icon">→</span> Crafting <strong>High-Performance Web Experiences</strong></li>
          </ul>
          <div className="hero-btns">
            <button className="btn btn-primary" onClick={() => navTo("projects")}>Explore My Work</button>
            <DownloadBtn label="Download CV" className="btn btn-outline" />
          </div>
        </div>

        <div className="hero-profile-container">
          <TiltCard>
            <img 
              src="/suriya_img.webp" 
              alt={PERSONAL.name} 
              className="hero-profile-img"
              width="450"
              height="450"
              style={{ aspectRatio: "1 / 1" }}
              fetchPriority="high"
              decoding="async"
              onError={(e) => { e.target.src = "/suriya_img.webp" }}
            />
            <div className="hero-img-overlay"></div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
});

export default Hero;
