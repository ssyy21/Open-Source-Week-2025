import React from 'react';
// import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Themes from './components/Themes';
import Timeline from "./components/Timeline";
import Speakers from "./components/Speakers";
import Prizes from './components/Prizes';
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Themes />
      <Timeline />
      <Speakers />
      <Prizes />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;



