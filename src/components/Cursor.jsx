import React, { useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const innerRingRef = useRef(null);
  const outerRingRef = useRef(null);
  
  const mousePos = useRef({ x: -1000, y: -1000 });
  const innerPos = useRef({ x: -1000, y: -1000 });
  const outerPos = useRef({ x: -1000, y: -1000 });
  const isClicking = useRef(false);
  const rafId = useRef(null);
  
  const [ripples, setRipples] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Hide cursor on touch-only devices (mobile/tablets)
    const isTouchOnly = window.matchMedia("(pointer: coarse)").matches && !window.matchMedia("(any-pointer: fine)").matches;
    if (isTouchOnly) {
      setIsMobile(true);
      return;
    }

    const onMouseMove = (e) => {
      if (!isActive) {
        setIsActive(true);
        innerPos.current = { x: e.clientX, y: e.clientY };
        outerPos.current = { x: e.clientX, y: e.clientY };
      }
      
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const onMouseDown = (e) => {
      // Update mouse position on click as well to prevent "sticking"
      mousePos.current = { x: e.clientX, y: e.clientY };
      isClicking.current = true;
      
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);
      
      if (innerRingRef.current) innerRingRef.current.classList.add('cursor-clicking');
      if (outerRingRef.current) outerRingRef.current.classList.add('cursor-clicking');
    };

    const onMouseUp = () => {
      isClicking.current = false;
      if (innerRingRef.current) innerRingRef.current.classList.remove('cursor-clicking');
      if (outerRingRef.current) outerRingRef.current.classList.remove('cursor-clicking');
    };

    const handleHover = (e) => {
      const target = e.target;
      const isHoverable = target.closest('a, button, .project-card, .skill-card, .social-icon, .theme-toggle, .hoverable, .contact-btn, .nav-link');
      
      if (isHoverable) {
        innerRingRef.current?.classList.add('cursor-hover');
        outerRingRef.current?.classList.add('cursor-hover');
      } else {
        innerRingRef.current?.classList.remove('cursor-hover');
        outerRingRef.current?.classList.remove('cursor-hover');
      }
    };

    const render = () => {
      const scale = isClicking.current ? 0.8 : 1;
      
      innerPos.current.x += (mousePos.current.x - innerPos.current.x) * 0.2;
      innerPos.current.y += (mousePos.current.y - innerPos.current.y) * 0.2;
      
      if (innerRingRef.current) {
        innerRingRef.current.style.transform = `translate(${innerPos.current.x}px, ${innerPos.current.y}px) translate(-50%, -50%) scale(${scale})`;
      }

      outerPos.current.x += (mousePos.current.x - outerPos.current.x) * 0.1;
      outerPos.current.y += (mousePos.current.y - outerPos.current.y) * 0.1;
      
      if (outerRingRef.current) {
        outerRingRef.current.style.transform = `translate(${outerPos.current.x}px, ${outerPos.current.y}px) translate(-50%, -50%) scale(${scale})`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', handleHover);
    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', handleHover);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isActive]);



  if (isMobile) return null;
  
  return (
    <div style={{ display: isActive ? 'block' : 'none' }}>
      <div className="cursor-outer-ring" ref={outerRingRef} style={{ transform: 'translate(-1000px, -1000px)' }}></div>
      <div className="cursor-inner-ring" ref={innerRingRef} style={{ transform: 'translate(-1000px, -1000px)' }}></div>
      <div className="cursor-dot" ref={dotRef} style={{ transform: 'translate(-1000px, -1000px)' }}></div>
      {ripples.map(ripple => (
        <div 
          key={ripple.id} 
          className="cursor-ripple" 
          style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
        ></div>
      ))}
    </div>
  );
};

export default Cursor;
