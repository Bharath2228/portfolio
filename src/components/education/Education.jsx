import React from 'react';
import "./education.css";

const degrees = [
  {
    id: "msc-offenburg",
    degree: "M.Sc. Communication and Media Engineering",
    org: "Hochschule Offenburg",
    place: "Offenburg, Germany",
    period: "Oct 2025 - Present",
    description:
      "Graduate coursework in object-oriented software development, distributed applications, and database systems design.",
    tags: ["Object-Oriented Development", "UML Modeling", "Distributed Applications", "Database Systems", "Ubiquitous Applications"],
  },
  {
    id: "be-ramaiah",
    degree: "B.E. Electronics and Instrumentation Engineering",
    org: "M S Ramaiah Institute of Technology",
    place: "Bengaluru, India",
    period: "May 2019 - Jun 2023",
    description:
      "Foundational degree covering Control Systems, Microcontrollers, Signal Processing, and Transducers.",
    tags: ["Control Theory", "Instrumentation", "Microcontrollers", "Signals"],
  },
];

export const Education = () => {
  return (
    <section className="section" id="education">
      <header className="section__head">
        <h2 className="section__title">Education</h2>
      </header>

      <div className="container">
        <ol className="edu-record">
          {degrees.map((item) => (
            <li className="edu-row" key={item.id}>
              <div className="edu-row__meta">
                <span className="edu-row__period">{item.period}</span>
                <span className="edu-row__place">
                  <i className="uil uil-map-marker" aria-hidden="true"></i> {item.place}
                </span>
              </div>

              <div className="edu-row__body">
                <h3 className="edu-row__org">{item.org}</h3>
                <p className="edu-row__degree">{item.degree}</p>
                <p className="edu-row__description">{item.description}</p>

                {item.tags.length > 0 && (
                  <div className="edu-row__tags" aria-label="Subjects studied">
                    {item.tags.map((tag) => (
                      <span className="edu-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
