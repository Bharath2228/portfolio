import React, { useEffect, useState } from 'react'
import './scrollup.css'

const ScrollUp = () => {
    const [show, setShow] = useState(false)

    // Show the button once the hero has scrolled out of view.
    // IntersectionObserver instead of a window scroll listener: no per-frame work.
    useEffect(() => {
        const hero = document.getElementById('home')
        if (!hero) return

        const observer = new IntersectionObserver(([entry]) => {
            setShow(!entry.isIntersecting)
        })
        observer.observe(hero)
        return () => observer.disconnect()
    }, [])

    return (
        <a href="#home" aria-label="Back to top" className={`scrollup ${show ? 'show-scroll' : ''}`}>
            <i className="uil uil-arrow-up scrollup__icon" aria-hidden="true"></i>
        </a>
    )
}

export default ScrollUp
