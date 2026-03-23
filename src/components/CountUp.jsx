import { useState, useEffect, useRef } from "react";

/**
 * Animates a number from 0 to `end` when the element scrolls into view.
 * Uses ease-out-quart easing for a natural deceleration.
 *
 * @param {string|number} end    - target number (can be "2", "2026", etc.)
 * @param {string}        suffix - appended after the number ("+", " mo", etc.)
 */
export default function CountUp({ end, suffix = "" }) {
  const [value, setValue] = useState(0);
  const ref     = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const num = parseFloat(end);
    if (isNaN(num)) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration  = 1600;
        const startTime = performance.now();

        const tick = time => {
          const progress = Math.min((time - startTime) / duration, 1);
          const eased    = 1 - Math.pow(1 - progress, 4); // ease-out-quart
          setValue(Math.round(eased * num));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {isNaN(parseFloat(end)) ? end : value + suffix}
    </span>
  );
}
