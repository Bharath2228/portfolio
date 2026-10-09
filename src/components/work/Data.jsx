import Work1 from '../../assets/e-code.webp'
import Work2 from '../../assets/film.webp'
import ArmImage from '../../assets/arm-rviz.webp'

// Robotics and software work from the CV, told as a spec sheet rather than
// bullet points. Private work has no link.
export const featuredProjects = [
    {
        id: 'arm',
        title: "3-DoF robotic arm: simulation, planning and voice control",
        organisation: "Project, May - Sep 2026",
        image: ArmImage,
        summary: "A full ROS 2 stack for a 3-DoF arm, validated in Gazebo and Ignition, with collision-aware planning and voice commands.",
        description: "A ROS 2 workspace for a 3-DoF robotic arm, covering the URDF/xacro robot description, Gazebo and Ignition simulation, ros2_control-based hardware interfacing, MoveIt 2 motion planning, and a remote voice interface built on Alexa.",
        features: [
            "arduinobot_bringup — top-level launch files that bring up the simulated robot",
            "arduinobot_description — URDF/xacro description, meshes and the ros2_control hardware interface",
            "arduinobot_controller — launch files and configuration for the ros2_control controllers (joint state broadcaster, arm, gripper)",
            "arduinobot_moveit — MoveIt 2 configuration for motion planning",
            "arduinobot_msgs — custom action and message definitions",
            "arduinobot_remote — Flask-based Alexa skill backend that drives the robot over a ROS 2 action client",
            "arduinobot_cpp_examples — example C++ nodes",
        ],
        specs: [
            { label: "Model", value: "URDF/Xacro with a ros2_control hardware interface and closed-loop joint control" },
            { label: "Planning", value: "MoveIt 2, collision-aware, with a task system for pick, place, sleep and wake" },
            { label: "Control", value: "Trajectory controllers for the arm and gripper with defined joint limits" },
            { label: "Voice", value: "Alexa skill triggers real-time arm movement from spoken commands" },
            { label: "Validated in", value: "Gazebo and Ignition" },
        ],
        techStack: ["ROS 2 (Humble+)", "MoveIt 2", "Gazebo / Ignition", "ros2_control", "URDF/Xacro", "C++", "Python", "Flask", "Alexa Skills Kit"],
        github: "https://github.com/Bharath2228/3-dof-bot",
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
        description: "Storage Scout is a Windows desktop application for scanning, reviewing, exporting and safely cleaning up local folders, mapped drives and NAS shares. It builds a local SQLite index so large directory trees can be searched, filtered and exported without repeatedly walking the storage device.",
        features: [
            "Tree, files-only or folders-only views, filterable by show-all, inactive, empty, videos, age threshold, search text and file extension",
            "Scan exclusions for folder names, extensions and minimum file size, applied on rescan",
            "CSV export for listings, file-type breakdowns, folder summaries, delete audit records and scan history",
            "Deletes move items to the Windows Recycle Bin, gated behind a username/password authorization flow with audit logging",
            "Light and dark themes, with Windows notification support",
        ],
        specs: [
            { label: "Scanning", value: "Producer-consumer thread queues process files concurrently" },
            { label: "Storage", value: "Batched SQLite transactions with WAL journaling keep the UI responsive" },
            { label: "Auth", value: "Username/password gate before deletion, with salted hashes and audit logging" },
        ],
        techStack: ["Python", "PyQt6", "SQLite", "pytest"],
        github: "https://github.com/Bharath2228/storage-scout",
    },
];

export const otherProjects = [
    {
        id: 'e-codershelf',
        image: Work1,
        title: "E-CoderShelf",
        category: "Web",
        description: "e-CoderShelf is a React-based online bookshelf for developers to browse, manage and track coding books and resources, with user authentication against a mock REST backend.",
        features: [
            "User registration and login with JWT-based tokens via json-server-auth",
            "Browsing a curated collection of coding books and resources served from a local JSON database",
            "Client-side routing across multiple pages with React Router DOM v6",
            "Toast notifications for login, logout and error states",
            "Responsive UI styled with Tailwind CSS and Bootstrap Icons, deployed on Netlify",
        ],
        techStack: ["React 18", "React Router DOM v6", "Tailwind CSS", "json-server-auth", "react-toastify", "Netlify"],
        demo: "https://e-codershelf.netlify.app/",
        github: "https://github.com/Bharath2228/e-codershelf"
    },
    {
        id: 'film-vault',
        image: Work2,
        title: "Film Vault",
        category: "Web",
        description: "FilmVault is a React movie browser that lists a large catalogue of films with synopses, plus a dedicated detail page per title.",
        features: [
            "Home page listing a large catalogue of movies with poster art and synopses",
            "Dedicated movie detail page for each title",
            "Client-side routing with React Router DOM",
        ],
        techStack: ["React 18", "React Router DOM", "Tailwind CSS", "Netlify"],
        demo: "https://film-vault.netlify.app/",
        github: "https://github.com/Bharath2228/filmvault"
    },
];

export const allProjects = [...featuredProjects, ...otherProjects];
