import React, { useState } from "react";
import QISFrontPage from "./QISFrontPage";
import QISForm from "./QISForm";
import "./QISDocument.css";

function QISDocument() {
  const [showFrontPage, setShowFrontPage] = useState(true);

  const handleExport = () => {
    // Get the complete document content
    const frontPageElement = document.querySelector('.qis-front-page');
    const formElement = document.querySelector('.qis-form');
    
    if (!frontPageElement || !formElement) {
      alert('Please ensure both front page and form are loaded before exporting.');
      return;
    }
    
    // Create export content with proper Word formatting
    const exportContent = `
      <!DOCTYPE html>
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word'>
        <head>
          <meta charset='utf-8'>
          <title>QIS Document</title>
          <!--[if gte mso 9]>
          <xml>
            <w:WordDocument>
              <w:View>Print</w:View>
              <w:Zoom>90</w:Zoom>
              <w:DoNotPromptForConvert/>
              <w:DoNotShowInsertionsAndDeletions/>
            </w:WordDocument>
          </xml>
          <![endif]-->
          <style>
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Times New Roman', serif;
              font-size: 12px;
              line-height: 1.15;
            }
            @page { 
              size: A4; 
              margin: 25.4mm 20mm;
            }
            .page-break { 
              page-break-before: always;
              break-before: page;
            }
            table { 
              border-collapse: collapse;
              width: 100%;
            }
            th, td { 
              border: 1px solid black;
              padding: 4px 6px;
              font-size: 11px;
            }
            input, textarea {
              border: none;
              outline: none;
              background: transparent;
              width: 100%;
              font-family: 'Times New Roman', serif;
              font-size: 11px;
            }
          </style>
        </head>
        <body>
          ${frontPageElement.outerHTML}
          <div class="page-break"></div>
          ${formElement.outerHTML}
        </body>
      </html>
    `;
    
    // Create blob and download
    const blob = new Blob([exportContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'QIS_Document.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const styles = {
    container: {
      width: "100%",
      maxWidth: "210mm",
      margin: "0 auto",
    },
    navigation: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      margin: "20px 0",
      padding: "10px",
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
    },
    navButton: {
      padding: "8px 16px",
      border: "1px solid #ccc",
      backgroundColor: "white",
      cursor: "pointer",
      borderRadius: "3px",
      fontSize: "14px",
    },
    activeButton: {
      backgroundColor: "#007bff",
      color: "white",
      border: "1px solid #007bff",
    },
    pageBreak: {
      pageBreakAfter: "always",
      height: "0",
      margin: "0",
      padding: "0",
    },
    exportButton: {
      padding: "10px 20px",
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
      marginLeft: "10px",
    },
    printStyles: {
      '@media print': {
        '.screen-only': { display: 'none' },
        '.print-only': { display: 'block !important' },
        body: { margin: 0, padding: 0 },
        '@page': { margin: 0, size: 'A4' }
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <div className="screen-only" style={styles.navigation}>
        <button
          style={{
            ...styles.navButton,
            ...(showFrontPage ? styles.activeButton : {}),
          }}
          onClick={() => setShowFrontPage(true)}
        >
          Front Page
        </button>
        <button
          style={{
            ...styles.navButton,
            ...(!showFrontPage ? styles.activeButton : {}),
          }}
          onClick={() => setShowFrontPage(false)}
        >
          QIS Form
        </button>
        <button
          style={styles.exportButton}
          onClick={handleExport}
        >
          Export to Word
        </button>
      </div>

      {/* Content - Screen View */}
      <div className="screen-only">
        {showFrontPage ? (
          <QISFrontPage />
        ) : (
          <QISForm />
        )}
      </div>
      
      {/* For print/export: both pages together with page break */}
      <div className="print-only" style={{ display: "none" }}>
        <QISFrontPage />
        <div style={styles.pageBreak}></div>
        <QISForm />
      </div>
    </div>
  );
}

export default QISDocument;