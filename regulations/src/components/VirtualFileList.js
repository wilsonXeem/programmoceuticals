import React, { useMemo, useState, useEffect } from 'react';

const VirtualFileList = ({ 
  files, 
  onFileSelected, 
  activeFilePath, 
  getFileIcon,
  itemHeight = 60,
  containerHeight = 400 
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  
  const visibleRange = useMemo(() => {
    const start = Math.floor(scrollTop / itemHeight);
    const visibleCount = Math.ceil(containerHeight / itemHeight);
    const end = Math.min(start + visibleCount + 2, files.length);
    
    return { start, end };
  }, [scrollTop, itemHeight, containerHeight, files.length]);

  const visibleFiles = useMemo(() => {
    return files.slice(visibleRange.start, visibleRange.end);
  }, [files, visibleRange]);

  const totalHeight = files.length * itemHeight;
  const offsetY = visibleRange.start * itemHeight;

  return (
    <div 
      style={{ 
        height: containerHeight, 
        overflowY: 'auto',
        position: 'relative'
      }}
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleFiles.map((file, index) => (
            <div
              key={file.path}
              onClick={() => onFileSelected(file)}
              style={{
                height: itemHeight,
                padding: '0.5rem',
                cursor: 'pointer',
                borderRadius: '4px',
                fontSize: '0.85rem',
                marginBottom: '0.25rem',
                background: file.path === activeFilePath ? '#e3f2fd' : 'transparent',
                border: '1px solid #eee',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>{getFileIcon(file.name)}</span>
              <div style={{ flex: 1, overflow: 'hidden' }}>
                <div style={{ 
                  fontWeight: '500', 
                  whiteSpace: 'nowrap', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis' 
                }}>
                  {file.name}
                </div>
                <div style={{ 
                  fontSize: '0.7rem', 
                  color: '#666', 
                  whiteSpace: 'nowrap', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis' 
                }}>
                  {file.path}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualFileList;