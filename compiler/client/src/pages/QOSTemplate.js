import React, { useState } from "react";
import { Link } from "react-router-dom";
import QOSDocument from "../components/qos/QOSDocument";
import { loadUploadedFiles, saveUploadedFiles } from "../utils/uploadStorage";
import { mapRequirementsToNode } from "../utils/requirementsMapper";
import {
  getDocumentRequirements,
  getSectionRules,
  validateFileForSection
} from "../utils/ctdValidation";

const QOS_SECTION_PATH = "/ctd/module2/2.3";
const QOS_API_OPTION = "option4";

const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function QOSTemplate() {
  const [saveStatus, setSaveStatus] = useState("");
  const [saveError, setSaveError] = useState("");
  const [isSavingToCompiler, setIsSavingToCompiler] = useState(false);

  const handleSaveQosToCompiler = async (file) => {
    if (!file) return;
    setSaveStatus("");
    setSaveError("");
    setIsSavingToCompiler(true);
    try {
      const requirement = mapRequirementsToNode(QOS_SECTION_PATH, QOS_API_OPTION, "2.3");
      const validation = validateFileForSection({
        file,
        nodePath: QOS_SECTION_PATH,
        requirement,
        requirementKey: "2.3"
      });
      if (!validation.ok) {
        throw new Error(validation.message || "QOS file is not valid for section 2.3.");
      }

      const rules = getSectionRules(QOS_SECTION_PATH, requirement, "2.3");
      const documentRequirements = getDocumentRequirements({
        fileName: file.name,
        rules
      });
      const attestations = documentRequirements.reduce((acc, req) => {
        acc[req.id] = true;
        return acc;
      }, {});

      const uploadedFilesMap = await loadUploadedFiles();
      uploadedFilesMap.set(QOS_SECTION_PATH, {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        data: await fileToBase64(file),
        attestations,
        isSupplemental: false
      });
      await saveUploadedFiles(Array.from(uploadedFilesMap.entries()));
      setSaveStatus("QOS saved to Compiler section 2.3 as Word document.");
    } catch (error) {
      setSaveError(error?.message || "Could not save QOS to compiler.");
    } finally {
      setIsSavingToCompiler(false);
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem 1rem 2rem" }}>
      <div
        style={{
          background: "white",
          border: "1px solid #dbe2ea",
          borderRadius: "10px",
          padding: "1rem",
          marginBottom: "1rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem"
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "1.3rem", color: "#0b5ed7" }}>QOS Template Studio</h1>
          <p style={{ margin: "0.45rem 0 0 0", fontSize: "0.9rem", color: "#475569" }}>
            Complete the official QOS structure and export as a Word document for section 2.3.
          </p>
          <p style={{ margin: "0.4rem 0 0 0", fontSize: "0.82rem", color: "#1e3a8a" }}>
            QOS in this workflow is enforced as Word (`.doc/.docx`) for module 2.3.
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.55rem", flexWrap: "wrap" }}>
          <a
            href="/templates/NAFDAC-QOS-PD26379.docx"
            download
            style={{
              border: "1px solid #334155",
              color: "#334155",
              borderRadius: "8px",
              padding: "0.55rem 0.9rem",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.85rem"
            }}
          >
            Download Official Blank QOS
          </a>
          <Link
            to="/app"
            style={{
              border: "1px solid #0b5ed7",
              color: "#0b5ed7",
              borderRadius: "8px",
              padding: "0.55rem 0.9rem",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.85rem"
            }}
          >
            Back to Compiler
          </Link>
        </div>
      </div>

      {saveError && (
        <div
          style={{
            background: "#fee2e2",
            border: "1px solid #fecaca",
            borderRadius: "8px",
            color: "#b91c1c",
            padding: "0.7rem 0.85rem",
            marginBottom: "1rem",
            fontSize: "0.86rem"
          }}
        >
          {saveError}
        </div>
      )}

      {saveStatus && !saveError && (
        <div
          style={{
            background: "#ecfeff",
            border: "1px solid #a5f3fc",
            borderRadius: "8px",
            color: "#155e75",
            padding: "0.7rem 0.85rem",
            marginBottom: "1rem",
            fontSize: "0.86rem"
          }}
        >
          {saveStatus}
        </div>
      )}

      <QOSDocument onSaveToCompiler={handleSaveQosToCompiler} savingToCompiler={isSavingToCompiler} />
    </div>
  );
}

export default QOSTemplate;
