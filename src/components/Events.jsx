import React from "react";
import "../styles/Events.css";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const events = [
  {
    id: 1,
    image: "/event1.jpg",
    title: "Navigating the Journey to Competitive Success: A Talk by Dr. Tanu Jain",
    date: "27th January 2025",
    time: "11:30 AM - 1:00 PM",
    venue: "Auditorium, IGDTUW",
    desc: "Join us for an inspiring session featuring Dr. Tanu Jain, Ex-Civil Servant and Founder of Tathastu ICS. She will share her insights on overcoming challenges, building resilience, and leadership qualities.",
  },
  {
    id: 2,
    image: "/event2.jpg",
    title: "Cracking the Code: Career Talks, Placements, and Internships with Arsh Goyal",
    date: "30th January 2025",
    time: "2:00 PM - 3:30 PM",
    venue: "Auditorium, IGDTUW",
    desc: "Gain valuable career insights from Arsh Goyal, Senior Software Engineer at Samsung and Ex-ISRO Intern. Learn practical tips for interviews, internships, and placements.",
  },
  {
    id: 3,
    image: "/event3.jpg",
    title: "Believe, Strive, Succeed: A Journey with Gajendra Purohit",
    date: "31st January 2025",
    time: "12:30 PM - 2:00 PM",
    venue: "Auditorium, IGDTUW",
    desc: "Get inspired by Dr. Gajendra Purohit, Founder of MathsCare and Educator with 1.6M YouTube subscribers. Learn how to build discipline and focus for success.",
  },
  {
    id: 4,
    image: "/event4.jpg",
    title: "Breaking Barriers: Empowering Women in Tech",
    date: "1st February 2025",
    time: "11:00 AM - 12:30 PM",
    venue: "Seminar Hall, IGDTUW",
    desc: "A discussion panel featuring women leaders sharing their journeys in technology, innovation, and leadership.",
  },
  {
    id: 5,
    image: "/event5.jpg",
    title: "TechXplore: Innovations in AI and Future Trends",
    date: "2nd February 2025",
    time: "2:00 PM - 4:00 PM",
    venue: "Auditorium, IGDTUW",
    desc: "Explore the latest AI breakthroughs and future technology trends with leading researchers and innovators.",
  },
  {
    id: 6,
    image: "/event6.jpg",
    title: "The Art of Open Source Contribution",
    date: "3rd February 2025",
    time: "11:00 AM - 12:30 PM",
    venue: "Auditorium, IGDTUW",
    desc: "Learn how to start contributing to open source, collaborate effectively, and grow your developer profile.",
  },
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
