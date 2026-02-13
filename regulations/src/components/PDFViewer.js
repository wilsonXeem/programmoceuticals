import React, { useState, useEffect } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { searchPlugin } from "@react-pdf-viewer/search";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import { pdfTextExtractionService } from '../services/pdfTextExtractionService';

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/search/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";

const PDFViewer = ({ fileUrl, height = "70vh" }) => {
  const [fullDocumentText, setFullDocumentText] = useState('');
  const [isExtracting, setIsExtracting] = useState(false);
  const [searchMatches, setSearchMatches] = useState([]);
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');
  
  const searchPluginInstance = searchPlugin();
  const toolbarPluginInstance = toolbarPlugin();
  const { Search } = searchPluginInstance;
  const { Toolbar } = toolbarPluginInstance;
  
  // Extract full document text when PDF loads
  useEffect(() => {
    const extractDocumentText = async () => {
      if (!fileUrl) return;
      
      setIsExtracting(true);
      try {
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        const extraction = await pdfTextExtractionService.extractTextFromPDF(blob, fileUrl);
        setFullDocumentText(extraction.fullText);
      } catch (error) {
        console.error('Failed to extract PDF text:', error);
      } finally {
        setIsExtracting(false);
      }
    };
    
    extractDocumentText();
  }, [fileUrl]);

  // Enhanced search function
  const performFullDocumentSearch = (searchTerm) => {
    if (!searchTerm.trim() || !fullDocumentText) {
      setSearchMatches([]);
      setCurrentSearchTerm('');
      return;
    }
    
    setCurrentSearchTerm(searchTerm);
    const matches = pdfTextExtractionService.searchInText(fullDocumentText, searchTerm);
    setSearchMatches(matches);
    return matches;
  };

  if (!fileUrl) {
    return (
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
          color: "#666",
          border: "1px solid #ddd",
          borderRadius: "4px",
          height,
        }}
      >
        No PDF file to display
      </div>
    );
  }

  return (
    <div>
      {/* Search Bar */}
      <div
        style={{
          padding: "1rem",
          background: "#f8f9fa",
          borderRadius: "8px",
          border: "1px solid #e9ecef",
          marginBottom: "0.5rem",
        }}
      >
        <Search>
          {(renderProps) => (
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                <div style={{ position: "relative", flex: 1 }}>
                  <input
                    type="text"
                    placeholder="Search entire document - text, numbers, or patterns..."
                    value={renderProps.keyword}
                    onChange={(e) => {
                      renderProps.setKeyword(e.target.value);
                      performFullDocumentSearch(e.target.value);
                      if (e.target.value.trim()) {
                        setTimeout(() => renderProps.search(), 100);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        performFullDocumentSearch(renderProps.keyword);
                        renderProps.search();
                      }
                      if (e.key === "Escape") {
                        renderProps.clearKeyword();
                        setSearchMatches([]);
                        setCurrentSearchTerm('');
                      }
                    }}
                    style={{
                      padding: "0.5rem 2rem 0.5rem 0.5rem",
                      width: "100%",
                      fontSize: "14px",
                    }}
                  />
                  {renderProps.keyword && (
                    <button
                      onClick={renderProps.clearKeyword}
                      style={{
                        position: "absolute",
                        right: "0.5rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        fontSize: "1.2rem",
                        cursor: "pointer",
                        color: "#999",
                        padding: "0.2rem",
                      }}
                    >
                      ×
                    </button>
                  )}
                </div>
                <button
                  onClick={() => {
                    performFullDocumentSearch(renderProps.keyword);
                    renderProps.search();
                  }}
                  disabled={isExtracting}
                  style={{
                    padding: "0.5rem 1rem",
                    background: isExtracting ? "#ccc" : "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: isExtracting ? "not-allowed" : "pointer"
                  }}
                >
                  {isExtracting ? "Loading..." : "Search All"}
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontSize: "12px",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={renderProps.matchCase}
                    onChange={(e) =>
                      renderProps.changeMatchCase(e.target.checked)
                    }
                  />
                  Match case
                </label>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={renderProps.wholeWords}
                    onChange={(e) =>
                      renderProps.changeWholeWords(e.target.checked)
                    }
                  />
                  Whole words
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  <button
                    onClick={renderProps.jumpToPreviousMatch}
                    style={{
                      padding: "0.25rem 0.5rem",
                      border: "1px solid #ccc",
                      borderRadius: "3px",
                    }}
                  >
                    ↑ Prev
                  </button>
                  <button
                    onClick={renderProps.jumpToNextMatch}
                    style={{
                      padding: "0.25rem 0.5rem",
                      border: "1px solid #ccc",
                      borderRadius: "3px",
                    }}
                  >
                    Next ↓
                  </button>
                  <span
                    style={{
                      color:
                        (renderProps.numberOfMatches > 0 || searchMatches.length > 0) ? "#666" : "#f44336",
                      marginLeft: "0.5rem",
                      fontWeight:
                        (renderProps.numberOfMatches === 0 && searchMatches.length === 0 && renderProps.keyword)
                          ? "bold"
                          : "normal",
                    }}
                  >
                    {renderProps.numberOfMatches > 0
                      ? `Page: ${renderProps.currentMatch}/${renderProps.numberOfMatches}`
                      : searchMatches.length > 0
                      ? `Document: ${searchMatches.length} matches`
                      : renderProps.keyword && "❌ Not found"}
                  </span>
                </div>
              </div>
            </div>
          )}
        </Search>
      </div>

      {/* Full Document Search Results */}
      {searchMatches.length > 0 && (
        <div style={{
          padding: '0.75rem',
          background: '#e8f4fd',
          border: '1px solid #bee5eb',
          borderRadius: '6px',
          marginBottom: '0.5rem',
          maxHeight: '200px',
          overflowY: 'auto'
        }}>
          <div style={{ 
            fontSize: '0.9rem', 
            fontWeight: 'bold', 
            marginBottom: '0.5rem',
            color: '#0c5460'
          }}>
            📄 Found {searchMatches.length} matches in entire document for "{currentSearchTerm}"
          </div>
          {searchMatches.slice(0, 5).map((match, index) => (
            <div key={index} style={{
              padding: '0.5rem',
              background: 'white',
              border: '1px solid #d1ecf1',
              borderRadius: '4px',
              marginBottom: '0.25rem',
              fontSize: '0.8rem'
            }}>
              <div style={{ fontWeight: 'bold', color: '#0c5460', marginBottom: '0.25rem' }}>
                Match {index + 1} ({match.matchType === 'exact' ? 'Exact' : 'Partial'})
              </div>
              <div style={{ color: '#495057' }}>
                ...{match.context}...
              </div>
            </div>
          ))}
          {searchMatches.length > 5 && (
            <div style={{ fontSize: '0.8rem', color: '#6c757d', textAlign: 'center', marginTop: '0.5rem' }}>
              + {searchMatches.length - 5} more matches found
            </div>
          )}
        </div>
      )}
      
      {/* Document Status */}
      {isExtracting && (
        <div style={{
          padding: '0.75rem',
          background: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '6px',
          marginBottom: '0.5rem',
          fontSize: '0.9rem',
          color: '#856404'
        }}>
          🔍 Extracting text from entire document for comprehensive search...
        </div>
      )}
      
      {fullDocumentText && !isExtracting && (
        <div style={{
          padding: '0.5rem',
          background: '#d4edda',
          border: '1px solid #c3e6cb',
          borderRadius: '4px',
          marginBottom: '0.5rem',
          fontSize: '0.8rem',
          color: '#155724',
          textAlign: 'center'
        }}>
          ✅ Document ready for full-text search ({Math.round(fullDocumentText.length / 1000)}k characters)
        </div>
      )}

      {/* Toolbar */}
      <div
        style={{
          marginBottom: "0.5rem",
          border: "1px solid #e9ecef",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        <Toolbar />
      </div>

      {/* PDF Viewer */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "4px",
          height,
          overflow: "hidden",
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl={fileUrl}
            plugins={[searchPluginInstance, toolbarPluginInstance]}
            defaultScale={1.0}
          />
        </Worker>
      </div>
    </div>
  );
};

export default PDFViewer;
