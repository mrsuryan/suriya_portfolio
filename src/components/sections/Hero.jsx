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
          <span className="section-subtitle" style={{ textAlign: "left", marginBottom: "10px" }}>
            Software Engineer & Full Stack Developer
          </span>
          <h1 className="hero-title">
            I Am <span className="grad-text">Suriya C</span><br />
            <TypingHero />
          </h1>
          <p className="hero-desc">
            Expertly building intelligent applications with <span className="accent-text">AI</span>, 
            <span className="accent-text"> Python</span>, and <span className="accent-text"> Django</span>. 
            Computer Science Engineer focused on high-performance Fullstack solutions.
          </p>
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
              fetchpriority="high"
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
