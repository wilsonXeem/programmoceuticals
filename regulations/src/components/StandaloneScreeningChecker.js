import React, { useState, useEffect } from 'react';
import { dossierService } from '../services/dossierService';
import { usePrompt } from './PromptProvider';

const StandaloneScreeningChecker = () => {
  const [dossier, setDossier] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [dossierType, setDossierType] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const prompt = usePrompt();

  const flattenFiles = (node, basePath = '') => {
    let files = [];
    if (node.type === 'file') {
      files.push({
        path: node.path,
        name: node.name,
        size: node.size || 0,
        fullPath: basePath + '/' + node.name
      });
    }
    if (node.children) {
      node.children.forEach(child => {
        const childPath = basePath + (node.name ? '/' + node.name : '');
        files = files.concat(flattenFiles(child, childPath));
      });
    }
    return files;
  };

  const detectDossierType = (files) => {
    const hasModuleFolders = files.some(file => 
      /module\s*[1-5]/i.test(file.fullPath)
    );
    
    const hasStructuredFolders = files.some(file => 
      /3\.2\.[PSR]/i.test(file.fullPath)
    );

    if (hasModuleFolders && !hasStructuredFolders) {
      return 'consolidated';
    } else if (hasStructuredFolders) {
      return 'structured';
    } else {
      return 'mixed';
    }
  };

  const checkScreeningItems = (files, type) => {
    const checks = {
      modules: checkModules(files, type),
      qosWord: checkQOSWord(files),
      qisWord: checkQISWord(files),
      btifWord: checkBTIFWord(files),
      beData: checkBEData(files, type),
      specifications: checkSpecifications(files),
      manufacturingInfo: checkManufacturingInfo(files)
    };

    return checks;
  };

  const checkModules = (files, type) => {
    if (type === 'consolidated') {
      const modules = [1, 2, 3, 4, 5];
      const found = modules.filter(num => 
        files.some(file => 
          file.fullPath.toLowerCase().includes(`module ${num}`) || 
          file.fullPath.toLowerCase().includes(`module${num}`)
        )
      );
      return {
        status: found.length === 5 ? 'complete' : 'incomplete',
        found: found.length,
        required: 5,
        missing: modules.filter(num => !found.includes(num)),
        details: `Found ${found.length}/5 CTD modules`
      };
    } else {
      // For structured dossiers, run full checklist check
      const checkResults = runFullChecklist(files);
      const foundFiles = checkResults.filter(r => r.status === 'found').length;
      const totalFiles = checkResults.length;
      
      return {
        status: foundFiles === totalFiles ? 'complete' : foundFiles >= totalFiles * 0.8 ? 'mostly-complete' : 'incomplete',
        found: foundFiles,
        required: totalFiles,
        missing: checkResults.filter(r => r.status === 'missing').map(r => r.description),
        details: `Found ${foundFiles}/${totalFiles} required files`
      };
    }
  };

  const runFullChecklist = (files) => {
    const DOSSIER_CHECKLIST = [
      { path: "Module 1/1.0 Cover Letter/Cover Letter.pdf", desc: "Cover Letter" },
      { path: "Module 1/1.1 Table of Contents/Table of Contents.pdf", desc: "Table of Contents" },
      { path: "Module 1/1.2 Application Information/1.2.1 Application Letter/Application Letter.pdf", desc: "Application Letter" },
      { path: "Module 2/2.3 Quality Overall Summary/QOS.pdf", desc: "Quality Overall Summary (QOS)" },
      { path: "Module 3/3.2 Body of Data/3.2.P Drug Product/3.2.P.5 Control of Drug Product/3.2.P.5.1 Specifications.pdf", desc: "Product Specifications" },
      { path: "Module 5/5.3 Clinical Study Reports/5.3.1.2 Comparative BA and BE/Comparative BA and BE Study Reports.pdf", desc: "BE Study Reports" }
    ];
    
    return DOSSIER_CHECKLIST.map(item => {
      const found = files.some(file => {
        const filePath = file.fullPath.toLowerCase();
        const expectedPath = item.path.toLowerCase();
        return filePath.includes(expectedPath.split('/').pop().replace('.pdf', '')) ||
               calculateSimilarity(filePath, expectedPath) > 0.6;
      });
      
      return {
        path: item.path,
        description: item.desc,
        status: found ? 'found' : 'missing'
      };
    });
  };

  const calculateSimilarity = (str1, str2) => {
    const s1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    const s2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if (s1 === s2) return 1.0;
    if (s1.length === 0 || s2.length === 0) return 0;
    
    const matrix = [];
    for (let i = 0; i <= s2.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= s1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= s2.length; i++) {
      for (let j = 1; j <= s1.length; j++) {
        if (s2.charAt(i - 1) === s1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    
    const maxLen = Math.max(s1.length, s2.length);
    return (maxLen - matrix[s2.length][s1.length]) / maxLen;
  };

  const checkQOSWord = (files) => {
    const qosFiles = files.filter(file => {
      const path = file.fullPath.toLowerCase();
      const name = file.name.toLowerCase();
      const isWordDoc = name.endsWith('.doc') || name.endsWith('.docx');
      const inModule2 = path.includes('module 2');
      const hasQOS = name.includes('qos') || 
                     name.includes('quality overall summary') ||
                     (name.includes('quality') && name.includes('overall') && name.includes('summary'));
      return inModule2 && isWordDoc && hasQOS;
    });

    return {
      status: qosFiles.length > 0 ? 'found' : 'missing',
      files: qosFiles,
      details: qosFiles.length > 0 
        ? `Found QOS Word document: ${qosFiles[0].name}`
        : 'QOS Word document not found in Module 2'
    };
  };

  const checkQISWord = (files) => {
    const qisFiles = files.filter(file => {
      const path = file.fullPath.toLowerCase();
      const name = file.name.toLowerCase();
      const isWordDoc = name.endsWith('.doc') || name.endsWith('.docx');
      const inModule1 = path.includes('module 1');
      const hasQIS = name.includes('qis') || name.includes('quality information summary');
      return inModule1 && isWordDoc && hasQIS;
    });

    return {
      status: qisFiles.length > 0 ? 'found' : 'missing',
      files: qisFiles,
      details: qisFiles.length > 0 
        ? `Found QIS Word document: ${qisFiles[0].name}`
        : 'QIS Word document not found in Module 1'
    };
  };

  const checkBTIFWord = (files) => {
    const btifFiles = files.filter(file => {
      const path = file.fullPath.toLowerCase();
      const name = file.name.toLowerCase();
      const isWordDoc = name.endsWith('.doc') || name.endsWith('.docx');
      const inModule1 = path.includes('module 1');
      const hasBTIF = name.includes('btif') || 
                     name.includes('bioequivalence technical information') ||
                     name.includes('biowaiver technical information') ||
                     (name.includes('bioequivalence') && name.includes('technical')) ||
                     (name.includes('biowaiver') && name.includes('technical'));
      return isWordDoc && inModule1 && hasBTIF;
    });

    return {
      status: btifFiles.length > 0 ? 'found' : 'missing',
      files: btifFiles,
      details: btifFiles.length > 0 
        ? `Found BTIF Word document: ${btifFiles[0].name}`
        : 'BTIF Word document not found in Module 1'
    };
  };

  const checkBEData = (files, type) => {
    const beFiles = files.filter(file => {
      const path = file.fullPath.toLowerCase();
      const isPdf = file.name.toLowerCase().endsWith('.pdf');
      const inModule5 = path.includes('module 5');
      const hasBeSection = type === 'consolidated' ? inModule5 : (inModule5 && path.includes('5.3'));
      return isPdf && hasBeSection;
    });

    return {
      status: beFiles.length > 0 ? 'found' : 'missing',
      files: beFiles,
      details: beFiles.length > 0 
        ? `Found ${beFiles.length} BE/BW data file(s) in Module 5`
        : `No BE/BW data found in Module 5${type === 'structured' ? '.3' : ''}`
    };
  };

  const checkSpecifications = (files) => {
    const specFiles = files.filter(file => {
      const path = file.fullPath.toLowerCase();
      const isPdf = file.name.toLowerCase().endsWith('.pdf');
      const hasSpec = (path.includes('module 3') && path.includes('3.2.p.5.1')) ||
                     path.includes('specification');
      return isPdf && hasSpec;
    });

    return {
      status: specFiles.length > 0 ? 'found' : 'missing',
      files: specFiles,
      details: specFiles.length > 0 
        ? `Found ${specFiles.length} specification file(s)`
        : 'Product specifications not found in Module 3.2.P.5.1'
    };
  };

  const checkManufacturingInfo = (files) => {
    const mfgFiles = files.filter(file => {
      const path = file.fullPath.toLowerCase();
      const isPdf = file.name.toLowerCase().endsWith('.pdf');
      const hasMfg = (path.includes('module 3') && path.includes('3.2.p.3.1')) ||
                    (path.includes('module 1') && path.includes('1.3.1')) ||
                    path.includes('manufacturing');
      return isPdf && hasMfg;
    });

    return {
      status: mfgFiles.length > 0 ? 'found' : 'missing',
      files: mfgFiles,
      details: mfgFiles.length > 0 
        ? `Found ${mfgFiles.length} manufacturing info file(s)`
        : 'Manufacturing information not found'
    };
  };

  const processFile = async (file) => {
    setLoading(true);
    setResults(null);

    try {
      const dossierData = await dossierService.parseZipFile(file);
      setDossier(dossierData);
      
      const allFiles = flattenFiles(dossierData.root);
      const type = detectDossierType(allFiles);
      setDossierType(type);
      
      const checkResults = checkScreeningItems(allFiles, type);
      setResults(checkResults);
    } catch (error) {
      console.error('Error processing dossier:', error);
      prompt.alert("Error processing dossier. Please ensure it's a valid ZIP file.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    await processFile(file);
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    setDragOver(false);
    const file = event.dataTransfer.files[0];
    if (file && file.name.endsWith('.zip')) {
      await processFile(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const getOverallStatus = () => {
    if (!results) return null;
    
    const criticalItems = [
      results.modules.status === 'complete',
      results.qosWord.status === 'found',
      results.qisWord.status === 'found',
      results.btifWord.status === 'found',
      results.beData.status === 'found'
    ];
    
    const passedCritical = criticalItems.filter(Boolean).length;
    const totalCritical = criticalItems.length;
    
    if (passedCritical === totalCritical) return 'ready';
    if (passedCritical >= totalCritical * 0.8) return 'mostly-ready';
    return 'needs-work';
  };

  return (
    <div className="container">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '2rem',
        padding: '1rem',
        background: '#2c3e50',
        borderRadius: '8px',
        color: 'white'
      }}>
        <img src="/logo.png" alt="ProgrammoCeuticals Logo" style={{ width: '40px', height: '40px' }} />
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>ProgrammoCeuticals</h1>
      </div>
      <div className="card">
        <h2>📋 NAFDAC Dossier Screening Checker</h2>
        <p>Check your dossier completeness before NAFDAC submission</p>

        <div style={{ marginBottom: '2rem' }}>
          <div 
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            style={{
              background: dragOver ? '#e3f2fd' : '#f8f9fa',
              padding: '1.5rem',
              borderRadius: '8px',
              border: `2px dashed ${dragOver ? '#3498db' : '#dee2e6'}`,
              textAlign: 'center',
              marginBottom: '1rem',
              transition: 'all 0.2s ease'
            }}>
            <input
              type="file"
              accept=".zip"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
              id="dossier-upload"
            />
            <label
              htmlFor="dossier-upload"
              className="standalone-button"
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                fontSize: '1rem',
                fontWeight: 'bold',
                background: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              📁 Upload Dossier ZIP File
            </label>
            <p style={{ marginTop: '1rem', color: '#666', fontSize: '0.9rem' }}>
              {dragOver ? 'Drop ZIP file here' : 'Upload your complete dossier as a ZIP file or drag & drop here'}
            </p>
          </div>

          {loading && (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>🔍 Analyzing dossier...</div>
              <div style={{
                width: '100%',
                height: '6px',
                background: '#e9ecef',
                borderRadius: '3px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  animation: 'loading 1.5s ease-in-out infinite'
                }}></div>
              </div>
            </div>
          )}

          {results && (
            <div>
              <div className="standalone-status" style={{
                padding: '1.5rem',
                borderRadius: '12px',
                background: getOverallStatus() === 'ready' ? '#28a745' : 
                           getOverallStatus() === 'mostly-ready' ? '#ffc107' : '#dc3545',
                color: 'white',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>
                  {getOverallStatus() === 'ready' ? '✅ Dossier Ready for Submission' :
                   getOverallStatus() === 'mostly-ready' ? '⚠️ Dossier Mostly Ready' :
                   '❌ Dossier Needs Attention'}
                </h3>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>
                  Detected Type: <strong>{dossierType?.toUpperCase()}</strong> dossier
                </p>
              </div>

              <div style={{ display: 'grid', gap: '1rem' }}>
                {/* Module Structure */}
                <div className="standalone-result-card" style={{
                  padding: '1rem',
                  border: '2px solid',
                  borderColor: results.modules.status === 'complete' ? '#28a745' : '#dc3545',
                  borderRadius: '8px',
                  background: results.modules.status === 'complete' ? '#f8fff8' : '#fff5f5'
                }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: results.modules.status === 'complete' ? '#28a745' : '#dc3545' }}>
                    {results.modules.status === 'complete' ? '✅' : '❌'} Module Structure
                  </h4>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
                    {results.modules.status === 'complete' ? 'All required modules found' : results.modules.details}
                  </p>
                  {results.modules.missing.length > 0 && (
                    <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#dc3545' }}>
                      Missing: {results.modules.missing.join(', ')}
                    </div>
                  )}
                </div>

                <div style={{
                  padding: '1rem',
                  border: '2px solid',
                  borderColor: results.qosWord.status === 'found' ? '#28a745' : '#dc3545',
                  borderRadius: '8px',
                  background: results.qosWord.status === 'found' ? '#f8fff8' : '#fff5f5'
                }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: results.qosWord.status === 'found' ? '#28a745' : '#dc3545' }}>
                    {results.qosWord.status === 'found' ? '✅' : '❌'} QOS Word Document
                  </h4>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
                    {results.qosWord.details}
                  </p>
                </div>

                <div style={{
                  padding: '1rem',
                  border: '2px solid',
                  borderColor: results.qisWord.status === 'found' ? '#28a745' : '#dc3545',
                  borderRadius: '8px',
                  background: results.qisWord.status === 'found' ? '#f8fff8' : '#fff5f5'
                }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: results.qisWord.status === 'found' ? '#28a745' : '#dc3545' }}>
                    {results.qisWord.status === 'found' ? '✅' : '❌'} QIS Word Document
                  </h4>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
                    {results.qisWord.details}
                  </p>
                </div>

                <div style={{
                  padding: '1rem',
                  border: '2px solid',
                  borderColor: results.btifWord.status === 'found' ? '#28a745' : '#dc3545',
                  borderRadius: '8px',
                  background: results.btifWord.status === 'found' ? '#f8fff8' : '#fff5f5'
                }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: results.btifWord.status === 'found' ? '#28a745' : '#dc3545' }}>
                    {results.btifWord.status === 'found' ? '✅' : '❌'} BTIF Word Document
                  </h4>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
                    {results.btifWord.details}
                  </p>
                </div>

                <div style={{
                  padding: '1rem',
                  border: '2px solid',
                  borderColor: results.beData.status === 'found' ? '#28a745' : '#dc3545',
                  borderRadius: '8px',
                  background: results.beData.status === 'found' ? '#f8fff8' : '#fff5f5'
                }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: results.beData.status === 'found' ? '#28a745' : '#dc3545' }}>
                    {results.beData.status === 'found' ? '✅' : '❌'} BE/BW Data
                  </h4>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
                    {results.beData.details}
                  </p>
                </div>

                <div style={{
                  padding: '1rem',
                  border: '2px solid',
                  borderColor: results.specifications.status === 'found' ? '#28a745' : '#dc3545',
                  borderRadius: '8px',
                  background: results.specifications.status === 'found' ? '#f8fff8' : '#fff5f5'
                }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: results.specifications.status === 'found' ? '#28a745' : '#dc3545' }}>
                    {results.specifications.status === 'found' ? '✅' : '❌'} Product Specifications
                  </h4>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
                    {results.specifications.details}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div style={{
          marginTop: '2rem',
          textAlign: 'center',
          padding: '1rem',
          borderTop: '1px solid #e9ecef',
          color: '#6c757d',
          fontSize: '0.9rem'
        }}>
          Developed by Wilson Zimthamaha (ProgrammoCeuticals)
        </div>
      </div>
    </div>
  );
};

export default StandaloneScreeningChecker;
