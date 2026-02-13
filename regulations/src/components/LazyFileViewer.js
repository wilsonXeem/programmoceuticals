import React, { memo } from 'react';
import { useLazyLoading } from '../hooks/useLazyLoading';

const LazyFileViewer = memo(({ 
  file, 
  index, 
  loadFileFn, 
  isActive, 
  getFileIcon, 
  getFileType,
  onFileClick 
}) => {
  const { loadedItems, loadingItems, setItemRef } = useLazyLoading(
    [file], 
    loadFileFn,
    { preloadCount: 2 }
  );

  const isLoaded = loadedItems.has(file.path);
  const isLoading = loadingItems.has(file.path);

  return (
    <div
      ref={(el) => setItemRef(el, file, index)}
      onClick={() => onFileClick(file)}
      style={{
        padding: '0.75rem',
        cursor: 'pointer',
        backgroundColor: isActive ? '#e3f2fd' : 'transparent',
        borderLeft: isActive ? '3px solid #2196f3' : '3px solid transparent',
        borderRadius: '4px',
        margin: '2px 0',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}
    >
      <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>
        {getFileIcon(file.name)}
      </span>
      
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: '0.9rem',
          fontWeight: isActive ? '600' : '400',
          color: isActive ? '#1976d2' : '#333',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {file.name}
        </div>
        
        <div style={{
          fontSize: '0.75rem',
          color: '#666',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {getFileType(file.name)}
        </div>
      </div>

      {isLoading && (
        <div style={{
          width: '16px',
          height: '16px',
          border: '2px solid #f3f3f3',
          borderTop: '2px solid #2196f3',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          flexShrink: 0
        }} />
      )}

      {isLoaded && (
        <div style={{
          width: '8px',
          height: '8px',
          backgroundColor: '#4caf50',
          borderRadius: '50%',
          flexShrink: 0
        }} />
      )}
    </div>
  );
});

LazyFileViewer.displayName = 'LazyFileViewer';

export default LazyFileViewer;