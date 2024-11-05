import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';
import { Navbar, Nav as BootstrapNav } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="transparent" expand="md" className=" header px-3">
            <Navbar.Brand className="header-title">Chris Johnson</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <BootstrapNav className="ms-auto">
                    <Nav />
                </BootstrapNav>
            </Navbar.Collapse>
        </Navbar>
    );
}

