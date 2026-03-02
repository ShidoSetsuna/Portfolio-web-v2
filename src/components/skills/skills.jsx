import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import {
  SiJavascript,
  SiReact,
  SiPhp,
  SiWordpress,
  SiHtml5,
  SiCss3,
  SiSass,
  SiVite,
  SiNodedotjs,
  SiGit,
  SiMysql,
  SiGithub,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
} from "react-icons/si";
import "./skills.scss";

const row1 = [
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiReact />, label: "React" },
  { icon: <SiPhp />, label: "PHP" },
  { icon: <SiWordpress />, label: "WordPress" },
  { icon: <SiHtml5 />, label: "HTML5" },
  { icon: <SiTailwindcss />, label: "Tailwind" },
  { icon: <SiUnity />, label: "Unity" },
];

const row2 = [
  { icon: <SiSass />, label: "SCSS" },
  { icon: <SiCss3 />, label: "CSS3" },
  { icon: <SiVite />, label: "Vite" },
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiGit />, label: "Git" },
  { icon: <SiMysql />, label: "MySQL" },
  { icon: <SiGithub />, label: "GitHub" },
];

function SkillBadge({ icon, label }) {
  return (
    <div className="skills__badge">
      <span className="skills__badge-icon">{icon}</span>
      <span className="skills__badge-label">{label}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false, duration = 22 }) {
  const trackRef = useRef(null);
  const measureRef = useRef(null);
  const [copies, setCopies] = useState(2);

  // Calculate how many copies we need to always fill the screen
  useEffect(() => {
    const measure = measureRef.current;
    if (!measure) return;

    const calcCopies = () => {
      const setWidth = measure.scrollWidth;
      const viewWidth = window.innerWidth;
      // Need enough copies so total width >= 2× viewport
      const needed = Math.ceil((viewWidth * 2) / setWidth) + 1;
      setCopies(Math.max(needed, 2));
    };

    // Wait for layout
    requestAnimationFrame(calcCopies);
    window.addEventListener("resize", calcCopies);
    return () => window.removeEventListener("resize", calcCopies);
  }, [items]);

  // Run GSAP after copies are set
  useEffect(() => {
    const track = trackRef.current;
    const measure = measureRef.current;
    if (!track || !measure) return;

    let frameId = requestAnimationFrame(() => {
      const setWidth = measure.scrollWidth;
      if (setWidth === 0) return;

      if (!reverse) {
        gsap.set(track, { x: 0 });
        gsap.to(track, {
          x: -setWidth,
          duration,
          ease: "none",
          repeat: -1,
        });
      } else {
        gsap.set(track, { x: -setWidth });
        gsap.to(track, {
          x: 0,
          duration,
          ease: "none",
          repeat: -1,
        });
      }
    });

    return () => {
      cancelAnimationFrame(frameId);
      gsap.killTweensOf(track);
    };
  }, [copies, reverse, duration]);

  return (
    <div className="skills__marquee">
      <div className="skills__track" ref={trackRef}>
        {/* First copy also used for measurement */}
        <div className="skills__set" ref={measureRef}>
          {items.map((skill, i) => (
            <SkillBadge key={i} icon={skill.icon} label={skill.label} />
          ))}
        </div>
        {/* Additional copies to fill viewport */}
        {Array.from({ length: copies - 1 }).map((_, copyIdx) => (
          <div className="skills__set" key={copyIdx} aria-hidden="true">
            {items.map((skill, i) => (
              <SkillBadge key={i} icon={skill.icon} label={skill.label} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills">
      <h2 className="skills__header">Technologies</h2>
      <p className="skills__subheader">Tools &amp; languages I&apos;ve worked with</p>
      <MarqueeRow items={row1} duration={22} />
      <MarqueeRow items={row2} reverse duration={26} />
    </section>
  );
}
