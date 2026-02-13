import React from 'react';
import { calculateCompletionStatus } from '../utils/ctdStructure';

const CompletionDashboard = ({ ctdStructure, apiOption, productName }) => {
  if (!ctdStructure) return null;

  const completionStatus = calculateCompletionStatus(ctdStructure);
  
  const getModuleColor = (percentage) => {
    if (percentage === 100) return '#28a745';
    if (percentage >= 75) return '#ffc107';
    if (percentage >= 50) return '#fd7e14';
    if (percentage > 0) return '#dc3545';
    return '#6c757d';
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

  const getModuleName = (moduleId) => {
    const names = {
      'Module_1': 'Administrative & Product Info',
      'Module_2': 'CTD Summaries',
      'Module_3': 'Quality',
      'Module_4': 'Non-Clinical Studies',
      'Module_5': 'Clinical Studies'
    };
    return names[moduleId] || moduleId;
  };

  const getAPIOptionName = (option) => {
    const names = {
      'option1': 'API Prequalification',
      'option2': 'CEP Certificate',
      'option3': 'APIMF',
      'option4': 'Full Details'
    };
    return names[option] || option;
  };

  const getReadinessLevel = (percentage) => {
    if (percentage === 100) return { level: 'Ready for Submission', color: '#28a745', icon: '✅' };
    if (percentage >= 90) return { level: 'Nearly Complete', color: '#20c997', icon: '🟢' };
    if (percentage >= 75) return { level: 'Good Progress', color: '#ffc107', icon: '🟡' };
    if (percentage >= 50) return { level: 'In Progress', color: '#fd7e14', icon: '🟠' };
    if (percentage > 0) return { level: 'Getting Started', color: '#dc3545', icon: '🔴' };
    return { level: 'Not Started', color: '#6c757d', icon: '⚪' };
  };

  const readiness = getReadinessLevel(completionStatus.overall);

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '1.5rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      margin: '1rem 0'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.5rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid #e9ecef'
      }}>
        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#193441',
            margin: '0 0 0.5rem 0'
          }}>
            📊 Dossier Completion Dashboard
          </h3>
          <div style={{ fontSize: '14px', color: '#666' }}>
            <strong>{productName}</strong> • {getAPIOptionName(apiOption)}
          </div>
        </div>
        <div style={{
          textAlign: 'right'
        }}>
          <div style={{
            fontSize: '24px',
            fontWeight: '700',
            color: readiness.color,
            margin: '0 0 0.25rem 0'
          }}>
            {completionStatus.overall}%
          </div>
          <div style={{
            fontSize: '12px',
            color: readiness.color,
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}>
            <span>{readiness.icon}</span>
            <span>{readiness.level}</span>
          </div>
        </div>
      </div>

      {/* Overall Progress Bar */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem'
        }}>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#193441' }}>
            Overall Progress
          </span>
          <span style={{ fontSize: '12px', color: '#666' }}>
            {completionStatus.completed} of {completionStatus.total} sections
          </span>
        </div>
        <div style={{
          width: '100%',
          height: '12px',
          backgroundColor: '#e9ecef',
          borderRadius: '6px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${completionStatus.overall}%`,
            height: '100%',
            backgroundColor: readiness.color,
            transition: 'width 0.5s ease',
            borderRadius: '6px'
          }} />
        </div>
      </div>

      {/* Module Breakdown */}
      <div>
        <h4 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#193441',
          margin: '0 0 1rem 0'
        }}>
          Module Breakdown
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem'
        }}>
          {Object.entries(completionStatus.byModule).map(([moduleId, status]) => (
            <div
              key={moduleId}
              style={{
                border: '1px solid #e9ecef',
                borderRadius: '6px',
                padding: '1rem',
                backgroundColor: '#f8f9fa'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.75rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{ fontSize: '16px' }}>
                    {getModuleIcon(moduleId)}
                  </span>
                  <div>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#193441'
                    }}>
                      {moduleId}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#666'
                    }}>
                      {getModuleName(moduleId)}
                    </div>
                  </div>
                </div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: getModuleColor(status.percentage)
                }}>
                  {status.percentage}%
                </div>
              </div>
              
              <div style={{
                width: '100%',
                height: '6px',
                backgroundColor: '#e9ecef',
                borderRadius: '3px',
                overflow: 'hidden',
                marginBottom: '0.5rem'
              }}>
                <div style={{
                  width: `${status.percentage}%`,
                  height: '100%',
                  backgroundColor: getModuleColor(status.percentage),
                  transition: 'width 0.3s ease'
                }} />
              </div>
              
              <div style={{
                fontSize: '12px',
                color: '#666',
                textAlign: 'center'
              }}>
                {status.completed} of {status.total} sections
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Items */}
      {completionStatus.overall < 100 && (
        <div style={{
          marginTop: '1.5rem',
          padding: '1rem',
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '6px'
        }}>
          <h5 style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#856404',
            margin: '0 0 0.5rem 0'
          }}>
            📝 Next Steps
          </h5>
          <ul style={{
            margin: 0,
            paddingLeft: '1.5rem',
            fontSize: '12px',
            color: '#856404'
          }}>
            {Object.entries(completionStatus.byModule)
              .filter(([_, status]) => status.percentage < 100)
              .slice(0, 3)
              .map(([moduleId, status]) => (
                <li key={moduleId} style={{ marginBottom: '0.25rem' }}>
                  Complete remaining sections in {moduleId} ({status.total - status.completed} sections needed)
                </li>
              ))}
            {completionStatus.overall >= 90 && (
              <li style={{ marginBottom: '0.25rem' }}>
                Review all sections and validate before export
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Export Readiness */}
      {completionStatus.overall >= 75 && (
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: completionStatus.overall === 100 ? '#d4edda' : '#d1ecf1',
          border: `1px solid ${completionStatus.overall === 100 ? '#c3e6cb' : '#bee5eb'}`,
          borderRadius: '6px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: completionStatus.overall === 100 ? '#155724' : '#0c5460',
            marginBottom: '0.5rem'
          }}>
            {completionStatus.overall === 100 ? '🎉 Ready for Export!' : '⚡ Almost Ready!'}
          </div>
          <div style={{
            fontSize: '12px',
            color: completionStatus.overall === 100 ? '#155724' : '#0c5460'
          }}>
            {completionStatus.overall === 100 
              ? 'Your dossier is complete and ready for NAFDAC submission'
              : `Complete ${100 - completionStatus.overall}% more to be export-ready`
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default CompletionDashboard;