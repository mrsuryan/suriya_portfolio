import { useState, useEffect, useRef } from "react";

/**
 * Animated skill bar — grows from 0% to `pct` when scrolled into view.
 * Includes a shine shimmer animation on the fill.
 *
 * @param {string} label - skill name
 * @param {number} pct   - percentage (0–100)
 */
export default function SkillBar({ label, pct }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setWidth(pct), 180); },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div ref={ref} className="sbar-group">
      <div className="sbar-head">
        <span>{label}</span>
        <span className="sbar-pct">{pct}%</span>
      </div>
      <div className="sbar-track">
        <div className="sbar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}
