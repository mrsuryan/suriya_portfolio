import { useState, useEffect } from "react";

export default function Preloader({ onFinish }) {
  const [loading, setLoading] = useState(true);
  const [active,  setActive]  = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const tStart  = setTimeout(() => setActive(true), 100);
    const tDone   = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
      onFinish?.();
    }, 1800);
    
    return () => { 
      clearTimeout(tStart);
      clearTimeout(tDone); 
      document.body.style.overflow = ""; 
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`premium-preloader ${active ? "is-active" : ""}`}>
      <div className="preloader-overlay top"></div>
      <div className="preloader-overlay bottom"></div>
      
      <div className="preloader-content">
        <div className="preloader-brand">
          <span className="brand-welcome">WELCOME TO</span>
          <h1 className="brand-name">SURIYA C</h1>
          <span className="brand-suffix">PORTFOLIO</span>
        </div>
        <div className="preloader-progress-container">
          <div className="preloader-progress-bar"></div>
        </div>
      </div>
    </div>
  );
}
