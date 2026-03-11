import { useEffect, useMemo, useState } from "react";
import { apiRequest } from "./api";

const DEFAULT_STATUSES = ["SUBMITTED", "IN_REVIEW", "APPROVED", "REJECTED", "RETURNED"];
const DEFAULT_CHECK_VALUES = ["YES", "NO", "PENDING"];

function normalizeTemplate(template) {
  if (!template) {
    return null;
  }

  const id = template.id || template.templateId || template._id?.toString?.() || "";
  return {
    ...template,
    id,
    templateId: template.templateId || id,
    documentsRequired: Array.isArray(template.documentsRequired) ? template.documentsRequired : [],
    productSample: Array.isArray(template.productSample) ? template.productSample : [],
  };
}

function normalizeSubmission(submission) {
  if (!submission) {
    return null;
  }

  const id = submission.id || submission._id?.toString?.() || "";
  const templateSnapshot = normalizeTemplate(submission.templateSnapshot);

  return {
    ...submission,
    id,
    templateId: submission.templateId || templateSnapshot?.templateId || "",
    templateSnapshot,
    documentsChecklist: Array.isArray(submission.documentsChecklist)
      ? submission.documentsChecklist
      : [],
    productSampleAnswers: submission.productSampleAnswers || {},
  };
}

function buildDefaultSampleAnswers(template, previous = {}) {
  const next = {};

  if (!template) {
    return next;
  }

  for (const item of template.productSample) {
    next[item.code] = previous[item.code] || "";
  }

  return next;
}

function toStatusLabel(status) {
  if (!status) {
    return "";
  }

  return status
    .split("_")
    .map((part) => part.charAt(0) + part.slice(1).toLowerCase())
    .join(" ");
}

function formatDate(isoString) {
  if (!isoString) {
    return "";
  }

  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) {
    return isoString;
  }

  return date.toLocaleString();
}

function escapeHtml(value) {
  return `${value || ""}`
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildPrintHtml(template, submission) {
  const docsRows = template.documentsRequired
    .map((item) => {
      const entry =
        submission.documentsChecklist.find((doc) => doc.code === item.code) ||
        ({ status: "PENDING", remark: "" });

      return `
        <tr>
          <td>${item.serialNumber}</td>
          <td>${escapeHtml(item.label)}</td>
          <td>${entry.status === "YES" ? "X" : ""}</td>
          <td>${entry.status === "NO" ? "X" : ""}</td>
          <td>${escapeHtml(entry.remark || "")}</td>
        </tr>
      `;
    })
    .join("");

  const productRows = template.productSample
    .map((item) => {
      const value = submission.productSampleAnswers[item.code] || "";
      return `
        <tr>
          <td>${item.serialNumber}</td>
          <td>${escapeHtml(item.label)}</td>
          <td></td>
          <td></td>
          <td>${escapeHtml(value)}</td>
        </tr>
      `;
    })
    .join("");

  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>${escapeHtml(submission.trackingNumber)}</title>
        <style>
          * { box-sizing: border-box; }
          body { margin: 0; font-family: "Times New Roman", serif; color: #111; }
          .page { width: 210mm; min-height: 297mm; margin: 0 auto; padding: 12mm 10mm; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #1a1a1a; padding: 6px 8px; font-size: 12px; vertical-align: top; }
          .header-cell { font-weight: 700; }
          .directorate { text-align: center; margin: 10px 0 12px; font-size: 20px; font-weight: 600; }
          .section-row td { font-weight: 700; font-size: 13px; }
          .fields-row td { font-weight: 700; }
          .meta { margin-top: 10px; font-size: 11px; }
          @media print {
            .page { margin: 0; padding: 10mm 8mm; }
          }
        </style>
      </head>
      <body>
        <div class="page">
          <table>
            <tr>
              <td class="header-cell" style="width:20%">${escapeHtml(template.annexure)}</td>
              <td class="header-cell" style="width:23%">SOP Ref.No.: ${escapeHtml(template.sopRef)}</td>
              <td class="header-cell">${escapeHtml(template.title)}</td>
            </tr>
          </table>

          <div class="directorate">${escapeHtml(template.directorate)}</div>

          <table>
            <thead>
              <tr>
                <th style="width:7%">S/N</th>
                <th style="width:54%">DESCRIPTION</th>
                <th style="width:10%">YES</th>
                <th style="width:10%">NO</th>
                <th style="width:19%">REMARK</th>
              </tr>
            </thead>
            <tbody>
              <tr class="fields-row">
                <td></td>
                <td>NAME OF APPLICANT</td>
                <td></td>
                <td></td>
                <td>${escapeHtml(submission.applicantName)}</td>
              </tr>
              <tr class="fields-row">
                <td></td>
                <td>NAME OF PRODUCT</td>
                <td></td>
                <td></td>
                <td>${escapeHtml(submission.productName)}</td>
              </tr>
              <tr class="section-row">
                <td></td>
                <td colspan="4">DOCUMENTS REQUIRED</td>
              </tr>
              ${docsRows}
              <tr class="section-row">
                <td></td>
                <td colspan="4">PRODUCT SAMPLE</td>
              </tr>
              ${productRows}
            </tbody>
          </table>

          <div class="meta">
            <div><strong>Tracking No:</strong> ${escapeHtml(submission.trackingNumber)}</div>
            <div><strong>Status:</strong> ${escapeHtml(toStatusLabel(submission.status))}</div>
            <div><strong>Reviewed By:</strong> ${escapeHtml(submission.reviewedBy || "")}</div>
            <div><strong>Exported At:</strong> ${escapeHtml(formatDate(new Date().toISOString()))}</div>
          </div>
        </div>
      </body>
    </html>
  `;
}

function openPrintWindow(template, submission) {
  const printWindow = window.open("", "_blank", "width=980,height=760");
  if (!printWindow) {
    window.alert("Popup blocked. Allow popups to print/export this form.");
    return;
  }

  printWindow.document.open();
  printWindow.document.write(buildPrintHtml(template, submission));
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

export default function App() {
  const [mode, setMode] = useState("public");
  const [templates, setTemplates] = useState([]);
  const [validStatuses, setValidStatuses] = useState(DEFAULT_STATUSES);
  const [validChecklistValues, setValidChecklistValues] = useState(DEFAULT_CHECK_VALUES);
  const [selectedTemplateId, setSelectedTemplateId] = useState("");

  const [applicantName, setApplicantName] = useState("");
  const [productName, setProductName] = useState("");
  const [productSampleAnswers, setProductSampleAnswers] = useState({});
  const [clientFeedback, setClientFeedback] = useState({ type: "", message: "" });

  const [adminTemplateFilter, setAdminTemplateFilter] = useState("");
  const [adminStatusFilter, setAdminStatusFilter] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmissionId, setSelectedSubmissionId] = useState("");
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [adminFeedback, setAdminFeedback] = useState({ type: "", message: "" });
  const [isRefreshing, setIsRefreshing] = useState(false);

  const [adminReviewedBy, setAdminReviewedBy] = useState("");
  const [adminQuickStatus, setAdminQuickStatus] = useState("");
  const [adminFinalStatus, setAdminFinalStatus] = useState("SUBMITTED");
  const [adminDecisionRemark, setAdminDecisionRemark] = useState("");
  const [checklistDraft, setChecklistDraft] = useState({});

  const selectedTemplate = useMemo(
    () => templates.find((template) => template.id === selectedTemplateId) || null,
    [templates, selectedTemplateId]
  );

  useEffect(() => {
    let ignore = false;

    async function bootstrap() {
      try {
        const response = await apiRequest("/templates");
        if (ignore) {
          return;
        }

        const normalizedTemplates = Array.isArray(response.templates)
          ? response.templates.map(normalizeTemplate).filter(Boolean)
          : [];

        setTemplates(normalizedTemplates);
        setValidStatuses(
          Array.isArray(response.validStatuses) && response.validStatuses.length
            ? response.validStatuses
            : DEFAULT_STATUSES
        );
        setValidChecklistValues(
          Array.isArray(response.validChecklistValues) && response.validChecklistValues.length
            ? response.validChecklistValues
            : DEFAULT_CHECK_VALUES
        );

        if (!normalizedTemplates.length) {
          setClientFeedback({ type: "error", message: "No templates available." });
          return;
        }

        setSelectedTemplateId(normalizedTemplates[0].id);

        await refreshSubmissions("");
      } catch (error) {
        if (!ignore) {
          setClientFeedback({ type: "error", message: error.message });
        }
      }
    }

    void bootstrap();

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    setProductSampleAnswers((current) => buildDefaultSampleAnswers(selectedTemplate, current));
  }, [selectedTemplateId, selectedTemplate]);

  useEffect(() => {
    if (!selectedSubmission) {
      setChecklistDraft({});
      setAdminReviewedBy("");
      setAdminQuickStatus("");
      setAdminFinalStatus("SUBMITTED");
      setAdminDecisionRemark("");
      return;
    }

    const nextDraft = {};
    for (const item of selectedSubmission.documentsChecklist) {
      nextDraft[item.code] = {
        status: item.status || "PENDING",
        remark: item.remark || "",
      };
    }

    setChecklistDraft(nextDraft);
    setAdminReviewedBy(selectedSubmission.reviewedBy || "");
    setAdminQuickStatus("");
    setAdminFinalStatus(selectedSubmission.status || "SUBMITTED");
    setAdminDecisionRemark(selectedSubmission.decisionRemark || "");
    setAdminFeedback({ type: "", message: "" });
  }, [selectedSubmission?.id]);

  useEffect(() => {
    void refreshSubmissions(selectedSubmissionId);
  }, [adminTemplateFilter, adminStatusFilter]);

  async function refreshSubmissions(preferredSelectionId = selectedSubmissionId) {
    try {
      setIsRefreshing(true);

      const params = new URLSearchParams();
      if (adminTemplateFilter) {
        params.set("templateId", adminTemplateFilter);
      }
      if (adminStatusFilter) {
        params.set("status", adminStatusFilter);
      }

      const path = params.toString() ? `/submissions?${params.toString()}` : "/submissions";
      const response = await apiRequest(path);
      const rows = Array.isArray(response.submissions)
        ? response.submissions.map(normalizeSubmission).filter(Boolean)
        : [];

      setSubmissions(rows);

      if (preferredSelectionId && rows.some((row) => row.id === preferredSelectionId)) {
        await loadSubmissionDetail(preferredSelectionId);
      } else {
        setSelectedSubmissionId("");
        setSelectedSubmission(null);
      }
    } catch (error) {
      setAdminFeedback({ type: "error", message: error.message });
    } finally {
      setIsRefreshing(false);
    }
  }

  async function loadSubmissionDetail(id) {
    try {
      const response = await apiRequest(`/submissions/${id}`);
      const submission = normalizeSubmission(response.submission);
      setSelectedSubmissionId(submission?.id || "");
      setSelectedSubmission(submission);
    } catch (error) {
      setSelectedSubmission(null);
      setAdminFeedback({ type: "error", message: error.message });
    }
  }

  async function handleClientSubmit(event) {
    event.preventDefault();

    if (!selectedTemplate) {
      setClientFeedback({ type: "error", message: "Template not found." });
      return;
    }

    const payloadAnswers = {};
    for (const item of selectedTemplate.productSample) {
      payloadAnswers[item.code] = `${productSampleAnswers[item.code] || ""}`.trim();
    }

    const payload = {
      templateId: selectedTemplate.templateId || selectedTemplate.id,
      applicantName: applicantName.trim(),
      productName: productName.trim(),
      productSampleAnswers: payloadAnswers,
    };

    try {
      setClientFeedback({ type: "", message: "Submitting form..." });
      const response = await apiRequest("/submissions", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      setClientFeedback({
        type: "ok",
        message: `Submitted successfully. Tracking ID: ${response.submission.trackingNumber}`,
      });
      setApplicantName("");
      setProductName("");
      setProductSampleAnswers(buildDefaultSampleAnswers(selectedTemplate));
      await refreshSubmissions(selectedSubmissionId);
    } catch (error) {
      setClientFeedback({ type: "error", message: error.message });
    }
  }

  function handleSampleAnswerChange(code, value) {
    setProductSampleAnswers((current) => ({
      ...current,
      [code]: value,
    }));
  }

  async function handleChecklistSave() {
    if (!selectedSubmission || !selectedSubmission.templateSnapshot) {
      return;
    }

    const checklist = selectedSubmission.templateSnapshot.documentsRequired.map((item) => ({
      code: item.code,
      status: checklistDraft[item.code]?.status || "PENDING",
      remark: `${checklistDraft[item.code]?.remark || ""}`.trim(),
    }));

    try {
      setAdminFeedback({ type: "", message: "Saving checklist..." });
      await apiRequest(`/submissions/${selectedSubmission.id}/documents`, {
        method: "PATCH",
        body: JSON.stringify({
          checklist,
          reviewedBy: adminReviewedBy.trim(),
          status: adminQuickStatus || undefined,
        }),
      });

      setAdminFeedback({ type: "ok", message: "Checklist saved." });
      await refreshSubmissions(selectedSubmission.id);
    } catch (error) {
      setAdminFeedback({ type: "error", message: error.message });
    }
  }

  async function handleStatusSave() {
    if (!selectedSubmission) {
      return;
    }

    try {
      setAdminFeedback({ type: "", message: "Updating status..." });
      await apiRequest(`/submissions/${selectedSubmission.id}/status`, {
        method: "PATCH",
        body: JSON.stringify({
          status: adminFinalStatus,
          decisionRemark: adminDecisionRemark.trim(),
          reviewedBy: adminReviewedBy.trim(),
        }),
      });

      setAdminFeedback({ type: "ok", message: "Submission status updated." });
      await refreshSubmissions(selectedSubmission.id);
    } catch (error) {
      setAdminFeedback({ type: "error", message: error.message });
    }
  }

  async function handlePrintExport() {
    if (!selectedSubmission) {
      return;
    }

    try {
      const response = await apiRequest(`/submissions/${selectedSubmission.id}/export`);
      const template = normalizeTemplate(response.template);
      const submission = normalizeSubmission(response.submission);

      if (!template || !submission) {
        throw new Error("Invalid export payload");
      }

      openPrintWindow(template, submission);
    } catch (error) {
      setAdminFeedback({ type: "error", message: error.message });
    }
  }

  return (
    <>
      <div className="background-shape background-shape-a" />
      <div className="background-shape background-shape-b" />

      <header className="app-header">
        <div>
          <h1>Samples</h1>
          <p>Digital checklist workflow for laboratory sample receiving</p>
        </div>
        <div className="header-meta">
          <span className="pill">NAFDAC</span>
          <span className="pill pill-muted">DR&amp;RA Templates</span>
        </div>
      </header>

      <main className="app-main">
        <section className="mode-switch" aria-label="Application Modes">
          <button
            className={`mode-button ${mode === "public" ? "is-active" : ""}`}
            onClick={() => setMode("public")}
            type="button"
          >
            Client Form
          </button>
          <button
            className={`mode-button ${mode === "admin" ? "is-active" : ""}`}
            onClick={() => setMode("admin")}
            type="button"
          >
            Admin Review
          </button>
        </section>

        <section className={`mode-panel ${mode === "public" ? "" : "is-hidden"}`}>
          <div className="panel-card">
            <div className="panel-head">
              <h2>Client Submission</h2>
              <label className="inline-label" htmlFor="template-select">
                Form Type
                <select
                  id="template-select"
                  value={selectedTemplateId}
                  onChange={(event) => setSelectedTemplateId(event.target.value)}
                >
                  {templates.map((template) => (
                    <option key={template.id} value={template.id}>
                      {template.annexure} | {template.sopRef}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {selectedTemplate ? (
              <>
                <div className="template-preview">
                  <p>
                    <strong>{selectedTemplate.annexure}</strong>
                  </p>
                  <p>
                    <strong>SOP Ref.No.:</strong> {selectedTemplate.sopRef}
                  </p>
                  <p>
                    <strong>Title:</strong> {selectedTemplate.title}
                  </p>
                  <p>
                    <strong>Directorate:</strong> {selectedTemplate.directorate}
                  </p>
                </div>

                <form className="form-grid" onSubmit={handleClientSubmit}>
                  <label>
                    Name of Applicant
                    <input
                      name="applicantName"
                      type="text"
                      required
                      value={applicantName}
                      onChange={(event) => setApplicantName(event.target.value)}
                    />
                  </label>
                  <label>
                    Name of Product
                    <input
                      name="productName"
                      type="text"
                      required
                      value={productName}
                      onChange={(event) => setProductName(event.target.value)}
                    />
                  </label>

                  <section className="checklist-block">
                    <h3>Documents Required (Admin Checklist)</h3>
                    <p className="muted-text">
                      Clients do not fill this section. Admin verifies after submission.
                    </p>
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th style={{ width: "70px" }}>S/N</th>
                          <th>Description</th>
                          <th style={{ width: "140px" }}>Owner</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedTemplate.documentsRequired.map((item) => (
                          <tr key={item.code}>
                            <td>{item.serialNumber}</td>
                            <td>{item.label}</td>
                            <td>Admin Only</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </section>

                  <section className="checklist-block">
                    <h3>Product Sample (Client Section)</h3>
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th style={{ width: "70px" }}>S/N</th>
                          <th>Description</th>
                          <th style={{ width: "300px" }}>Client Input</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedTemplate.productSample.map((item) => (
                          <tr key={item.code}>
                            <td>{item.serialNumber}</td>
                            <td>{item.label}</td>
                            <td>
                              {item.inputType === "textarea" ? (
                                <textarea
                                  required={Boolean(item.required)}
                                  value={productSampleAnswers[item.code] || ""}
                                  onChange={(event) =>
                                    handleSampleAnswerChange(item.code, event.target.value)
                                  }
                                />
                              ) : (
                                <input
                                  required={Boolean(item.required)}
                                  type={item.inputType === "number" ? "number" : item.inputType || "text"}
                                  value={productSampleAnswers[item.code] || ""}
                                  onChange={(event) =>
                                    handleSampleAnswerChange(item.code, event.target.value)
                                  }
                                />
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </section>

                  <button className="primary-button" type="submit">
                    Submit Sample Form
                  </button>
                  <p className={`feedback ${clientFeedback.type || ""}`.trim()} aria-live="polite">
                    {clientFeedback.message}
                  </p>
                </form>
              </>
            ) : (
              <div className="empty-state">No templates available.</div>
            )}
          </div>
        </section>

        <section className={`mode-panel ${mode === "admin" ? "" : "is-hidden"}`}>
          <div className="panel-card">
            <div className="panel-head admin-head">
              <h2>Admin Review Console</h2>
              <div className="admin-filters">
                <label>
                  Template
                  <select
                    value={adminTemplateFilter}
                    onChange={(event) => setAdminTemplateFilter(event.target.value)}
                  >
                    <option value="">All</option>
                    {templates.map((template) => (
                      <option key={template.id} value={template.templateId || template.id}>
                        {template.annexure} | {template.sopRef}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Status
                  <select
                    value={adminStatusFilter}
                    onChange={(event) => setAdminStatusFilter(event.target.value)}
                  >
                    <option value="">All</option>
                    {validStatuses.map((status) => (
                      <option key={status} value={status}>
                        {toStatusLabel(status)}
                      </option>
                    ))}
                  </select>
                </label>
                <button
                  className="secondary-button"
                  type="button"
                  onClick={() => refreshSubmissions(selectedSubmissionId)}
                >
                  {isRefreshing ? "Refreshing..." : "Refresh"}
                </button>
              </div>
            </div>

            <div className="admin-layout">
              <aside>
                <h3>Submissions</h3>
                <ul className="submission-list">
                  {submissions.length ? (
                    submissions.map((submission) => {
                      const statusClass = `status-pill status-${(submission.status || "").toLowerCase()}`;
                      const isActive = submission.id === selectedSubmissionId;

                      return (
                        <li key={submission.id}>
                          <button
                            className={`submission-button ${isActive ? "is-active" : ""}`.trim()}
                            data-id={submission.id}
                            type="button"
                            onClick={() => loadSubmissionDetail(submission.id)}
                          >
                            <h4>{submission.trackingNumber}</h4>
                            <p>
                              {submission.applicantName} • {submission.productName}
                            </p>
                            <p>
                              {formatDate(submission.createdAt)} •{" "}
                              <span className={statusClass}>{toStatusLabel(submission.status)}</span>
                            </p>
                          </button>
                        </li>
                      );
                    })
                  ) : (
                    <li>
                      <div className="empty-state">No submissions yet.</div>
                    </li>
                  )}
                </ul>
              </aside>

              <section>
                {!selectedSubmission ? (
                  <div className="empty-state">Select a submission to review its checklist.</div>
                ) : (
                  <div className="admin-detail">
                    <div className="template-preview">
                      <p>
                        <strong>{selectedSubmission.templateSnapshot?.annexure}</strong>
                      </p>
                      <p>
                        <strong>SOP Ref.No.:</strong> {selectedSubmission.templateSnapshot?.sopRef}
                      </p>
                      <p>
                        <strong>Title:</strong> {selectedSubmission.templateSnapshot?.title}
                      </p>
                      <p>
                        <strong>Status:</strong>{" "}
                        <span
                          className={`status-pill status-${
                            (selectedSubmission.status || "").toLowerCase()
                          }`}
                        >
                          {toStatusLabel(selectedSubmission.status)}
                        </span>
                      </p>
                    </div>

                    <div className="summary-grid">
                      <div>
                        <strong>Tracking Number</strong>
                        <span>{selectedSubmission.trackingNumber}</span>
                      </div>
                      <div>
                        <strong>Created</strong>
                        <span>{formatDate(selectedSubmission.createdAt)}</span>
                      </div>
                      <div>
                        <strong>Name of Applicant</strong>
                        <span>{selectedSubmission.applicantName}</span>
                      </div>
                      <div>
                        <strong>Name of Product</strong>
                        <span>{selectedSubmission.productName}</span>
                      </div>
                    </div>

                    <section className="checklist-block">
                      <h3>Product Sample (Client Filled)</h3>
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th style={{ width: "70px" }}>S/N</th>
                            <th>Description</th>
                            <th style={{ width: "280px" }}>Client Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(selectedSubmission.templateSnapshot?.productSample || []).map((item) => (
                            <tr key={item.code}>
                              <td>{item.serialNumber}</td>
                              <td>{item.label}</td>
                              <td>{selectedSubmission.productSampleAnswers[item.code] || ""}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </section>

                    <section className="checklist-block">
                      <h3>Documents Required (Admin Checklist)</h3>
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th style={{ width: "70px" }}>S/N</th>
                            <th>Description</th>
                            <th style={{ width: "150px" }}>YES / NO / PENDING</th>
                            <th style={{ width: "260px" }}>Remark</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(selectedSubmission.templateSnapshot?.documentsRequired || []).map((item) => (
                            <tr key={item.code}>
                              <td>{item.serialNumber}</td>
                              <td>{item.label}</td>
                              <td>
                                <select
                                  value={checklistDraft[item.code]?.status || "PENDING"}
                                  onChange={(event) => {
                                    const status = event.target.value;
                                    setChecklistDraft((current) => ({
                                      ...current,
                                      [item.code]: {
                                        status,
                                        remark: current[item.code]?.remark || "",
                                      },
                                    }));
                                  }}
                                >
                                  {validChecklistValues.map((value) => (
                                    <option key={value} value={value}>
                                      {value}
                                    </option>
                                  ))}
                                </select>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={checklistDraft[item.code]?.remark || ""}
                                  onChange={(event) => {
                                    const remark = event.target.value;
                                    setChecklistDraft((current) => ({
                                      ...current,
                                      [item.code]: {
                                        status: current[item.code]?.status || "PENDING",
                                        remark,
                                      },
                                    }));
                                  }}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <div className="action-row">
                        <label>
                          Reviewed By
                          <input
                            type="text"
                            value={adminReviewedBy}
                            onChange={(event) => setAdminReviewedBy(event.target.value)}
                          />
                        </label>
                        <label>
                          Quick Status Update
                          <select
                            value={adminQuickStatus}
                            onChange={(event) => setAdminQuickStatus(event.target.value)}
                          >
                            <option value="">No change</option>
                            {validStatuses.map((status) => (
                              <option key={status} value={status}>
                                {toStatusLabel(status)}
                              </option>
                            ))}
                          </select>
                        </label>
                        <button className="primary-button" type="button" onClick={handleChecklistSave}>
                          Save Checklist
                        </button>
                      </div>
                    </section>

                    <section className="checklist-block">
                      <h3>Final Decision</h3>
                      <div className="action-row">
                        <label>
                          Submission Status
                          <select
                            value={adminFinalStatus}
                            onChange={(event) => setAdminFinalStatus(event.target.value)}
                          >
                            {validStatuses.map((status) => (
                              <option key={status} value={status}>
                                {toStatusLabel(status)}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label>
                          Decision Remark
                          <input
                            type="text"
                            value={adminDecisionRemark}
                            onChange={(event) => setAdminDecisionRemark(event.target.value)}
                          />
                        </label>
                        <button className="secondary-button" type="button" onClick={handleStatusSave}>
                          Update Status
                        </button>
                        <button className="ghost-button" type="button" onClick={handlePrintExport}>
                          Print / Export PDF
                        </button>
                      </div>
                      <p className={`feedback ${adminFeedback.type || ""}`.trim()} aria-live="polite">
                        {adminFeedback.message}
                      </p>
                    </section>
                  </div>
                )}
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
