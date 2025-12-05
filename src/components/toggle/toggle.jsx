import { useState, useEffect } from "react";
import "./toggle.scss";

export default function Toggle({
  type = "theme",
  onToggle,
  defaultValue,
  storageKey,
  ariaLabel,
  icons,
}) {
  const [isEnabled, setIsEnabled] = useState(defaultValue ?? true);

  useEffect(() => {
    // Check for saved preference
    const savedState = localStorage.getItem(storageKey);
    const enabled =
      savedState === null ? defaultValue ?? true : savedState === "true";
    setIsEnabled(enabled);
    if (onToggle) onToggle(enabled);
  }, []);

  const handleToggle = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    localStorage.setItem(storageKey, newState.toString());
    if (onToggle) onToggle(newState);
  };

  // Default icons based on type
  const getDefaultIcons = () => {
    if (type === "theme") {
      return {
        enabled: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        ),
        disabled: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        ),
      };
    } else if (type === "background") {
      return {
        enabled: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <circle cx="12" cy="12" r="3"></circle>
            <circle cx="12" cy="12" r="8" opacity="0.5"></circle>
            <circle cx="12" cy="12" r="11" opacity="0.3"></circle>
          </svg>
        ),
        disabled: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
            <line x1="2" y1="2" x2="22" y2="22"></line>
          </svg>
        ),
      };
    }
  };

  const displayIcons = icons || getDefaultIcons();

  return (
    <button
      className="toggle-button"
      onClick={handleToggle}
      aria-label={ariaLabel || `Toggle ${type}`}
      title={ariaLabel || `Toggle ${type}`}>
      <span className="toggle-icon">
        {isEnabled ? displayIcons.enabled : displayIcons.disabled}
      </span>
    </button>
  );
}
