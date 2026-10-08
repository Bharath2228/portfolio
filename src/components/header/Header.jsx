import React, { useEffect, useState } from 'react';
import "./header.css";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

const readStoredTheme = () => {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <nav className="nav container" aria-label="Main">
        <a href="/#top" className="nav__logo">Bharath Prakash</a>

        <ul className={`nav__list ${menuOpen ? "nav__list--open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav__link" onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__controls">
          <button type="button" className="nav__icon-btn" onClick={switchTheme} aria-label="Switch light and dark mode">
            <i className={theme === "dark" ? "uil uil-sun" : "uil uil-moon"} aria-hidden="true"></i>
          </button>
          <button
            type="button"
            className="nav__icon-btn nav__menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <i className={menuOpen ? "uil uil-times" : "uil uil-bars"} aria-hidden="true"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
