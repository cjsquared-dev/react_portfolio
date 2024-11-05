import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

export default function Header () {
    return (
        <header className='header'>
            <h1 className='header-title'>Chris Johnson</h1>
            <Nav />
        </header>
    )
};

