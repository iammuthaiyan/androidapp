function Projects() {

    const projects = [
        {
            number: "01",
            title: "JobConnect",
            subtitle: "Online Job Portal",

            description:
                "A responsive job portal website for searching and applying for job opportunities.",

            features: [
                "Dynamic job search and filtering",
                "Client-side form validation",
                "Job application functionality",
                "Favorite jobs using LocalStorage",
                "Responsive user interface"
            ],

            technologies:
                "HTML5 • CSS3 • JavaScript"
        },

        {
            number: "02",
            title: "Employee Management",
            subtitle: "Payroll System",

            description:
                "A web-based employee management system for managing employee records, departments, attendance and payroll.",

            features: [
                "CRUD operations",
                "Employee authentication",
                "Attendance tracking",
                "Automated salary calculation",
                "Employee search and filtering",
                "Report generation"
            ],

            technologies:
                "Python • Django • MySQL • HTML • CSS • JavaScript"
        }
    ];

    return (
        <section className="section projects-section" id="projects">

            <div className="container">

                <p className="section-subtitle">
                    MY RECENT WORK
                </p>

                <h2 className="section-title">
                    Projects
                </h2>

                <div className="projects-grid">

                    {projects.map((project) => (

                        <article className="project-card" key={project.number}>

                            <div className="project-number">
                                {project.number}
                            </div>

                            <h3>{project.title}</h3>

                            <h4>{project.subtitle}</h4>

                            <p className="project-description">
                                {project.description}
                            </p>

                            <ul className="project-features">

                                {project.features.map((feature) => (

                                    <li key={feature}>
                                        {feature}
                                    </li>

                                ))}

                            </ul>

                            <div className="technology">
                                {project.technologies}
                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Projects;