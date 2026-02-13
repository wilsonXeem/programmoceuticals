import React, { useEffect, useMemo, useState } from 'react';
import '../styles/StudentDashboard.css';
import { courses } from '../data/courses';
import { progressAPI, studentAPI } from '../services/api';

const StudentDashboard = ({ user, onContinueCourse, onBack, onViewMyCourses }) => {
  const [progressMap, setProgressMap] = useState({});
  const [enrolledCohorts, setEnrolledCohorts] = useState([]);
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

  return (
    <div className="student-dashboard">
      <div className="dashboard-header">
        <h1>Welcome back, {user?.name}!</h1>
        <p>Your saved course interests and learning progress</p>
        <button className="browse-btn" onClick={onViewMyCourses}>View my courses</button>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-section">
          <h2>My Cohorts</h2>
          {enrolledCohorts.length === 0 ? (
            <div className="empty-state">
              <p>No enrolled cohorts yet</p>
              <button className="browse-btn" onClick={onViewMyCourses}>View courses</button>
            </div>
          ) : (
            <div className="cohorts-list">
              {enrolledCohorts.map((enrollment) => {
                const cohort = enrollment.cohort_id;
                const course = cohort?.course_id;
                return (
                  <div key={enrollment._id} className="cohort-card">
                    <div className="cohort-info">
                      <h3>{course?.title || 'Course'}</h3>
                      <p>{cohort?.name}</p>
                      <p>Instructor: {cohort?.instructor}</p>
                    </div>
                    <div className="cohort-actions">
                      <button
                        className="continue-btn"
                        onClick={() => onContinueCourse(course?.slug || course?.title?.toLowerCase() || '')}
                      >
                        Access Course
                      </button>
                      {cohort?.start_date && (
                        <div className="next-session">
                          Starts: {new Date(cohort.start_date).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="dashboard-section">
          <h2>Interested Courses</h2>
          {interestedCourses.length === 0 ? (
            <div className="empty-state">
              <p>No courses selected yet</p>
              <button className="browse-btn" onClick={onBack}>Browse Courses</button>
            </div>
          ) : (
            <div className="cohorts-list">
              {interestedCourses.map((course) => {
                const progress = progressMap[course.id];
                const completed = progress?.completed_slides || 0;
                const total = progress?.total_slides || 0;
                const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
                return (
                  <div key={course.id} className="cohort-card">
                  <div className="cohort-info">
                    <h3>{course.name}</h3>
                    <p>{course.category}</p>
                    <p>{course.duration}</p>
                    <p>Progress: {percent}%</p>
                  </div>
                  <div className="cohort-actions">
                    <button 
                      className="continue-btn"
                      onClick={() => onContinueCourse(course.id)}
                    >
                      Access Course
                    </button>
                  </div>
                </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="dashboard-section stats">
          <h2>Your Stats</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{enrolledCohorts.length}</div>
              <div className="stat-label">Active Cohorts</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{interestedCourses.length}</div>
              <div className="stat-label">Interested Courses</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">Sessions/Week</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
