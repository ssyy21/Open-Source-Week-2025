// src/components/FAQ.jsx

import React, { useState } from 'react';
import '../styles/FAQ.css'; // 💡 IMPORT THE CSS FILE HERE!

// Sample data remains the same
const faqData = [
    {
        id: 1,
        question: 'Is it free to participate in this hackathon?',
        answer: 'Yes, you can register and participate for free.'
    },
    {
        id: 2,
        question: 'What is the eligibility criteria for participation?',
        answer: 'The hackathon is open to students from all universities and colleges. See the official guidelines for details.'
    },
    {
        id: 3,
        question: 'Can students from other colleges participate?',
        answer: 'Absolutely! We encourage participation from students across different colleges and institutions.'
    },
    {
        id: 4,
        question: 'Are non-IGDTUW students allowed to attend on-campus events?',
        answer: 'Please check the event specific guidelines for non-IGDTUW student access, as some events may be restricted.'
    },
    {
        id: 5,
        question: 'Can we form inter-college teams?',
        answer: 'Yes, inter-college teams are permitted and encouraged for a diverse and collaborative experience.'
    },
];

const FAQ = () => {
    const [openItemId, setOpenItemId] = useState(null);

    const handleToggle = (itemId) => {
        setOpenItemId(openItemId === itemId ? null : itemId);
    };

    return (
        <section className="faq-section">
            <h2 className="faq-title">
                Frequently Asked Questions
            </h2>

            <div className="faq-container">
                {faqData.map((item) => (
                    <div key={item.id} className="faq-item">
                        {/* The 'open' class is added conditionally for styling when active */}
                        <div
                            className={`faq-question-bar ${openItemId === item.id ? 'open' : ''}`}
                            onClick={() => handleToggle(item.id)}
                        >
                            <p className="faq-question">{item.question}</p>
                            <span className="faq-icon">{openItemId === item.id ? '▲' : '▼'}</span>
                        </div>

                        {/* The answer content */}
                        {openItemId === item.id && (
                            <div className="faq-answer">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;