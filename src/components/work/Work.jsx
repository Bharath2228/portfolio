import React from 'react'
import './work.css'
import { featuredProjects, otherProjects } from './Data'

const Work = () => {
    return (
        <section className="section projects" id="projects">
            <header className="section__head">
                <h2 className="section__title">Projects</h2>
                <p className="section__lead">Robotics work first, then software and web projects.</p>
            </header>

            <div className="container">
                <div className="records">
                    {featuredProjects.map((project) => (
                        <article className="record" key={project.id}>
                            <div className="record__text">
                                <p className="record__meta">{project.organisation}</p>
                                <h3 className="record__title">{project.title}</h3>
                                <p className="record__summary">{project.summary}</p>

                                <dl className="spec">
                                    {project.specs.map((spec) => (
                                        <div className="spec__row" key={spec.label}>
                                            <dt className="spec__label">{spec.label}</dt>
                                            <dd className="spec__value">{spec.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>

                            {project.media && (
                                <div className="record__media">
                                    <img src={project.media.image} alt="Arm model and planning view in RViz" className="record__media-img" />
                                    <img src={project.media.gif} alt="Looping animation of the 3-DoF arm moving in simulation" className="record__media-img" loading="lazy" />
                                </div>
                            )}
                        </article>
                    ))}
                </div>

                <h3 className="subhead">More projects</h3>
                <ul className="index">
                    {otherProjects.map((project) => (
                        <li className="index__row" key={project.id}>
                            <img src={project.image} alt={`Screenshot of ${project.title}`} className="index__thumb" />
                            <div className="index__text">
                                <p className="index__title">{project.title}</p>
                                <p className="index__category">{project.category}</p>
                            </div>
                            <div className="index__links">
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noreferrer">Live demo</a>
                                )}
                                <a href={project.github} target="_blank" rel="noreferrer">Source</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Work
