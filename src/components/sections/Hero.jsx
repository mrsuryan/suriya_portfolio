import React, { memo } from 'react';
import { motion } from 'framer-motion';
import TypingHero from "../TypingHero";
import TiltCard from "../TiltCard";
import DownloadBtn from "../DownloadBtn";
import { PERSONAL } from "../../data";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.1 }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }
  }
};

const Hero = memo(({ navTo }) => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        {/* Left: Text Block */}
        <motion.div
          className="hero-text-block"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="section-subtitle"
            variants={fadeUpVariants}
            style={{ textAlign: "left", marginBottom: "10px", marginLeft: "0", marginRight: "auto" }}
          >
            Software Engineer &amp; Full Stack Developer
          </motion.span>

          <motion.h1 className="hero-title" variants={fadeUpVariants}>
            I Am <span className="grad-text">Suriya C</span><br />
            <TypingHero />
          </motion.h1>

          <motion.p className="hero-desc" variants={fadeUpVariants}>
            I build <span className="accent-text">AI-powered</span> web applications using{" "}
            <span className="accent-text">Django</span> &amp;{" "}
            <span className="accent-text">Machine Learning</span>.
          </motion.p>

          <motion.ul className="hero-highlights" variants={containerVariants}>
            {[
              "Developing <strong>Scalable Backend with Python &amp; Django</strong>",
              "Integrating <strong>AI to Solve Real-World Challenges</strong>",
              "Crafting <strong>High-Performance Web Experiences</strong>"
            ].map((item, i) => (
              <motion.li key={i} variants={fadeUpVariants}>
                <span className="highlight-icon">→</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className="hero-btns" variants={fadeUpVariants}>
            <button className="btn btn-primary" onClick={() => navTo("projects")}>
              Explore My Work
            </button>
            <DownloadBtn label="Download CV" className="btn btn-outline" />
          </motion.div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          className="hero-profile-container"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <TiltCard>
            <img
              src="/suriya_img.webp"
              srcSet="/suriya_img_mobile.webp 400w, /suriya_img.webp 800w"
              sizes="(max-width: 768px) 400px, 800px"
              alt={PERSONAL.name}
              className="hero-profile-img"
              width="450"
              height="450"
              style={{ aspectRatio: "1 / 1" }}
              fetchPriority="high"
              decoding="async"
              onError={(e) => { e.target.src = "/suriya_img.webp"; }}
            />
            <div className="hero-img-overlay"></div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
});

export default Hero;
