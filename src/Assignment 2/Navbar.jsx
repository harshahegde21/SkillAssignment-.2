// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './Navbar.css';

const Navbar = () => {
    return (   ///about
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categories">Cake Categories</Link></li>
                <li><Link to="/cake-details">More Cakes & Details</Link></li>
                <li><Link to="/shopping-cart">Shopping Cart</Link></li>
                <li><Link to="/about">About us & Contact us</Link></li>
                {/* <li><Link to="/about">Contact Us</Link></li> */}
            </ul>
        </nav>
    );
};

export default Navbar;