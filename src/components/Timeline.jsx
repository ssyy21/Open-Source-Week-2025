// src/components/Timeline.jsx

import React from 'react';
import '../styles/Timeline.css';

const timelineData = [
    {
        id: 1,
        date: '17th January 2025 - 20th January 2025 6:00 PM (extended)',
        title: 'Registration Opens [Online]',
        details: 'Begin your journey by registering your team through our online portal. Ensure all team details and areas of interest are properly documented.',
        actions: [{ label: 'Register Here', type: 'primary' }, { label: 'Join Discord', type: 'secondary' }]
    },
    {
        id: 2,
        date: '24th January 2025',
        title: 'Ideation Phase Begins [Online]',
        details: 'This phase marks the official start of your brainstorming process. Team members should work together to ideate and plan their project. Reach out to mentors for guidance.',
    },
    {
        id: 3,
        date: '26th January 2025 12:00 PM',
        title: 'Submissions Due',
        details: 'Complete your idea and submit your finalized project concept. Mentors will review your submission and provide feedback.',
    },
    // We can add more steps following this structure if needed
];

const Timeline = () => {
    return (
        <section className="timeline-section">
            <h2 className="timeline-title">
                Open Source Timeline
            </h2>

            <div className="timeline-visual-container">
                {/* The list of events */}
                {timelineData.map((event, index) => (
                    <div key={event.id} className="timeline-event">
                        <div className="timeline-date">
                            {event.date}
                        </div>
                        <div className="timeline-dot-and-line">
                            <span className="timeline-dot">{index + 1}</span>
                            {/* Only show the line connector if it's not the last item */}
                            {index < timelineData.length - 1 && <div className="timeline-line"></div>}
                        </div>
                        <div className="timeline-content">
                            <h3>{event.title}</h3>
                            <p>{event.details}</p>
                            {event.actions && (
                                <div className="timeline-actions">
                                    {event.actions.map((action, actionIndex) => (
                                        <button
                                            key={actionIndex}
                                            className={`timeline-btn ${action.type}`}
                                        >
                                            {action.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;