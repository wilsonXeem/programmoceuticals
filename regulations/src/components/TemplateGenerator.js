import React, { useState } from 'react';
import { templateGeneratorService } from '../services/templateGeneratorService';

const AVAILABLE_TEMPLATES = {
  'coverLetter': {
    id: 'coverLetter',
    title: 'Cover Letter',
    description: 'Formal cover letter for NAFDAC submission',
    section: '1.0',
    required: true,
    icon: '📄'
  },
  'applicationLetter': {
    id: 'applicationLetter',
    title: 'Application Letter',
    description: 'Formal application for marketing authorization',
    section: '1.2.1',
    required: true,
    icon: '📝'
  },
  'qosPD': {
    id: 'qosPD',
    title: 'Quality Overall Summary (QOS-PD)',
    description: 'Summary of quality information for Module 2.3',
    section: '2.3',
    required: true,
    icon: '📊'
  },
  'qis': {
    id: 'qis',
    title: 'Quality Information Summary (QIS)',
    description: 'NAFDAC-specific quality summary',
    section: '1.4.2',
    required: true,
    icon: '📋'
  },
  'smpc': {
    id: 'smpc',
    title: 'Summary of Product Characteristics',
    description: 'Product information document',
    section: '1.3.1',
    required: true,
    icon: '📑'
  },
  'pil': {
    id: 'pil',
    title: 'Patient Information Leaflet',
    description: 'Patient-friendly product information',
    section: '1.3.3',
    required: true,
    icon: '📃'
  },
  'masterTOC': {
    id: 'masterTOC',
    title: 'Master Table of Contents',
    description: 'Complete TOC for entire CTD submission',
    section: '1.1',
    required: true,
    icon: '📚'
  }
};

const TemplateGenerator = ({ productInfo, apiOption, onClose }) => {
  const [selectedTemplates, setSelectedTemplates] = useState(new Set());
  const [isGenerating, setIsGenerating] = useState(false);
  const [status, setStatus] = useState('');

  const handleTemplateToggle = (templateId) => {
    const newSelected = new Set(selectedTemplates);
    if (newSelected.has(templateId)) {
      newSelected.delete(templateId);
    } else {
      newSelected.add(templateId);
    }
    setSelectedTemplates(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedTemplates.size === Object.keys(AVAILABLE_TEMPLATES).length) {
      setSelectedTemplates(new Set());
    } else {
      setSelectedTemplates(new Set(Object.keys(AVAILABLE_TEMPLATES)));
    }
  };

  const handleGenerateTemplates = async () => {
    if (selectedTemplates.size === 0) {
      setStatus('❌ Please select at least one template to generate');
      return;
    }

    setIsGenerating(true);
    setStatus('🔄 Generating templates...');

    try {
      const result = await templateGeneratorService.generateTemplatePackage(
        productInfo,
        apiOption,
        Array.from(selectedTemplates)
      );

      setStatus(`✅ Templates generated successfully! Downloaded: ${result.fileName} (${result.templatesGenerated} templates)`);
    } catch (error) {
      setStatus(`❌ Failed to generate templates: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateSingle = async (templateId) => {
    setIsGenerating(true);
    setStatus(`🔄 Generating ${AVAILABLE_TEMPLATES[templateId].title}...`);

    try {
      const template = await templateGeneratorService.generateTemplate(templateId, productInfo, apiOption);
      const fileName = templateGeneratorService.getTemplateFileName(templateId);
      
      // Create download link
      const url = URL.createObjectURL(template);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setStatus(`✅ ${AVAILABLE_TEMPLATES[templateId].title} downloaded successfully!`);
    } catch (error) {
      setStatus(`❌ Failed to generate template: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
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
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '800px',
        maxHeight: '90vh',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{
          padding: '1.5rem',
          backgroundColor: '#193441',
          color: 'white',
          borderBottom: '1px solid #e9ecef'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '20px' }}>
                📄 NAFDAC Template Generator
              </h2>
              <div style={{ fontSize: '14px', opacity: 0.9 }}>
                Product: {productInfo?.productName || '[Product Name]'} | API Option: {apiOption}
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                padding: '0.5rem'
              }}
            >
              ×
            </button>
          </div>
        </div>

        {/* Status Bar */}
        {status && (
          <div style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: status.includes('✅') ? '#d4edda' : 
                            status.includes('❌') ? '#f8d7da' : '#d1ecf1',
            borderBottom: '1px solid #e9ecef',
            fontSize: '14px',
            color: status.includes('✅') ? '#155724' : 
                   status.includes('❌') ? '#721c24' : '#0c5460'
          }}>
            {status}
          </div>
        )}

        {/* Content */}
        <div style={{
          flex: 1,
          overflow: 'auto',
          padding: '1.5rem'
        }}>
          {/* Instructions */}
          <div style={{
            padding: '1rem',
            backgroundColor: '#fff3cd',
            border: '1px solid #ffeaa7',
            borderRadius: '6px',
            marginBottom: '1.5rem'
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '14px', color: '#856404' }}>
              💡 Template Generator Instructions
            </h4>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '13px', color: '#856404' }}>
              <li>Select templates you need for your NAFDAC CTD submission</li>
              <li>Templates contain placeholder text in [BRACKETS] - replace with actual information</li>
              <li>Generated templates follow NAFDAC formatting requirements</li>
              <li>Review and customize templates before final submission</li>
            </ul>
          </div>

          {/* Template Selection */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem'
          }}>
            <h3 style={{ margin: 0, fontSize: '16px', color: '#2c3e50' }}>
              Available Templates
            </h3>
            <button
              onClick={handleSelectAll}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '12px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {selectedTemplates.size === Object.keys(AVAILABLE_TEMPLATES).length ? 'Deselect All' : 'Select All'}
            </button>
          </div>

          {/* Template Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            {Object.values(AVAILABLE_TEMPLATES).map((template) => {
              const isSelected = selectedTemplates.has(template.id);
              
              return (
                <div
                  key={template.id}
                  style={{
                    border: `2px solid ${isSelected ? '#193441' : '#e9ecef'}`,
                    borderRadius: '6px',
                    padding: '1rem',
                    backgroundColor: isSelected ? '#f8f9fa' : 'white',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '0.75rem'
                  }}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleTemplateToggle(template.id)}
                      style={{ marginTop: '0.25rem' }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.25rem'
                      }}>
                        <span style={{ fontSize: '16px' }}>{template.icon}</span>
                        <h4 style={{
                          margin: 0,
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#2c3e50'
                        }}>
                          {template.title}
                        </h4>
                        <span style={{
                          backgroundColor: template.required ? '#dc3545' : '#6c757d',
                          color: 'white',
                          padding: '1px 4px',
                          borderRadius: '8px',
                          fontSize: '10px',
                          fontWeight: '600'
                        }}>
                          {template.required ? 'REQ' : 'OPT'}
                        </span>
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: '#666',
                        marginBottom: '0.5rem'
                      }}>
                        Section {template.section} • {template.description}
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleGenerateSingle(template.id)}
                    disabled={isGenerating}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      fontSize: '12px',
                      backgroundColor: isGenerating ? '#e9ecef' : '#17a2b8',
                      color: isGenerating ? '#6c757d' : 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: isGenerating ? 'not-allowed' : 'pointer'
                    }}
                  >
                    📥 Download Single Template
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: '1rem 1.5rem',
          backgroundColor: '#f8f9fa',
          borderTop: '1px solid #e9ecef',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ fontSize: '14px', color: '#666' }}>
            {selectedTemplates.size} template{selectedTemplates.size !== 1 ? 's' : ''} selected
          </div>
          
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={onClose}
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '14px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            
            <button
              onClick={handleGenerateTemplates}
              disabled={selectedTemplates.size === 0 || isGenerating}
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '14px',
                backgroundColor: (selectedTemplates.size === 0 || isGenerating) ? '#e9ecef' : '#28a745',
                color: (selectedTemplates.size === 0 || isGenerating) ? '#6c757d' : 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: (selectedTemplates.size === 0 || isGenerating) ? 'not-allowed' : 'pointer'
              }}
            >
              {isGenerating ? '⏳ Generating...' : '📦 Generate Template Package'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateGenerator;