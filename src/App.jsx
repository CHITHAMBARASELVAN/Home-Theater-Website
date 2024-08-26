import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
