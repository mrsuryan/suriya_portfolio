import React, { useEffect, useRef } from 'react';
import '../styles/Background3D.css';

const Background3D = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 30;
      const moveY = (clientY - window.innerHeight / 2) / 30;

      if (sceneRef.current) {
        sceneRef.current.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-3d-container">
      <div className="scene-3d" ref={sceneRef}>
        {/* Cube 1 */}
        <div className="cube-3d obj-1">
          <div className="cube-face face-front"></div>
          <div className="cube-face face-back"></div>
          <div className="cube-face face-right"></div>
          <div className="cube-face face-left"></div>
          <div className="cube-face face-top"></div>
          <div className="cube-face face-bottom"></div>
        </div>

        {/* Ring 1 */}
        <div className="ring-3d obj-2"></div>

        {/* Cube 2 */}
        <div className="cube-3d obj-3">
          <div className="cube-face face-front"></div>
          <div className="cube-face face-back"></div>
          <div className="cube-face face-right"></div>
          <div className="cube-face face-left"></div>
          <div className="cube-face face-top"></div>
          <div className="cube-face face-bottom"></div>
        </div>

        {/* Ring 2 */}
        <div className="ring-3d obj-4"></div>

        {/* Cube 3 */}
        <div className="cube-3d obj-5">
          <div className="cube-face face-front" style={{ background: 'rgba(124, 58, 237, 0.05)', borderColor: 'rgba(124, 58, 237, 0.2)' }}></div>
          <div className="cube-face face-back" style={{ background: 'rgba(124, 58, 237, 0.05)', borderColor: 'rgba(124, 58, 237, 0.2)' }}></div>
          <div className="cube-face face-right" style={{ background: 'rgba(124, 58, 237, 0.05)', borderColor: 'rgba(124, 58, 237, 0.2)' }}></div>
          <div className="cube-face face-left" style={{ background: 'rgba(124, 58, 237, 0.05)', borderColor: 'rgba(124, 58, 237, 0.2)' }}></div>
          <div className="cube-face face-top" style={{ background: 'rgba(124, 58, 237, 0.05)', borderColor: 'rgba(124, 58, 237, 0.2)' }}></div>
          <div className="cube-face face-bottom" style={{ background: 'rgba(124, 58, 237, 0.05)', borderColor: 'rgba(124, 58, 237, 0.2)' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Background3D;
