import { useEffect, useRef } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import "./social_links.scss";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/shidosetsuna",
    label: "GitHub",
    icon: <FiGithub />,
  },
  {
    href: "https://linkedin.com/in/valdemar-andreas-larsen",
    label: "LinkedIn",
    icon: <FiLinkedin />,
  },
  {
    href: "mailto:andreas.devmail@gmail.com",
    label: "Email",
    icon: <FiMail />,
  },
];

export default function SocialLinks() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const nav = document.querySelector(".navbar");
    if (!el || !nav) return;

    const update = () => {
      const navH = nav.offsetHeight;
      // Smoothly slides from below-nav to viewport top as nav scrolls away
      el.style.top = `${Math.max(0, navH - window.scrollY)}px`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className="social-links">
      <div className="social-links__bar">
        {SOCIAL_LINKS.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={
              href.startsWith("mailto") ? undefined : "noreferrer noopener"
            }
            aria-label={label}
            className="social-links__icon"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
