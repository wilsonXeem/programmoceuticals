import React, { useState, useEffect, useRef } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { searchPlugin } from '@react-pdf-viewer/search';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import { documentAnalysisService } from '../services/documentAnalysisService';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/search/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';

const EnhancedPDFViewer = ({ fileUrl, height = '70vh', autoHighlightTerms = [] }) => {
  const [rotation, setRotation] = useState(0);
  
  // Reset rotation when fileUrl changes
  useEffect(() => {
    setRotation(0);
  }, [fileUrl]);
  
  const searchPluginInstance = searchPlugin({
    // Custom text extraction to handle multi-line searches
    onTextLayerRender: (e) => {
      // Override default text extraction behavior
      const textLayer = e.textLayer;
      if (textLayer && textLayer.textContent) {
        // Preserve line breaks in text content
        textLayer.textContent.items.forEach((item, index) => {
          if (index > 0) {
            const prevItem = textLayer.textContent.items[index - 1];
            const yDiff = Math.abs(item.transform[5] - prevItem.transform[5]);
            if (yDiff > 5) {
              item.str = '\n' + item.str;
            }
          }
        });
      }
    }
  });
  const toolbarPluginInstance = toolbarPlugin({
    moreActionsPopover: {
      render: () => <></>
    },
    downloadPlugin: {
      render: () => <></>
    },
    openPlugin: {
      render: () => <></>
    },
    switchThemePlugin: {
      render: () => <></>
    }
  });
  const fullScreenPluginInstance = fullScreenPlugin();
  const { Search } = searchPluginInstance;
  const { Toolbar } = toolbarPluginInstance;

  // Key terms to auto-highlight for pharmaceutical dossiers
  const defaultHighlightTerms = [
    'API', 'Active Pharmaceutical Ingredient', 'batch', 'lot number',
    'expiry', 'expiration', 'manufacturing date', 'shelf life',
    'stability', 'impurity', 'assay', 'dissolution', 'content uniformity',
    'GMP', 'Good Manufacturing Practice', 'specification', 'certificate',
    'analysis', 'method validation', 'reference standard', 'USP', 'BP', 'Ph.Eur'
  ];

  const highlightTerms = [...defaultHighlightTerms, ...autoHighlightTerms];



  const quickSearchTerms = [
    'product name', 'batch', 'expiry', 'API', 'strength', 'manufacturer', 'GMP'
  ];

  if (!fileUrl) {
    return (
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center', 
        color: '#666',
        border: '1px solid #ddd',
        borderRadius: '4px',
        height 
      }}>
        No PDF file to display
      </div>
    );
  }

  return (
    <div>
      <div>
        {/* Professional PDF Toolbar */}
        <div style={{
          padding: '0.25rem',
          background: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '4px',
          marginBottom: '0.25rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          minHeight: '32px'
        }}>
          <Search>
            {(renderProps) => (
              <>
                {/* Compact Search Input */}
                <div style={{ position: 'relative', minWidth: '150px', flex: '1 1 150px', maxWidth: '200px' }}>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={renderProps.keyword}
                    onChange={(e) => {
                      renderProps.setKeyword(e.target.value);
                      renderProps.search();
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') renderProps.clearKeyword();
                    }}
                    style={{ 
                      padding: '0.25rem 1.5rem 0.25rem 0.5rem', 
                      width: '100%', 
                      fontSize: '11px',
                      border: '1px solid #d1d5db',
                      borderRadius: '3px',
                      outline: 'none'
                    }}
                  />
                  {renderProps.keyword && (
                    <button
                      onClick={renderProps.clearKeyword}
                      style={{
                        position: 'absolute',
                        right: '0.5rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        fontSize: '12px',
                        cursor: 'pointer',
                        color: '#6b7280',
                        padding: '0.25rem'
                      }}
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Compact Navigation */}
                <div style={{ display: 'flex', gap: '0.125rem', alignItems: 'center' }}>
                  <button 
                    onClick={renderProps.jumpToPreviousMatch} 
                    disabled={renderProps.currentMatch <= 1}
                    style={{ 
                      padding: '0.25rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '3px',
                      cursor: renderProps.currentMatch <= 1 ? 'not-allowed' : 'pointer',
                      opacity: renderProps.currentMatch <= 1 ? 0.5 : 1,
                      fontSize: '10px',
                      background: 'white',
                      color: '#374151',
                      minWidth: '24px',
                      height: '24px'
                    }}
                  >
                    ↑
                  </button>
                  <button 
                    onClick={renderProps.jumpToNextMatch} 
                    disabled={renderProps.currentMatch >= renderProps.numberOfMatches}
                    style={{ 
                      padding: '0.25rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '3px',
                      cursor: renderProps.currentMatch >= renderProps.numberOfMatches ? 'not-allowed' : 'pointer',
                      opacity: renderProps.currentMatch >= renderProps.numberOfMatches ? 0.5 : 1,
                      fontSize: '10px',
                      background: 'white',
                      color: '#374151',
                      minWidth: '24px',
                      height: '24px'
                    }}
                  >
                    ↓
                  </button>
                </div>

                {/* Compact Results */}
                <div style={{
                  padding: '0.25rem 0.5rem',
                  background: renderProps.numberOfMatches > 0 ? '#f0f9ff' : renderProps.keyword ? '#fef2f2' : '#f9fafb',
                  border: `1px solid ${renderProps.numberOfMatches > 0 ? '#bae6fd' : renderProps.keyword ? '#fecaca' : '#e5e7eb'}`,
                  borderRadius: '3px',
                  fontSize: '10px',
                  fontWeight: '500',
                  color: renderProps.numberOfMatches > 0 ? '#0369a1' : renderProps.keyword ? '#dc2626' : '#6b7280',
                  minWidth: '60px',
                  textAlign: 'center',
                  whiteSpace: 'nowrap'
                }}>
                  {renderProps.numberOfMatches > 0 
                    ? `${renderProps.currentMatch}/${renderProps.numberOfMatches}` 
                    : renderProps.keyword ? 'None' : ''
                  }
                </div>

                {/* Compact Options */}
                <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
                  <label style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.125rem', 
                    fontSize: '9px', 
                    color: '#374151',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}>
                    <input 
                      type="checkbox" 
                      checked={renderProps.matchCase} 
                      onChange={(e) => renderProps.changeMatchCase(e.target.checked)}
                      style={{ width: '10px', height: '10px' }}
                    />
                    Aa
                  </label>
                  <label style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.125rem', 
                    fontSize: '9px', 
                    color: '#374151',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}>
                    <input 
                      type="checkbox" 
                      checked={renderProps.wholeWords} 
                      onChange={(e) => renderProps.changeWholeWords(e.target.checked)}
                      style={{ width: '10px', height: '10px' }}
                    />
                    W
                  </label>
                </div>
              </>
            )}
          </Search>
          
          {/* Compact PDF Controls */}
          <div style={{ 
            flex: '1 1 150px',
            minWidth: '150px',
            border: '1px solid #d1d5db',
            borderRadius: '3px',
            overflow: 'hidden',
            background: 'white'
          }}>
            <Toolbar>
              {(props) => {
                const {
                  CurrentPageInput,
                  GoToFirstPage,
                  GoToLastPage,
                  GoToNextPage,
                  GoToPreviousPage,
                  NumberOfPages,
                  ZoomIn,
                  ZoomOut,
                  Zoom
                } = props;
                return (
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.25rem', 
                    padding: '0.25rem',
                    fontSize: '10px'
                  }}>
                    <GoToFirstPage />
                    <GoToPreviousPage />
                    <CurrentPageInput />
                    <span>/</span>
                    <NumberOfPages />
                    <GoToNextPage />
                    <GoToLastPage />
                    <div style={{ width: '1px', height: '20px', background: '#e5e7eb', margin: '0 0.5rem' }} />
                    <ZoomOut />
                    <Zoom />
                    <ZoomIn />
                    <div style={{ width: '1px', height: '20px', background: '#e5e7eb', margin: '0 0.5rem' }} />
                    <button
                      onClick={() => setRotation((prev) => (prev - 90) % 360)}
                      style={{
                        padding: '0.25rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '3px',
                        background: 'white',
                        cursor: 'pointer',
                        fontSize: '10px',
                        minWidth: '24px',
                        height: '24px'
                      }}
                      title="Rotate Left"
                    >
                      ↶
                    </button>
                    <button
                      onClick={() => setRotation((prev) => (prev + 90) % 360)}
                      style={{
                        padding: '0.25rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '3px',
                        background: 'white',
                        cursor: 'pointer',
                        fontSize: '10px',
                        minWidth: '24px',
                        height: '24px'
                      }}
                      title="Rotate Right"
                    >
                      ↷
                    </button>
                  </div>
                );
              }}
            </Toolbar>
          </div>
        </div>
        
        {/* Professional PDF Viewer Container */}
        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          height: rotation % 180 === 90 ? 'auto' : height,
          width: rotation % 180 === 90 ? height : 'auto',
          maxWidth: '100%',
          overflow: 'auto',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          background: 'white',
          paddingBottom: '20px',
          transform: `rotate(${rotation}deg)`,
          transformOrigin: 'center center',
          transition: 'transform 0.3s ease, width 0.3s ease, height 0.3s ease',
          margin: rotation % 180 === 90 ? '2rem auto' : '0 auto'
        }}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer 
              fileUrl={fileUrl} 
              plugins={[searchPluginInstance, toolbarPluginInstance, fullScreenPluginInstance]}
              defaultScale={1.0}
            />
          </Worker>
        </div>
      </div>


    </div>
  );
};

export default EnhancedPDFViewer;