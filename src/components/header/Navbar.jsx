import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            {/*============================================== Navbar Start  */}
            <nav className="navbar">
            <a href="#" className="nav-logo">Social-Worker</a>
            <ul className="nav-menu">
                <li className="nav-item">
                    <a href="/shop" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="/shop" className="nav-link">Services</a>
                </li>
                <li className="nav-item">
                    <a href="/order" className="nav-link">Our Team</a>
                </li>
                <li className="nav-item">
                    <a href="/inventory" className="nav-link">FAQ</a>
                </li>
            </ul>
        </nav>
        {/*===================================================== Navbar End  */}
        </div>
    );
};

export default Navbar;