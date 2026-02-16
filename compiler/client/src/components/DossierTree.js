import React, { useState, useMemo } from 'react';
import SearchableTree from './SearchableTree';
import RegulatoryTooltip from './RegulatoryTooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen, faFile, faEdit, faTrash, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { mapRequirementsToNode } from '../utils/requirementsMapper';

const countSubfolders = (node) => {
  if (!node.children) return 0;
  return node.children.filter(child => child.type === 'folder').length;
};

const formatFileSize = (bytes) => {
  if (!bytes) return '';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

const DossierTree = ({ node, activeFilePath, onFileSelected, level = 0, enableSearch = false, onNodeUpdate, onNodeDelete, isEditable = false, apiOption = null, uploadedFiles = new Map(), consolidatedFolderPaths = new Set() }) => {
  
  // If search is enabled, use SearchableTree instead
  if (enableSearch && level === 0) {
    return (
      <SearchableTree
        node={node}
        activeFilePath={activeFilePath}
        onFileSelected={onFileSelected}
      />
    );
  }
  const [isExpanded, setIsExpanded] = useState(level < 2);
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(node.name);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  // Get regulatory requirements for this node
  const requirement = mapRequirementsToNode(node.path, apiOption, node.requirementKey);

  // Remove duplicates and sort children
  const uniqueChildren = useMemo(() => {
    if (!node.children) return [];
    
    const seen = new Set();
    return node.children
      .filter(child => {
        // Hide .DS_Store files
        if (child.name === '.DS_Store') return false;
        
        const key = `${child.type}-${child.path}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .sort((a, b) => {
        // Extract numerical prefix for proper sorting
        const getNumericPrefix = (name) => {
          const match = name.match(/^(\d+(?:\.\d+)*)/); 
          return match ? match[1] : name;
        };
        
        const aPrefix = getNumericPrefix(a.name);
        const bPrefix = getNumericPrefix(b.name);
        
        // Compare numerically if both have numeric prefixes
        if (aPrefix !== a.name && bPrefix !== b.name) {
          const aParts = aPrefix.split('.').map(Number);
          const bParts = bPrefix.split('.').map(Number);
          
          for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
            const aPart = aParts[i] || 0;
            const bPart = bParts[i] || 0;
            if (aPart !== bPart) return aPart - bPart;
          }
        }
        
        // Fallback to alphabetical sorting
        return a.name.localeCompare(b.name);
      });
  }, [node.children])

  const handleToggle = () => {
    if (node.type === 'folder') {
      setIsExpanded(!isExpanded);
      return;
    }
    setIsExpanded(!isExpanded);
  };

  const handleRename = () => {
    if (editName.trim() && editName !== node.name) {
      onNodeUpdate?.(node.path, { ...node, name: editName.trim() });
    }
    setIsEditing(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    onNodeDelete?.(node.path);
    setShowDeleteModal(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleRename();
    if (e.key === 'Escape') {
      setEditName(node.name);
      setIsEditing(false);
    }
  };

  const getIcon = () => {
    if (node.type === 'folder') {
      return <FontAwesomeIcon icon={isExpanded ? faFolderOpen : faFolder} />;
    }
    return <FontAwesomeIcon icon={isExpanded ? faFolderOpen : faFolder} />;
  };

  const isActive = node.type === 'file' && node.path === activeFilePath;
  const isLeafFolder = node.type === 'folder' && (!node.children || node.children.length === 0);
  const isConsolidatedFolder = node.type === 'folder' && (node.children && node.children.length > 0) && consolidatedFolderPaths.has(node.path);

  return (
    <div>
      <div
        className={`tree-item ${isActive ? 'active' : ''} ${node.type === 'folder' ? 'tree-folder' : 'tree-file'}`}
        onClick={handleToggle}
        style={{
          padding: '4px 4px',
          paddingLeft: `${4 + level * 12}px`,
          cursor: 'pointer',
          borderRadius: '2px',
          fontSize: '0.7rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '3px',
          backgroundColor: isActive ? '#e3f2fd' : 'transparent',
          borderLeft: level > 0 ? '1px solid #eee' : 'none',
          minHeight: '20px'
        }}
      >
        {/* Expansion indicator for folders */}
        {(node.type === 'folder' && (node.children && node.children.length > 0 || isLeafFolder)) || node.type === 'file' ? (
          <FontAwesomeIcon 
            icon={faChevronRight}
            style={{ 
              minWidth: '8px', 
              fontSize: '0.6rem', 
              color: '#666',
              transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease'
            }}
          />
        ) : (
          <span style={{ minWidth: '8px' }}></span>
        )}
        
        <span style={{ minWidth: '12px', fontSize: '0.7rem', marginTop: '1px' }}>{getIcon()}</span>
        {isEditing ? (
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onBlur={handleRename}
            onKeyDown={handleKeyPress}
            autoFocus
            style={{
              flex: 1,
              fontSize: '0.7rem',
              border: '1px solid #007bff',
              borderRadius: '2px',
              padding: '1px 3px'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <span style={{ 
            fontWeight: isActive ? '500' : 'normal',
            flex: 1,
            wordBreak: 'break-word',
            lineHeight: '1.2'
          }}>
            {node.name}
          </span>
        )}
        {node.type === 'file' && node.size && (
          <span style={{ 
            fontSize: '0.6rem', 
            color: '#666', 
            marginLeft: '2px',
            minWidth: 'fit-content',
            background: '#f0f0f0',
            padding: '0px 2px',
            borderRadius: '1px'
          }}>
            {formatFileSize(node.size)}
          </span>
        )}
        {uploadedFiles.has(node.path) && (
          <span style={{
            background: '#28a745',
            color: 'white',
            borderRadius: '50%',
            width: '16px',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            marginLeft: '4px'
          }}>
            ✓
          </span>
        )}
        {requirement && (
          <RegulatoryTooltip requirement={requirement} position="right">
            <span style={{ marginLeft: '4px' }}></span>
          </RegulatoryTooltip>
        )}
        {isEditable && !isEditing && (
          <div style={{ display: 'flex', gap: '2px', marginLeft: 'auto' }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.6rem',
                padding: '1px 3px',
                borderRadius: '2px',
                color: '#666'
              }}
              title="Rename"
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              onClick={handleDelete}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.6rem',
                padding: '1px 3px',
                borderRadius: '2px',
                color: '#d32f2f'
              }}
              title="Delete"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        )}
      </div>
      
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            maxWidth: '400px',
            width: '90%'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#d32f2f' }}>Confirm Delete</h3>
            <p style={{ margin: '0 0 20px 0', color: '#666' }}>
              Are you sure you want to delete <strong>"{node.name}"</strong>?
              {node.type === 'folder' && ' This will also delete all items inside it.'}
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowDeleteModal(false)}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  background: 'white',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                style={{
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '4px',
                  background: '#d32f2f',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      
      {node.type === 'folder' && isExpanded && (
        <div>
          {uniqueChildren.length > 0 && uniqueChildren.map((child) => (
            <DossierTree
              key={`${child.type}-${child.path}`}
              node={child}
              activeFilePath={activeFilePath}
              onFileSelected={onFileSelected}
              level={level + 1}
              onNodeUpdate={onNodeUpdate}
              onNodeDelete={onNodeDelete}
              isEditable={isEditable}
              apiOption={apiOption}
              uploadedFiles={uploadedFiles}
              consolidatedFolderPaths={consolidatedFolderPaths}
            />
          ))}
          {isConsolidatedFolder && (
            <div
              className={`tree-item ${activeFilePath === node.path ? 'active' : ''} tree-file`}
              onClick={() => onFileSelected(node)}
              style={{
                padding: '4px 4px',
                paddingLeft: `${4 + (level + 1) * 12}px`,
                cursor: 'pointer',
                borderRadius: '2px',
                fontSize: '0.7rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '3px',
                backgroundColor: activeFilePath === node.path ? '#e3f2fd' : '#f8fafc',
                borderLeft: level + 1 > 0 ? '1px solid #eee' : 'none',
                minHeight: '20px'
              }}
            >
              <span style={{ minWidth: '8px' }}></span>
              <span style={{ minWidth: '12px', fontSize: '0.7rem', marginTop: '1px' }}>
                <FontAwesomeIcon icon={faFile} />
              </span>
              <span style={{ flex: 1, wordBreak: 'break-word', lineHeight: '1.2' }}>
                Single PDF Upload Option
              </span>
              {uploadedFiles.has(node.path) && (
                <span style={{
                  background: '#28a745',
                  color: 'white',
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  marginLeft: '4px'
                }}>
                  ✓
                </span>
              )}
            </div>
          )}
          {isLeafFolder && (
            <div
              className={`tree-item ${activeFilePath === node.path ? 'active' : ''} tree-file`}
              onClick={() => onFileSelected(node)}
              style={{
                padding: '4px 4px',
                paddingLeft: `${4 + (level + 1) * 12}px`,
                cursor: 'pointer',
                borderRadius: '2px',
                fontSize: '0.7rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '3px',
                backgroundColor: activeFilePath === node.path ? '#e3f2fd' : 'transparent',
                borderLeft: level + 1 > 0 ? '1px solid #eee' : 'none',
                minHeight: '20px'
              }}
            >
              <span style={{ minWidth: '8px' }}></span>
              <span style={{ minWidth: '12px', fontSize: '0.7rem', marginTop: '1px' }}>
                <FontAwesomeIcon icon={faFile} />
              </span>
              <span style={{ flex: 1, wordBreak: 'break-word', lineHeight: '1.2' }}>
                {node.name}
              </span>
              {uploadedFiles.has(node.path) && (
                <span style={{
                  background: '#28a745',
                  color: 'white',
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  marginLeft: '4px'
                }}>
                  ✓
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {node.type === 'file' && isExpanded && (
        <div>
          <div
            className={`tree-item ${isActive ? 'active' : ''} tree-file`}
            onClick={() => onFileSelected(node)}
            style={{
              padding: '4px 4px',
              paddingLeft: `${4 + (level + 1) * 12}px`,
              cursor: 'pointer',
              borderRadius: '2px',
              fontSize: '0.7rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '3px',
              backgroundColor: isActive ? '#e3f2fd' : 'transparent',
              borderLeft: level + 1 > 0 ? '1px solid #eee' : 'none',
              minHeight: '20px'
            }}
          >
            <span style={{ minWidth: '8px' }}></span>
            <span style={{ minWidth: '12px', fontSize: '0.7rem', marginTop: '1px' }}>
              <FontAwesomeIcon icon={faFile} />
            </span>
            <span style={{ flex: 1, wordBreak: 'break-word', lineHeight: '1.2' }}>
              {node.name}
            </span>
            {uploadedFiles.has(node.path) && (
              <span style={{
                background: '#28a745',
                color: 'white',
                borderRadius: '50%',
                width: '16px',
                height: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                marginLeft: '4px'
              }}>
                ✓
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DossierTree;
