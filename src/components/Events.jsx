import React from "react";
import "../styles/Events.css";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const events = [
  {
    id: 1,
    image: "/poster1.jpg",
    title: "Transforming Ideas into Impact through Code, Mentorship and AI Automation",
    date: "12th November 2025",
    time: "11:00 AM - 1:00 PM",
    venue: "Auditorium, IGDTUW",
    desc: "Dive into a live session exploring how code, mentorship, and AI automation can transform ideas into impactful real-world innovations.",
  },
  {
    id: 2,
    image: "/poster2.jpg",
    title: "Building impact through open source : Girlscript and Dev guild",
    date: "12th November 2025",
    time: "8:00 PM",
    venue: "Webex Meet",
    desc: "Discover how open-source collaboration drives real-world impact with insights from GirlScript and Dev Guild.",
  },
  {
    id: 3,
    image: "/poster4.jpg",
    title: "Crack the Code: Competitive Programming Unleashed with Vivek Gupta",
    date: "17th November 2025",
    time: "2:00 PM - 3:30 PM",
    venue: "Auditorium, IGDTUW",
    desc: "Join us for an exciting session on mastering problem-solving, optimizing logic, and exploring strategies to excel in competitive programming!",
  },
  {
    id: 4,
    image: "/poster4.jpg",
    title: "Unplugged: A Conversation with Nitish Rai",
    date: "17th November 2025",
    time: "12:30 PM - 2:00 PM",
    venue: "Auditorium, IGDTUW",
    desc: "Join us for a candid panel discussion and Q&A as Nitish shares his journey from ICPC World Finalist to Google Engineer, along with insights on growth, learning, and life in tech.",
  },
  // {
  //   id: 4,
  //   image: "/event4.jpg",
  //   title: "Breaking Barriers: Empowering Women in Tech",
  //   date: "1st February 2025",
  //   time: "11:00 AM - 12:30 PM",
  //   venue: "Seminar Hall, IGDTUW",
  //   desc: "A discussion panel featuring women leaders sharing their journeys in technology, innovation, and leadership.",
  // },
  // {
  //   id: 5,
  //   image: "/event5.jpg",
  //   title: "TechXplore: Innovations in AI and Future Trends",
  //   date: "2nd February 2025",
  //   time: "2:00 PM - 4:00 PM",
  //   venue: "Auditorium, IGDTUW",
  //   desc: "Explore the latest AI breakthroughs and future technology trends with leading researchers and innovators.",
  // },
  // {
  //   id: 6,
  //   image: "/event6.jpg",
  //   title: "The Art of Open Source Contribution",
  //   date: "3rd February 2025",
  //   time: "11:00 AM - 12:30 PM",
  //   venue: "Auditorium, IGDTUW",
  //   desc: "Learn how to start contributing to open source, collaborate effectively, and grow your developer profile.",
  // },
];

const Events = () => {
  return (
    <section className="events-section" id="events">
      <h2 className="events-title">Upcoming Events</h2>
      <div className="events-grid">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>
              <div className="event-info">
                <p><FaCalendarAlt className="icon" /> {event.date}</p>
                <p><FaClock className="icon" /> {event.time}</p>
                <p><FaMapMarkerAlt className="icon" /> {event.venue}</p>
              </div>
              <p className="event-desc">{event.desc}</p>
              <button className="event-btn">Register Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
