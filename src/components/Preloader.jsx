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
    }, 1500);
    
    return () => { 
      clearTimeout(tStart);
      clearTimeout(tDone); 
      document.body.style.overflow = ""; 
    };
  }, []);

  if (!loading) return null;

  const name = "SURIYA.C";

  return (
    <div className={`luxury-preloader ${active ? "is-active" : ""}`}>
      <div className="luxury-content">
        <div className="luxury-name-wrapper">
          {name.split("").map((char, i) => (
            <span 
              key={i} 
              className="luxury-char" 
              style={{ transitionDelay: `${0.05 + (i * 0.05)}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          <div className="luxury-shimmer"></div>
        </div>
        <div className="luxury-line"></div>
      </div>
    </div>
  );
}
