import React from 'react';
import "./skill-groups.css";

// Grouped as in the CV's Technical Skills section
const groups = [
    {
        title: "Robotics and motion planning",
        items: ["ROS 2 (Jazzy)", "ros2_control", "MoveIt 2", "OMPL", "Pilz Industrial Motion Planner", "URDF/Xacro", "RViz2", "Gazebo / Ignition", "Linux real-time kernel"],
    },
    {
        title: "Perception and computer vision",
        items: ["OpenCV", "Image processing", "Colour-space analysis", "Contour detection"],
    },
    {
        title: "Embedded systems and hardware",
        items: ["Arduino", "UART / serial", "Digital I/O", "Relay control", "IMU, temperature and distance sensors"],
    },
    {
        title: "Programming languages",
        items: ["C++", "Python", "SQL / T-SQL"],
    },
    {
        title: "Software engineering and systems",
        items: ["PyQt6", "Kivy", "SQLite", "Multithreading and concurrency", "WAL journaling", "Flask", "REST APIs", "HDF5", "Git"],
    },
    {
        title: "Databases and cloud",
        items: ["MySQL", "MSSQL", "VMware Tanzu", "Microsoft Azure"],
    },
];

export const Skills = () => {
    return (
        <section className="section" id="skills">
            <header className="section__head">
                <h2 className="section__title">Skills</h2>
            </header>

            <div className="container skill-groups">
                {groups.map((group) => (
                    <div className="skill-group" key={group.title}>
                        <h3 className="skill-group__title">{group.title}</h3>
                        <ul className="tags">
                            {group.items.map((item) => (
                                <li key={item} className="tag">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
