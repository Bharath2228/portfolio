import React from 'react';
import "./home.css";
import HeroImg from "../../assets/Profile-Pic-Cropped.webp";

// A small top-down plant layout - office, assembly room, storage room -
// divided by interior walls only (no outer boundary box, which competed
// with the portrait/name). A mobile robot patrols between all three. The
// middle "assembly" room is left clear since the portrait/name sits over
// it; the pick-and-place arm (same rig as before) works the storage room
// instead, taking parts from a pile and setting them on a conveyor next
// to the palletised stock. Pure background texture: low-contrast, behind
// the portrait/name.
// A small top-down 4-wheeled AGV (chassis, four wheels, headlights at the
// front) rather than a vacuum-puck circle. Faces +x by default; scaleX(-1)
// in the patrol keyframes flips it to face the way it's actually driving.
const FacilityBot = ({ modifier }) => (
  <g className={`fac-bot fac-bot--${modifier}`}>
    <rect className="fac-bot-wheel" x="-11" y="-10" width="7" height="4" rx="1.5" />
    <rect className="fac-bot-wheel" x="4" y="-10" width="7" height="4" rx="1.5" />
    <rect className="fac-bot-wheel" x="-11" y="6" width="7" height="4" rx="1.5" />
    <rect className="fac-bot-wheel" x="4" y="6" width="7" height="4" rx="1.5" />
    <rect className="fac-bot-chassis" x="-12" y="-7" width="24" height="14" rx="4" />
    <circle className="fac-bot-light" cx="9" cy="-3" r="1.3" />
    <circle className="fac-bot-light" cx="9" cy="3" r="1.3" />
  </g>
);

const HeroFacilityScene = () => (
  <svg
    className="hero__facility"
    viewBox="0 0 900 520"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <pattern id="facGrid" width="36" height="36" patternUnits="userSpaceOnUse">
        <path className="fac-grid-line" d="M36 0H0V36" />
      </pattern>
      {/* Both interior walls (x=330, x=650) fall right behind the centred
          portrait/name column - this fades them to nothing there instead of
          letting them run as hard lines through the photo and headline. */}
      <linearGradient id="facWallFade" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="white" />
        <stop offset="26%" stopColor="white" />
        <stop offset="35%" stopColor="black" />
        <stop offset="65%" stopColor="black" />
        <stop offset="74%" stopColor="white" />
        <stop offset="100%" stopColor="white" />
      </linearGradient>
      <mask id="facWallMask">
        <rect x="0" y="0" width="900" height="520" fill="url(#facWallFade)" />
      </mask>

      {/* Softens the floor tint and grid into the surrounding dark instead
          of ending in a hard rectangular edge (which reads as a UI panel,
          not atmosphere). Ellipses to the plan's own aspect automatically
          since it's sized in objectBoundingBox units against that rect. */}
      <radialGradient id="facFade">
        <stop offset="0%" stopColor="white" />
        <stop offset="55%" stopColor="white" />
        <stop offset="100%" stopColor="black" />
      </radialGradient>
      <mask id="facFadeMask">
        <rect x="34" y="34" width="832" height="452" fill="url(#facFade)" />
      </mask>
    </defs>

    {/* Floor fills and grid texture, faded at the edges so the plan doesn't
        read as a boxed-in panel */}
    <g mask="url(#facFadeMask)">
      <rect className="fac-floor fac-floor--office" x="34" y="34" width="292" height="452" rx="4" />
      <rect className="fac-floor fac-floor--assembly" x="334" y="34" width="312" height="452" rx="4" />
      <rect className="fac-floor fac-floor--storage" x="654" y="34" width="212" height="452" rx="4" />
      <rect x="34" y="34" width="832" height="452" fill="url(#facGrid)" className="fac-grid" />
    </g>

    {/* Interior walls only (no outer boundary), each with a door gap, masked
        out behind the centred content column */}
    <g mask="url(#facWallMask)">
      <line className="fac-wall" x1="330" y1="30" x2="330" y2="225" />
      <line className="fac-wall" x1="330" y1="295" x2="330" y2="490" />
      <line className="fac-wall" x1="650" y1="30" x2="650" y2="330" />
      <line className="fac-wall" x1="650" y1="380" x2="650" y2="490" />
    </g>

    {/* Office furniture: a desk and shelving along the back wall, a small
        meeting nook filling out the rest of the room */}
    <rect className="fac-furniture" x="70" y="110" width="100" height="44" rx="4" />
    <rect className="fac-furniture" x="70" y="330" width="180" height="10" rx="2" />
    <rect className="fac-furniture" x="70" y="354" width="180" height="10" rx="2" />
    <circle className="fac-furniture fac-furniture--table" cx="245" cy="195" r="26" />
    <circle className="fac-furniture fac-furniture--chair" cx="245" cy="155" r="7" />
    <circle className="fac-furniture fac-furniture--chair" cx="277" cy="212" r="7" />
    <circle className="fac-furniture fac-furniture--chair" cx="213" cy="212" r="7" />

    {/* Conveyor belt, in the storage room next to the pallets */}
    <rect className="fac-belt" x="760" y="142" width="90" height="20" rx="2" />
    <line className="fac-belt-ticks" x1="764" y1="152" x2="846" y2="152" />
    <line className="fac-belt-leg" x1="766" y1="162" x2="766" y2="176" />
    <line className="fac-belt-leg" x1="844" y1="162" x2="844" y2="176" />

    {/* A small pile of parts waiting to be picked, next to the one the arm
        actually animates taking (pp-box--pick below) */}
    <rect className="fac-pile" x="700" y="168" width="13" height="13" rx="2" />
    <rect className="fac-pile" x="713" y="173" width="13" height="13" rx="2" />
    <rect className="fac-pile" x="705" y="179" width="13" height="13" rx="2" />

    {/* Palletised storage, lower in the same room */}
    <rect className="fac-pile" x="716" y="380" width="34" height="34" rx="3" />
    <rect className="fac-pile" x="758" y="380" width="34" height="34" rx="3" />
    <rect className="fac-pile" x="716" y="422" width="34" height="34" rx="3" />
    <rect className="fac-pile" x="758" y="422" width="34" height="34" rx="3" />

    {/* Pick-and-place arm, scaled down into the storage room - clear of the
        wall-masked zone behind the portrait/name entirely */}
    <g transform="translate(669,90) scale(0.42)">
      <rect className="pp-box pp-box--pick" x="126" y="143" width="18" height="18" rx="3" />
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
    </g>

    {/* Two AGVs on independent routes: one patrols office -> corridor ->
        lower floor, routed below the arm's work cell so it never drives
        through it; the other runs a short aisle loop past the pallets. */}
    <FacilityBot modifier="a" />
    <FacilityBot modifier="b" />
  </svg>
);

export const Home = () => {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true"></div>
      <HeroFacilityScene />

      <div className="hero__container container">
        <div className="hero__intro">
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
        </div>
      </div>
    </section>
  );
};

export default Home;
