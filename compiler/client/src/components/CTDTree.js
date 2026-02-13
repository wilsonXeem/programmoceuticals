import React, { useState, useMemo } from 'react';
import { calculateCompletionStatus } from '../utils/ctdStructure';

// Numeric sorting function for CTD sections
const numericSort = (a, b) => {
  const parseNumber = (str) => {
    // Extract numeric parts from strings like '1.2.3', 'Module_1', etc.
    const parts = str.replace(/[^0-9.]/g, '').split('.').filter(p => p !== '');
    return parts.map(p => parseInt(p, 10) || 0);
  };
  
  const aParts = parseNumber(a);
  const bParts = parseNumber(b);
  
  // Compare each numeric part
  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    const aNum = aParts[i] || 0;
    const bNum = bParts[i] || 0;
    
    if (aNum !== bNum) {
      return aNum - bNum;
    }
  }
  
  return 0;
};

const CTDTree = ({ ctdStructure, onSectionSelect, selectedSection }) => {
  const [expandedModules, setExpandedModules] = useState(new Set(['Module_1']));
  const [expandedSections, setExpandedSections] = useState(new Set());

  const completionStatus = useMemo(() => {
    return calculateCompletionStatus(ctdStructure);
  }, [ctdStructure]);

  const toggleModule = (moduleId) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  const toggleSection = (sectionId) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const getStatusIcon = (required, hasFiles) => {
    if (!required) return '⚪'; // Optional
    if (hasFiles) return '✅'; // Complete
    return '🔴'; // Required but missing
  };

  const getStatusColor = (required, hasFiles) => {
    if (!required) return '#6c757d'; // Gray for optional
    if (hasFiles) return '#28a745'; // Green for complete
    return '#dc3545'; // Red for missing
  };

  const renderSubsection = (subsectionId, subsection, moduleId, sectionId, level = 1) => {
    const fullPath = `${moduleId}.${sectionId}.${subsectionId}`;
    const isSelected = selectedSection === fullPath;
    const hasFiles = subsection.files && subsection.files.length > 0;
    const hasSubsections = subsection.subsections && Object.keys(subsection.subsections).length > 0;
    const isExpanded = expandedSections.has(fullPath);
    
    return (
      <div key={subsectionId}>
        <div
          onClick={(e) => {
            e.stopPropagation();
            console.log('Subsection clicked:', fullPath, subsection);
            if (hasSubsections) {
              toggleSection(fullPath);
            }
            onSectionSelect(fullPath, subsection);
          }}
          style={{
            padding: `8px 12px 8px ${40 + (level * 20)}px`,
            cursor: 'pointer',
            backgroundColor: isSelected ? '#e3f2fd' : hasFiles ? '#f8fff8' : 'transparent',
            borderLeft: isSelected ? '3px solid #0b5ed7' : '3px solid transparent',
            fontSize: '13px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '4px',
            margin: '2px 0',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            if (!isSelected) {
              e.target.style.backgroundColor = '#f0f0f0';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSelected) {
              e.target.style.backgroundColor = hasFiles ? '#f8fff8' : 'transparent';
            }
          }}
        >
          {hasSubsections && (
            <span style={{ fontSize: '10px', color: '#666', minWidth: '10px' }}>
              {isExpanded ? '▼' : '▶'}
            </span>
          )}
          <span style={{ color: getStatusColor(subsection.required, hasFiles) }}>
            {getStatusIcon(subsection.required, hasFiles)}
          </span>
          <span style={{ flex: 1, fontWeight: hasFiles ? '500' : 'normal' }}>
            {subsectionId} {subsection.title}
          </span>
          {hasFiles && (
            <span style={{
              backgroundColor: '#28a745',
              color: 'white',
              padding: '2px 6px',
              borderRadius: '10px',
              fontSize: '11px',
              fontWeight: '600'
            }}>
              {subsection.files.length}
            </span>
          )}
          {subsection.required && !hasFiles && (
            <span style={{
              backgroundColor: '#dc3545',
              color: 'white',
              padding: '1px 4px',
              borderRadius: '8px',
              fontSize: '10px',
              fontWeight: '600'
            }}>
              REQ
            </span>
          )}
        </div>
        
        {hasSubsections && isExpanded && (
          <div>
            {Object.entries(subsection.subsections)
              .sort(([a], [b]) => numericSort(a, b))
              .map(([subSubsectionId, subSubsection]) =>
                renderSubsection(subSubsectionId, subSubsection, moduleId, sectionId, level + 1)
              )}
          </div>
        )}
      </div>
    );
  };

  const renderSection = (sectionId, section, moduleId) => {
    const fullPath = `${moduleId}.${sectionId}`;
    const isSelected = selectedSection === fullPath;
    const hasFiles = section.files && section.files.length > 0;
    const hasSubsections = section.subsections && Object.keys(section.subsections).length > 0;
    const isExpanded = expandedSections.has(fullPath);
    
    // Calculate total files in section and subsections
    let totalFiles = section.files ? section.files.length : 0;
    if (hasSubsections) {
      totalFiles += Object.values(section.subsections).reduce((sum, sub) => 
        sum + (sub.files ? sub.files.length : 0), 0
      );
    }
    
    return (
      <div key={sectionId}>
        <div
          onClick={(e) => {
            e.stopPropagation();
            console.log('Section clicked:', fullPath, section, 'hasSubsections:', hasSubsections);
            if (hasSubsections) {
              toggleSection(fullPath);
            }
            // Always select the section when clicked
            onSectionSelect(fullPath, section);
          }}
          style={{
            padding: '10px 12px 10px 40px',
            cursor: 'pointer',
            backgroundColor: isSelected ? '#e3f2fd' : totalFiles > 0 ? '#f8fff8' : 'transparent',
            borderLeft: isSelected ? '3px solid #0b5ed7' : '3px solid transparent',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '4px',
            margin: '2px 0',
            transition: 'all 0.2s ease'
          }}
        >
          {hasSubsections && (
            <span style={{ fontSize: '12px', color: '#666', minWidth: '12px' }}>
              {isExpanded ? '▼' : '▶'}
            </span>
          )}
          <span style={{ color: getStatusColor(section.required, hasFiles) }}>
            {getStatusIcon(section.required, hasFiles)}
          </span>
          <span style={{ flex: 1, fontWeight: hasSubsections ? '600' : '500' }}>
            {sectionId} {section.title}
          </span>
          {totalFiles > 0 && (
            <span style={{
              backgroundColor: '#28a745',
              color: 'white',
              padding: '2px 6px',
              borderRadius: '10px',
              fontSize: '11px',
              fontWeight: '600'
            }}>
              {totalFiles}
            </span>
          )}
          {section.required && !hasFiles && !hasSubsections && (
            <span style={{
              backgroundColor: '#dc3545',
              color: 'white',
              padding: '1px 4px',
              borderRadius: '8px',
              fontSize: '10px',
              fontWeight: '600'
            }}>
              REQ
            </span>
          )}
        </div>
        
        {hasSubsections && isExpanded && (
          <div>
            {Object.entries(section.subsections)
              .sort(([a], [b]) => numericSort(a, b))
              .map(([subsectionId, subsection]) =>
                renderSubsection(subsectionId, subsection, moduleId, sectionId)
              )}
          </div>
        )}
      </div>
    );
  };

  const renderModule = (moduleId, module) => {
    const isExpanded = expandedModules.has(moduleId);
    const moduleStatus = completionStatus.byModule[moduleId] || { completed: 0, total: 0, percentage: 0 };
    
    return (
      <div key={moduleId} style={{ marginBottom: '8px' }}>
        <div
          onClick={() => toggleModule(moduleId)}
          style={{
            padding: '12px 16px',
            cursor: 'pointer',
            backgroundColor: '#f8f9fa',
            border: '1px solid #e9ecef',
            borderRadius: '6px',
            fontSize: '15px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#0b5ed7'
          }}
        >
          <span style={{ fontSize: '14px' }}>
            {isExpanded ? '▼' : '▶'}
          </span>
          <span style={{ flex: 1 }}>
            {moduleId}: {module.title}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              backgroundColor: moduleStatus.percentage === 100 ? '#28a745' : 
                             moduleStatus.percentage > 0 ? '#ffc107' : '#dc3545',
              color: 'white',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '12px'
            }}>
              {moduleStatus.completed}/{moduleStatus.total}
            </span>
            <span style={{ fontSize: '12px', color: '#666' }}>
              {moduleStatus.percentage}%
            </span>
          </div>
        </div>
        
        {isExpanded && (
          <div style={{ marginTop: '4px', marginLeft: '8px' }}>
            {Object.entries(module.sections)
              .sort(([a], [b]) => numericSort(a, b))
              .map(([sectionId, section]) =>
                renderSection(sectionId, section, moduleId)
              )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{
      height: '100%',
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{
        padding: '16px',
        backgroundColor: '#0b5ed7',
        color: 'white',
        borderBottom: '1px solid #e9ecef'
      }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>
          📋 NAFDAC CTD Structure
        </h3>
        <div style={{ fontSize: '14px', opacity: 0.9 }}>
          Overall Progress: {completionStatus.completed}/{completionStatus.total} sections ({completionStatus.overall}%)
        </div>
        <div style={{
          marginTop: '8px',
          height: '4px',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            backgroundColor: '#28a745',
            width: `${completionStatus.overall}%`,
            transition: 'width 0.3s ease'
          }} />
        </div>
      </div>

      {/* Legend */}
      <div style={{
        padding: '12px 16px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #e9ecef',
        fontSize: '11px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <span style={{ color: '#dc3545' }}>🔴</span>
          <span>Required</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <span style={{ color: '#28a745' }}>✅</span>
          <span>Complete</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <span style={{ color: '#6c757d' }}>⚪</span>
          <span>Optional</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <span style={{ backgroundColor: '#28a745', color: 'white', padding: '1px 4px', borderRadius: '8px', fontSize: '10px' }}>5</span>
          <span>File Count</span>
        </div>
      </div>

      {/* Tree Content */}
      <div style={{
        flex: 1,
        overflow: 'auto',
        padding: '16px'
      }}>
        {Object.entries(ctdStructure)
          .sort(([a], [b]) => numericSort(a, b))
          .map(([moduleId, module]) =>
            renderModule(moduleId, module)
          )}
      </div>
    </div>
  );
};

export default CTDTree;
