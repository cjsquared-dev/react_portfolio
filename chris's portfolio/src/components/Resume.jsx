import "bootstrap/dist/css/bootstrap.min.css";
import resumeFile from '../assets/resume.pdf'


export default function Resume() {
    return (
        <div className="container my-5">
            <header className="text-left mb-4">
                <h1>Chris Johnson</h1>
            </header>

            <section className='text-left mb-4'>
                <a href={resumeFile} download className='btn btn-primary'>
                    Download Resume
                </a>
            </section>

            <section className="text-left mb-4">
                <h2>Summary</h2>
                <p>
                    Seasoned Cyber Security professional with a Master of Science in Information Systems from the University of Utah. 
                    Currently working as a Senior Security Partner at Adobe, Inc. in Lehi, UT. 
                    Currently studying Full Stack Web development to earn proficiencies in JavaScript, React, HTML/CSS, MERN Stack, and SQL to transition into a career in Software Engineering within the Security Industry.
                </p>
            </section>

            <section className="mb-4">
            <h2>Proficiencies</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">JavaScript</li>
                    <li className="list-group-item">React</li>
                    <li className="list-group-item">HTML/CSS</li>
                    <li className="list-group-item">MERN Stack</li>
                    <li className="list-group-item">SQL</li>
                </ul>
            </section>

            <section className="mb-4">
                <h2>Experience</h2>
                <div className="mb-3">
                    <h3>Senior Security Partner - Adobe, Inc.</h3>
                    <p>Lehi, UT | April 2018 - Present</p>
                    <ul>
                    </ul>
                </div>
                {/* Add more job entries as needed */}
            </section>

            <section className="education">
                <h2>Education</h2>
                <p>Master of Science in Information Systems - University of Utah</p>
                <p>Class of 2016</p>
            </section>
        </div>
    );
};

