export default function ResumePage() {
    return (
        <div className="resume">
            <header className="resume-header">
                <h1>Your Name</h1>
                <p>Phone: 555-555-5555</p>
                <p>Email: your.email@example.com</p>
                <p>LinkedIn: linkedin.com/in/yourprofile</p>
                <p>Portfolio: yourportfolio.com</p>
            </header>

            <section className="summary">
                <h2>Summary</h2>
                <p>
                    Highly skilled front-end web developer with a background in graphic design. 
                    Committed to simplifying complex challenges by developing elegant and efficient solutions.
                </p>
            </section>

            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>HTML/CSS</li>
                    <li>MERN Stack</li>
                    <li>SQL</li>
                </ul>
            </section>

            <section className="experience">
                <h2>Experience</h2>
                <div className="job">
                    <h3>Job Title - Company Name</h3>
                    <p>Location | Dates</p>
                    <ul>
                        <li>Responsibility or achievement 1</li>
                        <li>Responsibility or achievement 2</li>
                    </ul>
                </div>
                {/* Add more job entries as needed */}
            </section>

            <section className="education">
                <h2>Education</h2>
                <p>Degree - Institution Name</p>
                <p>Year of Graduation</p>
            </section>
        </div>
    );
};

