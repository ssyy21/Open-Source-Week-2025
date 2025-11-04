import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Timeline.css';

const timelineData = [
    {
        id: 1,
        date: '17th - 20th Jan 2025',
        title: 'Registration Opens',
        details: 'Register your team through our online portal and document your areas of interest.',
        actions: [
            { label: 'Register', type: 'primary' },
            { label: 'Join Discord', type: 'secondary' }
        ]
    },
    {
        id: 2,
        date: '24th Jan 2025',
        title: 'Ideation Phase',
        details: 'Start brainstorming and planning your project with team members and mentors.',
        actions: [
            { label: 'Guidelines', type: 'secondary' }
        ]
    },
    {
        id: 3,
        date: '26th Jan 2025',
        title: 'Submissions Due',
        details: 'Submit your finalized project concept for mentor review and feedback.',
        actions: [
            { label: 'Submit', type: 'primary' }
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