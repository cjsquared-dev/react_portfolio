import React from "react";

import githubLogo from "../assets/githubLogo.png";
import linkedinLogo from "../assets/linkedinLogo.png";

export default function Footer() {
    return (
        <footer className='footer' style={footerStyle}>
            
            <p>
                <a href="https://github.com/cjsquared-dev" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="Github Logo" style={iconStyle}/>
                </a>
                <a href="https://www.linkedin.com/in/christopherjohnson1006/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="LinkedIn Logo" style={iconStyle}/>
                </a>
                  © 2021 Chris's Portfolio</p>
        </footer>
    )
};

const footerStyle = {
    display: 'flex',
    justifyContent: 'bottom',
    padding: '20px',
    backgroundColor: 'gray',
    color: 'black',
};

const iconStyle = {
    width: '40px',
    Height: '40px',
    margin: '0 10px',
    color: 'white',
};


