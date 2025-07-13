import React, { useEffect, useRef } from 'react';

const WaterBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createBubble = (x: number, y: number, radius: number, opacity: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, `rgba(99, 102, 241, ${opacity})`);
      gradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(168, 85, 247, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create floating bubbles
      for (let i = 0; i < 8; i++) {
        const x = (canvas.width / 8) * i + Math.sin(time * 0.001 + i) * 100;
        const y = canvas.height / 2 + Math.cos(time * 0.0008 + i) * 150;
        const radius = 30 + Math.sin(time * 0.002 + i) * 20;
        const opacity = 0.1 + Math.sin(time * 0.003 + i) * 0.05;
        
        createBubble(x, y, radius, opacity);
      }
      
      // Create smaller floating particles
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = 2 + Math.random() * 4;
        const opacity = 0.05 + Math.random() * 0.1;
        
        createBubble(x, y, radius, opacity);
      }
      
      time += 16;
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default WaterBackground;