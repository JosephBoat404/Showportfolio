import React, { useEffect, useRef } from 'react';

interface Raindrop {
  x: number;
  y: number;
  dy: number;
  radius: number;
  color: string;
  isExploding: boolean;
  explosionProgress: number;
}

const BackgroundBeams: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raindrops: Raindrop[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createRaindrop = (): Raindrop => {
      return {
        x: Math.random() * canvas.width,
        y: 0, // Start at the top
        dy: Math.random() * 4 + 2, // Falling speed
        radius: Math.random() * 4 + 2, // Size of the raindrop
        color: `rgba(181, 191, 212, ${Math.random() * 0.5 + 0.5})`, // Light blue color
        isExploding: false,
        explosionProgress: 0,
      };
    };

    const drawRaindrop = (raindrop: Raindrop) => {
      ctx.beginPath();
      ctx.arc(raindrop.x, raindrop.y, raindrop.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = raindrop.color;
      ctx.fill();
      ctx.closePath();
    };

    const drawExplosion = (raindrop: Raindrop) => {
      const explosionRadius = raindrop.explosionProgress * 30;
      ctx.beginPath();
      ctx.arc(raindrop.x, raindrop.y, explosionRadius, 0, Math.PI * 2, false);
      ctx.strokeStyle = `rgba(100, 150, 255, ${1 - raindrop.explosionProgress})`;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();
    };

    const updateRaindrop = (raindrop: Raindrop) => {
      if (!raindrop.isExploding) {
        raindrop.y += raindrop.dy;

        // Check if the raindrop hits the bottom
        if (raindrop.y + raindrop.radius >= canvas.height) {
          raindrop.isExploding = true;
        }
      } else {
        // Handle explosion animation
        raindrop.explosionProgress += 0.05;
        if (raindrop.explosionProgress >= 1) {
          // Remove the raindrop after the explosion is complete
          raindrops = raindrops.filter((drop) => drop !== raindrop);
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update raindrops
      raindrops.forEach((raindrop) => {
        if (raindrop.isExploding) {
          drawExplosion(raindrop);
        } else {
          drawRaindrop(raindrop);
        }
        updateRaindrop(raindrop);
      });

      // Add new raindrops periodically
      if (Math.random() < 0.02) {
        raindrops.push(createRaindrop());
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    // Initialize canvas
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Start the animation
    draw();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundBeams;