import React from "react";
import logo from "../data/nafdac.png";

function QISFrontPage() {
  const styles = {
    container: {
      fontFamily: "Times New Roman, serif",
      fontSize: "12px",
      lineHeight: 1.15,
      color: "#000",
      width: "210mm", // A4 width
      minHeight: "297mm", // A4 height
      margin: "0 auto",
      padding: "25.4mm 20mm", // Standard A4 margins
      backgroundColor: "white",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      position: "relative",
    },
    h1: { 
      fontSize: "14px", 
      fontWeight: "bold", 
      margin: "12px 0 6px", 
      textAlign: "center"
    },
    h2: {
      fontSize: "13px",
      fontWeight: "bold",
      margin: "12px 0 6px",
      textAlign: "center"
    },
    p: { 
      margin: "6px 0", 
      textAlign: "justify",
      fontSize: "12px"
    },
    logo: {
      width: "60px",
      height: "auto",
      display: "block",
      margin: "0 auto 10px"
    }
  };

  return (
    <div className="qis-front-page" style={styles.container}>
      {/* Headers */}
      <img src={logo} alt="nafdac_logo" style={styles.logo} />
      <h1 style={styles.h1}>
        National Agency for Food &amp; Drug Administration &amp; Control
        (NAFDAC)
      </h1>
      <h1 style={styles.h1}>
        Registration &amp; Regulatory Affairs (R &amp; R) Directorate
      </h1>
      <h2 style={styles.h2}>QUALITY INFORMATION SUMMARY (QIS)</h2>
      <h2 style={styles.h2}># &lt;Dossier reference number: e.g. AB0001&gt;</h2>

      {/* Foreword */}
      <h2 style={styles.h2}>FOREWORD</h2>
      <p style={styles.p}>
        The QIS template should be completed to provide a condensed summary of
        the key quality information for product dossiers (PDs) containing APIs
        of synthetic or semi-synthetic origin and their corresponding products
        that are filed for registration with the National Agency for Food and
        Drug Administration and Control (NAFDAC). This QIS template has been
        adopted from the World Health Organization Prequalification of Medicines
        Programme QIS template
      </p>
      <p style={styles.p}>
        The QIS serves as an official reference document during the course of
        GMP inspections, variation assessments and renewal assessments as
        performed by NAFDAC. The QIS is a condensed version of the Quality
        Overall Summary – Product Dossier (QOS-PD) and represents the final,
        agreed upon key information from the PD review (inter alia
        identification of the manufacturer(s), API/FPP specifications, stability
        conclusions and relevant commitments).
      </p>
      <p style={styles.p}>
        The QIS template is structured to permit the rapid assembly of the QIS
        by copying requisite information from the corresponding portions of the
        QOS-PD filed with the original PD. It is acknowledged that the numbering
        of the sections may not be entirely sequential. Those sections not
        considered necessary to be included in the QIS have been removed (e.g.
        2.3.S.5 Reference Standards or Materials) and the remaining sections
        have retained their numbering to be consistent with the original PD.
      </p>
      <p style={styles.p}>
        For original PDs, the QIS should be provided in Word format at the time
        of PD submission. The QIS should be revised and submitted with the
        change history (see table at the end of the template) each time
        additional data is provided during the assessment process. If no
        revision is necessary due to no change in the information, a statement
        should be made to this effect in the covering letter. For variations,
        the QIS should be completed in its entirety (regardless of the proposed
        change), it should include information on all strengths, with any
        changes highlighted and it should be provided at the time of filing.
      </p>
      <p style={styles.p}>
        When completing the QIS template, this covering foreword should be
        deleted.
      </p>
    </div>
  );
}

export default QISFrontPage;