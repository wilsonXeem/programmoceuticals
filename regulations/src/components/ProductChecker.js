import React, { useState } from 'react';
import { checkCeilingList } from '../utils/nafdacCeilingList';
import { checkFivePlusFivePolicy } from '../utils/fivePlusFivePolicy';
import { checkImportProhibitionList } from '../utils/importProhibitionList';
import { checkFDCRegulatoryDirective } from '../utils/fdcRegulatoryDirective';
import { hasNarrowTherapeuticIndex, getMatchedNTIDrugs } from '../utils/narrowTherapeuticIndex';


const ProductChecker = () => {
  const [productName, setProductName] = useState('');
  const [results, setResults] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const checkProduct = async () => {
    if (!productName.trim()) return;
    
    setIsChecking(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const name = productName.trim();
    
    const checkResults = {
      ceilingList: checkCeilingList(name, name),
      fivePlusFive: checkFivePlusFivePolicy(name, name),
      importProhibition: checkImportProhibitionList(name, name),
      fdcDirective: checkFDCRegulatoryDirective(name, [name]),
      ntiCheck: hasNarrowTherapeuticIndex(name, [name]),
      matchedNTIDrugs: getMatchedNTIDrugs(name, [name])
    };
    
    setResults(checkResults);
    setIsChecking(false);
  };

  const getOverallStatus = () => {
    if (!results) return null;
    
    if (results.ceilingList) {
      return { status: 'REJECTED', color: '#dc3545', reason: 'Product found on NAFDAC Ceiling List' };
    }
    if (results.importProhibition) {
      return { status: 'REJECTED', color: '#dc3545', reason: 'Product found on Import Prohibition List' };
    }
    if (results.fdcDirective) {
      return { status: 'REJECTED', color: '#dc3545', reason: 'Prohibited FDC combination' };
    }
    if (results.fivePlusFive) {
      return { status: 'CONDITIONAL', color: '#ffc107', reason: 'Local manufacturing only (5+5 Policy)' };
    }

    return { status: 'APPROVED', color: '#28a745', reason: 'No regulatory restrictions found' };
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '20px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {/* Professional Header */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          borderTop: '4px solid #193441'
        }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#193441',
            margin: '0 0 10px 0',
            textAlign: 'center'
          }}>
            Product Regulatory Checker
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#666',
            margin: 0,
            textAlign: 'center',
            lineHeight: '1.5'
          }}>
            Verify regulatory compliance status for pharmaceutical products against NAFDAC restrictions
          </p>
        </div>

        {/* Input Section */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#193441',
              marginBottom: '8px'
            }}>
              Product Name (Generic Name) *
            </label>
            <input
              type="text"
              placeholder="Enter product name (e.g., Paracetamol Tablets)"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e9ecef',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#193441'}
              onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
            />
          </div>
          
          <button
            onClick={checkProduct}
            disabled={!productName.trim() || isChecking}
            style={{
              width: '100%',
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: '600',
              backgroundColor: (!productName.trim() || isChecking) ? '#e9ecef' : '#193441',
              color: (!productName.trim() || isChecking) ? '#6c757d' : 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: (!productName.trim() || isChecking) ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {isChecking ? 'Checking Product...' : 'Check Product'}
          </button>
        </div>

        {/* Results Section */}
        {results && (
          <>
            {/* Overall Status */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '30px',
              marginBottom: '30px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              textAlign: 'center',
              borderLeft: `6px solid ${getOverallStatus().color}`
            }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: getOverallStatus().color,
                margin: '0 0 10px 0'
              }}>
                {getOverallStatus().status}
              </h2>
              <p style={{
                fontSize: '14px',
                color: '#666',
                margin: 0,
                lineHeight: '1.5'
              }}>
                {getOverallStatus().reason}
              </p>
            </div>

            {/* Detailed Results Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '20px'
            }}>
              {/* NAFDAC Ceiling List */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                borderLeft: `6px solid ${results.ceilingList ? '#dc3545' : '#28a745'}`
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: results.ceilingList ? '#dc3545' : '#28a745',
                  margin: '0 0 10px 0'
                }}>
                  NAFDAC Ceiling List
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  {results.ceilingList ? 'Product found on ceiling list - Cannot be registered' : 'Product not on ceiling list'}
                </p>
              </div>

              {/* Import Prohibition List */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                borderLeft: `6px solid ${results.importProhibition ? '#dc3545' : '#28a745'}`
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: results.importProhibition ? '#dc3545' : '#28a745',
                  margin: '0 0 10px 0'
                }}>
                  Import Prohibition List
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  {results.importProhibition ? 'Product found on import prohibition list' : 'Product not on import prohibition list'}
                </p>
              </div>

              {/* 5+5 Policy */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                borderLeft: `6px solid ${results.fivePlusFive ? '#ffc107' : '#28a745'}`
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: results.fivePlusFive ? '#856404' : '#28a745',
                  margin: '0 0 10px 0'
                }}>
                  5+5 Policy List
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  {results.fivePlusFive ? 'Product on 5+5 policy - Local manufacturing only' : 'Product not affected by 5+5 policy'}
                </p>
              </div>

              {/* FDC Regulatory Directive */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                borderLeft: `6px solid ${results.fdcDirective ? '#dc3545' : '#28a745'}`
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: results.fdcDirective ? '#dc3545' : '#28a745',
                  margin: '0 0 10px 0'
                }}>
                  FDC Regulatory Directive
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  {results.fdcDirective 
                    ? `Prohibited FDC combination: ${results.fdcDirective.combination}` 
                    : 'No prohibited FDC combinations found'}
                </p>
              </div>

              {/* Narrow Therapeutic Index */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                borderLeft: `6px solid ${results.ntiCheck ? '#ffc107' : '#28a745'}`
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: results.ntiCheck ? '#856404' : '#28a745',
                  margin: '0 0 10px 0'
                }}>
                  Narrow Therapeutic Index
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  {results.ntiCheck 
                    ? `BE study required - Matched NTI drugs: ${results.matchedNTIDrugs.join(', ')}` 
                    : 'Standard BE requirements apply'}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductChecker;