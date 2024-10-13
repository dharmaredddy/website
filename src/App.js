// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
 // Import the MoreProperties component

function App() {
  return (
    
      <Router>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Footer />
      </Router>
   
  );
}

export default App;
