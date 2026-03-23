import { useEffect, useRef, useState } from "react";

/**
 * Triple-layer custom cursor:
 * • Dot    — tracks instantly (direct DOM write in mousemove handler)
 * • Ring   — spring-follows at lerp 0.18 (fast)
 * • Halo   — spring-follows at lerp 0.09 (slow, ghosting effect)
 *
 * Changes colour when hovering any button / anchor / .hoverable element.
 * Hidden automatically on touch devices.
 */
export default function Cursor() {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);
  const outerRef = useRef(null);
  const mouse    = useRef({ x: -999, y: -999 });
  const ring     = useRef({ x: -999, y: -999 });
  const outer    = useRef({ x: -999, y: -999 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer:coarse)").matches) {
      setIsMobile(true);
      return;
    }

    const onMove = e => {
      mouse.current = { x: e.clientX, y: e.clientY };
      // Dot: zero-lag, written directly in event handler
      if (dotRef.current)
        dotRef.current.style.transform =
          `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
    };

    const onOver = e => {
      if (e.target.closest("button,a,.hoverable"))
        document.body.classList.add("cur-hover");
      else
        document.body.classList.remove("cur-hover");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover",  onOver, { passive: true });

    let raf;
    const tick = () => {
      ring.current.x  += (mouse.current.x - ring.current.x)  * 0.18;
      ring.current.y  += (mouse.current.y - ring.current.y)  * 0.18;
      outer.current.x += (mouse.current.x - outer.current.x) * 0.09;
      outer.current.y += (mouse.current.y - outer.current.y) * 0.09;

      if (ringRef.current)
        ringRef.current.style.transform =
          `translate(${ring.current.x}px,${ring.current.y}px) translate(-50%,-50%)`;
      if (outerRef.current)
        outerRef.current.style.transform =
          `translate(${outer.current.x}px,${outer.current.y}px) translate(-50%,-50%)`;

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover",  onOver);
      cancelAnimationFrame(raf);
      document.body.classList.remove("cur-hover");
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <div ref={dotRef}   className="cur-dot"        style={{ willChange: "transform" }} />
      <div ref={ringRef}  className="cur-ring"       style={{ willChange: "transform" }} />
      <div ref={outerRef} className="cur-ring-outer" style={{ willChange: "transform" }} />
    </>
  );
}
