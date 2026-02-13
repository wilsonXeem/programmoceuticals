import React, { useState } from "react";
import "../styles/Homepage.css";
import "../styles/Pages.css";
import { courses } from "../data/courses";
import CohortTrainingModal from "./CohortTrainingModal";

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [showCohortModal, setShowCohortModal] = useState(false);
  const [cohortCourse, setCohortCourse] = useState(null);

  const categories = ['All', 'Programming Languages', 'Basic Skills'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory;
    const levelMatch = selectedLevel === 'All' || course.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const openCohortModal = (course) => {
    setCohortCourse(course);
    setShowCohortModal(true);
  };

  const handleContinueToCohort = () => {
    setShowCohortModal(false);
    window.location.hash = '#/my-courses';
  };

  return (
    <div className="homepage courses-page">
      <nav className="navbar scrolled">
        <div className="nav-container">
          <div className="nav-brand">
            <a className="nav-title" href="#/">ProgrammoCeuticals</a>
          </div>
          <div className="nav-menu">
            <a href="#/">Home</a>
            <a href="#/courses" className="active">Courses</a>
            <a href="#/my-courses">My Courses</a>
            <a href="#/timetable">Timetable</a>
          </div>
        </div>
      </nav>

      <main className="courses-shell">
        <section className="courses-hero">
          <div className="page-container">
            <div className="courses-hero-content">
              <div className="courses-breadcrumb">
                <a href="#/">Home</a> <span>/</span> <span>Courses</span>
              </div>
              <h1>Professional Development Courses</h1>
              <p className="courses-subtitle">
                Learn free with self-paced materials, then join paid cohorts for mentorship and
                live instructor support.
              </p>
              <div className="courses-stats">
                <div className="stat-item">
                  <span className="stat-number">{courses.length}</span>
                  <span className="stat-label">Courses Available</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">12</span>
                  <span className="stat-label">Weeks Duration</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3x</span>
                  <span className="stat-label">Weekly Sessions</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Hours Per Session</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="courses-filters">
          <div className="page-container">
            <div className="filters-container">
              <div className="filter-group">
                <label>Category</label>
                <select 
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="filter-group">
                <label>Level</label>
                <select 
                  value={selectedLevel} 
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="filter-select"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              <div className="results-count">
                {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
              </div>
            </div>
          </div>
        </section>

        <section className="courses-grid-section">
          <div className="page-container">
            <div className="courses-grid">
              {filteredCourses.map((course, index) => (
                <article
                  key={course.id}
                  className="course-card professional"
                  style={{ "--course-color": course.color, "--card-delay": `${index * 0.05}s` }}
                >
                  <div className="course-header">
                    <div className="course-icon">
                      <img src={course.icon} alt={`${course.name} logo`} />
                    </div>
                  </div>
                  
                  <div className="course-content">
                    <h3 className="course-title">{course.name}</h3>
                    <p className="course-description">{course.description}</p>
                    
                    <div className="course-details">
                      <div className="detail-item">
                        <i className="fa-solid fa-clock"></i>
                        <span>{course.duration}</span>
                      </div>
                      <div className="detail-item">
                        <i className="fa-solid fa-users"></i>
                        <span>Cohort-based</span>
                      </div>
                      <div className="detail-item">
                        <i className="fa-solid fa-certificate"></i>
                        <span>Certificate</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="course-footer">
                    <div className="course-access-note">Free self-paced materials included</div>
                    <div className="course-actions">
                      <a className="btn-secondary" href={`#/course-outline/${course.id}`}>
                        View Course Outline
                      </a>
                      <button type="button" className="btn-primary" onClick={() => openCohortModal(course)}>
                        Join Paid Cohort
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="courses-cta">
          <div className="page-container">
            <div className="cta-content">
              <h2>Start free, upgrade when you need guidance</h2>
              <p>Access course materials at no cost and switch to cohort training when you want live mentorship.</p>
              <div className="cta-actions">
                <button
                  type="button"
                  className="btn-primary large"
                  onClick={() => openCohortModal(filteredCourses[0] || null)}
                >
                  View Paid Cohort Options
                </button>
                <a href="#/timetable" className="btn-secondary large">View Schedule</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CohortTrainingModal
        isOpen={showCohortModal}
        onClose={() => setShowCohortModal(false)}
        onContinue={handleContinueToCohort}
        courseName={cohortCourse?.name}
      />
    </div>
  );
};

export default CoursesPage;
