import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ctdStructure } from '../data/ctdStructure';
import DossierTree from './DossierTree';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck, faUpload, faDownload, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import JSZip from 'jszip';
import { PDFDocument } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import RegulatoryTooltip from './RegulatoryTooltip';
import SimplePDFViewer from './SimplePDFViewer';
import { mapRequirementsToNode } from '../utils/requirementsMapper';
import { buildCtdStructure } from '../utils/ctdStructureBuilder';
import { getDocumentRequirements, getSectionRules, validateFileForSection, validateExportReadiness } from '../utils/ctdValidation';
import { loadUploadedFiles, saveUploadedFiles, clearUploadedFiles } from '../utils/uploadStorage';
import { requestExport } from '../services/exportService';

let pdfWorkerConfigured = false;

const getPdfJsVersion = () => {
  return (typeof pdfjsLib?.version === 'string' && pdfjsLib.version) || '4.10.38';
};

const ensurePdfWorkerConfigured = () => {
  if (pdfWorkerConfigured) return;
  if (pdfjsLib?.GlobalWorkerOptions) {
    const version = getPdfJsVersion();
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${version}/build/pdf.worker.min.mjs`;
  }
  pdfWorkerConfigured = true;
};

const UploadInterface = ({
  section,
  onFileUpload,
  onAdditionalFileRemove,
  uploadedFile,
  additionalFiles = [],
  apiOption,
  isMobileLayout = false
}) => {
  const requirement = mapRequirementsToNode(section.path, apiOption, section.requirementKey);
  const sectionRules = getSectionRules(section.path, requirement, section.requirementKey);
  const [previewFile, setPreviewFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [showChecklist, setShowChecklist] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadMode, setUploadMode] = useState('primary');
  const cardPadding = isMobileLayout ? "1rem" : "2rem";
  const sectionPadding = isMobileLayout ? "0.75rem" : "1rem";
  const sectionMargin = isMobileLayout ? "0.75rem" : "1rem";
  const sectionLargeMargin = isMobileLayout ? "0.9rem" : "1.5rem";
  const primaryButtonPadding = isMobileLayout ? "0.6rem 0.9rem" : "0.75rem 1.1rem";
  const secondaryButtonPadding = isMobileLayout ? "0.6rem 0.9rem" : "0.75rem 1.1rem";
  const buttonFontSize = isMobileLayout ? "0.84rem" : "0.9rem";

  const hasAnyUploadedFile = Boolean(uploadedFile) || additionalFiles.length > 0;

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const toggleRequirement = (index) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(index)) {
      newCheckedItems.delete(index);
    } else {
      newCheckedItems.add(index);
    }
    setCheckedItems(newCheckedItems);
  };

  const setFileForPreview = (file, mode = 'primary') => {
    if (!file) return;
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setUploadMode(mode);
    setPreviewFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setShowChecklist(true);
    setUploadError('');
  };

  const handlePrimaryFileChange = (e) => {
    const file = e.target.files?.[0];
    setFileForPreview(file, 'primary');
    e.target.value = '';
  };

  const handleAdditionalFileChange = (e) => {
    const file = e.target.files?.[0];
    setFileForPreview(file, 'additional');
    e.target.value = '';
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(false);
    const file = event.dataTransfer?.files?.[0];
    const mode = uploadedFile ? 'additional' : 'primary';
    setFileForPreview(file, mode);
  };

  const handleSaveFile = () => {
    if (!previewFile) return;
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
    const documentRequirements = getDocumentRequirements({
      fileName: previewFile.name,
      rules: sectionRules
    });
    const attestations = documentRequirements.reduce((acc, req) => {
      acc[req.id] = true;
      return acc;
    }, {});
    onFileUpload(previewFile, section.path, attestations, { mode: uploadMode });
    setPreviewFile(null);
    setPreviewUrl(null);
    setShowChecklist(false);
    setUploadError('');
    setUploadMode('primary');
  };

  const handleCancelPreview = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewFile(null);
    setPreviewUrl(null);
    setShowChecklist(false);
    setUploadError('');
    setUploadMode('primary');
  };

  return (
    <div style={{ maxWidth: "90vw", margin: "0 auto" }}>
      <div style={{
        background: "white",
        borderRadius: "8px",
        padding: cardPadding,
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ margin: isMobileLayout ? "0 0 0.7rem 0" : "0 0 1rem 0", color: "#0b5ed7" }}>{section.name}</h2>

        {requirement && (
          <div style={{
            background: (hasAnyUploadedFile || previewFile) ? "#f0f9ff" : "#f8f9fa",
            border: `1px solid ${(hasAnyUploadedFile || previewFile) ? "#bfdbfe" : "#e9ecef"}`,
            borderRadius: "6px",
            padding: sectionPadding,
            marginBottom: sectionLargeMargin
          }}>
            <h4 style={{ margin: "0 0 0.5rem 0", color: "#0b5ed7" }}>
              {(hasAnyUploadedFile || previewFile) ? "✓ Requirements Met:" : "Requirements:"}
            </h4>
            <ul style={{ margin: "0", paddingLeft: "1.5rem" }}>
              {requirement.requirements.map((req, index) => (
                <li
                  key={index}
                  onClick={() => (hasAnyUploadedFile || previewFile) && toggleRequirement(index)}
                  style={{
                    marginBottom: "0.25rem",
                    fontSize: "0.9rem",
                    textDecoration: (hasAnyUploadedFile || previewFile) && checkedItems.has(index) ? "line-through" : "none",
                    color: (hasAnyUploadedFile || previewFile) && checkedItems.has(index) ? "#059669" : "inherit",
                    cursor: (hasAnyUploadedFile || previewFile) ? "pointer" : "default",
                    userSelect: "none"
                  }}
                >
                  {(hasAnyUploadedFile || previewFile) && (
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
                color: (hasAnyUploadedFile || previewFile) ? "#059669" : "#666",
                textDecoration: (hasAnyUploadedFile || previewFile) ? "line-through" : "none"
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
            padding: isMobileLayout ? "0.65rem" : "0.75rem",
            marginBottom: sectionMargin,
            color: "#b91c1c",
            fontSize: isMobileLayout ? "0.84rem" : "0.9rem"
          }}>
            {uploadError}
          </div>
        )}

        {uploadedFile && !showChecklist ? (
          <div style={{
            background: "#d4edda",
            border: "1px solid #c3e6cb",
            borderRadius: "6px",
            padding: sectionPadding,
            marginBottom: sectionMargin
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#155724" }} />
              <span style={{ color: "#155724", fontWeight: "500" }}>Main file uploaded</span>
            </div>
            <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem", color: "#155724" }}>
              {uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(1)} KB)
            </p>
            <p style={{ margin: "0.4rem 0 0 0", fontSize: "0.8rem", color: "#166534" }}>
              Export name: section standard name
            </p>
          </div>
        ) : null}

        {additionalFiles.length > 0 && !showChecklist && (
          <div style={{
            background: "#eff6ff",
            border: "1px solid #bfdbfe",
            borderRadius: "6px",
            padding: sectionPadding,
            marginBottom: sectionMargin
          }}>
            <div style={{ color: "#1e3a8a", fontWeight: "600", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
              Additional files ({additionalFiles.length})
            </div>
            <div style={{ display: "grid", gap: "0.4rem" }}>
              {additionalFiles.map((item, index) => (
                <div
                  key={item.key}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                    background: "white",
                    border: "1px solid #dbeafe",
                    borderRadius: "6px",
                    padding: "0.45rem 0.6rem"
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: "0.85rem", color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {index + 1}. {item.fileData.name}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#475569" }}>
                      Export name: original filename
                    </div>
                  </div>
                  <button
                    onClick={() => onAdditionalFileRemove?.(item.key)}
                    style={{
                      border: "1px solid #fecaca",
                      background: "#fff1f2",
                      color: "#b91c1c",
                      borderRadius: "4px",
                      fontSize: "0.75rem",
                      padding: "0.25rem 0.5rem",
                      cursor: "pointer"
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {!showChecklist ? (
          <div
            onDragOver={handleDragOver}
            onDragEnter={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{
              border: isDragOver ? "2px dashed #0b5ed7" : "2px dashed #d1d5db",
              borderRadius: "8px",
              padding: isMobileLayout ? "1rem 0.75rem" : "2rem",
              textAlign: "center",
              background: isDragOver ? "#eff6ff" : "#fafafa",
              transition: "all 0.15s ease"
            }}
          >
            <FontAwesomeIcon
              icon={faUpload}
              style={{
                fontSize: isMobileLayout ? "1.55rem" : "2rem",
                color: isDragOver ? "#0b5ed7" : "#666",
                marginBottom: isMobileLayout ? "0.65rem" : "1rem"
              }}
            />
            <p style={{ margin: isMobileLayout ? "0 0 0.6rem 0" : "0 0 1rem 0", color: "#666" }}>
              {uploadedFile ? "Replace main file or add more files to this section" : "Upload main document for this section"}
            </p>
            <p style={{ margin: isMobileLayout ? "0 0 0.65rem 0" : "0 0 1rem 0", color: "#64748b", fontSize: isMobileLayout ? "0.8rem" : "0.85rem" }}>
              Main file exports with the section name. Additional files keep your filenames.
            </p>

            <input
              type="file"
              onChange={handlePrimaryFileChange}
              style={{ display: "none" }}
              id={`primary-file-input-${section.path}`}
              accept=".pdf,.doc,.docx,.xls,.xlsx"
            />
            <input
              type="file"
              onChange={handleAdditionalFileChange}
              style={{ display: "none" }}
              id={`additional-file-input-${section.path}`}
              accept=".pdf,.doc,.docx,.xls,.xlsx"
            />

            <div style={{ display: "flex", justifyContent: "center", gap: "0.65rem", flexWrap: "wrap" }}>
              <label
                htmlFor={`primary-file-input-${section.path}`}
                style={{
                  background: "#0b5ed7",
                  color: "white",
                  padding: primaryButtonPadding,
                  borderRadius: "6px",
                  cursor: "pointer",
                  display: "inline-block",
                  fontSize: buttonFontSize,
                  fontWeight: "500"
                }}
              >
                {uploadedFile ? "Replace Main File" : "Choose Main File"}
              </label>
              {uploadedFile && (
                <label
                  htmlFor={`additional-file-input-${section.path}`}
                  style={{
                    background: "#e2e8f0",
                    color: "#0f172a",
                    padding: secondaryButtonPadding,
                    borderRadius: "6px",
                    cursor: "pointer",
                    display: "inline-block",
                    fontSize: buttonFontSize,
                    fontWeight: "500"
                  }}
                >
                  Add Additional File
                </label>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div style={{
              display: "flex",
              gap: "1rem",
              marginBottom: isMobileLayout ? "0.55rem" : "0.65rem",
              justifyContent: "center"
            }}>
              <button
                onClick={handleSaveFile}
                style={{
                  background: "#28a745",
                  color: "white",
                  border: "none",
                  padding: isMobileLayout ? "0.65rem 1.1rem" : "0.75rem 1.5rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: buttonFontSize,
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
                  padding: isMobileLayout ? "0.65rem 0.9rem" : "0.75rem 1rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: buttonFontSize
                }}
              >
                Cancel
              </button>
            </div>

            <p style={{ margin: "0 0 0.9rem 0", fontSize: "0.82rem", color: "#475569", textAlign: "center" }}>
              {uploadMode === 'primary'
                ? 'This will be saved as the main section file (export name follows section title).'
                : 'This will be saved as an additional file (export name keeps your filename).'}
            </p>

            <div style={{
              width: "100%",
              maxWidth: isMobileLayout ? "100%" : "80vw",
              background: "white",
              borderRadius: "8px",
              height: isMobileLayout ? "62vh" : "80vh",
              overflow: "auto",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              margin: "0 auto"
            }}>
              {previewFile?.type === 'application/pdf' ? (
                <SimplePDFViewer
                  fileUrl={previewUrl}
                  height={isMobileLayout ? "62vh" : "80vh"}
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

const ALERT_TIMEOUT_MS = 5000;
const LONG_PDF_SPLIT_USAGE_KEY = 'ctd-long-pdf-split-usage-v1';
const LONG_PDF_FREE_MAX_USES = 3;
const MOBILE_BREAKPOINT = 768;

const readLongPdfSplitUsage = () => {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(LONG_PDF_SPLIT_USAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
};

const writeLongPdfSplitUsage = (nextValue) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(LONG_PDF_SPLIT_USAGE_KEY, JSON.stringify(nextValue || {}));
  } catch (error) {
    console.warn('Could not persist split usage data.', error);
  }
};

const CTDCompiler = ({
  apiOption = 'option4',
  productName = 'Generic Product',
  userTier = 'free',
  isAuthenticated = false,
  splitUsageSubject = '',
  authToken,
  accessCode = null,
  onExportStateChange = null
}) => {
  const [allFiles, setAllFiles] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window === 'undefined' ? 1280 : window.innerWidth
  );
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
  const [isExporting, setIsExporting] = useState(false);
  const [exportErrorProgress, setExportErrorProgress] = useState(0);
  const [paymentStatusProgress, setPaymentStatusProgress] = useState(0);
  const [showLongPdfTool, setShowLongPdfTool] = useState(false);
  const [longPdfSourceFile, setLongPdfSourceFile] = useState(null);
  const [longPdfSourceName, setLongPdfSourceName] = useState('');
  const [longPdfSourceBytes, setLongPdfSourceBytes] = useState(null);
  const [longPdfPageCount, setLongPdfPageCount] = useState(0);
  const [splitQueue, setSplitQueue] = useState([]);
  const [splitSectionPath, setSplitSectionPath] = useState('');
  const [splitStartPage, setSplitStartPage] = useState('1');
  const [splitEndPage, setSplitEndPage] = useState('1');
  const [splitStatus, setSplitStatus] = useState('');
  const [splitError, setSplitError] = useState('');
  const [isSplitSaving, setIsSplitSaving] = useState(false);
  const [longPdfThumbnails, setLongPdfThumbnails] = useState([]);
  const [isThumbnailLoading, setIsThumbnailLoading] = useState(false);
  const [thumbnailProgress, setThumbnailProgress] = useState({ done: 0, total: 0 });
  const [thumbnailError, setThumbnailError] = useState('');
  const [visualSelectionAnchor, setVisualSelectionAnchor] = useState(null);
  const [splitUsageCount, setSplitUsageCount] = useState(0);
  const thumbnailJobRef = useRef(0);
  const canUseSetup = userTier === 'paid';
  const isMobileLayout = viewportWidth <= MOBILE_BREAKPOINT;

  const splitUsageScopeKey = useMemo(() => {
    if (userTier === 'paid') return null;
    if (!isAuthenticated) return 'guest';
    const subject = String(splitUsageSubject || '')
      .trim()
      .toLowerCase();
    return `free:${subject || 'account'}`;
  }, [isAuthenticated, userTier, splitUsageSubject]);

  const splitGateConfig = useMemo(() => {
    if (userTier === 'paid') {
      return {
        tierLabel: 'Paid',
        maxPagesPerRange: Infinity,
        maxUses: Infinity
      };
    }
    if (!isAuthenticated) {
      return {
        tierLabel: 'Open',
        maxPagesPerRange: 1,
        maxUses: LONG_PDF_FREE_MAX_USES
      };
    }
    return {
      tierLabel: 'Free',
      maxPagesPerRange: 3,
      maxUses: LONG_PDF_FREE_MAX_USES
    };
  }, [isAuthenticated, userTier]);

  const remainingSplitUses = Number.isFinite(splitGateConfig.maxUses)
    ? Math.max(0, splitGateConfig.maxUses - splitUsageCount)
    : Infinity;
  const isSplitGateBlocked = Number.isFinite(splitGateConfig.maxUses) && remainingSplitUses <= 0;
  const splitQueuedPages = useMemo(
    () => splitQueue.reduce((count, item) => count + (item.endPage - item.startPage + 1), 0),
    [splitQueue]
  );
  const isSplitPageCapReached = Number.isFinite(splitGateConfig.maxPagesPerRange)
    && splitQueuedPages >= splitGateConfig.maxPagesPerRange;

  useEffect(() => {
    if (!splitUsageScopeKey) {
      setSplitUsageCount(0);
      return;
    }
    const usageStore = readLongPdfSplitUsage();
    const currentUsage = Number(usageStore[splitUsageScopeKey] || 0);
    setSplitUsageCount(Number.isFinite(currentUsage) && currentUsage > 0 ? currentUsage : 0);
  }, [splitUsageScopeKey]);

  const incrementSplitUsage = () => {
    if (!splitUsageScopeKey || !Number.isFinite(splitGateConfig.maxUses)) {
      return { nextUsage: 0, nextRemaining: Infinity };
    }
    const usageStore = readLongPdfSplitUsage();
    const currentUsage = Number(usageStore[splitUsageScopeKey] || 0);
    const safeCurrentUsage = Number.isFinite(currentUsage) && currentUsage > 0 ? currentUsage : 0;
    const nextUsage = safeCurrentUsage + 1;
    usageStore[splitUsageScopeKey] = nextUsage;
    writeLongPdfSplitUsage(usageStore);
    setSplitUsageCount(nextUsage);
    const nextRemaining = Math.max(0, splitGateConfig.maxUses - nextUsage);
    return { nextUsage, nextRemaining };
  };

  useEffect(() => {
    if (!exportError) {
      setExportErrorProgress(0);
      return undefined;
    }
    setExportErrorProgress(0);
    const frame = window.requestAnimationFrame(() => {
      setExportErrorProgress(100);
    });
    const timer = window.setTimeout(() => {
      setExportError('');
      setExportErrorProgress(0);
    }, ALERT_TIMEOUT_MS);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [exportError]);

  useEffect(() => {
    if (!paymentRequestStatus) {
      setPaymentStatusProgress(0);
      return undefined;
    }
    setPaymentStatusProgress(0);
    const frame = window.requestAnimationFrame(() => {
      setPaymentStatusProgress(100);
    });
    const timer = window.setTimeout(() => {
      setPaymentRequestStatus('');
      setPaymentStatusProgress(0);
    }, ALERT_TIMEOUT_MS);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [paymentRequestStatus]);

  useEffect(() => {
    return () => {
      thumbnailJobRef.current += 1;
    };
  }, []);

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

  const stripSuffixFromSegment = (segment) => String(segment || "").split("__")[0];
  const normalizeStoredSectionPath = (path) =>
    String(path || "")
      .split("/")
      .map((segment) => stripSuffixFromSegment(segment))
      .join("/");
  const isAdditionalUploadPath = (path) => String(path || "").includes("__extra__");
  const createAdditionalUploadPath = (sectionPath) =>
    `${sectionPath}__extra__${Date.now()}_${Math.random().toString(16).slice(2, 8)}`;

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
    const folderSegments = isRootNode ? ancestors : [...ancestors, safeName];

    if (node.type === "folder") {
      acc[node.path] = {
        fileBaseName: safeName,
        folderSegments
      };
    }

    if (node.type === "file" || isLeafFolder) {
      acc[node.path] = {
        fileBaseName: safeName,
        folderSegments
      };
      return acc;
    }

    const nextAncestors = folderSegments;
    if (node.children) {
      node.children.forEach((child) => buildExportNameMap(child, nextAncestors, acc));
    }
    return acc;
  };

  const countLeafDescendants = (node) => {
    if (!node) return 0;
    if (!node.children || node.children.length === 0) return 1;
    return node.children.reduce((count, child) => count + countLeafDescendants(child), 0);
  };

  const consolidatedFolderPaths = useMemo(() => {
    const paths = new Set();

    const traverse = (node) => {
      if (!node || node.type !== 'folder') return;

      const hasChildren = Array.isArray(node.children) && node.children.length > 0;
      if (hasChildren) {
        const inModule4Or5 = node.path.includes('/module4/') || node.path.includes('/module5/');
        const requirement = mapRequirementsToNode(node.path, selectedApiOption, node.requirementKey);
        const leafCount = countLeafDescendants(node);

        if (inModule4Or5 && requirement && leafCount >= 3) {
          paths.add(node.path);
        }

        node.children.forEach(traverse);
      }
    };

    traverse(ctdData);
    return paths;
  }, [ctdData, selectedApiOption]);

  const filteredFiles = allFiles.filter((file) => {
    if (!searchTerm) return true;
    return file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           file.path.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const eligiblePdfSections = useMemo(() => {
    return allFiles
      .filter((node) => {
        if (!isPathAllowed(node.path)) {
          return false;
        }
        const requirement = mapRequirementsToNode(node.path, selectedApiOption, node.requirementKey);
        if (!requirement) {
          return false;
        }
        const rules = getSectionRules(node.path, requirement, node.requirementKey);
        const allowedExtensions = Array.isArray(rules?.allowedExtensions) ? rules.allowedExtensions : [];
        if (allowedExtensions.length === 0) {
          return true;
        }
        return allowedExtensions.includes('pdf');
      })
      .map((node) => ({
        path: node.path,
        name: node.name,
        requirementKey: node.requirementKey
      }));
  }, [allFiles, selectedApiOption, accessScope]);

  const splitOverlapMeta = useMemo(() => {
    const overlappingIds = new Set();
    const warnings = [];

    for (let i = 0; i < splitQueue.length; i += 1) {
      for (let j = i + 1; j < splitQueue.length; j += 1) {
        const a = splitQueue[i];
        const b = splitQueue[j];
        const overlaps = a.startPage <= b.endPage && b.startPage <= a.endPage;
        if (!overlaps) continue;

        overlappingIds.add(a.id);
        overlappingIds.add(b.id);
        warnings.push(
          `Pages ${Math.max(a.startPage, b.startPage)}-${Math.min(a.endPage, b.endPage)} overlap between ${a.sectionName} and ${b.sectionName}.`
        );
      }
    }

    return { overlappingIds, warnings };
  }, [splitQueue]);

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

  const handleFileUpload = async (file, sectionPath, fileAttestations = {}, options = {}) => {
    try {
      const mode = options?.mode === 'additional' ? 'additional' : 'primary';
      const storagePath = mode === 'additional'
        ? createAdditionalUploadPath(sectionPath)
        : sectionPath;
      const fileData = {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        data: await fileToBase64(file),
        attestations: fileAttestations,
        isSupplemental: mode === 'additional'
      };
      
      const newUploadedFiles = new Map(uploadedFiles);
      newUploadedFiles.set(storagePath, fileData);
      setUploadedFiles(newUploadedFiles);

      await saveUploadedFiles(Array.from(newUploadedFiles.entries()));
      updateProgress();
    } catch (error) {
      console.error('Failed to upload file:', error);
    }
  };

  const handleAdditionalFileRemove = async (entryPath) => {
    const newUploadedFiles = new Map(uploadedFiles);
    newUploadedFiles.delete(entryPath);
    setUploadedFiles(newUploadedFiles);
    await saveUploadedFiles(Array.from(newUploadedFiles.entries()));
    updateProgress();
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const parsePageNumber = (value) => {
    const parsed = Number(value);
    if (!Number.isInteger(parsed) || parsed < 1) {
      return null;
    }
    return parsed;
  };

  const clonePdfBytes = (bytes) => {
    if (!bytes) return null;
    try {
      if (bytes instanceof Uint8Array) {
        return new Uint8Array(bytes);
      }
      if (bytes instanceof ArrayBuffer) {
        return new Uint8Array(bytes.slice(0));
      }
      if (ArrayBuffer.isView(bytes)) {
        const view = new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
        return new Uint8Array(view);
      }
      return null;
    } catch {
      return null;
    }
  };

  const getFreshLongPdfBytes = async () => {
    if (longPdfSourceFile && typeof longPdfSourceFile.arrayBuffer === 'function') {
      const freshBuffer = await longPdfSourceFile.arrayBuffer();
      return new Uint8Array(freshBuffer);
    }
    const fallbackBytes = clonePdfBytes(longPdfSourceBytes);
    if (fallbackBytes) {
      return fallbackBytes;
    }
    throw new Error('Long PDF source is unavailable. Re-upload the source PDF.');
  };

  const isPageInCurrentSplitRange = (pageNumber) => {
    const start = parsePageNumber(splitStartPage);
    const end = parsePageNumber(splitEndPage);
    if (!start || !end) return false;
    const minPage = Math.min(start, end);
    const maxPage = Math.max(start, end);
    return pageNumber >= minPage && pageNumber <= maxPage;
  };

  const renderLongPdfThumbnails = async (bytes, pageCount) => {
    if (!bytes || !pageCount) {
      setLongPdfThumbnails([]);
      setThumbnailProgress({ done: 0, total: 0 });
      setIsThumbnailLoading(false);
      return;
    }

    const jobId = Date.now();
    thumbnailJobRef.current = jobId;
    setLongPdfThumbnails([]);
    setThumbnailError('');
    setThumbnailProgress({ done: 0, total: pageCount });
    setIsThumbnailLoading(true);

    let loadingTask = null;
    try {
      ensurePdfWorkerConfigured();
      const pdfJsVersion = getPdfJsVersion();
      if (thumbnailJobRef.current !== jobId) {
        return;
      }

      const clonedBytes = clonePdfBytes(bytes);
      if (!clonedBytes) {
        throw new Error('Invalid PDF bytes for thumbnail rendering.');
      }

      loadingTask = pdfjsLib.getDocument({
        data: clonedBytes,
        cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfJsVersion}/cmaps/`,
        cMapPacked: true,
        standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfJsVersion}/standard_fonts/`,
        useSystemFonts: true
      });
      const pdf = await loadingTask.promise;
      if (thumbnailJobRef.current !== jobId) {
        return;
      }

      const scale = 0.2;
      for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
        if (thumbnailJobRef.current !== jobId) {
          return;
        }

        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.floor(viewport.width));
        canvas.height = Math.max(1, Math.floor(viewport.height));
        const context = canvas.getContext('2d', { alpha: false });

        if (!context) {
          throw new Error('Could not initialize canvas context for thumbnail rendering.');
        }

        const renderTask = page.render({ canvasContext: context, viewport });
        await renderTask.promise;

        if (thumbnailJobRef.current !== jobId) {
          return;
        }

        const imageDataUrl = canvas.toDataURL('image/jpeg', 0.72);
        setLongPdfThumbnails((prev) => {
          if (thumbnailJobRef.current !== jobId) {
            return prev;
          }
          return [...prev, { pageNumber, imageDataUrl }];
        });
        setThumbnailProgress({ done: pageNumber, total: pageCount });
      }
    } catch (error) {
      console.error('Failed to render PDF thumbnails:', error);
      if (thumbnailJobRef.current === jobId) {
        const details = String(error?.message || '').trim();
        setThumbnailError(
          details
            ? `Could not render thumbnail preview (${details}). Manual page entry still works.`
            : 'Could not render thumbnail preview. Manual page entry still works.'
        );
      }
    } finally {
      if (loadingTask) {
        try {
          await loadingTask.destroy();
        } catch (destroyError) {
          // Ignore cleanup errors from canceled tasks.
        }
      }
      if (thumbnailJobRef.current === jobId) {
        setIsThumbnailLoading(false);
      }
    }
  };

  const handleThumbnailPageClick = (pageNumber) => {
    if (!pageNumber || pageNumber < 1) return;

    if (!visualSelectionAnchor) {
      setVisualSelectionAnchor(pageNumber);
      setSplitStartPage(String(pageNumber));
      setSplitEndPage(String(pageNumber));
      setSplitError('');
      setSplitStatus(`Start page set to ${pageNumber}. Click another page to complete selection.`);
      return;
    }

    const start = Math.min(visualSelectionAnchor, pageNumber);
    const end = Math.max(visualSelectionAnchor, pageNumber);
    setSplitStartPage(String(start));
    setSplitEndPage(String(end));
    setVisualSelectionAnchor(null);
    setSplitError('');
    setSplitStatus(`Visual selection set to pages ${start}-${end}.`);
  };

  const clearVisualSelectionAnchor = () => {
    setVisualSelectionAnchor(null);
  };

  const handleLongPdfSourceChange = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    if (isSplitGateBlocked) {
      setSplitError(`${splitGateConfig.tierLabel} split limit reached (${splitGateConfig.maxUses} uses). Upgrade to continue.`);
      setSplitStatus('');
      return;
    }

    const extension = getExtension(file.name).toLowerCase();
    if (extension !== 'pdf' && file.type !== 'application/pdf') {
      setSplitError('Only PDF files can be used for long-document splitting.');
      setSplitStatus('');
      return;
    }

    try {
      setSplitError('');
      setSplitStatus('Loading long PDF...');
      const bytes = new Uint8Array(await file.arrayBuffer());
      const pdf = await PDFDocument.load(new Uint8Array(bytes));
      const pageCount = pdf.getPageCount();

      setLongPdfSourceFile(file);
      setLongPdfSourceName(file.name);
      setLongPdfSourceBytes(bytes);
      setLongPdfPageCount(pageCount);
      setSplitQueue([]);
      setSplitStartPage('1');
      setSplitEndPage('1');
      setVisualSelectionAnchor(null);
      setThumbnailError('');
      setLongPdfThumbnails([]);
      setThumbnailProgress({ done: 0, total: pageCount });
      setSplitStatus(`Loaded ${file.name} with ${pageCount} page${pageCount === 1 ? '' : 's'}.`);
      renderLongPdfThumbnails(bytes, pageCount);
    } catch (error) {
      console.error('Failed to load long PDF source:', error);
      setLongPdfSourceFile(null);
      setLongPdfSourceName('');
      setLongPdfSourceBytes(null);
      setLongPdfPageCount(0);
      setSplitQueue([]);
      setLongPdfThumbnails([]);
      setThumbnailProgress({ done: 0, total: 0 });
      setIsThumbnailLoading(false);
      setThumbnailError('');
      setVisualSelectionAnchor(null);
      setSplitStatus('');
      setSplitError('Could not read this PDF. Please try another file.');
    }
  };

  const handleQueueSplitRange = () => {
    if (isSplitGateBlocked) {
      setSplitError(`${splitGateConfig.tierLabel} split limit reached (${splitGateConfig.maxUses} uses). Upgrade to continue.`);
      setSplitStatus('');
      return;
    }

    if ((!longPdfSourceFile && !longPdfSourceBytes) || longPdfPageCount < 1) {
      setSplitError('Upload and load a long PDF first.');
      setSplitStatus('');
      return;
    }

    if (!splitSectionPath) {
      setSplitError('Select a CTD section.');
      setSplitStatus('');
      return;
    }

    const start = parsePageNumber(splitStartPage);
    const end = parsePageNumber(splitEndPage);
    if (!start || !end) {
      setSplitError('Start and end pages must be positive whole numbers.');
      setSplitStatus('');
      return;
    }
    if (start > end) {
      setSplitError('Start page cannot be greater than end page.');
      setSplitStatus('');
      return;
    }
    if (end > longPdfPageCount) {
      setSplitError(`Page range exceeds source PDF. Maximum page is ${longPdfPageCount}.`);
      setSplitStatus('');
      return;
    }

    const pageSpan = end - start + 1;
    if (Number.isFinite(splitGateConfig.maxPagesPerRange) && pageSpan > splitGateConfig.maxPagesPerRange) {
      setSplitError(`${splitGateConfig.tierLabel} mode allows up to ${splitGateConfig.maxPagesPerRange} page${splitGateConfig.maxPagesPerRange === 1 ? '' : 's'} per split save.`);
      setSplitStatus('');
      return;
    }

    if (Number.isFinite(splitGateConfig.maxPagesPerRange)) {
      const nextTotalPages = splitQueuedPages + pageSpan;
      if (nextTotalPages > splitGateConfig.maxPagesPerRange) {
        setSplitError(
          `${splitGateConfig.tierLabel} mode allows up to ${splitGateConfig.maxPagesPerRange} total page${splitGateConfig.maxPagesPerRange === 1 ? '' : 's'} per split save.`
        );
        setSplitStatus('');
        return;
      }
    }

    const section = eligiblePdfSections.find((item) => item.path === splitSectionPath);
    if (!section) {
      setSplitError('Selected section is no longer available for your account scope.');
      setSplitStatus('');
      return;
    }

    const nextItem = {
      id: `${splitSectionPath}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
      sectionPath: splitSectionPath,
      sectionName: section.name,
      startPage: start,
      endPage: end
    };

    setSplitQueue((prev) => [...prev, nextItem]);
    const nextPage = Math.min(end + 1, longPdfPageCount);
    setSplitStartPage(String(nextPage));
    setSplitEndPage(String(nextPage));
    setVisualSelectionAnchor(null);
    setSplitError('');
    setSplitStatus(`Queued pages ${start}-${end} for ${section.name}.`);
  };

  const handleRemoveQueuedSplit = (entryId) => {
    setSplitQueue((prev) => prev.filter((entry) => entry.id !== entryId));
  };

  const handleClearQueuedSplits = () => {
    setSplitQueue([]);
    setSplitStatus('');
    setSplitError('');
    setVisualSelectionAnchor(null);
  };

  const handleExportSplitQueue = () => {
    if (splitQueue.length === 0) {
      setSplitError('There is no queued range to export.');
      setSplitStatus('');
      return;
    }

    const payload = {
      sourceFileName: longPdfSourceName || null,
      sourcePageCount: longPdfPageCount || null,
      createdAt: new Date().toISOString(),
      items: splitQueue.map((item) => ({
        sectionPath: item.sectionPath,
        sectionName: item.sectionName,
        startPage: item.startPage,
        endPage: item.endPage
      }))
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `split-queue-${Date.now()}.json`;
    anchor.click();
    URL.revokeObjectURL(url);

    setSplitError('');
    setSplitStatus(`Exported ${splitQueue.length} queued range${splitQueue.length === 1 ? '' : 's'} as JSON.`);
  };

  const handleImportSplitQueueChange = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    if ((!longPdfSourceFile && !longPdfSourceBytes) || longPdfPageCount < 1) {
      setSplitError('Load a source PDF before importing queue ranges.');
      setSplitStatus('');
      return;
    }

    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const rawItems = Array.isArray(parsed) ? parsed : parsed?.items;
      if (!Array.isArray(rawItems) || rawItems.length === 0) {
        throw new Error('Imported file has no queue items.');
      }

      const allowedSectionPaths = new Set(eligiblePdfSections.map((item) => item.path));
      const normalized = [];

      rawItems.forEach((item, index) => {
        const sectionPath = String(item?.sectionPath || '').trim();
        const startPage = Number(item?.startPage);
        const endPage = Number(item?.endPage);

        if (!sectionPath || !allowedSectionPaths.has(sectionPath)) {
          throw new Error(`Item ${index + 1}: section is missing or not available in current access scope.`);
        }
        if (!Number.isInteger(startPage) || !Number.isInteger(endPage) || startPage < 1 || endPage < 1) {
          throw new Error(`Item ${index + 1}: pages must be positive integers.`);
        }
        if (startPage > endPage) {
          throw new Error(`Item ${index + 1}: start page cannot be greater than end page.`);
        }
        if (endPage > longPdfPageCount) {
          throw new Error(`Item ${index + 1}: end page exceeds source PDF page count (${longPdfPageCount}).`);
        }
        const pageSpan = endPage - startPage + 1;
        if (Number.isFinite(splitGateConfig.maxPagesPerRange) && pageSpan > splitGateConfig.maxPagesPerRange) {
          throw new Error(
            `Item ${index + 1}: ${splitGateConfig.tierLabel} mode allows up to ${splitGateConfig.maxPagesPerRange} page${splitGateConfig.maxPagesPerRange === 1 ? '' : 's'} per split save.`
          );
        }

        const section =
          eligiblePdfSections.find((entry) => entry.path === sectionPath);
        normalized.push({
          id: `${sectionPath}-${Date.now()}-${index}`,
          sectionPath,
          sectionName: section?.name || String(item?.sectionName || sectionPath),
          startPage,
          endPage
        });
      });

      if (Number.isFinite(splitGateConfig.maxPagesPerRange)) {
        const totalImportedPages = normalized.reduce(
          (count, item) => count + (item.endPage - item.startPage + 1),
          0
        );
        if (totalImportedPages > splitGateConfig.maxPagesPerRange) {
          throw new Error(
            `${splitGateConfig.tierLabel} mode allows up to ${splitGateConfig.maxPagesPerRange} total page${splitGateConfig.maxPagesPerRange === 1 ? '' : 's'} per split save.`
          );
        }
      }

      setSplitQueue(normalized);
      if (normalized.length > 0) {
        const suggestion = Math.min(normalized[normalized.length - 1].endPage + 1, longPdfPageCount);
        setSplitStartPage(String(suggestion));
        setSplitEndPage(String(suggestion));
      }
      setVisualSelectionAnchor(null);
      setSplitError('');
      setSplitStatus(`Imported ${normalized.length} queued range${normalized.length === 1 ? '' : 's'}.`);
    } catch (error) {
      console.error('Failed to import split queue:', error);
      setSplitError(error.message || 'Failed to import split queue JSON.');
      setSplitStatus('');
    }
  };

  const handleSaveQueuedSplits = async () => {
    if (isSplitSaving) return;

    if (isSplitGateBlocked) {
      setSplitError(`${splitGateConfig.tierLabel} split limit reached (${splitGateConfig.maxUses} uses). Upgrade to continue.`);
      setSplitStatus('');
      return;
    }

    if ((!longPdfSourceFile && !longPdfSourceBytes) || longPdfPageCount < 1) {
      setSplitError('Upload and load a long PDF first.');
      setSplitStatus('');
      return;
    }

    if (splitQueue.length === 0) {
      setSplitError('Add at least one page range to the queue.');
      setSplitStatus('');
      return;
    }

    setIsSplitSaving(true);
    setSplitError('');
    setSplitStatus('Splitting PDF and saving sections locally...');

    try {
      const sourceBytes = await getFreshLongPdfBytes();

      const sourcePdf = await PDFDocument.load(sourceBytes);
      const nextUploadedFiles = new Map(uploadedFiles);
      const processedCountsBySection = new Map();
      let savedCount = 0;

      for (const item of splitQueue) {
        const section = eligiblePdfSections.find((entry) => entry.path === item.sectionPath);
        if (!section) {
          throw new Error(`Section not available: ${item.sectionName}`);
        }

        if (item.startPage < 1 || item.endPage > longPdfPageCount || item.startPage > item.endPage) {
          throw new Error(`Invalid range for ${section.name}: ${item.startPage}-${item.endPage}`);
        }

        const outputPdf = await PDFDocument.create();
        const pageIndices = [];
        for (let page = item.startPage; page <= item.endPage; page += 1) {
          pageIndices.push(page - 1);
        }
        const copiedPages = await outputPdf.copyPages(sourcePdf, pageIndices);
        copiedPages.forEach((page) => outputPdf.addPage(page));

        const splitBytes = await outputPdf.save();
        const processedCount = processedCountsBySection.get(section.path) || 0;
        const isPrimaryForSection = processedCount === 0;
        const splitFileName = isPrimaryForSection
          ? `${sanitizeTreeLabel(section.name)}.pdf`
          : `${sanitizeTreeLabel(section.name)}__pages_${item.startPage}-${item.endPage}.pdf`;
        const splitFile = new File([splitBytes], splitFileName, {
          type: 'application/pdf',
          lastModified: Date.now()
        });

        const requirement = mapRequirementsToNode(section.path, selectedApiOption, section.requirementKey);
        const validation = validateFileForSection({
          file: splitFile,
          nodePath: section.path,
          requirement,
          requirementKey: section.requirementKey
        });
        if (!validation.ok) {
          throw new Error(`${section.name}: ${validation.message}`);
        }

        const sectionRules = getSectionRules(section.path, requirement, section.requirementKey);
        const documentRequirements = getDocumentRequirements({
          fileName: splitFile.name,
          rules: sectionRules
        });
        const attestations = documentRequirements.reduce((acc, req) => {
          acc[req.id] = true;
          return acc;
        }, {});

        const storagePath = isPrimaryForSection ? section.path : createAdditionalUploadPath(section.path);
        const fileData = {
          name: splitFile.name,
          size: splitFile.size,
          type: splitFile.type,
          lastModified: splitFile.lastModified,
          data: await fileToBase64(splitFile),
          attestations,
          isSupplemental: !isPrimaryForSection
        };

        nextUploadedFiles.set(storagePath, fileData);
        processedCountsBySection.set(section.path, processedCount + 1);
        savedCount += 1;
      }

      setUploadedFiles(nextUploadedFiles);
      await saveUploadedFiles(Array.from(nextUploadedFiles.entries()));
      updateProgress();
      setSplitQueue([]);
      const { nextRemaining } = incrementSplitUsage();
      if (Number.isFinite(nextRemaining)) {
        setSplitStatus(
          `Saved ${savedCount} split section${savedCount === 1 ? '' : 's'} locally. ${nextRemaining} split use${nextRemaining === 1 ? '' : 's'} remaining for ${splitGateConfig.tierLabel.toLowerCase()} mode.`
        );
      } else {
        setSplitStatus(`Saved ${savedCount} split section${savedCount === 1 ? '' : 's'} locally.`);
      }
    } catch (error) {
      console.error('Failed to split and save long PDF:', error);
      setSplitError(error.message || 'Failed to split and save long PDF.');
      setSplitStatus('');
    } finally {
      setIsSplitSaving(false);
    }
  };

  const updateProgress = () => {
    const coveredPaths = new Set();

    allFiles.forEach((file) => {
      if (uploadedFiles.has(file.path)) {
        coveredPaths.add(file.path);
      }
    });

    uploadedFiles.forEach((_, storedPath) => {
      const normalizedPath = normalizeStoredSectionPath(storedPath);
      if (storedPath !== normalizedPath) return;
      if (!consolidatedFolderPaths.has(normalizedPath)) return;

      const prefix = `${normalizedPath}/`;
      allFiles.forEach((file) => {
        if (file.path.startsWith(prefix)) {
          coveredPaths.add(file.path);
        }
      });
    });

    const completed = coveredPaths.size;
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

      const normalizedSectionPath = normalizeStoredSectionPath(sectionPath);
      const ext = getExtension(fileData?.name);
      const fallbackName = String(fileData?.name || "document").replace(/\.[^/.]+$/, "");
      const mappedEntry = exportNameByPath[normalizedSectionPath];
      const isSupplementalUpload = Boolean(fileData?.isSupplemental) || isAdditionalUploadPath(sectionPath);
      const baseName = isSupplementalUpload
        ? sanitizeTreeLabel(fallbackName)
        : sanitizeTreeLabel(
          mappedEntry?.fileBaseName || fallbackNameByPath[normalizedSectionPath] || fallbackName
        );
      const fallbackFolderSegments = normalizedSectionPath
        .replace(/^\/?ctd\/?/, "")
        .split("/")
        .filter(Boolean)
        .map((segment) => sanitizeTreeLabel(stripSuffixFromSegment(segment)));
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
    if (isExporting) {
      return;
    }
    if (!authToken) {
      setExportError("Sign in is required for export approval from the server.");
      return;
    }

    const effectiveUploadedFiles = new Map(uploadedFiles);
    uploadedFiles.forEach((fileData, storedPath) => {
      const normalizedPath = normalizeStoredSectionPath(storedPath);
      if (storedPath !== normalizedPath) return;
      if (!consolidatedFolderPaths.has(normalizedPath)) return;

      const prefix = `${normalizedPath}/`;
      allFiles.forEach((fileNode) => {
        if (fileNode.path.startsWith(prefix) && !effectiveUploadedFiles.has(fileNode.path)) {
          effectiveUploadedFiles.set(fileNode.path, {
            ...fileData,
            isConsolidatedProxy: true
          });
        }
      });
    });

    const errors = validateExportReadiness({
      allFiles,
      uploadedFiles: effectiveUploadedFiles,
      requirementResolver: (node) => mapRequirementsToNode(node.path, selectedApiOption, node.requirementKey)
    });
    if (errors.length > 0) {
      setExportError(errors[0]);
      return;
    }
    setExportError('');
    const exportPayload = {};
    uploadedFiles.forEach((fileData, sectionPath) => {
      const normalizedSectionPath = normalizeStoredSectionPath(sectionPath);
      if (!isPathAllowed(normalizedSectionPath)) {
        return;
      }
      const requirement = mapRequirementsToNode(normalizedSectionPath, selectedApiOption);
      if (!requirement) {
        return;
      }
      exportPayload[sectionPath] = fileData;
    });

    try {
      setIsExporting(true);
      const response = await requestExport(authToken, { name: productName, accessCode });
      await downloadZipFromPayload(exportPayload);
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
    } finally {
      setIsExporting(false);
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

  const confirmClearFiles = async () => {
    setUploadedFiles(new Map());
    setSelectedSection(null);
    await clearUploadedFiles();
    setUploadProgress((prev) => ({ ...prev, completed: 0 }));
  };

  const clearAllFiles = async () => {
    const shouldClear = window.confirm('Are you sure you want to clear all uploaded files? This action cannot be undone.');
    if (!shouldClear) {
      return;
    }
    await confirmClearFiles();
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
    let isMounted = true;

    const restoreUploads = async () => {
      try {
        const restoredFiles = await loadUploadedFiles();
        if (isMounted) {
          setUploadedFiles(restoredFiles);
        }
      } catch (error) {
        console.error('Failed to restore saved files:', error);
      }
    };

    restoreUploads();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    updateProgress();
  }, [uploadedFiles, allFiles, consolidatedFolderPaths]);

  useEffect(() => {
    const handleResize = () => {
      const nextWidth = window.innerWidth;
      setViewportWidth(nextWidth);
      if (nextWidth <= MOBILE_BREAKPOINT) {
        setIsNavCollapsed(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const selectedSectionUploads = useMemo(() => {
    if (!selectedSection) {
      return { primary: null, additional: [] };
    }
    const primary = uploadedFiles.get(selectedSection.path) || null;
    const additional = Array.from(uploadedFiles.entries())
      .filter(([storedPath]) => storedPath.startsWith(`${selectedSection.path}__extra__`))
      .map(([key, fileData]) => ({ key, fileData }));
    return { primary, additional };
  }, [selectedSection, uploadedFiles]);

  useEffect(() => {
    if (eligiblePdfSections.length === 0) {
      setSplitSectionPath('');
      return;
    }
    setSplitSectionPath((prev) => {
      if (prev && eligiblePdfSections.some((item) => item.path === prev)) {
        return prev;
      }
      return eligiblePdfSections[0].path;
    });
  }, [eligiblePdfSections]);



  return (
    <div className="review-container" style={{ 
      position: "relative", 
      display: "flex", 
      flexDirection: isMobileLayout ? "column" : "row",
      height: isMobileLayout ? "auto" : "100%", 
      overflow: isMobileLayout ? "visible" : "hidden", 
      marginTop: "0" 
    }}>
      <div
        className={`file-nav ${isNavCollapsed ? "collapsed" : ""}`}
        style={{
          width: isNavCollapsed ? "0" : isMobileLayout ? "100%" : "360px",
          minWidth: isNavCollapsed ? "0" : isMobileLayout ? "100%" : "360px",
          borderRight: isMobileLayout ? "none" : "1px solid #e5e7eb",
          background: "white",
          boxShadow: isMobileLayout ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "2px 0 8px rgba(0,0,0,0.05)",
          transition: "all 0.3s ease",
          height: isNavCollapsed ? "0" : "100dvh",
          maxHeight: isNavCollapsed ? "0" : "100dvh",
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
              maxHeight: "calc(100dvh - 200px)",
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
              consolidatedFolderPaths={consolidatedFolderPaths}
            />
          </div>
        )}
      </div>

      <button
        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        style={{
          position: isMobileLayout ? "fixed" : "absolute",
          left: isMobileLayout ? "auto" : isNavCollapsed ? "10px" : "348px",
          right: isMobileLayout ? "16px" : "auto",
          top: isMobileLayout ? "86px" : "50%",
          bottom: "auto",
          transform: isMobileLayout ? "none" : "translateY(-50%)",
          width: isMobileLayout ? "44px" : "28px",
          height: isMobileLayout ? "44px" : "56px",
          backgroundColor: "#0b5ed7",
          border: "none",
          borderRadius: isMobileLayout ? "999px" : "14px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: isMobileLayout ? "16px" : "14px",
          boxShadow: "0 6px 14px rgba(0,0,0,0.18)",
          zIndex: isMobileLayout ? 1200 : 20,
          pointerEvents: "auto",
          transition: isMobileLayout ? "transform 0.2s ease" : "left 0.2s ease"
        }}
        title={isNavCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isMobileLayout ? (isNavCollapsed ? "↓" : "↑") : (isNavCollapsed ? "→" : "←")}
      </button>

      <div
        className="file-viewer"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: isMobileLayout ? "auto" : "100dvh",
          minHeight: isMobileLayout ? "58dvh" : "auto",
          position: "relative"
        }}
      >
        {/* Progress Header */}
        <div style={{
          background: "linear-gradient(to right, #f8fafc, #f1f5f9)",
          borderBottom: "1px solid #e2e8f0",
          padding: isMobileLayout ? "1rem" : "1.5rem",
          display: "flex",
          flexDirection: isMobileLayout ? "column" : "row",
          gap: "1rem",
          justifyContent: "space-between",
          alignItems: isMobileLayout ? "stretch" : "center"
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
            <p style={{ margin: "0.45rem 0 0 0", fontSize: "0.78rem", color: "#334155" }}>
              Long PDF Split Access: {splitGateConfig.tierLabel} mode,{" "}
              {Number.isFinite(splitGateConfig.maxPagesPerRange)
                ? `${splitGateConfig.maxPagesPerRange} page${splitGateConfig.maxPagesPerRange === 1 ? '' : 's'} per split save`
                : "unlimited pages per split save"}
              {Number.isFinite(splitGateConfig.maxUses)
                ? `, ${remainingSplitUses} of ${splitGateConfig.maxUses} uses left`
                : ", unlimited uses"}.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{
              width: isMobileLayout ? "100%" : "240px",
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
            <button
              onClick={() => setShowLongPdfTool((prev) => !prev)}
              style={{
                background: showLongPdfTool ? "#0b5ed7" : "#ffffff",
                color: showLongPdfTool ? "white" : "#0b5ed7",
                border: "1px solid #0b5ed7",
                padding: "0.65rem 1rem",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: "600"
              }}
              title="Open Long PDF Split Tool"
            >
              {showLongPdfTool ? "Hide Split Tool" : "Long PDF Split Tool"}
            </button>
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
              disabled={uploadProgress.completed === 0 || !isAuthenticated || isExporting}
              style={{
                background: uploadProgress.completed > 0 && isAuthenticated && !isExporting
                  ? "linear-gradient(135deg, #0b5ed7 0%, #0a58ca 100%)"
                  : "#e2e8f0",
                color: uploadProgress.completed > 0 && isAuthenticated && !isExporting ? "white" : "#94a3b8",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                cursor: uploadProgress.completed > 0 && isAuthenticated && !isExporting ? "pointer" : "not-allowed",
                fontSize: "0.9rem",
                fontWeight: "600",
                boxShadow: uploadProgress.completed > 0 && isAuthenticated && !isExporting ? "0 2px 8px rgba(59, 130, 246, 0.3)" : "none",
                transition: "all 0.2s ease"
              }}
            >
              <FontAwesomeIcon icon={faDownload} /> {isExporting ? "Exporting..." : "Export ZIP"}
            </button>
          </div>
        </div>

        {(exportError || paymentRequestStatus) && (
          <div style={{
            position: "absolute",
            top: isMobileLayout ? "0.75rem" : "1.25rem",
            right: isMobileLayout ? "0.75rem" : "1.5rem",
            left: isMobileLayout ? "0.75rem" : "auto",
            display: "grid",
            gap: "0.5rem",
            width: isMobileLayout ? "auto" : "min(420px, 90vw)",
            zIndex: 5,
            pointerEvents: "none"
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
                <div
                  style={{
                    marginTop: "0.6rem",
                    height: "4px",
                    borderRadius: "999px",
                    background: "#fee2e2",
                    overflow: "hidden"
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${exportErrorProgress}%`,
                      background: "#ef4444",
                      transition: `width ${ALERT_TIMEOUT_MS}ms linear`
                    }}
                  />
                </div>
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
                <div
                  style={{
                    marginTop: "0.6rem",
                    height: "4px",
                    borderRadius: "999px",
                    background: "#cffafe",
                    overflow: "hidden"
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${paymentStatusProgress}%`,
                      background: "#0891b2",
                      transition: `width ${ALERT_TIMEOUT_MS}ms linear`
                    }}
                  />
                </div>
              </div>
            )}
            </div>
          )}
        
        {/* Upload Interface */}
        <div style={{ 
          flex: 1, 
          overflowY: "auto",
          padding: isMobileLayout ? "0.75rem" : "2rem"
        }}>
          {showLongPdfTool && (
            <div style={{
              background: "white",
              border: "1px solid #bfdbfe",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
              marginBottom: "1rem",
              overflow: "hidden"
            }}>
              <div style={{
                padding: "0.85rem 1rem",
                background: "linear-gradient(90deg, #eff6ff 0%, #f8fafc 100%)",
                borderBottom: "1px solid #dbeafe",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.75rem"
              }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "0.92rem", color: "#0b5ed7", fontWeight: "700" }}>Long PDF Split Workspace</div>
                  <div style={{ fontSize: "0.75rem", color: "#475569", marginTop: "0.15rem" }}>
                    {splitGateConfig.tierLabel} access ·{" "}
                    {Number.isFinite(splitGateConfig.maxPagesPerRange)
                      ? `${splitGateConfig.maxPagesPerRange} page${splitGateConfig.maxPagesPerRange === 1 ? '' : 's'} per split save`
                      : "unlimited pages per split save"}
                    {Number.isFinite(splitGateConfig.maxUses)
                      ? ` · ${remainingSplitUses}/${splitGateConfig.maxUses} uses left`
                      : " · unlimited uses"}
                    {Number.isFinite(splitGateConfig.maxPagesPerRange)
                      ? ` · ${splitQueuedPages}/${splitGateConfig.maxPagesPerRange} pages queued`
                      : ""}
                  </div>
                </div>
                <button
                  onClick={() => setShowLongPdfTool(false)}
                  style={{
                    border: "1px solid #cbd5e1",
                    background: "white",
                    color: "#334155",
                    borderRadius: "8px",
                    padding: "0.35rem 0.65rem",
                    fontSize: "0.76rem",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                >
                  Close
                </button>
              </div>
              <div style={{ padding: "0.9rem 1rem 1rem 1rem" }}>
                <p style={{ margin: "0.85rem 0", fontSize: "0.88rem", color: "#475569", lineHeight: 1.5 }}>
                  Upload one long PDF, assign page ranges to CTD sections, and save each split directly into section uploads.
                  This is local processing only.
                </p>

                {isSplitGateBlocked && (
                  <div style={{
                    background: "#fff7ed",
                    border: "1px solid #fdba74",
                    borderRadius: "8px",
                    color: "#9a3412",
                    fontSize: "0.82rem",
                    padding: "0.65rem 0.75rem",
                    marginBottom: "0.75rem"
                  }}>
                    {splitGateConfig.tierLabel} split limit reached. You have used all {splitGateConfig.maxUses} allowed split saves.
                    {isAuthenticated ? " Upgrade to paid for unlimited split access." : " Create a free account or upgrade for higher limits."}
                  </div>
                )}
                {!isSplitGateBlocked && isSplitPageCapReached && (
                  <div style={{
                    background: "#fff7ed",
                    border: "1px solid #fed7aa",
                    borderRadius: "8px",
                    color: "#9a3412",
                    fontSize: "0.82rem",
                    padding: "0.55rem 0.7rem",
                    marginBottom: "0.75rem"
                  }}>
                    Page cap reached for this split save. Save the current queue or clear it before adding more pages.
                  </div>
                )}

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem" }}>
                  <input
                    id="long-pdf-source-input"
                    type="file"
                    accept=".pdf,application/pdf"
                    onChange={handleLongPdfSourceChange}
                    style={{ display: "none" }}
                  />
                  <label
                    htmlFor="long-pdf-source-input"
                    style={{
                      background: isSplitGateBlocked ? "#cbd5e1" : "#0b5ed7",
                      color: isSplitGateBlocked ? "#64748b" : "white",
                      borderRadius: "8px",
                      padding: "0.6rem 0.9rem",
                      fontSize: "0.85rem",
                      cursor: isSplitGateBlocked ? "not-allowed" : "pointer",
                      fontWeight: "600",
                      pointerEvents: isSplitGateBlocked ? "none" : "auto"
                    }}
                  >
                    Upload Long PDF
                  </label>
                  {longPdfSourceName && (
                    <div style={{ fontSize: "0.82rem", color: "#0f172a" }}>
                      <strong>{longPdfSourceName}</strong> ({longPdfPageCount} page{longPdfPageCount === 1 ? "" : "s"})
                    </div>
                  )}
                </div>

                {longPdfSourceBytes && (
                  eligiblePdfSections.length === 0 ? (
                    <div style={{
                      background: "#fff7ed",
                      border: "1px solid #fdba74",
                      borderRadius: "8px",
                      color: "#9a3412",
                      fontSize: "0.82rem",
                      padding: "0.65rem 0.75rem",
                      marginBottom: "0.75rem"
                    }}>
                      No PDF-compatible sections are available in your current account scope.
                    </div>
                  ) : (
                  <>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "0.75rem" }}>
                      <button
                        onClick={handleExportSplitQueue}
                        disabled={splitQueue.length === 0}
                        style={{
                          background: splitQueue.length === 0 ? "#e2e8f0" : "#f1f5f9",
                          color: splitQueue.length === 0 ? "#94a3b8" : "#334155",
                          border: "1px solid #cbd5e1",
                          borderRadius: "8px",
                          padding: "0.45rem 0.8rem",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          cursor: splitQueue.length === 0 ? "not-allowed" : "pointer"
                        }}
                      >
                        Export Queue JSON
                      </button>
                      <input
                        id="split-queue-import-input"
                        type="file"
                        accept=".json,application/json"
                        onChange={handleImportSplitQueueChange}
                        style={{ display: "none" }}
                      />
                      <label
                        htmlFor="split-queue-import-input"
                        style={{
                          background: "#f8fafc",
                          color: "#334155",
                          border: "1px solid #cbd5e1",
                          borderRadius: "8px",
                          padding: "0.45rem 0.8rem",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          cursor: "pointer"
                        }}
                      >
                        Import Queue JSON
                      </label>
                    </div>

                    <div style={{
                      display: "grid",
                      gap: "0.65rem",
                      gridTemplateColumns: isMobileLayout ? "1fr" : "2fr 1fr 1fr auto",
                      alignItems: "end",
                      marginBottom: "0.75rem"
                    }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.75rem", color: "#334155", marginBottom: "0.25rem" }}>
                          Target Section
                        </label>
                        <select
                          value={splitSectionPath}
                          onChange={(event) => setSplitSectionPath(event.target.value)}
                          style={{
                            width: "100%",
                            border: "1px solid #cbd5e1",
                            borderRadius: "6px",
                            padding: "0.5rem",
                            fontSize: "0.82rem"
                          }}
                        >
                          {eligiblePdfSections.map((section) => (
                            <option key={section.path} value={section.path}>
                              {section.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "0.75rem", color: "#334155", marginBottom: "0.25rem" }}>
                          Start Page
                        </label>
                        <input
                          type="number"
                          min={1}
                          max={longPdfPageCount || undefined}
                          value={splitStartPage}
                          onChange={(event) => setSplitStartPage(event.target.value)}
                          style={{
                            width: "100%",
                            border: "1px solid #cbd5e1",
                            borderRadius: "6px",
                            padding: "0.5rem",
                            fontSize: "0.82rem"
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "0.75rem", color: "#334155", marginBottom: "0.25rem" }}>
                          End Page
                        </label>
                        <input
                          type="number"
                          min={1}
                          max={longPdfPageCount || undefined}
                          value={splitEndPage}
                          onChange={(event) => setSplitEndPage(event.target.value)}
                          style={{
                            width: "100%",
                            border: "1px solid #cbd5e1",
                            borderRadius: "6px",
                            padding: "0.5rem",
                            fontSize: "0.82rem"
                          }}
                        />
                      </div>
                      <button
                        onClick={handleQueueSplitRange}
                        disabled={isSplitGateBlocked || isSplitPageCapReached}
                        style={{
                          background: isSplitGateBlocked || isSplitPageCapReached ? "#e2e8f0" : "#dbeafe",
                          color: isSplitGateBlocked || isSplitPageCapReached ? "#94a3b8" : "#1e3a8a",
                          border: "none",
                          borderRadius: "6px",
                          padding: "0.55rem 0.9rem",
                          fontSize: "0.82rem",
                          fontWeight: "600",
                          cursor: isSplitGateBlocked || isSplitPageCapReached ? "not-allowed" : "pointer"
                        }}
                      >
                        Add Range
                      </button>
                    </div>

                    <div style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      overflow: "hidden",
                      marginBottom: "0.75rem",
                      background: "white"
                    }}>
                      <div style={{
                        background: "#f8fafc",
                        padding: "0.55rem 0.7rem",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        color: "#334155"
                      }}>
                        Visual Page Picker (Phase 2)
                      </div>

                      <div style={{ padding: "0.6rem" }}>
                        <div style={{ fontSize: "0.78rem", color: "#475569", marginBottom: "0.45rem" }}>
                          Click one thumbnail to set start, then another to complete page range.
                        </div>
                        {visualSelectionAnchor && (
                          <div style={{ fontSize: "0.76rem", color: "#92400e", marginBottom: "0.45rem" }}>
                            Anchor set at page {visualSelectionAnchor}. Click another page to complete selection.
                          </div>
                        )}
                        {visualSelectionAnchor && (
                          <button
                            onClick={clearVisualSelectionAnchor}
                            style={{
                              marginBottom: "0.55rem",
                              background: "#fff7ed",
                              color: "#9a3412",
                              border: "1px solid #fdba74",
                              borderRadius: "6px",
                              padding: "0.3rem 0.55rem",
                              fontSize: "0.74rem",
                              cursor: "pointer"
                            }}
                          >
                            Clear Anchor
                          </button>
                        )}

                        {isThumbnailLoading && (
                          <div style={{
                            background: "#eff6ff",
                            border: "1px solid #bfdbfe",
                            borderRadius: "6px",
                            color: "#1e3a8a",
                            fontSize: "0.78rem",
                            padding: "0.45rem 0.55rem",
                            marginBottom: "0.55rem"
                          }}>
                            Rendering thumbnails... {thumbnailProgress.done}/{thumbnailProgress.total}
                          </div>
                        )}

                        {thumbnailError && (
                          <div style={{
                            background: "#fff7ed",
                            border: "1px solid #fdba74",
                            borderRadius: "6px",
                            color: "#9a3412",
                            fontSize: "0.78rem",
                            padding: "0.45rem 0.55rem",
                            marginBottom: "0.55rem"
                          }}>
                            {thumbnailError}
                          </div>
                        )}

                        {!isThumbnailLoading && longPdfThumbnails.length > 0 && (
                          <div style={{
                            maxHeight: "320px",
                            overflowY: "auto",
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(88px, 1fr))",
                            gap: "0.45rem",
                            paddingRight: "0.2rem"
                          }}>
                            {longPdfThumbnails.map((thumb) => {
                              const inRange = isPageInCurrentSplitRange(thumb.pageNumber);
                              const isAnchor = visualSelectionAnchor === thumb.pageNumber;
                              return (
                                <button
                                  key={thumb.pageNumber}
                                  onClick={() => handleThumbnailPageClick(thumb.pageNumber)}
                                  style={{
                                    border: isAnchor
                                      ? "2px solid #f59e0b"
                                      : inRange
                                        ? "2px solid #0b5ed7"
                                        : "1px solid #d1d5db",
                                    background: inRange ? "#eff6ff" : "white",
                                    borderRadius: "6px",
                                    padding: "0.2rem",
                                    cursor: "pointer",
                                    textAlign: "center"
                                  }}
                                  title={`Page ${thumb.pageNumber}`}
                                >
                                  <img
                                    src={thumb.imageDataUrl}
                                    alt={`Page ${thumb.pageNumber}`}
                                    style={{
                                      width: "100%",
                                      height: "auto",
                                      borderRadius: "4px",
                                      display: "block"
                                    }}
                                  />
                                  <div style={{
                                    fontSize: "0.7rem",
                                    color: "#334155",
                                    marginTop: "0.2rem",
                                    fontWeight: inRange || isAnchor ? "600" : "500"
                                  }}>
                                    {thumb.pageNumber}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>

                    <div style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      overflow: "hidden",
                      marginBottom: "0.75rem"
                    }}>
                      <div style={{
                        background: "#f8fafc",
                        padding: "0.55rem 0.7rem",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        color: "#334155"
                      }}>
                        Split Queue ({splitQueue.length})
                      </div>
                      {splitQueue.length === 0 ? (
                        <div style={{ padding: "0.7rem", fontSize: "0.82rem", color: "#64748b" }}>
                          No ranges queued yet.
                        </div>
                      ) : (
                        <div style={{ display: "grid", gap: "0.45rem", padding: "0.6rem" }}>
                          {splitQueue.map((item) => {
                            const hasOverlap = splitOverlapMeta.overlappingIds.has(item.id);
                            return (
                              <div
                                key={item.id}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  gap: "0.75rem",
                                  background: hasOverlap ? "#fffbeb" : "#ffffff",
                                  border: hasOverlap ? "1px solid #fbbf24" : "1px solid #e2e8f0",
                                  borderRadius: "6px",
                                  padding: "0.45rem 0.55rem"
                                }}
                              >
                                <div style={{ minWidth: 0 }}>
                                  <div style={{ fontSize: "0.82rem", color: "#0f172a", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {item.sectionName}
                                  </div>
                                  <div style={{ fontSize: "0.75rem", color: "#475569" }}>
                                    Pages {item.startPage}-{item.endPage}
                                  </div>
                                  {hasOverlap && (
                                    <div style={{ fontSize: "0.72rem", color: "#92400e", marginTop: "0.2rem" }}>
                                      Overlap warning
                                    </div>
                                  )}
                                </div>
                                <button
                                  onClick={() => handleRemoveQueuedSplit(item.id)}
                                  style={{
                                    border: "1px solid #fecaca",
                                    background: "#fff1f2",
                                    color: "#b91c1c",
                                    borderRadius: "5px",
                                    fontSize: "0.74rem",
                                    padding: "0.25rem 0.55rem",
                                    cursor: "pointer"
                                  }}
                                >
                                  Remove
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {splitOverlapMeta.warnings.length > 0 && (
                      <div style={{
                        background: "#fffbeb",
                        border: "1px solid #fbbf24",
                        borderRadius: "8px",
                        color: "#92400e",
                        fontSize: "0.78rem",
                        padding: "0.6rem 0.7rem",
                        marginBottom: "0.75rem",
                        lineHeight: 1.4
                      }}>
                        <strong style={{ display: "block", marginBottom: "0.25rem" }}>Overlap warnings</strong>
                        {splitOverlapMeta.warnings.slice(0, 3).map((warning, index) => (
                          <div key={`${warning}-${index}`}>{warning}</div>
                        ))}
                        {splitOverlapMeta.warnings.length > 3 && (
                          <div>+ {splitOverlapMeta.warnings.length - 3} more warning(s)</div>
                        )}
                      </div>
                    )}

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                      <button
                        onClick={handleSaveQueuedSplits}
                        disabled={isSplitSaving || splitQueue.length === 0 || isSplitGateBlocked}
                        style={{
                          background: isSplitSaving || splitQueue.length === 0 || isSplitGateBlocked ? "#cbd5e1" : "#0b5ed7",
                          color: "white",
                          border: "none",
                          borderRadius: "8px",
                          padding: "0.6rem 1rem",
                          fontSize: "0.84rem",
                          fontWeight: "600",
                          cursor: isSplitSaving || splitQueue.length === 0 || isSplitGateBlocked ? "not-allowed" : "pointer"
                        }}
                      >
                        {isSplitSaving ? "Saving Splits..." : "Split & Save to Sections"}
                      </button>
                      <button
                        onClick={handleClearQueuedSplits}
                        disabled={isSplitSaving || splitQueue.length === 0}
                        style={{
                          background: "#f1f5f9",
                          color: "#334155",
                          border: "1px solid #cbd5e1",
                          borderRadius: "8px",
                          padding: "0.6rem 0.9rem",
                          fontSize: "0.84rem",
                          fontWeight: "600",
                          cursor: isSplitSaving || splitQueue.length === 0 ? "not-allowed" : "pointer"
                        }}
                      >
                        Clear Queue
                      </button>
                    </div>
                  </>
                  )
                )}

                {splitError && (
                  <div style={{
                    marginTop: "0.75rem",
                    background: "#fee2e2",
                    border: "1px solid #fecaca",
                    borderRadius: "6px",
                    color: "#b91c1c",
                    fontSize: "0.83rem",
                    padding: "0.55rem 0.7rem"
                  }}>
                    {splitError}
                  </div>
                )}
                {splitStatus && !splitError && (
                  <div style={{
                    marginTop: "0.75rem",
                    background: "#ecfeff",
                    border: "1px solid #a5f3fc",
                    borderRadius: "6px",
                    color: "#155e75",
                    fontSize: "0.83rem",
                    padding: "0.55rem 0.7rem"
                  }}>
                    {splitStatus}
                  </div>
                )}
              </div>
            </div>
          )}

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
              onAdditionalFileRemove={handleAdditionalFileRemove}
              uploadedFile={selectedSectionUploads.primary}
              additionalFiles={selectedSectionUploads.additional}
              apiOption={selectedApiOption}
              isMobileLayout={isMobileLayout}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CTDCompiler;
