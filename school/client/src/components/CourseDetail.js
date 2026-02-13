import React, { useState } from 'react';
import '../styles/CourseDetail.css';
import CohortTrainingModal from './CohortTrainingModal';

const CourseDetail = ({ course, onBack, onEnroll }) => {
  const [selectedCohort, setSelectedCohort] = useState('');
  const [showCohortModal, setShowCohortModal] = useState(false);
  const [selectionError, setSelectionError] = useState('');

  const cohorts = [
    { id: 1, name: 'March 2024 Cohort', startDate: '2024-03-15', enrolled: 12, maxStudents: 25 },
    { id: 2, name: 'April 2024 Cohort', startDate: '2024-04-15', enrolled: 8, maxStudents: 25 },
    { id: 3, name: 'May 2024 Cohort', startDate: '2024-05-15', enrolled: 3, maxStudents: 25 }
  ];

  const handleEnroll = () => {
    if (!selectedCohort) {
      setSelectionError('Please select a cohort to continue.');
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
          {cohorts.map(cohort => (
            <div 
              key={cohort.id} 
              className={`cohort-card ${selectedCohort === cohort.id ? 'selected' : ''}`}
              onClick={() => {
                setSelectedCohort(cohort.id);
                setSelectionError('');
              }}
            >
              <h3>{cohort.name}</h3>
              <p>Starts: {new Date(cohort.startDate).toLocaleDateString()}</p>
              <p>Students: {cohort.enrolled}/{cohort.maxStudents}</p>
              <div className="availability">
                {cohort.enrolled < cohort.maxStudents ? 'Available' : 'Full'}
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="enroll-btn" 
          onClick={handleEnroll}
        >
          Continue to Cohort Enrollment
        </button>
        {selectionError ? <p className="cohort-selection-error">{selectionError}</p> : null}
      </div>

      <CohortTrainingModal
        isOpen={showCohortModal}
        onClose={() => setShowCohortModal(false)}
        onContinue={handleContinueEnrollment}
        courseName={course.name}
        cohortName={cohorts.find((cohort) => cohort.id === selectedCohort)?.name}
      />
    </div>
  );
};

export default CourseDetail;
