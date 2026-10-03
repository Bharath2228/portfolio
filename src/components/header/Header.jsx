import React, { useEffect, useState } from 'react';
import "./header.css";

const readStoredTheme = () => {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
};

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(readStoredTheme);

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme;
    } else {
      delete document.documentElement.dataset.theme;
    }
  }, [theme]);

  const switchTheme = () => {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = theme ? theme === "dark" : systemDark;
    const next = isDark ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable: the choice applies for this visit only */
    }
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Bharath</a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#certificates" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Certificates
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" role="button" tabIndex={0} aria-label="Close menu" onClick={() => setToggle(!toggle)}></i>
        </div>

        <div className="nav__controls">
          <button type="button" className="nav__theme" onClick={switchTheme} aria-label="Switch light and dark mode">
            <i className={theme === "dark" ? "uil uil-sun" : "uil uil-moon"} aria-hidden="true"></i>
          </button>

          <div className="nav__toggle" role="button" tabIndex={0} aria-label="Open menu" onClick={() => setToggle(!toggle)}>
            <i className="uil uil-apps" aria-hidden="true"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};
