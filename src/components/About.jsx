import React from 'react'
import '../styles/About.css'

const About=()=>{
  return( 
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-card">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="about-title">
                About Open<br />Source Week
              </h2>
              <div className="about-block">
                <p className="about-description">
                  Open Source Week is a one-week celebration of collaboration, learning, and innovation. It brings together developers, designers, and enthusiasts through engaging workshops, inspiring speaker sessions, and hands-on projects — all aimed at empowering participants to explore, contribute to, and grow within the world of open source development.
                </p>
                <div className="about-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                      </svg>
                    </div>
                    <p className="feature-label">Workshops</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <p className="feature-label">Talks</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <p className="feature-label">Networking</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-images">
              <div className="image-collage">
                <div className="collage-item collage-1">
                  <img src="/hero_image.jpeg" alt="image1" />
                </div>
                <div className="collage-item collage-2">
                  <img src="/hero_image.jpeg" alt="image2" />
                </div>
                <div className="collage-item collage-3">
                  <img src="/hero_image.jpeg" alt="image3" />
                </div>
                <div className="collage-item collage-4">
                  <img src="/hero_image.jpeg" alt="image4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )}
export default About



