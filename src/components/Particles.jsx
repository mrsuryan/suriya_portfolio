import { useEffect, useRef } from "react";

const COLORS = ["#00f5c4", "#7c3aed", "#ec4899", "#3b82f6"];
const COUNT  = typeof window !== "undefined" && window.innerWidth < 768 ? 5 : 20;

/**
 * Full-screen particle canvas.
 * Particles repel from the mouse cursor within a 90px radius.
 * Nearby particles (< 120px) are connected with faint teal lines.
 */
export default function Particles() {
  const ref = useRef(null);
  
  // Do not render particles on mobile screens for maximum scroll performance
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) return;
    
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
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r:  Math.random() * 1.5 + 0.3,
      c:  COLORS[Math.floor(Math.random() * COLORS.length)],
      a:  Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const isLightTheme = document.body.classList.contains('light-theme');

      // Update & Draw particles
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        
        // Physics
        const dx = p.x - mx, dy = p.y - my;
        const d  = dx*dx + dy*dy; // Faster squared distance check
        if (d < 8100) { // 90^2
          const dist = Math.sqrt(d);
          p.vx += (dx / dist) * 0.1;
          p.vy += (dy / dist) * 0.1;
        }
        p.vx *= 0.99; p.vy *= 0.99;
        p.x  += p.vx; p.y  += p.vy;
        
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle  = p.c;
        ctx.globalAlpha = isLightTheme ? p.a * 0.5 : p.a;
        ctx.fill();
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
