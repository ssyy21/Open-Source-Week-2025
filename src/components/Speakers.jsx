import React from "react";
import "../styles/Speakers.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const speakers = [
  {
    id: 1,
    name: "Paras Atal",
    image: "/speaker1.jpeg",
    designation: "SDE at BNY",
    description:
      "Paras Atal is a Software Engineer at BNY Mellon and a tech creator with 150K+ followers, passionate about helping students break into tech. He has worked at Samsung R&D and Hyperverge AI, contributing to impactful AI projects like SkySweeper. Paras actively mentors students on career growth, AI, and personal branding, building impact through code, content, and community.",
    linkedin: "https://www.linkedin.com/in/parasatal/",
    instagram: "https://www.instagram.com/i.amparas/?hl=en",
  },
  {
    id: 2,
    name: "Vivek Gupta",
    image: "/speaker2.jpeg",
    designation: "Founder of AlgoZenith , ICPC World Finalist",
    description:
      "Vivek Gupta is the founder of AlgoZenith and an ICPC World Finalist with experience at Google. He is passionate about empowering engineering students through quality tech education, helping over 3000 learners land roles at top companies. With expertise in algorithms, AI, and deep learning, Vivek aims to bridge the gap between learning and employability in India’s tech ecosystem.",
    linkedin: "https://www.linkedin.com/in/acraider/",
    instagram: "https://www.instagram.com/vivekgupta.ai?igsh=eTUyaDZlNXBjaGxi",
  },
  {
    id: 3,
    name: "Nitish Rai",
    image: "/speaker3.jpeg",
    designation: "Software Engineer at Google US, Co-founder of AlgoZenith, ICPC World Finalist",
    description:
      "Nitish Rai is a Software Engineer at Google (US) and Co-founder of AlgoZenith. An ICPC World Finalist, he is passionate about algorithms, problem-solving, and building scalable systems. Through AlgoZenith, he aims to make high-quality coding education accessible, empowering thousands of students to excel in competitive programming and secure top tech roles.",
    linkedin: "https://www.linkedin.com/in/ananya-mehta/",
    instagram: "https://www.instagram.com/",
  },
  // {
  //   id: 4,
  //   name: "Arjun Malhotra",
  //   image: "/speaker4.jpg",
  //   designation: "Blockchain Developer, Polygon",
  //   description:
  //     "Arjun Malhotra is a blockchain engineer at Polygon, contributing to smart contract development and decentralized finance ecosystems.",
  //   linkedin: "https://www.linkedin.com/in/arjun-malhotra/",
  //   instagram: "https://www.instagram.com/arjun.malhotra/",
  // },
  // {
  //   id: 5,
  //   name: "Priya Nair",
  //   image: "/speaker5.jpg",
  //   designation: "Product Manager, Meta",
  //   description:
  //     "Priya Nair drives product innovation at Meta, working on accessibility and design inclusivity. She’s passionate about empowering women in tech leadership.",
  //   linkedin: "https://www.linkedin.com/in/priya-nair/",
  //   instagram: "https://www.instagram.com/priya.nair/",
  // },
  // {
  //   id: 6,
  //   name: "Amit Verma",
  //   image: "/speaker6.jpg",
  //   designation: "Cybersecurity Analyst, Palo Alto Networks",
  //   description:
  //     "Amit Verma is a cybersecurity expert specializing in cloud infrastructure protection. He regularly speaks at conferences on digital safety and threat intelligence.",
  //   linkedin: "https://www.linkedin.com/in/amit-verma/",
  //   instagram: "https://www.instagram.com/amit.verma/",
  // },
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
