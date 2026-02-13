import React from "react";
import "../styles/Homepage.css";
import "../styles/Pages.css";
import { courses } from "../data/courses";

const timetableSlots = [
  [
    { day: "Mon", time: "6:00–8:00 PM" },
    { day: "Wed", time: "6:00–8:00 PM" },
    { day: "Sat", time: "10:00–12:00 PM" },
  ],
  [
    { day: "Tue", time: "6:00–8:00 PM" },
    { day: "Thu", time: "6:00–8:00 PM" },
    { day: "Sat", time: "2:00–4:00 PM" },
  ],
  [
    { day: "Mon", time: "4:00–6:00 PM" },
    { day: "Wed", time: "4:00–6:00 PM" },
    { day: "Fri", time: "6:00–8:00 PM" },
  ],
];

const TimetablePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar scrolled">
        <div className="nav-container">
          <div className="nav-brand">
            <a className="nav-title" href="#/">ProgrammoCeuticals</a>
          </div>
          <div className="nav-menu">
            <a href="#/">Home</a>
            <a href="#/courses">Courses</a>
            <a href="#/my-courses">My Courses</a>
            <a href="#/timetable">Timetable</a>
          </div>
        </div>
      </nav>

      <main className="page-shell">
        <section className="page-hero">
          <div className="page-container">
            <h1>Weekly Timetable</h1>
            <p>All courses meet three times per week, two hours per session.</p>
          </div>
        </section>

        <section className="page-section">
          <div className="page-container">
            <div className="page-grid timetable-grid">
              {courses.map((course, index) => {
                const slots = timetableSlots[index % timetableSlots.length];
                return (
                  <div key={course.id} className="page-card">
                    <div className="page-card-header">
                      <div>
                        <h3>{course.name}</h3>
                        <span className="page-meta">{course.duration}</span>
                      </div>
                      <span className="page-badge">3 sessions</span>
                    </div>
                    <div className="timetable-list">
                      {slots.map((slot) => (
                        <div key={`${course.id}-${slot.day}`} className="timetable-item">
                          <span className="timetable-day">{slot.day}</span>
                          <span className="timetable-time">{slot.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TimetablePage;
