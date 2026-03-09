import React from "react";
import logo from "../../data/nafdac.png";

function QOSFrontPage({ formData, onFieldChange }) {
  const styles = {
    container: {
      fontFamily: "Times New Roman, serif",
      fontSize: "12px",
      lineHeight: 1.25,
      color: "#000",
      width: "210mm",
      minHeight: "297mm",
      margin: "0 auto",
      padding: "25.4mm 20mm",
      backgroundColor: "white",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      boxSizing: "border-box"
    },
    logo: {
      width: "62px",
      height: "auto",
      display: "block",
      margin: "0 auto 8px"
    },
    heading: {
      margin: "0 0 6px 0",
      textAlign: "center",
      fontSize: "14px",
      fontWeight: "bold"
    },
    subHeading: {
      margin: "0 0 12px 0",
      textAlign: "center",
      fontSize: "13px",
      fontWeight: "bold"
    },
    titleBlock: {
      margin: "16px 0 18px 0",
      textAlign: "center",
      fontWeight: "bold"
    },
    module: { fontSize: "18px", margin: "0 0 8px 0" },
    qos: { fontSize: "16px", margin: 0, lineHeight: 1.4 },
    referenceWrap: {
      marginTop: "16px",
      borderTop: "1px solid #000",
      borderBottom: "1px solid #000",
      padding: "10px 0"
    },
    referenceLabel: {
      display: "block",
      fontSize: "12px",
      marginBottom: "6px",
      fontWeight: "bold"
    },
    referenceInput: {
      width: "100%",
      border: "none",
      borderBottom: "1px solid #000",
      outline: "none",
      fontFamily: "Times New Roman, serif",
      fontSize: "12px",
      padding: "2px 0",
      background: "transparent"
    },
    paragraph: {
      margin: "10px 0",
      textAlign: "justify"
    },
    note: {
      marginTop: "18px",
      padding: "8px 10px",
      border: "1px solid #dbe2ea",
      background: "#f8fafc",
      fontSize: "11px"
    }
  };

  return (
    <div className="qos-front-page" style={styles.container}>
      <img src={logo} alt="nafdac_logo" style={styles.logo} />
      <h1 style={styles.heading}>
        National Agency for Food &amp; Drug Administration &amp; Control (NAFDAC)
      </h1>
      <h1 style={styles.subHeading}>
        Registration &amp; Regulatory Affairs (R &amp; R) Directorate
      </h1>

      <div style={styles.titleBlock}>
        <div style={styles.module}>MODULE 2.3</div>
        <p style={styles.qos}>QUALITY OVERALL SUMMARY</p>
        <p style={styles.qos}>: PRODUCT DOSSIER (QOS-PD)</p>
      </div>

      <div style={styles.referenceWrap}>
        <label htmlFor="qos-reference" style={styles.referenceLabel}>
          Dossier Reference Number
        </label>
        <input
          id="qos-reference"
          type="text"
          value={formData.dossierReference}
          onChange={(event) => onFieldChange("dossierReference", event.target.value)}
          style={styles.referenceInput}
          placeholder="e.g. AB0001"
        />
      </div>

      <p style={styles.paragraph}>
        This Quality Overall Summary (QOS-PD) template should be completed using the
        official NAFDAC structure for module 2.3. The completed file must be submitted
        in Word format for dossier section 2.3.
      </p>
      <p style={styles.paragraph}>
        Enter concise, section-specific summaries that reflect the final quality data in
        your dossier. Keep content consistent with module 3 source documents and section
        references.
      </p>

      <div style={styles.note}>
        Tip: this studio includes the major QOS sections and a direct save flow to
        compiler section 2.3.
      </div>
    </div>
  );
}

export default QOSFrontPage;
