import React, { useState } from 'react';
import '../styles/FAQ.css';

const faqData = [
  {
    id: 1,
    question: 'What is Open Source Week?',
    answer:
      'Open Source Week is a week-long celebration of collaboration, innovation, and community-driven development. It includes workshops, talks, and coding events focused on open-source technologies.',
  },
  {
    id: 2,
    question: 'Who can participate in Open Source Week?',
    answer:
      'Anyone with an interest in technology, coding, or community contribution can participate! Whether you are a beginner or an experienced developer, all are welcome.',
  },
  {
    id: 3,
    question: 'Do I need prior open-source experience to join?',
    answer:
      'Not at all! Open Source Week is beginner-friendly. You’ll have mentors, community members, and sessions to help you learn how to contribute to open source.',
  },
  {
    id: 4,
    question: 'Is there any registration fee?',
    answer:
      'No, participation in Open Source Week is completely free. Just register on the official platform to secure your spot.',
  },
  {
    id: 5,
    question: 'Will I get certificates or goodies?',
    answer:
      'Yes! All active participants will receive certificates of participation, and top contributors or winners may receive exclusive swags or goodies.',
  },
];

const FAQ = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const handleToggle = (itemId) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item) => (
          <div key={item.id} className="faq-item">
            <div
              className={`faq-question-bar ${openItemId === item.id ? 'open' : ''}`}
              onClick={() => handleToggle(item.id)}
            >
              <p className="faq-question">{item.question}</p>
              <span className={`faq-icon ${openItemId === item.id ? 'rotate' : ''}`}>
                ▼
              </span>
            </div>

            <div
              className={`faq-answer-wrapper ${
                openItemId === item.id ? 'open' : ''
              }`}
            >
              <div className="faq-answer">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
