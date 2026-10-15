import profileImage from "../assets/ME.png";

function Hero() {
    return (
        <section className="hero" id="home">

            <div className="container hero-container">

                <div className="hero-content">

                    <p className="hero-small">
                        Hello, I'm
                    </p>

                    <h1>
                        Muthaiyan <span>K</span>
                    </h1>

                    <h2>
                        Full Stack Developer
                    </h2>

                    <p className="hero-description">
                        Motivated and detail-oriented Full Stack Developer with
                        hands-on experience building responsive web applications
                        and solving real-world problems.
                    </p>

                    <div className="hero-buttons">

                        <a href="#projects" className="btn primary-btn">
                            View Projects
                        </a>

                        <a href="#contact" className="btn secondary-btn">
                            Contact Me
                        </a>

                    </div>

                </div>

                <div className="hero-card">

                    <img
                        src={profileImage}
                        alt="Muthaiyan"
                        className="profile-image"
                    />

                    <h3>Full Stack Developer</h3>

                    <p>
                        HTML • CSS • JavaScript • Python • MySQL
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Hero;