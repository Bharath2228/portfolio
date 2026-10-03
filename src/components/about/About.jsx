import React from 'react';
import "./about.css";
import AboutImg from "../../assets/Profile-Pic.png";
import CV from "../../assets/Bharath_Prakash_CV.pdf";
import { Info } from './Info';

export const About = () => {
  return (
   <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className='section__subtitle'>My Introduction</span>
        <div className="about__container container grid">

            <img src={AboutImg} alt="Portrait of Bharath Prakash" className='about__img'/>
            <div className="about__data">
                <Info />

                <p className="about__description">
                Robotics software engineer with hands-on experience building real-time ROS 2 control stacks, hardware interfaces, and
                motion-planning pipelines for industrial cobots, alongside full-stack systems engineering across desktop applications,
                concurrent data pipelines, and embedded computer-vision prototypes. Currently pursuing an M.Sc. in Communication and
                Media Engineering at Hochschule Offenburg.
                </p>

                <a href={CV} target="_blank" rel="noopener noreferrer" className="button button--flex">
                  Download CV
                  <i className="bx bx-download button__icon" aria-hidden="true"></i>
                </a>
            </div>
        </div>
   </section> 
  )
}
