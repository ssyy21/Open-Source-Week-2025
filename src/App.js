import React from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Themes from './components/Themes';
import Timeline from "./components/Timeline";
import Speakers from "./components/Speakers";
import Prizes from './components/Prizes';
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import './App.css';
// import { Events } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Themes />
      <Timeline />
      <Events />
      <Speakers />
      <Prizes />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;



