import React from 'react';
import '../styles/Themes.css';

const Themes=()=>{
  const themeData=[
    {
      title: 'FinTech',
      description: "Open-source solutions are transforming the financial world — from secure transactions to digital wallets and smart budgeting tools. Contribute to projects that make finance more transparent, efficient, and inclusive for all users worldwide.",
    },
    {
      title: 'Healthcare',
      description: 'Technology-driven health innovation saves lives. Work on open-source platforms that enhance medical accessibility, patient data privacy, telemedicine, and AI-based diagnostics to create a healthier and more connected world.',
    },
    // {
    //   title: 'AR/VR',
    //   description: 'Step into the future of immersive experiences! Develop open-source AR/VR applications that empower education, gaming, and real-world simulations, making technology more interactive, engaging, and inclusive for everyone.',
    // },
    {
      title: 'AI',
      description: 'Artificial Intelligence lies at the heart of innovation. Build models, frameworks, and open datasets that help solve real-world challenges — from automation and language models to sustainability and social good applications.',
    },
    {
      title: 'Open Innovation',
      description: 'Collaborate, experiment, and reimagine technology through open-source collaboration. Build solutions that merge creativity and impact — bridging communities, ideas, and technology to foster inclusive global development.',
    },
  ];
  return(
    <section className="themes" id="themes">
      <div className="wrapper">
        <h2 className="title">Themes</h2>
        <div className="timeline-container">
          <div className="timeline">
            <div className="line"></div>
            {themeData.map((_, index) => (
              <div key={index} className="dot" style={{left: `${index * 20 + 10}%`}}></div>
            ))}
          </div>
          <div className="themes-grid-container"> 
            <div className="themes-grid">
              {themeData.map((theme, index) => (
                <div key={index} className="theme-item">
                  <h3 className="theme-title">{theme.title}</h3>
                  <p className="theme-desc">{theme.description}</p>
                  <a href="https://github.com/IEEE-IGDTUW/IEEE-Open-Source-Week-2025"><button className="theme-btn">View More</button></a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Themes;