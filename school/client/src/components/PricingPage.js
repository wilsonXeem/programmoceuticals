import React, { useState } from "react";
import "../styles/Homepage.css";
import "../styles/Pages.css";
import { courses as localCourses } from "../data/courses";
import CohortTrainingModal from "./CohortTrainingModal";

const PricingPage = ({ courses: providedCourses, user }) => {
  const courses = providedCourses?.length ? providedCourses : localCourses;
  const [showCohortModal, setShowCohortModal] = useState(false);
  const [cohortCourse, setCohortCourse] = useState(null);

  const pricingGroups = courses.reduce((acc, course) => {
    acc[course.category] = acc[course.category] || { courses: [] };
    acc[course.category].courses.push(course);
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
            <a href="#/certificate-verify">Verify Certificate</a>
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
                      <li key={course.id || course.name}>{course.name}</li>
                    ))}
                  </ul>
                  <div className="page-actions">
                    <button
                      type="button"
                      className="primary-link"
                      onClick={() => {
                        setCohortCourse(row.courses[0] || null);
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
          window.location.hash = user ? "#/my-courses" : "#/";
        }}
        user={user}
        mode="application"
        courseName={cohortCourse?.name}
        courseSlug={cohortCourse?.id}
        courseId={cohortCourse?._id}
        primaryLabel={user ? "Open My Courses" : "Back to Home"}
      />
    </div>
  );
};

export default PricingPage;
