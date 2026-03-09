import React, { useEffect, useMemo, useState } from 'react';
import '../styles/CourseDetail.css';
import CohortTrainingModal from './CohortTrainingModal';
import { cohortsAPI } from '../services/api';

const CourseDetail = ({ course, user, onBack, onEnroll }) => {
  const [selectedCohort, setSelectedCohort] = useState('');
  const [showCohortModal, setShowCohortModal] = useState(false);
  const [selectionError, setSelectionError] = useState('');
  const [cohorts, setCohorts] = useState([]);
  const [loadingCohorts, setLoadingCohorts] = useState(true);
  const [loadingError, setLoadingError] = useState('');

  useEffect(() => {
    const loadCohorts = async () => {
      if (!course?._id) {
        setCohorts([]);
        setLoadingCohorts(false);
        setLoadingError('Course ID missing. Unable to load cohorts.');
        return;
      }

      setLoadingCohorts(true);
      setLoadingError('');
      try {
        const response = await cohortsAPI.getByCourse(course._id);
        setCohorts(response.cohorts || []);
      } catch (error) {
        setCohorts([]);
        setLoadingError(
          error?.response?.data?.message || 'Unable to load cohorts right now.'
        );
      } finally {
        setLoadingCohorts(false);
      }
    };

    loadCohorts();
  }, [course]);

  const selectedCohortData = useMemo(
    () => cohorts.find((cohort) => cohort._id === selectedCohort),
    [cohorts, selectedCohort]
  );

  const handleEnroll = () => {
    if (!user?.id) {
      setSelectionError('Please sign in to continue with cohort enrollment.');
      return;
    }
    if (!selectedCohort) {
      setSelectionError('Please select a cohort to continue.');
      return;
    }
    if (selectedCohortData && selectedCohortData.available_slots <= 0) {
      setSelectionError('Selected cohort is currently full.');
      return;
    }
    setSelectionError('');
    setShowCohortModal(true);
  };

  const handleContinueEnrollment = () => {
    setShowCohortModal(false);
    onEnroll(selectedCohort);
  };

  return (
    <div className="course-detail">
      <button className="back-btn" onClick={onBack}>
        ← Back to Courses
      </button>
      
      <div className="course-header">
        <div className="course-icon">
          <img src={course.icon} alt={`${course.name} logo`} />
        </div>
        <div className="course-info">
          <h1>{course.name}</h1>
          <p>{course.description}</p>
          <div className="course-meta">
            <span className="duration">{course.duration}</span>
            <span className="category">{course.category}</span>
          </div>
        </div>
      </div>

      <div className="cohorts-section">
        <h2>Instructor-Led Cohorts</h2>
        <p>Join a cohort for personalized instruction, assignments, and certification</p>
        <div className="cohorts-grid">
          {loadingCohorts ? (
            <div className="cohort-loading">Loading cohorts...</div>
          ) : loadingError ? (
            <div className="cohort-loading">{loadingError}</div>
          ) : cohorts.length === 0 ? (
            <div className="cohort-loading">No cohorts available yet for this course.</div>
          ) : (
            cohorts.map((cohort) => (
              <div
                key={cohort._id}
                className={`cohort-card ${selectedCohort === cohort._id ? 'selected' : ''} ${
                  cohort.available_slots <= 0 ? 'full' : ''
                }`}
                onClick={() => {
                  setSelectedCohort(cohort._id);
                  setSelectionError('');
                }}
              >
                <h3>{cohort.name}</h3>
                <p>Starts: {new Date(cohort.start_date).toLocaleDateString()}</p>
                <p>
                  Students: {cohort.enrollment_count}/{cohort.max_students}
                </p>
                <p>Instructor: {cohort.instructor || 'ProgrammoCeuticals Faculty'}</p>
                <p>
                  Schedule: {cohort.schedule?.days_per_week || 3} days/week ·{' '}
                  {cohort.schedule?.hours_per_session || 2}h ·{' '}
                  {cohort.schedule?.time_slot || '6:00 PM WAT'}
                </p>
                <div className="availability">
                  {cohort.available_slots > 0
                    ? `${cohort.available_slots} slots available`
                    : 'Cohort full'}
                </div>
              </div>
            ))
          )}
        </div>
        
        <button 
          className="enroll-btn" 
          onClick={handleEnroll}
          disabled={loadingCohorts || cohorts.length === 0}
        >
          Continue to Cohort Enrollment
        </button>
        {selectionError ? <p className="cohort-selection-error">{selectionError}</p> : null}
      </div>

      <CohortTrainingModal
        isOpen={showCohortModal}
        onClose={() => setShowCohortModal(false)}
        onContinue={handleContinueEnrollment}
        mode="confirm"
        courseName={course.name}
        cohortName={selectedCohortData?.name}
        primaryLabel="Confirm Cohort Enrollment"
      />
    </div>
  );
};

export default CourseDetail;
