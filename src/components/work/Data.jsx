import Work1 from '../../assets/e-code.webp'
import Work2 from '../../assets/film.webp'
import Work3 from '../../assets/to-do.webp'
import Work4 from '../../assets/weather.webp'
import Work5 from '../../assets/calculator.webp'
import Work6 from '../../assets/lifi.webp'
import Work7 from '../../assets/sis.webp'
import Work9 from '../../assets/phototherapy.webp'
import Work10 from '../../assets/dine-dash.webp'
import Work11 from '../../assets/Work11.webp'
import ArmImage from '../../assets/arm-rviz.webp'

// Robotics and software work from the CV, told as a spec sheet rather than
// bullet points. Private work has no link.
export const featuredProjects = [
    {
        id: 'cobot',
        title: "Real-time control stack for a 7-DoF cobot",
        organisation: "Work-Life Robotics Institute, 2026 - present",
        summary: "A ROS 2 stack for a Kassow KR1410 integrating the robot's native API at 250 Hz. Includes a ros2_control hardware interface in C++ with position, velocity and acceleration command interfaces, and full digital I/O.",
        specs: [
            { label: "Control loop", value: "250 Hz, SCHED_FIFO, mlockall, CPU DMA latency pinning" },
            { label: "Planning", value: "MoveIt 2 with OMPL and Pilz, tuned TOTG and Ruckig smoothing" },
            { label: "Safety", value: "Custom plugin checks planned TCP speed before execution" },
            { label: "Recovery", value: "Supervisor node reroutes the arm on a missed gripper grab" },
            { label: "Pipeline", value: "MoveIt 2 → Smoothing → Safety check → ros2_control → Cobot" },
            { label: "Stack", value: "ROS 2, ros2_control, C++, real-time Linux" },
        ],
        link: null,
    },
    {
        id: 'arm',
        title: "3-DoF robotic arm: simulation, planning and voice control",
        organisation: "Project, May - Sep 2026",
        summary: "A full ROS 2 stack for a 3-DoF arm, validated in Gazebo and Ignition, with collision-aware planning and voice commands.",
        specs: [
            { label: "Model", value: "URDF/Xacro with a ros2_control hardware interface and closed-loop joint control" },
            { label: "Planning", value: "MoveIt 2, collision-aware, with a task system for pick, place, sleep and wake" },
            { label: "Control", value: "Trajectory controllers for the arm and gripper with defined joint limits" },
            { label: "Voice", value: "Alexa skill triggers real-time arm movement from spoken commands" },
            { label: "Validated in", value: "Gazebo and Ignition" },
            { label: "Stack", value: "ROS 2, MoveIt 2, Gazebo, URDF/Xacro, Alexa" },
        ],
        link: null,
        media: {
            image: ArmImage,
            gif: "/media/arm-demo.gif",
        },
    },
    {
        id: 'storage',
        title: "Storage Scout: research data audit tool",
        organisation: "Institute for Advanced Biomechanics and Motion Studies, 2026",
        summary: "A desktop tool to audit and clean up research data across local, NAS and network drives.",
        specs: [
            { label: "Scanning", value: "Producer-consumer thread queues process files concurrently" },
            { label: "Storage", value: "Batched SQLite transactions with WAL journaling keep the UI responsive" },
            { label: "Stack", value: "Python, PyQt6, SQLite" },
        ],
        link: null,
    },
];

export const otherProjects = [
    {
        id: 10,
        image: Work10,
        title: "DineDash",
        category: "Web",
        demo: "https://bharath2228.github.io/dine-dash/",
        github: "https://github.com/Bharath2228/dine-dash"
    },
    {
        id: 1,
        image: Work1,
        title: "E-CoderShelf",
        category: "Web",
        demo: "https://e-codershelf.netlify.app/",
        github: "https://github.com/Bharath2228/e-codershelf"
    },
    {
        id: 2,
        image: Work2,
        title: "Film Vault",
        category: "Web",
        demo: "https://film-vault.netlify.app/",
        github: "https://github.com/Bharath2228/filmvault"
    },
    {
        id: 3,
        image: Work3,
        title: "To-Do List",
        category: "Web",
        demo: "https://bharath2228.github.io/To-Do-List/",
        github: "https://github.com/Bharath2228/To-Do-List"
    },
    {
        id: 4,
        image: Work4,
        title: "Weather",
        category: "Web",
        demo: "https://bharath2228.github.io/Weather-App-Project/",
        github: "https://github.com/Bharath2228/Weather-App-Project"
    },
    {
        id: 5,
        image: Work5,
        title: "Web Calculator",
        category: "Web",
        demo: "https://bharath2228.github.io/Web-Calculator/",
        github: "https://github.com/Bharath2228/Web-Calculator"
    },
    {
        id: 11,
        image: Work11,
        title: "Web Components",
        category: "Web",
        github: "https://github.com/Bharath2228/web-components-showcase"
    },
    {
        id: 9,
        image: Work9,
        title: "Automated Phototherapy for Neonatal Jaundice",
        category: "Academic, embedded",
        github: "https://github.com/Bharath2228/Automation-of-Phototherapy-for-Neonatal-Jaundice-Detection"
    },
    {
        id: 6,
        image: Work6,
        title: "Data Transmission using Li-Fi",
        category: "Academic",
        github: "https://github.com/Bharath2228/The-Data-Transmission-Technique-Using-Low-Cost-Li-Fi"
    },
    {
        id: 7,
        image: Work7,
        title: "Student Information System",
        category: "Academic",
        github: "https://github.com/Bharath2228/student-information-system-SIS"
    },
];
