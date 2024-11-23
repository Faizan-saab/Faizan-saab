import './App.css';
import React from 'react';
import  { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ParentComponent from './components/ParentComponent';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ParentComponent />} />
        <Route path="/about" element={< About />} />
        <Route path="/contact" element={< Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
