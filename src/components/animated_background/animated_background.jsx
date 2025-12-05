import { useEffect, useRef } from "react";
import "./animated_background.scss";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const blobsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize blob positions
    const initBlobs = () => {
      blobsRef.current = [
        { x: 0.2, y: 0.3, baseX: 0.2, baseY: 0.3, vx: 0.001, vy: 0.0015 },
        { x: 0.7, y: 0.2, baseX: 0.7, baseY: 0.2, vx: -0.0012, vy: 0.001 },
        { x: 0.5, y: 0.6, baseX: 0.5, baseY: 0.6, vx: 0.0008, vy: -0.001 },
        { x: 0.8, y: 0.7, baseX: 0.8, baseY: 0.7, vx: -0.001, vy: -0.0012 },
        { x: 0.3, y: 0.8, baseX: 0.3, baseY: 0.8, vx: 0.0015, vy: 0.0008 },
      ];
    };

    initBlobs();

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX / canvas.width,
        y: e.clientY / canvas.height,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update blob positions
      blobsRef.current.forEach((blob) => {
        // Natural movement
        blob.baseX += blob.vx;
        blob.baseY += blob.vy;

        // Bounce off edges
        if (blob.baseX < 0.1 || blob.baseX > 0.9) blob.vx *= -1;
        if (blob.baseY < 0.1 || blob.baseY > 0.9) blob.vy *= -1;

        // Mouse attraction (subtle)
        const dx = mouseRef.current.x - blob.baseX;
        const dy = mouseRef.current.y - blob.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 0.3) {
          blob.x = blob.baseX + dx * 0.05;
          blob.y = blob.baseY + dy * 0.05;
        } else {
          blob.x = blob.baseX;
          blob.y = blob.baseY;
        }
      });

      // Draw mesh lines
      ctx.strokeStyle = "rgba(107, 159, 216, 0.15)";
      ctx.lineWidth = 1.5;

      for (let i = 0; i < blobsRef.current.length; i++) {
        for (let j = i + 1; j < blobsRef.current.length; j++) {
          const blob1 = blobsRef.current[i];
          const blob2 = blobsRef.current[j];

          const dx = blob2.x - blob1.x;
          const dy = blob2.y - blob1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Only draw lines between close blobs
          if (distance < 0.5) {
            const opacity = (0.5 - distance) / 0.5;
            ctx.strokeStyle = `rgba(107, 159, 216, ${opacity * 0.25})`;

            ctx.beginPath();
            ctx.moveTo(blob1.x * canvas.width, blob1.y * canvas.height);
            ctx.lineTo(blob2.x * canvas.width, blob2.y * canvas.height);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="animated-background">
      <canvas ref={canvasRef} className="animated-background__mesh-canvas" />
      <svg
        className="animated-background__filters"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <svg width="0" height="0">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            result="noise"
          />
          <feComposite
            in="SourceGraphic"
            in2="noise"
            operator="arithmetic"
            k1="0.4"
            k2="0.7"
            k3="0"
            k4="0"
          />
        </filter>
      </svg>
      <div className="animated-background__blob-container">
        <div className="animated-background__blob animated-background__blob--1"></div>
        <div className="animated-background__blob animated-background__blob--2"></div>
        <div className="animated-background__blob animated-background__blob--3"></div>
        <div className="animated-background__blob animated-background__blob--4"></div>
        <div className="animated-background__blob animated-background__blob--5"></div>
      </div>
    </div>
  );
}
