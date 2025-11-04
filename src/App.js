import React from 'react';
// import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Themes from './components/Themes';
import Prizes from './components/Prizes';
import './App.css';
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Speakers from "./components/Speakers";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Themes />

<main>
  <Prizes />
  <Speakers />
  <Timeline />
  <FAQ />

  <Footer />
</main>

    </div>
  );
}

export default App;