import React from 'react';
// import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Themes from './components/Themes';
import Prizes from './components/Prizes';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Themes />
      <Prizes />
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">This is the footer.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;