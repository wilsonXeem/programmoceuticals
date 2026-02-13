# NAFDAC CTD Tree-Based Compilation System - Development Plan

## Project Vision

A **straightforward, tree-based CTD compilation system** that mirrors the actual NAFDAC CTD structure, allowing users to navigate through modules/subsections and upload files directly to each section with localStorage persistence and organized ZIP export.

### Core User Flow
**Login → Select API Submission Type → Navigate CTD Tree → Upload Files → View Guidelines → Export ZIP**

---

## System Architecture Overview

### Frontend-Focused Approach
- **Primary Storage**: localStorage (with persistence across sessions)
- **File Management**: Base64 encoding for file storage
- **Tree Navigation**: Collapsible tree structure matching NAFDAC CTD
- **Guidelines Integration**: Contextual NAFDAC requirements display
- **Export System**: Organized ZIP following exact NAFDAC folder structure

---

## API Submission Types (from nafdac-mapping.md)

### Option 1: API Prequalification Document
- Complete copy of prequalification document
- Additional data: general properties, sterilization, polymorphs, batch analysis

### Option 2: Certificate of Suitability (CEP)
- Complete CEP copy with annexes
- Letter of access from CEP holder
- Additional specifications and batch analysis

### Option 3: Active Pharmaceutical Ingredient Master File (APIMF)
- Open part (non-proprietary) included in dossier
- Letter of access required
- Complete sections S.1.1-S.1.3, S.2, S.3.1-S.3.2, S.4.1-S.4.5, S.5-S.7

### Option 4: Full Details in Product Dossier
- Complete API information including manufacturing, characterization, control
- All sections from S.1 through S.7 with full details

---

## Phase 1: Core Structure & Navigation (Week 1)

### 1.1 Application Type Selection Component
```javascript
const API_SUBMISSION_OPTIONS = {
  option1: {
    id: 'prequalification',
    title: 'API Prequalification Document',
    description: 'Complete copy of prequalification document with additional data'
  },
  option2: {
    id: 'cep',
    title: 'Certificate of Suitability (CEP)',
    description: 'CEP with letter of access and additional specifications'
  },
  option3: {
    id: 'apimf',
    title: 'Active Pharmaceutical Ingredient Master File (APIMF)',
    description: 'APIMF open part with letter of access'
  },
  option4: {
    id: 'fullDetails',
    title: 'Full Details in Product Dossier',
    description: 'Complete API information in dossier'
  }
};
```

### 1.2 Dynamic CTD Tree Structure Generator
```javascript
const generateCTDStructure = (apiOption, productType) => {
  return {
    "Module_1": {
      id: "module1",
      title: "Administrative & Product Information",
      required: true,
      children: {
        "1.0": {
          id: "1.0",
          title: "Cover Letter",
          required: true,
          files: [],
          guidelines: "Cover letter with application details, NMRA number, product info"
        },
        "1.1": {
          id: "1.1", 
          title: "Table of Contents (Modules 1-5)",
          required: true,
          files: [],
          guidelines: "Complete table of contents for entire dossier"
        },
        "1.2": {
          id: "1.2",
          title: "Application Information",
          required: true,
          children: {
            "1.2.1": {
              id: "1.2.1",
              title: "Application Letter",
              required: true,
              files: [],
              guidelines: "Formal application letter to NAFDAC"
            },
            "1.2.15": {
              id: "1.2.15",
              title: "CEP Certificate",
              required: apiOption === 'option2',
              files: [],
              guidelines: "Complete CEP copy including annexes (if applicable)"
            },
            "1.2.16": {
              id: "1.2.16", 
              title: "APIMF Letter of Access",
              required: apiOption === 'option3',
              files: [],
              guidelines: "Letter of access from APIMF holder (if applicable)"
            }
            // ... continue for all 18 subsections
          }
        }
        // ... continue for all Module 1 sections
      }
    },
    "Module_2": {
      // CTD Summaries structure
    },
    "Module_3": {
      // Quality module with dynamic API sections based on option
    },
    "Module_4": {
      // Non-clinical (not required for generics)
      required: productType !== 'generic'
    },
    "Module_5": {
      // Clinical/Bioequivalence
    }
  };
};
```

### 1.3 Tree Navigation Component
```jsx
const CTDTreeNode = ({ nodeId, nodeData, level = 0, onFileUpload, onNodeSelect }) => {
  const [isExpanded, setIsExpanded] = useState(level < 2);
  const [files, setFiles] = useState(nodeData.files || []);
  
  const hasChildren = nodeData.children && Object.keys(nodeData.children).length > 0;
  const fileCount = files.length;
  const isComplete = nodeData.required ? fileCount > 0 : true;

  return (
    <div className={`tree-node level-${level}`}>
      <div 
        className={`node-header ${isComplete ? 'complete' : 'incomplete'}`}
        onClick={() => onNodeSelect(nodeId, nodeData)}
      >
        {hasChildren && (
          <button 
            className={`expand-btn ${isExpanded ? 'expanded' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            ▶
          </button>
        )}
        
        <span className="node-title">{nodeData.title}</span>
        
        {nodeData.required && <span className="required-badge">*</span>}
        
        <div className="node-status">
          <span className={`file-count ${fileCount > 0 ? 'has-files' : ''}`}>
            📁 {fileCount}
          </span>
          <span className={`status-icon ${isComplete ? 'complete' : 'incomplete'}`}>
            {isComplete ? '✅' : '⏳'}
          </span>
        </div>
      </div>

      {isExpanded && hasChildren && (
        <div className="node-children">
          {Object.entries(nodeData.children).map(([childId, childData]) => (
            <CTDTreeNode
              key={childId}
              nodeId={childId}
              nodeData={childData}
              level={level + 1}
              onFileUpload={onFileUpload}
              onNodeSelect={onNodeSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};
```

---

## Phase 2: File Management & Persistence (Week 2)

### 2.1 LocalStorage File System
```javascript
class DossierFileManager {
  constructor() {
    this.storageKey = 'nafdac_dossier_files';
    this.metadataKey = 'nafdac_dossier_metadata';
  }

  async storeFile(moduleId, file) {
    const fileId = this.generateFileId();
    const fileData = {
      id: fileId,
      moduleId,
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      uploadedAt: new Date().toISOString(),
      data: await this.fileToBase64(file)
    };

    const existingFiles = this.getFiles();
    existingFiles.push(fileData);
    localStorage.setItem(this.storageKey, JSON.stringify(existingFiles));
    
    this.updateMetadata(moduleId, fileId);
    return fileId;
  }

  getFiles(moduleId = null) {
    const files = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    return moduleId ? files.filter(f => f.moduleId === moduleId) : files;
  }

  deleteFile(fileId) {
    const files = this.getFiles().filter(f => f.id !== fileId);
    localStorage.setItem(this.storageKey, JSON.stringify(files));
  }

  async fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  base64ToBlob(base64Data, contentType) {
    const byteCharacters = atob(base64Data.split(',')[1]);
    const byteArrays = [];
    
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      
      byteArrays.push(new Uint8Array(byteNumbers));
    }
    
    return new Blob(byteArrays, {type: contentType});
  }
}
```

### 2.2 File Upload Component
```jsx
const FileUploadZone = ({ moduleId, onFilesUploaded }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileManager = new DossierFileManager();

  const handleFileUpload = async (files) => {
    setUploading(true);
    const uploadedFiles = [];
    
    for (const file of files) {
      const fileId = await fileManager.storeFile(moduleId, file);
      uploadedFiles.push({ id: fileId, name: file.name, size: file.size });
    }
    
    onFilesUploaded(uploadedFiles);
    setUploading(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    handleFileUpload(files);
  };

  return (
    <div 
      className={`upload-zone ${isDragOver ? 'drag-over' : ''}`}
      onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={handleDrop}
    >
      {uploading ? (
        <div className="upload-progress">📤 Uploading files...</div>
      ) : (
        <>
          <div className="upload-icon">📁</div>
          <div className="upload-text">
            Drop files here or <button className="upload-btn">Browse</button>
          </div>
          <div className="upload-hint">
            Supported: PDF, DOC, DOCX, JPG, PNG (Max 50MB per file)
          </div>
        </>
      )}
    </div>
  );
};
```

---

## Phase 3: Guidelines Integration (Week 3)

### 3.1 NAFDAC Guidelines Database
```javascript
const NAFDAC_GUIDELINES = {
  "1.0": {
    title: "Cover Letter",
    description: "A cover letter should accompany any data being submitted to the regulatory authority.",
    requirements: [
      "Application type (new, renewal, variation)",
      "NMRA application number (issued by NAFDAC)",
      "Date of regulatory authorization if applicable",
      "Brand name, DCI, dosage, presentation, dosage form",
      "Manufacturer's name and applicant's name",
      "Number of samples submitted"
    ],
    format: "PDF",
    mandatory: true
  },
  
  "1.2.15": {
    title: "CEP Certificate",
    description: "Copy of Certificate of Suitability of the European Pharmacopoeia",
    requirements: [
      "Complete copy of CEP including any annexes",
      "Declaration of access duly filled by CEP holder",
      "Written commitment to inform NAFDAC if CEP is withdrawn"
    ],
    applicableWhen: "option2",
    format: "PDF",
    mandatory: true
  },

  "1.2.16": {
    title: "APIMF Letter of Access", 
    description: "Letter of Access for Active Pharmaceutical Ingredient Master File",
    requirements: [
      "Letter of access from APIMF holder",
      "Authorization for FPP manufacturer to reference APIMF",
      "Confirmation of current manufacture information access"
    ],
    applicableWhen: "option3",
    format: "PDF", 
    mandatory: true
  },

  "3.2.S.1.1": {
    title: "Nomenclature",
    description: "Information on the nomenclature of the drug substance should be provided",
    requirements: [
      "Recommended International Non-proprietary Name (INN)",
      "Compendial name if relevant",
      "Chemical name(s)",
      "Company or laboratory code",
      "CAS registry number"
    ],
    applicableWhen: "option4",
    format: "PDF",
    mandatory: true
  }
  
  // ... continue for all sections from nafdac-mapping.md
};
```

### 3.2 Guidelines Display Component
```jsx
const GuidelinesPanel = ({ sectionId, apiOption }) => {
  const guidelines = NAFDAC_GUIDELINES[sectionId];
  
  if (!guidelines) return null;
  
  // Check if section is applicable for current API option
  if (guidelines.applicableWhen && guidelines.applicableWhen !== apiOption) {
    return (
      <div className="guidelines-panel not-applicable">
        <h3>📋 Section Not Applicable</h3>
        <p>This section is not required for your selected API submission type.</p>
      </div>
    );
  }

  return (
    <div className="guidelines-panel">
      <div className="guidelines-header">
        <h3>📋 NAFDAC Requirements</h3>
        {guidelines.mandatory && <span className="mandatory-badge">MANDATORY</span>}
      </div>
      
      <div className="guidelines-content">
        <p className="description">{guidelines.description}</p>
        
        <div className="requirements-section">
          <h4>Required Information:</h4>
          <ul className="requirements-list">
            {guidelines.requirements.map((req, index) => (
              <li key={index}>✓ {req}</li>
            ))}
          </ul>
        </div>
        
        {guidelines.format && (
          <div className="format-info">
            <strong>Format:</strong> {guidelines.format}
          </div>
        )}
      </div>
    </div>
  );
};
```

---

## Phase 4: Export System (Week 4)

### 4.1 NAFDAC Folder Structure Mapping
```javascript
const NAFDAC_FOLDER_STRUCTURE = {
  "1.0": "Module_1_Administrative_Product_Information/1.0_Cover_Letter",
  "1.1": "Module_1_Administrative_Product_Information/1.1_Table_of_Contents",
  "1.2.1": "Module_1_Administrative_Product_Information/1.2_Application_Information/1.2.1_Application_Letter",
  "1.2.2": "Module_1_Administrative_Product_Information/1.2_Application_Information/1.2.2_Registration_Form",
  "1.2.15": "Module_1_Administrative_Product_Information/1.2_Application_Information/1.2.15_CEP_Certificate",
  "1.2.16": "Module_1_Administrative_Product_Information/1.2_Application_Information/1.2.16_APIMF_Letter_of_Access",
  "1.3.1": "Module_1_Administrative_Product_Information/1.3_Product_Information/1.3.1_SmPC",
  "1.3.2": "Module_1_Administrative_Product_Information/1.3_Product_Information/1.3.2_Labelling",
  "1.3.3": "Module_1_Administrative_Product_Information/1.3_Product_Information/1.3.3_PIL",
  "1.4.1": "Module_1_Administrative_Product_Information/1.4_Regional_Summaries/1.4.1_BTIF",
  "1.4.2": "Module_1_Administrative_Product_Information/1.4_Regional_Summaries/1.4.2_QIS",
  
  "2.1": "Module_2_CTD_Summaries/2.1_CTD_Table_of_Contents",
  "2.2": "Module_2_CTD_Summaries/2.2_CTD_Introduction", 
  "2.3": "Module_2_CTD_Summaries/2.3_Quality_Overall_Summary",
  
  "3.1": "Module_3_Quality/3.1_Table_of_Contents",
  "3.2.S.1.1": "Module_3_Quality/3.2.S_Drug_Substance/3.2.S.1_General_Information/3.2.S.1.1_Nomenclature",
  "3.2.P.1": "Module_3_Quality/3.2.P_Drug_Product/3.2.P.1_Description_and_Composition",
  
  "5.3.1.2": "Module_5_Clinical/5.3_Clinical_Study_Reports/5.3.1_Biopharmaceutical_Studies/5.3.1.2_Bioequivalence_Studies"
  
  // ... complete mapping for all sections
};
```

### 4.2 ZIP Export System
```javascript
class DossierExporter {
  constructor() {
    this.fileManager = new DossierFileManager();
  }

  async exportDossier(productName, apiOption) {
    const zip = new JSZip();
    const files = this.fileManager.getFiles();
    
    // Create folder structure
    const folderStructure = this.createFolderStructure(apiOption);
    
    // Add files to appropriate folders
    for (const file of files) {
      const folderPath = NAFDAC_FOLDER_STRUCTURE[file.moduleId];
      if (folderPath) {
        const fileBlob = this.fileManager.base64ToBlob(file.data, file.type);
        zip.file(`${folderPath}/${file.name}`, fileBlob);
      }
    }
    
    // Generate master table of contents
    const tocContent = this.generateTableOfContents(files, apiOption);
    zip.file("Module_1_Administrative_Product_Information/1.1_Table_of_Contents/Master_TOC.pdf", tocContent);
    
    // Create ZIP and download
    const zipBlob = await zip.generateAsync({
      type: "blob",
      compression: "DEFLATE",
      compressionOptions: { level: 6 }
    });
    
    const fileName = `NAFDAC_CTD_${productName.replace(/[^a-zA-Z0-9]/g, '_')}_${new Date().toISOString().split('T')[0]}.zip`;
    this.downloadBlob(zipBlob, fileName);
    
    return fileName;
  }

  createFolderStructure(apiOption) {
    // Create empty folder structure based on API option
    const folders = new Set();
    
    Object.values(NAFDAC_FOLDER_STRUCTURE).forEach(path => {
      const pathParts = path.split('/');
      for (let i = 1; i <= pathParts.length; i++) {
        folders.add(pathParts.slice(0, i).join('/'));
      }
    });
    
    return Array.from(folders);
  }

  downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
```

---

## Main Application Component Structure

### App.js - Main Application
```jsx
const App = () => {
  const [currentStep, setCurrentStep] = useState('selection'); // selection, compilation, export
  const [apiOption, setApiOption] = useState(null);
  const [productType, setProductType] = useState('generic');
  const [ctdStructure, setCTDStructure] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    if (apiOption && productType) {
      const structure = generateCTDStructure(apiOption, productType);
      setCTDStructure(structure);
      setCurrentStep('compilation');
    }
  }, [apiOption, productType]);

  return (
    <div className="app">
      <Header />
      
      {currentStep === 'selection' && (
        <ApplicationTypeSelector 
          onSelect={(option, type) => {
            setApiOption(option);
            setProductType(type);
          }}
        />
      )}
      
      {currentStep === 'compilation' && ctdStructure && (
        <div className="compilation-workspace">
          <div className="tree-panel">
            <CTDTreeView 
              structure={ctdStructure}
              onNodeSelect={setSelectedNode}
            />
          </div>
          
          <div className="content-panel">
            {selectedNode && (
              <>
                <FileUploadSection nodeId={selectedNode.id} />
                <GuidelinesPanel 
                  sectionId={selectedNode.id} 
                  apiOption={apiOption}
                />
              </>
            )}
          </div>
          
          <div className="export-panel">
            <ExportManager 
              apiOption={apiOption}
              onExport={() => setCurrentStep('export')}
            />
          </div>
        </div>
      )}
    </div>
  );
};
```

---

## Key Features Summary

### ✅ Tree-Based Navigation
- Collapsible tree structure matching exact NAFDAC CTD format
- Visual indicators for completion status and file counts
- Dynamic structure based on API submission type

### ✅ Direct File Upload
- Drag & drop file upload to any section
- localStorage persistence (survives refresh/restart)
- File validation and size limits

### ✅ Integrated Guidelines
- Contextual NAFDAC requirements for each section
- Extracted directly from nafdac-mapping.md
- Conditional display based on API submission type

### ✅ Organized Export
- ZIP export with exact NAFDAC folder structure
- Automatic file organization by section
- Master table of contents generation

### ✅ Progress Tracking
- Visual completion indicators
- File count displays
- Overall dossier progress

---

## Implementation Timeline

- **Week 1**: Core structure, tree navigation, API type selection
- **Week 2**: File management, localStorage system, upload components  
- **Week 3**: Guidelines integration, contextual help system
- **Week 4**: Export system, ZIP generation, final testing

## Next Steps

Ready to start implementation with the tree navigation component and API type selection interface.
```

---

## Phase 3: Complete CTD Structure & ZIP Export (Week 3)

### 3.1 Complete NAFDAC CTD Structure
```javascript
const COMPLETE_CTD_STRUCTURE = {
  "Module_1": {
    id: "module1", title: "Administrative & Product Information", required: true,
    children: {
      "1.0": { id: "1.0", title: "Cover Letter", required: true, files: [], guidelines: "Cover letter with application details" },
      "1.1": { id: "1.1", title: "Table of Contents", required: true, files: [], guidelines: "Complete table of contents" },
      "1.2": {
        id: "1.2", title: "Application Information", required: true,
        children: {
          "1.2.1": { id: "1.2.1", title: "Application Letter", required: true, files: [], guidelines: "Formal application letter" },
          "1.2.15": { id: "1.2.15", title: "CEP Certificate", required: false, files: [], guidelines: "CEP if applicable" },
          "1.2.16": { id: "1.2.16", title: "APIMF Letter of Access", required: false, files: [], guidelines: "APIMF access letter" }
        }
      }
    }
  },
  "Module_2": {
    id: "module2", title: "CTD Summaries", required: true,
    children: {
      "2.3": { id: "2.3", title: "Quality Overall Summary", required: true, files: [], guidelines: "Comprehensive quality summary" },
      "2.5": { id: "2.5", title: "Clinical Overview", required: true, files: [], guidelines: "Clinical overview with BE rationale" }
    }
  },
  "Module_3": {
    id: "module3", title: "Quality", required: true,
    children: {
      "S": {
        id: "S", title: "Drug Substance (API)", required: true,
        children: {
          "S.1.1": { id: "S.1.1", title: "Nomenclature", required: true, files: [], guidelines: "Complete nomenclature" },
          "S.4.1": { id: "S.4.1", title: "Specification", required: true, files: [], guidelines: "API specification" },
          "S.7": { id: "S.7", title: "Stability", required: true, files: [], guidelines: "API stability data" }
        }
      },
      "P": {
        id: "P", title: "Drug Product", required: true,
        children: {
          "P.1": { id: "P.1", title: "Description and Composition", required: true, files: [], guidelines: "Product composition" },
          "P.2": { id: "P.2", title: "Pharmaceutical Development", required: true, files: [], guidelines: "Formulation development" },
          "P.5": { id: "P.5", title: "Control of Drug Product", required: true, files: [], guidelines: "Product specification" },
          "P.8": { id: "P.8", title: "Stability", required: true, files: [], guidelines: "Product stability" }
        }
      }
    }
  },
  "Module_5": {
    id: "module5", title: "Clinical Study Reports", required: true,
    children: {
      "5.3.1.2": { id: "5.3.1.2", title: "Bioequivalence Study Reports", required: true, files: [], guidelines: "BE study reports" },
      "5.3.1.4": { id: "5.3.1.4", title: "Bioanalytical Method Reports", required: true, files: [], guidelines: "Method validation" }
    }
  }
};
```

### 3.2 ZIP Export System
```javascript
class NAFDACZipExporter {
  constructor(fileManager) {
    this.fileManager = fileManager;
  }

  async generateDossierZip(ctdStructure, productName) {
    const zip = new JSZip();
    const timestamp = new Date().toISOString().split('T')[0];
    const zipName = `${productName}_NAFDAC_Dossier_${timestamp}.zip`;

    await this.createFolderStructure(zip, ctdStructure, '');
    await this.addFilesToZip(zip, ctdStructure);
    
    const content = await zip.generateAsync({type: 'blob'});
    this.downloadZip(content, zipName);
  }

  async createFolderStructure(zip, structure, basePath) {
    for (const [key, value] of Object.entries(structure)) {
      if (value.children) {
        const folderPath = basePath ? `${basePath}/${key}` : key;
        zip.folder(folderPath);
        await this.createFolderStructure(zip, value.children, folderPath);
      }
    }
  }

  async addFilesToZip(zip, structure, basePath = '') {
    for (const [key, value] of Object.entries(structure)) {
      const currentPath = basePath ? `${basePath}/${key}` : key;
      
      if (value.files && value.files.length > 0) {
        const files = this.fileManager.getFiles(value.id);
        for (const file of files) {
          const blob = this.fileManager.base64ToBlob(file.data, file.type);
          zip.file(`${currentPath}/${file.name}`, blob);
        }
      }
      
      if (value.children) {
        await this.addFilesToZip(zip, value.children, currentPath);
      }
    }
  }

  downloadZip(content, filename) {
    const url = window.URL.createObjectURL(content);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
}
```

### 3.3 Main Application Component
```jsx
const NAFDACDossierApp = () => {
  const [apiOption, setApiOption] = useState(null);
  const [ctdStructure, setCTDStructure] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [productName, setProductName] = useState('');

  useEffect(() => {
    if (apiOption) {
      const structure = generateCTDStructure(apiOption, 'generic');
      setCTDStructure(structure);
    }
  }, [apiOption]);

  const handleNodeSelect = (nodeId, nodeData) => {
    setSelectedNode(nodeData);
  };

  const handleExport = async () => {
    if (ctdStructure && productName) {
      const exporter = new NAFDACZipExporter(new DossierFileManager());
      await exporter.generateDossierZip(ctdStructure, productName);
    }
  };

  return (
    <div className="nafdac-dossier-app">
      <header>
        <h1>🏥 NAFDAC CTD Dossier Compilation System</h1>
        <input 
          type="text" 
          placeholder="Product Name" 
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </header>

      {!apiOption ? (
        <div className="api-selection">
          <h2>Select API Submission Type</h2>
          {Object.entries(API_SUBMISSION_OPTIONS).map(([key, option]) => (
            <button 
              key={key} 
              onClick={() => setApiOption(option.id)}
              className="api-option"
            >
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className="main-interface">
          <div className="ctd-tree-panel">
            <h2>📋 CTD Structure</h2>
            {ctdStructure && Object.entries(ctdStructure).map(([moduleId, moduleData]) => (
              <CTDTreeNode
                key={moduleId}
                nodeId={moduleId}
                nodeData={moduleData}
                onNodeSelect={handleNodeSelect}
              />
            ))}
          </div>

          <div className="content-panel">
            {selectedNode ? (
              <>
                <div className="file-management">
                  <h3>📁 {selectedNode.title}</h3>
                  <FileUploadZone 
                    moduleId={selectedNode.id}
                    onFilesUploaded={(files) => console.log('Files uploaded:', files)}
                  />
                </div>
                
                <div className="guidelines">
                  <h4>📋 Guidelines</h4>
                  <p>{selectedNode.guidelines}</p>
                </div>
              </>
            ) : (
              <div className="welcome">
                <h3>Welcome to NAFDAC CTD Compilation</h3>
                <p>Select a CTD section from the tree to upload files and view guidelines.</p>
              </div>
            )}
          </div>

          <div className="export-panel">
            <button 
              onClick={handleExport}
              disabled={!productName}
              className="export-btn"
            >
              📦 Export Dossier ZIP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
```

---

## Phase 4: Implementation & Testing (Week 4)

### 4.1 Setup Instructions
```bash
# Create React app
npx create-react-app nafdac-dossier-system
cd nafdac-dossier-system

# Install dependencies
npm install jszip

# Start development server
npm start
```

### 4.2 Basic CSS Styling
```css
.nafdac-dossier-app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.api-selection {
  text-align: center;
  padding: 40px;
}

.api-option {
  display: block;
  width: 100%;
  max-width: 500px;
  margin: 15px auto;
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.3s;
}

.api-option:hover {
  border-color: #007bff;
  box-shadow: 0 4px 8px rgba(0,123,255,0.1);
}

.main-interface {
  display: grid;
  grid-template-columns: 300px 1fr 200px;
  gap: 20px;
  height: 80vh;
}

.ctd-tree-panel {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  overflow-y: auto;
}

.tree-node {
  padding: 8px;
  border-left: 2px solid #ddd;
  margin: 4px 0;
}

.node-header {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
}

.node-header:hover {
  background: #f5f5f5;
}

.upload-zone {
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 40px 20px;
  text-align: center;
  margin: 20px 0;
  transition: all 0.3s;
}

.upload-zone.drag-over {
  border-color: #007bff;
  background: #f8f9ff;
}

.export-btn {
  width: 100%;
  padding: 15px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

.export-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
```

---

## Key Features Summary

### ✅ Tree-Based Navigation
- Collapsible tree structure matching NAFDAC CTD format
- Visual indicators for completion status and file counts
- Dynamic structure based on API submission type

### ✅ Direct File Upload
- Drag & drop file upload to any section
- localStorage persistence (survives refresh/restart)
- File validation and size limits

### ✅ Organized Export
- ZIP export with NAFDAC folder structure
- Automatic file organization by section
- Timestamped file naming

### ✅ Progress Tracking
- Visual completion indicators
- File count displays
- Overall dossier progress

---

## Implementation Timeline

- **Week 1**: Core structure, tree navigation, API type selection
- **Week 2**: File management, localStorage system, upload components  
- **Week 3**: Complete CTD structure, ZIP export system
- **Week 4**: Testing, styling, deployment

## Next Steps

1. Initialize React application
2. Implement core components
3. Add file management system
4. Build export functionality
5. Test and deploy

This completes the comprehensive development plan for the NAFDAC CTD compilation system.