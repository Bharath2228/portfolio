import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './project-detail.css'
import { allProjects } from './Data'

const ProjectDetail = () => {
    const { id } = useParams()
    const project = allProjects.find((p) => p.id === id)

    if (!project) {
        return (
            <section className="section">
                <div className="container project-detail">
                    <Link to="/#projects" className="project-detail__back">
                        <i className="bx bx-left-arrow-alt" aria-hidden="true"></i>
                        Back to projects
                    </Link>
                    <h1 className="project-detail__title">Project not found</h1>
                </div>
            </section>
        )
    }

    const image = project.media?.image || project.image
    const meta = project.organisation || project.category

    return (
        <section className="section">
            <div className="container project-detail">
                <Link to="/#projects" className="project-detail__back">
                    <i className="bx bx-left-arrow-alt" aria-hidden="true"></i>
                    Back to projects
                </Link>

                {image && (
                    <div className="project-detail__media">
                        <img src={image} alt={`${project.title} preview`} className="project-detail__img" />
                    </div>
                )}

                <p className="project-detail__meta">{meta}</p>
                <h1 className="project-detail__title">{project.title}</h1>
                <p className="project-detail__description">{project.description || project.summary}</p>

                {(project.demo || project.github) && (
                    <div className="project-detail__links">
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-detail__btn project-detail__btn--primary">
                                Live demo
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-detail__btn">
                                Source on GitHub
                            </a>
                        )}
                    </div>
                )}

                {project.media?.gif && (
                    <img
                        src={project.media.gif}
                        alt={`Looping demo of ${project.title}`}
                        className="project-detail__gif"
                        loading="lazy"
                    />
                )}

                {project.specs && (
                    <>
                        <h2 className="project-detail__subhead">Specs</h2>
                        <dl className="spec">
                            {project.specs.map((spec) => (
                                <div className="spec__row" key={spec.label}>
                                    <dt className="spec__label">{spec.label}</dt>
                                    <dd className="spec__value">{spec.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </>
                )}

                {project.features && (
                    <>
                        <h2 className="project-detail__subhead">Features</h2>
                        <ul className="project-detail__features">
                            {project.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>
                    </>
                )}

                {project.techStack && (
                    <>
                        <h2 className="project-detail__subhead">Tech stack</h2>
                        <ul className="project-detail__tags">
                            {project.techStack.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </section>
    )
}

export default ProjectDetail
