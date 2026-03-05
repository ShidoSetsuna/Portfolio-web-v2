import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./cube.scss";

const ANIMATION_DURATION = 6;
const KICK_STRENGTH = 3;
const KICK_DECAY = 1.2;
const VELOCITY_SMOOTHING = 0.3;
const CLICK_KICK = 120; //Fuck it up const, as I like to call it

export default function CubeStandalone() {
  const sceneRef = useRef(null);
  const spinRef = useRef(null);
  const kickRef = useRef(null);
  const spinTween = useRef(null);
  const lastPointer = useRef(null);
  const velocity = useRef({ x: 0, y: 0 });
  const kickOffset = useRef({ x: 0, y: 0 });
  const quickX = useRef(null);
  const quickY = useRef(null);
  const isDragging = useRef(false);

  // Continuous idle spin
  useEffect(() => {
    if (!spinRef.current || !kickRef.current) return;

    spinTween.current = gsap.to(spinRef.current, {
      rotationX: "+=360",
      rotationY: "+=360",
      duration: ANIMATION_DURATION,
      repeat: -1,
      ease: "none",
    });

    quickX.current = gsap.quickTo(kickRef.current, "rotationX", {
      duration: KICK_DECAY,
      ease: "power3.out",
    });
    quickY.current = gsap.quickTo(kickRef.current, "rotationY", {
      duration: KICK_DECAY,
      ease: "power3.out",
    });

    return () => {
      spinTween.current?.kill();
    };
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!sceneRef.current) return;

    const now = performance.now();

    if (lastPointer.current) {
      const dt = Math.max(now - lastPointer.current.t, 1);
      const dx = e.clientX - lastPointer.current.x;
      const dy = e.clientY - lastPointer.current.y;

      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        isDragging.current = true;
      }

      const rawVx = (dx / dt) * 16;
      const rawVy = (dy / dt) * 16;

      velocity.current.x += (rawVx - velocity.current.x) * VELOCITY_SMOOTHING;
      velocity.current.y += (rawVy - velocity.current.y) * VELOCITY_SMOOTHING;

      const vx = velocity.current.x;
      const vy = velocity.current.y;

      if (Math.abs(vx) > 0.5 || Math.abs(vy) > 0.5) {
        kickOffset.current.y += vx * KICK_STRENGTH;
        kickOffset.current.x += -vy * KICK_STRENGTH;

        quickX.current?.(kickOffset.current.x);
        quickY.current?.(kickOffset.current.y);
      }
    }

    lastPointer.current = { x: e.clientX, y: e.clientY, t: now };
  }, []);

  const onPointerDown = useCallback(() => {
    isDragging.current = false;
  }, []);

  const onPointerUp = useCallback(() => {
    lastPointer.current = null;
    velocity.current = { x: 0, y: 0 };

    if (isDragging.current) return;

    // Kick on click
    kickOffset.current.x += CLICK_KICK;
    kickOffset.current.y += CLICK_KICK * 0.6;
    quickX.current?.(kickOffset.current.x);
    quickY.current?.(kickOffset.current.y);
  }, []);

  const onPointerLeave = useCallback(() => {
    lastPointer.current = null;
    velocity.current = { x: 0, y: 0 };
  }, []);

  return (
    <div className="cube-counter">
      <div
        ref={sceneRef}
        className="scene"
        onPointerMove={onPointerMove}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerLeave}
      >
        <div ref={spinRef} className="cube-spin">
          <div ref={kickRef} className="cube">
            {["front", "back", "right", "left", "top", "bottom"].map((face) => (
              <div key={face} className={`face ${face}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
