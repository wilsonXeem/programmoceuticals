import React, { useEffect, useMemo, useState } from 'react';
import '../styles/AdminDashboard.css';
import { adminAPI } from '../services/api';
import { printCertificate } from '../utils/certificatePrint';

const defaultCourseForm = {
  title: '',
  slug: '',
  category: 'programming',
  level: 'Beginner',
  durationWeeks: 12,
  color: '#0b5ed7',
  iconKey: '',
  previewPercent: 20,
  sortOrder: 100,
  description: '',
  objectives: '',
  outline: '',
  isPublished: true
};

const defaultCohortForm = {
  courseId: '',
  name: '',
  startDate: '',
  durationWeeks: 12,
  maxStudents: 25,
  instructor: 'ProgrammoCeuticals Faculty',
  daysPerWeek: 3,
  hoursPerSession: 2,
  timeSlot: '6:00 PM WAT',
  status: 'upcoming'
};

const defaultEnrollmentForm = {
  cohortId: '',
  userId: ''
};

const listToText = (items) => {
  if (!Array.isArray(items)) {
    return '';
  }
  return items.join('\n');
};

const toCourseForm = (course) => ({
  title: course.title || '',
  slug: course.slug || '',
  category: course.category || 'programming',
  level: course.level || 'Beginner',
  durationWeeks: course.duration_weeks || 12,
  color: course.color || '#0b5ed7',
  iconKey: course.icon_key || '',
  previewPercent: course.preview_percent || 20,
  sortOrder: course.sort_order || 100,
  description: course.description || '',
  objectives: listToText(course.objectives),
  outline: listToText(course.outline),
  isPublished: course.is_published !== false
});

const AdminDashboard = ({ user, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const [overview, setOverview] = useState(null);
  const [courses, setCourses] = useState([]);
  const [cohorts, setCohorts] = useState([]);
  const [students, setStudents] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [cohortApplications, setCohortApplications] = useState([]);
  const [payments, setPayments] = useState([]);

  const [courseForm, setCourseForm] = useState(defaultCourseForm);
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [cohortForm, setCohortForm] = useState(defaultCohortForm);
  const [enrollmentForm, setEnrollmentForm] = useState(defaultEnrollmentForm);

  const completedEnrollments = useMemo(() => {
    return cohorts.flatMap((cohort) =>
      (cohort.enrollments || [])
        .filter((enrollment) => enrollment.status === 'completed')
        .map((enrollment) => ({ cohort, enrollment }))
    );
  }, [cohorts]);
  const certificateByEnrollmentId = useMemo(() => {
    const map = new Map();
    certificates.forEach((certificate) => {
      const enrollmentId =
        certificate.enrollmentId?._id ||
        certificate.enrollmentId?.id ||
        certificate.enrollmentId;
      if (enrollmentId) {
        map.set(String(enrollmentId), certificate);
      }
    });
    return map;
  }, [certificates]);

  const loadAdminData = async () => {
    setLoading(true);
    setError('');
    try {
      const [
        overviewResponse,
        coursesResponse,
        cohortsResponse,
        studentsResponse,
        certificatesResponse,
        applicationsResponse,
        paymentsResponse
      ] =
        await Promise.all([
          adminAPI.getOverview(),
          adminAPI.getCourses(),
          adminAPI.getCohorts(),
          adminAPI.getStudents(),
          adminAPI.getCertificates(),
          adminAPI.getCohortApplications(),
          adminAPI.getPayments()
        ]);
      setOverview(overviewResponse.overview || null);
      setCourses(coursesResponse.courses || []);
      setCohorts(cohortsResponse.cohorts || []);
      setStudents(studentsResponse.students || []);
      setCertificates(certificatesResponse.certificates || []);
      setCohortApplications(applicationsResponse.applications || []);
      setPayments(paymentsResponse.payments || []);
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message || 'Unable to load admin data.'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAdminData();
  }, []);

  const handleCourseFormChange = (event) => {
    const { name, value, type, checked } = event.target;
    setCourseForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCohortFormChange = (event) => {
    const { name, value } = event.target;
    setCohortForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnrollmentFormChange = (event) => {
    const { name, value } = event.target;
    setEnrollmentForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetCourseForm = () => {
    setCourseForm(defaultCourseForm);
    setEditingCourseId(null);
  };

  const handleEditCourse = (course) => {
    setCourseForm(toCourseForm(course));
    setEditingCourseId(course._id);
    setActiveTab('courses');
  };

  const handleCourseSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError('');
    setNotice('');
    try {
      const payload = {
        ...courseForm,
        durationWeeks: Number(courseForm.durationWeeks),
        previewPercent: Number(courseForm.previewPercent),
        sortOrder: Number(courseForm.sortOrder)
      };

      if (editingCourseId) {
        await adminAPI.updateCourse(editingCourseId, payload);
        setNotice('Course updated.');
      } else {
        await adminAPI.createCourse(payload);
        setNotice('Course created.');
      }
      resetCourseForm();
      await loadAdminData();
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message || 'Unable to save course.'
      );
    } finally {
      setSaving(false);
    }
  };

  const handleTogglePublish = async (course) => {
    setSaving(true);
    setError('');
    setNotice('');
    try {
      if (course.is_published) {
        await adminAPI.unpublishCourse(course._id);
        setNotice('Course unpublished.');
      } else {
        await adminAPI.publishCourse(course._id);
        setNotice('Course published.');
      }
      await loadAdminData();
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message ||
          'Unable to update course status.'
      );
    } finally {
      setSaving(false);
    }
  };

  const handleCohortSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError('');
    setNotice('');
    try {
      await adminAPI.createCohort({
        ...cohortForm,
        durationWeeks: Number(cohortForm.durationWeeks),
        maxStudents: Number(cohortForm.maxStudents),
        daysPerWeek: Number(cohortForm.daysPerWeek),
        hoursPerSession: Number(cohortForm.hoursPerSession)
      });
      setCohortForm(defaultCohortForm);
      setNotice('Cohort created.');
      await loadAdminData();
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message || 'Unable to create cohort.'
      );
    } finally {
      setSaving(false);
    }
  };

  const handleEnrollStudent = async (event) => {
    event.preventDefault();
    if (!enrollmentForm.cohortId || !enrollmentForm.userId) {
      setError('Select a cohort and student to enroll.');
      return;
    }
    setSaving(true);
    setError('');
    setNotice('');
    try {
      await adminAPI.enrollStudent(enrollmentForm.cohortId, {
        userId: enrollmentForm.userId
      });
      setEnrollmentForm(defaultEnrollmentForm);
      setNotice('Student enrolled.');
      await loadAdminData();
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message || 'Unable to enroll student.'
      );
    } finally {
      setSaving(false);
    }
  };

  const handleEnrollmentStatusChange = async (enrollmentId, status) => {
    setSaving(true);
    setError('');
    setNotice('');
    try {
      await adminAPI.updateEnrollmentStatus(enrollmentId, status);
      setNotice('Enrollment status updated.');
      await loadAdminData();
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message ||
          'Unable to update enrollment status.'
      );
    } finally {
      setSaving(false);
    }
  };

  const downloadCertificateFile = ({
    certificateNumber,
    studentName,
    courseTitle,
    cohortName,
    issuedAt
  }) => {
    const opened = printCertificate({
      certificateNumber,
      studentName,
      courseTitle,
      cohortName,
      issuedAt
    });
    if (!opened) {
      setNotice(
        'Popup blocked by browser. Allow popups to print/save certificate PDF.'
      );
    }
  };

  const generateCertificate = async ({ cohort, enrollment, issuedCertificate }) => {
    const studentName =
      issuedCertificate?.student?.name ||
      enrollment.user?.name ||
      'Student';
    const courseTitle =
      issuedCertificate?.course?.title ||
      cohort.course_id?.title ||
      'Course';
    const cohortName =
      issuedCertificate?.cohort?.name ||
      cohort.name ||
      'Cohort';

    if (issuedCertificate) {
      downloadCertificateFile({
        certificateNumber: issuedCertificate.certificateNumber,
        studentName,
        courseTitle,
        cohortName,
        issuedAt: issuedCertificate.issuedAt
      });
      return;
    }

    setSaving(true);
    setError('');
    setNotice('');
    try {
      const response = await adminAPI.issueCertificate(enrollment._id);
      const issued = response?.certificate;
      if (!issued) {
        throw new Error('Certificate issuance failed.');
      }

      setCertificates((prev) => {
        const next = prev.filter((item) => item._id !== issued._id);
        return [issued, ...next];
      });
      setNotice(`Certificate ${issued.certificateNumber} issued.`);
      downloadCertificateFile({
        certificateNumber: issued.certificateNumber,
        studentName: issued.student?.name || studentName,
        courseTitle: issued.course?.title || courseTitle,
        cohortName: issued.cohort?.name || cohortName,
        issuedAt: issued.issuedAt
      });
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message ||
          requestError?.message ||
          'Unable to generate certificate.'
      );
    } finally {
      setSaving(false);
    }
  };

  const handleCohortApplicationUpdate = async (applicationId, payload) => {
    setSaving(true);
    setError('');
    setNotice('');
    try {
      const response = await adminAPI.updateCohortApplication(
        applicationId,
        payload
      );
      const updated = response?.application;
      if (updated) {
        setCohortApplications((prev) =>
          prev.map((item) => (item._id === updated._id ? updated : item))
        );
      }
      setNotice('Cohort application updated.');
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message ||
          'Unable to update cohort application.'
      );
    } finally {
      setSaving(false);
    }
  };

  const handlePaymentUpdate = async (paymentId, payload) => {
    setSaving(true);
    setError('');
    setNotice('');
    try {
      const response = await adminAPI.updatePayment(paymentId, payload);
      const updated = response?.payment;
      if (updated) {
        setPayments((prev) =>
          prev.map((payment) => (payment._id === updated._id ? updated : payment))
        );
      }
      setNotice('Payment updated.');
      await loadAdminData();
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message || 'Unable to update payment.'
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="admin-dashboard">
        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <p>Loading admin tools...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div className="admin-header-top">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage courses, cohorts, enrollments, and certificates.</p>
          </div>
          <button className="admin-secondary-btn" onClick={onBack}>
            Back to home
          </button>
        </div>
        <p className="admin-user-meta">Signed in as {user?.name || 'Admin'}</p>
      </div>

      {error ? <div className="admin-alert admin-alert-error">{error}</div> : null}
      {notice ? <div className="admin-alert admin-alert-success">{notice}</div> : null}

      <div className="admin-tabs">
        <button
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={activeTab === 'courses' ? 'active' : ''}
          onClick={() => setActiveTab('courses')}
        >
          Courses
        </button>
        <button
          className={activeTab === 'cohorts' ? 'active' : ''}
          onClick={() => setActiveTab('cohorts')}
        >
          Cohorts
        </button>
        <button
          className={activeTab === 'applications' ? 'active' : ''}
          onClick={() => setActiveTab('applications')}
        >
          Applications
        </button>
        <button
          className={activeTab === 'payments' ? 'active' : ''}
          onClick={() => setActiveTab('payments')}
        >
          Payments
        </button>
        <button
          className={activeTab === 'certificates' ? 'active' : ''}
          onClick={() => setActiveTab('certificates')}
        >
          Certificates
        </button>
      </div>

      {activeTab === 'overview' && (
        <section className="admin-panel">
          <h2>Platform Summary</h2>
          <div className="admin-stats-grid">
            <article className="admin-stat-card">
              <h3>{overview?.totalStudents || 0}</h3>
              <p>Students</p>
            </article>
            <article className="admin-stat-card">
              <h3>{overview?.totalCourses || 0}</h3>
              <p>Total courses</p>
            </article>
            <article className="admin-stat-card">
              <h3>{overview?.publishedCourses || 0}</h3>
              <p>Published courses</p>
            </article>
            <article className="admin-stat-card">
              <h3>{overview?.cohorts?.active || 0}</h3>
              <p>Active cohorts</p>
            </article>
            <article className="admin-stat-card">
              <h3>{overview?.cohorts?.upcoming || 0}</h3>
              <p>Upcoming cohorts</p>
            </article>
            <article className="admin-stat-card">
              <h3>{overview?.totalEnrollments || 0}</h3>
              <p>Total enrollments</p>
            </article>
            <article className="admin-stat-card">
              <h3>{overview?.cohortApplications?.open || 0}</h3>
              <p>Open applications</p>
            </article>
            <article className="admin-stat-card">
              <h3>{overview?.payments?.pendingReview || 0}</h3>
              <p>Payments pending review</p>
            </article>
          </div>
          <div className="admin-summary-row">
            <div className="admin-summary-card">
              <h3>Students</h3>
              <p>{students.length} registered learners.</p>
            </div>
            <div className="admin-summary-card">
              <h3>Cohorts</h3>
              <p>{cohorts.length} cohorts available for management.</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'courses' && (
        <section className="admin-panel">
          <h2>{editingCourseId ? 'Edit Course' : 'Create Course'}</h2>
          <form className="admin-form" onSubmit={handleCourseSubmit}>
            <div className="admin-form-grid">
              <input
                name="title"
                value={courseForm.title}
                onChange={handleCourseFormChange}
                placeholder="Course title"
                required
              />
              <input
                name="slug"
                value={courseForm.slug}
                onChange={handleCourseFormChange}
                placeholder="Slug (optional)"
              />
              <select
                name="category"
                value={courseForm.category}
                onChange={handleCourseFormChange}
              >
                <option value="programming">Programming</option>
                <option value="basic">Basic Skills</option>
              </select>
              <select
                name="level"
                value={courseForm.level}
                onChange={handleCourseFormChange}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              <input
                type="number"
                name="durationWeeks"
                value={courseForm.durationWeeks}
                min="1"
                max="52"
                onChange={handleCourseFormChange}
                placeholder="Duration (weeks)"
              />
              <input
                type="number"
                name="previewPercent"
                value={courseForm.previewPercent}
                min="1"
                max="100"
                onChange={handleCourseFormChange}
                placeholder="Preview percent"
              />
              <input
                type="number"
                name="sortOrder"
                value={courseForm.sortOrder}
                min="1"
                onChange={handleCourseFormChange}
                placeholder="Sort order"
              />
              <input
                name="color"
                value={courseForm.color}
                onChange={handleCourseFormChange}
                placeholder="#0b5ed7"
              />
              <input
                name="iconKey"
                value={courseForm.iconKey}
                onChange={handleCourseFormChange}
                placeholder="Icon key"
              />
            </div>
            <textarea
              name="description"
              value={courseForm.description}
              onChange={handleCourseFormChange}
              placeholder="Course description"
              required
            />
            <div className="admin-form-grid">
              <textarea
                name="objectives"
                value={courseForm.objectives}
                onChange={handleCourseFormChange}
                placeholder="Objectives (one per line)"
              />
              <textarea
                name="outline"
                value={courseForm.outline}
                onChange={handleCourseFormChange}
                placeholder="Outline (one per line)"
              />
            </div>
            <label className="admin-checkbox-row">
              <input
                type="checkbox"
                name="isPublished"
                checked={courseForm.isPublished}
                onChange={handleCourseFormChange}
              />
              Publish immediately
            </label>
            <div className="admin-actions-row">
              <button className="admin-primary-btn" type="submit" disabled={saving}>
                {saving
                  ? 'Saving...'
                  : editingCourseId
                  ? 'Update course'
                  : 'Create course'}
              </button>
              {editingCourseId ? (
                <button
                  className="admin-secondary-btn"
                  type="button"
                  onClick={resetCourseForm}
                >
                  Cancel edit
                </button>
              ) : null}
            </div>
          </form>

          <h2>Course Catalog</h2>
          <div className="admin-list-grid">
            {courses.map((course) => (
              <article key={course._id} className="admin-card">
                <div className="admin-card-header">
                  <h3>{course.title}</h3>
                  <span
                    className={`admin-pill ${
                      course.is_published ? 'published' : 'unpublished'
                    }`}
                  >
                    {course.is_published ? 'Published' : 'Hidden'}
                  </span>
                </div>
                <p>{course.description}</p>
                <p>
                  {course.level} · {course.duration_weeks || 12} weeks · Preview{' '}
                  {course.preview_percent || 20}%
                </p>
                <div className="admin-actions-row">
                  <button
                    className="admin-secondary-btn"
                    onClick={() => handleEditCourse(course)}
                  >
                    Edit
                  </button>
                  <button
                    className="admin-secondary-btn"
                    onClick={() => handleTogglePublish(course)}
                    disabled={saving}
                  >
                    {course.is_published ? 'Unpublish' : 'Publish'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'cohorts' && (
        <section className="admin-panel">
          <h2>Create Cohort</h2>
          <form className="admin-form" onSubmit={handleCohortSubmit}>
            <div className="admin-form-grid">
              <select
                name="courseId"
                value={cohortForm.courseId}
                onChange={handleCohortFormChange}
                required
              >
                <option value="">Select course</option>
                {courses.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.title}
                  </option>
                ))}
              </select>
              <input
                name="name"
                value={cohortForm.name}
                onChange={handleCohortFormChange}
                placeholder="Cohort name"
                required
              />
              <input
                type="date"
                name="startDate"
                value={cohortForm.startDate}
                onChange={handleCohortFormChange}
                required
              />
              <input
                type="number"
                name="durationWeeks"
                value={cohortForm.durationWeeks}
                min="1"
                max="52"
                onChange={handleCohortFormChange}
              />
              <input
                type="number"
                name="maxStudents"
                value={cohortForm.maxStudents}
                min="1"
                max="500"
                onChange={handleCohortFormChange}
              />
              <input
                name="instructor"
                value={cohortForm.instructor}
                onChange={handleCohortFormChange}
                placeholder="Instructor"
              />
              <input
                type="number"
                name="daysPerWeek"
                value={cohortForm.daysPerWeek}
                min="1"
                max="7"
                onChange={handleCohortFormChange}
              />
              <input
                type="number"
                name="hoursPerSession"
                value={cohortForm.hoursPerSession}
                min="1"
                max="12"
                onChange={handleCohortFormChange}
              />
              <input
                name="timeSlot"
                value={cohortForm.timeSlot}
                onChange={handleCohortFormChange}
                placeholder="6:00 PM WAT"
              />
              <select
                name="status"
                value={cohortForm.status}
                onChange={handleCohortFormChange}
              >
                <option value="upcoming">Upcoming</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="admin-actions-row">
              <button className="admin-primary-btn" type="submit" disabled={saving}>
                {saving ? 'Saving...' : 'Create cohort'}
              </button>
            </div>
          </form>

          <h2>Manual Enrollment</h2>
          <form className="admin-form" onSubmit={handleEnrollStudent}>
            <div className="admin-form-grid">
              <select
                name="cohortId"
                value={enrollmentForm.cohortId}
                onChange={handleEnrollmentFormChange}
                required
              >
                <option value="">Select cohort</option>
                {cohorts.map((cohort) => (
                  <option key={cohort._id} value={cohort._id}>
                    {cohort.course_id?.title || 'Course'} - {cohort.name}
                  </option>
                ))}
              </select>
              <select
                name="userId"
                value={enrollmentForm.userId}
                onChange={handleEnrollmentFormChange}
                required
              >
                <option value="">Select student</option>
                {students.map((student) => (
                  <option key={student._id} value={student._id}>
                    {student.name} ({student.email})
                  </option>
                ))}
              </select>
            </div>
            <div className="admin-actions-row">
              <button className="admin-primary-btn" type="submit" disabled={saving}>
                {saving ? 'Saving...' : 'Enroll student'}
              </button>
            </div>
          </form>

          <h2>Cohort Management</h2>
          <div className="admin-list-grid">
            {cohorts.map((cohort) => (
              <article key={cohort._id} className="admin-card">
                <div className="admin-card-header">
                  <h3>
                    {cohort.course_id?.title || 'Course'} - {cohort.name}
                  </h3>
                  <span className="admin-pill">{cohort.status}</span>
                </div>
                <p>
                  Starts {new Date(cohort.start_date).toLocaleDateString()} ·{' '}
                  {cohort.schedule?.days_per_week || 3} days/week ·{' '}
                  {cohort.schedule?.hours_per_session || 2}h/session
                </p>
                <p>
                  Instructor: {cohort.instructor} · Students: {cohort.enrollment_count}/
                  {cohort.max_students}
                </p>
                <div className="students-list">
                  <h4>Enrollments</h4>
                  {cohort.enrollments?.length === 0 ? (
                    <p>No students enrolled yet.</p>
                  ) : (
                    cohort.enrollments.map((enrollment) => (
                      <div key={enrollment._id} className="student-row">
                        <span>{enrollment.user?.name || 'Student'}</span>
                        <span>{enrollment.user?.email || 'No email'}</span>
                        <select
                          value={enrollment.status}
                          onChange={(event) =>
                            handleEnrollmentStatusChange(
                              enrollment._id,
                              event.target.value
                            )
                          }
                        >
                          <option value="active">active</option>
                          <option value="completed">completed</option>
                          <option value="dropped">dropped</option>
                        </select>
                      </div>
                    ))
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'applications' && (
        <section className="admin-panel">
          <h2>Cohort Applications</h2>
          {cohortApplications.length === 0 ? (
            <p>No paid cohort applications yet.</p>
          ) : (
            <div className="admin-list-grid">
              {cohortApplications.map((application) => (
                <article key={application._id} className="admin-card">
                  <div className="admin-card-header">
                    <h3>{application.fullName}</h3>
                    <span className="admin-pill">{application.status}</span>
                  </div>
                  <p>
                    {application.email}
                    {application.phone ? ` · ${application.phone}` : ''}
                  </p>
                  <p>
                    {application.course?.title || 'Course'}
                    {application.cohort?.name
                      ? ` · ${application.cohort.name}`
                      : ''}
                  </p>
                  <p>
                    Submitted:{' '}
                    {new Date(application.createdAt).toLocaleString()}
                  </p>
                  {application.notes ? (
                    <p>Student note: {application.notes}</p>
                  ) : null}
                  {application.adminNotes ? (
                    <p>Admin note: {application.adminNotes}</p>
                  ) : null}
                  <div className="admin-actions-row">
                    <select
                      value={application.status}
                      onChange={(event) =>
                        handleCohortApplicationUpdate(application._id, {
                          status: event.target.value
                        })
                      }
                      disabled={saving}
                    >
                      <option value="new">new</option>
                      <option value="contacted">contacted</option>
                      <option value="admitted">admitted</option>
                      <option value="closed">closed</option>
                    </select>
                    <select
                      value={application.paymentStatus}
                      onChange={(event) =>
                        handleCohortApplicationUpdate(application._id, {
                          paymentStatus: event.target.value
                        })
                      }
                      disabled={saving}
                    >
                      <option value="pending">payment pending</option>
                      <option value="confirmed">payment confirmed</option>
                      <option value="waived">payment waived</option>
                    </select>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      )}

      {activeTab === 'payments' && (
        <section className="admin-panel">
          <h2>Payments</h2>
          {payments.length === 0 ? (
            <p>No payment records available.</p>
          ) : (
            <div className="admin-list-grid">
              {payments.map((payment) => (
                <article key={payment._id} className="admin-card">
                  <div className="admin-card-header">
                    <h3>{payment.user?.name || 'Student'}</h3>
                    <span className="admin-pill">{payment.status}</span>
                  </div>
                  <p>{payment.user?.email}</p>
                  <p>
                    {payment.type} · ₦{Number(payment.amount || 0).toLocaleString()} · {payment.reference}
                  </p>
                  <p>
                    Provider: {payment.provider || 'manual'}
                    {payment.providerStatus ? ` · ${payment.providerStatus}` : ''}
                  </p>
                  {payment.application ? (
                    <p>
                      {payment.application.courseTitle || 'Course'}
                      {payment.application.cohortName
                        ? ` · ${payment.application.cohortName}`
                        : ''}
                    </p>
                  ) : null}
                  {payment.failureReason ? <p>Failure: {payment.failureReason}</p> : null}
                  {payment.proofReference ? (
                    <p>Proof ref: {payment.proofReference}</p>
                  ) : null}
                  {payment.proofNote ? <p>Proof note: {payment.proofNote}</p> : null}
                  <div className="admin-actions-row">
                    <select
                      value={payment.status}
                      onChange={(event) =>
                        handlePaymentUpdate(payment._id, {
                          status: event.target.value
                        })
                      }
                      disabled={saving}
                    >
                      <option value="initiated">initiated</option>
                      <option value="pending_review">pending_review</option>
                      <option value="confirmed">confirmed</option>
                      <option value="failed">failed</option>
                      <option value="refunded">refunded</option>
                    </select>
                    <button
                      className="admin-secondary-btn"
                      onClick={() =>
                        handlePaymentUpdate(payment._id, { status: 'confirmed' })
                      }
                      disabled={saving}
                    >
                      Confirm
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      )}

      {activeTab === 'certificates' && (
        <section className="admin-panel">
          <h2>Certificates</h2>
          {completedEnrollments.length === 0 ? (
            <p>
              No completed enrollments yet. Mark cohort enrollments as completed to
              unlock certificate generation.
            </p>
          ) : (
            <div className="admin-list-grid">
              {completedEnrollments.map(({ cohort, enrollment }) => {
                const issuedCertificate = certificateByEnrollmentId.get(
                  String(enrollment._id)
                );
                return (
                  <article
                    key={enrollment._id}
                    className="admin-card certificate-card"
                  >
                    <h3>{enrollment.user?.name || 'Student'}</h3>
                    <p>{cohort.course_id?.title || 'Course'}</p>
                    <p>{cohort.name}</p>
                    {issuedCertificate ? (
                      <p>Certificate: {issuedCertificate.certificateNumber}</p>
                    ) : (
                      <p>Certificate: Not issued</p>
                    )}
                    <button
                      className="admin-primary-btn"
                      disabled={saving}
                      onClick={() =>
                        generateCertificate({
                          cohort,
                          enrollment,
                          issuedCertificate
                        })
                      }
                    >
                      {issuedCertificate ? 'Download certificate' : 'Generate certificate'}
                    </button>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default AdminDashboard;
