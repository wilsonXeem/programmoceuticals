import React, { useMemo, useState } from "react";
import QOSFrontPage from "./QOSFrontPage";
import QOSForm from "./QOSForm";
import "./QOSDocument.css";

const SECTION_KEYS = [
  "s1",
  "s2",
  "s3",
  "s4",
  "s5",
  "s6",
  "s7",
  "p1",
  "p2",
  "p3",
  "p4",
  "p5",
  "p6",
  "p7",
  "p8",
  "a",
  "r"
];

const SECTION_LABELS = {
  s1: "2.3.S.1 General Information",
  s2: "2.3.S.2 Manufacture",
  s3: "2.3.S.3 Characterisation",
  s4: "2.3.S.4 Control of the API",
  s5: "2.3.S.5 Reference Standards or Materials",
  s6: "2.3.S.6 Container Closure System",
  s7: "2.3.S.7 Stability",
  p1: "2.3.P.1 Description and Composition of the FPP",
  p2: "2.3.P.2 Pharmaceutical Development",
  p3: "2.3.P.3 Manufacture",
  p4: "2.3.P.4 Control of Excipients",
  p5: "2.3.P.5 Control of FPP",
  p6: "2.3.P.6 Reference Standards or Materials",
  p7: "2.3.P.7 Container Closure System",
  p8: "2.3.P.8 Stability",
  a: "2.3.A Appendices",
  r: "2.3.R Regional Information"
};

const createDefaultSectionSummaries = () =>
  SECTION_KEYS.reduce((acc, key) => {
    acc[key] = "";
    return acc;
  }, {});

const DEFAULT_FORM = {
  dossierReference: "",
  fppNonProprietary: "",
  fppProprietary: "",
  apiInns: "",
  applicantNameAddress: "",
  dosageForm: "",
  referenceNumbers: "",
  strengths: "",
  routeAdministration: "",
  proposedIndications: "",
  contactTitle: "",
  contactName: "",
  contactPhone: "",
  contactFax: "",
  contactEmail: "",
  additionalContacts: "",
  apiName: "",
  apiManufacturer: "",
  apiSubmissionOption: "full_details",
  apiEvidence: "",
  sectionSummaries: createDefaultSectionSummaries()
};

const API_OPTION_LABELS = {
  api_prequalification: "Confirmation of API Prequalification",
  cep: "Certificate of suitability to the European Pharmacopoeia (CEP)",
  apimf: "Active pharmaceutical ingredient master file (APIMF)",
  nafdac_prequalified: "Active pharmaceutical ingredient pre-qualified by NAFDAC",
  full_details: "Full details in the PD"
};

const escapeHtml = (value) =>
  String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const withBreaks = (value) => escapeHtml(value).replace(/\n/g, "<br />");

function QOSDocument({ onSaveToCompiler = null, savingToCompiler = false }) {
  const [showFrontPage, setShowFrontPage] = useState(true);
  const [formData, setFormData] = useState(DEFAULT_FORM);

  const optionLabel = useMemo(
    () => API_OPTION_LABELS[formData.apiSubmissionOption] || formData.apiSubmissionOption,
    [formData.apiSubmissionOption]
  );

  const handleFieldChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSectionChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      sectionSummaries: {
        ...prev.sectionSummaries,
        [key]: value
      }
    }));
  };

  const buildWordHtml = () => {
    const sectionRows = SECTION_KEYS.map((key) => {
      const label = SECTION_LABELS[key];
      const value = formData.sectionSummaries[key];
      return `
        <tr>
          <td style="border:1px solid #000; padding:6px; width:35%; font-weight:600; vertical-align:top;">${escapeHtml(
            label
          )}</td>
          <td style="border:1px solid #000; padding:6px; width:65%; vertical-align:top;">${withBreaks(value) || "&nbsp;"}</td>
        </tr>
      `;
    }).join("");

    return `<!doctype html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" lang="en">
<head>
  <meta charset="utf-8" />
  <title>QOS Document</title>
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>95</w:Zoom>
    </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    @page { size: A4; margin: 25.4mm 20mm; }
    body { margin:0; padding:0; font-family: "Times New Roman", serif; font-size: 12px; line-height:1.25; color:#000; }
    h1,h2,h3,h4,p { margin:0 0 8px 0; }
    table { width:100%; border-collapse:collapse; margin-bottom:12px; }
    .page-break { page-break-before: always; break-before: page; }
  </style>
</head>
<body>
  <div>
    <h2 style="text-align:center; margin-bottom:4px;">National Agency for Food &amp; Drug Administration &amp; Control (NAFDAC)</h2>
    <h2 style="text-align:center; margin-bottom:14px;">Registration &amp; Regulatory Affairs (R &amp; R) Directorate</h2>
    <h3 style="text-align:center; margin-bottom:6px;">MODULE 2.3</h3>
    <h3 style="text-align:center; margin-bottom:6px;">QUALITY OVERALL SUMMARY</h3>
    <h3 style="text-align:center; margin-bottom:14px;">: PRODUCT DOSSIER (QOS-PD)</h3>
    <p><strong>Dossier Reference Number:</strong> ${escapeHtml(formData.dossierReference) || "-"}</p>
    <p>This QOS document was generated from ProgrammoCeuticals QOS Studio for section 2.3.</p>
  </div>

  <div class="page-break"></div>
  <div>
    <h3 style="text-transform:uppercase;">Introduction</h3>
    <table>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Non-proprietary name(s) of FPP</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.fppNonProprietary
      ) || "&nbsp;"}</td></tr>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Proprietary name(s) of FPP</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.fppProprietary
      ) || "&nbsp;"}</td></tr>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">International non-proprietary name(s) of API(s)</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.apiInns
      ) || "&nbsp;"}</td></tr>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Applicant name and address</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.applicantNameAddress
      ) || "&nbsp;"}</td></tr>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Dosage form</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.dosageForm
      ) || "&nbsp;"}</td></tr>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Reference Number(s)</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.referenceNumbers
      ) || "&nbsp;"}</td></tr>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Strength(s)</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.strengths
      ) || "&nbsp;"}</td></tr>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Route of administration</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.routeAdministration
      ) || "&nbsp;"}</td></tr>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Proposed indication(s)</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.proposedIndications
      ) || "&nbsp;"}</td></tr>
    </table>

    <h4>Contact Person Responsible for this Application</h4>
    <table>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Title</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.contactTitle
      ) || "&nbsp;"}</td></tr>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Name</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.contactName
      ) || "&nbsp;"}</td></tr>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Phone</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.contactPhone
      ) || "&nbsp;"}</td></tr>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Fax</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.contactFax
      ) || "&nbsp;"}</td></tr>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Email</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.contactEmail
      ) || "&nbsp;"}</td></tr>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Other contacts to copy</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.additionalContacts
      ) || "&nbsp;"}</td></tr>
    </table>

    <h3 style="text-transform:uppercase;">2.3.S Drug Substance (API)</h3>
    <table>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Name of API</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.apiName
      ) || "&nbsp;"}</td></tr>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Name of API manufacturer</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.apiManufacturer
      ) || "&nbsp;"}</td></tr>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Selected API option</td><td style="border:1px solid #000; padding:6px;">${escapeHtml(
        optionLabel
      )}</td></tr>
      <tr><td style="border:1px solid #000; padding:6px; width:44%; font-weight:600;">Evidence / Module 1 reference</td><td style="border:1px solid #000; padding:6px;">${withBreaks(
        formData.apiEvidence
      ) || "&nbsp;"}</td></tr>
    </table>

    <h3 style="text-transform:uppercase;">Section Summaries</h3>
    <table>${sectionRows}</table>
  </div>
</body>
</html>`;
  };

  const buildWordFileFromCurrentDocument = () => {
    const html = buildWordHtml();
    const blob = new Blob([html], { type: "application/msword" });
    const file = new File([blob], "QOS_Document.doc", {
      type: "application/msword",
      lastModified: Date.now()
    });
    return { blob, file };
  };

  const handleExport = () => {
    const result = buildWordFileFromCurrentDocument();
    const url = URL.createObjectURL(result.blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "QOS_Document.doc";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSaveToCompiler = async () => {
    if (typeof onSaveToCompiler !== "function") return;
    const result = buildWordFileFromCurrentDocument();
    await onSaveToCompiler(result.file);
  };

  const styles = {
    container: { width: "100%", maxWidth: "210mm", margin: "0 auto" },
    navigation: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      margin: "20px 0",
      padding: "10px",
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      flexWrap: "wrap"
    },
    navButton: {
      padding: "8px 16px",
      border: "1px solid #ccc",
      backgroundColor: "white",
      cursor: "pointer",
      borderRadius: "3px",
      fontSize: "14px"
    },
    activeButton: { backgroundColor: "#007bff", color: "white", border: "1px solid #007bff" },
    exportButton: {
      padding: "10px 20px",
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px"
    }
  };

  return (
    <div style={styles.container}>
      <div className="screen-only" style={styles.navigation}>
        <button
          style={{ ...styles.navButton, ...(showFrontPage ? styles.activeButton : {}) }}
          onClick={() => setShowFrontPage(true)}
        >
          Front Page
        </button>
        <button
          style={{ ...styles.navButton, ...(!showFrontPage ? styles.activeButton : {}) }}
          onClick={() => setShowFrontPage(false)}
        >
          QOS Form
        </button>
        <button style={styles.exportButton} onClick={handleExport}>
          Export to Word
        </button>
        {typeof onSaveToCompiler === "function" && (
          <button
            style={{
              ...styles.exportButton,
              backgroundColor: "#0b5ed7",
              opacity: savingToCompiler ? 0.8 : 1,
              cursor: savingToCompiler ? "not-allowed" : "pointer"
            }}
            onClick={handleSaveToCompiler}
            disabled={savingToCompiler}
          >
            {savingToCompiler ? "Saving..." : "Save to Compiler (2.3)"}
          </button>
        )}
      </div>

      <div className="screen-only">
        {showFrontPage ? (
          <QOSFrontPage formData={formData} onFieldChange={handleFieldChange} />
        ) : (
          <QOSForm
            formData={formData}
            onFieldChange={handleFieldChange}
            onSectionChange={handleSectionChange}
          />
        )}
      </div>

      <div className="print-only" style={{ display: "none" }}>
        <QOSFrontPage formData={formData} onFieldChange={handleFieldChange} />
        <div className="qos-page-break" />
        <QOSForm
          formData={formData}
          onFieldChange={handleFieldChange}
          onSectionChange={handleSectionChange}
        />
      </div>
    </div>
  );
}

export default QOSDocument;
