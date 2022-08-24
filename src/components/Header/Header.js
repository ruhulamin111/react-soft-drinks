import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-bar'>
            <header>
                <nav>
                    <h2>Soft Drinks</h2>
                </nav>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#soft">Soft Juice</a>
                    <a href="#cold">Cold Juice</a>
                    <a href="#about">About Us</a>
                </nav>
            </header>
        </div>
    );
};

export default Header;