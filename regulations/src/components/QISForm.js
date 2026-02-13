import React, { useState } from "react";
import logo from "../data/nafdac.png";
import "./QISDocument.css";

function QISForm() {
  const [zoom, setZoom] = useState(1);
  const [primaryBatchRows, setPrimaryBatchRows] = useState([
    { id: 1 },
    { id: 2 },
  ]);
  const [productionBatchRows, setProductionBatchRows] = useState([
    { id: 1 },
    { id: 2 },
  ]);
  const [validationBatchRows, setValidationBatchRows] = useState([
    { id: 1 },
    { id: 2 },
  ]);

  const addRow = (setter, rows) => {
    const newId = Math.max(...rows.map((r) => r.id)) + 1;
    setter([...rows, { id: newId }]);
  };

  const removeRow = (setter, rows, id) => {
    if (rows.length > 1) {
      setter(rows.filter((row) => row.id !== id));
    }
  };

  const styles = {
    zoomContainer: {
      transform: `scale(${zoom})`,
      transformOrigin: "top center",
      transition: "transform 0.2s ease",
    },
    zoomControls: {
      position: "fixed",
      top: "4rem",
      right: "20px",
      zIndex: 1000,
      backgroundColor: "white",
      padding: "10px",
      borderRadius: "5px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },
    zoomButton: {
      padding: "5px 10px",
      border: "1px solid #ccc",
      backgroundColor: "#f5f5f5",
      cursor: "pointer",
      borderRadius: "3px",
      fontSize: "14px",
    },
    container: {
      fontFamily: "Tahoma, sans-serif",
      fontSize: "12px",
      lineHeight: 1.5,
      color: "#000",
      width: "210mm",
      minHeight: "297mm",
      margin: "0 auto",
      padding: "25.4mm 20mm",
      backgroundColor: "white",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      position: "relative",
    },
    h1: {
      fontSize: "24px",
      fontWeight: "bold",
      margin: "12px 0 50px",
      textAlign: "center",
    },
    h2: {
      fontSize: "15px",
      fontWeight: "bold",
      margin: "12px 0 6px",
      textAlign: "center",
    },
    h3: {
      fontSize: "12px",
      fontWeight: "bold",
      margin: "12px 0 6px",
      textTransform: "uppercase",
    },
    h4: {
      fontSize: "12px",
      fontWeight: "bold",
      margin: "8px 0 4px",
    },
    p: {
      margin: "0 0 20px",
      textAlign: "justify",
      fontSize: "15px",
    },
    tableBatch: {
      width: "100%",
      borderCollapse: "collapse",
      margin: "8px 0",
      fontSize: "15px",
      tableLayout: "fixed",
    },
    tableWide: {
      width: "100%",
      borderCollapse: "collapse",
      margin: "8px 0",
      fontSize: "15px",
      tableLayout: "fixed",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      margin: "8px 0",
      fontSize: "11px",
      tableLayout: "fixed",
    },
    th: {
      border: "1px solid #000",
      padding: "4px 6px",
      textAlign: "left",
      backgroundColor: "white",
      fontWeight: "bold",
      fontSize: "15px",
    },
    td: {
      border: "1px solid #000",
      padding: "0",
      verticalAlign: "top",
      fontSize: "15px",
    },
    tdLabel: {
      border: "1px solid #000",
      padding: "0",
      verticalAlign: "top",
      fontSize: "15px",
      width: "40%",
      fontWeight: "bold",
    },
    tdInput: {
      border: "1px solid #000",
      padding: "0",
      verticalAlign: "top",
      fontSize: "15px",
      width: "60%",
    },
    input: {
      width: "100%",
      height: "100%",
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      fontSize: "15px",
      fontFamily: "Tahoma, sans-serif",
      padding: "4px 6px",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      height: "100%",
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      resize: "none",
      fontSize: "15px",
      fontFamily: "Tahoma, sans-serif",
      minHeight: "20px",
      lineHeight: 1.4,
      padding: "4px 6px",
      boxSizing: "border-box",
    },
    inputUnderline: {
      border: "none",
      borderBottom: "1px solid #000",
      outline: "none",
      backgroundColor: "transparent",
      fontSize: "15px",
      fontFamily: "Tahoma, sans-serif",
      display: "inline",
      width: "5rem",
      padding: "0 2px",
    },
    tdBatchFirst: {
      border: "1px solid #000",
      padding: "0",
      verticalAlign: "top",
      fontSize: "15px",
      width: "40%",
      fontWeight: "bold",
    },
    tdBatchOther: {
      border: "1px solid #000",
      padding: "0",
      verticalAlign: "top",
      fontSize: "15px",
      width: "20%",
    },
    tdWideFirst: {
      border: "1px solid #000",
      padding: "0",
      verticalAlign: "top",
      fontSize: "15px",
      width: "22.22%",
    },
    tdWide: {
      border: "1px solid #000",
      padding: "0",
      verticalAlign: "top",
      fontSize: "15px",
      width: "11.11%",
    },
    tdCheckbox: {
      border: "1px solid #000",
      padding: "0",
      verticalAlign: "top",
      fontSize: "15px",
      width: "5%",
      fontWeight: "bold",
      textAlign: "center",
    },
    tdFormulationFirst: {
      border: "1px solid #000",
      padding: "0",
      verticalAlign: "top",
      fontSize: "15px",
      width: "15%",
      fontWeight: "bold",
    },
    tdFormulationOther: {
      border: "1px solid #000",
      padding: "0",
      verticalAlign: "top",
      fontSize: "15px",
      width: "11%",
    },
    tbody: {
      width: "100%",
    },
  };

  return (
    <div>
      <div style={styles.zoomControls}>
        <button
          style={styles.zoomButton}
          onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
        >
          -
        </button>
        <span>{Math.round(zoom * 100)}%</span>
        <button
          style={styles.zoomButton}
          onClick={() => setZoom(Math.min(2, zoom + 0.1))}
        >
          +
        </button>
        <button style={styles.zoomButton} onClick={() => setZoom(1)}>
          Reset
        </button>
      </div>

      <div style={styles.zoomContainer}>
        <form className="qis-form" style={styles.container}>
          {/* Headers */}
          <div style={{ textAlign: "center", marginBottom: "12px" }}>
            <img src={logo} alt="NAFDAC Logo" style={{ height: "150px" }} />
          </div>
          <h2 style={styles.title}>
            National Agency for Food & Drug Administration & Control (NAFDAC)
          </h2>
          <h2 style={styles.h1}>
            Registration & Regulatory Affairs (R & R) Directorate
          </h2>
          <h2 style={styles.h2}>QUALITY INFORMATION SUMMARY (QIS)</h2>
          <h1
            style={{
              ...styles.h2,
              textAlign: "center",
              fontSize: "12px",
              margin: "0",
            }}
          >
            &lt;Dossier reference number: e.g. AB0001&gt;
          </h1>

          {/* Foreword */}
          <h2 style={{ ...styles.h2, textAlign: "left" }}>FOREWORD</h2>
          <p style={styles.p}>
            The QIS template should be completed to provide a condensed summary
            of the key quality information for product dossiers (PDs) containing
            APIs of synthetic or semi-synthetic origin and their corresponding
            products that are filed for registration with the National Agency
            for Food and Drug Administration and Control (NAFDAC). This QIS
            template has been adopted from the World Health Organization
            Prequalification of Medicines Programme QIS template
          </p>
          <p style={styles.p}>
            The QIS serves as an official reference document during the course
            of GMP inspections, variation assessments and renewal assessments as
            performed by NAFDAC. The QIS is a condensed version of the Quality
            Overall Summary – Product Dossier (QOS-PD) and represents the final,
            agreed upon key information from the PD review (inter alia
            identification of the manufacturer(s), API/FPP specifications,
            stability conclusions and relevant commitments).
          </p>
          <p style={styles.p}>
            The QIS template is structured to permit the rapid assembly of the
            QIS by copying requisite information from the corresponding portions
            of the QOS-PD filed with the original PD. It is acknowledged that
            the numbering of the sections may not be entirely sequential. Those
            sections not considered necessary to be included in the QIS have
            been removed (e.g. 2.3.S.5 Reference Standards or Materials) and the
            remaining sections have retained their numbering to be consistent
            with the original PD.
          </p>
          <p style={styles.p}>
            For original PDs, the QIS should be provided in Word format at the
            time of PD submission. The QIS should be revised and submitted with
            the change history (see table at the end of the template) each time
            additional data is provided during the assessment process. If no
            revision is necessary due to no change in the information, a
            statement should be made to this effect in the covering letter. For
            variations, the QIS should be completed in its entirety (regardless
            of the proposed change), it should include information on all
            strengths, with any changes highlighted and it should be provided at
            the time of filing.
          </p>
          <p style={styles.p}>
            When completing the QIS template, this covering foreword should be
            deleted.
          </p>

          <h2 style={styles.h2}>QUALITY INFORMATION SUMMARY (QIS)</h2>

          {/* INTRODUCTION */}
          <h2 style={{ ...styles.h2, textAlign: "left" }}>INTRODUCTION</h2>
          <h2 style={{ ...styles.h2, textAlign: "left" }}>
            (a) Summary of product information:
          </h2>

          <table style={styles.table}>
            <tbody>
              <tr>
                <td style={styles.tdLabel}>
                  Non-proprietary name(s) of the finished pharmaceutical
                  product(s) (FPP)
                </td>
                <td style={styles.tdInput} colSpan={3}>
                  <textarea
                    style={styles.textarea}
                    name="nonProprietaryNameFPP"
                    rows={2}
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  Proprietary name(s) of the finished pharmaceutical product(s)
                  (FPP)
                </td>
                <td style={styles.tdInput} colSpan={3}>
                  <textarea
                    style={styles.textarea}
                    name="proprietaryNameFPP"
                    rows={2}
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  International non-proprietary name(s) of the active
                  pharmaceutical ingredient(s) (API(s)), including form (salt,
                  hydrate, polymorph)
                </td>
                <td style={styles.tdLabel} colSpan={3}>
                  <textarea
                    style={styles.textarea}
                    name="innAPIWithForm"
                    rows={6}
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Applicant name and address</td>
                <td style={styles.tdLabel} colSpan={3}>
                  <textarea
                    style={styles.textarea}
                    name="applicantNameAddress"
                    rows={3}
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Dosage form</td>
                <td style={styles.tdLabel} colSpan={3}>
                  <input style={styles.input} type="text" name="dosageForm" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Reference Number(s)</td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="refNo1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="refNo2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="refNo3" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Strength(s)</td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="strength1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="strength2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="strength3" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Route of administration</td>
                <td style={styles.tdLabel} colSpan={3}>
                  <input
                    style={styles.input}
                    type="text"
                    name="routeOfAdministration"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Proposed indication(s)</td>
                <td style={styles.tdLabel} colSpan={3}>
                  <textarea
                    style={styles.textarea}
                    name="proposedIndications"
                    rows={1}
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  Primary contact person responsible for this application
                </td>
                <td style={styles.tdLabel} colSpan={3}>
                  <input
                    style={styles.input}
                    type="text"
                    name="contactTitle"
                    defaultValue="Title: "
                  />
                  <input
                    style={styles.input}
                    type="text"
                    name="contactFirstName"
                    defaultValue="First name: "
                  />
                  <input
                    style={styles.input}
                    type="text"
                    name="contactLastName"
                    defaultValue="Family Name: "
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Contact person's job title</td>
                <td style={styles.tdLabel} colSpan={3}>
                  <input
                    style={styles.input}
                    type="text"
                    name="contactJobTitle"
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.tdLabel, textAlign: "center" }}
                  colSpan={4}
                >
                  Contact person's postal address
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Unit</td>
                <td style={styles.tdLabel} colSpan={3}>
                  <input style={styles.input} type="text" name="contactUnit" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Building/PO Box number</td>
                <td style={styles.tdLabel} colSpan={3}>
                  <input
                    style={styles.input}
                    type="text"
                    name="contactBuilding"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Road/Street</td>
                <td style={styles.tdLabel} colSpan={3}>
                  <input
                    style={styles.input}
                    type="text"
                    name="contactStreet"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Plant/Zone</td>
                <td style={styles.tdLabel} colSpan={3}>
                  <input
                    style={styles.input}
                    type="text"
                    name="contactPlantZone"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Village/suburb</td>
                <td style={styles.tdLabel} colSpan={3}>
                  <input
                    style={styles.input}
                    type="text"
                    name="contactVillageSuburb"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Town/City</td>
                <td style={styles.tdLabel} colSpan={3}>
                  <input style={styles.input} type="text" name="contactCity" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>District and Mandal</td>
                <td style={styles.tdLabel} colSpan={3}>
                  <input
                    style={styles.input}
                    type="text"
                    name="contactDistrictMandal"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Province/State</td>
                <td style={styles.tdLabel} colSpan={3}>
                  <input
                    style={styles.input}
                    type="text"
                    name="contactProvinceState"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Postal code</td>
                <td style={styles.tdLabel} colSpan={3}>
                  <input
                    style={styles.input}
                    type="text"
                    name="contactPostalCode"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Country</td>
                <td style={styles.tdLabel} colSpan={3}>
                  <input
                    style={styles.input}
                    type="text"
                    name="contactCountry"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Contact person's email address</td>
                <td style={styles.tdLabel} colSpan={3}>
                  <input
                    style={styles.input}
                    type="email"
                    name="contactEmail"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Contact person's phone number</td>
                <td style={styles.tdLabel} colSpan={3}>
                  <input style={styles.input} type="tel" name="contactPhone" />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Administrative Summary */}
          <h2 style={{ ...styles.h2, textAlign: "left", margin: "2rem 0 0" }}>
            (b) Administrative Summary:
          </h2>
          <table style={styles.table}>
            <tbody>
              <tr>
                <th style={styles.th}>
                  Applicant’s date of preparation or revision of the QIS
                </th>
                <th style={styles.th}></th>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  Internal version and/or date of acceptance
                </td>
                <td style={{ ...styles.td, textAlign: "center" }}>
                  (NAFDAC use only)
                </td>
              </tr>
            </tbody>
          </table>

          {/* Related dossiers */}
          <p style={styles.p}>
            Related dossiers (e.g. FPP(s) with the same API(s) submitted to the
            Prequalification Team: medicines (PQTm) by the applicant):
          </p>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Reference number assigned by NAFDAC</th>
                <th style={styles.th}>Prequalified (Y/N)</th>
                <th style={styles.th}>
                  API, strength, dosage form (e.g. Abacavir (as sulphate) 300 mg
                  tablets)
                </th>
                <th style={styles.th}>
                  API manufacturer (including address if same supplier as
                  current dossier)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="referenceNumber"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="prequalifiedStatus"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="apiStrengthDosageForm"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="apiManufacturer"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* DRUG SUBSTANCE */}
          <h2 style={{ ...styles.h2, textAlign: "left", margin: "2rem 0 0" }}>
            2.3.S DRUG SUBSTANCE (or ACTIVE PHARMACEUTICAL INGREDIENT (API))
            (NAME, MANUFACTURER)
          </h2>
          <h2 style={{ ...styles.h2, textAlign: "left", margin: "0 0" }}>
            Indicate which option applies for the submission of API information:
            &lt;check one only&gt;
          </h2>

          <table style={styles.table}>
            <tbody>
              <tr>
                <th style={styles.th}>Name of API:</th>
                <th style={styles.th} colSpan={2}>
                  <input style={styles.input} type="text" name="apiName" />
                </th>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Name of API manufacturer:</td>
                <td style={styles.tdLabel} colSpan={2}>
                  <input
                    style={styles.input}
                    type="text"
                    name="apiManufacturer"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <table style={styles.table}>
            <tbody>
              <tr>
                <td style={styles.tdCheckbox}>
                  <input type="checkbox" name="apiOptionPQ" />
                </td>
                <td style={styles.td} colSpan={4}>
                  Confirmation of API prequalification document
                </td>
              </tr>
              <tr>
                <td style={styles.tdCheckbox}>
                  <input type="checkbox" name="apiOptionCEP" />
                </td>
                <td style={styles.td} colSpan={4}>
                  Certificate of suitability to the European Pharmacopoeia (CEP)
                </td>
              </tr>
              <tr>
                <td style={styles.tdCheckbox}>
                  <input type="checkbox" name="apiOptionAPIMF" />
                </td>
                <td style={styles.td} colSpan={4}>
                  Active pharmaceutical ingredient master file (APIMF)
                  procedure: APIMF number assigned by NAFDAC (if known):{" "}
                  <input
                    style={styles.inputUnderline}
                    className="input-underline"
                    type="text"
                    name="apimfNumber"
                  />
                  ; version number(s) including amendments (and/or date(s)) of
                  the open part:{" "}
                  <input
                    style={styles.inputUnderline}
                    className="input-underline"
                    type="text"
                    name="openPart"
                  />
                  ; version number(s) including amendments (and/or date(s)) of
                  the restricted part:{" "}
                  <input
                    style={styles.inputUnderline}
                    className="input-underline"
                    type="text"
                    name="restrictedPart"
                  />
                  .
                </td>
              </tr>
              <tr>
                <td style={styles.tdCheckbox}>
                  <input type="checkbox" name="apiOptionFullPD" />
                </td>
                <td style={styles.td} colSpan={4}>
                  Full details in the PD Document version number/identifier of
                  current module 3.2.S:{" "}
                  <input
                    style={styles.inputUnderline}
                    className="input-underline"
                    type="text"
                    name="fullPDVersion"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Manufacture */}
          <h2 style={{ ...styles.h2, textAlign: "left", margin: "2rem 0 0" }}>
            2.3. S.2 Manufacture (name, manufacturer)
          </h2>
          <h2 style={{ ...styles.h2, textAlign: "left", margin: "0.2rem 0 0" }}>
            2.3. S.2.1 Manufacturer(s) (name, manufacturer)
          </h2>
          <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
            <p style={styles.p}>(a)</p>
            <p style={styles.p}>
              Name, address and responsibility (e.g. fabrication, packaging,
              labelling, testing, storage) of each manufacturer, including
              contractors and each proposed production site or facility involved
              in these activities:
            </p>
          </div>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>
                  Name and address (including block(s)/unit(s))
                </th>
                <th style={styles.th}>Responsibility</th>
                <th style={styles.th}>
                  API-PQ number /APIMF/CEP number (if applicable)
                </th>
                <th style={styles.th}>Letter of access provided?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s21_name1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s21_resp1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s21_id1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s21_loa1" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s21_name2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s21_resp2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s21_id2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s21_loa2" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s21_name3" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s21_resp3" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s21_id3" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s21_loa3" />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Control of Materials */}
          <h2 style={{ ...styles.h2, textAlign: "left", margin: "2rem 0 0" }}>
            2.3. S.2.3 Control of Materials (name, manufacturer) – for API
            option 4 only
          </h2>
          <p style={{ ...styles.h2, textAlign: "left", margin: "0.5rem 0 0" }}>
            (a) Name of starting material:
          </p>
          <textarea
            style={{ ...styles.textarea }}
            name="s23_startingMaterialName"
            rows={2}
          />
          <p style={{ ...styles.h2, textAlign: "left", margin: "0.5rem 0 0" }}>
            (b) Name and manufacturing site address of starting material
            manufacturer(s):
          </p>
          <textarea style={styles.textarea} name="s23_siteAddress" rows={3} />

          {/* Control of API */}
          <h2 style={{ ...styles.h2, textAlign: "left", margin: "2rem 0 0" }}>
            2.3. S.4 Control of the API (name, manufacturer)
          </h2>
          <h4 style={{ ...styles.h2, textAlign: "left", margin: "0.5rem 0 0" }}>
            2.3. S.4.1 Specification (name, manufacturer)
          </h4>
          <p style={{ ...styles.h2, textAlign: "left", margin: "0.5rem 0 0" }}>
            (a) API specifications of the FPP manufacturer:
          </p>

          <table style={styles.table}>
            <tbody>
              <tr>
                <th style={styles.th} colSpan={2}>
                  Standard (e.g. Ph.Int., Ph.Eur., BP, USP, in-house)
                </th>
                <th style={styles.th}></th>
              </tr>
              <tr>
                <td style={styles.tdLabel} colSpan={2}>
                  Specification reference number and version
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="apiSpecRefVersion"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Test</td>
                <td style={styles.tdLabel}>Acceptance criteria</td>
                <td style={styles.tdLabel}>
                  Analytical procedure (Type/Source/Version)
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Description</td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="apiDescCrit" />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="apiDescMethod"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Identification</td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="apiIdCrit" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="apiIdMethod" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Impurities</td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="apiImpCrit" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="apiImpMethod" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Assay</td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="apiAssayCrit" />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="apiAssayMethod"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>etc.</td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="apiEtcCrit" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="apiEtcMethod" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="apiEtcCrit" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="apiEtcMethod" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="apiEtcCrit" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="apiEtcMethod" />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Container Closure System */}
          <h3 style={{ ...styles.h2, textAlign: "left", margin: "2rem 0 0" }}>
            2.3.S.6 Container Closure System (name, manufacturer)
          </h3>
          <p style={{ ...styles.h2, textAlign: "left", margin: "0.5rem 0 0" }}>
            (a) Description of the container closure system(s) for the storage
            and shipment of the API:
          </p>
          <textarea
            style={styles.textarea}
            name="apiContainerClosureDesc"
            rows={3}
          />

          {/* Stability */}
          <h3 style={{ ...styles.h2, textAlign: "left", margin: "2rem 0 0" }}>
            2.3.S.7 Stability (name, manufacturer)
          </h3>
          <h4 style={{ ...styles.h2, textAlign: "left", margin: "0.5rem 0 0" }}>
            2.3.S.7.1 Stability Summary and Conclusions (name, manufacturer)
          </h4>
          <p style={{ ...styles.h2, textAlign: "left", margin: "0.5rem 0 0" }}>
            (c) Proposed storage conditions and re-test period (or shelf-life,
            as appropriate):
          </p>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Container closure system</th>
                <th style={styles.th}>Storage statement</th>
                <th style={styles.th}>Re-test period*</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="apiStabilityCcs1"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="apiStabilityStorage1"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="apiStabilityRetest1"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="apiStabilityCcs2"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="apiStabilityStorage2"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="apiStabilityRetest2"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <p style={styles.p}>
            * indicate if a shelf-life is proposed in lieu of a re-test period
            (e.g. in the case of labile APIs)
          </p>

          {/* DRUG PRODUCT */}
          <h2 style={{ ...styles.h2, textAlign: "left", margin: "2rem 0 0" }}>
            2.3.P DRUG PRODUCT (or FINISHED PHARMACEUTICAL PRODUCT (FPP))
          </h2>

          {/* Description and composition */}
          <h3 style={{ ...styles.h2, textAlign: "left", margin: "0.5rem 0 0" }}>
            2.3.P.1 Description and Composition of the FPP
          </h3>
          <div style={{ display: "flex", gap: "1rem" }}>
            <p style={styles.p}>(a)</p>
            <div style={{ width: "100%" }}>
              <p
                style={{
                  ...styles.h2,
                  textAlign: "left",
                  margin: "2px 0 0",
                }}
              >
                Description of the FPP (in signed specifications):
              </p>
              <textarea
                style={styles.textarea}
                name="fppDescription"
                rows={4}
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <p style={styles.p}>(b)</p>
            <div style={{ width: "100%" }}>
              <p
                style={{
                  ...styles.h2,
                  textAlign: "left",
                  margin: "2px 0 0",
                }}
              >
                Composition of the FPP:
              </p>
              <div style={{ display: "flex", gap: "1rem" }}>
                <p style={styles.p}>(i)</p>
                <div style={{ width: "100%" }}>
                  <p
                    style={{
                      ...styles.h2,
                      textAlign: "left",
                      margin: "0.5rem 0 0",
                    }}
                  >
                    Composition, i.e. list of all components of the FPP and
                    their amounts on a per unit basis and percentage basis
                    (including individual components of mixtures prepared
                    in-house (e.g. coatings) and overages, if any):
                  </p>
                </div>
              </div>
            </div>
          </div>

          <table style={styles.tableWide}>
            <thead>
              <tr>
                <th style={styles.tdWideFirst} rowSpan={4}>
                  Component and quality standard (and grade, if applicable)
                </th>
                <th style={styles.th} rowSpan={2}>
                  Function
                </th>
                <th style={{ ...styles.th, textAlign: "center" }} colSpan={6}>
                  Strength (label claim)
                </th>
              </tr>

              <tr>
                <td style={styles.th}>Quant. per unit or per mL</td>
                <td style={styles.th}>%</td>
                <td style={styles.th}>Quant. per unit or per mL</td>
                <td style={styles.th}>%</td>
                <td style={styles.th}>Quantity per unit or per mL</td>
                <td style={styles.th}>%</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tdLabel} colSpan={8}>
                  &lt;complete with appropriate titles e.g. Core tablet (Layer
                  1, Layer 2, etc. as applicable), Contents of capsule, Powder
                  for injection&gt;
                </td>
              </tr>
              <tr>
                <td style={styles.tdWideFirst}>
                  <input style={styles.input} type="text" name="comp1" />
                </td>
                <td style={styles.tdWide}>
                  <input style={styles.input} type="text" name="func1" />
                </td>
                <td style={styles.tdWide}>
                  <input style={styles.input} type="text" name="s1_qty1" />
                </td>
                <td style={styles.tdWide}>
                  <input style={styles.input} type="text" name="s1_pct1" />
                </td>
                <td style={styles.tdWide}>
                  <input style={styles.input} type="text" name="s2_qty1" />
                </td>
                <td style={styles.tdWide}>
                  <input style={styles.input} type="text" name="s2_pct1" />
                </td>
                <td style={styles.tdWide}>
                  <input style={styles.input} type="text" name="s3_qty1" />
                </td>
                <td style={styles.tdWide}>
                  <input style={styles.input} type="text" name="s3_pct1" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdWideFirst}>
                  <input style={styles.input} type="text" name="comp2" />
                </td>
                <td style={styles.tdWide}>
                  <input style={styles.input} type="text" name="func2" />
                </td>
                <td style={styles.tdWide}>
                  <input style={styles.input} type="text" name="s1_qty2" />
                </td>
                <td style={styles.tdWide}>
                  <input style={styles.input} type="text" name="s1_pct2" />
                </td>
                <td style={styles.tdWide}>
                  <input style={styles.input} type="text" name="s2_qty2" />
                </td>
                <td style={styles.tdWide}>
                  <input style={styles.input} type="text" name="s2_pct2" />
                </td>
                <td style={styles.tdWide}>
                  <input style={styles.input} type="text" name="s3_qty2" />
                </td>
                <td style={styles.tdWide}>
                  <input style={styles.input} type="text" name="s3_pct2" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Subtotal 1</td>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="s1_subtotal1_qty"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="s1_subtotal1_pct"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="s2_subtotal1_qty"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="s2_subtotal1_pct"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="s3_subtotal1_qty"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="s3_subtotal1_pct"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel} colSpan={8}>
                  &lt;complete with appropriate title e.g. Film-coating &gt;
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="coat_comp1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="coat_func1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="coat_s1_qty1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="coat_s1_pct1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="coat_s2_qty1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="coat_s2_pct1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="coat_s3_qty1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="coat_s3_pct1" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="coat_comp2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="coat_func2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="coat_s1_qty2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="coat_s1_pct2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="coat_s2_qty2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="coat_s2_pct2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="coat_s3_qty2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="coat_s3_pct2" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Subtotal 2</td>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="s1_subtotal2_qty"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="s1_subtotal2_pct"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="s2_subtotal2_qty"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="s2_subtotal2_pct"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="s3_subtotal2_qty"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="s3_subtotal2_pct"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Total</td>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s1_total_qty" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s1_total_pct" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s2_total_qty" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s2_total_pct" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s3_total_qty" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="s3_total_pct" />
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ display: "flex", gap: "1rem" }}>
            <div></div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <p style={{ ...styles.p, margin: "1rem 0 0" }}>(ii)</p>
              <div>
                {" "}
                <p
                  style={{
                    ...styles.h2,
                    textAlign: "left",
                    margin: "1rem 0 0",
                  }}
                >
                  Composition of all components purchased as mixtures (e.g.
                  colorants, coatings, capsule shells, imprinting inks):
                </p>
                <textarea
                  style={styles.textarea}
                  name="mixturesComposition"
                  rows={3}
                />
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <p style={{ ...styles.p }}>(c)</p>
            <div style={{ width: " 100%" }}>
              <p
                style={{
                  ...styles.h2,
                  textAlign: "left",
                  margin: "0.1rem 0 0",
                }}
              >
                Description of accompanying reconstitution diluent(s), if
                applicable:
              </p>
              <textarea
                style={styles.textarea}
                name="reconstitutionDiluents"
                rows={3}
              />
            </div>
          </div>

          {/* Formulation development */}
          <h3
            style={{
              ...styles.h2,
              textAlign: "left",
              margin: "0.1rem 0 0",
            }}
          >
            2.3.P.2.2.1 Formulation Development
          </h3>

          <div style={{ display: "flex", gap: "1rem" }}>
            <p style={styles.p}>(b)</p>
            <div>
              <p
                style={{
                  ...styles.h2,
                  textAlign: "left",
                  margin: "0rem 0 0",
                }}
              >
                Information on primary (submission, registration, and exhibit)
                batches including comparative bioavailability or bio waiver,
                stability, commercial:
              </p>
              <div style={{ display: "flex", gap: "1rem" }}>
                <p style={styles.p}>(i)</p>
                <p
                  style={{
                    ...styles.h2,
                    textAlign: "left",
                    margin: "0rem 0 0",
                  }}
                >
                  Summary of batch numbers:
                </p>
              </div>
            </div>
          </div>

          <table style={styles.table} className="batch-table">
            <thead>
              <tr>
                <td></td>
              </tr>
            </thead>
            <tbody style={styles.tbody}>
              <tr>
                <td style={{ ...styles.th, textAlign: "center" }} colSpan={4}>
                  Batch number(s) of the FPPs used in Bioequivalence or bio
                  waiver
                </td>
              </tr>
              <tr>
                <td style={styles.tdBatchFirst}>
                  For proportional strength bio waiver: the bioequivalence batch
                  of the reference strength
                </td>
                <td style={styles.tdBatchOther} colSpan={3}>
                  <textarea
                    style={styles.textarea}
                    name="bioequivalenceBioWaiver"
                    placeholder="<e.g. bioequivalence batch A12345> <e.g. bio waiver batch X12345>"
                    rows={5}
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdBatchFirst}>Dissolution profile studies</td>
                <td style={styles.tdBatchOther} colSpan={3}>
                  <input
                    style={styles.input}
                    type="text"
                    name="dissolutionProfileStudies"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdBatchFirst} colSpan={4}>
                  Stability studies (primary batches)
                </td>
              </tr>
              {primaryBatchRows.map((row) => (
                <tr key={row.id}>
                  <td style={styles.tdBatchFirst}>
                    ‹packaging configuration {row.id}›
                  </td>
                  <td style={styles.tdBatchOther}>
                    <input
                      style={styles.input}
                      type="text"
                      name={`stabPrimConf${row.id}_batch`}
                    />
                  </td>
                  <td style={styles.tdBatchOther}>
                    <input
                      style={styles.input}
                      type="text"
                      name={`stabPrimConf${row.id}_size`}
                    />
                  </td>
                  <td style={styles.tdBatchOther}>
                    <input
                      style={styles.input}
                      type="text"
                      name={`stabPrimConf${row.id}_notes`}
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={3}></td>
                <td style={{ textAlign: "right" }}>
                  <button
                    type="button"
                    onClick={() =>
                      addRow(setPrimaryBatchRows, primaryBatchRows)
                    }
                    style={styles.zoomButton}
                  >
                    +
                  </button>
                  {primaryBatchRows.length > 1 && (
                    <button
                      type="button"
                      onClick={() =>
                        removeRow(
                          setPrimaryBatchRows,
                          primaryBatchRows,
                          primaryBatchRows[primaryBatchRows.length - 1].id
                        )
                      }
                      style={styles.zoomButton}
                    >
                      −
                    </button>
                  )}
                </td>
              </tr>
              <tr>
                <td style={styles.tdBatchFirst} colSpan={4}>
                  Stability studies (production batches)
                </td>
              </tr>
              {productionBatchRows.map((row) => (
                <tr key={row.id}>
                  <td style={styles.tdBatchFirst}>
                    ‹packaging configuration {row.id}›
                  </td>
                  <td style={styles.tdBatchOther}>
                    <input
                      style={styles.input}
                      type="text"
                      name={`stabProdConf${row.id}_batch`}
                    />
                  </td>
                  <td style={styles.tdBatchOther}>
                    <input
                      style={styles.input}
                      type="text"
                      name={`stabProdConf${row.id}_size`}
                    />
                  </td>
                  <td style={styles.tdBatchOther}>
                    <input
                      style={styles.input}
                      type="text"
                      name={`stabProdConf${row.id}_notes`}
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={3}></td>
                <td style={{ textAlign: "right" }}>
                  <button
                    type="button"
                    onClick={() =>
                      addRow(setProductionBatchRows, productionBatchRows)
                    }
                    style={styles.zoomButton}
                  >
                    +
                  </button>
                  {productionBatchRows.length > 1 && (
                    <button
                      type="button"
                      onClick={() =>
                        removeRow(
                          setProductionBatchRows,
                          productionBatchRows,
                          productionBatchRows[productionBatchRows.length - 1].id
                        )
                      }
                      style={styles.zoomButton}
                    >
                      −
                    </button>
                  )}
                </td>
              </tr>
              <tr>
                <td style={styles.tdBatchFirst} colSpan={4}>
                  Validation studies (primary batches)
                </td>
              </tr>
              {validationBatchRows.map((row) => (
                <tr key={row.id}>
                  <td style={styles.tdBatchFirst}>
                    ‹packaging configuration {row.id}›
                  </td>
                  <td style={styles.tdBatchOther}>
                    <input
                      style={styles.input}
                      type="text"
                      name={`valPrimConf${row.id}_batch`}
                    />
                  </td>
                  <td style={styles.tdBatchOther}>
                    <input
                      style={styles.input}
                      type="text"
                      name={`valPrimConf${row.id}_size`}
                    />
                  </td>
                  <td style={styles.tdBatchOther}>
                    <input
                      style={styles.input}
                      type="text"
                      name={`valPrimConf${row.id}_notes`}
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={3}></td>
                <td style={{ textAlign: "right" }}>
                  <button
                    type="button"
                    onClick={() =>
                      addRow(setValidationBatchRows, validationBatchRows)
                    }
                    style={styles.zoomButton}
                  >
                    +
                  </button>
                  {validationBatchRows.length > 1 && (
                    <button
                      type="button"
                      onClick={() =>
                        removeRow(
                          setValidationBatchRows,
                          validationBatchRows,
                          validationBatchRows[validationBatchRows.length - 1].id
                        )
                      }
                      style={styles.zoomButton}
                    >
                      −
                    </button>
                  )}
                </td>
              </tr>
              <tr>
                <td style={styles.tdBatchFirst}>
                  Validation studies (at least the first three consecutive
                  production batches) or code(s)/version(s) for process
                  validation protocol(s)
                </td>
                <td style={styles.tdBatchOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="valProd_batches"
                  />
                </td>
                <td style={styles.tdBatchOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="valProd_codes"
                  />
                </td>
                <td style={styles.tdBatchOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="valProd_versions"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <p
            style={{
              ...styles.h2,
              textAlign: "left",
              margin: "2rem 0 0",
            }}
          >
            Summary of formulations and discussion of any differences:
          </p>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tdFormulationFirst} rowSpan={4}>
                  Component and quality standard (e.g. NF, BP, Ph.Eur, in-house)
                </th>
                <th style={styles.th} colSpan={8}>
                  Relevant batches
                </th>
              </tr>
              <tr
                style={{
                  ...styles.h2,
                }}
              >
                <td style={styles.tdFormulationOther} colSpan={2}>
                  Comparative bioavailability or bio waiver
                </td>
                <td style={styles.tdFormulationOther} colSpan={2}>
                  Stability
                </td>
                <td style={styles.tdFormulationOther} colSpan={2}>
                  Process validation
                </td>
                <td style={styles.tdFormulationOther} colSpan={2}>
                  Commercial (2.3.P.1)
                </td>
              </tr>
              <tr
                style={{
                  ...styles.h2,
                }}
              >
                <td style={styles.tdFormulationOther} colSpan={2}>
                  &lt;Batch nos. and sizes&gt;
                </td>
                <td style={styles.tdFormulationOther} colSpan={2}>
                  &lt;Batch nos. and sizes&gt;
                </td>
                <td style={styles.tdFormulationOther} colSpan={2}>
                  &lt;Batch nos. and sizes&gt;
                </td>
                <td style={styles.tdFormulationOther} colSpan={2}>
                  &lt;Batch nos. and sizes&gt;
                </td>
              </tr>
              <tr
                style={{
                  ...styles.h2,
                }}
              >
                <td style={{ ...styles.th, textAlign: "center" }} colSpan={1}>
                  Theor. quantity per batch
                </td>
                <td style={{ ...styles.th, textAlign: "center" }}>%</td>
                <td style={{ ...styles.th, textAlign: "center" }}>
                  Theor. quantity per batch
                </td>
                <td style={{ ...styles.th, textAlign: "center" }}>%</td>
                <td style={{ ...styles.th, textAlign: "center" }}>
                  Theor. quantity per batch
                </td>
                <td style={{ ...styles.th, textAlign: "center" }}>%</td>
                <td style={{ ...styles.th, textAlign: "center" }}>
                  Theor. quantity per batch
                </td>
                <td style={{ ...styles.th, textAlign: "center" }}>%</td>
              </tr>
              <tr>
                <td style={styles.tdFormulationOther} colSpan={9}>
                  &lt;complete with appropriate titles e.g. Core tablet (Layer
                  1, Layer 2, etc. as applicable), Contents of capsule, Powder
                  for injection&gt;
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tdFormulationFirst}>
                  <input style={styles.input} type="text" name="fd_comp1" />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input style={styles.input} type="text" name="fd_bio_qty1" />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input style={styles.input} type="text" name="fd_bio_pct1" />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input style={styles.input} type="text" name="fd_stab_qty1" />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input style={styles.input} type="text" name="fd_stab_pct1" />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input style={styles.input} type="text" name="fd_proc_qty1" />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input style={styles.input} type="text" name="fd_proc_pct1" />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input style={styles.input} type="text" name="fd_comm_qty1" />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input style={styles.input} type="text" name="fd_comm_pct1" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdFormulationFirst}>Subtotal 1</td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_bio_sub1_qty"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_bio_sub1_pct"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_stab_sub1_qty"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_stab_sub1_pct"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_proc_sub1_qty"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_proc_sub1_pct"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_comm_sub1_qty"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_comm_sub1_pct"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdFormulationOther} colSpan={9}>
                  &lt;complete with appropriate title e.g. Film-coating &gt;
                </td>
              </tr>
              <tr>
                <td style={styles.tdFormulationFirst}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_coat_comp1"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_coat_bio_qty1"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_coat_bio_pct1"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_coat_stab_qty1"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_coat_stab_pct1"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_coat_proc_qty1"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_coat_proc_pct1"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_coat_comm_qty1"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_coat_comm_pct1"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdFormulationFirst}>Subtotal 2</td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_bio_sub2_qty"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_bio_sub2_pct"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_stab_sub2_qty"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_stab_sub2_pct"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_proc_sub2_qty"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_proc_sub2_pct"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_comm_sub2_qty"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_comm_sub2_pct"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdFormulationFirst}>Total</td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_bio_total_qty"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_bio_total_pct"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_stab_total_qty"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_stab_total_pct"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_proc_total_qty"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_proc_total_pct"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_comm_total_qty"
                  />
                </td>
                <td style={styles.tdFormulationOther}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fd_comm_total_pct"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Manufacture */}
          <h3
            style={{
              ...styles.h2,
              textAlign: "left",
              margin: "2rem 0 0",
            }}
          >
            2.3.P.3 Manufacture
          </h3>

          <h4
            style={{
              ...styles.h2,
              textAlign: "left",
              margin: "0.2rem 0 0",
            }}
          >
            2.3.P.3.1 Manufacturer(s)
          </h4>
          <div style={{ display: "flex", gap: "1rem" }}>
            <p style={{ ...styles.p, margin: "0.2rem 0 0" }}>(b)</p>
            <p
              style={{
                ...styles.h2,
                textAlign: "left",
                margin: "0.2rem 0 0",
              }}
            >
              Name, address and responsibility (e.g. fabrication, packaging,
              labelling, testing) of each manufacturer, including contractors
              and each proposed production site or facility involved in
              manufacturing and testing:
            </p>
          </div>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>
                  Name and address (include block(s)/unit(s))
                </th>
                <th style={styles.th}>Responsibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="p31_name1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="p31_resp1" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="p31_name2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="p31_resp2" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="p31_name3" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="p31_resp3" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="p31_name4" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="p31_resp4" />
                </td>
              </tr>
            </tbody>
          </table>

          <h4
            style={{
              ...styles.h2,
              textAlign: "left",
              margin: "2rem 0 0",
            }}
          >
            2.3.P.3.2 Batch Formula
          </h4>
          <p style={styles.p}>Largest intended commercial batch size:</p>
          <textarea style={styles.textarea} name="largestBatchSize" />
          <p style={styles.p}>Other intended commercial batch sizes:</p>
          <textarea style={styles.textarea} name="otherBatchSizes" />
          <p style={styles.p}>
            &lt;Information on all intended commercial batch sizes should be in
            the QIS&gt;
          </p>
          <p style={styles.p}>
            (a) List of all components of the FPP to be used in the
            manufacturing process and their amounts on a per batch basis
            (including components of mixtures prepared in-house (e.g. coatings)
            and overages, if any):
          </p>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Strength (label claim)</th>
                <th style={styles.th}></th>
                <th style={styles.th}></th>
                <th style={styles.th}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tdLabel}>
                  Master production document reference number and/or version
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="mpdRef1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="mpdRef2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="mpdRef3" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  Proposed commercial batch size(s) (e.g. number of dosage
                  units)
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="batchSize1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="batchSize2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="batchSize3" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  Component and quality standard (and grade, if applicable)
                </td>
                <td style={styles.tdLabel}>
                  Quantity per batch (e.g. kg/batch)
                </td>
                <td style={styles.tdLabel}>
                  Quantity per batch (e.g. kg/batch)
                </td>
                <td style={styles.tdLabel}>
                  Quantity per batch (e.g. kg/batch)
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel} colSpan={4}>
                  &lt;complete with appropriate titles e.g. Core tablet (Layer
                  1, Layer 2, etc. as applicable), Contents of capsule, Powder
                  for injection&gt;
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="bf_comp1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="bf_qty1_s1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="bf_qty1_s2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="bf_qty1_s3" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="bf_comp2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="bf_qty2_s1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="bf_qty2_s2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="bf_qty2_s3" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Subtotal 1</td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="bf_subtotal1_s1"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="bf_subtotal1_s2"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="bf_subtotal1_s3"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel} colSpan={4}>
                  &lt;complete with appropriate title e.g. Film-coating &gt;
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="bf_coat_comp1"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="bf_coat_qty1_s1"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="bf_coat_qty1_s2"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="bf_coat_qty1_s3"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="bf_coat_comp2"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="bf_coat_qty2_s1"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="bf_coat_qty2_s2"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="bf_coat_qty2_s3"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Subtotal 2</td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="bf_subtotal2_s1"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="bf_subtotal2_s2"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="bf_subtotal2_s3"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Total</td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="bf_total_s1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="bf_total_s2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="bf_total_s3" />
                </td>
              </tr>
            </tbody>
          </table>

          <h4 style={styles.h4}>
            2.3. P.3.3 Description of Manufacturing Process and Process Controls
          </h4>
          <p style={styles.p}>(a) Flow diagram of the manufacturing process:</p>
          <textarea style={styles.textarea} name="flowDiagram" rows={3} />
          <p style={styles.p}>
            Narrative description of the manufacturing process, including
            equipment type and working capacity, process parameters:
          </p>
          <textarea style={styles.textarea} name="processNarrative" rows={6} />

          <h4 style={styles.h4}>
            2.3. P.3.4 Controls of Critical Steps and Intermediates
          </h4>
          <p style={styles.p}>
            (a) Summary of controls performed at the critical steps of the
            manufacturing process and on isolated intermediates:
          </p>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>
                  Step (e.g. granulation, compression, coating)
                </th>
                <th style={styles.th}>
                  Controls (parameters/limits/frequency of testing)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="critStep1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="critCtrl1" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="critStep2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="critCtrl2" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="critStep3" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="critCtrl3" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="critStep4" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="critCtrl4" />
                </td>
              </tr>
            </tbody>
          </table>

          <p style={styles.p}>
            Proposed/validated holding periods for intermediates (including bulk
            product):
          </p>
          <textarea style={styles.textarea} name="holdingPeriods" rows={3} />

          <h4 style={styles.h4}>
            2.3. P.3.5 Process Validation and/or Evaluation
          </h4>
          <p style={styles.p}>
            (a) Summary of the process validation and/or evaluation studies
            conducted and/or a summary of the proposed validation protocol for
            the critical steps or critical assays used in the manufacturing
            process (e.g. protocol number, parameters, results):
          </p>
          <textarea style={styles.textarea} name="pvSummary" rows={6} />
          <p style={styles.p}>
            Document code(s) for the process validation protocol(s) and/or
            report(s) (including reference number/version/date):
          </p>
          <textarea style={styles.textarea} name="pvDocs" rows={3} />

          {/* CONTROL OF FPP */}
          <h2 style={styles.h2}>2.3. P.5 Control of FPP</h2>

          <h3 style={styles.h3}>2.3. P.5.1 Specification(s)</h3>
          <p style={styles.p}>(a) Specification(s) for the FPP:</p>

          <table style={styles.table}>
            <tbody>
              <tr>
                <th style={styles.th} colSpan={2}>
                  Standard (e.g. Ph.Int., BP, USP, in-house)
                </th>
                <th style={styles.th}></th>
                <th style={styles.th}></th>
              </tr>
              <tr>
                <td style={styles.tdLabel} colSpan={2}>
                  Specification reference number and version
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppSpecRefVersion1"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppSpecRefVersion2"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Test</td>
                <td style={styles.tdLabel}>Acceptance criteria (release)</td>
                <td style={styles.tdLabel}>Acceptance criteria (shelf-life)</td>
                <td style={styles.tdLabel}>
                  Analytical procedure (type/source/version)
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Description</td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="fppDescRel" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="fppDescShelf" />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppDescMethod"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Identification</td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="fppIdRel" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="fppIdShelf" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="fppIdMethod" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Impurities</td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="fppImpRel" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="fppImpShelf" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="fppImpMethod" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Assay</td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="fppAssayRel" />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppAssayShelf"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppAssayMethod"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>etc.</td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="fppEtcRel" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="fppEtcShelf" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="fppEtcMethod" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel}></td>
              </tr>
              <tr>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel}></td>
              </tr>
            </tbody>
          </table>

          {/* CONTAINER CLOSURE SYSTEM */}
          <h2 style={styles.h2}>2.3. P.7 Container Closure System</h2>
          <p style={styles.p}>
            (a) Description of the container closure systems, including unit
            count or fill size, container size or volume:
          </p>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>
                  Description (including materials of construction)
                </th>
                <th style={styles.th}>Strength</th>
                <th style={styles.th}>
                  Unit count or fill size (e.g. 60s, 100s etc.)
                </th>
                <th style={styles.th}>
                  Container size (E.g. 5 ml, 100 ml etc.)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tdLabel} rowSpan={3}>
                  <textarea
                    style={styles.textarea}
                    name="fppCcsDesc1"
                    rows={5}
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsStrength1"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsUnitCount1"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsContainerSize1"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsStrength2"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsUnitCount2"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsContainerSize2"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsStrength3"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsUnitCount3"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsContainerSize3"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel} rowSpan={3}>
                  <textarea
                    style={styles.textarea}
                    name="fppCcsDesc2"
                    rows={5}
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsStrength4"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsUnitCount4"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsContainerSize4"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsStrength5"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsUnitCount5"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsContainerSize5"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsStrength6"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsUnitCount6"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppCcsContainerSize6"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* STABILITY */}
          <h2 style={styles.h2}>2.3. P.8 Stability</h2>

          <h3 style={styles.h3}>
            2.3. P.8.1 Stability Summary and Conclusions
          </h3>
          <p style={styles.p}>
            Proposed storage statement and shelf-life (and in-use storage
            conditions and in-use
          </p>
          <p style={styles.p}>Period, if applicable):</p>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Container closure system</th>
                <th style={styles.th}>Storage statement</th>
                <th style={styles.th}>Shelf-life</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppStabilityCcs1"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppStabilityStorage1"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppStabilityShelf1"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppStabilityCcs2"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppStabilityStorage2"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="fppStabilityShelf2"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <h3 style={styles.h3}>
            2.3. P.8.2 Post-approval Stability Protocol and Stability Commitment
          </h3>
          <p style={styles.p}>
            Stability protocol for Primary stability batches (e.g. storage
            conditions (including tolerances), batch numbers and batch sizes,
            tests and acceptance criteria, testing frequency, container closure
            system(s):
          </p>

          <table style={styles.table}>
            <tbody>
              <tr>
                <th style={styles.th}>Parameter</th>
                <th style={styles.th}></th>
                <th style={styles.th} colSpan={2}>
                  Details
                </th>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Storage condition(s) (◦C, % RH)</td>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel} colSpan={2}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_primaryStorageConditions"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Batch number(s) / batch size(s)</td>
                <td style={styles.tdLabel}>&lt;primary batches&gt;</td>
                <td style={styles.tdLabel} colSpan={2}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_primaryBatchInfo"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel} rowSpan={6}>
                  Tests and acceptance criteria
                </td>
                <td style={styles.tdLabel}>Description</td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_primaryDescCrit"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_primaryDescNotes"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Moisture</td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_primaryMoistCrit"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_primaryMoistNotes"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Impurities</td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_primaryImpCrit"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_primaryImpNotes"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Assay</td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_primaryAssayCrit"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_primaryAssayNotes"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>etc.</td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_primaryEtcCrit"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_primaryEtcNotes"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_primaryOtherCrit"
                  />
                </td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_primaryOtherNotes"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Testing frequency</td>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel} colSpan={2}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_primaryTestingFrequency"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Container closure system(s)</td>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel} colSpan={2}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_primaryContainerSystems"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel} colSpan={2}></td>
              </tr>
            </tbody>
          </table>

          <p style={styles.p}>
            Stability protocol for Commitment batches (e.g. storage conditions
            (including tolerances), batch numbers (if known) and batch sizes,
            tests and acceptance criteria, testing frequency, container closure
            system(s)):
          </p>

          <table style={styles.table}>
            <tbody>
              <tr>
                <th style={styles.th}>Parameter</th>
                <th style={styles.th} colSpan={2}>
                  Details
                </th>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Storage condition(s) (◦C, % RH)</td>
                <td style={styles.tdLabel} colSpan={2}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_commitStorageConditions"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Batch number(s) / batch size(s)</td>
                <td style={styles.tdLabel} colSpan={2}>
                  &lt;not less than three production batches in each container
                  closure system&gt;
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel} rowSpan={5}>
                  Tests and acceptance criteria
                </td>
                <td style={styles.tdLabel}>Description</td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_commitDescCrit"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Moisture</td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_commitMoistCrit"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Impurities</td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_commitImpCrit"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Assay</td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_commitAssayCrit"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>etc.</td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_commitEtcCrit"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Testing frequency</td>
                <td style={styles.tdLabel} colSpan={2}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_commitTestingFrequency"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Container closure system(s)</td>
                <td style={styles.tdLabel} colSpan={2}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_commitContainerSystems"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel} colSpan={2}></td>
              </tr>
            </tbody>
          </table>

          <p style={styles.p}>
            Stability protocol for Ongoing Batches (e.g. storage conditions
            (including tolerances), number of batches per strength and batch
            sizes, tests and acceptance criteria, testing frequency, container
            closure system(s)):
          </p>

          <table style={styles.table}>
            <tbody>
              <tr>
                <th style={styles.th}>Parameter</th>
                <th style={styles.th} colSpan={2}>
                  Details
                </th>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Storage condition(s) (◦C, % RH)</td>
                <td style={styles.tdLabel} colSpan={2}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_ongoingStorageConditions"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Batch size(s), annual allocation</td>
                <td style={styles.tdLabel} colSpan={2}>
                  &lt;at least one production batch per year (unless none is
                  produced that year) in each container closure system &gt;
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel} rowSpan={5}>
                  Tests and acceptance criteria
                </td>
                <td style={styles.tdLabel}>Description</td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_ongoingDescCrit"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Moisture</td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_ongoingMoistCrit"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Impurities</td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_ongoingImpCrit"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Assay</td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_ongoingAssayCrit"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>etc.</td>
                <td style={styles.tdLabel}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_ongoingEtcCrit"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Testing frequency</td>
                <td style={styles.tdLabel} colSpan={2}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_ongoingTestingFrequency"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Container closure system(s)</td>
                <td style={styles.tdLabel} colSpan={2}>
                  <input
                    style={styles.input}
                    type="text"
                    name="p82_ongoingContainerSystems"
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Parameter</td>
                <td style={styles.tdLabel} colSpan={2}>
                  Details
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}></td>
                <td style={styles.tdLabel} colSpan={2}></td>
              </tr>
            </tbody>
          </table>

          <h3 style={styles.h3}>2.3. P.8.3 Stability Data</h3>
          <p style={styles.p}>
            (c) Bracketing and matrixing design for commitment and/or continuing
            (i.e. ongoing) batches, if applicable:
          </p>

          {/* WRITTEN COMMITMENTS */}
          <h2 style={styles.h2}>
            ## WRITTEN COMMITMENTS OF THE MANUFACTURER – FOR NAFDAC USE
          </h2>

          <h3 style={styles.h3}>API</h3>
          <p style={styles.p}>
            If applicable (primary stability study commitment):
          </p>

          <table style={styles.table}>
            <tbody>
              <tr>
                <th style={styles.th} colSpan={2}>
                  The Applicant (or API manufacturer) undertook in writing (date
                  of letter of commitment) to continue long-term testing of
                  &lt;INN of API&gt; for a period of time sufficient to cover
                  the whole provisional re-test period (period ending
                  month/year) and to report any significant changes or
                  out-of-specification results immediately to NAFDAC for the
                </th>
              </tr>
              <tr>
                <td style={styles.tdLabel}>following batches :</td>
                <td style={styles.tdLabel}>
                  <textarea
                    style={styles.textarea}
                    name="apiCommitBatches"
                    rows={3}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <p style={styles.p}>
            &lt;Batch numbers, manufacturing dates, batch size, primary packing
            materials&gt; If applicable (commitment stability studies):
          </p>

          <table style={styles.table}>
            <tbody>
              <tr>
                <th style={styles.th} colSpan={2}>
                  Since stability data on three production scale batches were
                  not provided with the application, the remaining number of
                  production scale batches should be put on long-term stability
                  testing. Any significant changes or out of specification
                  results should be reported immediately to NAFDAC. The approved
                  stability protocol should be used for
                </th>
              </tr>
              <tr>
                <td style={styles.tdLabel}>Commitment batches.</td>
                <td style={styles.tdLabel}>
                  <textarea
                    style={styles.textarea}
                    name="apiCommitmentNotes"
                    rows={2}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <p style={styles.p}>API option 2 – CEP</p>
          <table style={styles.table}>
            <tbody>
              <tr>
                <th style={styles.th} colSpan={2}>
                  The Applicant provided a commitment in writing (date of letter
                  of commitment) to inform NAFDAC in the event that the CEP is
                  revised or withdrawn, and that revisions to the CEP will be
                  handled as per variation 5 (Annex 3, TRS 981). Note that
                  revisions or withdrawal will require additional consideration
                  of the API data requirements to support the
                </th>
              </tr>
              <tr>
                <td style={styles.tdLabel}>dossier.</td>
                <td style={styles.tdLabel}></td>
              </tr>
            </tbody>
          </table>

          <p style={styles.p}>
            API option 3 – full details in the PD (ongoing stability study
            commitment)
          </p>
          <table style={styles.table}>
            <tbody>
              <tr>
                <th style={styles.th} colSpan={2}>
                  The Applicant undertook in writing (date of letter of
                  commitment) a commitment regarding ongoing stability studies.
                  Unless otherwise justified, at least one batch per year of the
                  product will be included in the stability programme (unless
                  none is produced during that year). The stability protocol
                  will be that which was approved for primary batches (or the
                  protocol was submitted for assessment). Out-of-specification
                  results or significant atypical trends will be investigated.
                  Any confirmed significant change or out-of-specification
                  result will be reported immediately to NAFDAC. The possible
                  impact on batches on the market will be considered in
                  consultation with NAFDAC
                </th>
              </tr>
              <tr>
                <td style={styles.tdLabel}>inspectors.</td>
                <td style={styles.tdLabel}></td>
              </tr>
            </tbody>
          </table>

          <h3 style={styles.h3}>FPP</h3>
          <p style={styles.p}>
            If applicable (primary stability study commitment):
          </p>

          <table style={styles.table}>
            <tbody>
              <tr>
                <th style={styles.th} colSpan={2}>
                  The Applicant undertook in writing (date of letter of
                  commitment) to continue long-term testing of &lt; FPP
                  reference number, trade name (INN of API), strength,
                  pharmaceutical form&gt; for a period of time sufficient to
                  cover the whole provisional shelf-life (period ending
                  month/year) and to report any out-of-specification results or
                  significant
                </th>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  changes immediately to NAFDAC for the following batches :
                </td>
                <td style={styles.tdLabel}>
                  <textarea
                    style={styles.textarea}
                    name="fppCommitBatches"
                    rows={3}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <p style={styles.p}>
            &lt;Batch numbers, manufacturing dates, batch size, primary packing
            materials &gt; If applicable (commitment stability studies):
          </p>
          <table style={styles.table}>
            <tbody>
              <tr>
                <th style={styles.th} colSpan={2}>
                  Since stability data on three production scale batches was not
                  provided with the application, the Applicant undertook in
                  writing, (date of letter of commitment) to put the remaining
                  number &lt;e.g. additional two (2)&gt; production scale
                  batches of &lt; FPP reference number, trade name (INN of API),
                  strength, pharmaceutical form, primary packing material&gt; on
                  long-term stability testing. Any out-of-specification results
                  or significant changes during the study will immediately be
                  reported to NAFDAC. The approved stability protocol will be
                  used for
                </th>
              </tr>
              <tr>
                <td style={styles.tdLabel}>commitment batches.</td>
                <td style={styles.tdLabel}>
                  <textarea
                    style={styles.textarea}
                    name="fppCommitmentNotes"
                    rows={2}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <table style={styles.table}>
            <tbody>
              <tr>
                <th style={styles.th}>
                  If applicable (when the proposed largest commercial batch size
                  is 200 000 units (x units) or less)
                </th>
                <th style={styles.th}></th>
              </tr>
              <tr>
                <td style={styles.tdLabel} colSpan={2}>
                  The Applicant undertook in writing (date of letter of
                  commitment) to place the first three batches of any production
                  size larger than x units on stability. The stability protocol
                  will be that which was approved for primary batches (or the
                  protocol was submitted for assessment). Out-of-specification
                  results or significant atypical trends will be
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel} colSpan={2}>
                  investigated. Any confirmed significant change or
                  out-of-specification result will be reported immediately to
                  NAFDAC.
                </td>
              </tr>
            </tbody>
          </table>

          <h3 style={styles.h3}>### Ongoing stability study commitment</h3>
          <p style={styles.p}>
            The Applicant undertook in writing (date of letter of commitment) a
            commitment regarding ongoing stability studies. Unless otherwise
            justified, at least one batch per year of the product manufactured
            in every primary packaging type will be included in the stability
            programme (unless none is produced during that year). The stability
            protocol will be that which was approved for primary batches (or the
            protocol was submitted and found acceptable). Out-of-specification
            results or significant atypical trends will be investigated. Any
            confirmed significant change or out-of-specification result will be
            reported immediately to NAFDAC. The possible impact on batches on
            the market will be considered in consultation with NAFDAC
            inspectors.
          </p>

          <p style={styles.p}>
            If applicable (validation of production batches)
          </p>
          <table style={styles.table}>
            <tbody>
              <tr>
                <th style={styles.th} colSpan={2}>
                  Validation data on production scale batches of not less than
                  three (3) consecutive batches of &lt;FPP reference number,
                  trade name (INN of API), strength, pharmaceutical form,
                  primary packing material&gt; was not provided with the
                  application. Therefore, the Applicant submitted a written
                  commitment (date of letter of commitment) that three
                  consecutive production batches would be prospectively
                  validated and a validation report —in accordance with the
                  details of the validation protocol provided in the dossier—
                  would be made available as soon as possible for
                </th>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  evaluation by assessors or for verification by the NAFDAC
                  inspection team.
                </td>
                <td style={styles.tdLabel}></td>
              </tr>
            </tbody>
          </table>

          {/* CHANGE HISTORY */}
          <h2 style={styles.h2}>Change History</h2>
          <p style={styles.p}>Date of preparation of original QIS:</p>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Date of revised version</th>
                <th style={styles.th}>Section (e.g. S.2.1)</th>
                <th style={styles.th}>Revision</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="date" name="revDate1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="revSection1" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="revDesc1" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="date" name="revDate2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="revSection2" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="revDesc2" />
                </td>
              </tr>
              <tr>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="date" name="revDate3" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="revSection3" />
                </td>
                <td style={styles.tdLabel}>
                  <input style={styles.input} type="text" name="revDesc3" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default QISForm;
