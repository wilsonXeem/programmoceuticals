import React, { useState, useEffect } from 'react';
import { ctdStructure } from '../data/ctdStructure';
import DossierTree from './DossierTree';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck, faUpload, faDownload, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import JSZip from 'jszip';
import RegulatoryTooltip from './RegulatoryTooltip';
import EnhancedPDFViewer from './EnhancedPDFViewer';
import { mapRequirementsToNode } from '../utils/requirementsMapper';

const UploadInterface = ({ section, onFileUpload, uploadedFile }) => {
  const requirement = mapRequirementsToNode(section.path);
  const [previewFile, setPreviewFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [showChecklist, setShowChecklist] = useState(false);
  const [checklistOpen, setChecklistOpen] = useState(true);
  
  const toggleRequirement = (index) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(index)) {
      newCheckedItems.delete(index);
    } else {
      newCheckedItems.add(index);
    }
    setCheckedItems(newCheckedItems);
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setShowChecklist(true);
    }
  };

  const handleSaveFile = () => {
    if (previewFile) {
      onFileUpload(previewFile, section.path);
      setPreviewFile(null);
      setPreviewUrl(null);
      setShowChecklist(false);
    }
  };

  const handleCancelPreview = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewFile(null);
    setPreviewUrl(null);
    setShowChecklist(false);
  };

  return (
    <div style={{ maxWidth: "90vw", margin: "0 auto" }}>
      <div style={{
        background: "white",
        borderRadius: "8px",
        padding: "2rem",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ margin: "0 0 1rem 0", color: "#193441" }}>{section.name}</h2>
        
        {requirement && (
          <div style={{
            background: (uploadedFile || previewFile) ? "#f0f9ff" : "#f8f9fa",
            border: `1px solid ${(uploadedFile || previewFile) ? "#bfdbfe" : "#e9ecef"}`,
            borderRadius: "6px",
            padding: "1rem",
            marginBottom: "1.5rem"
          }}>
            <h4 style={{ margin: "0 0 0.5rem 0", color: "#193441" }}>
              {(uploadedFile || previewFile) ? "✓ Requirements Met:" : "Requirements:"}
            </h4>
            <ul style={{ margin: "0", paddingLeft: "1.5rem" }}>
              {requirement.requirements.map((req, index) => (
                <li key={index} 
                    onClick={() => (uploadedFile || previewFile) && toggleRequirement(index)}
                    style={{ 
                      marginBottom: "0.25rem", 
                      fontSize: "0.9rem",
                      textDecoration: (uploadedFile || previewFile) && checkedItems.has(index) ? "line-through" : "none",
                      color: (uploadedFile || previewFile) && checkedItems.has(index) ? "#059669" : "inherit",
                      cursor: (uploadedFile || previewFile) ? "pointer" : "default",
                      userSelect: "none"
                    }}>
                  {(uploadedFile || previewFile) && (
                    <span style={{ marginRight: "0.5rem", color: checkedItems.has(index) ? "#059669" : "#ccc" }}>
                      {checkedItems.has(index) ? "✓" : "○"}
                    </span>
                  )}
                  {req}
                </li>
              ))}
            </ul>
            {requirement.format && (
              <p style={{ 
                margin: "0.5rem 0 0 0", 
                fontSize: "0.8rem", 
                color: (uploadedFile || previewFile) ? "#059669" : "#666",
                textDecoration: (uploadedFile || previewFile) ? "line-through" : "none"
              }}>
                <strong>Format:</strong> {requirement.format}
              </p>
            )}
          </div>
        )}

        {uploadedFile && !showChecklist ? (
          <div style={{
            background: "#d4edda",
            border: "1px solid #c3e6cb",
            borderRadius: "6px",
            padding: "1rem",
            marginBottom: "1rem"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#155724" }} />
              <span style={{ color: "#155724", fontWeight: "500" }}>File uploaded successfully</span>
            </div>
            <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem", color: "#155724" }}>
              {uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(1)} KB)
            </p>
          </div>
        ) : null}

        {!showChecklist ? (
          <div style={{
            border: "2px dashed #d1d5db",
            borderRadius: "8px",
            padding: "2rem",
            textAlign: "center",
            background: "#fafafa"
          }}>
            <FontAwesomeIcon icon={faUpload} style={{ fontSize: "2rem", color: "#666", marginBottom: "1rem" }} />
            <p style={{ margin: "0 0 1rem 0", color: "#666" }}>
              {uploadedFile ? "Replace file" : "Upload document for this section"}
            </p>
            <input
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
              id={`file-input-${section.path}`}
              accept=".pdf,.doc,.docx,.xls,.xlsx"
            />
            <label
              htmlFor={`file-input-${section.path}`}
              style={{
                background: "#193441",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "6px",
                cursor: "pointer",
                display: "inline-block",
                fontSize: "0.9rem",
                fontWeight: "500"
              }}
            >
              Choose File
            </label>
          </div>
        ) : (
          <div>
            <div style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1rem",
              justifyContent: "center"
            }}>
              <button
                onClick={handleSaveFile}
                style={{
                  background: "#28a745",
                  color: "white",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: "600"
                }}
              >
                <FontAwesomeIcon icon={faCheck} /> Save Document
              </button>
              <button
                onClick={handleCancelPreview}
                style={{
                  background: "#6c757d",
                  color: "white",
                  border: "none",
                  padding: "0.75rem 1rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.9rem"
                }}
              >
                Cancel
              </button>
            </div>
            
            <div style={{
              width: "100%",
              maxWidth: "80vw",
              background: "white",
              borderRadius: "8px",
              height: "80vh",
              overflow: "auto",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              margin: "0 auto"
            }}>
              {previewFile?.type === 'application/pdf' ? (
                <EnhancedPDFViewer 
                  fileUrl={previewUrl} 
                  height="80vh"
                />
              ) : (
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  flexDirection: "column",
                  color: "#666",
                  background: "#f8f9fa"
                }}>
                  <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: "4rem", marginBottom: "1rem", color: "#193441" }} />
                  <h3 style={{ margin: "0 0 0.5rem 0", color: "#193441" }}>{previewFile?.name}</h3>
                  <p style={{ fontSize: "0.9rem", margin: 0 }}>Preview not available for this file type</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CTDCompiler = ({ apiOption = 'option4', productName = 'Generic Product' }) => {
  const [allFiles, setAllFiles] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [ctdData, setCTDData] = useState(ctdStructure);
  const [isEditable, setIsEditable] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState(new Map());
  const [uploadProgress, setUploadProgress] = useState({ completed: 0, total: 0 });

  const extractAllFiles = (node, depth = 0) => {
    let files = [];
    
    if (node.children) {
      node.children.forEach((child) => {
        if (child.type === "file") {
          files.push({ ...child, depth });
        } else if (child.type === "folder") {
          files = files.concat(extractAllFiles(child, depth + 1));
        }
      });
    }
    
    if (node.type === "file" && depth === 0) {
      files.push({ ...node, depth });
    }
    
    return files;
  };

  const filteredFiles = allFiles.filter((file) => {
    if (!searchTerm) return true;
    return file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           file.path.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const selectSection = (section) => {
    setSelectedSection(section);
  };

  const handleFileUpload = async (file, sectionPath) => {
    try {
      const fileData = {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        data: await fileToBase64(file)
      };
      
      const newUploadedFiles = new Map(uploadedFiles);
      newUploadedFiles.set(sectionPath, fileData);
      setUploadedFiles(newUploadedFiles);
      
      localStorage.setItem('ctd-uploaded-files', JSON.stringify(Array.from(newUploadedFiles.entries())));
      updateProgress();
    } catch (error) {
      console.error('Failed to upload file:', error);
    }
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const updateProgress = () => {
    const completed = uploadedFiles.size;
    const total = allFiles.length;
    setUploadProgress({ completed, total });
  };

  const exportDossier = async () => {
    const zip = new JSZip();
    
    uploadedFiles.forEach((fileData, sectionPath) => {
      const base64Data = fileData.data.split(',')[1];
      const folderPath = sectionPath.replace(/\/[^/]+$/, '').replace(/^ctd\//, '');
      const fileName = `${folderPath}/${fileData.name}`;
      zip.file(fileName, base64Data, { base64: true });
    });
    
    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CTD-Dossier.zip';
    a.click();
    URL.revokeObjectURL(url);
  };



  const handleNodeUpdate = (path, updatedNode) => {
    const updateNodeInTree = (node) => {
      if (node.path === path) {
        return updatedNode;
      }
      if (node.children) {
        return {
          ...node,
          children: node.children.map(updateNodeInTree)
        };
      }
      return node;
    };
    setCTDData(updateNodeInTree(ctdData));
  };

  const handleNodeDelete = (path) => {
    const deleteNodeFromTree = (node) => {
      if (node.children) {
        return {
          ...node,
          children: node.children
            .filter(child => child.path !== path)
            .map(deleteNodeFromTree)
        };
      }
      return node;
    };
    setCTDData(deleteNodeFromTree(ctdData));
  };

  useEffect(() => {
    const files = extractAllFiles(ctdData);
    setAllFiles(files);
  }, [ctdData]);

  useEffect(() => {
    const savedFiles = localStorage.getItem('ctd-uploaded-files');
    if (savedFiles) {
      const filesArray = JSON.parse(savedFiles);
      setUploadedFiles(new Map(filesArray));
    }
  }, []);

  useEffect(() => {
    updateProgress();
  }, [uploadedFiles, allFiles]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsNavCollapsed(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <div className="review-container" style={{ position: "relative", display: "flex", height: "calc(100vh - 80px)", overflow: "hidden", marginTop: "0" }}>
      {/* Floating Collapse Button */}
      <button
        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        style={{
          position: "absolute",
          left: isNavCollapsed ? "38px" : "340px",
          top: "20px",
          zIndex: 9999,
          width: "24px",
          height: "24px",
          backgroundColor: "#193441",
          border: "1px solid #193441",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "10px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          transition: "all 0.2s ease"
        }}
      >
        {isNavCollapsed ? "→" : "←"}
      </button>
      
      <div
        className={`file-nav ${isNavCollapsed ? "collapsed" : ""}`}
        style={{
          width: isNavCollapsed ? "50px" : window.innerWidth <= 768 ? "100%" : "352px",
          borderRight: window.innerWidth <= 768 ? "none" : "1px solid #e5e7eb",
          borderBottom: window.innerWidth <= 768 ? "1px solid #e5e7eb" : "none",
          backgroundColor: "white",
          boxShadow: window.innerWidth <= 768 ? "0 1px 3px rgba(0, 0, 0, 0.1)" : "none",
          transition: "width 0.3s ease",
          maxHeight: window.innerWidth <= 768 ? "40vh" : "100vh",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch"
        }}
      >
        
        <div
          style={{
            padding: "0.75rem",
            borderBottom: "1px solid #e5e7eb",
            background: "white",
            color: "#2c3e50"
          }}
        >
          {!isNavCollapsed && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h3 style={{ 
                margin: "0", 
                fontSize: "0.7rem",
                fontWeight: "600",
                color: "#2c3e50",
                letterSpacing: "0.5px",
                textTransform: "uppercase"
              }}>
                CTD SECTIONS ({filteredFiles.length}/{allFiles.length})
              </h3>
              <button
                onClick={() => setIsEditable(!isEditable)}
                style={{
                  background: isEditable ? '#007bff' : '#f8f9fa',
                  color: isEditable ? 'white' : '#666',
                  border: '1px solid #ddd',
                  borderRadius: '3px',
                  padding: '2px 6px',
                  fontSize: '0.6rem',
                  cursor: 'pointer'
                }}
                title={isEditable ? 'Exit Edit Mode' : 'Edit Structure'}
              >
                <FontAwesomeIcon icon={isEditable ? faCheck : faEdit} />
              </button>
            </div>
          )}

          {!isNavCollapsed && (
            <div>
              <div style={{ position: "relative", marginBottom: "0.5rem" }}>
                <input
                  type="text"
                  placeholder="Search sections..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.4rem 2rem 0.4rem 0.6rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "4px",
                    fontSize: "0.7rem",
                    outline: "none",
                    transition: "border-color 0.2s",
                    height: "28px"
                  }}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
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
                      padding: "0.2rem"
                    }}
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {!isNavCollapsed && (
          <div
            style={{
              maxHeight: "calc(100vh - 200px)",
              overflowY: "auto",
              padding: "1rem 0.5rem 0 0.5rem",
            }}
          >
            <DossierTree
              node={ctdData}
              activeFilePath={selectedSection?.path || ""}
              onFileSelected={selectSection}
              level={0}
              onNodeUpdate={handleNodeUpdate}
              onNodeDelete={handleNodeDelete}
              isEditable={isEditable}
              apiOption={apiOption}
              uploadedFiles={uploadedFiles}
            />
          </div>
        )}
      </div>

      <div className="file-viewer" style={{ flex: 1, display: "flex", flexDirection: "column", height: "100vh" }}>
        {/* Progress Header */}
        <div style={{
          background: "white",
          borderBottom: "1px solid #e5e7eb",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div>
            <h3 style={{ margin: 0, fontSize: "1rem", color: "#193441" }}>CTD Dossier Progress</h3>
            <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.8rem", color: "#666" }}>
              {uploadProgress.completed} of {uploadProgress.total} sections completed
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <div style={{
              width: "200px",
              height: "8px",
              background: "#e5e7eb",
              borderRadius: "4px",
              overflow: "hidden"
            }}>
              <div style={{
                width: `${uploadProgress.total > 0 ? (uploadProgress.completed / uploadProgress.total) * 100 : 0}%`,
                height: "100%",
                background: "#193441",
                transition: "width 0.3s ease"
              }} />
            </div>
            <button
              onClick={exportDossier}
              disabled={uploadProgress.completed === 0}
              style={{
                background: uploadProgress.completed > 0 ? "#193441" : "#e5e7eb",
                color: uploadProgress.completed > 0 ? "white" : "#999",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                cursor: uploadProgress.completed > 0 ? "pointer" : "not-allowed",
                fontSize: "0.8rem"
              }}
            >
              <FontAwesomeIcon icon={faDownload} /> Export ZIP
            </button>
          </div>
        </div>
        
        {/* Upload Interface */}
        <div style={{ 
          flex: 1, 
          overflowY: "auto",
          padding: "2rem"
        }}>
          {!selectedSection ? (
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              color: "#6b7280",
              fontSize: "16px",
              textAlign: "center"
            }}>
              <div>
                <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: "3rem", marginBottom: "1rem" }} />
                <p>Select a section from the sidebar to upload documents</p>
              </div>
            </div>
          ) : (
            <UploadInterface 
              section={selectedSection}
              onFileUpload={handleFileUpload}
              uploadedFile={uploadedFiles.get(selectedSection.path)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CTDCompiler;