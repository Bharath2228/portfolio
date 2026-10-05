import React from 'react';
import './contact-links.css'

const Contact = () => {
    return (
        <section className="section contact" id="contact">
            <header className="section__head">
                <h2 className="section__title">Get in touch</h2>
                <p className="section__lead">Open to robotics and software engineering roles. Based in Offenburg, Germany.</p>
            </header>

            <div className="container contact__links">
                <a href="mailto:prakashbharath28@gmail.com" className="contact__link">
                    <span className="contact__label">Email</span>
                    <span className="contact__value">prakashbharath28@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/bharath-prakash-450596263/" target="_blank" rel="noreferrer" className="contact__link">
                    <span className="contact__label">LinkedIn</span>
                    <span className="contact__value">bharath-prakash-450596263</span>
                </a>
                <a href="https://github.com/Bharath2228" target="_blank" rel="noreferrer" className="contact__link">
                    <span className="contact__label">GitHub</span>
                    <span className="contact__value">Bharath2228</span>
                </a>
            </div>
        </section>
    )
}

export default Contact
