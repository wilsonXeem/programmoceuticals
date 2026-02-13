import React, { useState, useEffect } from "react";
import "../styles/Homepage.css";
import SignUp from "./SignUp";
import Login from "./Login";
import CohortTrainingModal from "./CohortTrainingModal";
import { courses } from "../data/courses";

function Homepage({ onLanguageSelect, onViewCohorts, onViewDashboard, user, setUser }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCohortModal, setShowCohortModal] = useState(false);
  const [cohortCourse, setCohortCourse] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCohortModal = (course) => {
    setCohortCourse(course);
    setShowCohortModal(true);
  };

  const handleContinueToCohort = () => {
    setShowCohortModal(false);
    if (!cohortCourse) {
      return;
    }

    if (!user) {
      setShowLogin(true);
      return;
    }

    onViewCohorts(cohortCourse.id);
  };


  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div
            className="nav-brand"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="nav-title">ProgrammoCeuticals</span>
          </div>

          <div className="nav-menu">
            <a href="#/">Home</a>
            <a href="#/courses">Courses</a>
            <a href="#/my-courses">My Courses</a>
            <a href="#/timetable">Timetable</a>
          </div>

          <div className="nav-auth">
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button onClick={onViewDashboard} className="login-btn">
                  Dashboard
                </button>
                <span style={{ color: '#2e2e2e' }}>Welcome, {user.name}</span>
                <button 
                  onClick={() => {
                    localStorage.removeItem('token');
                    setUser(null);
                  }} 
                  className="login-btn"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button onClick={() => setShowLogin(true)} className="login-btn">
                  Log in
                </button>
                <button onClick={() => setShowSignUp(true)} className="get-started-btn">
                  Get Started
                </button>
              </>
            )}
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#/">Home</a>
            <a href="#/courses">Courses</a>
            <a href="#/my-courses">My Courses</a>
            <a href="#/timetable">Timetable</a>
            <button type="button" className="mobile-login" onClick={() => setShowLogin(true)}>
              Log in
            </button>
            <button type="button" className="mobile-get-started" onClick={() => setShowSignUp(true)}>
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              Free Self-Paced Access Available
            </div>
            <h1 className="hero-title">
              Structured software education.
              <br />
              <span className="gradient-text">Built for professional practice.</span>
            </h1>
            <p className="hero-description">
              Cohort-based instruction with assessed coursework in Python,
              JavaScript, and core data skills. Progress is guided and verified.
            </p>
            <div className="hero-buttons">
              <a href="#/courses" className="primary-btn">
                Explore Courses <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="#/my-courses" className="secondary-btn">
                <i className="fa-solid fa-book-open"></i> Resume Learning
              </a>
              <button
                type="button"
                className="secondary-btn"
                onClick={() => openCohortModal(courses[0])}
              >
                <i className="fa-solid fa-graduation-cap"></i> Join Paid Cohort
              </button>
            </div>
            <div className="hero-features">
              <div className="feature-item">
                <i className="fa-solid fa-check"></i> Admissions guidance
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-check"></i> Free self-paced learning
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-check"></i> Cohort-based instruction
              </div>
            </div>
          </div>

          <div className="hero-code">
            <div className="code-window">
              <div className="code-header">
                <div className="code-dots">
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
                <div className="code-title">app.js</div>
              </div>
              <div className="code-content">
                <span className="keyword">const</span>{" "}
                <span className="variable">student</span> = {"{"}
                {"<br />"}
                {"  "}name: <span className="string">'Candidate'</span>,
                {"<br />"}
                {"  "}skills: [<span className="string">'Python'</span>,{" "}
                <span className="string">'JavaScript'</span>],{"<br />"}
                {"  "}status: <span className="string">'Enrolled'</span>,
                {"<br />"}
                {"  "}startJourney: <span className="keyword">function</span>(){" "}
                {"{"}
                {"<br />"}
                {"    "}
                <span className="object">console</span>.
                <span className="method">log</span>(
                <span className="string">'Welcome to ProgrammoCeuticals!'</span>
                );{"<br />"}
                {"    "}
                <span className="comment">{"// Structured learning pathway"}</span>
                {"<br />"}
                {"  "}
                {"}"}
                {"}"};{"<br />"}
                {"<br />"}
                <span className="variable">student</span>.
                <span className="method">startJourney</span>();
              </div>
              <div className="code-badge">
                <div className="status-dot"></div>
                <span>Compiling...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="trusted-by">
        <div className="trusted-container">
          <p className="trusted-text">
            Trusted by developers at companies like
          </p>
          <div className="company-logos">
            <span>
              <i className="fa-brands fa-google"></i> Google
            </span>
            <span>
              <i className="fa-brands fa-amazon"></i> Amazon
            </span>
            <span>
              <i className="fa-brands fa-meta"></i> Meta
            </span>
            <span>
              <i className="fa-brands fa-microsoft"></i> Microsoft
            </span>
            <span>
              <i className="fa-brands fa-spotify"></i> Spotify
            </span>
          </div>
        </div>
      </section>

      {/* Courses teaser */}
      <section id="curriculum" className="curriculum">
        <div className="curriculum-container">
          <div className="section-header">
            <h2>Courses</h2>
            <p>Preview the curriculum. View the full catalogue on the courses page.</p>
          </div>

          <div className="language-grid">
            {courses.slice(0, 3).map((lang) => (
              <div
                key={lang.id}
                className="language-card"
                onClick={() => onLanguageSelect(lang.id)}
                style={{ "--accent-color": lang.color }}
              >
                <div className="language-icon">
                  <img src={lang.icon} alt={`${lang.name} logo`} />
                </div>
                <h3>{lang.name}</h3>
                <p>{lang.description}</p>
                <div className="course-info">
                  <div className="tuition-tag">Free self-paced access</div>
                  <div className="duration-tag">{lang.duration}</div>
                  <div className="category-tag">{lang.category}</div>
                </div>
                <button
                  className="start-path-btn"
                  onClick={(event) => {
                    event.stopPropagation();
                    onLanguageSelect(lang.id);
                  }}
                >
                  Access Materials <i className="fa-solid fa-play"></i>
                </button>
                <button
                  className="cohort-btn"
                  onClick={(event) => {
                    event.stopPropagation();
                    openCohortModal(lang);
                  }}
                >
                  Apply for Cohort <i className="fa-solid fa-certificate"></i>
                </button>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <a className="outline-link" href="#/courses">
              View all courses
            </a>
          </div>
        </div>
      </section>

      {/* Timetable teaser */}
      <section className="timetable-teaser">
        <div className="timetable-container">
          <div className="section-header">
            <h2>Timetable</h2>
            <p>Three sessions per week, two hours each. Clear weekly rhythm for every cohort.</p>
          </div>
          <div className="timetable-teaser-card">
            <div>
              <h3>Weekly structure</h3>
              <p>Monday, Wednesday, and Saturday sessions with morning and evening options.</p>
            </div>
            <a className="outline-link" href="#/timetable">View timetable</a>
          </div>
        </div>
      </section>

      {/* Cohort training teaser */}
      <section className="pricing-teaser">
        <div className="timetable-container">
          <div className="section-header">
            <h2>Paid Cohort Training</h2>
            <p>Keep learning for free or join instructor-led cohorts for guided outcomes.</p>
          </div>
          <div className="timetable-teaser-card">
            <div>
              <h3>Instructor-led pathway</h3>
              <p>Live sessions, assignments, and mentor review are available in paid cohorts.</p>
            </div>
            <button type="button" className="outline-link" onClick={() => openCohortModal(courses[0])}>
              View cohort options
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="features-container">
          <div className="features-content">
            <h2>Academic Standards</h2>
            <p>
              A structured pathway that prioritizes rigor, clarity, and
              measurable competence.
            </p>

            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fa-solid fa-terminal"></i>
                </div>
                <div className="feature-text">
                  <h3>Structured Lessons</h3>
                  <p>
                    Guided modules with clear objectives and reference notes.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon purple">
                  <i className="fa-solid fa-users"></i>
                </div>
                <div className="feature-text">
                  <h3>Assessment & Progress</h3>
                  <p>
                    Track outcomes with checkpoints and competency markers.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon blue">
                  <i className="fa-solid fa-certificate"></i>
                </div>
                <div className="feature-text">
                  <h3>Curriculum Depth</h3>
                  <p>
                    Complete coverage from fundamentals to professional practice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="features-demo">
            <div className="demo-card">
              <div className="demo-header">
                <h4>Sample Assessment</h4>
                <span className="difficulty-badge">Intermediate</span>
              </div>
              <p>
                Demonstrate algorithmic reasoning with a short written solution.
              </p>
              <div className="demo-code">
                <span className="keyword">function</span>{" "}
                <span className="method">reverseString</span>(str) {"{"}
                {"  "}
                <span className="keyword">let</span> reversed ={" "}
                <span className="string">""</span>;{"  "}
                <span className="comment">{"// Your code here..."}</span>
                {"  "}
                <span className="keyword">return</span> reversed;
                {"}"}
              </div>
              <button className="solve-btn" onClick={() => onLanguageSelect('challenge')}>
                Try Challenge
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-container">
          <h2>Request admissions guidance</h2>
          <p>Speak with an advisor about cohorts, fees, and program fit.</p>
          <a href="#/courses" className="cta-btn">
            Request Information
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <span>ProgrammoCeuticals</span>
              </div>
              <p>
                Structured training for pharmacy and software professionals in
                applied computing.
              </p>
            </div>

            <div className="footer-links">
              <h4>Platform</h4>
              <ul>
                <li>
                  <a href="#/courses">Courses</a>
                </li>
                <li>
                  <a href="#/timetable">Timetable</a>
                </li>
                <li>
                  <a href="#/my-courses">My Courses</a>
                </li>
                <li>
                  <a href="#/">Home</a>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#/">Blog</a>
                </li>
                <li>
                  <a href="#/">Cheatsheets</a>
                </li>
                <li>
                  <a href="#/">Community</a>
                </li>
                <li>
                  <a href="#/">Help Center</a>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#/">Privacy Policy</a>
                </li>
                <li>
                  <a href="#/">Terms of Service</a>
                </li>
                <li>
                  <a href="#/">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2023 ProgrammoCeuticals Inc. All rights reserved.</p>
            <div className="social-links">
              <a href="#/" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#/" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#/" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#/" aria-label="Discord">
                <i className="fa-brands fa-discord"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <CohortTrainingModal
        isOpen={showCohortModal}
        onClose={() => setShowCohortModal(false)}
        onContinue={handleContinueToCohort}
        courseName={cohortCourse?.name}
      />
      
      {showSignUp && (
        <SignUp 
          onClose={() => setShowSignUp(false)}
          onSwitchToLogin={() => {
            setShowSignUp(false);
            setShowLogin(true);
          }}
          setUser={setUser}
        />
      )}
      
      {showLogin && (
        <Login 
          onClose={() => setShowLogin(false)}
          onSwitchToSignUp={() => {
            setShowLogin(false);
            setShowSignUp(true);
          }}
          setUser={setUser}
        />
      )}
    </div>
  );
}

export default Homepage;
