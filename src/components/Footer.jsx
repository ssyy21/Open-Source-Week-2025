import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img
            src="/logoBW (2).png"
            alt="IEEE IGDTUW Logo"
            className="footer-logo"
          />
          <h4>Get In Touch</h4>
          <p>
            Indira Gandhi Delhi Technical University for Women,
            <br />
            New Church Rd, Opp. St James Church,
            <br />
            Kashmere Gate, Delhi 110006
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <h4>Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#timeline">Timeline</a></li>
            <li><a href="#registration">Registration</a></li>
            <li><a href="#events">Events</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-social">
          {/* <h4>Follow Us On:</h4> */}
          <div className="social-icons">
            <a
              href="https://www.instagram.com/ieeeigdtuw"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://x.com/ieeeigdtuw"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/ieee-igdtuw/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          <p>For more information, contact:</p>
          <p>
            • <a href="https://www.linkedin.com/company/ieee-igdtuw/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn Profile</a>
            <br />
            • <a href="https://www.instagram.com/ieeeigdtuw/" target="_blank" rel="noreferrer" className="footer-link">Instagram ID</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:igdtwieee@gmail.com" className="footer-link">
              igdtwieee@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Developed by IEEE IGDTUW Technical Team</p>
        <p>© IEEE IGDTUW 2025 | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
