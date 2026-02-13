import React, { useState, useMemo } from 'react';

const NAFDAC_GUIDELINES = {
  'Module_1': {
    '1.0': {
      title: 'Cover Letter Requirements',
      content: `The cover letter should:
• Clearly state what is being submitted
• Include reference to request letter (if applicable)
• Provide brief description of the package
• Not contain any scientific information
• Include application type (new, renewal, variation)
• State NMRA application number
• Include brand name, DCI, dosage, presentation
• List manufacturer and applicant names`,
      requirements: ['Application type specification', 'NMRA application number', 'Product details', 'Manufacturer information']
    },
    '1.2.1': {
      title: 'Application Letter',
      content: `Application letter must include:
• Formal request for marketing authorization
• Product identification details
• Intended therapeutic use
• Regulatory pathway being followed`,
      requirements: ['Formal authorization request', 'Product identification', 'Therapeutic indication']
    },
    '1.2.7': {
      title: 'Certificate of Pharmaceutical Product (CPP)',
      content: `CPP requirements:
• Must be from stringent regulatory authority
• Should confirm product is approved for marketing
• Must include composition and manufacturing details
• Should be recent (within 2 years)`,
      requirements: ['SRA issued certificate', 'Marketing approval confirmation', 'Recent issuance date']
    },
    '1.2.8': {
      title: 'GMP Certificate',
      content: `GMP Certificate must:
• Be issued by competent authority
• Cover manufacturing site for the product
• Be current and valid
• Include scope of manufacturing activities`,
      requirements: ['Competent authority issuance', 'Site-specific coverage', 'Current validity']
    }
  },
  'Module_2': {
    '2.3': {
      title: 'Quality Overall Summary (QOS)',
      content: `QOS requirements:
• Must follow QOS-PD template
• Include API section (2.3.S)
• Include FPP section (2.3.P)
• Provide summary of Module 3 data
• No new information beyond Module 3`,
      requirements: ['QOS-PD template compliance', 'API summary', 'FPP summary', 'Module 3 alignment']
    }
  },
  'Module_3': {
    '3.2.S': {
      title: 'Drug Substance (API) Information',
      content: `API information based on selected option:
Option 1: API Prequalification - Complete prequalification document
Option 2: CEP - Certificate with letter of access
Option 3: APIMF - Open part with letter of access  
Option 4: Full Details - Complete API information in dossier`,
      requirements: ['Option-specific documentation', 'Manufacturing details', 'Quality control data']
    },
    '3.2.P': {
      title: 'Drug Product Information',
      content: `FPP information must include:
• Description and composition
• Pharmaceutical development
• Manufacturing process
• Control of excipients
• Specifications and testing
• Stability data`,
      requirements: ['Complete composition', 'Manufacturing process', 'Quality specifications', 'Stability studies']
    }
  },
  'Module_5': {
    '5.3.1': {
      title: 'Bioequivalence Studies',
      content: `BE study requirements:
• Comparative bioavailability study
• Test vs reference product comparison
• Statistical analysis of PK parameters
• Study report in ICH E3 format
• Bioanalytical method validation`,
      requirements: ['Comparative BE study', 'Statistical analysis', 'ICH E3 format', 'Method validation']
    }
  }
};

const GuidelinesPanel = ({ selectedSection, apiOption, productType }) => {
  const [expandedSections, setExpandedSections] = useState(new Set());

  const guidelines = useMemo(() => {
    if (!selectedSection) return null;
    
    const [moduleId, sectionId, subsectionId] = selectedSection.split('.');
    
    // Try to find specific guidelines
    let guideline = null;
    if (subsectionId && NAFDAC_GUIDELINES[moduleId]?.[`${sectionId}.${subsectionId}`]) {
      guideline = NAFDAC_GUIDELINES[moduleId][`${sectionId}.${subsectionId}`];
    } else if (NAFDAC_GUIDELINES[moduleId]?.[sectionId]) {
      guideline = NAFDAC_GUIDELINES[moduleId][sectionId];
    } else if (NAFDAC_GUIDELINES[moduleId]) {
      // Return general module guidelines
      guideline = {
        title: `${moduleId} General Guidelines`,
        content: `General requirements for ${moduleId}. Refer to NAFDAC CTD guidelines for detailed requirements.`,
        requirements: ['Follow NAFDAC CTD format', 'Include all required documents', 'Ensure data integrity']
      };
    }

    return guideline;
  }, [selectedSection]);

  const getAPISpecificGuidance = () => {
    if (!apiOption) return null;

    const apiGuidance = {
      option1: {
        title: 'API Prequalification Document',
        content: 'Submit complete copy of WHO prequalification document with additional data as specified in Module 3.2.S requirements.',
        additionalReqs: ['Prequalification document copy', 'Additional physicochemical properties', 'Batch analysis data']
      },
      option2: {
        title: 'Certificate of Suitability (CEP)',
        content: 'Submit complete CEP with letter of access and any additional specifications not covered by CEP.',
        additionalReqs: ['Complete CEP copy', 'Letter of access from CEP holder', 'Additional specifications if needed']
      },
      option3: {
        title: 'APIMF Procedure',
        content: 'Submit open part of APIMF with letter of access. Complete sections S.1-S.7 as specified.',
        additionalReqs: ['APIMF open part', 'Letter of access', 'Complete S.1-S.7 sections']
      },
      option4: {
        title: 'Full Details in Dossier',
        content: 'Provide complete API information including manufacturing, characterization, and control data.',
        additionalReqs: ['Complete manufacturing process', 'Full characterization data', 'Comprehensive control strategy']
      }
    };

    return apiGuidance[apiOption];
  };

  const toggleSection = (sectionKey) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionKey)) {
      newExpanded.delete(sectionKey);
    } else {
      newExpanded.add(sectionKey);
    }
    setExpandedSections(newExpanded);
  };

  if (!selectedSection) {
    return (
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        color: '#666',
        background: '#f8f9fa',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📋</div>
        <h3 style={{ margin: '0 0 1rem 0', color: '#2c3e50' }}>NAFDAC Guidelines</h3>
        <p style={{ margin: 0, fontSize: '14px' }}>
          Select a CTD section to view specific NAFDAC requirements and guidelines
        </p>
      </div>
    );
  }

  const apiGuidance = getAPISpecificGuidance();

  return (
    <div style={{
      height: '100%',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        padding: '1rem',
        backgroundColor: '#193441',
        color: 'white',
        borderBottom: '1px solid #e9ecef'
      }}>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '16px' }}>
          📋 NAFDAC Guidelines
        </h3>
        <div style={{ fontSize: '12px', opacity: 0.9 }}>
          Section: {selectedSection}
        </div>
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        overflow: 'auto',
        padding: '1rem'
      }}>
        {/* API-Specific Guidance */}
        {apiGuidance && (
          <div style={{
            marginBottom: '1.5rem',
            padding: '1rem',
            backgroundColor: '#e3f2fd',
            border: '1px solid #2196f3',
            borderRadius: '6px'
          }}>
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                marginBottom: expandedSections.has('api') ? '1rem' : '0'
              }}
              onClick={() => toggleSection('api')}
            >
              <h4 style={{ 
                margin: 0, 
                fontSize: '14px', 
                fontWeight: '600',
                color: '#1976d2'
              }}>
                🔧 {apiGuidance.title}
              </h4>
              <span style={{ fontSize: '12px', color: '#1976d2' }}>
                {expandedSections.has('api') ? '▼' : '▶'}
              </span>
            </div>
            
            {expandedSections.has('api') && (
              <div>
                <p style={{ 
                  fontSize: '13px', 
                  lineHeight: '1.5', 
                  margin: '0 0 1rem 0',
                  color: '#333'
                }}>
                  {apiGuidance.content}
                </p>
                <div style={{ fontSize: '12px' }}>
                  <strong style={{ color: '#1976d2' }}>Additional Requirements:</strong>
                  <ul style={{ margin: '0.5rem 0 0 1rem', padding: 0 }}>
                    {apiGuidance.additionalReqs.map((req, index) => (
                      <li key={index} style={{ marginBottom: '0.25rem' }}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Section-Specific Guidelines */}
        {guidelines && (
          <div style={{
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            borderRadius: '6px',
            marginBottom: '1rem'
          }}>
            <h4 style={{ 
              margin: '0 0 1rem 0', 
              fontSize: '15px', 
              fontWeight: '600',
              color: '#2c3e50'
            }}>
              {guidelines.title}
            </h4>
            
            <div style={{ 
              fontSize: '13px', 
              lineHeight: '1.6', 
              marginBottom: '1rem',
              whiteSpace: 'pre-line'
            }}>
              {guidelines.content}
            </div>

            {guidelines.requirements && (
              <div>
                <strong style={{ 
                  fontSize: '13px', 
                  color: '#2c3e50',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>
                  Key Requirements:
                </strong>
                <ul style={{ 
                  margin: 0, 
                  paddingLeft: '1.5rem',
                  fontSize: '12px'
                }}>
                  {guidelines.requirements.map((req, index) => (
                    <li key={index} style={{ 
                      marginBottom: '0.25rem',
                      color: '#495057'
                    }}>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* General Tips */}
        <div style={{
          padding: '1rem',
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '6px',
          marginBottom: '1rem'
        }}>
          <h5 style={{ 
            margin: '0 0 0.75rem 0', 
            fontSize: '13px', 
            fontWeight: '600',
            color: '#856404'
          }}>
            💡 General Tips
          </h5>
          <ul style={{ 
            margin: 0, 
            paddingLeft: '1.5rem',
            fontSize: '12px',
            color: '#856404'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              Ensure all documents are in English or certified translations
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Submit documents in searchable PDF format where possible
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Follow NAFDAC naming conventions for files and folders
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Include table of contents for each module
            </li>
          </ul>
        </div>

        {/* Reference Links */}
        <div style={{
          padding: '1rem',
          backgroundColor: '#d1ecf1',
          border: '1px solid #bee5eb',
          borderRadius: '6px'
        }}>
          <h5 style={{ 
            margin: '0 0 0.75rem 0', 
            fontSize: '13px', 
            fontWeight: '600',
            color: '#0c5460'
          }}>
            📚 Reference Documents
          </h5>
          <div style={{ fontSize: '12px', color: '#0c5460' }}>
            <div style={{ marginBottom: '0.5rem' }}>
              • NAFDAC Guidelines for CTD Format (DR&R-GDL-018-01)
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              • ICH M4Q Guidelines for Quality Module
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              • WHO Guidelines for Multisource Products
            </div>
            <div>
              • NAFDAC Product Registration Guidelines
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidelinesPanel;