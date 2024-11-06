import "./Footer.css";
import githubLogo from "../../assets/images/githubLogo.png";
import linkedinLogo from "../../assets/images/linkedinLogo.png";

export default function Footer() {
    return (
        <footer className='footer' style={footerStyle}>
            <p>
                <a href="https://github.com/cjsquared-dev" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="Github Logo" className="footer-icon" />
                </a>
                <a href="https://www.linkedin.com/in/christopherjohnson1006/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="LinkedIn Logo" className="footer-icon" />
                </a>
                © 2024 Chris&apos;s Portfolio
            </p>
        </footer>
    );
}

const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black',
    minHeight: '10vh',
};


