import React, { useState } from "react";
import "../styles/Homepage.css";
import "../styles/Pages.css";
import { courses } from "../data/courses";
import CohortTrainingModal from "./CohortTrainingModal";

const PricingPage = () => {
  const [showCohortModal, setShowCohortModal] = useState(false);
  const [cohortCourse, setCohortCourse] = useState(null);

  const pricingGroups = courses.reduce((acc, course) => {
    acc[course.category] = acc[course.category] || { courses: [] };
    acc[course.category].courses.push(course.name);
    return acc;
  }, {});

  const pricingRows = Object.entries(pricingGroups).map(([category, data]) => ({
    category,
    courses: data.courses,
  }));

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
            <a href="#/pricing">Cohort Training</a>
          </div>
        </div>
      </nav>

      <main className="page-shell">
        <section className="page-hero">
          <div className="page-container">
            <h1>Cohort Training</h1>
            <p>All self-paced materials are free. Cohort training is paid and instructor-led.</p>
          </div>
        </section>

        <section className="page-section">
          <div className="page-container">
            <div className="page-grid">
              {pricingRows.map((row) => (
                <div key={row.category} className="page-card">
                  <div className="page-card-header">
                    <div>
                      <h3>{row.category}</h3>
                      <span className="page-meta">Cohort-based delivery</span>
                    </div>
                    <span className="page-badge">Paid Cohort</span>
                  </div>
                  <p>Includes three sessions per week and assessment reviews.</p>
                  <ul className="page-list">
                    {row.courses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                  <div className="page-actions">
                    <button
                      type="button"
                      className="primary-link"
                      onClick={() => {
                        setCohortCourse({ name: row.courses[0] });
                        setShowCohortModal(true);
                      }}
                    >
                      Request cohort slot
                    </button>
                    <a className="outline-link" href="#/timetable">View timetable</a>
                    <a className="outline-link" href="#/courses">View courses</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="page-note">
              <p>
                Admissions confirms each cohort placement and sends payment guidance after review.
              </p>
            </div>
          </div>
        </section>
      </main>

      <CohortTrainingModal
        isOpen={showCohortModal}
        onClose={() => setShowCohortModal(false)}
        onContinue={() => {
          setShowCohortModal(false);
          window.location.hash = "#/my-courses";
        }}
        courseName={cohortCourse?.name}
      />
    </div>
  );
};

export default PricingPage;
