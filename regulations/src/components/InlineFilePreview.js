import React, { useState, useEffect } from "react";
import { useDossier } from "../hooks/useDossier";
import EnhancedPDFViewer from "./EnhancedPDFViewer";
import mammoth from "mammoth";

// Add CSS for spin animation
const spinKeyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Inject CSS if not already present
if (!document.querySelector('#spin-animation-styles')) {
  const style = document.createElement('style');
  style.id = 'spin-animation-styles';
  style.textContent = spinKeyframes;
  document.head.appendChild(style);
}

const InlineFilePreview = ({ documents, title, onClose }) => {
  const { getFileBlob } = useDossier();
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [fileUrls, setFileUrls] = useState(new Map());
  const [allFiles, setAllFiles] = useState([]);
  const [loadingFiles, setLoadingFiles] = useState(new Set());
  const [wordContent, setWordContent] = useState(new Map());
  const [wordSearchTerm, setWordSearchTerm] = useState("");
  const [wordSearchResults, setWordSearchResults] = useState([]);
  const [currentWordMatch, setCurrentWordMatch] = useState(0);

  // Extract all files from documents
  useEffect(() => {
    const files = [];
    if (documents && documents.length > 0) {
      documents.forEach(doc => {
        doc.files.forEach(file => {
          files.push(file);
        });
      });
    }
    setAllFiles(files);
    setActiveFileIndex(0);
  }, [documents]);

  // Load file URL function - same as Review.js
  const loadFileUrl = async (filePath) => {
    if (fileUrls.has(filePath) || loadingFiles.has(filePath)) return;
    
    setLoadingFiles(prev => new Set(prev).add(filePath));
    
    try {
      const fileData = await getFileBlob(filePath);
      if (fileData && fileData.blob instanceof Blob) {
        const typedBlob = new Blob([fileData.blob], { 
          type: fileData.type || fileData.blob.type || 'application/octet-stream' 
        });
        const blobUrl = URL.createObjectURL(typedBlob);
        setFileUrls(prev => new Map(prev).set(filePath, blobUrl));
        
        // If it's a Word document, convert to HTML
        const fileName = filePath.split('/').pop().toLowerCase();
        if (fileName.endsWith('.doc') || fileName.endsWith('.docx')) {
          try {
            const arrayBuffer = await fileData.blob.arrayBuffer();
            const result = await mammoth.convertToHtml({ 
              arrayBuffer,
              styleMap: [
                "p[style-name='Heading 1'] => h1:fresh",
                "p[style-name='Heading 2'] => h2:fresh",
                "p[style-name='Heading 3'] => h3:fresh",
                "p[style-name='Title'] => h1.title:fresh",
                "r[style-name='Strong'] => strong",
                "r[style-name='Emphasis'] => em"
              ],
              includeDefaultStyleMap: true,
              convertImage: mammoth.images.imgElement(function(image) {
                return image.read("base64").then(function(imageBuffer) {
                  return {
                    src: "data:" + image.contentType + ";base64," + imageBuffer
                  };
                });
              })
            });
            setWordContent(prev => new Map(prev).set(filePath, result.value));
          } catch (wordError) {
            console.error("Failed to convert Word document:", wordError);
          }
        }
      }
    } catch (error) {
      console.error("Failed to load file:", filePath, error);
    } finally {
      setLoadingFiles(prev => {
        const newSet = new Set(prev);
        newSet.delete(filePath);
        return newSet;
      });
    }
  };

  // Load active file when index changes
  useEffect(() => {
    if (allFiles[activeFileIndex]) {
      loadFileUrl(allFiles[activeFileIndex].path);
    }
  }, [activeFileIndex, allFiles]);

  // Keyboard support for closing modal and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    // Disable body scroll when modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      // Restore body scroll when modal closes
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Cleanup URLs only on unmount
  useEffect(() => {
    return () => {
      fileUrls.forEach(url => {
        if (url.startsWith("blob:")) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, []);

  const getActiveFile = () => allFiles[activeFileIndex] || null;
  const isPdf = (fileName) => fileName.toLowerCase().endsWith(".pdf");
  const isWord = (fileName) => {
    const lower = fileName.toLowerCase();
    return lower.endsWith(".doc") || lower.endsWith(".docx");
  };
  const getFileType = (fileName) => {
    const ext = fileName.toLowerCase().split(".").pop();
    const types = {
      pdf: "PDF Document",
      doc: "Word Document", docx: "Word Document",
      xls: "Excel Spreadsheet", xlsx: "Excel Spreadsheet",
      txt: "Text File"
    };
    return types[ext] || "Unknown File Type";
  };
  const getFileIcon = (fileName) => {
    const ext = fileName.toLowerCase().split(".").pop();
    const icons = {
      pdf: "📄", doc: "📝", docx: "📝", xls: "📊", xlsx: "📊", txt: "📄"
    };
    return icons[ext] || "📄";
  };

  if (!documents || documents.length === 0 || allFiles.length === 0) {
    return (
      <div style={{ padding: "1rem", background: "#f8f9fa", border: "1px solid #dee2e6", borderRadius: "8px", margin: "1rem 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>No files found</span>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer" }}>✕</button>
        </div>
      </div>
    );
  }

  const activeFile = getActiveFile();
  const fileUrl = activeFile ? fileUrls.get(activeFile.path) : null;
  const isLoading = activeFile ? loadingFiles.has(activeFile.path) : false;
  const isPdfFile = activeFile ? isPdf(activeFile.name) : false;
  const isWordFile = activeFile ? isWord(activeFile.name) : false;
  const wordHtml = activeFile ? wordContent.get(activeFile.path) : null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "white",
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }}>
      {/* Compact Header */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "0.5rem 0.75rem", 
        borderBottom: "1px solid #e9ecef", 
        background: "#193441", 
        color: "white",
        flexShrink: 0,
        minHeight: "36px"
      }}>
        <h4 style={{ margin: 0, fontSize: "0.9rem", fontWeight: "500" }}>{title}</h4>
        <button 
          onClick={onClose} 
          style={{ 
            background: "rgba(255,255,255,0.2)", 
            border: "none", 
            cursor: "pointer", 
            fontSize: "1.2rem", 
            color: "white", 
            padding: "0.3rem", 
            borderRadius: "50%", 
            width: "28px", 
            height: "28px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            transition: "background 0.2s"
          }}
          onMouseOver={(e) => e.target.style.background = "rgba(255,255,255,0.3)"}
          onMouseOut={(e) => e.target.style.background = "rgba(255,255,255,0.2)"}
        >
          ✕
        </button>
      </div>

      {/* Compact File Tabs */}
      {allFiles.length > 1 && (
        <div style={{ 
          display: "flex", 
          background: "#f8f9fa", 
          borderBottom: "1px solid #e0e0e0", 
          overflowX: "auto",
          flexShrink: 0,
          minHeight: "32px"
        }}>
          {allFiles.map((file, index) => (
            <div key={file.path} style={{ 
              display: "flex", 
              alignItems: "center", 
              padding: "0.3rem 0.6rem", 
              background: index === activeFileIndex ? "#fff" : "transparent", 
              borderBottom: index === activeFileIndex ? "2px solid #3498db" : "none", 
              cursor: "pointer", 
              minWidth: "120px", 
              maxWidth: "200px", 
              flexShrink: 0, 
              borderRight: "1px solid #e0e0e0",
              height: "32px"
            }} onClick={() => setActiveFileIndex(index)}>
              <span style={{ fontSize: "0.8rem", marginRight: "0.4rem" }}>{getFileIcon(file.name)}</span>
              <span style={{ 
                flex: 1, 
                fontSize: "0.8rem", 
                whiteSpace: "nowrap", 
                overflow: "hidden", 
                textOverflow: "ellipsis", 
                color: index === activeFileIndex ? "#2c3e50" : "#666" 
              }}>{file.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Content - same as Review.js TabContent */}
      <div style={{ 
        flex: 1, 
        overflow: "hidden", 
        display: "flex", 
        flexDirection: "column" 
      }}>


        {isLoading ? (
          <div style={{ 
            flex: 1, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            padding: "2rem", 
            textAlign: "center", 
            background: "#f8f9fa" 
          }}>
            <div>
              <div style={{ width: "24px", height: "24px", border: "3px solid #f3f3f3", borderTop: "3px solid #3498db", borderRadius: "50%", animation: "spin 1s linear infinite", margin: "0 auto 0.5rem" }}></div>
              <p style={{ fontSize: "0.9rem", color: "#666", margin: 0 }}>Loading...</p>
            </div>
          </div>
        ) : isPdfFile && fileUrl ? (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <div style={{ flex: 1, overflow: "hidden", padding: "1rem" }}>
              <EnhancedPDFViewer fileUrl={fileUrl} height="calc(100vh - 120px)" />
            </div>
          </div>
        ) : isWordFile && wordHtml ? (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            {/* Word Search Bar */}
            <div style={{
              padding: "0.5rem 1rem",
              borderBottom: "1px solid #e9ecef",
              background: "#f8f9fa",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <input
                type="text"
                placeholder="Search in document..."
                value={wordSearchTerm}
                onChange={(e) => {
                  setWordSearchTerm(e.target.value);
                  if (e.target.value.trim()) {
                    const text = wordHtml.replace(/<[^>]*>/g, ' ').toLowerCase();
                    const searchText = e.target.value.toLowerCase();
                    const matches = [];
                    let index = text.indexOf(searchText);
                    while (index !== -1) {
                      matches.push(index);
                      index = text.indexOf(searchText, index + 1);
                    }
                    setWordSearchResults(matches);
                    setCurrentWordMatch(0);
                  } else {
                    setWordSearchResults([]);
                    setCurrentWordMatch(0);
                  }
                }}
                style={{
                  flex: 1,
                  padding: "0.25rem 0.5rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "12px"
                }}
              />
              {wordSearchResults.length > 0 && (
                <div style={{ fontSize: "12px", color: "#666" }}>
                  {currentWordMatch + 1} of {wordSearchResults.length}
                </div>
              )}
              <button
                onClick={() => setCurrentWordMatch(Math.max(0, currentWordMatch - 1))}
                disabled={wordSearchResults.length === 0 || currentWordMatch === 0}
                style={{
                  padding: "0.25rem 0.5rem",
                  border: "1px solid #ddd",
                  background: "white",
                  cursor: wordSearchResults.length === 0 || currentWordMatch === 0 ? "not-allowed" : "pointer",
                  fontSize: "12px"
                }}
              >
                ↑
              </button>
              <button
                onClick={() => setCurrentWordMatch(Math.min(wordSearchResults.length - 1, currentWordMatch + 1))}
                disabled={wordSearchResults.length === 0 || currentWordMatch === wordSearchResults.length - 1}
                style={{
                  padding: "0.25rem 0.5rem",
                  border: "1px solid #ddd",
                  background: "white",
                  cursor: wordSearchResults.length === 0 || currentWordMatch === wordSearchResults.length - 1 ? "not-allowed" : "pointer",
                  fontSize: "12px"
                }}
              >
                ↓
              </button>
            </div>
            
            <div style={{ 
              flex: 1,
              overflow: "auto", 
              padding: "2rem", 
              background: "white",
              fontSize: "14px",
              lineHeight: "1.6"
            }}>
              <style>{`
                .word-document-content h1 { font-size: 24px; font-weight: bold; margin-bottom: 16px; color: #2c3e50; }
                .word-document-content h2 { font-size: 20px; font-weight: bold; margin-bottom: 14px; color: #34495e; }
                .word-document-content h3 { font-size: 18px; font-weight: bold; margin-bottom: 12px; color: #34495e; }
                .word-document-content p { margin-bottom: 12px; text-align: justify; }
                .word-document-content table { border-collapse: collapse; width: 100%; margin-bottom: 16px; }
                .word-document-content td, .word-document-content th { border: 1px solid #ddd; padding: 8px; text-align: left; }
                .word-document-content th { background-color: #f2f2f2; font-weight: bold; }
                .word-document-content ul, .word-document-content ol { margin-bottom: 12px; padding-left: 20px; }
                .word-document-content li { margin-bottom: 4px; }
                .word-document-content strong { font-weight: bold; }
                .word-document-content em { font-style: italic; }
                .word-document-content img { max-width: 100%; height: auto; margin-bottom: 12px; }
              `}</style>
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: wordSearchTerm ? wordHtml.replace(
                    new RegExp(`(${wordSearchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'),
                    '<mark style="background: yellow; padding: 1px 2px;">$1</mark>'
                  ) : wordHtml 
                }}
                className="word-document-content"
                style={{
                  maxWidth: "800px",
                  margin: "0 auto",
                  fontFamily: "'Times New Roman', serif"
                }}
              />
            </div>
          </div>
        ) : fileUrl ? (
          <div style={{ 
            flex: 1, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            padding: "2rem", 
            textAlign: "center", 
            background: "#f8f9fa" 
          }}>
            <div>
              <p><strong>File:</strong> {activeFile.name}</p>
              <p><strong>Type:</strong> {getFileType(activeFile.name)}</p>
              <a href={fileUrl} download={activeFile.name} style={{ marginTop: "1rem", textDecoration: "none", padding: "0.5rem 1rem", background: "#3498db", color: "white", borderRadius: "4px" }}>📥 Download File</a>
            </div>
          </div>
        ) : (
          <div style={{ 
            flex: 1, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            padding: "2rem", 
            textAlign: "center", 
            background: "#f8f9fa", 
            color: "#666" 
          }}>
            <div>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{getFileIcon(activeFile.name)}</div>
              <p style={{ fontSize: "1.1rem", fontWeight: "500", margin: "0 0 0.5rem 0" }}>{activeFile.name}</p>
              <p style={{ fontSize: "0.9rem", margin: "0 0 0.5rem 0" }}>{getFileType(activeFile.name)}</p>
              <p style={{ fontSize: "0.8rem", color: "#999", margin: 0 }}>Click to load content</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InlineFilePreview;
