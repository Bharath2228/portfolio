import React from 'react'
import "./home.css"
import CV from "../../assets/Bharath_Prakash_CV.pdf"
import HeroImg from "../../assets/Profile-Pic-Cropped.webp"

export const Home = () => {
  return (
    <section className="hero" id="top">
      <div className="hero__container container">
        <div className="hero__text">
          <p className="hero__role">Robotics Software Engineer</p>
          <h1 className="hero__title">Bharath Prakash</h1>
          <p className="hero__statement">
            I build real-time control stacks and motion planning for industrial cobots,
            from ROS 2 hardware interfaces to trajectory smoothing in MoveIt 2.
          </p>
          <p className="hero__meta">M.Sc. Communication and Media Engineering, Hochschule Offenburg</p>

          <div className="hero__actions">
            <a href="#projects" className="button">View projects</a>
            <a href={CV} target="_blank" rel="noopener noreferrer" className="button button--outline">
              Download CV
            </a>
          </div>

          <ul className="hero__links" aria-label="Profiles">
            <li>
              <a href="https://www.linkedin.com/in/bharath-prakash-450596263/" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/Bharath2228" target="_blank" rel="noreferrer">GitHub</a>
            </li>
            <li>
              <a href="mailto:prakashbharath28@gmail.com">Email</a>
            </li>
          </ul>
        </div>

        <figure className="hero__figure">
          <img src={HeroImg} alt="Portrait of Bharath Prakash" className="hero__img" />
        </figure>
      </div>
    </section>
  )
}

export default Home
