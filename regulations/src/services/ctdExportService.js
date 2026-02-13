import JSZip from 'jszip';
import { saveAs } from 'file-saver';

class CTDExportService {
  constructor() {
    this.nafdacFolderStructure = {
      'Module_1': {
        name: 'Module 1 - Administrative and Product Information',
        subfolders: {
          '1.0': 'Cover Letter',
          '1.1': 'Table of Contents',
          '1.2': 'Application Information',
          '1.3': 'Product Information', 
          '1.4': 'Regional Summaries',
          '1.5': 'Electronic Review Documents',
          '1.6': 'Product Samples'
        }
      },
      'Module_2': {
        name: 'Module 2 - CTD Summaries',
        subfolders: {
          '2.1': 'CTD Table of Contents',
          '2.2': 'CTD Introduction',
          '2.3': 'Quality Overall Summary',
          '2.4': 'Non-Clinical Overview',
          '2.5': 'Clinical Overview',
          '2.6': 'Non-Clinical Summaries',
          '2.7': 'Clinical Summary'
        }
      },
      'Module_3': {
        name: 'Module 3 - Quality',
        subfolders: {
          '3.1': 'Table of Contents',
          '3.2.S': 'Drug Substance',
          '3.2.P': 'Drug Product',
          '3.3': 'Literature References'
        }
      },
      'Module_4': {
        name: 'Module 4 - Non-Clinical Study Reports',
        subfolders: {
          '4.1': 'Table of Contents',
          '4.2': 'Study Reports',
          '4.3': 'Literature References'
        }
      },
      'Module_5': {
        name: 'Module 5 - Clinical Study Reports',
        subfolders: {
          '5.1': 'Table of Contents',
          '5.2': 'Tabular Listing',
          '5.3': 'Clinical Study Reports',
          '5.4': 'Literature References'
        }
      }
    };
  }

  async exportNAFDACDossier(ctdStructure, productName, apiOption, getFileBlob, onProgress) {
    const zip = new JSZip();
    const productFolder = this.sanitizeFileName(productName);
    
    // Create main product folder
    const mainFolder = zip.folder(productFolder);
    
    // Generate cover letter
    const coverLetter = this.generateCoverLetter(productName, apiOption);
    mainFolder.file('00_Cover_Letter.pdf', coverLetter);
    
    // Generate master table of contents
    const masterTOC = this.generateMasterTOC(ctdStructure, productName);
    mainFolder.file('01_Master_Table_of_Contents.pdf', masterTOC);
    
    let processedFiles = 0;
    const totalFiles = this.countTotalFiles(ctdStructure);
    
    // Process each module
    for (const [moduleId, module] of Object.entries(ctdStructure)) {
      if (!module.sections) continue;
      
      const moduleInfo = this.nafdacFolderStructure[moduleId];
      if (!moduleInfo) continue;
      
      const moduleFolder = mainFolder.folder(`${moduleId} - ${moduleInfo.name}`);
      
      // Process sections within module
      for (const [sectionId, section] of Object.entries(module.sections)) {
        const sectionFolder = moduleFolder.folder(`${sectionId} - ${section.title || 'Section'}`);
        
        // Add section files
        if (section.files && section.files.length > 0) {
          for (const file of section.files) {
            try {
              const fileData = await getFileBlob(file.path);
              if (fileData && fileData.blob) {
                const fileName = this.generateNAFDACFileName(file.name, moduleId, sectionId);
                sectionFolder.file(fileName, fileData.blob);
                processedFiles++;
                
                if (onProgress) {
                  onProgress({
                    current: processedFiles,
                    total: totalFiles,
                    file: file.name,
                    module: moduleId,
                    section: sectionId
                  });
                }
              }
            } catch (error) {
              console.error(`Failed to process file ${file.path}:`, error);
            }
          }
        }
        
        // Process subsections
        if (section.subsections) {
          for (const [subsectionId, subsection] of Object.entries(section.subsections)) {
            if (subsection.files && subsection.files.length > 0) {
              const subsectionFolder = sectionFolder.folder(`${subsectionId} - ${subsection.title || 'Subsection'}`);
              
              for (const file of subsection.files) {
                try {
                  const fileData = await getFileBlob(file.path);
                  if (fileData && fileData.blob) {
                    const fileName = this.generateNAFDACFileName(file.name, moduleId, `${sectionId}.${subsectionId}`);
                    subsectionFolder.file(fileName, fileData.blob);
                    processedFiles++;
                    
                    if (onProgress) {
                      onProgress({
                        current: processedFiles,
                        total: totalFiles,
                        file: file.name,
                        module: moduleId,
                        section: `${sectionId}.${subsectionId}`
                      });
                    }
                  }
                } catch (error) {
                  console.error(`Failed to process file ${file.path}:`, error);
                }
              }
            }
          }
        }
      }
    }
    
    // Generate QOS-PD template if Module 2 exists
    if (ctdStructure.Module_2) {
      const qosPD = this.generateQOSPDTemplate(productName, apiOption, ctdStructure);
      mainFolder.folder('Module 2 - CTD Summaries').file('QOS-PD_Template.docx', qosPD);
    }
    
    // Generate QIS template if Module 1 exists
    if (ctdStructure.Module_1) {
      const qis = this.generateQISTemplate(productName, ctdStructure);
      mainFolder.folder('Module 1 - Administrative and Product Information')
        .folder('1.4 - Regional Summaries')
        .file('QIS_Template.docx', qis);
    }
    
    // Generate and download ZIP
    const zipBlob = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 }
    });
    
    const fileName = `${productFolder}_NAFDAC_CTD_${new Date().toISOString().split('T')[0]}.zip`;
    saveAs(zipBlob, fileName);
    
    return {
      fileName,
      totalFiles: processedFiles,
      size: zipBlob.size
    };
  }

  generateCoverLetter(productName, apiOption) {
    const apiOptionText = {
      option1: 'API Prequalification Document',
      option2: 'Certificate of Suitability (CEP)',
      option3: 'APIMF (Active Pharmaceutical Ingredient Master File)',
      option4: 'Full Details in Product Dossier'
    };

    const content = `
COVER LETTER

To: National Agency for Food and Drug Administration and Control (NAFDAC)
From: [Applicant Name]
Date: ${new Date().toLocaleDateString()}

Subject: Marketing Authorization Application - ${productName}

Dear NAFDAC Review Team,

We hereby submit our application for marketing authorization for ${productName} in the Common Technical Document (CTD) format as per NAFDAC guidelines.

Application Details:
- Product Name: ${productName}
- API Submission Type: ${apiOptionText[apiOption] || 'Not specified'}
- Application Type: New Marketing Authorization
- Submission Date: ${new Date().toLocaleDateString()}

This submission includes all required modules and documents as specified in the NAFDAC CTD guidelines (DR&R-GDL-018-01).

We confirm that all information provided is accurate and complete to the best of our knowledge.

Thank you for your consideration.

Sincerely,
[Applicant Signature]
[Applicant Name and Title]
[Company Name]
[Contact Information]
`;

    return new Blob([content], { type: 'text/plain' });
  }

  generateMasterTOC(ctdStructure, productName) {
    let tocContent = `
MASTER TABLE OF CONTENTS
${productName} - NAFDAC CTD Submission

Generated: ${new Date().toLocaleDateString()}

`;

    for (const [moduleId, module] of Object.entries(ctdStructure)) {
      if (!module.sections) continue;
      
      tocContent += `\n${moduleId.toUpperCase()}: ${module.title}\n`;
      tocContent += '='.repeat(50) + '\n';
      
      for (const [sectionId, section] of Object.entries(module.sections)) {
        tocContent += `  ${sectionId} - ${section.title}\n`;
        
        if (section.files && section.files.length > 0) {
          section.files.forEach(file => {
            tocContent += `    • ${file.name}\n`;
          });
        }
        
        if (section.subsections) {
          for (const [subsectionId, subsection] of Object.entries(section.subsections)) {
            tocContent += `    ${subsectionId} - ${subsection.title}\n`;
            
            if (subsection.files && subsection.files.length > 0) {
              subsection.files.forEach(file => {
                tocContent += `      • ${file.name}\n`;
              });
            }
          }
        }
      }
    }

    return new Blob([tocContent], { type: 'text/plain' });
  }

  generateQOSPDTemplate(productName, apiOption, ctdStructure) {
    const template = `
QUALITY OVERALL SUMMARY - PRODUCT DOSSIER (QOS-PD)
${productName}

1. INTRODUCTION
Product Name: ${productName}
API Submission Type: ${apiOption}
Date: ${new Date().toLocaleDateString()}

2. DRUG SUBSTANCE (2.3.S)
[Complete based on API option selected]

2.3.S.1 General Information
- Nomenclature: [To be completed]
- Structure: [To be completed]
- General Properties: [To be completed]

2.3.S.2 Manufacture
- Manufacturer(s): [To be completed]
- Description of Manufacturing Process: [To be completed]

2.3.S.3 Characterisation
- Elucidation of Structure: [To be completed]
- Impurities: [To be completed]

2.3.S.4 Control of Drug Substance
- Specification: [To be completed]
- Analytical Procedures: [To be completed]
- Validation of Analytical Procedures: [To be completed]
- Batch Analyses: [To be completed]
- Justification of Specification: [To be completed]

2.3.S.5 Reference Standards or Materials
[To be completed]

2.3.S.6 Container Closure System
[To be completed]

2.3.S.7 Stability
[To be completed]

3. DRUG PRODUCT (2.3.P)

2.3.P.1 Description and Composition
[To be completed]

2.3.P.2 Pharmaceutical Development
[To be completed]

2.3.P.3 Manufacture
[To be completed]

2.3.P.4 Control of Excipients
[To be completed]

2.3.P.5 Control of Drug Product
[To be completed]

2.3.P.6 Reference Standards or Materials
[To be completed]

2.3.P.7 Container Closure System
[To be completed]

2.3.P.8 Stability
[To be completed]

4. APPENDICES (2.3.A)
[If applicable]

5. REGIONAL INFORMATION (2.3.R)
[NAFDAC specific information]
`;

    return new Blob([template], { type: 'text/plain' });
  }

  generateQISTemplate(productName, ctdStructure) {
    const template = `
QUALITY INFORMATION SUMMARY (QIS)
${productName}

1. PRODUCT INFORMATION
Product Name: ${productName}
Dosage Form: [To be completed]
Strength(s): [To be completed]
Route of Administration: [To be completed]

2. COMPOSITION
[Complete composition table]

3. MANUFACTURING INFORMATION
Manufacturer: [To be completed]
Manufacturing Site: [To be completed]
Batch Size: [To be completed]

4. QUALITY SPECIFICATIONS
API Specification: [To be completed]
FPP Specification: [To be completed]

5. STABILITY DATA
Storage Conditions: [To be completed]
Shelf Life: [To be completed]

6. BIOEQUIVALENCE INFORMATION
[If applicable]

Date: ${new Date().toLocaleDateString()}
Prepared by: [To be completed]
`;

    return new Blob([template], { type: 'text/plain' });
  }

  generateNAFDACFileName(originalName, moduleId, sectionId) {
    const cleanName = this.sanitizeFileName(originalName);
    const prefix = `${moduleId}_${sectionId}`;
    
    // Remove extension to add prefix
    const lastDotIndex = cleanName.lastIndexOf('.');
    if (lastDotIndex > 0) {
      const nameWithoutExt = cleanName.substring(0, lastDotIndex);
      const extension = cleanName.substring(lastDotIndex);
      return `${prefix}_${nameWithoutExt}${extension}`;
    }
    
    return `${prefix}_${cleanName}`;
  }

  sanitizeFileName(fileName) {
    return fileName
      .replace(/[<>:"/\\|?*]/g, '_')
      .replace(/\s+/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '');
  }

  countTotalFiles(ctdStructure) {
    let count = 0;
    
    for (const module of Object.values(ctdStructure)) {
      if (!module.sections) continue;
      
      for (const section of Object.values(module.sections)) {
        if (section.files) {
          count += section.files.length;
        }
        
        if (section.subsections) {
          for (const subsection of Object.values(section.subsections)) {
            if (subsection.files) {
              count += subsection.files.length;
            }
          }
        }
      }
    }
    
    return count;
  }

  async validateExport(ctdStructure, apiOption) {
    const validation = {
      isValid: true,
      errors: [],
      warnings: [],
      completionStatus: {}
    };

    // Check required modules
    const requiredModules = ['Module_1', 'Module_2', 'Module_3', 'Module_5'];
    
    for (const moduleId of requiredModules) {
      if (!ctdStructure[moduleId]) {
        validation.errors.push(`Missing required ${moduleId}`);
        validation.isValid = false;
      }
    }

    // API option specific validation
    if (apiOption === 'option2' && ctdStructure.Module_1) {
      const cepSection = ctdStructure.Module_1.sections?.['1.2']?.subsections?.['1.2.15'];
      if (!cepSection || !cepSection.files || cepSection.files.length === 0) {
        validation.warnings.push('CEP certificate not found for Option 2 (CEP) submission');
      }
    }

    if (apiOption === 'option3' && ctdStructure.Module_1) {
      const apimfSection = ctdStructure.Module_1.sections?.['1.2']?.subsections?.['1.2.16'];
      if (!apimfSection || !apimfSection.files || apimfSection.files.length === 0) {
        validation.warnings.push('APIMF letter of access not found for Option 3 (APIMF) submission');
      }
    }

    // Calculate completion status
    for (const [moduleId, module] of Object.entries(ctdStructure)) {
      if (module.sections) {
        let totalSections = 0;
        let completedSections = 0;

        for (const section of Object.values(module.sections)) {
          if (section.required) {
            totalSections++;
            if (section.files && section.files.length > 0) {
              completedSections++;
            }
          }

          if (section.subsections) {
            for (const subsection of Object.values(section.subsections)) {
              if (subsection.required) {
                totalSections++;
                if (subsection.files && subsection.files.length > 0) {
                  completedSections++;
                }
              }
            }
          }
        }

        validation.completionStatus[moduleId] = {
          completed: completedSections,
          total: totalSections,
          percentage: totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0
        };
      }
    }

    return validation;
  }
}

export const ctdExportService = new CTDExportService();