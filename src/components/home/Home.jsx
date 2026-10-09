import React from 'react';
import "./home.css";
import HeroImg from "../../assets/Profile-Pic-Cropped.webp";

export const Home = () => {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true"></div>

      <div className="hero__container container">
        <div className="hero__text">
          {/* Professional Role */}
          <p className="hero__role">Robotics Software Engineer</p>

          {/* Main Name & Title */}
          <h1 className="hero__title">Bharath Prakash</h1>

          {/* Academic Subtitle */}
          <p className="hero__subtitle">
            M.Sc. Communication and Media Engineering<br />
            <span>Hochschule Offenburg, Germany</span>
          </p>

          {/* Social Links */}
          <div className="hero__actions">
            <div className="hero__socials" aria-label="Social and contact profiles">
              <a
                href="https://github.com/Bharath2228"
                target="_blank"
                rel="noreferrer"
                className="hero__social-btn"
                title="GitHub Profile"
              >
                <i className="uil uil-github-alt" aria-hidden="true"></i>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/bharath-prakash-450596263/"
                target="_blank"
                rel="noreferrer"
                className="hero__social-btn"
                title="LinkedIn Profile"
              >
                <i className="uil uil-linkedin" aria-hidden="true"></i>
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:prakashbharath28@gmail.com"
                className="hero__social-btn"
                title="Send an Email"
              >
                <i className="uil uil-envelope" aria-hidden="true"></i>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Machined Double-Bezel Portrait Frame */}
        <div className="hero__portrait-wrapper">
          <div className="hero__portrait-ambient" aria-hidden="true"></div>

          <div className="hero__portrait-shell">
            <figure className="hero__portrait-figure">
              <img
                src={HeroImg}
                alt="Bharath Prakash - Robotics Software Engineer"
                className="hero__portrait-img"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
