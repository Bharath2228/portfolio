import React, { useState } from 'react'
import "./qualification.css";

export const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Experience
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Education
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Master of Science</h3>
                                {/* <span className="qualification__subtitle">Electrical and Computer Science Engineering</span> */}
                                {/* <span className="qualification__subtitle">M. Sc. in Communication and Media Engineering</span> */}
                                <span className="qualification__subtitle">Hochschule Offenburg</span>
                                <span className="qualification__subtitle">Offenburg, Germany</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2025 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div className='data'>
                                <h3 className="qualification__title">Bachelor of Engineering</h3>
                                <span className="qualification__subtitle">Ramaiah Institute of Technology</span>
                                <span className="qualification__subtitle">Bengaluru, India </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Pre-University College</h3>
                                <span className="qualification__subtitle">Vidhya Mandir Ind. Pre-University College</span>
                                <span className="qualification__subtitle">Bengaluru, India </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2019
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Secondary Education</h3>
                                <span className="qualification__subtitle">ST Mary's High School </span>
                                <span className="qualification__subtitle">Bengaluru, India </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2017
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineer - Developer</h3>
                                <span className="qualification__subtitle">Boeing India Private Limited</span>
                                <span className="qualification__subtitle">Bengaluru, India </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 - 2025
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Intern</h3>
                                <span className="qualification__subtitle">Bosch Limited</span>
                                <span className="qualification__subtitle">Ramanagara, India </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
