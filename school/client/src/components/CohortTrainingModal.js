import React, { useEffect, useMemo, useState } from "react";
import "../styles/CohortTrainingModal.css";
import { cohortsAPI } from "../services/api";

const slugify = (value) =>
  String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const CohortTrainingModal = ({
  isOpen,
  onClose,
  onContinue,
  onSubmitted,
  user = null,
  courseName,
  courseSlug,
  courseId,
  cohortId,
  mode = "application",
  applicationType = "cohort_training",
  cohortName,
  primaryLabel = "Continue",
  secondaryLabel = "Not now",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredStartDate: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submittedApplication, setSubmittedApplication] = useState(null);

  const normalizedCourseSlug = useMemo(() => {
    if (courseSlug) {
      return slugify(courseSlug);
    }
    if (courseName) {
      return slugify(courseName);
    }
    return "";
  }, [courseSlug, courseName]);

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

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setSubmitting(false);
    setSubmitError("");
    setSubmittedApplication(null);
    setFormData({
      fullName: user?.name || "",
      email: user?.email || "",
      phone: "",
      preferredStartDate: "",
      notes: courseName ? `Interested in ${courseName}.` : "",
    });
  }, [isOpen, user, courseName]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitApplication = async (event) => {
    event.preventDefault();
    setSubmitError("");
    setSubmitting(true);

    try {
      const response = await cohortsAPI.submitApplication({
        applicationType,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        preferredStartDate: formData.preferredStartDate || undefined,
        notes: formData.notes,
        sourcePage:
          typeof window !== "undefined" ? window.location.hash || "#/" : "web",
        courseId: courseId || undefined,
        courseSlug: normalizedCourseSlug || undefined,
        cohortId: cohortId || undefined,
      });

      setSubmittedApplication(response?.application || {});
      if (onSubmitted) {
        onSubmitted(response?.application || null);
      }
    } catch (error) {
      setSubmitError(
        error?.response?.data?.message || "Unable to submit your application."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  if (mode === "confirm") {
    return (
      <div className="cohort-modal-overlay" onClick={onClose}>
        <div
          className="cohort-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Cohort training details"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            className="cohort-modal-close"
            onClick={onClose}
            aria-label="Close cohort popup"
          >
            ×
          </button>

          <span className="cohort-modal-badge">Paid Cohort Training</span>
          <h2>
            {courseName
              ? `Join ${courseName} Cohort`
              : "Join Instructor-Led Cohort Training"}
          </h2>
          <p>
            Self-paced course materials are free. Instructor-led cohorts are paid
            and include mentoring, structured assignments, and progress reviews.
          </p>

          {cohortName ? (
            <p className="cohort-modal-cohort">Selected: {cohortName}</p>
          ) : null}

          <div className="cohort-modal-actions">
            <button
              type="button"
              className="cohort-modal-primary"
              onClick={onContinue || onClose}
            >
              {primaryLabel}
            </button>
            <button
              type="button"
              className="cohort-modal-secondary"
              onClick={onClose}
            >
              {secondaryLabel}
            </button>
          </div>
        </div>
      </div>
    );
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
        {submitError ? <p className="cohort-modal-error">{submitError}</p> : null}

        {submittedApplication ? (
          <div className="cohort-modal-success">
            <p>
              Application submitted. Admissions will contact you with next steps.
            </p>
            <div className="cohort-modal-actions">
              <button
                type="button"
                className="cohort-modal-primary"
                onClick={onContinue || onClose}
              >
                {primaryLabel}
              </button>
              <button
                type="button"
                className="cohort-modal-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form className="cohort-modal-form" onSubmit={submitApplication}>
            <label>
              Full name
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email address
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Phone number
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Preferred start date
              <input
                type="date"
                name="preferredStartDate"
                value={formData.preferredStartDate}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Notes
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
              />
            </label>

            <div className="cohort-modal-actions">
              <button
                type="submit"
                className="cohort-modal-primary"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
              <button
                type="button"
                className="cohort-modal-secondary"
                onClick={onClose}
                disabled={submitting}
              >
                {secondaryLabel}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CohortTrainingModal;
