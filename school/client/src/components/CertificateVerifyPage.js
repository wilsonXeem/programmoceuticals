import React, { useCallback, useEffect, useMemo, useState } from "react";
import "../styles/Homepage.css";
import "../styles/Pages.css";
import { certificatesAPI } from "../services/api";

const formatDate = (value) => {
  if (!value) {
    return "N/A";
  }
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return "N/A";
  }
  return parsed.toLocaleDateString();
};

const CertificateVerifyPage = ({ initialCertificateNumber = "" }) => {
  const [certificateNumber, setCertificateNumber] = useState(
    initialCertificateNumber
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const normalizedInitial = useMemo(
    () => String(initialCertificateNumber || "").trim(),
    [initialCertificateNumber]
  );

  const verifyCertificate = useCallback(async (number) => {
    const lookupNumber = String(number || "").trim();
    if (!lookupNumber) {
      setError("Enter a certificate number.");
      setResult(null);
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await certificatesAPI.verify(lookupNumber);
      setResult(response);
      if (!response.verified) {
        setError(response.message || "Certificate not verified.");
      }
    } catch (requestError) {
      const responseMessage = requestError?.response?.data?.message;
      setResult(requestError?.response?.data || null);
      setError(responseMessage || "Unable to verify certificate.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!normalizedInitial) {
      return;
    }
    verifyCertificate(normalizedInitial);
  }, [normalizedInitial, verifyCertificate]);

  const certificate = result?.certificate;
  const isVerified = Boolean(result?.verified);

  return (
    <div className="homepage">
      <nav className="navbar scrolled">
        <div className="nav-container">
          <div className="nav-brand">
            <a className="nav-title" href="#/">
              ProgrammoCeuticals
            </a>
          </div>
          <div className="nav-menu">
            <a href="#/">Home</a>
            <a href="#/courses">Courses</a>
            <a href="#/certificate-verify">Certificate Verify</a>
          </div>
        </div>
      </nav>

      <main className="page-shell">
        <section className="page-hero">
          <div className="page-container">
            <h1>Certificate Verification</h1>
            <p>Verify ProgrammoCeuticals certificates by certificate number.</p>
          </div>
        </section>

        <section className="page-section">
          <div className="page-container verify-shell">
            <div className="page-card verify-card">
              <h3>Verify Certificate</h3>
              <p className="page-meta">
                Enter the certificate number exactly as issued.
              </p>
              <form
                className="verify-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  verifyCertificate(certificateNumber);
                }}
              >
                <input
                  type="text"
                  value={certificateNumber}
                  placeholder="e.g. PC-2026-123456-ABCDEF"
                  onChange={(event) => setCertificateNumber(event.target.value)}
                />
                <button className="primary-link" type="submit" disabled={loading}>
                  {loading ? "Verifying..." : "Verify"}
                </button>
              </form>
              {error ? <p className="verify-error">{error}</p> : null}
            </div>

            {result && (
              <div className="page-card verify-result">
                <div className="page-card-header">
                  <h3>{isVerified ? "Verified Certificate" : "Verification Result"}</h3>
                  <span className={`page-badge ${isVerified ? "verify-ok" : "verify-fail"}`}>
                    {isVerified ? "Valid" : "Not Valid"}
                  </span>
                </div>
                <div className="verify-grid">
                  <div>
                    <span className="page-meta">Certificate Number</span>
                    <p>{certificate?.certificateNumber || "N/A"}</p>
                  </div>
                  <div>
                    <span className="page-meta">Student</span>
                    <p>{certificate?.student?.name || "N/A"}</p>
                  </div>
                  <div>
                    <span className="page-meta">Course</span>
                    <p>{certificate?.course?.title || "N/A"}</p>
                  </div>
                  <div>
                    <span className="page-meta">Cohort</span>
                    <p>{certificate?.cohort?.name || "N/A"}</p>
                  </div>
                  <div>
                    <span className="page-meta">Issued Date</span>
                    <p>{formatDate(certificate?.issuedAt)}</p>
                  </div>
                  <div>
                    <span className="page-meta">Status</span>
                    <p>{certificate?.status || (isVerified ? "issued" : "unknown")}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CertificateVerifyPage;
