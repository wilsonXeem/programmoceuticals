import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { reportService } from "../services/reportService";

const Report = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [reportData, setReportData] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    if (location.state?.reportData) {
      setReportData(location.state.reportData);
    } else {
      navigate("/screening");
    }
  }, [location.state, navigate]);

  const downloadReport = async () => {
    if (!reportData) return;

    setIsDownloading(true);
    try {
      const fileName = await reportService.generateInternalReport(
        reportData.dossierName,
        reportData.responses,
        reportData.notes,
        reportData.checklist
      );
      alert(`Report downloaded successfully: ${fileName}`);
    } catch (error) {
      console.error("Error downloading report:", error);
      alert("Error downloading report. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const getSummaryStats = () => {
    if (!reportData)
      return {
        answered: 0,
        total: 0,
        yesCount: 0,
        noCount: 0,
        partialCount: 0,
        complianceRate: 0,
      };

    const completenessItems = reportData.checklist.filter(
      (item) => !item.excludeFromCompleteness
    );
    const answered = completenessItems.filter((item) =>
      reportData.responses.has(item.id)
    ).length;
    const yesCount = Array.from(reportData.responses.values()).filter(
      (r) => r === "yes"
    ).length;
    const noCount = Array.from(reportData.responses.values()).filter(
      (r) => r === "no"
    ).length;
    const partialCount = Array.from(reportData.responses.values()).filter(
      (r) => r === "partial"
    ).length;
    const complianceRate =
      answered > 0
        ? Math.round(((yesCount + partialCount * 0.5) / answered) * 100)
        : 0;

    return {
      answered,
      total: completenessItems.length,
      yesCount,
      noCount,
      partialCount,
      complianceRate,
    };
  };

  const getStatusColor = (response) => {
    switch (response) {
      case "yes":
        return "#28a745";
      case "no":
        return "#dc3545";
      case "partial":
        return "#ffc107";
      default:
        return "#6c757d";
    }
  };

  const getStatusIcon = (response) => {
    switch (response) {
      case "yes":
        return "✅";
      case "no":
        return "❌";
      case "partial":
        return "⚠️";
      default:
        return "❓";
    }
  };

  if (!reportData) {
    return (
      <div className="container">
        <div className="card">
          <h2>Loading Report...</h2>
        </div>
      </div>
    );
  }

  const stats = getSummaryStats();

  return (
    <div
      className="container"
      style={{ maxWidth: "1000px", margin: "0 auto", padding: "1rem" }}
    >
      <div
        className="card pdf-report-content"
        style={{
          padding: "2rem",
          background: "white",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          border: "1px solid #ddd",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          lineHeight: "1.5",
          color: "#000000",
        }}
      >
        {/* Professional Header */}
        <div
          style={{
            borderBottom: "3px solid #2c3e50",
            paddingBottom: "2rem",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: "0 0 1rem 0",
              fontSize: "14px",
              fontWeight: "700",
              color: "#2c3e50",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            NAFDAC Internal Screening Report
          </h1>
          <div
            style={{
              fontSize: "14px",
              color: "#666",
              lineHeight: "1.6",
            }}
          >
            <div style={{ marginBottom: "0.5rem" }}>
              <strong>Dossier Name:</strong> {reportData.dossierName}
            </div>
            <div>
              <strong>Report Generated:</strong>{" "}
              {new Date().toLocaleDateString()} at{" "}
              {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className="no-print"
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "2rem",
            justifyContent: "center",
            paddingBottom: "2rem",
            borderBottom: "1px solid #ddd",
          }}
        >
          <button
            onClick={() => navigate("/screening")}
            style={{
              padding: "0.75rem 1.5rem",
              background: "#6c757d",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            ← Back to Screening
          </button>

          <button
            onClick={downloadReport}
            disabled={isDownloading}
            style={{
              padding: "0.75rem 1.5rem",
              background: isDownloading ? "#f8f9fa" : "#28a745",
              color: isDownloading ? "#666" : "white",
              border: isDownloading ? "1px solid #ddd" : "none",
              cursor: isDownloading ? "not-allowed" : "pointer",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            {isDownloading ? "Generating PDF..." : "Download PDF Report"}
          </button>
        </div>

        {/* Detailed Assessment Results */}
        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#2c3e50",
              marginBottom: "1.5rem",
              borderBottom: "2px solid #2c3e50",
              paddingBottom: "0.5rem",
            }}
          >
            Detailed Assessment Results
          </h2>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {reportData.checklist.map((item) => {
              const response = reportData.responses.get(item.id);
              const note = reportData.notes.get(item.id) || "";

              if (!response) return null;

              return (
                <div
                  key={item.id}
                  style={{
                    background: "white",
                    border: `1px solid ${getStatusColor(response)}`,
                    padding: "1.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        background: getStatusColor(response),
                        color: "white",
                        padding: "0.5rem",
                        fontSize: "14px",
                        minWidth: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        fontWeight: "600",
                      }}
                    >
                      Q{item.id}
                    </div>

                    <div style={{ flex: 1 }}>
                      <h4
                        style={{
                          margin: "0 0 0.75rem 0",
                          color: "#2c3e50",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        {item.question}
                      </h4>

                      <div
                        style={{
                          background: "#f8f9fa",
                          padding: "0.75rem",
                          fontSize: "14px",
                          marginBottom: "0.75rem",
                          border: "1px solid #dee2e6",
                        }}
                      >
                        <strong>Section:</strong> {item.section} |{" "}
                        <strong>Module:</strong> {item.moduleRef}
                      </div>

                      {note && (
                        <div
                          style={{
                            background: "#f8f9fa",
                            padding: "1rem",
                            borderLeft: `4px solid ${getStatusColor(response)}`,
                            fontSize: "14px",
                            lineHeight: "1.5",
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          <strong style={{ color: "#495057" }}>
                            Assessment Notes:
                          </strong>
                          <div
                            style={{ marginTop: "0.5rem", color: "#6c757d" }}
                          >
                            {note}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            background: "#f8f9fa",
            padding: "2rem",
            textAlign: "center",
            fontSize: "14px",
            color: "#6c757d",
            borderTop: "2px solid #dee2e6",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              fontWeight: "600",
              marginBottom: "0.5rem",
              color: "#2c3e50",
            }}
          >
            Programmoceuticals Dossier Screening System
          </div>
          {/* <div style={{ lineHeight: "1.5" }}>
            This report was generated automatically based on regulatory
            compliance assessment.
            <br />
            For questions or clarifications, contact the NAFDAC review team.
          </div>
          <div
            style={{ marginTop: "1rem", fontSize: "14px", fontStyle: "italic" }}
          >
            National Agency for Food and Drug Administration and Control
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Report;
