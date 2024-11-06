import './Portfolio.css';
import githubLogo from '../assets/images/githubLogo.png';
import css from '../assets/projects/css_cheatsheet.jpg';
import led from '../assets/projects/led-wall.png';
import pastel from '../assets/projects/pastel_puzzles.jpg'
import calculator from '../assets/projects/react_calculator.png';
import run from '../assets/projects/run-buddy.jpeg';
import weather from '../assets/projects/weather.jpg';

//sample projects
const projects = [
    {
        name: 'CSS Cheatsheet',
        image: css,
        deployedLink: '#https://github.com',
        githubLink: 'https://github.com'
    },
    {
        name: 'LED Wall',
        image: led,
        deployedLink: '#https://github.com',
        githubLink: 'https://github.com'
    },
    {
        name: 'Pastel Puzzles',
        image: pastel,
        deployedLink: '#https://github.com',
        githubLink: 'https://github.com'
    },
    {
        name: 'React Calculator',
        image: calculator,
        deployedLink: '#https://github.com',
        githubLink: 'https://github.com'
    },

    {
        name: 'Run Buddy',
        image: run,
        deployedLink: '#https://github.com',
        githubLink: 'https://github.com'
    },
    {
        name: 'Weather Dashboard',
        image: weather,
        deployedLink: 'https://weather-dashboard-gn1l.onrender.com/',
        githubLink: 'https://github.com/cjsquared-dev/weather_dashboard'
    },
];


//Function to display the projects in the portfolio page as a grid of cards
export default function Project() {
    return (
        <section id='projects' className='container my-5'>
            <h2 className='mb-4'>Portfolio</h2>
            <div className='row'>
                {projects.map((project, index) => (
                    <div className='col-md-4 mb-4' key={index}>
                        <a href={project.deployedLink} target='_blank' rel='noopener noreferrer' className='card' style={{ textDecoration: 'none' }}>
                            <div style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', height: '300px', position: 'relative' }}>
                                <div className='card-body d-flex flex-column justify-content-end align-items-center'>
                                    <h5 className='card-title text-white' style={{
                                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)', // Text shadow for better visibility
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                                        padding: '10px', // Add some padding for better appearance
                                        borderRadius: '5px', // Rounded corners for the background
                                        fontSize: '1.25rem', // Increased font size
                                        fontWeight: 'bold' // Make it bold
                                    }}>{project.name}</h5>
                                    <a href={project.githubLink} target="_blank" rel='noopener noreferrer' className='btn btn-light'>
                                        <img src={githubLogo} alt='Github Logo' style={{ width: '20px', height: '20px' }} />
                                    </a>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}