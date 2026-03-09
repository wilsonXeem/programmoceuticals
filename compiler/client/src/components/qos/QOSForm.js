import React from "react";
import "./QOSDocument.css";

const PRODUCT_INFO_FIELDS = [
  {
    key: "fppNonProprietary",
    label: "Non-proprietary name(s) of the finished pharmaceutical product(s) (FPP)"
  },
  {
    key: "fppProprietary",
    label: "Proprietary name(s) of the finished pharmaceutical product(s) (FPP)"
  },
  {
    key: "apiInns",
    label:
      "International non-proprietary name(s) of the active pharmaceutical ingredient(s) (API(s)), including form"
  },
  { key: "applicantNameAddress", label: "Applicant name and address", multiline: true },
  { key: "dosageForm", label: "Dosage form" },
  { key: "referenceNumbers", label: "Reference number(s)" },
  { key: "strengths", label: "Strength(s)" },
  { key: "routeAdministration", label: "Route of administration" },
  { key: "proposedIndications", label: "Proposed indication(s)", multiline: true }
];

const CONTACT_FIELDS = [
  { key: "contactTitle", label: "Title" },
  { key: "contactName", label: "Name" },
  { key: "contactPhone", label: "Phone" },
  { key: "contactFax", label: "Fax" },
  { key: "contactEmail", label: "Email" }
];

const API_OPTION_FIELDS = [
  { value: "api_prequalification", label: "Confirmation of API Prequalification" },
  { value: "cep", label: "Certificate of suitability to the European Pharmacopoeia (CEP)" },
  { value: "apimf", label: "Active pharmaceutical ingredient master file (APIMF)" },
  { value: "nafdac_prequalified", label: "Active pharmaceutical ingredient pre-qualified by NAFDAC" },
  { value: "full_details", label: "Full details in the PD" }
];

const SECTION_FIELDS = [
  { key: "s1", label: "2.3.S.1 General Information" },
  { key: "s2", label: "2.3.S.2 Manufacture" },
  { key: "s3", label: "2.3.S.3 Characterisation" },
  { key: "s4", label: "2.3.S.4 Control of the API" },
  { key: "s5", label: "2.3.S.5 Reference Standards or Materials" },
  { key: "s6", label: "2.3.S.6 Container Closure System" },
  { key: "s7", label: "2.3.S.7 Stability" },
  { key: "p1", label: "2.3.P.1 Description and Composition of the FPP" },
  { key: "p2", label: "2.3.P.2 Pharmaceutical Development" },
  { key: "p3", label: "2.3.P.3 Manufacture" },
  { key: "p4", label: "2.3.P.4 Control of Excipients" },
  { key: "p5", label: "2.3.P.5 Control of FPP" },
  { key: "p6", label: "2.3.P.6 Reference Standards or Materials" },
  { key: "p7", label: "2.3.P.7 Container Closure System" },
  { key: "p8", label: "2.3.P.8 Stability" },
  { key: "a", label: "2.3.A Appendices" },
  { key: "r", label: "2.3.R Regional Information" }
];

function QOSForm({ formData, onFieldChange, onSectionChange }) {
  const styles = {
    paper: {
      fontFamily: "Tahoma, sans-serif",
      fontSize: "12px",
      lineHeight: 1.35,
      color: "#000",
      width: "210mm",
      minHeight: "297mm",
      margin: "0 auto",
      padding: "25.4mm 20mm",
      backgroundColor: "white",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      boxSizing: "border-box"
    },
    sectionTitle: {
      margin: "0 0 8px 0",
      fontSize: "13px",
      fontWeight: "bold",
      textTransform: "uppercase"
    },
    subsectionTitle: {
      margin: "14px 0 8px 0",
      fontSize: "12px",
      fontWeight: "bold"
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: "12px"
    },
    th: {
      border: "1px solid #000",
      padding: "6px",
      textAlign: "left",
      background: "#f3f4f6",
      fontSize: "11px"
    },
    tdLabel: {
      width: "44%",
      border: "1px solid #000",
      padding: "6px",
      verticalAlign: "top",
      fontSize: "11px",
      fontWeight: 600
    },
    tdInput: {
      width: "56%",
      border: "1px solid #000",
      padding: "4px",
      verticalAlign: "top",
      fontSize: "11px"
    },
    input: {
      width: "100%",
      border: "none",
      outline: "none",
      fontFamily: "Tahoma, sans-serif",
      fontSize: "11px",
      background: "transparent",
      boxSizing: "border-box"
    },
    textarea: {
      width: "100%",
      minHeight: "50px",
      border: "none",
      outline: "none",
      resize: "vertical",
      fontFamily: "Tahoma, sans-serif",
      fontSize: "11px",
      lineHeight: 1.4,
      background: "transparent",
      boxSizing: "border-box"
    },
    optionWrap: {
      border: "1px solid #000",
      padding: "8px",
      marginBottom: "8px"
    },
    optionRow: {
      display: "flex",
      alignItems: "flex-start",
      gap: "8px",
      marginBottom: "6px",
      fontSize: "11px"
    }
  };

  return (
    <div className="qos-form" style={styles.paper}>
      <h3 style={styles.sectionTitle}>Introduction</h3>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th} colSpan={2}>
              Summary of product information
            </th>
          </tr>
        </thead>
        <tbody>
          {PRODUCT_INFO_FIELDS.map((field) => (
            <tr key={field.key}>
              <td style={styles.tdLabel}>{field.label}</td>
              <td style={styles.tdInput}>
                {field.multiline ? (
                  <textarea
                    value={formData[field.key]}
                    onChange={(event) => onFieldChange(field.key, event.target.value)}
                    style={styles.textarea}
                  />
                ) : (
                  <input
                    type="text"
                    value={formData[field.key]}
                    onChange={(event) => onFieldChange(field.key, event.target.value)}
                    style={styles.input}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 style={styles.subsectionTitle}>Contact person responsible for this application</h4>
      <table style={styles.table}>
        <tbody>
          {CONTACT_FIELDS.map((field) => (
            <tr key={field.key}>
              <td style={styles.tdLabel}>{field.label}</td>
              <td style={styles.tdInput}>
                <input
                  type="text"
                  value={formData[field.key]}
                  onChange={(event) => onFieldChange(field.key, event.target.value)}
                  style={styles.input}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td style={styles.tdLabel}>
              Additional contacts to copy in correspondence
            </td>
            <td style={styles.tdInput}>
              <textarea
                value={formData.additionalContacts}
                onChange={(event) => onFieldChange("additionalContacts", event.target.value)}
                style={styles.textarea}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <h3 style={styles.sectionTitle}>2.3.S Drug Substance (API)</h3>
      <table style={styles.table}>
        <tbody>
          <tr>
            <td style={styles.tdLabel}>Name of API</td>
            <td style={styles.tdInput}>
              <input
                type="text"
                value={formData.apiName}
                onChange={(event) => onFieldChange("apiName", event.target.value)}
                style={styles.input}
              />
            </td>
          </tr>
          <tr>
            <td style={styles.tdLabel}>Name of API manufacturer</td>
            <td style={styles.tdInput}>
              <input
                type="text"
                value={formData.apiManufacturer}
                onChange={(event) => onFieldChange("apiManufacturer", event.target.value)}
                style={styles.input}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div style={styles.optionWrap}>
        <div style={{ fontWeight: 700, marginBottom: "8px", fontSize: "11px" }}>
          API information submission option (select one)
        </div>
        {API_OPTION_FIELDS.map((option) => (
          <label key={option.value} style={styles.optionRow}>
            <input
              type="radio"
              name="apiSubmissionOption"
              value={option.value}
              checked={formData.apiSubmissionOption === option.value}
              onChange={(event) => onFieldChange("apiSubmissionOption", event.target.value)}
            />
            <span>{option.label}</span>
          </label>
        ))}
        <div style={{ marginTop: "8px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, marginBottom: "4px" }}>
            Evidence / module 1 reference
          </div>
          <textarea
            value={formData.apiEvidence}
            onChange={(event) => onFieldChange("apiEvidence", event.target.value)}
            style={styles.textarea}
          />
        </div>
      </div>

      <h3 style={styles.sectionTitle}>Section Summaries</h3>
      <p style={{ fontSize: "11px", margin: "0 0 10px 0" }}>
        Provide concise summaries for each applicable section in the QOS.
      </p>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{ ...styles.th, width: "34%" }}>Section</th>
            <th style={{ ...styles.th, width: "66%" }}>Summary</th>
          </tr>
        </thead>
        <tbody>
          {SECTION_FIELDS.map((field) => (
            <tr key={field.key}>
              <td style={styles.tdLabel}>{field.label}</td>
              <td style={styles.tdInput}>
                <textarea
                  value={formData.sectionSummaries[field.key]}
                  onChange={(event) => onSectionChange(field.key, event.target.value)}
                  style={{ ...styles.textarea, minHeight: "64px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QOSForm;
