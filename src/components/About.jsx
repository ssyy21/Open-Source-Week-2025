import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"  // Changed from the invalid cubic-bezier value
    }
  }
};

  const stats = [
    { number: '7+', label: 'Days of Learning' },
    { number: '10+', label: 'Workshops' },
    { number: '5+', label: 'Speakers' },
    { number: '500+', label: 'Participants' }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-grid">
            <motion.div 
              className="about-content"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              ref={ref}
            >
              <motion.div variants={itemVariants}>
                <span className="section-tag">About The Event</span>
                <h2 className="about-title">
                  Open Source <span className="gradient-text">Week</span>
                </h2>
              </motion.div>
              
              <motion.div className="about-block" variants={itemVariants}>
                <p className="about-description">
                  Open Source Week is a one-week celebration of collaboration, learning, and innovation. Join us for an immersive experience featuring hands-on workshops, inspiring talks from industry leaders, and opportunities to contribute to real open-source projects.
                </p>
                
                <div className="stats-grid">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="stat-item"
                      whileHover={{ y: -5, scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="about-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="code-window">
                <div className="window-header">
                  <div className="window-buttons">
                    <span className="red"></span>
                    <span className="yellow"></span>
                    <span className="green"></span>
                  </div>
                  <div className="window-title">open_source_week.py</div>
                </div>
                <div className="code-content">
                  <pre><code>
{`def main():
    # Welcome to Open Source Week 2025!
    print("🚀 Join us for an amazing week of")
    print("   learning, collaboration, and")
    print("   open-source contribution!")
    
    # Event Highlights
    workshops = [
        "Git & GitHub for Beginners",
        "Your First Open Source PR",
        "Building with Open Source"
    ]
    
    print("\\n🎯 Highlights:")
    for workshop in workshops:
        print(f"   • {workshop}")
    
    print("\\n📅 Save the date: Coming Soon!")
    print("🌐 Visit our website for updates!")

if __name__ == "__main__":
    main()`}
                  </code></pre>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="cta-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="cta-text">Ready to be part of something amazing?</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Register Now</button>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;