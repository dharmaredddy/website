// src/components/Navbar.jsx
import React from 'react';
import { FaHome, FaInfoCircle, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Make sure to use Link for navigation
import '../styles/Navbar.css'; // CSS for styling
import logo from '../assets/8.jpeg'; // Import your logo image (make sure the path is correct)

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Real Estate Logo" className="navbar-logo" /> {/* Logo image */}
                Real Estate
            </div>
            <ul>
                <li>
                    <Link to="/">
                        <FaHome /> Home
                    </Link>
                </li>
                
                <li>
                    <Link to="/about">
                        <FaInfoCircle /> About
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <FaPhone /> Contact
                    </Link>
                </li>
                
            </ul>
        </nav>
    );
};

export default Navbar;
