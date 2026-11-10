import React, { useEffect, useState } from 'react';
import "./home.css";
import HeroImg from "../../assets/Profile-Pic-Cropped.webp";

export const Home = () => {
  // Fixed to the viewport, not the hero section: if the hero's own content
  // ever ends up taller than the screen (a small laptop window, a long
  // name/role stack), a cue positioned at the section's bottom edge would
  // be pushed below the fold with it - the opposite of what it's for.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true"></div>

      <div className="hero__container container">
        <div className="hero__text">
          <h1 className="hero__name">Bharath Prakash</h1>
          <p className="hero__role">Robotics software engineer</p>

          <p className="hero__subtitle">
            M.Sc. Communication and Media Engineering, Hochschule Offenburg
          </p>

          <div className="hero__links">
            <a
              href="https://github.com/Bharath2228"
              target="_blank"
              rel="noreferrer"
              className="hero__link"
            >
              <i className="uil uil-github-alt" aria-hidden="true"></i>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bharath-prakash-450596263/"
              target="_blank"
              rel="noreferrer"
              className="hero__link"
            >
              <i className="uil uil-linkedin" aria-hidden="true"></i>
              LinkedIn
            </a>
            <a href="mailto:prakashbharath28@gmail.com" className="hero__link">
              <i className="uil uil-envelope" aria-hidden="true"></i>
              Email
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <img
            src={HeroImg}
            alt="Bharath Prakash - Robotics Software Engineer"
            className="hero__portrait-img"
          />
        </div>
      </div>

      <a
        href="#experience"
        className={`hero__scroll-cue${scrolled ? " hero__scroll-cue--hidden" : ""}`}
        aria-label="Scroll down to Experience"
      >
        <span>Scroll</span>
        <i className="uil uil-arrow-down" aria-hidden="true"></i>
      </a>
    </section>
  );
};

export default Home;
