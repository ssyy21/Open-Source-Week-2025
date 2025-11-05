import React from "react";
import "../styles/Speakers.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const speakers = [
  {
    id: 1,
    name: "Sneha Sharma",
    image: "/speaker1.jpg",
    designation: "AI Researcher, Google",
    description:
      "Sneha Sharma is an AI researcher at Google with expertise in natural language processing and generative models. She has led multiple projects advancing ethical AI innovation.",
    linkedin: "https://www.linkedin.com/in/sneha-sharma/",
    instagram: "https://www.instagram.com/sneha.sharma/",
  },
  {
    id: 2,
    name: "Rohan Gupta",
    image: "/speaker2.jpg",
    designation: "Founder, DevNation",
    description:
      "Rohan Gupta is a full-stack developer and founder of DevNation, a global tech learning community. He mentors students in building scalable applications and open-source projects.",
    linkedin: "https://www.linkedin.com/in/rohan-gupta/",
    instagram: "https://www.instagram.com/rohan.gupta/",
  },
  {
    id: 3,
    name: "Ananya Mehta",
    image: "/speaker3.jpg",
    designation: "Data Scientist, Microsoft",
    description:
      "Ananya Mehta is a Data Scientist at Microsoft, focusing on AI for social good. She has contributed to research that bridges data analytics and community impact.",
    linkedin: "https://www.linkedin.com/in/ananya-mehta/",
    instagram: "https://www.instagram.com/ananya.mehta/",
  },
  {
    id: 4,
    name: "Arjun Malhotra",
    image: "/speaker4.jpg",
    designation: "Blockchain Developer, Polygon",
    description:
      "Arjun Malhotra is a blockchain engineer at Polygon, contributing to smart contract development and decentralized finance ecosystems.",
    linkedin: "https://www.linkedin.com/in/arjun-malhotra/",
    instagram: "https://www.instagram.com/arjun.malhotra/",
  },
  {
    id: 5,
    name: "Priya Nair",
    image: "/speaker5.jpg",
    designation: "Product Manager, Meta",
    description:
      "Priya Nair drives product innovation at Meta, working on accessibility and design inclusivity. She’s passionate about empowering women in tech leadership.",
    linkedin: "https://www.linkedin.com/in/priya-nair/",
    instagram: "https://www.instagram.com/priya.nair/",
  },
  {
    id: 6,
    name: "Amit Verma",
    image: "/speaker6.jpg",
    designation: "Cybersecurity Analyst, Palo Alto Networks",
    description:
      "Amit Verma is a cybersecurity expert specializing in cloud infrastructure protection. He regularly speaks at conferences on digital safety and threat intelligence.",
    linkedin: "https://www.linkedin.com/in/amit-verma/",
    instagram: "https://www.instagram.com/amit.verma/",
  },
];

const Speakers = () => {
  return (
    <section className="speakers-section" id="speakers">
      <h2 className="speakers-title">Our Speakers</h2>
      <div className="speakers-grid">
        {speakers.map((speaker) => (
          <div className="speaker-card" key={speaker.id}>
            <div className="speaker-image-container">
              <div className="social-icons">
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-icon"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={speaker.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-icon"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
              <img
                src={speaker.image}
                alt={speaker.name}
                className="speaker-image"
              />
            </div>
            <h3 className="speaker-name">{speaker.name}</h3>
            <p className="speaker-designation">{speaker.designation}</p>
            <p className="speaker-description">{speaker.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
