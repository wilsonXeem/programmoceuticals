// Complete NAFDAC CTD Structure with Requirements
export const COMPLETE_CTD_STRUCTURE = {
  'Module_1': {
    id: 'Module_1',
    title: 'Administrative and Product Information',
    required: true,
    sections: {
      '1.0': {
        id: '1.0',
        title: 'Cover Letter',
        required: true,
        files: [],
        requirements: 'Formal cover letter addressed to NAFDAC introducing the application and summarizing key product information',
        acceptedFormats: ['pdf', 'doc', 'docx'],
        maxFiles: 1,
        maxFileSize: '10MB',
        template: 'Use official NAFDAC cover letter template'
      },
      '1.1': {
        id: '1.1',
        title: 'Table of Contents (Modules 1-5)',
        required: true,
        files: [],
        requirements: 'Comprehensive table of contents listing all modules and sections with page numbers',
        acceptedFormats: ['pdf', 'doc', 'docx'],
        maxFiles: 1,
        maxFileSize: '5MB',
        template: 'Must include hyperlinks to sections'
      },
      '1.2': {
        id: '1.2',
        title: 'Application Information',
        required: true,
        files: [],
        requirements: 'Complete application documentation package',
        subsections: {
          '1.2.1': {
            id: '1.2.1',
            title: 'Application Letter',
            required: true,
            files: [],
            requirements: 'Formal application letter requesting marketing authorization with product details',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1,
            maxFileSize: '10MB',
            mandatoryContent: ['Product name', 'Strength', 'Dosage form', 'Manufacturer details']
          },
          '1.2.2': {
            id: '1.2.2',
            title: 'Registration Form',
            required: true,
            files: [],
            requirements: 'Completed NAFDAC registration form (Form 001) with all required fields',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1,
            maxFileSize: '15MB',
            formNumber: 'NAFDAC Form 001',
            mandatoryContent: ['All sections completed', 'Authorized signatures', 'Company seal']
          },
          '1.2.3': {
            id: '1.2.3',
            title: 'Certificate of Incorporation',
            required: true,
            files: [],
            requirements: 'Valid certificate of incorporation of the applicant company',
            acceptedFormats: ['pdf', 'jpg', 'jpeg', 'png'],
            maxFiles: 1
          },
          '1.2.4': {
            id: '1.2.4',
            title: 'Power of Attorney',
            required: true,
            files: [],
            requirements: 'Notarized power of attorney authorizing local representative (if applicable)',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1
          },
          '1.2.5': {
            id: '1.2.5',
            title: 'Notarized Declaration',
            required: true,
            files: [],
            requirements: 'Notarized declaration of authenticity and accuracy of submitted information',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1
          },
          '1.2.6': {
            id: '1.2.6',
            title: 'Contract Manufacturing Agreement',
            required: true,
            files: [],
            requirements: 'Manufacturing agreement between applicant and manufacturer (if different entities)',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1
          },
          '1.2.7': {
            id: '1.2.7',
            title: 'Certificate of Pharmaceutical Product',
            required: true,
            files: [],
            requirements: 'WHO-format Certificate of Pharmaceutical Product from country of origin',
            acceptedFormats: ['pdf', 'jpg', 'jpeg', 'png'],
            maxFiles: 1
          },
          '1.2.8': {
            id: '1.2.8',
            title: 'GMP Certificate',
            required: true,
            files: [],
            requirements: 'Valid GMP certificate for manufacturing facility from recognized authority',
            acceptedFormats: ['pdf', 'jpg', 'jpeg', 'png'],
            maxFiles: 1
          },
          '1.2.9': {
            id: '1.2.9',
            title: 'Manufacturing Authorization',
            required: true,
            files: [],
            requirements: 'Manufacturing license/authorization from country of manufacture',
            acceptedFormats: ['pdf', 'jpg', 'jpeg', 'png'],
            maxFiles: 1
          },
          '1.2.10': {
            id: '1.2.10',
            title: 'Trademark Registration',
            required: false,
            files: [],
            requirements: 'Trademark registration certificate (if applicable)',
            acceptedFormats: ['pdf', 'jpg', 'jpeg', 'png'],
            maxFiles: 1
          },
          '1.2.11': {
            id: '1.2.11',
            title: 'Pharmacist License',
            required: true,
            files: [],
            requirements: 'Valid pharmacist license of responsible pharmacist',
            acceptedFormats: ['pdf', 'jpg', 'jpeg', 'png'],
            maxFiles: 1
          },
          '1.2.12': {
            id: '1.2.12',
            title: 'Premises Registration',
            required: true,
            files: [],
            requirements: 'NAFDAC premises registration certificate for local facility',
            acceptedFormats: ['pdf', 'jpg', 'jpeg', 'png'],
            maxFiles: 1
          },
          '1.2.13': {
            id: '1.2.13',
            title: 'Previous Marketing Authorization',
            required: false,
            files: [],
            requirements: 'Marketing authorization from other countries (if available)',
            acceptedFormats: ['pdf', 'jpg', 'jpeg', 'png'],
            maxFiles: 5
          },
          '1.2.14': {
            id: '1.2.14',
            title: 'GMP Inspection Invitation',
            required: true,
            files: [],
            requirements: 'Formal invitation letter for NAFDAC GMP inspection',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1
          },
          '1.2.15': {
            id: '1.2.15',
            title: 'CEP Certificate',
            required: false,
            files: [],
            requirements: 'Certificate of Suitability from EDQM (for CEP route)',
            acceptedFormats: ['pdf'],
            maxFiles: 1,
            conditionalOn: 'apiOption2'
          },
          '1.2.16': {
            id: '1.2.16',
            title: 'APIMF Letter of Access',
            required: false,
            files: [],
            requirements: 'Letter of access to APIMF from API manufacturer',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1,
            conditionalOn: 'apiOption3'
          },
          '1.2.17': {
            id: '1.2.17',
            title: 'BCS Biowaiver Request',
            required: false,
            files: [],
            requirements: 'BCS-based biowaiver justification with supporting data',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1
          },
          '1.2.18': {
            id: '1.2.18',
            title: 'Additional Strength Biowaiver',
            required: false,
            files: [],
            requirements: 'Biowaiver request for additional strengths with proportionality assessment',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1
          }
        }
      },
      '1.3': {
        id: '1.3',
        title: 'Product Information',
        required: true,
        files: [],
        requirements: 'Complete product information documentation',
        subsections: {
          '1.3.1': {
            id: '1.3.1',
            title: 'Summary of Product Characteristics (SmPC)',
            required: true,
            files: [],
            requirements: 'Complete SmPC following NAFDAC template with all required sections',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1
          },
          '1.3.2': {
            id: '1.3.2',
            title: 'Labelling (Outer & Inner)',
            required: true,
            files: [],
            requirements: 'Product labels (outer carton and inner container) meeting NAFDAC requirements',
            acceptedFormats: ['pdf', 'jpg', 'jpeg', 'png'],
            maxFiles: 5
          },
          '1.3.3': {
            id: '1.3.3',
            title: 'Patient Information Leaflet (PIL)',
            required: true,
            files: [],
            requirements: 'Patient information leaflet in English following NAFDAC guidelines',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1
          }
        }
      },
      '1.4': {
        id: '1.4',
        title: 'Regional Summaries',
        required: true,
        files: [],
        requirements: 'NAFDAC-specific regional documentation',
        subsections: {
          '1.4.1': {
            id: '1.4.1',
            title: 'Bioequivalence Trial Information Form (BTIF)',
            required: false,
            files: [],
            requirements: 'BTIF form for bioequivalence studies (if applicable)',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1
          },
          '1.4.2': {
            id: '1.4.2',
            title: 'Quality Information Summary (QIS)',
            required: true,
            files: [],
            requirements: 'QIS document summarizing quality information in NAFDAC format',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1
          }
        }
      },
      '1.5': {
        id: '1.5',
        title: 'Electronic Review Documents',
        required: true,
        files: [],
        requirements: 'Electronic copies of all documents for NAFDAC review',
        acceptedFormats: ['pdf'],
        maxFiles: 1
      },
      '1.6': {
        id: '1.6',
        title: 'Product Samples',
        required: false,
        files: [],
        requirements: 'Documentation of product samples submitted separately',
        acceptedFormats: ['pdf', 'doc', 'docx'],
        maxFiles: 1
      }
    }
  },
  'Module_2': {
    id: 'Module_2',
    title: 'Common Technical Document Summaries',
    required: true,
    sections: {
      '2.1': {
        id: '2.1',
        title: 'CTD Table of Contents (Modules 2-5)',
        required: true,
        files: [],
        requirements: 'Table of contents for CTD modules 2-5 with page references',
        acceptedFormats: ['pdf', 'doc', 'docx'],
        maxFiles: 1
      },
      '2.2': {
        id: '2.2',
        title: 'CTD Introduction',
        required: true,
        files: [],
        requirements: 'Introduction to the CTD submission with product overview',
        acceptedFormats: ['pdf', 'doc', 'docx'],
        maxFiles: 1
      },
      '2.3': {
        id: '2.3',
        title: 'Quality Overall Summary (QOS-PD)',
        required: true,
        files: [],
        requirements: 'Comprehensive quality overall summary covering drug substance and drug product',
        acceptedFormats: ['pdf', 'doc', 'docx'],
        maxFiles: 1,
        subsections: {
          '2.3.S': {
            id: '2.3.S',
            title: 'Drug Substance Summary',
            required: true,
            files: [],
            requirements: 'Summary of drug substance information',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1
          },
          '2.3.P': {
            id: '2.3.P',
            title: 'Drug Product Summary',
            required: true,
            files: [],
            requirements: 'Summary of drug product information',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1
          }
        }
      },
      '2.4': {
        id: '2.4',
        title: 'Nonclinical Overview',
        required: false,
        files: [],
        requirements: 'Overview of nonclinical studies (not required for generics)',
        acceptedFormats: ['pdf', 'doc', 'docx'],
        maxFiles: 1,
        conditionalOn: 'newChemicalEntity'
      },
      '2.5': {
        id: '2.5',
        title: 'Clinical Overview',
        required: false,
        files: [],
        requirements: 'Overview of clinical studies (not required for generics)',
        acceptedFormats: ['pdf', 'doc', 'docx'],
        maxFiles: 1,
        conditionalOn: 'newChemicalEntity'
      }
    }
  },
  'Module_3': {
    id: 'Module_3',
    title: 'Quality',
    required: true,
    sections: {
      '3.1': {
        id: '3.1',
        title: 'Table of Contents (Module 3)',
        required: true,
        files: [],
        requirements: 'Detailed table of contents for Module 3 quality section',
        acceptedFormats: ['pdf', 'doc', 'docx'],
        maxFiles: 1
      },
      '3.2.S': {
        id: '3.2.S',
        title: 'Drug Substance',
        required: true,
        files: [],
        requirements: 'Complete drug substance documentation per selected API option',
        subsections: {
          '3.2.S.1': {
            id: '3.2.S.1',
            title: 'General Information',
            required: true,
            files: [],
            requirements: 'General information about the drug substance',
            subsections: {
              '3.2.S.1.1': {
                id: '3.2.S.1.1',
                title: 'Nomenclature',
                required: true,
                files: [],
                requirements: 'Complete nomenclature including INN, chemical name, CAS number',
                acceptedFormats: ['pdf', 'doc', 'docx'],
                maxFiles: 1
              },
              '3.2.S.1.2': {
                id: '3.2.S.1.2',
                title: 'Structure',
                required: true,
                files: [],
                requirements: 'Structural formula, molecular formula, and molecular weight',
                acceptedFormats: ['pdf', 'doc', 'docx'],
                maxFiles: 1
              },
              '3.2.S.1.3': {
                id: '3.2.S.1.3',
                title: 'General Properties',
                required: true,
                files: [],
                requirements: 'Physical and chemical properties of the drug substance',
                acceptedFormats: ['pdf', 'doc', 'docx'],
                maxFiles: 1
              }
            }
          },
          '3.2.S.2': {
            id: '3.2.S.2',
            title: 'Manufacture',
            required: true,
            files: [],
            requirements: 'Manufacturing information for drug substance',
            subsections: {
              '3.2.S.2.1': {
                id: '3.2.S.2.1',
                title: 'Manufacturer(s)',
                required: true,
                files: [],
                requirements: 'Information on drug substance manufacturer(s)',
                acceptedFormats: ['pdf', 'doc', 'docx'],
                maxFiles: 1
              },
              '3.2.S.2.2': {
                id: '3.2.S.2.2',
                title: 'Description of Manufacturing Process',
                required: true,
                files: [],
                requirements: 'Detailed manufacturing process description',
                acceptedFormats: ['pdf', 'doc', 'docx'],
                maxFiles: 1
              }
            }
          },
          '3.2.S.3': {
            id: '3.2.S.3',
            title: 'Characterisation',
            required: true,
            files: [],
            requirements: 'Characterisation of drug substance',
            subsections: {
              '3.2.S.3.1': {
                id: '3.2.S.3.1',
                title: 'Elucidation of Structure',
                required: true,
                files: [],
                requirements: 'Structural elucidation and characterisation data',
                acceptedFormats: ['pdf', 'doc', 'docx'],
                maxFiles: 1
              },
              '3.2.S.3.2': {
                id: '3.2.S.3.2',
                title: 'Impurities',
                required: true,
                files: [],
                requirements: 'Impurity profile and qualification',
                acceptedFormats: ['pdf', 'doc', 'docx'],
                maxFiles: 1
              }
            }
          },
          '3.2.S.4': {
            id: '3.2.S.4',
            title: 'Control of Drug Substance',
            required: true,
            files: [],
            requirements: 'Complete control strategy for drug substance',
            subsections: {
              '3.2.S.4.1': {
                id: '3.2.S.4.1',
                title: 'Specification',
                required: true,
                files: [],
                requirements: 'Drug substance specification with acceptance criteria',
                acceptedFormats: ['pdf', 'doc', 'docx'],
                maxFiles: 1
              },
              '3.2.S.4.2': {
                id: '3.2.S.4.2',
                title: 'Analytical Procedures',
                required: true,
                files: [],
                requirements: 'Analytical procedures for drug substance testing',
                acceptedFormats: ['pdf', 'doc', 'docx'],
                maxFiles: 1
              },
              '3.2.S.4.3': {
                id: '3.2.S.4.3',
                title: 'Validation of Analytical Procedures',
                required: true,
                files: [],
                requirements: 'Validation reports for analytical procedures',
                acceptedFormats: ['pdf', 'doc', 'docx'],
                maxFiles: 1
              },
              '3.2.S.4.4': {
                id: '3.2.S.4.4',
                title: 'Batch Analyses',
                required: true,
                files: [],
                requirements: 'Batch analysis data for minimum 3 batches',
                acceptedFormats: ['pdf', 'doc', 'docx', 'xlsx'],
                maxFiles: 3
              },
              '3.2.S.4.5': {
                id: '3.2.S.4.5',
                title: 'Justification of Specification',
                required: true,
                files: [],
                requirements: 'Justification for specification limits',
                acceptedFormats: ['pdf', 'doc', 'docx'],
                maxFiles: 1
              }
            }
          },
          '3.2.S.5': {
            id: '3.2.S.5',
            title: 'Reference Standards',
            required: true,
            files: [],
            requirements: 'Information on reference standards used',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1
          },
          '3.2.S.6': {
            id: '3.2.S.6',
            title: 'Container-Closure System',
            required: true,
            files: [],
            requirements: 'Container-closure system for drug substance',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1
          },
          '3.2.S.7': {
            id: '3.2.S.7',
            title: 'Stability',
            required: true,
            files: [],
            requirements: 'Stability data for drug substance',
            subsections: {
              '3.2.S.7.1': {
                id: '3.2.S.7.1',
                title: 'Stability Summary',
                required: true,
                files: [],
                requirements: 'Summary of stability studies',
                acceptedFormats: ['pdf', 'doc', 'docx'],
                maxFiles: 1
              },
              '3.2.S.7.3': {
                id: '3.2.S.7.3',
                title: 'Stability Data',
                required: true,
                files: [],
                requirements: 'Complete stability study data',
                acceptedFormats: ['pdf', 'doc', 'docx', 'xlsx'],
                maxFiles: 5
              }
            }
          }
        }
      },
      '3.2.P': {
        id: '3.2.P',
        title: 'Drug Product',
        required: true,
        files: [],
        requirements: 'Complete drug product documentation',
        subsections: {
          '3.2.P.1': {
            id: '3.2.P.1',
            title: 'Description and Composition',
            required: true,
            files: [],
            requirements: 'Complete description and quantitative composition of drug product',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1
          },
          '3.2.P.2': {
            id: '3.2.P.2',
            title: 'Pharmaceutical Development',
            required: true,
            files: [],
            requirements: 'Pharmaceutical development data and rationale',
            acceptedFormats: ['pdf', 'doc', 'docx'],
            maxFiles: 1
          },
          '3.2.P.5': {
            id: '3.2.P.5',
            title: 'Control of Drug Product',
            required: true,
            files: [],
            requirements: 'Complete control strategy for drug product',
            subsections: {
              '3.2.P.5.1': {
                id: '3.2.P.5.1',
                title: 'Specification',
                required: true,
                files: [],
                requirements: 'Drug product specification with acceptance criteria',
                acceptedFormats: ['pdf', 'doc', 'docx'],
                maxFiles: 1
              },
              '3.2.P.5.4': {
                id: '3.2.P.5.4',
                title: 'Batch Analyses',
                required: true,
                files: [],
                requirements: 'Batch analysis data for minimum 3 pilot scale batches',
                acceptedFormats: ['pdf', 'doc', 'docx', 'xlsx'],
                maxFiles: 3
              }
            }
          },
          '3.2.P.8': {
            id: '3.2.P.8',
            title: 'Stability',
            required: true,
            files: [],
            requirements: 'Complete stability data and studies',
            subsections: {
              '3.2.P.8.1': {
                id: '3.2.P.8.1',
                title: 'Stability Summary',
                required: true,
                files: [],
                requirements: 'Summary of stability studies and shelf life justification',
                acceptedFormats: ['pdf', 'doc', 'docx'],
                maxFiles: 1
              },
              '3.2.P.8.3': {
                id: '3.2.P.8.3',
                title: 'Stability Data',
                required: true,
                files: [],
                requirements: 'Complete stability study reports and data',
                acceptedFormats: ['pdf', 'doc', 'docx', 'xlsx'],
                maxFiles: 5
              }
            }
          }
        }
      }
    }
  },
  'Module_5': {
    id: 'Module_5',
    title: 'Clinical Study Reports',
    required: true,
    sections: {
      '5.1': {
        id: '5.1',
        title: 'Table of Contents (Module 5)',
        required: true,
        files: [],
        requirements: 'Table of contents for clinical section',
        acceptedFormats: ['pdf', 'doc', 'docx'],
        maxFiles: 1
      },
      '5.3': {
        id: '5.3',
        title: 'Clinical Study Reports',
        required: true,
        files: [],
        requirements: 'Clinical study reports as applicable',
        subsections: {
          '5.3.1': {
            id: '5.3.1',
            title: 'Biopharmaceutical Studies',
            required: true,
            files: [],
            requirements: 'Bioequivalence or biowaiver studies',
            subsections: {
              '5.3.1.2': {
                id: '5.3.1.2',
                title: 'Bioequivalence Study Reports',
                required: true,
                files: [],
                requirements: 'Complete bioequivalence study report with statistical analysis',
                acceptedFormats: ['pdf', 'doc', 'docx'],
                maxFiles: 1
              }
            }
          }
        }
      }
    }
  }
};

// State management functions
export const createEmptyDossierState = () => {
  const state = {};
  
  const processSection = (section, path = '') => {
    const sectionPath = path ? `${path}.${section.id}` : section.id;
    state[sectionPath] = {
      ...section,
      files: [],
      completed: false
    };
    
    if (section.subsections) {
      Object.values(section.subsections).forEach(subsection => {
        processSection(subsection, sectionPath);
      });
    }
  };
  
  Object.values(COMPLETE_CTD_STRUCTURE).forEach(module => {
    Object.values(module.sections).forEach(section => {
      processSection(section, module.id);
    });
  });
  
  return state;
};

export const calculateProgress = (dossierState) => {
  let totalRequired = 0;
  let completed = 0;
  const moduleProgress = {};
  
  Object.entries(dossierState).forEach(([path, section]) => {
    const moduleId = path.split('.')[0];
    
    if (!moduleProgress[moduleId]) {
      moduleProgress[moduleId] = { total: 0, completed: 0 };
    }
    
    if (section.required) {
      totalRequired++;
      moduleProgress[moduleId].total++;
      
      if (section.files && section.files.length > 0) {
        completed++;
        moduleProgress[moduleId].completed++;
      }
    }
  });
  
  // Calculate percentages
  Object.keys(moduleProgress).forEach(moduleId => {
    const { total, completed } = moduleProgress[moduleId];
    moduleProgress[moduleId].percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  });
  
  return {
    overall: totalRequired > 0 ? Math.round((completed / totalRequired) * 100) : 0,
    totalRequired,
    completed,
    byModule: moduleProgress
  };
};

export const updateSectionFiles = (dossierState, sectionPath, files) => {
  return {
    ...dossierState,
    [sectionPath]: {
      ...dossierState[sectionPath],
      files: files,
      completed: files.length > 0
    }
  };
};