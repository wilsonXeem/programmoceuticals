import React, { useMemo } from 'react';
import { calculateCompletionStatus } from '../utils/ctdStructure';
import { COMPLETE_CTD_STRUCTURE } from '../utils/completeCTDStructure';

const CTDProgressDashboard = ({ ctdStructure, apiOption, productName, onSectionSelect }) => {
  const getSectionFromPath = (structure, path) => {
    const parts = path.split('.');
    let current = structure;
    
    for (const part of parts) {
      if (current?.[part]) {
        current = current[part];
      } else if (current?.sections?.[part]) {
        current = current.sections[part];
      } else if (current?.subsections?.[part]) {
        current = current.subsections[part];
      } else {
        return null;
      }
    }
    
    return current;
  };

  const getPriority = (path, apiOption) => {
    // Higher priority for critical sections
    if (path.includes('1.2.1') || path.includes('1.2.2')) return 10; // Application essentials
    if (path.includes('1.3.1') || path.includes('1.3.2')) return 9;  // Product info
    if (path.includes('2.3')) return 8; // QOS-PD
    if (path.includes('3.2.P.5') || path.includes('3.2.S.4')) return 7; // Specifications
    if (path.includes('5.3.1.2')) return 6; // Bioequivalence
    
    // API option specific priorities
    if (apiOption === 'option2' && path.includes('1.2.15')) return 9; // CEP
    if (apiOption === 'option3' && path.includes('1.2.16')) return 9; // APIMF
    
    return 5; // Default priority
  };

  const completionStatus = useMemo(() => {
    return calculateCompletionStatus(ctdStructure);
  }, [ctdStructure]);

  const missingRequiredSections = useMemo(() => {
    const missing = [];
    
    const checkSection = (section, path, moduleId) => {
      if (section.required) {
        const currentSection = getSectionFromPath(ctdStructure, path);
        const hasFiles = currentSection?.files && currentSection.files.length > 0;
        
        if (!hasFiles) {
          missing.push({
            path,
            title: section.title,
            moduleId,
            priority: getPriority(path, apiOption)
          });
        }
      }
      
      if (section.subsections) {
        Object.entries(section.subsections).forEach(([subId, subsection]) => {
          checkSection(subsection, `${path}.${subId}`, moduleId);
        });
      }
    };

    Object.entries(COMPLETE_CTD_STRUCTURE).forEach(([moduleId, module]) => {
      Object.entries(module.sections).forEach(([sectionId, section]) => {
        checkSection(section, `${moduleId}.${sectionId}`, moduleId);
      });
    });

    return missing.sort((a, b) => b.priority - a.priority);
  }, [ctdStructure, apiOption]);

  const getReadinessLevel = (percentage) => {
    if (percentage === 100) return { level: 'Ready for Submission', color: '#28a745', icon: '🎉', bgColor: '#d4edda' };
    if (percentage >= 90) return { level: 'Nearly Complete', color: '#20c997', icon: '🚀', bgColor: '#d1ecf1' };
    if (percentage >= 75) return { level: 'Good Progress', color: '#ffc107', icon: '⚡', bgColor: '#fff3cd' };
    if (percentage >= 50) return { level: 'In Progress', color: '#fd7e14', icon: '🔄', bgColor: '#ffeaa7' };
    if (percentage > 0) return { level: 'Getting Started', color: '#dc3545', icon: '🏁', bgColor: '#f8d7da' };
    return { level: 'Not Started', color: '#6c757d', icon: '⭕', bgColor: '#e2e3e5' };
  };

  const getModuleIcon = (moduleId) => {
    const icons = {
      'Module_1': '📋',
      'Module_2': '📊', 
      'Module_3': '🧪',
      'Module_4': '🐭',
      'Module_5': '👥'
    };
    return icons[moduleId] || '📄';
  };

  const readiness = getReadinessLevel(completionStatus.overall);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginBottom: '1rem'
    }}>
      {/* Overall Status Card */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        border: `2px solid ${readiness.color}`
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem'
        }}>
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#0b5ed7',
              margin: '0 0 0.5rem 0'
            }}>
              📊 Overall Progress
            </h3>
            <div style={{ fontSize: '14px', color: '#666' }}>
              {productName} • {apiOption?.replace('option', 'Option ')}
            </div>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            backgroundColor: readiness.bgColor,
            borderRadius: '8px',
            border: `1px solid ${readiness.color}`
          }}>
            <div style={{
              fontSize: '32px',
              fontWeight: '700',
              color: readiness.color,
              margin: '0'
            }}>
              {completionStatus.overall}%
            </div>
            <div style={{
              fontSize: '12px',
              color: readiness.color,
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              justifyContent: 'center'
            }}>
              <span>{readiness.icon}</span>
              <span>{readiness.level}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{
          width: '100%',
          height: '12px',
          backgroundColor: '#e9ecef',
          borderRadius: '6px',
          overflow: 'hidden',
          marginBottom: '1rem'
        }}>
          <div style={{
            width: `${completionStatus.overall}%`,
            height: '100%',
            backgroundColor: readiness.color,
            transition: 'width 0.5s ease',
            borderRadius: '6px'
          }} />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '14px',
          color: '#666'
        }}>
          <span>{completionStatus.completed} completed</span>
          <span>{completionStatus.total} total sections</span>
        </div>
      </div>

      {/* Module Breakdown Card */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#0b5ed7',
          margin: '0 0 1rem 0'
        }}>
          📁 Module Status
        </h3>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          {Object.entries(completionStatus.byModule).map(([moduleId, status]) => {
            const moduleColor = status.percentage === 100 ? '#28a745' : 
                              status.percentage >= 75 ? '#ffc107' : 
                              status.percentage > 0 ? '#fd7e14' : '#dc3545';
            
            return (
              <div key={moduleId} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.5rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '6px',
                border: '1px solid #e9ecef'
              }}>
                <span style={{ fontSize: '20px' }}>
                  {getModuleIcon(moduleId)}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#0b5ed7',
                    marginBottom: '0.25rem'
                  }}>
                    {moduleId}
                  </div>
                  <div style={{
                    width: '100%',
                    height: '4px',
                    backgroundColor: '#e9ecef',
                    borderRadius: '2px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${status.percentage}%`,
                      height: '100%',
                      backgroundColor: moduleColor,
                      transition: 'width 0.3s ease'
                    }} />
                  </div>
                </div>
                <div style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: moduleColor,
                  minWidth: '40px',
                  textAlign: 'right'
                }}>
                  {status.percentage}%
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Missing Sections Alert */}
      {missingRequiredSections.length > 0 && (
        <div style={{
          gridColumn: '1 / -1',
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '1.5rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          border: '2px solid #dc3545'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            <span style={{ fontSize: '20px' }}>⚠️</span>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#dc3545',
              margin: 0
            }}>
              Missing Required Sections ({missingRequiredSections.length})
            </h3>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '0.75rem',
            maxHeight: '200px',
            overflowY: 'auto'
          }}>
            {missingRequiredSections.slice(0, 8).map((section, index) => (
              <div
                key={section.path}
                onClick={() => onSectionSelect?.(section.path)}
                style={{
                  padding: '0.75rem',
                  backgroundColor: '#fff5f5',
                  border: '1px solid #fed7d7',
                  borderRadius: '6px',
                  cursor: onSectionSelect ? 'pointer' : 'default',
                  transition: 'all 0.2s ease',
                  ':hover': onSectionSelect ? {
                    backgroundColor: '#fef2f2',
                    borderColor: '#fca5a5'
                  } : {}
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.25rem'
                }}>
                  <span style={{
                    backgroundColor: section.priority >= 8 ? '#dc3545' : '#fd7e14',
                    color: 'white',
                    padding: '2px 6px',
                    borderRadius: '10px',
                    fontSize: '10px',
                    fontWeight: '600'
                  }}>
                    {section.priority >= 8 ? 'HIGH' : 'MED'}
                  </span>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#dc3545'
                  }}>
                    {section.path}
                  </span>
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#666',
                  lineHeight: '1.3'
                }}>
                  {section.title}
                </div>
              </div>
            ))}
          </div>
          
          {missingRequiredSections.length > 8 && (
            <div style={{
              marginTop: '0.75rem',
              fontSize: '12px',
              color: '#666',
              textAlign: 'center'
            }}>
              ... and {missingRequiredSections.length - 8} more sections
            </div>
          )}
        </div>
      )}

      {/* Export Readiness */}
      {completionStatus.overall >= 75 && (
        <div style={{
          gridColumn: '1 / -1',
          backgroundColor: readiness.bgColor,
          border: `2px solid ${readiness.color}`,
          borderRadius: '8px',
          padding: '1.5rem',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '18px',
            fontWeight: '600',
            color: readiness.color,
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ fontSize: '24px' }}>{readiness.icon}</span>
            {completionStatus.overall === 100 ? 'Ready for NAFDAC Submission!' : 'Almost Ready for Export!'}
          </div>
          <div style={{
            fontSize: '14px',
            color: readiness.color,
            opacity: 0.8
          }}>
            {completionStatus.overall === 100 
              ? 'Your dossier meets all NAFDAC requirements and is ready for submission'
              : `Complete ${100 - completionStatus.overall}% more to be export-ready`
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default CTDProgressDashboard;
