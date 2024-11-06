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
                    Highly skilled front-end web developer with a background in graphic design. 
                    Committed to simplifying complex challenges by developing elegant and efficient solutions.
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
                <p>Master of Science in Information Systems - University of Utah</p>
                <p>Class of 2016</p>
            </section>
        </div>
    );
};

