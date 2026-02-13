import React, { useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDossier } from "../hooks/useDossier";
import EnhancedProgressIndicator from "./EnhancedProgressIndicator";

const Upload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadMode, setUploadMode] = useState("zip"); // "zip", "files", "folder"
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadStartTime, setUploadStartTime] = useState(null);
  const { uploadDossier, addFiles, dossier, clearDossier, loading } = useDossier();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const folderInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files || []);
    if (uploadMode === "zip") {
      const file = files[0];
      if (!file?.name.toLowerCase().endsWith(".zip")) {
        setStatus("❌ Please select a ZIP file");
        return;
      }
      setSelectedFiles([file]);
    } else {
      // Filter for PDFs and common document types
      const validFiles = files.filter(file => {
        if (!file || !file.name || !file.size) return false;
        const ext = file.name.toLowerCase().split('.').pop();
        return ['pdf', 'doc', 'docx'].includes(ext);
      });
      
      if (validFiles.length === 0) {
        setStatus("❌ Please select PDF, DOC, or DOCX files");
        return;
      }
      
      if (uploadMode === "folder" && validFiles.length > 0) {
        setSelectedFiles(validFiles);
      } else {
        setSelectedFiles(prev => [...prev, ...validFiles]);
      }
    }
    setStatus("");
  };

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }, []);

  const readDirectoryEntries = async (directoryReader) => {
    const entries = [];
    let batch = await new Promise((resolve) => directoryReader.readEntries(resolve));
    while (batch.length) {
      entries.push(...batch);
      batch = await new Promise((resolve) => directoryReader.readEntries(resolve));
    }
    return entries;
  };

  const collectFilesFromEntry = async (entry) => {
    if (entry.isFile) {
      const file = await new Promise((resolve) => {
        entry.file((f) => resolve(f), () => resolve(null));
      });
      if (file && entry.fullPath) {
        try {
          Object.defineProperty(file, "relativePath", {
            value: entry.fullPath.replace(/^\//, ""),
            configurable: true
          });
        } catch (error) {
          // Ignore if unable to define property
        }
      }
      return file ? [file] : [];
    }
    if (entry.isDirectory) {
      const reader = entry.createReader();
      const entries = await readDirectoryEntries(reader);
      const nestedFiles = await Promise.all(entries.map(collectFilesFromEntry));
      return nestedFiles.flat();
    }
    return [];
  };

  const collectFilesFromDataTransfer = async (dataTransfer) => {
    const items = Array.from(dataTransfer.items || []);
    const entries = items
      .map((item) => (item.webkitGetAsEntry ? item.webkitGetAsEntry() : null))
      .filter(Boolean);

    if (entries.length) {
      const files = await Promise.all(entries.map(collectFilesFromEntry));
      return files.flat();
    }

    return Array.from(dataTransfer.files || []);
  };

  const handleDrop = useCallback(async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const files = await collectFilesFromDataTransfer(e.dataTransfer);
    
    if (uploadMode === "zip") {
      const zipFile = files.find(f => f.name.toLowerCase().endsWith('.zip'));
      if (zipFile) {
        setSelectedFiles([zipFile]);
      } else {
        setStatus("❌ Please drop a ZIP file");
      }
    } else {
      // For both files and folder mode, process all dropped files
      const validFiles = files.filter(file => {
        if (!file || !file.name) return false;
        const ext = file.name.toLowerCase().split('.').pop();
        return ['pdf', 'doc', 'docx'].includes(ext);
      });
      
      if (validFiles.length > 0) {
        setSelectedFiles(prev => [...prev, ...validFiles]);
        setStatus("");
      } else {
        setStatus("❌ No valid PDF, DOC, or DOCX files found");
      }
    }
  }, [uploadMode]);

  const handleProgress = useCallback(
    (progressData) => {
      if (typeof progressData === "number") {
        setProgress({
          type: "basic",
          value: progressData,
          startTime: uploadStartTime,
        });
        setStatus(`Processing... ${Math.round(progressData)}%`);
      } else if (progressData.type === "tree_ready") {
        setStatus("📁 File structure ready, processing files...");
        setProgress({
          type: "basic",
          value: 25,
          startTime: uploadStartTime,
        });
      } else if (progressData.type === "batch_progress") {
        setProgress({
          type: "basic",
          value: progressData.progress,
          processed: progressData.processed,
          total: progressData.total,
          filesReady: progressData.filesReady,
          startTime: uploadStartTime,
          currentItem: progressData.currentFile,
        });
        setStatus(
          `Processing files... ${progressData.processed}/${
            progressData.total
          } (${Math.round(progressData.progress)}%)`
        );
      } else if (progressData.type === "file_progress") {
        const fileName = progressData.file.split("/").pop();
        setProgress({
          type: "basic",
          value: progressData.progress,
          startTime: uploadStartTime,
          currentItem: fileName,
        });
        setStatus(
          `Processing large file: ${fileName}... ${Math.round(
            progressData.progress
          )}%`
        );
      }
    },
    [uploadStartTime]
  );

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setStatus("❌ Please select files first");
      return;
    }

    const startTime = Date.now();
    setUploadStartTime(startTime);
    setStatus(uploadMode === "zip" ? "🔄 Processing ZIP file..." : "🔄 Processing files...");
    setProgress({ type: "basic", value: 0, startTime });

    let result;
    if (uploadMode === "zip") {
      result = await uploadDossier(selectedFiles[0], handleProgress);
    } else if (uploadMode === "folder") {
      result = await uploadDossier(selectedFiles, handleProgress);
    } else {
      // For individual files, use addFiles method
      result = await addFiles(selectedFiles, handleProgress);
    }

    if (result.success) {
      setProgress(null);
      setStatus("✅ Files uploaded successfully!");
      if (uploadMode !== "zip") {
        // Don't clear files for incremental uploads
        setSelectedFiles([]);
      }
      setTimeout(() => navigate("/screening"), 1500);
    } else {
      setStatus(`❌ Error: ${result.error || "Upload failed"}`);
      setProgress(null);
      setUploadStartTime(null);
    }
  };

  const removeFile = (index) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearAll = () => {
    clearDossier();
    setSelectedFiles([]);
    setStatus("All data cleared");
    setProgress(null);
  };

  const getModeDescription = () => {
    switch(uploadMode) {
      case "zip": return "Upload complete dossier as ZIP file";
      case "files": return "Upload individual PDF/DOC files from external sources";
      case "folder": return "Upload folder containing downloaded files";
      default: return "";
    }
  };

  const getDropZoneText = () => {
    if (uploadMode === "zip") {
      return selectedFiles.length > 0 ? selectedFiles[0].name : "Drop your ZIP file here";
    } else {
      return selectedFiles.length > 0 
        ? `${selectedFiles.length} files selected` 
        : "Drop PDF/DOC files here";
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#f8f9fa",
        padding: "1rem 10px 10px 10px",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "700px", width: "100%" }}>
        {/* Professional Header */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            borderTop: "4px solid #193441",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#193441",
              margin: "0 0 8px 0",
              textAlign: "center",
            }}
          >
            Dossier Upload System
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "#666",
              margin: 0,
              textAlign: "center",
            }}
          >
            Upload your pharmaceutical dossier ZIP file for regulatory screening
            and review
          </p>
        </div>

        {/* Upload Mode Selection */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ margin: "0 0 15px 0", fontSize: "16px", color: "#193441" }}>Upload Mode</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
            <button
              onClick={() => { setUploadMode("zip"); setSelectedFiles([]); }}
              style={{
                padding: "12px",
                border: `2px solid ${uploadMode === "zip" ? "#193441" : "#e9ecef"}`,
                borderRadius: "6px",
                background: uploadMode === "zip" ? "#f8f9fa" : "white",
                cursor: "pointer",
                textAlign: "left"
              }}
            >
              <div style={{ fontWeight: "600", color: "#193441", marginBottom: "4px" }}>🗄 ZIP Dossier</div>
              <div style={{ fontSize: "12px", color: "#666" }}>Complete dossier package</div>
            </button>
            
            <button
              onClick={() => { setUploadMode("files"); setSelectedFiles([]); }}
              style={{
                padding: "12px",
                border: `2px solid ${uploadMode === "files" ? "#193441" : "#e9ecef"}`,
                borderRadius: "6px",
                background: uploadMode === "files" ? "#f8f9fa" : "white",
                cursor: "pointer",
                textAlign: "left"
              }}
            >
              <div style={{ fontWeight: "600", color: "#193441", marginBottom: "4px" }}>📄 Individual Files</div>
              <div style={{ fontSize: "12px", color: "#666" }}>PDF/DOC files from external sources</div>
            </button>
            
            <button
              onClick={() => { setUploadMode("folder"); setSelectedFiles([]); }}
              style={{
                padding: "12px",
                border: `2px solid ${uploadMode === "folder" ? "#193441" : "#e9ecef"}`,
                borderRadius: "6px",
                background: uploadMode === "folder" ? "#f8f9fa" : "white",
                cursor: "pointer",
                textAlign: "left"
              }}
            >
              <div style={{ fontWeight: "600", color: "#193441", marginBottom: "4px" }}>📁 Folder Upload</div>
              <div style={{ fontSize: "12px", color: "#666" }}>Folder with downloaded files</div>
            </button>
          </div>
          <p style={{ margin: "10px 0 0 0", fontSize: "13px", color: "#666", fontStyle: "italic" }}>
            {getModeDescription()}
          </p>
        </div>
        {/* Upload Section */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          {/* Drag and Drop Zone */}
          <div
            style={{
              border: `2px dashed ${isDragOver ? "#193441" : "#e9ecef"}`,
              borderRadius: "8px",
              padding: "30px 20px",
              textAlign: "center",
              marginBottom: "15px",
              backgroundColor: isDragOver ? "#f0f9ff" : "#fafbfc",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => {
              if (uploadMode === "zip") {
                folderInputRef.current?.click();
              } else if (uploadMode === "files") {
                fileInputRef.current?.click();
              } else {
                folderInputRef.current?.click();
              }
            }}
          >
            <div
              style={{
                fontSize: "36px",
                marginBottom: "12px",
                color: isDragOver ? "#193441" : "#6c757d",
              }}
            >
              {isDragOver ? "📂" : uploadMode === "zip" ? "📁" : "📄"}
            </div>
            <h3
              style={{
                margin: "0 0 6px 0",
                fontSize: "16px",
                fontWeight: "600",
                color: "#193441",
              }}
            >
              {getDropZoneText()}
            </h3>
            <p
              style={{
                margin: "0 0 12px 0",
                fontSize: "14px",
                color: "#6c757d",
              }}
            >
              {uploadMode === "zip" && selectedFiles.length > 0 && selectedFiles[0].size
                ? `File size: ${(selectedFiles[0].size / (1024 * 1024)).toFixed(1)} MB`
                : "or click to browse and select files"}
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                backgroundColor: "#e9ecef",
                borderRadius: "16px",
                fontSize: "12px",
                color: "#495057",
              }}
            >
              <span>📋</span>
              <span>
                {uploadMode === "zip" 
                  ? "ZIP files only • Maximum 2GB"
                  : "PDF, DOC, DOCX files • Multiple selection allowed"}
              </span>
            </div>
            
            {/* File inputs */}
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              multiple={uploadMode !== "zip"}
              onChange={handleFileSelect}
              disabled={loading}
              style={{ display: "none" }}
            />
            <input
              ref={folderInputRef}
              type="file"
              accept={uploadMode === "zip" ? ".zip" : ".pdf,.doc,.docx"}
              webkitdirectory={uploadMode === "folder"}
              multiple={uploadMode === "folder"}
              onChange={handleFileSelect}
              disabled={loading}
              style={{ display: "none" }}
            />
          </div>

          {/* Selected Files List */}
          {selectedFiles.length > 0 && uploadMode !== "zip" && (
            <div style={{ marginBottom: "15px" }}>
              <h4 style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#193441" }}>Selected Files ({selectedFiles.length})</h4>
              <div style={{ maxHeight: "150px", overflowY: "auto", border: "1px solid #e9ecef", borderRadius: "4px" }}>
                {selectedFiles.map((file, index) => (
                  <div key={index} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 12px",
                    borderBottom: index < selectedFiles.length - 1 ? "1px solid #f8f9fa" : "none"
                  }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: "13px", fontWeight: "500", color: "#193441", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {file.name}
                      </div>
                      <div style={{ fontSize: "11px", color: "#666" }}>
                        {file.size ? (file.size / 1024).toFixed(1) + ' KB' : 'Unknown size'}
                      </div>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#dc3545",
                        cursor: "pointer",
                        padding: "4px",
                        fontSize: "16px"
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Current Dossier Status */}
          {dossier && (
            <div style={{
              padding: "10px",
              background: "#e8f5e8",
              border: "1px solid #c3e6cb",
              borderRadius: "4px",
              marginBottom: "15px",
              fontSize: "13px"
            }}>
              <strong>Current Dossier:</strong> {dossier.name} 
              {uploadMode !== "zip" && <span style={{ color: "#666" }}> (files will be added to this dossier)</span>}
            </div>
          )}

          {/* Action Buttons */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            <button
              onClick={handleUpload}
              disabled={selectedFiles.length === 0 || loading}
              style={{
                padding: "10px 20px",
                fontSize: "14px",
                fontWeight: "600",
                backgroundColor:
                  selectedFiles.length === 0 || loading ? "#e9ecef" : "#193441",
                color: selectedFiles.length === 0 || loading ? "#6c757d" : "white",
                border: "none",
                borderRadius: "6px",
                cursor: selectedFiles.length === 0 || loading ? "not-allowed" : "pointer",
                transition: "all 0.2s",
              }}
            >
              {loading ? "Processing..." : 
               uploadMode === "zip" ? "Upload Dossier" :
               dossier ? "Add Files" : "Upload Files"}
            </button>

            <button
              onClick={handleClearAll}
              disabled={loading}
              style={{
                padding: "10px 20px",
                fontSize: "14px",
                fontWeight: "600",
                backgroundColor: loading ? "#e9ecef" : "#dc3545",
                color: loading ? "#6c757d" : "white",
                border: "none",
                borderRadius: "6px",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.2s",
              }}
            >
              Clear All Data
            </button>
          </div>
        </div>

        {/* Status and Progress */}
        {(status || progress) && (
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "15px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              borderLeft: `6px solid ${
                status.includes("✅")
                  ? "#28a745"
                  : status.includes("❌")
                  ? "#dc3545"
                  : "#193441"
              }`,
            }}
          >
            {status && (
              <div
                style={{
                  fontSize: "14px",
                  color: status.includes("✅")
                    ? "#28a745"
                    : status.includes("❌")
                    ? "#dc3545"
                    : "#193441",
                  fontWeight: "500",
                  marginBottom: progress ? "12px" : "0",
                }}
              >
                {status}
              </div>
            )}

            {progress && (
              <EnhancedProgressIndicator
                progress={progress.value || 0}
                type={progress.type}
                startTime={progress.startTime}
                totalItems={progress.total}
                processedItems={progress.processed}
                currentItem={progress.currentItem}
                showTimeEstimate={true}
                showThroughput={progress.type === "batch"}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
