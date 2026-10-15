function Skills() {

    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                "HTML5",
                "CSS3",
                "JavaScript ES6"
            ]
        },

        {
            title: "Backend",
            skills: [
                "Python",
                "Django"
            ]
        },

        {
            title: "Database",
            skills: [
                "MySQL"
            ]
        },

        {
            title: "Tools",
            skills: [
                "Git",
                "GitHub",
                "VS Code"
            ]
        }
    ];

    return (
        <section className="section skills-section" id="skills">

            <div className="container">

                <p className="section-subtitle">
                    MY TECHNICAL EXPERTISE
                </p>

                <h2 className="section-title">
                    Skills
                </h2>

                <div className="skills-grid">

                    {skillCategories.map((category) => (

                        <div className="skill-category" key={category.title}>

                            <h3>{category.title}</h3>

                            <div className="skill-list">

                                {category.skills.map((skill) => (

                                    <span className="skill-tag" key={skill}>
                                        {skill}
                                    </span>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Skills;