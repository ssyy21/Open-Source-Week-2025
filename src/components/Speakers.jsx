import React from 'react';
import FeaturedSpeaker from './featuredspeaker';
import SpeakerCard from './SpeakerCard';

const featuredSpeaker = {
  name: 'John Doe',
  description: 'Experienced software developer and mentor, passionate about AI and community growth.',
  linkedinUrl: 'https://linkedin.com/in/johndoe',
  imageUrl: '/profile.jpg'
};

const mentorsData = [
  { id: 1, name: 'Mentor One', description: 'Expert in cloud technologies.', linkedinUrl: 'https://linkedin.com/in/mentor1', imageUrl: '/profile.jpg' },
  { id: 2, name: 'Mentor Two', description: 'Specialist in cybersecurity.', linkedinUrl: 'https://linkedin.com/in/mentor2', imageUrl: '/profile.jpg' },
  { id: 3, name: 'Mentor Three', description: 'Leader in big data solutions.', linkedinUrl: 'https://linkedin.com/in/mentor3', imageUrl: '/profile.jpg' },
  { id: 4, name: 'Mentor Four', description: 'UI/UX design expert.', linkedinUrl: 'https://linkedin.com/in/mentor4', imageUrl: '/profile.jpg' },
  { id: 5, name: 'Mentor Five', description: 'Full-stack developer.', linkedinUrl: 'https://linkedin.com/in/mentor5', imageUrl: '/profile.jpg' },
  { id: 6, name: 'Mentor Six', description: 'Data scientist with 10 years experience.', linkedinUrl: 'https://linkedin.com/in/mentor6', imageUrl: '/profile.jpg' },
  { id: 7, name: 'Mentor Seven', description: 'DevOps and Automation specialist.', linkedinUrl: 'https://linkedin.com/in/mentor7', imageUrl: '/profile.jpg' },
  { id: 8, name: 'Mentor Eight', description: 'Cloud infrastructure guru.', linkedinUrl: 'https://linkedin.com/in/mentor8', imageUrl: '/profile.jpg' }
];

const Speakers = () => (
  <section style={{ backgroundColor: '#000', padding: '60px 20px', color: '#fff' }}>
    <h2 style={{
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#FF69B4',
      marginBottom: '20px'
    }}>
      Speaker
    </h2>
    <FeaturedSpeaker {...featuredSpeaker} />
    <h2 style={{
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#FF69B4',
      marginTop: '60px',
      marginBottom: '20px'
    }}>
      Mentors
    </h2>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '40px',
      justifyItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {mentorsData.map(mentor => (
        <SpeakerCard key={mentor.id} {...mentor} />
      ))}
    </div>
  </section>
);

export default Speakers;
