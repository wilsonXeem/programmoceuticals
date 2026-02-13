import React, { useState, useCallback, useRef } from 'react';

const EnhancedDragDrop = ({ 
  onFilesSelected, 
  acceptedTypes = ['.pdf', '.doc', '.docx', '.zip'], 
  maxFileSize = 50 * 1024 * 1024,
  multiple = false,
  children 
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [dragCounter, setDragCounter] = useState(0);
  const fileInputRef = useRef(null);

  const validateFile = useCallback((file) => {
    const extension = '.' + file.name.split('.').pop().toLowerCase();
    
    if (!acceptedTypes.includes(extension)) {
      return { valid: false, error: `File type ${extension} not supported` };
    }
    
    if (file.size > maxFileSize) {
      return { valid: false, error: `File size exceeds ${Math.round(maxFileSize / (1024 * 1024))}MB limit` };
    }
    
    return { valid: true };
  }, [acceptedTypes, maxFileSize]);

  const processFiles = useCallback((files) => {
    const fileArray = Array.from(files);
    const validFiles = [];
    const errors = [];

    fileArray.forEach(file => {
      const validation = validateFile(file);
      if (validation.valid) {
        validFiles.push(file);
      } else {
        errors.push(`${file.name}: ${validation.error}`);
      }
    });

    if (validFiles.length > 0) {
      onFilesSelected(multiple ? validFiles : validFiles[0]);
    }

    if (errors.length > 0) {
      console.warn('File validation errors:', errors);
    }
  }, [validateFile, onFilesSelected, multiple]);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(prev => prev + 1);
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(prev => {
      const newCounter = prev - 1;
      if (newCounter === 0) {
        setIsDragOver(false);
      }
      return newCounter;
    });
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    setDragCounter(0);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processFiles(files);
    }
  }, [processFiles]);

  const handleFileSelect = useCallback((e) => {
    const files = e.target.files;
    if (files.length > 0) {
      processFiles(files);
    }
  }, [processFiles]);

  const openFileDialog = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={openFileDialog}
      style={{
        border: `2px dashed ${isDragOver ? '#193441' : '#e9ecef'}`,
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: isDragOver ? '#f0f9ff' : '#fafbfc',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative'
      }}
    >
      {children || (
        <div>
          <div style={{ fontSize: '36px', marginBottom: '12px' }}>
            {isDragOver ? '📂' : '📁'}
          </div>
          <p style={{ margin: 0, color: '#6c757d' }}>
            Drop files here or click to browse
          </p>
          <small style={{ color: '#999' }}>
            Accepted: {acceptedTypes.join(', ')} • Max: {Math.round(maxFileSize / (1024 * 1024))}MB
          </small>
        </div>
      )}
      
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedTypes.join(',')}
        multiple={multiple}
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default EnhancedDragDrop;