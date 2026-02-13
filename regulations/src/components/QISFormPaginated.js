import React, { useState } from "react";

function QISFormPaginated() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

  const pageStyles = {
    container: {
      fontFamily: "Tahoma, sans-serif",
      fontSize: "12px",
      lineHeight: 1.15,
      color: "#000",
      width: "210mm",
      height: "297mm",
      margin: "0 auto 20px",
      padding: "25.4mm 20mm",
      backgroundColor: "white",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      position: "relative",
      overflow: "hidden",
      pageBreakAfter: "always"
    },
    navigation: {
      position: "fixed",
      top: "20px",
      right: "20px",
      zIndex: 1000,
      backgroundColor: "white",
      padding: "10px",
      borderRadius: "5px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    },
    navButton: {
      margin: "0 5px",
      padding: "5px 10px",
      border: "1px solid #ccc",
      backgroundColor: "#f5f5f5",
      cursor: "pointer",
      borderRadius: "3px"
    },
    pageNumber: {
      position: "absolute",
      bottom: "15mm",
      right: "20mm",
      fontSize: "10px"
    },
    h2: { fontSize: "13px", fontWeight: "bold", margin: "12px 0 6px", textAlign: "center" },
    h3: { fontSize: "12px", fontWeight: "bold", margin: "12px 0 6px", textTransform: "uppercase" },
    h4: { fontSize: "12px", fontWeight: "bold", margin: "8px 0 4px" },
    p: { margin: "6px 0", textAlign: "justify", fontSize: "12px" },
    table: { width: "100%", borderCollapse: "collapse", margin: "8px 0", fontSize: "11px" },
    th: { border: "1px solid #000", padding: "4px 6px", textAlign: "left", backgroundColor: "white", fontWeight: "bold", fontSize: "11px" },
    td: { border: "1px solid #000", padding: "4px 6px", verticalAlign: "top", fontSize: "11px" },
    input: { width: "100%", border: "none", outline: "none", backgroundColor: "transparent", fontSize: "11px", fontFamily: "Tahoma, sans-serif" },
    textarea: { width: "100%", border: "none", outline: "none", backgroundColor: "transparent", resize: "none", fontSize: "11px", fontFamily: "Tahoma, sans-serif" }
  };

  const renderPage1 = () => (
    <div style={pageStyles.container}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>
          FEDERAL REPUBLIC OF NIGERIA
        </div>
        <div style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "15px" }}>
          National Agency for Food & Drug Administration & Control (NAFDAC)
        </div>
        <div style={{ fontSize: "12px", marginBottom: "10px" }}>
          Registration & Regulatory Affairs (R & R) Directorate
        </div>
        <div style={{ fontSize: "14px", fontWeight: "bold", marginTop: "20px" }}>
          QUALITY INFORMATION SUMMARY (QIS)
        </div>
        <div style={{ fontSize: "12px", marginTop: "15px", border: "1px solid #000", padding: "5px" }}>
          &lt;Dossier reference number: e.g. AB0001&gt;
        </div>
      </div>

      <h2 style={pageStyles.h2}>FOREWORD</h2>
      <p style={pageStyles.p}>
        The QIS template should be completed to provide a condensed summary of the key quality information
        for product dossiers (PDs) containing APIs of synthetic or semi-synthetic origin and their
        corresponding products that are filed for registration with the National Agency for Food and Drug
        Administration and Control (NAFDAC). This QIS template has been adopted from the World Health
        Organization Prequalification of Medicines Programme QIS template.
      </p>
      <p style={pageStyles.p}>
        The QIS serves as an official reference document during the course of GMP inspections, variation
        assessments and renewal assessments as performed by NAFDAC. The QIS is a condensed version of the
        Quality Overall Summary – Product Dossier (QOS-PD) and represents the final, agreed upon key
        information from the PD review (inter alia identification of the manufacturer(s), API/FPP
        specifications, stability conclusions and relevant commitments).
      </p>
      <p style={pageStyles.p}>
        The QIS template is structured to permit the rapid assembly of the QIS by copying requisite
        information from the corresponding portions of the QOS-PD filed with the original PD. It is
        acknowledged that the numbering of the sections may not be entirely sequential. Those sections not
        considered necessary to be included in the QIS have been removed (e.g. 2.3.S.5 Reference Standards
        or Materials) and the remaining sections have retained their numbering to be consistent with the
        original PD.
      </p>
      <div style={pageStyles.pageNumber}>Page 1 of {totalPages}</div>
    </div>
  );

  const renderPage2 = () => (
    <div style={pageStyles.container}>
      <p style={pageStyles.p}>
        For original PDs, the QIS should be provided in Word format at the time of PD submission. The QIS
        should be revised and submitted with the change history (see table at the end of the template)
        each time additional data is provided during the assessment process. If no revision is necessary
        due to no change in the information, a statement should be made to this effect in the covering
        letter. For variations, the QIS should be completed in its entirety (regardless of the proposed
        change), it should include information on all strengths, with any changes highlighted and it should
        be provided at the time of filing.
      </p>
      <p style={pageStyles.p}>When completing the QIS template, this covering foreword should be deleted.</p>

      <h2 style={pageStyles.h2}>QUALITY INFORMATION SUMMARY (QIS)</h2>
      <h3 style={pageStyles.h3}>INTRODUCTION</h3>
      <p style={pageStyles.p}>Summary of product information:</p>

      <table style={pageStyles.table}>
        <tbody>
          <tr>
            <th style={pageStyles.th}>Non-proprietary name(s) of the finished pharmaceutical product(s) (FPP)</th>
            <th style={pageStyles.th} colSpan={3}></th>
          </tr>
          <tr>
            <td style={pageStyles.td}>Proprietary name(s) of the finished pharmaceutical product(s) (FPP)</td>
            <td style={pageStyles.td} colSpan={3}><input style={pageStyles.input} type="text" name="proprietaryNameFPP" /></td>
          </tr>
          <tr>
            <td style={pageStyles.td}>International non-proprietary name(s) of the active pharmaceutical ingredient(s) (API(s)), including form (salt, hydrate, polymorph)</td>
            <td style={pageStyles.td} colSpan={3}><input style={pageStyles.input} type="text" name="innAPIWithForm" /></td>
          </tr>
          <tr>
            <td style={pageStyles.td}>Applicant name and address</td>
            <td style={pageStyles.td} colSpan={3}><textarea style={pageStyles.textarea} name="applicantNameAddress" rows={3} /></td>
          </tr>
          <tr>
            <td style={pageStyles.td}>Dosage form</td>
            <td style={pageStyles.td} colSpan={3}><input style={pageStyles.input} type="text" name="dosageForm" /></td>
          </tr>
          <tr>
            <td style={pageStyles.td}>Reference Number(s)</td>
            <td style={pageStyles.td}><input style={pageStyles.input} type="text" name="refNo1" /></td>
            <td style={pageStyles.td}><input style={pageStyles.input} type="text" name="refNo2" /></td>
            <td style={pageStyles.td}><input style={pageStyles.input} type="text" name="refNo3" /></td>
          </tr>
          <tr>
            <td style={pageStyles.td}>Strength(s)</td>
            <td style={pageStyles.td}><input style={pageStyles.input} type="text" name="strength1" /></td>
            <td style={pageStyles.td}><input style={pageStyles.input} type="text" name="strength2" /></td>
            <td style={pageStyles.td}><input style={pageStyles.input} type="text" name="strength3" /></td>
          </tr>
        </tbody>
      </table>
      <div style={pageStyles.pageNumber}>Page 2 of {totalPages}</div>
    </div>
  );

  const renderPage3 = () => (
    <div style={pageStyles.container}>
      <table style={pageStyles.table}>
        <tbody>
          <tr>
            <td style={pageStyles.td}>Route of administration</td>
            <td style={pageStyles.td} colSpan={3}><input style={pageStyles.input} type="text" name="routeOfAdministration" /></td>
          </tr>
          <tr>
            <td style={pageStyles.td}>Proposed indication(s)</td>
            <td style={pageStyles.td} colSpan={3}><textarea style={pageStyles.textarea} name="proposedIndications" rows={3} /></td>
          </tr>
          <tr>
            <td style={pageStyles.td}>Primary contact person responsible for this application</td>
            <td style={pageStyles.td} colSpan={3}>
              Title: <input style={pageStyles.input} type="text" name="contactTitle" />
              First name: <input style={pageStyles.input} type="text" name="contactFirstName" />
              Family Name: <input style={pageStyles.input} type="text" name="contactLastName" />
            </td>
          </tr>
          <tr>
            <td style={pageStyles.td}>Contact person's job title</td>
            <td style={pageStyles.td} colSpan={3}><input style={pageStyles.input} type="text" name="contactJobTitle" /></td>
          </tr>
          <tr>
            <td style={pageStyles.td} colSpan={4}>Contact person's postal address</td>
          </tr>
          <tr>
            <td style={pageStyles.td}>Unit</td>
            <td style={pageStyles.td} colSpan={3}><input style={pageStyles.input} type="text" name="contactUnit" /></td>
          </tr>
          <tr>
            <td style={pageStyles.td}>Building/PO Box number</td>
            <td style={pageStyles.td} colSpan={3}><input style={pageStyles.input} type="text" name="contactBuilding" /></td>
          </tr>
          <tr>
            <td style={pageStyles.td}>Road/Street</td>
            <td style={pageStyles.td} colSpan={3}><input style={pageStyles.input} type="text" name="contactStreet" /></td>
          </tr>
          <tr>
            <td style={pageStyles.td}>Town/City</td>
            <td style={pageStyles.td} colSpan={3}><input style={pageStyles.input} type="text" name="contactCity" /></td>
          </tr>
          <tr>
            <td style={pageStyles.td}>Province/State</td>
            <td style={pageStyles.td} colSpan={3}><input style={pageStyles.input} type="text" name="contactProvinceState" /></td>
          </tr>
          <tr>
            <td style={pageStyles.td}>Country</td>
            <td style={pageStyles.td} colSpan={3}><input style={pageStyles.input} type="text" name="contactCountry" /></td>
          </tr>
          <tr>
            <td style={pageStyles.td}>Contact person's email address</td>
            <td style={pageStyles.td} colSpan={3}><input style={pageStyles.input} type="email" name="contactEmail" /></td>
          </tr>
          <tr>
            <td style={pageStyles.td}>Contact person's phone number</td>
            <td style={pageStyles.td} colSpan={3}><input style={pageStyles.input} type="tel" name="contactPhone" /></td>
          </tr>
        </tbody>
      </table>
      <div style={pageStyles.pageNumber}>Page 3 of {totalPages}</div>
    </div>
  );

  const renderPage4 = () => (
    <div style={pageStyles.container}>
      <h2 style={pageStyles.h2}>2.3.S DRUG SUBSTANCE (API)</h2>
      <p style={pageStyles.p}>Indicate which option applies for the submission of API information:</p>
      
      <table style={pageStyles.table}>
        <tbody>
          <tr>
            <th style={pageStyles.th} colSpan={2}>Name of API:</th>
            <th style={pageStyles.th}><input style={pageStyles.input} type="text" name="apiName" /></th>
          </tr>
          <tr>
            <td style={pageStyles.td} colSpan={2}>Name of API manufacturer:</td>
            <td style={pageStyles.td}><input style={pageStyles.input} type="text" name="apiManufacturer" /></td>
          </tr>
          <tr>
            <td style={pageStyles.td}><input type="checkbox" name="apiOptionPQ" /></td>
            <td style={pageStyles.td} colSpan={2}>Confirmation of API prequalification document</td>
          </tr>
          <tr>
            <td style={pageStyles.td}><input type="checkbox" name="apiOptionCEP" /></td>
            <td style={pageStyles.td} colSpan={2}>Certificate of suitability to the European Pharmacopoeia (CEP)</td>
          </tr>
          <tr>
            <td style={pageStyles.td}><input type="checkbox" name="apiOptionAPIMF" /></td>
            <td style={pageStyles.td} colSpan={2}>Active pharmaceutical ingredient master file (APIMF) procedure</td>
          </tr>
          <tr>
            <td style={pageStyles.td}><input type="checkbox" name="apiOptionFullPD" /></td>
            <td style={pageStyles.td} colSpan={2}>Full details in the PD</td>
          </tr>
        </tbody>
      </table>

      <h3 style={pageStyles.h3}>2.3.S.2 Manufacture</h3>
      <h4 style={pageStyles.h4}>2.3.S.2.1 Manufacturer(s)</h4>
      
      <table style={pageStyles.table}>
        <thead>
          <tr>
            <th style={pageStyles.th}>Name and address</th>
            <th style={pageStyles.th}>Responsibility</th>
            <th style={pageStyles.th}>API-PQ/APIMF/CEP number</th>
            <th style={pageStyles.th}>Letter of access?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={pageStyles.td}><input style={pageStyles.input} type="text" name="s21_name1" /></td>
            <td style={pageStyles.td}><input style={pageStyles.input} type="text" name="s21_resp1" /></td>
            <td style={pageStyles.td}><input style={pageStyles.input} type="text" name="s21_id1" /></td>
            <td style={pageStyles.td}><input type="checkbox" name="s21_loa1" /></td>
          </tr>
        </tbody>
      </table>
      <div style={pageStyles.pageNumber}>Page 4 of {totalPages}</div>
    </div>
  );

  // Continue with more pages...
  const renderCurrentPage = () => {
    switch(currentPage) {
      case 1: return renderPage1();
      case 2: return renderPage2();
      case 3: return renderPage3();
      case 4: return renderPage4();
      default: 
        return (
          <div style={pageStyles.container}>
            <h3 style={pageStyles.h3}>Page {currentPage}</h3>
            <p style={pageStyles.p}>Additional QIS content continues here...</p>
            <div style={pageStyles.pageNumber}>Page {currentPage} of {totalPages}</div>
          </div>
        );
    }
  };

  return (
    <div>
      <div style={pageStyles.navigation}>
        <button 
          style={pageStyles.navButton}
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          style={pageStyles.navButton}
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <button 
          style={pageStyles.navButton}
          onClick={() => window.print()}
        >
          Print
        </button>
      </div>
      
      {renderCurrentPage()}
    </div>
  );
}

export default QISFormPaginated;