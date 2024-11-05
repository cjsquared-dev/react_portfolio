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

export default function Portfolio() {
    return (
        <section id='projects' className='container my-5'>
            <h2 className='text-center mb -4'>Portfolio</h2>
            <div className='row'>
                {projects.map((project, index) => (
                    <div className='col-md-4 mb-4' key = {index}>
                        <div className='card'>
                        <a href={project.deployedLink} target='_blank' rel='noopener noreferrer'>
                        <img src='{project.image}' alt={project.name} className='card-img-top' />
                    </a>
                    <div className='card-body'>
                        <h5 className='card-title'>{project.name}</h5>
                        <a href={project.githubLink} target="_blank" rel='noopener noreferrer' className='btn btn-primary'>
                        GitHub Link
                        </a>
                    </div>
                </div>
            </div>
                ))}
            </div>
        </section>
    );
}