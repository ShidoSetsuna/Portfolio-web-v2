import { useState, useEffect, useRef } from "react";
import Toggle from "../toggle/toggle.jsx";
import { useLanguage } from "../../store/languageStore.jsx";
import "./nav.scss";

export default function Nav({ onBgToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinksRef = useRef(null);
  const { language, toggleLanguage, t } = useLanguage();

  // Kill transition while resizing so the menu doesn't flash when
  // crossing the mobile/desktop breakpoint this is the only fix I could find that works..
  // refactor later if possible
  useEffect(() => {
    let timer;
    const handleResize = () => {
      const el = navLinksRef.current;
      if (!el) return;
      el.classList.add("no-transition");
      clearTimeout(timer);
      timer = setTimeout(() => el.classList.remove("no-transition"), 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const lockScroll = (lock) => {
    document.body.style.overflow = lock ? "hidden" : "";
    document.documentElement.style.overflow = lock ? "hidden" : "";
  };

  const toggleMenu = () => {
    const next = !isMenuOpen;
    setIsMenuOpen(next);
    lockScroll(next);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    lockScroll(false);
  };

  const handleThemeToggle = (isDark) => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.className = `${theme}-theme`;
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`menu-backdrop ${isMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <a href="/">
              <span className="brand-name">Valdemar Andreas</span>
              <span className="brand-title">{t.nav.brandTitle}</span>
            </a>
          </div>

          <ul ref={navLinksRef} className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li style={{ "--i": 0 }}>
              <a href="#home" onClick={closeMenu}>
                {t.nav.home}
              </a>
            </li>
            <li style={{ "--i": 1 }}>
              <a href="#about" onClick={closeMenu}>
                {t.nav.about}
              </a>
            </li>
            <li style={{ "--i": 2 }}>
              <a href="#projects" onClick={closeMenu}>
                {t.nav.projects}
              </a>
            </li>
            <li style={{ "--i": 3 }}>
              <a href="#contact" onClick={closeMenu}>
                {t.nav.contact}
              </a>
            </li>
          </ul>

          <div className="nav-toggle">
            <button
              className={`burger-menu ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <Toggle
              type="theme"
              storageKey="theme"
              defaultValue={true}
              onToggle={handleThemeToggle}
              ariaLabel="Toggle dark mode"
            />
            <Toggle
              type="background"
              storageKey="animatedBg"
              defaultValue={true}
              onToggle={onBgToggle}
              ariaLabel="Toggle animated background"
            />
            <button
              className="lang-btn"
              onClick={toggleLanguage}
              aria-label={t.nav.toggleLanguage}>
              {language === "en" ? "DA" : "EN"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
