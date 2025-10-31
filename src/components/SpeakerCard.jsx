// src/components/SpeakerCard.jsx

import React from 'react';

// Define the component, accepting 'props' for dynamic data
const SpeakerCard = ({ speakerName, sessionTitle, date, time }) => {
    return (
        <div style={{
            border: '2px solid #A020F0', // Purple border
            borderRadius: '10px',
            padding: '15px',
            width: '250px', // Example width
            backgroundColor: '#000000',
            color: '#FFFFFF',
            textAlign: 'center',
            margin: '10px'
        }}>
            {/* Speaker Image Placeholder */}
            <div style={{
                height: '150px',
                width: '100%',
                backgroundColor: '#333333', // Placeholder color for the image
                borderRadius: '5px',
                marginBottom: '15px'
            }}>
                {/* In a real app, you'd use an <img> tag here */}
            </div>

            {/* Speaker Name/Label */}
            <div style={{
                backgroundColor: '#A020F0', // Purple background for the label
                color: '#FFFFFF',
                padding: '10px',
                borderRadius: '5px',
                marginBottom: '15px'
            }}>
                *{speakerName}*
            </div>

            {/* Session Title */}
            <div style={{ marginBottom: '20px' }}>
                *{sessionTitle}*
            </div>

            {/* Date and Time */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginBottom: '15px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    📅 <span style={{ marginLeft: '5px' }}>{date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    🕒 <span style={{ marginLeft: '5px' }}>{time}</span>
                </div>
            </div>

            {/* View More Button */}
            <button style={{
                backgroundColor: '#6A5ACD', // A slightly different purple/blue for the button
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer'
            }}>
                VIEW MORE
            </button>
        </div>
    );
};

export default SpeakerCard;