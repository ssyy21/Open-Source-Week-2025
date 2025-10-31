// src/components/Speakers.jsx

import React from 'react';
import SpeakerCard from './SpeakerCard'; // Import the card component

// Sample data for the speakers (you would usually fetch this)
const speakersData = [
    { id: 1, name: 'Speaker 01', title: 'TITLE OF THE SESSION', date: 'Jan 10', time: '10:00 AM' },
    { id: 2, name: 'Speaker 02', title: 'TITLE OF THE SESSION', date: 'Jan 10', time: '11:00 AM' },
    { id: 3, name: 'Speaker 03', title: 'TITLE OF THE SESSION', date: 'Jan 11', time: '10:00 AM' },
    { id: 4, name: 'Speaker 04', title: 'TITLE OF THE SESSION', date: 'Jan 11', time: '11:00 AM' },
];

const Speakers = () => {
    return (
        <section style={{
            backgroundColor: '#000000', // Black background
            padding: '50px 20px',
            textAlign: 'center'
        }}>
            {/* Section Title */}
            <h2 style={{ color: '#FF69B4', fontSize: '36px', marginBottom: '40px' }}>
                Speakers
            </h2>

            {/* Speaker Cards Container */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap' // Allows cards to wrap on smaller screens
            }}>
                {speakersData.map((speaker) => (
                    <SpeakerCard
                        key={speaker.id} // Essential for lists in React
                        speakerName={speaker.name}
                        sessionTitle={speaker.title}
                        date={speaker.date}
                        time={speaker.time}
                    />
                ))}
            </div>
        </section>
    );
};

export default Speakers;