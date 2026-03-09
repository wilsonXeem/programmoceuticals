import React, { useEffect, useMemo, useState } from 'react';
import '../styles/StudentDashboard.css';
import { courses as localCourses } from '../data/courses';
import { progressAPI, studentAPI } from '../services/api';
import { printCertificate } from '../utils/certificatePrint';

const StudentDashboard = ({
  courses: providedCourses,
  user,
  onContinueCourse,
  onBack,
  onViewMyCourses,
}) => {
  const courses = providedCourses?.length ? providedCourses : localCourses;
  const [progressMap, setProgressMap] = useState({});
  const [enrolledCohorts, setEnrolledCohorts] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [payments, setPayments] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const interestedCourses = useMemo(() => {
    if (!user?.interestedCourses) {
      return [];
    }
    return courses.filter((course) => user.interestedCourses.includes(course.id));
  }, [user, courses]);

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
    const loadPayments = async () => {
      try {
        const response = await studentAPI.getPayments();
        setPayments(response.payments || []);
      } catch (error) {
        setPayments([]);
      }
    };

    if (user?.id) {
      loadPayments();
    }
  }, [user]);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const response = await studentAPI.getNotifications(12);
        setNotifications(response.notifications || []);
        setUnreadCount(response.unreadCount || 0);
      } catch (error) {
        setNotifications([]);
        setUnreadCount(0);
      }
    };

    if (user?.id) {
      loadNotifications();
    }
  }, [user]);

  const handleMarkNotificationRead = async (notificationId) => {
    try {
      await studentAPI.markNotificationRead(notificationId);
      setNotifications((prev) =>
        prev.map((notification) =>
          notification.id === notificationId
            ? { ...notification, isRead: true }
            : notification
        )
      );
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch (error) {
      // Ignore for now.
    }
  };

  const handleMarkAllNotificationsRead = async () => {
    try {
      await studentAPI.markAllNotificationsRead();
      setNotifications((prev) =>
        prev.map((notification) => ({ ...notification, isRead: true }))
      );
      setUnreadCount(0);
    } catch (error) {
      // Ignore for now.
    }
  };

  useEffect(() => {
    const loadCertificates = async () => {
      try {
        const response = await studentAPI.getCertificates();
        setCertificates(response.certificates || []);
      } catch (error) {
        setCertificates([]);
      }
    };

    if (user?.id) {
      loadCertificates();
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
            <div className="stat-card">
              <div className="stat-number">{certificates.length}</div>
              <div className="stat-label">Certificates</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                {payments.filter((payment) => payment.status === 'pending_review').length}
              </div>
              <div className="stat-label">Pending Payments</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{unreadCount}</div>
              <div className="stat-label">Unread Alerts</div>
            </div>
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Recent Payments</h2>
          {payments.length === 0 ? (
            <div className="empty-state">
              <p>No payment records yet.</p>
            </div>
          ) : (
            <div className="cohorts-list">
              {payments.slice(0, 5).map((payment) => (
                <div key={payment.id} className="cohort-card">
                  <div className="cohort-info">
                    <h3>{payment.type === 'certification' ? 'Certification Fee' : 'Cohort Training Fee'}</h3>
                    <p>Reference: {payment.reference}</p>
                    <p>
                      Amount: ₦{Number(payment.amount || 0).toLocaleString()} ({payment.status})
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dashboard-section">
          <h2>Notifications</h2>
          {notifications.length === 0 ? (
            <div className="empty-state">
              <p>No notifications yet.</p>
            </div>
          ) : (
            <div className="cohorts-list">
              <div className="cohort-actions">
                <span>{unreadCount} unread</span>
                <button className="continue-btn small" onClick={handleMarkAllNotificationsRead}>
                  Mark all as read
                </button>
              </div>
              {notifications.map((notification) => (
                <div key={notification.id} className="cohort-card">
                  <div className="cohort-info">
                    <h3>{notification.title}</h3>
                    <p>{notification.message}</p>
                    <p>{new Date(notification.createdAt).toLocaleString()}</p>
                  </div>
                  {!notification.isRead ? (
                    <div className="cohort-actions">
                      <button
                        className="continue-btn small"
                        onClick={() => handleMarkNotificationRead(notification.id)}
                      >
                        Mark as read
                      </button>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dashboard-section">
          <h2>My Certificates</h2>
          {certificates.length === 0 ? (
            <div className="empty-state">
              <p>No certificates yet</p>
              <span>Complete a cohort and your certificate will appear here.</span>
            </div>
          ) : (
            <div className="cohorts-list">
              {certificates.map((certificate) => (
                <div key={certificate.id} className="cohort-card">
                  <div className="cohort-info">
                    <h3>{certificate.course?.title || 'Course'}</h3>
                    <p>{certificate.cohort?.name || 'Cohort'}</p>
                    <p>Certificate: {certificate.certificateNumber}</p>
                  </div>
                  <div className="cohort-actions">
                    <div className="next-session">
                      Issued: {new Date(certificate.issuedAt).toLocaleDateString()}
                    </div>
                    <button
                      className="continue-btn"
                      onClick={() =>
                        printCertificate({
                          certificateNumber: certificate.certificateNumber,
                          studentName: user?.name || 'Student',
                          courseTitle: certificate.course?.title || 'Course',
                          cohortName: certificate.cohort?.name || 'Cohort',
                          issuedAt: certificate.issuedAt
                        })
                      }
                    >
                      Print Certificate
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
