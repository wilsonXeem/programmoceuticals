import React, { useEffect } from "react";
import "../styles/CohortTrainingModal.css";

const CohortTrainingModal = ({
  isOpen,
  onClose,
  onContinue,
  courseName,
  cohortName,
  primaryLabel = "Continue to Cohort Training",
  secondaryLabel = "Not now",
}) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="cohort-modal-overlay" onClick={onClose}>
      <div
        className="cohort-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Cohort training details"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="cohort-modal-close" onClick={onClose} aria-label="Close cohort popup">
          ×
        </button>

        <span className="cohort-modal-badge">Paid Cohort Training</span>
        <h2>
          {courseName ? `Join ${courseName} Cohort` : "Join Instructor-Led Cohort Training"}
        </h2>
        <p>
          Self-paced course materials are free. Instructor-led cohorts are paid and include mentoring,
          structured assignments, and progress reviews.
        </p>

        {cohortName ? <p className="cohort-modal-cohort">Selected: {cohortName}</p> : null}

        <div className="cohort-modal-actions">
          <button type="button" className="cohort-modal-primary" onClick={onContinue}>
            {primaryLabel}
          </button>
          <button type="button" className="cohort-modal-secondary" onClick={onClose}>
            {secondaryLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CohortTrainingModal;
