import React, { useMemo, useCallback } from 'react';
import { FixedSizeList as List } from 'react-window';
import LazyFileViewer from './LazyFileViewer';

const FileItem = ({ index, style, data }) => {
  const { files, activeFilePath, onFileSelected, getFileIcon, getFileType, loadFileFn } = data;
  const file = files[index];

  return (
    <div style={style}>
      <LazyFileViewer
        file={file}
        index={index}
        loadFileFn={loadFileFn}
        isActive={file.path === activeFilePath}
        getFileIcon={getFileIcon}
        getFileType={getFileType}
        onFileClick={onFileSelected}
      />
    </div>
  );
};

const VirtualizedFileList = ({ files, activeFilePath, onFileSelected, getFileIcon, getFileType, loadFileFn, height = 400 }) => {
  const itemData = useMemo(() => ({
    files,
    activeFilePath,
    onFileSelected,
    getFileIcon,
    getFileType,
    loadFileFn
  }), [files, activeFilePath, onFileSelected, getFileIcon, getFileType, loadFileFn]);

  const itemSize = 70; // Height of each file item

  if (files.length === 0) {
    return (
      <div style={{ padding: "1rem", textAlign: "center", color: "#666" }}>
        No files found
      </div>
    );
  }

  return (
    <List
      height={height}
      itemCount={files.length}
      itemSize={itemSize}
      itemData={itemData}
      overscanCount={3}
    >
      {FileItem}
    </List>
  );
};

export default VirtualizedFileList;