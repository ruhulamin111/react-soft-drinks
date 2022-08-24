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
                    <a href="#home">Soft Juice</a>
                    <a href="#home">Cold Juice</a>
                    <a href="#home">About Us</a>
                </nav>
            </header>
        </div>
    );
};

export default Header;