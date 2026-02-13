import React, { useState, useRef, useCallback } from 'react';

const CTDSectionUpload = ({ 
  selectedSection, 
  ctdStructure, 
  onFilesUploaded, 
  getFileBlob,
  apiOption 
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [activeTab, setActiveTab] = useState('upload');
  const [documentContent, setDocumentContent] = useState('');
  const [documentTitle, setDocumentTitle] = useState('');
  const fileInputRef = useRef(null);

  const getSectionInfo = useCallback(() => {
    console.log('getSectionInfo called with selectedSection:', selectedSection);
    if (!selectedSection || !ctdStructure) return null;
    
    const parts = selectedSection.split('.');
    const moduleId = parts[0]; // e.g., "Module_1"
    
    // Get the module from the current structure
    const currentModule = ctdStructure[moduleId];
    
    if (!currentModule) {
      console.log('Module not found:', moduleId);
      return null;
    }
    
    // For sections and subsections, navigate through the structure
    if (parts.length >= 2) {
      const sectionPath = parts.slice(1).join('.'); // e.g., "1.2.1" from "Module_1.1.2.1"
      
      // First, try to find exact match in sections
      if (currentModule.sections?.[sectionPath]) {
        return {
          info: currentModule.sections[sectionPath],
          current: currentModule.sections[sectionPath],
          path: selectedSection
        };
      }
      
      // If not found, try to find the parent section and navigate to subsection
      for (let i = 2; i <= parts.length; i++) {
        const sectionId = parts.slice(1, i).join('.');
        const section = currentModule.sections?.[sectionId];
        
        if (section) {
          // If we have more parts, look for subsection
          if (i < parts.length && section.subsections) {
            const subsectionId = parts.slice(i).join('.');
            const fullSubsectionId = parts.slice(1).join('.'); // Full path from module
            
            // Try to find subsection with full path
            if (section.subsections[fullSubsectionId]) {
              return {
                info: section.subsections[fullSubsectionId],
                current: section.subsections[fullSubsectionId],
                path: selectedSection
              };
            }
            
            // Try to find subsection with relative path
            if (section.subsections[subsectionId]) {
              return {
                info: section.subsections[subsectionId],
                current: section.subsections[subsectionId],
                path: selectedSection
              };
            }
          } else {
            // Return the section itself
            return {
              info: section,
              current: section,
              path: selectedSection
            };
          }
        }
      }
    }
    
    console.log('No section found for path:', selectedSection);
    return null;
  }, [selectedSection, ctdStructure]);

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

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files);
    }
  }, []);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      handleFileUpload(files);
    }
  };

  const handleFileUpload = async (files) => {
    const sectionData = getSectionInfo();
    if (!sectionData?.info) return;

    setUploadProgress({ current: 0, total: files.length });

    try {
      const uploadedFiles = [];
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setUploadProgress({ current: i + 1, total: files.length, fileName: file.name });
        
        const fileObj = {
          name: file.name,
          size: file.size,
          type: file.type,
          path: `${selectedSection}/${file.name}`,
          lastModified: file.lastModified,
          sectionId: selectedSection,
          blob: file
        };
        
        uploadedFiles.push(fileObj);
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      onFilesUploaded(selectedSection, uploadedFiles);
      setUploadProgress(null);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed: ' + error.message);
      setUploadProgress(null);
    }
  };

  const handleRemoveFile = (fileIndex) => {
    const sectionData = getSectionInfo();
    if (!sectionData?.current?.files) return;
    
    const updatedFiles = sectionData.current.files.filter((_, index) => index !== fileIndex);
    onFilesUploaded(selectedSection, updatedFiles);
  };

  const handleSaveDocument = () => {
    if (!documentTitle.trim() || !documentContent.trim()) return;
    
    const blob = new Blob([documentContent], { type: 'text/plain' });
    const fileName = `${documentTitle.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    
    const fileObj = {
      name: fileName,
      size: blob.size,
      type: 'text/plain',
      path: `${selectedSection}/${fileName}`,
      lastModified: Date.now(),
      sectionId: selectedSection,
      blob: blob
    };
    
    const sectionData = getSectionInfo();
    const currentFiles = sectionData?.current?.files || [];
    const updatedFiles = [...currentFiles, fileObj];
    
    onFilesUploaded(selectedSection, updatedFiles);
    
    setDocumentContent('');
    setDocumentTitle('');
    setActiveTab('upload');
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    const icons = {
      pdf: '📄',
      doc: '📝',
      docx: '📝',
      xlsx: '📊',
      xls: '📊',
      jpg: '🖼️',
      jpeg: '🖼️',
      png: '🖼️',
      zip: '📦'
    };
    return icons[extension] || '📎';
  };

  const sectionData = getSectionInfo();
  
  if (!selectedSection) {
    return (
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        color: '#666',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '2px dashed #dee2e6'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📁</div>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#495057' }}>Select a Section</h3>
        <p style={{ margin: 0, fontSize: '14px' }}>
          Choose a CTD section from the tree to upload files or create documents
        </p>
      </div>
    );
  }
  
  if (!sectionData) {
    return (
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        color: '#dc3545',
        backgroundColor: '#f8d7da',
        borderRadius: '8px',
        border: '2px solid #f5c6cb'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#721c24' }}>Section Not Found</h3>
        <p style={{ margin: 0, fontSize: '14px' }}>
          Selected section: {selectedSection}
        </p>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '12px', opacity: 0.8 }}>
          This section may not be available in the current CTD structure.
        </p>
      </div>
    );
  }

  const { info, current } = sectionData;
  const currentFiles = current?.files || [];
  const isRequired = info?.required || false;
  const hasFiles = currentFiles.length > 0;
  const sectionTitle = info?.title || selectedSection;

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #e9ecef',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        padding: '1rem',
        backgroundColor: isRequired ? (hasFiles ? '#d4edda' : '#f8d7da') : '#e2e3e5',
        borderBottom: '1px solid #e9ecef'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '16px' }}>
            {isRequired ? (hasFiles ? '✅' : '🔴') : '⚪'}
          </span>
          <h4 style={{ 
            margin: 0, 
            fontSize: '16px', 
            fontWeight: '600',
            color: '#2c3e50'
          }}>
            {selectedSection} - {sectionTitle}
          </h4>
        </div>
        
        <div style={{ fontSize: '12px', color: '#666' }}>
          {isRequired ? 'Required Section' : 'Optional Section'}
          {info?.requirements && (
            <div style={{ marginTop: '0.25rem', fontSize: '11px', fontStyle: 'italic' }}>
              {info.requirements}
            </div>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid #e9ecef'
      }}>
        <button
          onClick={() => setActiveTab('upload')}
          style={{
            flex: 1,
            padding: '0.75rem 1rem',
            backgroundColor: activeTab === 'upload' ? '#007bff' : 'transparent',
            color: activeTab === 'upload' ? 'white' : '#495057',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          📁 Upload Files
        </button>
        <button
          onClick={() => setActiveTab('editor')}
          style={{
            flex: 1,
            padding: '0.75rem 1rem',
            backgroundColor: activeTab === 'editor' ? '#007bff' : 'transparent',
            color: activeTab === 'editor' ? 'white' : '#495057',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          ✏️ Document Builder
        </button>
      </div>

      <div style={{ padding: '1rem' }}>
        {activeTab === 'upload' ? (
          <div>
            {/* Upload Area */}
            <div
              style={{
                border: `2px dashed ${isDragOver ? '#007bff' : '#dee2e6'}`,
                borderRadius: '6px',
                padding: '2rem 1rem',
                textAlign: 'center',
                backgroundColor: isDragOver ? '#f8f9ff' : '#fafbfc',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                {isDragOver ? '📂' : '📁'}
              </div>
              <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '0.25rem' }}>
                Drop files here or click to browse
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>
                All file types accepted
              </div>
              
              <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={handleFileSelect}
                style={{ display: 'none' }}
              />
            </div>

            {/* Upload Progress */}
            {uploadProgress && (
              <div style={{
                padding: '0.75rem',
                backgroundColor: '#e3f2fd',
                border: '1px solid #2196f3',
                borderRadius: '4px',
                marginBottom: '1rem'
              }}>
                <div style={{ fontSize: '12px', marginBottom: '0.5rem' }}>
                  Uploading: {uploadProgress.fileName} ({uploadProgress.current}/{uploadProgress.total})
                </div>
                <div style={{
                  width: '100%',
                  height: '4px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${(uploadProgress.current / uploadProgress.total) * 100}%`,
                    height: '100%',
                    backgroundColor: '#2196f3',
                    transition: 'width 0.3s ease'
                  }} />
                </div>
              </div>
            )}

            {/* Current Files */}
            {currentFiles.length > 0 && (
              <div>
                <h5 style={{ 
                  fontSize: '14px', 
                  fontWeight: '600', 
                  margin: '0 0 0.75rem 0',
                  color: '#2c3e50'
                }}>
                  Uploaded Files ({currentFiles.length})
                </h5>
                
                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                  {currentFiles.map((file, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.75rem',
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #e9ecef',
                        borderRadius: '4px',
                        marginBottom: '0.5rem'
                      }}
                    >
                      <span style={{ fontSize: '16px', marginRight: '0.75rem' }}>
                        {getFileIcon(file.name)}
                      </span>
                      
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ 
                          fontSize: '13px', 
                          fontWeight: '500',
                          color: '#2c3e50',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>
                          {file.name}
                        </div>
                        <div style={{ fontSize: '11px', color: '#666' }}>
                          {formatFileSize(file.size)}
                          {file.lastModified && (
                            <span> • {new Date(file.lastModified).toLocaleDateString()}</span>
                          )}
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleRemoveFile(index)}
                        style={{
                          padding: '0.25rem 0.5rem',
                          fontSize: '11px',
                          backgroundColor: '#dc3545',
                          color: 'white',
                          border: 'none',
                          borderRadius: '3px',
                          cursor: 'pointer'
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            {/* Document Builder */}
            <input
              type="text"
              value={documentTitle}
              onChange={(e) => setDocumentTitle(e.target.value)}
              placeholder={`Enter title for ${sectionTitle || 'document'}`}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #e9ecef',
                borderRadius: '4px',
                fontSize: '14px',
                marginBottom: '1rem'
              }}
            />
            
            <textarea
              value={documentContent}
              onChange={(e) => setDocumentContent(e.target.value)}
              placeholder={`Enter content for ${sectionTitle || 'this section'}...`}
              style={{
                width: '100%',
                minHeight: '300px',
                padding: '0.75rem',
                border: '1px solid #e9ecef',
                borderRadius: '4px',
                fontSize: '14px',
                fontFamily: 'monospace',
                resize: 'vertical',
                marginBottom: '1rem'
              }}
            />
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={handleSaveDocument}
                disabled={!documentTitle.trim() || !documentContent.trim()}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: (!documentTitle.trim() || !documentContent.trim()) ? '#e9ecef' : '#28a745',
                  color: (!documentTitle.trim() || !documentContent.trim()) ? '#6c757d' : 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '14px',
                  cursor: (!documentTitle.trim() || !documentContent.trim()) ? 'not-allowed' : 'pointer'
                }}
              >
                💾 Save Document
              </button>
              
              <button
                onClick={() => {
                  setDocumentContent('');
                  setDocumentTitle('');
                }}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                🗑️ Clear
              </button>
            </div>
          </div>
        )}

        {/* Section Status */}
        <div style={{
          marginTop: '1rem',
          padding: '0.75rem',
          backgroundColor: isRequired ? (hasFiles ? '#d4edda' : '#f8d7da') : '#e2e3e5',
          border: `1px solid ${isRequired ? (hasFiles ? '#c3e6cb' : '#f5c6cb') : '#d6d8db'}`,
          borderRadius: '4px',
          fontSize: '12px',
          textAlign: 'center'
        }}>
          <strong>
            {isRequired 
              ? (hasFiles ? '✅ Section Complete' : '❌ Required Section - Files Needed')
              : (hasFiles ? '✅ Optional Section - Files Added' : '⚪ Optional Section - No Files Required')
            }
          </strong>
        </div>
      </div>
    </div>
  );
};

export default CTDSectionUpload;