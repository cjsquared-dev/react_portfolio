import React from "react";
import headshot from "../assets/images/Headshot.jpeg"

export default function AboutPage() {
    return (
        <div className="container my-5">
            <h2 className=" mb-4">About Me</h2>

            <div className="d-flex flex-column align-items-center">
            <img
                src={headshot}
                alt="Headshot"
                className='rounded-circle mb-4'
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <p className="text-center">
                Hi there! I'm Chris, an Information Security and Cyber Security professional who's decided to spread his wings into the world of full stack web development. 
                I'm a graduate of the University of Utah and have returned to participate in the University's Software Development Coding Bootcamp! 
                I would like to bring my security background and perspective to the world of web development. 
                I'm a lifelong learner who's always looking for new challenges and opportunities to grow in the tech industry. 
                I'm excited to see where this journey takes me and look forward to putting my new and developing skills to work!
            </p>
        </div>
        </div>
    );
};