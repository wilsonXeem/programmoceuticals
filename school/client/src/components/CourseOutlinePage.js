import React, { useState } from "react";
import "../styles/Homepage.css";
import "../styles/Pages.css";
import { courses } from "../data/courses";
import CohortTrainingModal from "./CohortTrainingModal";

const CourseOutlinePage = ({ courseId }) => {
  const course = courses.find((item) => item.id === courseId);
  const [showCohortModal, setShowCohortModal] = useState(false);

  if (!course) {
    return (
      <div className="homepage course-outline-page">
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

        <main className="outline-shell">
          <section className="outline-hero">
            <div className="page-container">
              <div className="outline-breadcrumb">
                <a href="#/">Home</a> <span>/</span> <a href="#/courses">Courses</a> <span>/</span> <span>Not Found</span>
              </div>
              <h1>Course not found</h1>
              <p>The course you requested is not available.</p>
              <a className="btn-primary" href="#/courses">← Back to courses</a>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="homepage course-outline-page">
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

      <main className="outline-shell">
        <section className="outline-hero">
          <div className="page-container">
            <div className="outline-breadcrumb">
              <a href="#/">Home</a> <span>/</span> <a href="#/courses">Courses</a> <span>/</span> <span>{course.name}</span>
            </div>
            
            <div className="outline-hero-content">
              <div className="course-icon-large">
                <img src={course.icon} alt={`${course.name} logo`} style={{"--course-color": course.color}} />
              </div>
              
              <div className="outline-header">
                <h1>{course.name}</h1>
                <p className="outline-description">{course.description}</p>
                
                <div className="outline-stats">
                  <div className="stat-item">
                    <i className="fa-solid fa-clock"></i>
                    <div>
                      <span className="stat-label">Duration</span>
                      <span className="stat-value">{course.duration}</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <i className="fa-solid fa-users"></i>
                    <div>
                      <span className="stat-label">Format</span>
                      <span className="stat-value">Cohort-based</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <i className="fa-solid fa-certificate"></i>
                    <div>
                      <span className="stat-label">Certificate</span>
                      <span className="stat-value">Included</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <i className="fa-solid fa-layer-group"></i>
                    <div>
                      <span className="stat-label">Track</span>
                      <span className="stat-value">{course.category}</span>
                    </div>
                  </div>
                </div>
                
                <div className="outline-actions">
                  <button
                    type="button"
                    className="btn-primary large"
                    onClick={() => setShowCohortModal(true)}
                  >
                    Join Paid Cohort
                  </button>
                  <a className="btn-secondary large" href={`#/course/${course.id}`}>Preview Materials</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="outline-content">
          <div className="page-container">
            <div className="outline-grid">
              <div className="outline-card">
                <div className="card-header">
                  <i className="fa-solid fa-bullseye"></i>
                  <h2>Learning Objectives</h2>
                </div>
                <div className="objectives-list">
                  {course.objectives.map((item, index) => (
                    <div key={item} className="objective-item">
                      <span className="objective-number">{index + 1}</span>
                      <span className="objective-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="outline-card">
                <div className="card-header">
                  <i className="fa-solid fa-list-ol"></i>
                  <h2>Course Outline</h2>
                </div>
                <div className="curriculum-list">
                  {course.outline.map((item, index) => (
                    <div key={item} className="curriculum-item">
                      <div className="module-number">{index + 1}</div>
                      <div className="curriculum-content">
                        <h4>{item}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="outline-cta">
              <div className="cta-content">
                <h2>Ready to start your {course.name} journey?</h2>
                <p>Join our next cohort and master {course.name} with expert guidance and hands-on practice.</p>
                <div className="cta-actions">
                  <button
                    type="button"
                    className="btn-primary large"
                    onClick={() => setShowCohortModal(true)}
                  >
                    Join Paid Cohort
                  </button>
                  <a href="#/courses" className="btn-secondary large">← Back to Courses</a>
                </div>
              </div>
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
        courseName={course.name}
      />
    </div>
  );
};

export default CourseOutlinePage;
