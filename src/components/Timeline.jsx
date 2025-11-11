import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Timeline.css';

const timelineData = [
    {
        id: 1,
        date: '11th Nov 2025',
        title: 'Registration Opens',
        details: 'Register yourself through unstop and join the discord channel.',
        actions: [
            { label: 'Register', type: 'primary' },
            { label: 'Join Discord', type: 'secondary' , link: 'https://discord.gg/XSHzpr29gD'}
        ]
    },
    {
        id: 2,
        date: '12th Nov - 18th Nov ',
        title: 'Contribution Period',
        details: 'Start contributing, collaborating, and bringing your ideas to life.',
        actions: [
            { label: 'Guidelines', type: 'secondary' , link: 'https://github.com/IEEE-IGDTUW/IEEE-Open-Source-Week-2025/blob/main/README.md' }
        ]
    },
    {
        id: 3,
        date: '18th Nov 2025',
        title: 'Closing Ceremony',
        details: 'A grand finale to an incredible open-source journey!',
        actions: [
            { label: 'Guidelines', type: 'secondary',link: 'https://discord.gg/XSHzpr29gD '}
        ]
    }
];

const Timeline = () => {
    return (
        <section className="timeline-section" id="timeline">
            <h2 className="section-title">Event Timeline</h2>
            <div className="timeline-container">
                <div className="timeline-line"></div>
                <div className="timeline-items">
                    {timelineData.map((item, index) => (
                        <motion.div 
                            key={item.id}
                            className="timeline-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                            transition={{ 
                                duration: 0.6,
                                delay: index * 0.15,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <div className="timeline-dot">
                                <span>{item.id}</span>
                            </div>
                            <motion.div 
                                className="timeline-content"
                                whileHover={{ 
                                    y: -5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="timeline-date">{item.date}</div>
                                <h3 className="timeline-item-title">{item.title}</h3>
                                <p className="timeline-details">{item.details}</p>
                                {item.actions && item.actions.length > 0 && (
                                    <div className="timeline-actions">
                                        {item.actions.map((action, i) => (
                                            // ✅ Wrap the button in <a> only if a link exists
                                            action.link ? (
                                                <a 
                                                    key={i}
                                                    href={action.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ textDecoration: 'none' }}
                                                >
                                                    <motion.button
                                                        className={`timeline-btn ${action.type}`}
                                                        whileHover={{ 
                                                            y: -3,
                                                            scale: 1.03,
                                                            transition: { duration: 0.2 }
                                                        }}
                                                        whileTap={{ 
                                                            scale: 0.98,
                                                            transition: { duration: 0.1 }
                                                        }}
                                                    >
                                                        {action.label}
                                                    </motion.button>
                                                </a>
                                            ) : (
                                                // ✅ If no link, just render the button normally
                                                <motion.button
                                                    key={i}
                                                    className={`timeline-btn ${action.type}`}
                                                    whileHover={{ 
                                                        y: -3,
                                                        scale: 1.03,
                                                        transition: { duration: 0.2 }
                                                    }}
                                                    whileTap={{ 
                                                        scale: 0.98,
                                                        transition: { duration: 0.1 }
                                                    }}
                                                >
                                                    {action.label}
                                                </motion.button>
                                            )
                                        ))}

                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;