//import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import cat111 from './components/images/cattt.jpg';

import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Navbar from './components/pages/Navbar';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <Home />
        <About />
        <Contact />
        <Profile />
      </div>
    </Router> 
  )
}

export default App;
