
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products.js';
import Profile from './components/Profile.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer';
import { Container } from '@mui/material';

function App() {

  return (
    <Router>
    <Navbar />
    <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </Container>
    <Footer />
  </Router>
  );
}

export default App;
