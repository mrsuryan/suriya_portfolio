import { useEffect, useRef } from "react";

const COLORS = ["#00f5c4", "#7c3aed", "#ec4899", "#3b82f6"];
const COUNT  = 80;

/**
 * Full-screen particle canvas.
 * Particles repel from the mouse cursor within a 90px radius.
 * Nearby particles (< 120px) are connected with faint teal lines.
 */
export default function Particles() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W, H, pts, raf;
    let mx = -999, my = -999;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = e => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMouse);

    pts = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * window.innerWidth,
      y:  Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r:  Math.random() * 1.6 + 0.3,
      c:  COLORS[Math.floor(Math.random() * COLORS.length)],
      a:  Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw particles
      pts.forEach(p => {
        const dx = p.x - mx, dy = p.y - my;
        const d  = Math.hypot(dx, dy);
        if (d < 90) { p.vx += (dx / d) * 0.12; p.vy += (dy / d) * 0.12; }
        p.vx *= 0.992; p.vy *= 0.992;
        p.x  += p.vx;  p.y  += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle  = p.c;
        ctx.globalAlpha = p.a;
        ctx.fill();
      });

      ctx.globalAlpha = 1;

      // Draw connecting lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d  = Math.hypot(dx, dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle  = "#00f5c4";
            ctx.globalAlpha  = (1 - d / 120) * 0.065;
            ctx.lineWidth    = 0.5;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}
