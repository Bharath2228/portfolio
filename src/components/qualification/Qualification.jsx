import React from 'react'
import "./timeline.css";

const experience = [
    {
        role: "Student Research Assistant, Robotics Software Engineer",
        org: "Work-Life Robotics Institute",
        place: "Offenburg, Germany",
        period: "Mar 2026 - Present",
        points: [
            "Real-time ROS 2 stack for a 7-DoF cobot (Kassow KR1410) at 250 Hz, using the robot's native API",
            "ros2_control hardware interface in C++ with position, velocity and acceleration commands, and digital I/O",
            "MoveIt 2 planning with OMPL and Pilz, tuned TOTG and Ruckig trajectory smoothing",
            "Custom MoveIt plugin that checks planned TCP speed against safety limits before execution",
            "Supervisor node that handles task priorities over ROS 2 topics, routing the arm to a safe recovery pose on a missed gripper grab and skipping failed stations for alternate targets",
        ],
    },
    {
        role: "Student Research Assistant, Software Engineer",
        org: "Institute for Advanced Biomechanics and Motion Studies",
        place: "Offenburg, Germany",
        period: "Mar 2026 - Aug 2026",
        points: [
            "Contributed to a unified HDF5 schema for force plate, motion capture, IMU and EMG data",
            "Built Storage Scout, a PyQt6 and SQLite tool to audit research data across local, NAS and network drives",
        ],
    },
    {
        role: "Software Engineer II",
        org: "Boeing, International Space Station Program",
        place: "Bengaluru, India",
        period: "Jun 2025 - Aug 2025",
        points: [
            "Cross-platform desktop tool that packaged and extended migration scripts, cutting manual work by 99%",
            "Parallelised migration on HPC infrastructure and built validation tools that ensured 100% data integrity",
        ],
    },
    {
        role: "Software Engineer I",
        org: "Boeing, International Space Station Program",
        place: "Bengaluru, India",
        period: "Aug 2023 - Jun 2025",
        points: [
            "Automated MSSQL-to-MySQL migration with Python, cutting manual effort by 90%",
            "Modernised a legacy VB6 application into a Python desktop application",
            "Converted about 10,000 lines of T-SQL across 15 scripts into MySQL stored procedures",
        ],
    },
    {
        role: "Intern",
        org: "Bosch Limited",
        place: "Ramanagara, India",
        period: "2023",
        points: [],
    },
];

const education = [
    {
        degree: "M.Sc. Communication and Media Engineering",
        org: "Hochschule Offenburg",
        place: "Offenburg, Germany",
        period: "Oct 2025 - Present",
    },
    {
        degree: "B.E. Electronics and Instrumentation Engineering",
        org: "M S Ramaiah Institute of Technology",
        place: "Bengaluru, India",
        period: "May 2019 - Jun 2023",
    },
    {
        degree: "Pre-University College",
        org: "Vidhya Mandir Ind. Pre-University College",
        place: "Bengaluru, India",
        period: "2017 - 2019",
    },
    {
        degree: "Secondary Education",
        org: "St Mary's High School",
        place: "Bengaluru, India",
        period: "2017",
    },
];

export const Qualification = () => {
    return (
        <section className="section" id="experience">
            <header className="section__head">
                <h2 className="section__title">Experience and education</h2>
            </header>

            <div className="container qual">
                <ol className="timeline">
                    {experience.map((job) => (
                        <li className="timeline__item" key={job.role + job.period}>
                            <p className="timeline__period">{job.period}</p>
                            <div>
                                <h3 className="timeline__role">{job.role}</h3>
                                <p className="timeline__org">{job.org}, {job.place}</p>
                                {job.points.length > 0 && (
                                    <ul className="timeline__points">
                                        {job.points.map((point) => (
                                            <li key={point}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    ))}
                </ol>

                <h3 className="subhead" id="education">Education</h3>
                <ol className="timeline">
                    {education.map((item) => (
                        <li className="timeline__item" key={item.degree}>
                            <p className="timeline__period">{item.period}</p>
                            <div>
                                <h4 className="timeline__role">{item.degree}</h4>
                                <p className="timeline__org">{item.org}, {item.place}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default Qualification
