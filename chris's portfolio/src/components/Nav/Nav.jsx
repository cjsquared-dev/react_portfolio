import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Nav.css';


export default function Nav () {
    return (
    <Navbar
    links={[
        <NavLink key={1} className='nav-link text-light' to="/about">About</NavLink>,
        <NavLink key={2} className='nav-link text-light' to="/portfolio">Portfolio</NavLink>,
        <NavLink key={3} className='nav-link text-light' to="/contact">Contact</NavLink>,
        <NavLink key={4} className='nav-link text-light' to="/resume">Resume</NavLink>
    ]}
    />
    );
};
