import { useState } from "react";
import Toggle from "../toggle/toggle.jsx";
import "./nav.scss";

export default function Nav({ onBgToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
            <a href="/">Portfolio</a>
          </div>

          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
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
          </div>
        </div>
      </nav>
    </>
  );
}
