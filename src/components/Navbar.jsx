import '../styles/Navbar.css';
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaBars, FaEnvelope, FaTimes, FaDiscord } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { Events, scrollSpy } from "react-scroll";


const handleEmailClick = (e) => {
  e.preventDefault();

  const emailTo = "igdtuieee@gmail.com";
  const ccEmail = "igdtuieee@gmail.com";
  const subject = encodeURIComponent("Contact from Website");
  const body = encodeURIComponent("Hello IEEE IGDTUW Team,");

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&cc=${ccEmail}&su=${subject}&body=${body}`;
  const newWindow = window.open(gmailLink, "_blank");

  if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
    alert("It seems like the pop-up was blocked. Please allow pop-ups for this site.");
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    scrollSpy.update();
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // scroll handling logic (optional)
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-logo" onClick={() => (window.location.href = "/")}>
        <img src="/logoBW (2).png" alt="IEEE IGDTUW logo" />
      </div>

      {/* Center: Navigation Links */}
      <div className="navbar-links">
        <a href="https://ieee-igdtuw.github.io/ieeeigdtuw/" className="active">IEEE IGDTUW</a>
        <a href="#about">About</a>
        <a href="#timeline">Timeline</a>
        <a href="https://wiegnite2025.devfolio.co/" target="_blank" rel="noopener noreferrer">Registration</a>
        <a href="#events">Events</a>
      </div>

      {/* Right: Social Icons */}
      <div className="navbar-socials">
        <a href="https://www.linkedin.com/company/ieee-igdtuw/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://x.com/ieeeigdtuw" target="_blank" rel="noopener noreferrer"><SiX /></a>
        <a href="https://www.instagram.com/ieeeigdtuw/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://discord.gg/XSHzpr29gD" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
        <a href="mailto:igdtuieee@gmail.com" onClick={handleEmailClick}><FaEnvelope /></a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
