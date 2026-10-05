import React from 'react';
import "./about.css";
import CV from "../../assets/Bharath_Prakash_CV.pdf";

const facts = [
  { value: "3+ years", label: "Software engineering, including industrial robotics" },
  { value: "250 Hz", label: "Real-time control loop on a 7-DoF cobot" },
  { value: "C++ / Python", label: "Hardware interfaces, planning tools and desktop apps" },
  { value: "English C1 · German A2", label: "Working languages" },
];

export const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <header className="section__head">
          <h2 className="section__title">About</h2>
        </header>

        <div className="about__body">
          <p className="about__lead">
            Robotics software engineer with hands-on experience building real-time ROS 2 control stacks,
            hardware interfaces and motion-planning pipelines for industrial cobots and robots. Alongside robotics, I work on
            full-stack systems: desktop applications, concurrent data pipelines and embedded computer-vision prototypes.
          </p>
          <p className="about__text">
            I am pursuing an M.Sc. in Communication and Media Engineering at Hochschule Offenburg and work as a
            student research assistant at the Work-Life Robotics Institute.
          </p>

          <dl className="facts">
            {facts.map((fact) => (
              <div className="facts__item" key={fact.label}>
                <dt className="facts__value">{fact.value}</dt>
                <dd className="facts__label">{fact.label}</dd>
              </div>
            ))}
          </dl>

          <a href={CV} target="_blank" rel="noopener noreferrer" className="text-link">
            Download full CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
