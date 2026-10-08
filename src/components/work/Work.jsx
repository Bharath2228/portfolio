import React from 'react'
import { Link } from 'react-router-dom'
import './work.css'
import { featuredProjects, otherProjects } from './Data'

const ProjectCard = ({ project }) => {
    const image = project.media?.image || project.image
    const meta = project.organisation || project.category

    return (
        <Link className="project-card" to={`/projects/${project.id}`}>
            <div className="project-card__media">
                {image ? (
                    <img src={image} alt={`${project.title} preview`} className="project-card__img" />
                ) : (
                    <div className="project-card__placeholder" aria-hidden="true">
                        <i className="bx bx-folder"></i>
                    </div>
                )}
            </div>

            <div className="project-card__head">
                <div className="project-card__head-text">
                    <p className="project-card__meta">{meta}</p>
                    <h3 className="project-card__title">{project.title}</h3>
                </div>
                <i className="bx bx-chevron-right project-card__chevron" aria-hidden="true"></i>
            </div>
        </Link>
    )
}

const Work = () => {
    return (
        <section className="section projects" id="projects">
            <header className="section__head">
                <h2 className="section__title">Projects</h2>
                <p className="section__lead">Robotics work first, then software and web projects.</p>
            </header>

            <div className="container">
                <div className="project-grid">
                    {featuredProjects.map((project) => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </div>

                <h3 className="subhead">More projects</h3>
                <div className="project-grid">
                    {otherProjects.map((project) => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work
