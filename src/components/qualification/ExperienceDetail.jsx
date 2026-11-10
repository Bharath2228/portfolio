import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './experience-detail.css'
import { experienceDetails } from './experienceData'

const ExperienceDetail = () => {
    const { id } = useParams()
    const entry = experienceDetails[id]

    if (!entry) {
        return (
            <section className="section">
                <div className="container experience-detail">
                    <Link to="/#experience" className="experience-detail__back">
                        <i className="bx bx-left-arrow-alt" aria-hidden="true"></i>
                        Back to experience
                    </Link>
                    <h1 className="experience-detail__title">Not found</h1>
                </div>
            </section>
        )
    }

    return (
        <section className="section">
            <div className="container experience-detail">
                <Link to="/#experience" className="experience-detail__back">
                    <i className="bx bx-left-arrow-alt" aria-hidden="true"></i>
                    Back to experience
                </Link>

                {entry.image && (
                    <div className="experience-detail__media">
                        <img src={entry.image} alt={entry.imageAlt} className="experience-detail__img" />
                    </div>
                )}

                <p className="experience-detail__meta">{entry.period} · {entry.place}</p>
                <h1 className="experience-detail__title">{entry.org}</h1>
                <p className="experience-detail__role">{entry.role}</p>
                <p className="experience-detail__description">{entry.summary}</p>
                <p className="experience-detail__description">{entry.description}</p>

                {entry.deepDive && (
                    <>
                        {entry.deepDive.map((section) => (
                            <React.Fragment key={section.heading}>
                                <h2 className="experience-detail__subhead">{section.heading}</h2>
                                <ul className="experience-detail__points">
                                    {section.bullets.map((bullet, index) => (
                                        <li key={index}>{bullet}</li>
                                    ))}
                                </ul>
                            </React.Fragment>
                        ))}
                    </>
                )}

                {entry.annotations && (
                    <>
                        <h2 className="experience-detail__subhead">What's labelled on the rig</h2>
                        <dl className="experience-detail__annotations">
                            {entry.annotations.map((item) => (
                                <div className="experience-detail__annotation" key={item.label}>
                                    <dt>{item.label}</dt>
                                    <dd>{item.detail}</dd>
                                </div>
                            ))}
                        </dl>
                    </>
                )}

                {entry.tags && entry.tags.length > 0 && (
                    <>
                        <h2 className="experience-detail__subhead">Tech stack</h2>
                        <ul className="experience-detail__tags">
                            {entry.tags.map((tag) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </section>
    )
}

export default ExperienceDetail
