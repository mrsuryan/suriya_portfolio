import { useEffect, useRef, useState } from "react";

/**
 * Modern Classic Dual-Layer Cursor:
 * • Instant tracking dot for precision.
 * • Smooth lerp trailing ring for premium aesthetic.
 * • Interactive scale/color shifts on hover.
 */
export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const mouse   = useRef({ x: -100, y: -100 });
  const ring    = useRef({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer:coarse)").matches) {
      setIsMobile(true);
      return;
    }

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e) => {
      if (e.target.closest("button, a, .hoverable, .project-card, .skill-card, .ach-card, .contact-btn")) {
        document.body.classList.add("cur-hover");
      } else {
        document.body.classList.remove("cur-hover");
      }
    };

    const onDown = () => document.body.classList.add("cur-clicking");
    const onUp   = () => document.body.classList.remove("cur-clicking");

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);

    let raf;
    const tick = () => {
      // 1. Dot tracks instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
      }

      // 2. Ring follows with lerp delay (Elastic feel)
      const lerpFactor = 0.15;
      ring.current.x += (mouse.current.x - ring.current.x) * lerpFactor;
      ring.current.y += (mouse.current.y - ring.current.y) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      cancelAnimationFrame(raf);
      document.body.classList.remove("cur-hover", "cur-clicking");
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
