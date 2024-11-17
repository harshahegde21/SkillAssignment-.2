
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Assignment 2/HomePage';
import CakeCategories from './Assignment 2/CakeCategories';
import Navbar from './Assignment 2/Navbar';
import CakeDetailsPage from './Assignment 2/CakeDetails';
import ShoppingCart from './Assignment 2/ShoppingCart'; // Import ShoppingCart
import AboutUs from './Assignment 2/About';
import Contact from './Assignment 2/ContactInfo';

function App() {
    return (
        <Router>
            <Navbar /> {/* Render the Navbar */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/categories" element={<CakeCategories />} /> {/* Corrected path */}
                <Route path="/cake-details" element={<CakeDetailsPage />} /> {/* Use CakeDetailsPage */}
                <Route path="/shopping-cart" element={<ShoppingCart />} /> {/* Add ShoppingCart route */}
                    <Route path="/about" element={<AboutUs />} /> {/* About Us Route */}
                    <Route path="/contact" element={<Contact />} /> {/* Contact Route */}
            </Routes>
        </Router>
    );
}

export default App;

