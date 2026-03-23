import { useRef } from "react";

/**
 * 3D tilt card — spring-physics response to mouse movement.
 *
 * • Tilt angles: ±18° horizontal, ±14° vertical
 * • Radial glow spotlight follows the cursor inside the card
 * • Dynamic box-shadow shifts to simulate a real light source
 * • Smooth spring-back on mouse leave (cubic-bezier(.22,1,.36,1))
 */
export default function TiltCard({ children, className = "" }) {
  const ref    = useRef(null);
  const rafRef = useRef(null);
  const cur    = useRef({ rx: 0, ry: 0, gx: 50, gy: 50 });
  const tgt    = useRef({ rx: 0, ry: 0, gx: 50, gy: 50 });
  const active = useRef(false);

  const animate = () => {
    const el = ref.current;
    if (!el) return;

    // Spring lerp — 0.22 feels snappy but not jittery
    cur.current.rx += (tgt.current.rx - cur.current.rx) * 0.22;
    cur.current.ry += (tgt.current.ry - cur.current.ry) * 0.22;
    cur.current.gx += (tgt.current.gx - cur.current.gx) * 0.22;
    cur.current.gy += (tgt.current.gy - cur.current.gy) * 0.22;

    const { rx, ry, gx, gy } = cur.current;
    el.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-14px) scale(1.025)`;
    el.style.boxShadow = `
      0 40px 80px rgba(0,0,0,.6),
      ${-ry * 1.5}px ${rx * 1.5}px 40px rgba(0,245,196,.08),
      0 0 60px rgba(0,245,196,.06)
    `;
    el.style.setProperty("--gx", `${gx}%`);
    el.style.setProperty("--gy", `${gy}%`);

    if (active.current) rafRef.current = requestAnimationFrame(animate);
  };

  const onMove = e => {
    const el = ref.current;
    if (!el) return;
    const r  = el.getBoundingClientRect();
    const x  = e.clientX - r.left;
    const y  = e.clientY - r.top;
    tgt.current.rx = ((y - r.height / 2) / r.height) * -14;
    tgt.current.ry = ((x - r.width  / 2) / r.width ) *  18;
    tgt.current.gx = (x / r.width)  * 100;
    tgt.current.gy = (y / r.height) * 100;
    el.style.borderColor = "rgba(0,245,196,.35)";
  };

  const onEnter = () => {
    active.current = true;
    rafRef.current = requestAnimationFrame(animate);
  };

  const onLeave = () => {
    active.current = false;
    cancelAnimationFrame(rafRef.current);
    tgt.current = { rx: 0, ry: 0, gx: 50, gy: 50 };
    const el = ref.current;
    if (!el) return;
    el.style.transition  = "transform .6s cubic-bezier(.22,1,.36,1), box-shadow .6s ease, border-color .3s";
    el.style.transform   = "";
    el.style.boxShadow   = "";
    el.style.borderColor = "";
    setTimeout(() => { if (el) el.style.transition = "border-color .3s"; }, 650);
  };

  return (
    <div
      ref={ref}
      className={`pcard ${className}`}
      style={{
        transition: "border-color .3s",
        willChange: "transform",
        background: `radial-gradient(circle at var(--gx,50%) var(--gy,50%), rgba(0,245,196,.06) 0%, transparent 55%), var(--card)`,
      }}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
