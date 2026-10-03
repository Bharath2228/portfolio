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
                Results-driven Software Engineer with 2+ years of experience in full-stack development and automation, specializing in
                Python, C++, React.js, and JavaScript. Skilled in modernizing legacy systems,database migration, optimizing database performance, and
                delivering cross-platform solutions using MySQL and MSSQL. Experienced in building dynamic web applications and
                integrating robust backend services.
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
