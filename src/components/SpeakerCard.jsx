import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const SpeakerCard = ({ name, description, linkedinUrl, imageUrl }) => (
  <div style={{
   position: 'relative',
   background: 'linear-gradient(135deg,rgb(10, 14, 46),rgb(14, 31, 56))',  // subtle but rich gradient
   borderRadius: '15px',
   border: '3px solid rgb(11, 26, 57)',
   boxShadow:'0 8px 30px rgba(25, 25, 49, 0.7), 0 0 20px rgba(29, 25, 52, 0.6)' , // stronger shadows
   padding: '50px',
   textAlign: 'center',
   color: '#FFFFFF',
   maxWidth: '400px',
   margin: '0.1px',
   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   cursor: 'pointer'
  }}

    onMouseEnter={e => {
      e.currentTarget.style.transform = 'scale(1.05)';
      e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.9)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3), 0 0 15px rgba(106,90,205,0.3)';
    }}
  >
    <a href={linkedinUrl} 
       target="_blank" 
       rel="noopener noreferrer" 
       title={`${name} LinkedIn Profile`} 
       aria-label={`${name} LinkedIn Profile`}
       className="bounce-icon"
       style={{
         position: 'absolute',
         top: '15px',
         right: '15px',
         color: '#0e76a8',
         fontSize: '22px',
         textDecoration: 'none',
         zIndex: 10
       }}>
      <FaLinkedin />
    </a>

    <img
      src={imageUrl}
      alt={name}
      style={{
        width: '170px',
        height: '170px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '20px',
        border: '3px solidrgb(90, 155, 205)',
        outline: '2px solid white',
        outlineOffset: '5px',
        boxShadow: '0 6px 14px rgba(0,0,0,0.35)'
      }}
    />
    <h3 style={{ margin: '0 0 15px 0', fontSize: '1.2rem', fontWeight: '700' }}>{name}</h3>
    <p style={{ fontSize: '0.75rem', lineHeight: '1.2', marginBottom: '20px', minHeight: '60px', overflow: 'hidden' }}>
      {description}
    </p>
  </div>
);

export default SpeakerCard;
