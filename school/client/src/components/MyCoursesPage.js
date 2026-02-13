import React, { useEffect, useMemo, useState } from 'react';
import '../styles/Homepage.css';
import '../styles/Pages.css';
import { courses } from '../data/courses';
import { coursesAPI, cohortsAPI, progressAPI, studentAPI } from '../services/api';
import CohortTrainingModal from './CohortTrainingModal';

const MyCoursesPage = ({ user, onBack, onResume, onUserUpdate }) => {
  const [progressMap, setProgressMap] = useState({});
  const [editing, setEditing] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState(user?.interestedCourses || []);
  const [cohortsState, setCohortsState] = useState({});
  const [enrolledCohorts, setEnrolledCohorts] = useState([]);
  const [saving, setSaving] = useState(false);
  const [pendingEnrollment, setPendingEnrollment] = useState(null);

  const milestones = [
    { label: 'Kickoff', threshold: 10 },
    { label: 'Momentum', threshold: 35 },
    { label: 'Mastery', threshold: 70 },
    { label: 'Finish', threshold: 100 }
  ];

  const interestedCourses = useMemo(() => {
    if (!user?.interestedCourses) {
      return [];
    }
    return courses.filter((course) => user.interestedCourses.includes(course.id));
  }, [user]);

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const response = await progressAPI.getAll();
        const nextMap = {};
        response.progress.forEach((entry) => {
          nextMap[entry.course_id] = entry;
        });
        setProgressMap(nextMap);
      } catch (error) {
        setProgressMap({});
      }
    };

    if (user?.id) {
      loadProgress();
    }
  }, [user]);

  useEffect(() => {
    const loadEnrollments = async () => {
      try {
        const response = await studentAPI.getEnrollments();
        setEnrolledCohorts(response.enrollments || []);
      } catch (error) {
        setEnrolledCohorts([]);
      }
    };

    if (user?.id) {
      loadEnrollments();
    }
  }, [user]);

  const handleToggleCourse = (courseId) => {
    setSelectedCourses((prev) => {
      const isSelected = prev.includes(courseId);
      return isSelected ? prev.filter((id) => id !== courseId) : [...prev, courseId];
    });
  };

  const handleSaveInterests = async () => {
    setSaving(true);
    try {
      const response = await studentAPI.updateInterests(selectedCourses);
      localStorage.setItem('user', JSON.stringify(response.user));
      setSelectedCourses(response.user.interestedCourses || []);
      if (onUserUpdate) {
        onUserUpdate(response.user);
      }
      if (typeof window !== 'undefined') {
        window.location.hash = '#/my-courses';
      }
    } catch (error) {
      // Ignore for now.
    } finally {
      setSaving(false);
      setEditing(false);
    }
  };

  const handleViewCohorts = async (courseId) => {
    setCohortsState((prev) => ({
      ...prev,
      [courseId]: { loading: true, cohorts: [], error: null }
    }));

    try {
      const course = await coursesAPI.getBySlug(courseId);
      const cohortsResponse = await cohortsAPI.getByCourse(course._id);
      setCohortsState((prev) => ({
        ...prev,
        [courseId]: { loading: false, cohorts: cohortsResponse.cohorts || [], error: null }
      }));
    } catch (error) {
      setCohortsState((prev) => ({
        ...prev,
        [courseId]: { loading: false, cohorts: [], error: 'No cohorts available yet' }
      }));
    }
  };

  const handleEnroll = async (courseId, cohortId) => {
    setCohortsState((prev) => ({
      ...prev,
      [courseId]: { ...prev[courseId], enrolling: cohortId }
    }));
    try {
      await cohortsAPI.enroll(cohortId);
      setCohortsState((prev) => ({
        ...prev,
        [courseId]: { ...prev[courseId], enrolling: null }
      }));
    } catch (error) {
      setCohortsState((prev) => ({
        ...prev,
        [courseId]: { ...prev[courseId], enrolling: null, error: 'Enrollment failed' }
      }));
    }
  };

  const handleConfirmEnrollment = async () => {
    if (!pendingEnrollment) {
      return;
    }

    const { courseId, cohortId } = pendingEnrollment;
    setPendingEnrollment(null);
    await handleEnroll(courseId, cohortId);
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
          <a href="#/courses">Courses</a>
          <a href="#/my-courses">My Courses</a>
          <a href="#/timetable">Timetable</a>
        </div>
        </div>
      </nav>

      <main className="courses-shell">
        <section className="courses-hero">
          <div className="page-container courses-hero-inner">
            <div className="courses-hero-content">
              <span className="courses-pill">Student portal</span>
              <h1>My Courses</h1>
              <p>Resume where you left off and manage your learning interests.</p>
              <div className="courses-hero-actions">
                <button className="primary-link" onClick={onBack}>Back to dashboard</button>
                <button className="outline-link" onClick={() => setEditing((prev) => !prev)}>
                  {editing ? 'Cancel changes' : 'Manage interests'}
                </button>
              </div>
            </div>
            <div className="courses-hero-card">
              <div className="courses-hero-card-header">
                <span>Selected courses</span>
                <strong>{interestedCourses.length}</strong>
              </div>
              <div className="courses-hero-card-body">
                <div>
                  <p>Progress entries</p>
                  <h3>{Object.keys(progressMap).length}</h3>
                </div>
                <div>
                  <p>Sessions</p>
                  <h3>3 / week</h3>
                </div>
              </div>
              <div className="courses-hero-card-footer">
                <span>Update interests anytime</span>
              </div>
            </div>
          </div>
        </section>

        {editing && (
          <section className="outline-section">
            <div className="page-container outline-card interests-panel">
              <h2>Choose courses</h2>
              <div className="courses-grid">
                {courses.map((course) => (
                  <label key={course.id} className="course-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedCourses.includes(course.id)}
                      onChange={() => handleToggleCourse(course.id)}
                    />
                    {course.name}
                  </label>
                ))}
              </div>
              <div className="page-actions">
                <button className="primary-link" onClick={handleSaveInterests} disabled={saving}>
                  {saving ? 'Saving...' : 'Save interests'}
                </button>
              </div>
            </div>
          </section>
        )}

        <section className="outline-section">
          <div className="page-container">
            <h2>Enrolled cohorts</h2>
            {enrolledCohorts.length === 0 ? (
              <p>No cohort enrollments yet.</p>
            ) : (
              <div className="outline-grid">
                {enrolledCohorts.map((enrollment) => {
                  const cohort = enrollment.cohort_id;
                  const course = cohort?.course_id;
                  return (
                    <div key={enrollment._id} className="outline-card">
                      <h3>{course?.title || 'Course'}</h3>
                      <p>{cohort?.name}</p>
                      <p>Instructor: {cohort?.instructor}</p>
                      {cohort?.start_date && (
                        <p>Starts: {new Date(cohort.start_date).toLocaleDateString()}</p>
                      )}
                      <p>
                        Schedule: {cohort?.schedule?.days_per_week || 3} days/week ·{' '}
                        {cohort?.schedule?.hours_per_session || 2} hrs · {cohort?.schedule?.time_slot || 'Evenings'}
                      </p>
                      <div className="page-actions">
                        <button className="primary-link" onClick={() => onResume(course?.slug || course?.title?.toLowerCase() || '')}>
                          Access course
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <section className="outline-section">
          <div className="page-container outline-card">
            <h2>Cohort calendar</h2>
            {enrolledCohorts.length === 0 ? (
              <p>Add a cohort to see upcoming sessions.</p>
            ) : (
              <div className="calendar-grid">
                {enrolledCohorts.map((enrollment) => {
                  const cohort = enrollment.cohort_id;
                  const course = cohort?.course_id;
                  return (
                    <div key={enrollment._id} className="calendar-card">
                      <h3>{course?.title || 'Course'}</h3>
                      <p>{cohort?.name}</p>
                      <p>Starts {cohort?.start_date ? new Date(cohort.start_date).toLocaleDateString() : 'TBD'}</p>
                      <p>
                        {cohort?.schedule?.days_per_week || 3}x weekly · {cohort?.schedule?.hours_per_session || 2}h ·{' '}
                        {cohort?.schedule?.time_slot || 'Evenings'}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <section className="courses-grid-section">
          <div className="page-container">
            <div className="courses-grid">
              {interestedCourses.map((course) => {
                const progress = progressMap[course.id];
                const completed = progress?.completed_slides || 0;
                const total = progress?.total_slides || 0;
                const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
                const cohortData = cohortsState[course.id];

                return (
                  <article key={course.id} className="course-card" style={{ "--course-color": course.color }}>
                    <div className="course-card-top">
                      <div className="course-icon">
                        <img src={course.icon} alt={`${course.name} logo`} />
                      </div>
                      <div>
                        <p className="course-category">{course.category}</p>
                        <h3>{course.name}</h3>
                      </div>
                      <span className="course-duration">{course.duration}</span>
                    </div>
                    <p className="course-description">{course.description}</p>
                    <div className="course-meta">
                      <span className="course-format">Free materials</span>
                      <span className="course-format">Progress: {percent}%</span>
                    </div>
                    <div className="milestone-row">
                      {milestones.map((milestone) => (
                        <span
                          key={milestone.label}
                          className={`milestone-badge ${percent >= milestone.threshold ? 'active' : ''}`}
                        >
                          {milestone.label}
                        </span>
                      ))}
                    </div>
                    <div className="page-actions">
                      <button className="primary-link" onClick={() => onResume(course.id)}>
                        Resume course
                      </button>
                      <button className="outline-link" onClick={() => handleViewCohorts(course.id)}>
                        View cohorts
                      </button>
                    </div>

                    {cohortData && (
                      <div className="course-outline">
                        {cohortData.loading && <p>Loading cohorts...</p>}
                        {cohortData.error && <p>{cohortData.error}</p>}
                        {cohortData.cohorts?.length > 0 && (
                          <ul className="course-outline-list">
                            {cohortData.cohorts.map((cohort) => (
                              <li key={cohort._id}>
                                {cohort.name} · {new Date(cohort.start_date).toLocaleDateString()} · {cohort.available_slots} slots
                                <button
                                  className="outline-link"
                                  onClick={() =>
                                    setPendingEnrollment({
                                      courseId: course.id,
                                      cohortId: cohort._id,
                                      courseName: course.name,
                                      cohortName: cohort.name,
                                    })
                                  }
                                  disabled={cohortData.enrolling === cohort._id}
                                >
                                  {cohortData.enrolling === cohort._id ? 'Enrolling...' : 'Enroll'}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <CohortTrainingModal
        isOpen={Boolean(pendingEnrollment)}
        onClose={() => setPendingEnrollment(null)}
        onContinue={handleConfirmEnrollment}
        courseName={pendingEnrollment?.courseName}
        cohortName={pendingEnrollment?.cohortName}
        primaryLabel="Confirm Paid Cohort Enrollment"
      />
    </div>
  );
};

export default MyCoursesPage;
