import React from 'react'
import './footer-bar.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <p className="footer__name">Bharath Prakash</p>

                <nav className="footer__nav" aria-label="Footer">
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </nav>

                <p className="footer__copy">&copy; {new Date().getFullYear()} Bharath Prakash. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
