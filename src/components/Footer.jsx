// src/components/Footer.jsx

import React from 'react';
import '../styles/Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-logo">
                    {/* Replace this with your actual IEEE/Event logo image */}
                    <h3 className="logo-text">IEEE Open Source Week</h3>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#speakers">Speakers</a></li>
                        <li><a href="#timeline">Timeline</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h4>Connect</h4>
                    {/* In a real app, these would be icon components (e.g., Font Awesome) */}
                    <div className="social-icons">
                        <a href="https://twitter.com/IEEE" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
                        <a href="https://discord.gg/your-invite" target="_blank" rel="noopener noreferrer">💬 Discord</a>
                        <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">🐈 GitHub</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} IEEE Open Source Week. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;