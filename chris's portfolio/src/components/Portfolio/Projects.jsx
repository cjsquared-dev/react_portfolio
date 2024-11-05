import React from 'react';

//sample projects

const projects = [
    {
        name: 'Project 1',
        image: 'https://via.placeholder.com/150',
        description: 'This is project 1',
        deployedLink: '#https://github.com',
        githubLink: 'https://github.com'
    },
    {
        name: 'Project 2',
        image: 'https://via.placeholder.com/150',
        description: 'This is project 2',
        deployedLink: '#https://github.com',
        githubLink: 'https://github.com'
    },
    {
        name: 'Project 3',
        image: 'https://via.placeholder.com/150',
        description: 'This is project 3',
        deployedLink: '#https://github.com',
        githubLink: 'https://github.com'
    },
    {
        name: 'Project 4',
        image: 'https://via.placeholder.com/150',
        description: 'This is project 4',
        deployedLink: '#https://github.com',
        githubLink: 'https://github.com'
    },

    {
        name: 'Project 5',
        image: 'https://via.placeholder.com/150',
        description: 'This is project 5',
        deployedLink: '#https://github.com',
        githubLink: 'https://github.com'
    },
    {
        name: 'Project 6',
        image: 'https://via.placeholder.com/150',
        description: 'This is project 6',
        deployedLink: '#https://github.com',
        githubLink: 'https://github.com'
    },
];

export default function PortfolioPage() {
    return (
        <section id='projects'>
            <h2>Portfolio</h2>
            <div className='projects-container'>
                {projects.map((project, index) => (
                    <div className='project item' key = {index}>
                        <a href={project.deployedLink} target='_blank' rel='noopener noreferrer'>
                        <img src='{project.image}' alt={project.name} />
                        <h3>{project.name}</h3>
                    </a>

                    <a href={project.githubLink} target="_blank" rel='noopener noreferrer'>GitHub Link</a>
                    </div>
                ))}
            </div>
        </section>
    );
}