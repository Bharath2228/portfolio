import React from 'react';
import "./home.css";
import HeroImg from "../../assets/Profile-Pic-Cropped.webp";

// Pick-and-place cycle: shoulder/elbow/wrist reach down to the left marker,
// close the gripper, lift, carry the block across, set it down on the right
// marker, release, and return empty-handed. One continuous synchronised
// timeline drives every joint, the gripper fingers and the block together.
const HeroPickPlaceArm = () => (
  <svg
    className="hero__arm"
    viewBox="0 45 480 275"
    aria-hidden="true"
    focusable="false"
  >
    {/* Resting on the pick surface until the gripper closes on it */}
    <rect className="pp-box pp-box--pick" x="126" y="143" width="18" height="18" rx="3" />
    {/* Resting on the place surface once the gripper has released it */}
    <rect className="pp-box pp-box--place" x="345" y="139" width="18" height="18" rx="3" />

    <rect className="pp-base-lower" x="200" y="300" width="90" height="12" rx="3" />
    <rect className="pp-base" x="219" y="282" width="52" height="22" rx="5" />

    <g transform="translate(245,300)">
      <g className="pp-j1">
        <rect className="pp-link" x="-8" y="-100" width="16" height="100" rx="8" />
        <circle className="pp-joint pp-joint--shoulder" cx="0" cy="0" r="12" />
        <g transform="translate(0,-100)">
          <g className="pp-j2">
            <rect className="pp-link" x="-7" y="-85" width="14" height="85" rx="7" />
            <circle className="pp-joint" cx="0" cy="0" r="10" />
            <g transform="translate(0,-85)">
              <g className="pp-j3">
                <rect className="pp-link pp-link--wrist" x="-5" y="-30" width="10" height="30" rx="5" />
                <circle className="pp-joint pp-joint--wrist" cx="0" cy="0" r="8" />
                <g transform="translate(0,-30)">
                  {/* Nested in the wrist's own transform chain, so it tracks the
                      gripper exactly through the swing instead of approximating
                      the path with its own keyframes. */}
                  <rect className="pp-box pp-box--held" x="-9" y="-21" width="18" height="18" rx="3" />
                  <g className="pp-finger-l">
                    <rect x="-7" y="-24" width="8" height="24" rx="3" />
                  </g>
                  <g className="pp-finger-r">
                    <rect x="-1" y="-24" width="8" height="24" rx="3" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

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

        {/* Ambient pick-and-place animation, grounded with the rest of the hero */}
        <div className="hero__arm-row">
          <HeroPickPlaceArm />
        </div>
      </div>
    </section>
  );
};

export default Home;
