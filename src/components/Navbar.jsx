import '../styles/Navbar.css';
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaBars, FaEnvelope, FaTimes, FaDiscord } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { Events, scrollSpy, scroller } from "react-scroll";
//import logo from "../public/logoBW(2)"; // Adjust path as per your folder structure


const iconSize = 24;

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

const Socials = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={iconSize} color="#ffffff" />,
    link: "https://www.linkedin.com/company/ieee-igdtuw/",
  },
  {
    name: "X",
    icon: <SiX size={iconSize} color="#ffffff" />,
    link: "https://x.com/ieeeigdtuw?t=a_Ruso2b8InVZgRsWA_JIQ&s=09",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={iconSize} color="#ffffff" />,
    link: "https://www.instagram.com/ieeeigdtuw/",
  },
  {
    name: "Discord",
    icon: <FaDiscord size={iconSize} color="#ffffff" />,
    link: "https://discord.gg/VDhHjBsdCc",
  },
  {
    name: "Email",
    icon: <FaEnvelope size={iconSize} color="#ffffff" />,
    link: "#",
    onClick: handleEmailClick,
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const scrollConfig = {
    spy: true,
    smooth: true,
    offset: -70,
    duration: 2500,
    isDynamic: true,
    spyThrottle: 100,
    easing: "easeInOutQuart",
  };

  const handleCustomScroll = (targetId) => {
    scroller.scrollTo(targetId, scrollConfig);
    setActiveSection(targetId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    scrollSpy.update();
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const sections = ["home", "about", "events", "timeline", "registration", "contact"];
        const viewportHeight = window.innerHeight;

        const currentSection = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementMiddle = rect.top + rect.height / 2;
            const viewportMiddle = viewportHeight / 2;
            return Math.abs(elementMiddle - viewportMiddle) < viewportHeight / 3;
          }
          return false;
        });

        if (currentSection) setActiveSection(currentSection);
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

  const navLinkClass = (section) =>
    `cursor-pointer transition-all duration-500 hover:text-[#a855f7] ${
      activeSection === section ? "text-[#a855f7]" : "text-gray-200"
    }`;

return (
  <nav className="navbar">
    {/* Left: Logo */}
    <div className="navbar-logo" onClick={() => (window.location.href = "/")}>
      <img src="/logoBW (2).png" alt="IEEE IGDTUW" />
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
      <a href=" igdtwieee@gmail.com" onClick={handleEmailClick}><FaEnvelope /></a>
    </div>

    {/* Mobile Menu Icon */}
    <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? <FaTimes /> : <FaBars />}
    </div>
  </nav>
);

};

export default Navbar;
