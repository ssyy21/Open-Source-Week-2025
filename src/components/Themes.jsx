import React from 'react';
import '../styles/Themes.css';

const Themes=()=>{
  const themeData=[
    {
      title: 'FinTech',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at luctus ex mauris, accumsan pharetra metus sed facilisis. Donec blandit id lorem aliquam feugiat. Maecenas metus sed facilisis blandit. Donec ipsum dapibus nunc.",
    },
    {
      title: 'Healthcare',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at luctus ex mauris, accumsan pharetra metus sed facilisis. Donec blandit id lorem aliquam feugiat. Maecenas metus sed facilisis blandit. Donec ipsum dapibus nunc.',
    },
    {
      title: 'AR/VR',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at luctus ex mauris, accumsan pharetra metus sed facilisis. Donec blandit id lorem aliquam feugiat. Maecenas metus sed facilisis blandit. Donec ipsum dapibus nunc.',
    },
    {
      title: 'AI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at luctus ex mauris, accumsan pharetra metus sed facilisis. Donec blandit id lorem aliquam feugiat. Maecenas metus sed facilisis blandit. Donec ipsum dapibus nunc.',
    },
    {
      title: 'Open Innovation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at luctus ex mauris, accumsan pharetra metus sed facilisis. Donec blandit id lorem aliquam feugiat. Maecenas metus sed facilisis blandit. Donec ipsum dapibus nunc.',
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
          <div className="themes-grid">
            {themeData.map((theme, index) => (
              <div key={index} className="theme-item">
                <h3 className="theme-title">{theme.title}</h3>
                <p className="theme-desc">{theme.description}</p>
                <button className="theme-btn">View More</button>
              </div>))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Themes;