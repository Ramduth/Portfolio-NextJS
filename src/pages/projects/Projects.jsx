import React from "react";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Smart Parking Locator",
            year: "2024",
            image:
                "data:image/jpeg;base64,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", // Replace with your actual image paths
            technologies: ["MongoDB", "Express.js", "React", "Node.js"],
            longDescription:
                "A comprehensive solution for finding parking spaces in real-time. Integrated with payment systems and space reservation functionality. Uses computer vision to detect empty parking spaces.",
            githubLink: "https://github.com/yourusername/smart-parking",
            demoLink: "https://ramduth.vercel.app",
        },
        {
            id: 2,
            title: "TODO App",
            year: "2024",
            image: "/images/projects/todo-app.jpg",
            technologies: ["MongoDB", "Express.js", "React", "Redux"],
            longDescription:
                "Feature-rich task management application with user authentication, task categories, priority levels, due dates, and collaborative features for team tasks.",
            githubLink: "https://github.com/yourusername/todo-app",
            demoLink: "https://todo-main-frontend2.onrender.com/",
        },
        {
            id: 3,
            title: "Portfolio Website",
            year: "2023",
            image: "/images/projects/portfolio.jpg",
            technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
            longDescription:
                "Custom-designed portfolio with 3D models and animations. Features smooth scrolling, interactive project showcases, and responsive design for all devices.",
            githubLink: "https://github.com/yourusername/portfolio",
            demoLink: "https://yourportfolio.com",
        },
        {
            id: 4,
            title: "E-commerce Platform",
            year: "2023",
            image: "/images/projects/ecommerce.jpg",
            technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
            longDescription:
                "Complete e-commerce solution with inventory management, customer accounts, secure payment processing, order tracking, and admin dashboard with analytics.",
            githubLink: "https://github.com/yourusername/ecommerce",
            demoLink: "https://ecommerce-demo.yourdomain.com",
        },
        {
            id: 5,
            title: "Weather Forecast App",
            year: "2022",
            image: "/images/projects/weather-app.jpg",
            technologies: ["React Native", "OpenWeatherMap API", "Firebase"],
            longDescription:
                "Cross-platform mobile application providing real-time weather data, 7-day forecasts, radar maps, and customizable weather alerts based on user location.",
            githubLink: "https://github.com/yourusername/weather-app",
            demoLink: "https://weather-app-demo.yourdomain.com",
        },
        {
            id: 6,
            title: "Fitness Tracker",
            year: "2022",
            image: "/images/projects/fitness-tracker.jpg",
            technologies: ["Flutter", "Firebase", "GraphQL", "TensorFlow Lite"],
            longDescription:
                "Health-focused application for tracking workouts, nutritional intake, and fitness goals. Features exercise recognition using machine learning, custom workout plans, and progress charts.",
            githubLink: "https://github.com/yourusername/fitness-tracker",
            demoLink: "https://fitness-tracker-demo.yourdomain.com",
        },
    ];

    return (
        <section
            className="w-full py-25 px-4 md:px-16 max-w-screen-2xl mx-auto"
        >
            <div className="w-full mx-auto">
                <div className="text-center mb-10 animate-on-scroll fade-in-bottom">
                    <h2 className="text-3xl md:text-4xl text-black font-bold">
                        My <span className="text-blue-600">Projects</span>
                    </h2>
                    <p className="section-subheading mx-auto">
                        Showcasing my work and development expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="h-96 relative cursor-pointer rounded-lg shadow-md border border-gray-200 overflow-hidden group"
                        >
                            <div className="h-full flex flex-col">
                                <div className="h-3/4 overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url(${project.image || "/images/projects/placeholder.jpg"
                                                })`,
                                        }}
                                        aria-hidden="true"
                                    ></div>
                                </div>

                                {/* Title and tech tags at bottom */}
                                <div className="p-4 h-1/4 bg-white">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl font-bold text-gray-900 truncate">
                                            {project.title}
                                        </h3>
                                        <div className="bg-gray-100 text-gray-800 text-xs font-semibold py-1 px-2 rounded">
                                            {project.year}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {project.technologies.slice(0, 3).map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 text-gray-800 text-xs py-0.5 px-1.5 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="bg-gray-100 text-gray-800 text-xs py-0.5 px-1.5 rounded">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Hover overlay - only shows on hover */}
                            <div className="absolute inset-0 bg-black bg-opacity-85 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>

                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-700 text-gray-100 text-xs py-0.5 px-1.5 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-200 overflow-y-auto flex-grow">
                                    {project.longDescription}
                                </p>

                                <div className="flex justify-between mt-4">
                                    <a
                                        href={project.githubLink}
                                        className="bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded transition-colors font-medium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Code
                                    </a>
                                    <a
                                        href={project.demoLink}
                                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors font-medium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
