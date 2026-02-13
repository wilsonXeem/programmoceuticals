import React, { useState } from 'react';

const API_SUBMISSION_OPTIONS = {
  option1: {
    id: 'option1',
    title: 'API Prequalification Document',
    description: 'Complete copy of prequalification document with additional data',
    requirements: ['Prequalification document', 'General properties', 'Batch analysis']
  },
  option2: {
    id: 'option2', 
    title: 'Certificate of Suitability (CEP)',
    description: 'CEP with letter of access and additional specifications',
    requirements: ['Complete CEP copy', 'Letter of access', 'Additional specifications']
  },
  option3: {
    id: 'option3',
    title: 'APIMF (Active Pharmaceutical Ingredient Master File)',
    description: 'APIMF open part with letter of access',
    requirements: ['APIMF open part', 'Letter of access', 'Complete sections S.1-S.7']
  },
  option4: {
    id: 'option4',
    title: 'Full Details in Product Dossier',
    description: 'Complete API information in dossier',
    requirements: ['Complete API manufacturing', 'Characterization', 'Control data']
  }
};

const APISelection = ({ onSelection }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [productName, setProductName] = useState('');

  const handleSubmit = () => {
    if (selectedOption && productName.trim()) {
      onSelection({
        apiOption: selectedOption,
        productName: productName.trim(),
        productType: 'generic' // Default for now
      });
    }
  };

  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ maxWidth: '800px', width: '100%' }}>
        {/* Header */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          borderTop: '4px solid #193441',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#193441',
            margin: '0 0 1rem 0'
          }}>
            🏥 NAFDAC CTD Dossier Compiler
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#666',
            margin: 0
          }}>
            Create NAFDAC-compliant Common Technical Document dossiers
          </p>
        </div>

        {/* Product Name */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '1.5rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '600',
            color: '#193441',
            marginBottom: '0.5rem'
          }}>
            Product Name *
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter your product name"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px',
              outline: 'none'
            }}
          />
        </div>

        {/* API Selection */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '1.5rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#193441',
            margin: '0 0 1rem 0'
          }}>
            Select API Submission Type
          </h3>
          
          <div style={{ display: 'grid', gap: '1rem' }}>
            {Object.values(API_SUBMISSION_OPTIONS).map((option) => (
              <div
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                style={{
                  border: `2px solid ${selectedOption === option.id ? '#193441' : '#e9ecef'}`,
                  borderRadius: '8px',
                  padding: '1rem',
                  cursor: 'pointer',
                  backgroundColor: selectedOption === option.id ? '#f8f9fa' : 'white',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <input
                    type="radio"
                    checked={selectedOption === option.id}
                    onChange={() => setSelectedOption(option.id)}
                    style={{ marginTop: '0.25rem' }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#193441',
                      margin: '0 0 0.5rem 0'
                    }}>
                      {option.title}
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      color: '#666',
                      margin: '0 0 0.75rem 0'
                    }}>
                      {option.description}
                    </p>
                    <div style={{ fontSize: '12px', color: '#888' }}>
                      <strong>Requirements:</strong> {option.requirements.join(', ')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!selectedOption || !productName.trim()}
          style={{
            width: '100%',
            padding: '1rem',
            fontSize: '16px',
            fontWeight: '600',
            backgroundColor: (!selectedOption || !productName.trim()) ? '#e9ecef' : '#193441',
            color: (!selectedOption || !productName.trim()) ? '#6c757d' : 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: (!selectedOption || !productName.trim()) ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s'
          }}
        >
          📋 Create CTD Dossier
        </button>
      </div>
    </div>
  );
};

export default APISelection;