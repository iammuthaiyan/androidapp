function Contact() {
    return (
        <section className="section contact-section" id="contact">

            <div className="container contact-container">

                <p className="section-subtitle">
                    LET'S CONNECT
                </p>

                <h2 className="section-title">
                    Contact Me
                </h2>

                <p className="contact-description">
                    I am currently looking for opportunities to start my
                    professional career as a Full Stack Developer. Feel free
                    to get in touch with me.
                </p>

                <div className="contact-links">

                    <a
                        href="mailto:iammuthaiyan@gmail.com"
                        className="contact-card"
                    >
                        <span className="contact-icon">
                            ✉
                        </span>

                        <div>
                            <small>Email</small>
                            <strong>
                                iammuthaiyan@gmail.com
                            </strong>
                        </div>
                    </a>

                    <a
                        href="tel:+916374149517"
                        className="contact-card"
                    >
                        <span className="contact-icon">
                            ☎
                        </span>

                        <div>
                            <small>Phone</small>
                            <strong>
                                +91 63741 49517
                            </strong>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/muthaiyan"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card"
                    >
                        <span className="contact-icon">
                            in
                        </span>

                        <div>
                            <small>LinkedIn</small>
                            <strong>
                                linkedin.com/in/muthaiyan
                            </strong>
                        </div>
                    </a>

                </div>

            </div>

        </section>
    );
}

export default Contact;