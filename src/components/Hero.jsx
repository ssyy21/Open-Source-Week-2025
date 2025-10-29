import React, { useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  useEffect(() => {
    // bin rain
    const binaryRain = document.querySelector('.binary-rain');
    if (binaryRain) {
      for (let i = 0; i < 15; i++) {
        const column = document.createElement('div');
        column.className = 'binary-column';
        column.style.left = `${Math.random() * 100}%`;
        column.style.animationDuration = `${8 + Math.random() * 10}s`;
        column.style.animationDelay = `${Math.random() * 5}s`;
        
        let binaryText = '';
        for (let j = 0; j < 20; j++) {
          binaryText += Math.random() > 0.5 ? '1' : '0';
          if (j < 19) binaryText += '\n';
        }
        column.textContent = binaryText;
        binaryRain.appendChild(column);
      }
    }
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="binary-rain"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            OPEN SOURCE<br />WEEK
          </h1>
          
          <div className="hero-tagline">
            <div className='hero-tagline-1'>
            <span>DISCOVER</span>
            </div>
            <span className="dot">•</span>
            <div className='hero-tagline-2'>
            <span>DEVELOP</span> 
            </div>
            <span className="dot">•</span>
            <div className='hero-tagline-3'>
            <span>DELIVER</span>
            </div>
          </div>

          <button className="register-button">
            REGISTER NOW
          </button>

          <p className="hero-description">
            <strong>OPEN SOURCE WEEK</strong> – Where Ideas Ignite and Innovation Thrives.<br />
            A platform that empowers women to address real-life challenges<br />
            head-on and showcase their creativity and ingenuity.
          </p>
        </div>

        <div className="hero-visual">
            <img src="/hero_image.jpeg" alt="Hero Image" />
        </div>
      </div>
      <p className="hero-institute">
            Institute of Electrical and Electronics Engineers, Indira Gandhi Delhi Technical University for Women
      </p>
      
    </section>
    
  );
};

export default Hero;