import React, { useState } from 'react';
import "./timeline.css";

const treeNodes = [
  {
    id: "work-life-robotics",
    role: "Student Research Assistant, Robotics Software Engineer",
    org: "Work-Life Robotics Institute",
    place: "Offenburg, Germany",
    period: "Mar 2026 - Present",
    isCurrent: true,
    branch: "robotics",
    branchLabel: "feat/ros2-cobot-stack",
    points: [
      "Real-time ROS 2 stack for a 7-DoF cobot (Kassow KR1410) at 250 Hz, using the robot's native API",
      "ros2_control hardware interface in C++ with position, velocity and acceleration commands, and digital I/O",
      "MoveIt 2 planning with OMPL and Pilz, tuned TOTG and Ruckig trajectory smoothing",
    ],
    tags: ["ROS 2", "ros2_control", "MoveIt 2", "C++", "Kinematics", "7-DoF Cobot"],
  },
  {
    id: "biomechanics-inst",
    role: "Student Research Assistant, Software Engineer",
    org: "Institute for Advanced Biomechanics and Motion Studies",
    place: "Offenburg, Germany",
    period: "Mar 2026 - Aug 2026",
    isCurrent: false,
    branch: "research",
    branchLabel: "feat/biomechanics-pipeline",
    points: [
      "Contributed to a unified HDF5 schema for force plate, motion capture, IMU and EMG data",
      "Built Storage Scout, a PyQt6 and SQLite tool to audit research data across local, NAS and network drives",
    ],
    tags: ["Python", "PyQt6", "SQLite", "HDF5", "Sensor Pipelines"],
  },
  {
    id: "msc-offenburg",
    role: "M.Sc. Communication and Media Engineering",
    org: "Hochschule Offenburg",
    place: "Offenburg, Germany",
    period: "Oct 2025 - Present",
    isCurrent: true,
    branch: "academic",
    branchLabel: "academic/msc-robotics",
    points: [
      "Graduate studies focusing on Robotics, Real-time Systems, Sensor Fusion, and Embedded Controls",
    ],
    tags: ["Robotics", "Real-Time Systems", "Embedded Systems"],
  },
  {
    id: "boeing-swe-2",
    role: "Software Engineer II",
    org: "Boeing, International Space Station Program",
    place: "Bengaluru, India",
    period: "Jun 2025 - Aug 2025",
    isCurrent: false,
    branch: "aerospace",
    branchLabel: "flight/iss-migration-v2",
    points: [
      "Cross-platform desktop tool that packaged and extended migration scripts, cutting manual work by 99%",
      "Parallelised migration on HPC infrastructure and built validation tools that ensured 100% data integrity",
    ],
    tags: ["Python", "HPC", "Desktop Architecture", "Data Integrity"],
  },
  {
    id: "boeing-swe-1",
    role: "Software Engineer I",
    org: "Boeing, International Space Station Program",
    place: "Bengaluru, India",
    period: "Aug 2023 - Jun 2025",
    isCurrent: false,
    branch: "aerospace",
    branchLabel: "flight/iss-migration-v1",
    points: [
      "Automated MSSQL-to-MySQL migration with Python, cutting manual effort by 90%",
      "Modernised a legacy VB6 application into a Python desktop application",
    ],
    tags: ["Python", "MySQL", "T-SQL", "MSSQL", "VB6 Modernization"],
  },
  {
    id: "bosch-intern",
    role: "Intern",
    org: "Bosch Limited",
    place: "Ramanagara, India",
    period: "2023",
    isCurrent: false,
    branch: "aerospace",
    branchLabel: "origin/bosch-automation",
    points: [
      "Industrial automation internship focusing on manufacturing production systems and sensor data workflows",
    ],
    tags: ["Industrial Automation", "Manufacturing Systems"],
  },
  {
    id: "be-ramaiah",
    role: "B.E. Electronics and Instrumentation Engineering",
    org: "M S Ramaiah Institute of Technology",
    place: "Bengaluru, India",
    period: "May 2019 - Jun 2023",
    isCurrent: false,
    branch: "academic",
    branchLabel: "origin/b-eng-instrumentation",
    points: [
      "Foundational degree covering Control Systems, Microcontrollers, Signal Processing, and Transducers",
    ],
    tags: ["Control Theory", "Instrumentation", "Microcontrollers", "Signals"],
  },
];

const filterOptions = [
  { key: "all", label: "All Tracks", dotClass: null },
  { key: "robotics", label: "Robotics & Controls", dotClass: "tree-filter-dot--robotics" },
  { key: "aerospace", label: "Aerospace & Systems", dotClass: "tree-filter-dot--aerospace" },
  { key: "research", label: "Biomechanics & Data", dotClass: "tree-filter-dot--research" },
  { key: "academic", label: "Education & Foundations", dotClass: "tree-filter-dot--academic" },
];

export const Qualification = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <section className="section" id="experience">
      <header className="section__head">
        <h2 className="section__title">Experience and Education</h2>
      </header>

      <div className="container qual-tree">
        {/* Interactive Branch Filters */}
        <div className="tree-controls">
          <div className="tree-filters" role="group" aria-label="Filter career tracks">
            {filterOptions.map((filter) => (
              <button
                key={filter.key}
                type="button"
                className={`tree-filter-btn ${activeFilter === filter.key ? "tree-filter-btn--active" : ""}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.dotClass && <span className={`tree-filter-dot ${filter.dotClass}`} aria-hidden="true"></span>}
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* The Tree Graph Timeline */}
        <ol className="tree-timeline">
          {treeNodes.map((node) => {
            const isMatch = activeFilter === "all" || node.branch === activeFilter;
            const nodeClass = `tree-node tree-node--${node.branch} ${
              isMatch ? "tree-node--highlighted" : "tree-node--dimmed"
            }`;

            return (
              <li className={nodeClass} key={node.id}>
                {/* Left Column: Date & Location */}
                <div className="tree-node__meta">
                  {node.isCurrent && (
                    <span className="tree-node__live-badge">
                      <span className="tree-node__live-dot" aria-hidden="true"></span> Active
                    </span>
                  )}
                  <span className="tree-node__period">{node.period}</span>
                  <span className="tree-node__place">
                    <i className="uil uil-map-marker" aria-hidden="true"></i> {node.place}
                  </span>
                </div>

                {/* Center Column: Visual Branch Rail & Node Dot */}
                <div className="tree-node__rail" aria-hidden="true">
                  <div className="tree-node__dot">
                    {node.isCurrent && <span className="tree-node__pulse"></span>}
                  </div>
                </div>

                {/* Right Column: Node Information Card */}
                <article className="tree-node__card">
                  <h3 className="tree-node__org-title">{node.org}</h3>
                  <p className="tree-node__role-name">{node.role}</p>

                  {node.points.length > 0 && (
                    <ul className="tree-node__points">
                      {node.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {node.tags && node.tags.length > 0 && (
                    <div className="tree-node__tags" aria-label="Technologies used">
                      {node.tags.map((tag) => (
                        <span className="tree-tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Qualification;
