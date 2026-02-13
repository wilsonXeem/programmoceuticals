import React, { useState, useEffect, useMemo } from 'react';
import { ctdStructure } from '../data/ctdStructure';
import DossierTree from './DossierTree';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck, faUpload, faDownload, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import JSZip from 'jszip';
import RegulatoryTooltip from './RegulatoryTooltip';
import SimplePDFViewer from './SimplePDFViewer';
import { mapRequirementsToNode } from '../utils/requirementsMapper';
import { buildCtdStructure } from '../utils/ctdStructureBuilder';
import { getDocumentRequirements, getSectionRules, validateDocumentAttestations, validateFileForSection, validateExportReadiness } from '../utils/ctdValidation';
import { requestExport } from '../services/exportService';

const UploadInterface = ({ section, onFileUpload, uploadedFile, apiOption }) => {
  const requirement = mapRequirementsToNode(section.path, apiOption, section.requirementKey);
  const [previewFile, setPreviewFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [showChecklist, setShowChecklist] = useState(false);
  const [uploadError, setUploadError] = useState('');
  
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
      setUploadError('');
    }
  };

  const handleSaveFile = () => {
    if (previewFile) {
      const validation = validateFileForSection({
        file: previewFile,
        nodePath: section.path,
        requirement,
        requirementKey: section.requirementKey
      });
      if (!validation.ok) {
        setUploadError(validation.message);
        return;
      }
      onFileUpload(previewFile, section.path, {});
      setPreviewFile(null);
      setPreviewUrl(null);
      setShowChecklist(false);
      setUploadError('');
    }
  };

  const handleCancelPreview = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewFile(null);
    setPreviewUrl(null);
    setShowChecklist(false);
    setUploadError('');
  };

  return (
    <div style={{ maxWidth: "90vw", margin: "0 auto" }}>
      <div style={{
        background: "white",
        borderRadius: "8px",
        padding: "2rem",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ margin: "0 0 1rem 0", color: "#0b5ed7" }}>{section.name}</h2>
        
        {requirement && (
          <div style={{
            background: (uploadedFile || previewFile) ? "#f0f9ff" : "#f8f9fa",
            border: `1px solid ${(uploadedFile || previewFile) ? "#bfdbfe" : "#e9ecef"}`,
            borderRadius: "6px",
            padding: "1rem",
            marginBottom: "1.5rem"
          }}>
            <h4 style={{ margin: "0 0 0.5rem 0", color: "#0b5ed7" }}>
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

        {uploadError && (
          <div style={{
            background: "#fee2e2",
            border: "1px solid #fecaca",
            borderRadius: "6px",
            padding: "0.75rem",
            marginBottom: "1rem",
            color: "#b91c1c",
            fontSize: "0.9rem"
          }}>
            {uploadError}
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
                background: "#0b5ed7",
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
                <SimplePDFViewer 
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
                  <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: "4rem", marginBottom: "1rem", color: "#0b5ed7" }} />
                  <h3 style={{ margin: "0 0 0.5rem 0", color: "#0b5ed7" }}>{previewFile?.name}</h3>
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

const defaultProfile = {
  apiCount: 1,
  apiManufacturerCount: 1,
  strengthCount: 1,
  containerClosureCount: 1,
  coBlisteredCount: 0,
  diluentCount: 0,
  fppCount: 1
};

const CTDCompiler = ({
  apiOption = 'option4',
  productName = 'Generic Product',
  userTier = 'free',
  isAuthenticated = false,
  authToken,
  accessCode = null,
  onExportStateChange = null
}) => {
  const [allFiles, setAllFiles] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [dossierProfile, setDossierProfile] = useState(defaultProfile);
  const [showSetup, setShowSetup] = useState(true);
  const [ctdData, setCTDData] = useState(() => buildCtdStructure(ctdStructure, defaultProfile));
  const [isEditable, setIsEditable] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState(new Map());
  const [uploadProgress, setUploadProgress] = useState({ completed: 0, total: 0 });
  const [exportError, setExportError] = useState('');
  const [paymentRequestStatus, setPaymentRequestStatus] = useState('');
  const [selectedApiOption, setSelectedApiOption] = useState(apiOption);
  const [showClearModal, setShowClearModal] = useState(false);
  const canUseSetup = userTier === 'paid';

  const accessScope = useMemo(() => {
    if (userTier === 'paid') {
      return { type: 'all' };
    }
    if (!isAuthenticated) {
      return {
        type: 'guest',
        allowedPrefixes: new Set([
          '/ctd/module1/1.0',
          '/ctd/module1/1.1',
          '/ctd/module1/1.2',
          '/ctd/module1/1.3'
        ])
      };
    }
    return { type: 'modules', allowedModules: new Set(['module1', 'module2']) };
  }, [userTier, isAuthenticated]);

  const isPathAllowed = (path) => {
    if (accessScope.type === 'all') return true;

    if (accessScope.type === 'modules') {
      const segments = path.split('/');
      const moduleSegment = segments.find((segment) => segment.startsWith('module'));
      if (!moduleSegment) return true;
      return accessScope.allowedModules.has(moduleSegment);
    }

    if (accessScope.type === 'guest') {
      if (path === '/ctd' || path === '/ctd/module1') return true;
      for (const prefix of accessScope.allowedPrefixes) {
        if (path === prefix || path.startsWith(`${prefix}/`)) {
          return true;
        }
      }
      return false;
    }

    return false;
  };

  const filterTreeByModules = (node) => {
    if (!node) return null;

    if (!isPathAllowed(node.path)) {
      return null;
    }

    if (node.type === 'file') {
      const requirement = mapRequirementsToNode(node.path, selectedApiOption, node.requirementKey);
      if (!requirement) {
        return null;
      }
      return node;
    }

    if (!node.children) return node;
    const filteredChildren = node.children.map(filterTreeByModules).filter(Boolean);
    if (filteredChildren.length === 0 && node.path !== '/ctd') {
      return null;
    }
    return { ...node, children: filteredChildren };
  };

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

    if (node.type === "folder" && (!node.children || node.children.length === 0)) {
      files.push({ ...node, depth });
    }
    
    return files;
  };

  const getExtension = (fileName) => {
    const name = String(fileName || "");
    const index = name.lastIndexOf(".");
    if (index === -1) return "";
    return name.slice(index + 1);
  };

  const sanitizeTreeLabel = (value) => {
    const cleaned = String(value || "Untitled")
      .replace(/[\\/]/g, " - ")
      .replace(/[:*?"<>|]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    return cleaned || "Untitled";
  };

  const buildExportNameMap = (node, ancestors = [], acc = {}) => {
    if (!node) return acc;

    const safeName = sanitizeTreeLabel(node.name);
    const isRootNode = node.path === "/ctd";
    const isLeafFolder = node.type === "folder" && (!node.children || node.children.length === 0);

    if (node.type === "file" || isLeafFolder) {
      acc[node.path] = {
        fileBaseName: safeName,
        folderSegments: [...ancestors, safeName]
      };
      return acc;
    }

    const nextAncestors = isRootNode ? ancestors : [...ancestors, safeName];
    if (node.children) {
      node.children.forEach((child) => buildExportNameMap(child, nextAncestors, acc));
    }
    return acc;
  };

  const filteredFiles = allFiles.filter((file) => {
    if (!searchTerm) return true;
    return file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           file.path.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const selectSection = (section) => {
    setSelectedSection(section);
  };

  const updateProfileCount = (key, value, { allowZero = false } = {}) => {
    const parsed = Number(value);
    const nextValue = Number.isFinite(parsed) ? Math.floor(parsed) : allowZero ? 0 : 1;
    const clamped = allowZero ? Math.max(0, nextValue) : Math.max(1, nextValue);
    setDossierProfile((prev) => ({ ...prev, [key]: clamped }));
  };

  const renderCountControl = (label, key, { allowZero = false, disabled = false } = {}) => {
    const minValue = allowZero ? 0 : 1;
    const currentValue = dossierProfile[key];
    const canDecrement = currentValue > minValue && !disabled;

    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: "0.65rem", fontWeight: "500", color: "#475569" }}>{label}</div>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          background: "white",
          border: "1px solid #e2e8f0",
          borderRadius: "4px",
          padding: "0.15rem 0.3rem"
        }}>
          <button
            onClick={() => updateProfileCount(key, currentValue - 1, { allowZero })}
            disabled={!canDecrement}
            style={{
              background: canDecrement ? "#e2e8f0" : "#f1f5f9",
              color: canDecrement ? "#1f2937" : "#94a3b8",
              width: "18px",
              height: "18px",
              padding: 0,
              borderRadius: "3px",
              fontSize: "0.7rem",
              fontWeight: "600",
              lineHeight: 1
            }}
          >
            -
          </button>
          <div style={{
            minWidth: "20px",
            textAlign: "center",
            fontSize: "0.7rem",
            fontWeight: "600",
            color: "#0f172a"
          }}>
            {currentValue}
          </div>
          <button
            onClick={() => updateProfileCount(key, currentValue + 1, { allowZero })}
            disabled={disabled}
            style={{
              background: disabled ? "#f1f5f9" : "#dbeafe",
              color: disabled ? "#94a3b8" : "#1e40af",
              width: "18px",
              height: "18px",
              padding: 0,
              borderRadius: "3px",
              fontSize: "0.7rem",
              fontWeight: "600",
              lineHeight: 1
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  };

  const handleFileUpload = async (file, sectionPath, fileAttestations = {}) => {
    try {
      const fileData = {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        data: await fileToBase64(file),
        attestations: fileAttestations
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
    const completed = allFiles.filter((file) => uploadedFiles.has(file.path)).length;
    const total = allFiles.length;
    setUploadProgress({ completed, total });
  };

  const downloadZipFromPayload = async (payloadByPath) => {
    const zip = new JSZip();
    const exportNameByPath = buildExportNameMap(ctdData);
    const fallbackNameByPath = allFiles.reduce((acc, fileNode) => {
      acc[fileNode.path] = fileNode.name;
      return acc;
    }, {});

    Object.entries(payloadByPath || {}).forEach(([sectionPath, fileData]) => {
      const rawData = String(fileData?.data || "");
      const base64Data = rawData.includes(",") ? rawData.split(",")[1] : rawData;
      if (!base64Data) return;

      const ext = getExtension(fileData?.name);
      const fallbackName = String(fileData?.name || "document").replace(/\.[^/.]+$/, "");
      const mappedEntry = exportNameByPath[sectionPath];
      const baseName = sanitizeTreeLabel(
        mappedEntry?.fileBaseName || fallbackNameByPath[sectionPath] || fallbackName
      );
      const fallbackFolderSegments = sectionPath
        .replace(/^\/?ctd\/?/, "")
        .split("/")
        .filter(Boolean)
        .map((segment) => sanitizeTreeLabel(segment));
      const folderSegments =
        mappedEntry?.folderSegments?.length > 0
          ? mappedEntry.folderSegments
          : fallbackFolderSegments;
      const finalName = ext ? `${baseName}.${ext}` : baseName;
      const zipPath = [...folderSegments, finalName].filter(Boolean).join("/");

      zip.file(zipPath, base64Data, { base64: true });
    });

    const content = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(content);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CTD-Dossier.zip";
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportDossier = async () => {
    if (!authToken) {
      setExportError("Sign in is required for export approval from the server.");
      return;
    }

    const errors = validateExportReadiness({
      allFiles,
      uploadedFiles,
      requirementResolver: (node) => mapRequirementsToNode(node.path, selectedApiOption, node.requirementKey)
    });
    if (errors.length > 0) {
      setExportError(errors[0]);
      return;
    }
    setExportError('');
    const exportPayload = {};
    uploadedFiles.forEach((fileData, sectionPath) => {
      if (!isPathAllowed(sectionPath)) {
        return;
      }
      const requirement = mapRequirementsToNode(sectionPath, selectedApiOption);
      if (!requirement) {
        return;
      }
      exportPayload[sectionPath] = fileData;
    });

    try {
      const response = await requestExport(authToken, { name: productName, data: exportPayload, accessCode });
      await downloadZipFromPayload(response.dossier.data || {});
      onExportStateChange?.({
        accessCode: response.access_code || null,
        exportCredits: response.export_credits
      });
    } catch (error) {
      if (Object.prototype.hasOwnProperty.call(error?.payload || {}, "access_code")) {
        onExportStateChange?.({
          accessCode: error.payload.access_code || null
        });
      }
      setExportError(error.message || 'Export failed');
    }
  };

  const requestUpgrade = () => {
    setPaymentRequestStatus('');
    if (!isAuthenticated) {
      setPaymentRequestStatus('Create a free account first to purchase export packages.');
      return;
    }
    window.location.assign('/account');
  };

  const clearAllFiles = () => {
    setShowClearModal(true);
  };

  const confirmClearFiles = () => {
    setUploadedFiles(new Map());
    localStorage.removeItem('ctd-uploaded-files');
    setSelectedSection(null);
    updateProgress();
    setShowClearModal(false);
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
    const nextStructure = buildCtdStructure(ctdStructure, dossierProfile);
    const filtered = filterTreeByModules(nextStructure);
    setCTDData(filtered);
    setSelectedSection(null);
  }, [dossierProfile, selectedApiOption, accessScope]);

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
    <div className="review-container" style={{ 
      position: "relative", 
      display: "flex", 
      flexDirection: window.innerWidth <= 768 ? "column" : "row",
      height: window.innerWidth <= 768 ? "auto" : "100%", 
      overflow: "hidden", 
      marginTop: "0" 
    }}>
      {showClearModal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        }}>
          <div style={{
            background: "white",
            borderRadius: "12px",
            padding: "2rem",
            maxWidth: "440px",
            width: "90%",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)"
          }}>
            <h3 style={{ margin: "0 0 1rem 0", color: "#0f172a", fontSize: "1.25rem" }}>Clear All Files?</h3>
            <p style={{ margin: "0 0 1.5rem 0", color: "#64748b", lineHeight: 1.6 }}>
              Are you sure you want to clear all uploaded files? This action cannot be undone.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
              <button
                onClick={() => setShowClearModal(false)}
                style={{
                  background: "#f1f5f9",
                  color: "#475569",
                  border: "none",
                  padding: "0.65rem 1.25rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: "500"
                }}
              >
                Cancel
              </button>
              <button
                onClick={confirmClearFiles}
                style={{
                  background: "#dc2626",
                  color: "white",
                  border: "none",
                  padding: "0.65rem 1.25rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: "500"
                }}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        className={`file-nav ${isNavCollapsed ? "collapsed" : ""}`}
        style={{
          width: isNavCollapsed ? "0" : window.innerWidth <= 768 ? "100%" : "360px",
          minWidth: isNavCollapsed ? "0" : window.innerWidth <= 768 ? "100%" : "360px",
          borderRight: window.innerWidth <= 768 ? "none" : "1px solid #e5e7eb",
          background: "white",
          boxShadow: window.innerWidth <= 768 ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "2px 0 8px rgba(0,0,0,0.05)",
          transition: "all 0.3s ease",
          maxHeight: window.innerWidth <= 768 ? "50vh" : "100vh",
          overflowY: "auto",
          overflowX: "hidden",
          display: isNavCollapsed ? "none" : "block"
        }}
      >
        
        <div
          style={{
            padding: "0.75rem",
            borderBottom: "1px solid #e5e7eb",
            background: "white",
            position: "sticky",
            top: 0,
            zIndex: 10
          }}
        >
          {!isNavCollapsed && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h3 style={{ 
                margin: "0", 
                fontSize: "0.75rem",
                fontWeight: "600",
                color: "#0b5ed7",
                letterSpacing: "0.3px",
                textTransform: "uppercase"
              }}>
                CTD Sections ({filteredFiles.length}/{allFiles.length})
              </h3>
              <div style={{ display: "flex", gap: "0.35rem" }}>
                <button
                  onClick={() => setIsEditable(!isEditable)}
                  style={{
                  background: isEditable ? '#0b5ed7' : '#f1f5f9',
                    color: isEditable ? 'white' : '#64748b',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '3px 6px',
                    fontSize: '0.7rem',
                    cursor: 'pointer'
                  }}
                  title={isEditable ? 'Exit Edit Mode' : 'Edit Structure'}
                >
                  <FontAwesomeIcon icon={isEditable ? faCheck : faEdit} />
                </button>
              </div>
            </div>
          )}

          {!isNavCollapsed && (
            <div>
              <div style={{ position: "relative", marginBottom: "0.5rem" }}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.4rem 2rem 0.4rem 0.5rem",
                    border: "1px solid #e2e8f0",
                    borderRadius: "4px",
                    fontSize: "0.75rem",
                    outline: "none"
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#0b5ed7'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
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
                      color: "#ef4444",
                      fontSize: "1rem",
                      cursor: "pointer",
                      padding: "0",
                      lineHeight: 1
                    }}
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          )}

          {!isNavCollapsed && (
            <div style={{
              border: "1px solid #e2e8f0",
              borderRadius: "4px",
              padding: "0.5rem",
              background: "#f8fafc",
              marginTop: "0.5rem"
            }}>
              <div style={{ marginBottom: "0.5rem" }}>
                <label style={{ display: "block", fontSize: "0.65rem", fontWeight: "600", color: "#334155" }}>
                  API Submission Option
                </label>
                <select
                  value={selectedApiOption}
                  onChange={(event) => setSelectedApiOption(event.target.value)}
                  disabled={!canUseSetup}
                  style={{
                    marginTop: "0.25rem",
                    width: "100%",
                    padding: "0.35rem",
                    borderRadius: "4px",
                    border: "1px solid #cbd5f5",
                    background: canUseSetup ? "white" : "#f1f5f9",
                    color: canUseSetup ? "#0f172a" : "#94a3b8",
                    fontSize: "0.7rem"
                  }}
                >
                  <option value="option1">Option 1 - API Prequalification</option>
                  <option value="option2">Option 2 - CEP</option>
                  <option value="option3">Option 3 - APIMF</option>
                  <option value="option4">Option 4 - Full Details</option>
                </select>
                {!canUseSetup && (
                  <div style={{ marginTop: "0.35rem", fontSize: "0.6rem", color: "#94a3b8" }}>
                    Upgrade required to change API option.
                  </div>
                )}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h4 style={{ margin: 0, fontSize: "0.7rem", color: "#0f172a", fontWeight: "600" }}>
                  Setup
                </h4>
                <button
                  onClick={() => setShowSetup(!showSetup)}
                  disabled={!canUseSetup}
                  style={{
                    background: "none",
                    border: "none",
                    color: canUseSetup ? "#64748b" : "#cbd5f5",
                    fontSize: "0.7rem",
                    cursor: canUseSetup ? "pointer" : "not-allowed",
                    padding: "0"
                  }}
                >
                  {showSetup ? "▼" : "▶"}
                </button>
              </div>
              {showSetup && (
                <div style={{ marginTop: "0.5rem", display: "grid", gap: "0.4rem", opacity: canUseSetup ? 1 : 0.6 }}>
                  {!canUseSetup && (
                    <div style={{ fontSize: "0.65rem", color: "#94a3b8" }}>
                      Upgrade required to unlock setup controls.
                    </div>
                  )}
                  {renderCountControl("APIs", "apiCount", { disabled: !canUseSetup })}
                  {renderCountControl("Manufacturers", "apiManufacturerCount", { disabled: !canUseSetup })}
                  {renderCountControl("Strengths", "strengthCount", { disabled: !canUseSetup })}
                  {renderCountControl("Containers", "containerClosureCount", { disabled: !canUseSetup })}
                  {renderCountControl("Co-blistered", "coBlisteredCount", { allowZero: true, disabled: !canUseSetup })}
                  {renderCountControl("Diluents", "diluentCount", { allowZero: true, disabled: !canUseSetup })}
                  {renderCountControl("FPPs", "fppCount", { disabled: !canUseSetup })}
                </div>
              )}
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
              apiOption={selectedApiOption}
              uploadedFiles={uploadedFiles}
            />
          </div>
        )}
      </div>

      <button
        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        style={{
          position: "absolute",
          left: isNavCollapsed ? "10px" : "348px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "28px",
          height: "56px",
          backgroundColor: "#0b5ed7",
          border: "none",
          borderRadius: "14px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "14px",
          boxShadow: "0 6px 14px rgba(0,0,0,0.18)",
          zIndex: 20,
          pointerEvents: "auto",
          transition: "left 0.2s ease"
        }}
        title={isNavCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isNavCollapsed ? "→" : "←"}
      </button>

      <div
        className="file-viewer"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          position: "relative"
        }}
      >
        {/* Progress Header */}
        <div style={{
          background: "linear-gradient(to right, #f8fafc, #f1f5f9)",
          borderBottom: "1px solid #e2e8f0",
          padding: "1.5rem",
          display: "flex",
          flexDirection: window.innerWidth <= 768 ? "column" : "row",
          gap: "1rem",
          justifyContent: "space-between",
          alignItems: window.innerWidth <= 768 ? "stretch" : "center"
        }}>
          <div>
            <h3 style={{ margin: 0, fontSize: "1.25rem", color: "#0b5ed7", fontWeight: "700" }}>CTD Dossier Progress</h3>
            <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem", color: "#64748b" }}>
              {uploadProgress.completed} of {uploadProgress.total} sections completed
            </p>
            {!isAuthenticated && (
              <p style={{ margin: "0.45rem 0 0 0", fontSize: "0.78rem", color: "#475569" }}>
                Open version is limited to Module 1 sections 1.0, 1.1, 1.2, and 1.3. Create a free account to continue with 1.4 and access Module 2.
              </p>
            )}
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{
              width: window.innerWidth <= 768 ? "100%" : "240px",
              height: "10px",
              background: "#e2e8f0",
              borderRadius: "10px",
              overflow: "hidden"
            }}>
              <div style={{
                width: `${uploadProgress.total > 0 ? (uploadProgress.completed / uploadProgress.total) * 100 : 0}%`,
                height: "100%",
                background: "linear-gradient(to right, #0b5ed7, #0a58ca)",
                transition: "width 0.3s ease",
                borderRadius: "10px"
              }} />
            </div>
            {uploadProgress.completed > 0 && (
              <button
                onClick={clearAllFiles}
                style={{
                  background: "#ffffff",
                  color: "#dc2626",
                  border: "1px solid #dc2626",
                  padding: "0.65rem 1rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#dc2626";
                  e.target.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#ffffff";
                  e.target.style.color = "#dc2626";
                }}
              >
                Clear All
              </button>
            )}
            {userTier !== 'paid' && isAuthenticated && (
              <button
                onClick={requestUpgrade}
                style={{
                  background: "transparent",
                  color: "#0b5ed7",
                  border: "1px solid #0b5ed7",
                  padding: "0.65rem 1rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: "600"
                }}
              >
                Request Upgrade
              </button>
            )}
            {!isAuthenticated && (
              <button
                onClick={() => window.location.assign('/signup')}
                style={{
                  background: "transparent",
                  color: "#0b5ed7",
                  border: "1px solid #0b5ed7",
                  padding: "0.65rem 1rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: "600"
                }}
              >
                Create Free Account
              </button>
            )}
            <button
              onClick={exportDossier}
              disabled={uploadProgress.completed === 0 || !isAuthenticated}
              style={{
                background: uploadProgress.completed > 0 && isAuthenticated
                  ? "linear-gradient(135deg, #0b5ed7 0%, #0a58ca 100%)"
                  : "#e2e8f0",
                color: uploadProgress.completed > 0 && isAuthenticated ? "white" : "#94a3b8",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                cursor: uploadProgress.completed > 0 && isAuthenticated ? "pointer" : "not-allowed",
                fontSize: "0.9rem",
                fontWeight: "600",
                boxShadow: uploadProgress.completed > 0 && isAuthenticated ? "0 2px 8px rgba(59, 130, 246, 0.3)" : "none",
                transition: "all 0.2s ease"
              }}
            >
              <FontAwesomeIcon icon={faDownload} /> Export ZIP
            </button>
          </div>
        </div>

        {(exportError || paymentRequestStatus) && (
          <div style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.5rem",
            display: "grid",
            gap: "0.5rem",
            width: "min(420px, 90vw)",
            zIndex: 5
          }}>
            {exportError && (
              <div style={{
                background: "#fff5f5",
                border: "1px solid #fecaca",
                color: "#b91c1c",
                borderRadius: "10px",
                padding: "0.75rem 0.9rem",
                fontSize: "0.85rem",
                boxShadow: "0 8px 20px rgba(185, 28, 28, 0.12)"
              }}>
                {exportError}
              </div>
            )}
            {paymentRequestStatus && (
              <div style={{
                background: "#ecfeff",
                border: "1px solid #a5f3fc",
                color: "#0f172a",
                borderRadius: "10px",
                padding: "0.75rem 0.9rem",
                fontSize: "0.85rem",
                boxShadow: "0 8px 20px rgba(14, 116, 144, 0.15)"
              }}>
                {paymentRequestStatus}
              </div>
            )}
          </div>
        )}
        
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
              apiOption={selectedApiOption}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CTDCompiler;
