import React, { useCallback, useEffect, useMemo, useState } from 'react';
import '../styles/Homepage.css';
import '../styles/Pages.css';
import { courses as localCourses } from '../data/courses';
import { coursesAPI, cohortsAPI, progressAPI, studentAPI } from '../services/api';
import CohortTrainingModal from './CohortTrainingModal';

const MyCoursesPage = ({ courses: providedCourses, user, onBack, onResume, onUserUpdate }) => {
  const courses = providedCourses?.length ? providedCourses : localCourses;
  const [progressMap, setProgressMap] = useState({});
  const [editing, setEditing] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState(user?.interestedCourses || []);
  const [cohortsState, setCohortsState] = useState({});
  const [enrolledCohorts, setEnrolledCohorts] = useState([]);
  const [cohortApplications, setCohortApplications] = useState([]);
  const [payments, setPayments] = useState([]);
  const [paymentInstructions, setPaymentInstructions] = useState(null);
  const [paymentActionId, setPaymentActionId] = useState('');
  const [proofDrafts, setProofDrafts] = useState({});
  const [paymentStatusMessage, setPaymentStatusMessage] = useState('');
  const [processedReference, setProcessedReference] = useState('');
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
  }, [user, courses]);

  const latestPaymentByApplicationId = useMemo(() => {
    const map = new Map();
    payments.forEach((payment) => {
      const applicationId = payment.application?.id || payment.application?._id;
      if (!applicationId) {
        return;
      }
      if (!map.has(applicationId)) {
        map.set(applicationId, payment);
      }
    });
    return map;
  }, [payments]);

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
        setPaymentInstructions(response.instructions || null);
      } catch (error) {
        setPayments([]);
        setPaymentInstructions(null);
      }
    };

    if (user?.id) {
      loadPayments();
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

  useEffect(() => {
    const loadApplications = async () => {
      try {
        const response = await cohortsAPI.getMyApplications();
        setCohortApplications(response.applications || []);
      } catch (error) {
        setCohortApplications([]);
      }
    };

    if (user?.id) {
      loadApplications();
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

  const upsertPayment = useCallback((nextPayment) => {
    if (!nextPayment?.id) {
      return;
    }
    setPayments((prev) => {
      const filtered = prev.filter((payment) => payment.id !== nextPayment.id);
      return [nextPayment, ...filtered];
    });
    const linkedApplicationId =
      nextPayment.application?.id || nextPayment.application?._id;
    if (linkedApplicationId) {
      setCohortApplications((prev) =>
        prev.map((application) =>
          application.id === linkedApplicationId
            ? {
                ...application,
                paymentStatus:
                  nextPayment.status === 'confirmed'
                    ? 'confirmed'
                    : application.paymentStatus
              }
            : application
        )
      );
    }
  }, []);

  const getPaymentReferenceFromLocation = () => {
    if (typeof window === 'undefined') {
      return null;
    }

    const url = new URL(window.location.href);
    const directReference =
      url.searchParams.get('reference') || url.searchParams.get('trxref');
    if (directReference) {
      return { reference: directReference, source: 'search' };
    }

    const hash = String(window.location.hash || '');
    const queryIndex = hash.indexOf('?');
    if (queryIndex >= 0) {
      const query = hash.slice(queryIndex + 1);
      const params = new URLSearchParams(query);
      const hashReference =
        params.get('reference') || params.get('trxref');
      if (hashReference) {
        return { reference: hashReference, source: 'hash' };
      }
    }

    return null;
  };

  const clearPaymentReferenceFromLocation = (source) => {
    if (typeof window === 'undefined') {
      return;
    }

    if (source === 'search') {
      const url = new URL(window.location.href);
      url.searchParams.delete('reference');
      url.searchParams.delete('trxref');
      const next = `${url.pathname}${url.search}${url.hash}`;
      window.history.replaceState({}, '', next);
      return;
    }

    if (source === 'hash') {
      const [hashPath] = String(window.location.hash || '').split('?');
      const next = `${window.location.pathname}${window.location.search}${hashPath}`;
      window.history.replaceState({}, '', next);
    }
  };

  const verifyGatewayPayment = useCallback(
    async (reference, options = {}) => {
      if (!reference) {
        return false;
      }

      const actionKey = `verify:${reference}`;
      setPaymentActionId(actionKey);
      if (!options.silent) {
        setPaymentStatusMessage('Verifying payment...');
      }
      try {
        const response = await studentAPI.verifyPayment(reference);
        if (response?.payment) {
          upsertPayment(response.payment);
        }
        if (!options.silent) {
          setPaymentStatusMessage('Payment verified successfully.');
        }
        return true;
      } catch (error) {
        if (!options.silent) {
          setPaymentStatusMessage(
            error?.response?.data?.message || 'Payment verification failed.'
          );
        }
        return false;
      } finally {
        setPaymentActionId((prev) => (prev === actionKey ? '' : prev));
      }
    },
    [upsertPayment]
  );

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    const payload = getPaymentReferenceFromLocation();
    const reference = String(payload?.reference || '').trim();
    if (!reference || reference === processedReference) {
      return;
    }

    let active = true;
    const runVerification = async () => {
      const ok = await verifyGatewayPayment(reference, { silent: false });
      if (!active) {
        return;
      }
      setProcessedReference(reference);
      clearPaymentReferenceFromLocation(payload?.source);
      if (!ok) {
        setPaymentStatusMessage(
          'Could not verify payment automatically. You can retry from the application card.'
        );
      }
    };

    runVerification();
    return () => {
      active = false;
    };
  }, [user, processedReference, verifyGatewayPayment]);

  const handleStartPayment = async (application) => {
    const applicationId = application?.id || application?._id;
    if (!applicationId) {
      return;
    }

    setPaymentActionId(`start:${applicationId}`);
    setPaymentStatusMessage('');
    try {
      const response = await studentAPI.initiatePayment({
        type: 'cohort_training',
        applicationId,
        method: 'card',
        provider: 'paystack'
      });
      const nextPayment = response?.payment;
      if (nextPayment) {
        upsertPayment(nextPayment);
      }
      if (response?.instructions) {
        setPaymentInstructions(response.instructions);
      }
      if (response?.authorization_url) {
        setPaymentStatusMessage('Redirecting to secure checkout...');
        window.location.assign(response.authorization_url);
        return;
      }
      setPaymentStatusMessage(
        response?.message || 'Unable to open payment gateway checkout.'
      );
    } catch (error) {
      setPaymentStatusMessage(
        error?.response?.data?.message || 'Could not start payment right now.'
      );
    } finally {
      setPaymentActionId('');
    }
  };

  const updateProofDraft = (paymentId, field, value) => {
    setProofDrafts((prev) => ({
      ...prev,
      [paymentId]: {
        ...(prev[paymentId] || {}),
        [field]: value
      }
    }));
  };

  const handleSubmitProof = async (payment) => {
    if (!payment?.id) {
      return;
    }

    const draft = proofDrafts[payment.id] || {};
    setPaymentActionId(`proof:${payment.id}`);
    try {
      const response = await studentAPI.submitPaymentProof(payment.id, {
        method: 'bank_transfer',
        transactionReference: draft.transactionReference || '',
        note: draft.note || ''
      });
      const updatedPayment = response?.payment;
      if (updatedPayment) {
        upsertPayment(updatedPayment);
      }
    } catch (error) {
      setPaymentStatusMessage(
        error?.response?.data?.message || 'Failed to submit payment proof.'
      );
    } finally {
      setPaymentActionId('');
    }
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
          <a href="#/certificate-verify">Verify Certificate</a>
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
            <h2>Paid cohort applications</h2>
            {paymentStatusMessage ? <p>{paymentStatusMessage}</p> : null}
            {cohortApplications.length === 0 ? (
              <p>No paid cohort applications submitted yet.</p>
            ) : (
              <div className="outline-grid">
                {cohortApplications.map((application) => (
                  <div key={application.id} className="outline-card">
                    <h3>{application.course?.title || 'Course'}</h3>
                    <p>Status: {application.status}</p>
                    <p>Payment: {application.paymentStatus}</p>
                    <p>
                      Submitted:{' '}
                      {new Date(application.createdAt).toLocaleDateString()}
                    </p>
                    {application.notes ? <p>Note: {application.notes}</p> : null}
                    {application.adminNotes ? (
                      <p>Admin note: {application.adminNotes}</p>
                    ) : null}
                    {(() => {
                      const linkedPayment = latestPaymentByApplicationId.get(
                        application.id
                      );
                      const isSubmittingProof =
                        paymentActionId === `proof:${linkedPayment?.id}`;
                      const isStartingPayment =
                        paymentActionId === `start:${application.id}`;

                      if (linkedPayment) {
                        const proofDraft = proofDrafts[linkedPayment.id] || {};
                        const isGatewayPayment =
                          linkedPayment.provider === 'paystack';
                        const isVerifyingGateway =
                          paymentActionId === `verify:${linkedPayment.reference}`;
                        return (
                          <div className="application-payment-panel">
                            <p>
                              Payment Ref: <strong>{linkedPayment.reference}</strong>
                            </p>
                            <p>
                              Amount: ₦{Number(linkedPayment.amount || 0).toLocaleString()} ({linkedPayment.status})
                            </p>
                            {isGatewayPayment ? <p>Provider: Paystack</p> : null}
                            {linkedPayment.status === 'confirmed' ? (
                              <p>Payment has been confirmed by admin.</p>
                            ) : isGatewayPayment ? (
                              <>
                                {linkedPayment.failureReason ? (
                                  <p>Failure: {linkedPayment.failureReason}</p>
                                ) : null}
                                <div className="page-actions">
                                  {linkedPayment.authorizationUrl ? (
                                    <button
                                      className="primary-link"
                                      onClick={() =>
                                        window.location.assign(linkedPayment.authorizationUrl)
                                      }
                                    >
                                      Continue to checkout
                                    </button>
                                  ) : null}
                                  <button
                                    className="outline-link"
                                    onClick={() =>
                                      verifyGatewayPayment(linkedPayment.reference)
                                    }
                                    disabled={isVerifyingGateway}
                                  >
                                    {isVerifyingGateway
                                      ? 'Verifying...'
                                      : 'Verify payment'}
                                  </button>
                                  <button
                                    className="outline-link"
                                    onClick={() => handleStartPayment(application)}
                                    disabled={isStartingPayment}
                                  >
                                    {isStartingPayment
                                      ? 'Preparing checkout...'
                                      : 'Restart checkout'}
                                  </button>
                                </div>
                              </>
                            ) : (
                              <>
                                <input
                                  type="text"
                                  placeholder="Transfer reference"
                                  value={proofDraft.transactionReference || ''}
                                  onChange={(event) =>
                                    updateProofDraft(
                                      linkedPayment.id,
                                      'transactionReference',
                                      event.target.value
                                    )
                                  }
                                />
                                <textarea
                                  placeholder="Payment note"
                                  value={proofDraft.note || ''}
                                  onChange={(event) =>
                                    updateProofDraft(
                                      linkedPayment.id,
                                      'note',
                                      event.target.value
                                    )
                                  }
                                  rows={3}
                                />
                                <button
                                  className="primary-link"
                                  onClick={() => handleSubmitProof(linkedPayment)}
                                  disabled={isSubmittingProof}
                                >
                                  {isSubmittingProof
                                    ? 'Submitting proof...'
                                    : 'Submit payment proof'}
                                </button>
                              </>
                            )}
                          </div>
                        );
                      }

                      return (
                        <button
                          className="primary-link"
                          onClick={() => handleStartPayment(application)}
                          disabled={isStartingPayment}
                        >
                          {isStartingPayment ? 'Preparing payment...' : 'Start payment'}
                        </button>
                      );
                    })()}
                  </div>
                ))}
              </div>
            )}
            {paymentInstructions ? (
              <div className="outline-card application-payment-instructions">
                <h3>Payment Instructions</h3>
                <p>Bank: {paymentInstructions.bankName}</p>
                <p>Account Name: {paymentInstructions.accountName}</p>
                <p>Account Number: {paymentInstructions.accountNumber}</p>
                <p>{paymentInstructions.note}</p>
              </div>
            ) : null}
          </div>
        </section>

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
        mode="confirm"
        courseName={pendingEnrollment?.courseName}
        cohortName={pendingEnrollment?.cohortName}
        primaryLabel="Confirm Paid Cohort Enrollment"
      />
    </div>
  );
};

export default MyCoursesPage;
