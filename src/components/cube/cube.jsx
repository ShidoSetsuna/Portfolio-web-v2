import React, { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./cube.scss";

// Define the factor for how much the cube rotates relative to mouse movement
const ROTATION_SENSITIVITY = 0.5;
const MAX_TILT_ANGLE = 45; // Max angle when controlled by mouse
const ANIMATION_DURATION = 6; // Matches your Sass variable

export default function Cube() {
  const sceneRef = useRef(null);
  const cubeRef = useRef(null);
  const spinTween = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const baseRotation = useRef({ x: 0, y: 0 });
  const exitTween = useRef(null);

  // --- 1. Continuous Spin Setup (Auto-Rotation) ---
  useEffect(() => {
    if (!cubeRef.current) return;

    // Create the continuous spin animation
    spinTween.current = gsap.to(cubeRef.current, {
      rotationX: "+=360",
      rotationY: "+=360",
      duration: ANIMATION_DURATION,
      repeat: -1,
      ease: "none",
    });

    // Cleanup function
    return () => {
      if (spinTween.current) spinTween.current.kill();
      if (exitTween.current) exitTween.current.kill();
    };
  }, []);

  // --- 2. Pointer Enter Handler ---
  const onPointerEnter = useCallback(() => {
    setIsHovering(true);
    
    // Kill any exit animation that might be running
    if (exitTween.current) {
      exitTween.current.kill();
      exitTween.current = null;
    }
    
    // Pause spin if it's running
    if (spinTween.current && spinTween.current.isActive()) {
      spinTween.current.pause();
      const currentRotX = gsap.getProperty(cubeRef.current, "rotationX");
      const currentRotY = gsap.getProperty(cubeRef.current, "rotationY");
      baseRotation.current = { x: currentRotX, y: currentRotY };
    }
  }, []);

  // --- 3. Mouse Move Handler (Interactive Control) ---
  const onPointerMove = useCallback(
    (e) => {
      if (!cubeRef.current || !sceneRef.current || !isHovering) return;

      const rect = sceneRef.current.getBoundingClientRect();
      
      // Calculate normalized mouse position (-1 to 1 from center)
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      // Map normalized coordinates to tilt angles
      const rotY = x * MAX_TILT_ANGLE * ROTATION_SENSITIVITY;
      const rotX = -y * MAX_TILT_ANGLE * ROTATION_SENSITIVITY;

      // Apply the rotation relative to the base rotation
      gsap.to(cubeRef.current, {
        rotationX: baseRotation.current.x + rotX,
        rotationY: baseRotation.current.y + rotY,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    [isHovering] 
  );

  // --- 4. Pointer Leave Handler (Smooth Resume) ---
  const onPointerLeave = useCallback(() => {
    setIsHovering(false);
    if (!cubeRef.current || !spinTween.current) return;

    // Smoothly transition back to the base rotation
    exitTween.current = gsap.to(cubeRef.current, {
      rotationX: baseRotation.current.x,
      rotationY: baseRotation.current.y,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        // Only resume if we're still not hovering (prevents race condition)
        if (!isHovering && spinTween.current) {
          spinTween.current.resume();
        }
        exitTween.current = null;
      },
    });
  }, [isHovering]);

  return (
    <div className="container">
      <div
        ref={sceneRef}
        className="scene"
        onPointerEnter={onPointerEnter}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <div ref={cubeRef} className="cube">
          {/* Mapping the faces */}
          {["front", "back", "right", "left", "top", "bottom"].map(face => (
            <div key={face} className={`face ${face}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}