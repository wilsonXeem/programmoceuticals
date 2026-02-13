// Complete NAFDAC CTD Structure - Always shows full tree
export const CTD_STRUCTURE = {
  'Module_1': {
    title: 'Administrative and Product Information',
    enabled: true,
    required: true,
    sections: {
      '1.0': { title: 'Cover Letter', enabled: true, required: true, files: [] },
      '1.1': { title: 'Table of Contents (Modules 1-5)', enabled: true, required: true, files: [] },
      '1.2': { 
        title: 'Application Information', 
        enabled: true,
        required: true, 
        files: [],
        subsections: {
          '1.2.1': { title: 'Application Letter', enabled: true, required: true, files: [] },
          '1.2.2': { title: 'Registration Form', enabled: true, required: true, files: [] },
          '1.2.3': { title: 'Certificate of Incorporation', enabled: true, required: true, files: [] },
          '1.2.4': { title: 'Power of Attorney', enabled: true, required: true, files: [] },
          '1.2.5': { title: 'Notarized Declaration', enabled: true, required: true, files: [] },
          '1.2.6': { title: 'Contract Manufacturing Agreement', enabled: true, required: true, files: [] },
          '1.2.7': { title: 'Certificate of Pharmaceutical Product', enabled: true, required: true, files: [] },
          '1.2.8': { title: 'GMP Certificate', enabled: true, required: true, files: [] },
          '1.2.9': { title: 'Manufacturing Authorization', enabled: true, required: true, files: [] },
          '1.2.10': { title: 'Trademark Registration', enabled: true, required: false, files: [] },
          '1.2.11': { title: 'Pharmacist License', enabled: true, required: true, files: [] },
          '1.2.12': { title: 'Premises Certificate', enabled: true, required: true, files: [] },
          '1.2.13': { title: 'Previous Marketing Authorization', enabled: true, required: false, files: [] },
          '1.2.14': { title: 'GMP Inspection Invitation', enabled: true, required: true, files: [] },
          '1.2.15': { title: 'CEP Certificate (if applicable)', enabled: true, required: false, files: [] },
          '1.2.16': { title: 'APIMF Letter of Access (if applicable)', enabled: true, required: false, files: [] },
          '1.2.17': { title: 'BCS Biowaiver Request (if applicable)', enabled: true, required: false, files: [] },
          '1.2.18': { title: 'Additional Strength Biowaiver (if applicable)', enabled: true, required: false, files: [] }
        }
      },
      '1.3': { 
        title: 'Product Information', 
        enabled: true,
        required: true, 
        files: [],
        subsections: {
          '1.3.1': { title: 'Summary of Product Characteristics (SmPC)', enabled: true, required: true, files: [] },
          '1.3.2': { title: 'Labelling (outer & inner labels)', enabled: true, required: true, files: [] },
          '1.3.3': { title: 'Patient Information Leaflet (PIL)', enabled: true, required: true, files: [] }
        }
      },
      '1.4': { 
        title: 'Regional Summaries', 
        enabled: true,
        required: true, 
        files: [],
        subsections: {
          '1.4.1': { title: 'Bioequivalence Trial Information Form (BTIF)', enabled: true, required: false, files: [] },
          '1.4.2': { title: 'Quality Information Summary (QIS)', enabled: true, required: true, files: [] }
        }
      },
      '1.5': { title: 'Electronic Review Documents', enabled: true, required: true, files: [] },
      '1.6': { title: 'Product Samples', enabled: true, required: false, files: [] }
    }
  },
  'Module_2': {
    title: 'CTD Summaries',
    enabled: true,
    required: true,
    sections: {
      '2.1': { title: 'CTD Table of Contents (Modules 2-5)', enabled: true, required: true, files: [] },
      '2.2': { title: 'CTD Introduction', enabled: true, required: true, files: [] },
      '2.3': { title: 'Quality Overall Summary (QOS-PD)', enabled: true, required: true, files: [] },
      '2.4': { title: 'Nonclinical Overview (not required for generics)', enabled: true, required: false, files: [] },
      '2.5': { 
        title: 'Clinical Overview (not required for generics)', 
        enabled: true,
        required: false, 
        files: [],
        subsections: {
          '2.5.1': { title: 'Product Development Rationale', enabled: true, required: false, files: [] },
          '2.5.2': { title: 'Overview of Biopharmaceutics', enabled: true, required: false, files: [] },
          '2.5.3': { title: 'Overview of Clinical Pharmacology', enabled: true, required: false, files: [] },
          '2.5.4': { title: 'Overview of Efficacy', enabled: true, required: false, files: [] },
          '2.5.5': { title: 'Overview of Safety', enabled: true, required: false, files: [] },
          '2.5.6': { title: 'Benefits and Risks Conclusions', enabled: true, required: false, files: [] },
          '2.5.7': { title: 'Literature References', enabled: true, required: false, files: [] }
        }
      },
      '2.6': { title: 'Nonclinical Written and Tabulated Summaries (not required for generics)', enabled: true, required: false, files: [] },
      '2.7': { title: 'Clinical Summary (not required for generics)', enabled: true, required: false, files: [] }
    }
  },
  'Module_3': {
    title: 'Quality (Most Complex)',
    enabled: true,
    required: true,
    sections: {
      '3.1': { title: 'Table of Contents (Module 3)', enabled: true, required: true, files: [] },
      '3.2.S': { 
        title: 'Drug Substance (API submission options)', 
        enabled: true,
        required: true, 
        files: [],
        subsections: {
          '3.2.S.1': { 
            title: 'General Information',
            enabled: true, 
            required: true, 
            files: [],
            subsections: {
              '3.2.S.1.1': { title: 'Nomenclature', enabled: true, required: true, files: [] },
              '3.2.S.1.2': { title: 'Structure', enabled: true, required: true, files: [] },
              '3.2.S.1.3': { title: 'General Properties', enabled: true, required: true, files: [] }
            }
          },
          '3.2.S.2': { 
            title: 'Manufacture',
            enabled: true, 
            required: true, 
            files: [],
            subsections: {
              '3.2.S.2.1': { title: 'Manufacturer(s)', enabled: true, required: true, files: [] },
              '3.2.S.2.2': { title: 'Description of Manufacturing Process and Process Controls', enabled: true, required: true, files: [] },
              '3.2.S.2.3': { title: 'Control of Materials', enabled: true, required: true, files: [] },
              '3.2.S.2.4': { title: 'Controls of Critical Steps and Intermediates', enabled: true, required: true, files: [] },
              '3.2.S.2.5': { title: 'Process Validation and/or Evaluation', enabled: true, required: true, files: [] },
              '3.2.S.2.6': { title: 'Manufacturing Process Development', enabled: true, required: true, files: [] }
            }
          },
          '3.2.S.3': { 
            title: 'Characterisation',
            enabled: true, 
            required: true, 
            files: [],
            subsections: {
              '3.2.S.3.1': { title: 'Elucidation of Structure and Other Characteristics', enabled: true, required: true, files: [] },
              '3.2.S.3.2': { title: 'Impurities', enabled: true, required: true, files: [] }
            }
          },
          '3.2.S.4': { 
            title: 'Control of Drug Substance',
            enabled: true, 
            required: true, 
            files: [],
            subsections: {
              '3.2.S.4.1': { title: 'Specification', enabled: true, required: true, files: [] },
              '3.2.S.4.2': { title: 'Analytical Procedures', enabled: true, required: true, files: [] },
              '3.2.S.4.3': { title: 'Validation of Analytical Procedures', enabled: true, required: true, files: [] },
              '3.2.S.4.4': { title: 'Batch Analyses', enabled: true, required: true, files: [] },
              '3.2.S.4.5': { title: 'Justification of Specification', enabled: true, required: true, files: [] }
            }
          },
          '3.2.S.5': { title: 'Reference Standards or Materials', enabled: true, required: true, files: [] },
          '3.2.S.6': { title: 'Container-Closure System', enabled: true, required: true, files: [] },
          '3.2.S.7': { 
            title: 'Stability',
            enabled: true, 
            required: true, 
            files: [],
            subsections: {
              '3.2.S.7.1': { title: 'Stability Summary and Conclusions', enabled: true, required: true, files: [] },
              '3.2.S.7.2': { title: 'Post-approval Stability Protocol and Stability Commitment', enabled: true, required: true, files: [] },
              '3.2.S.7.3': { title: 'Stability Data', enabled: true, required: true, files: [] }
            }
          }
        }
      },
      '3.2.P': { 
        title: 'Drug Product (Finished Pharmaceutical Product)', 
        enabled: true,
        required: true, 
        files: [],
        subsections: {
          '3.2.P.1': { title: 'Description and Composition of the FPP', enabled: true, required: true, files: [] },
          '3.2.P.2': { 
            title: 'Pharmaceutical Development',
            enabled: true, 
            required: true, 
            files: [],
            subsections: {
              '3.2.P.2.1': { 
                title: 'Components of the FPP',
                enabled: true, 
                required: true, 
                files: [],
                subsections: {
                  '3.2.P.2.1.1': { title: 'Active Pharmaceutical Ingredient', enabled: true, required: true, files: [] },
                  '3.2.P.2.1.2': { title: 'Excipients', enabled: true, required: true, files: [] }
                }
              },
              '3.2.P.2.2': { 
                title: 'Finished Pharmaceutical Product',
                enabled: true, 
                required: true, 
                files: [],
                subsections: {
                  '3.2.P.2.2.1': { title: 'Formulation Development', enabled: true, required: true, files: [] },
                  '3.2.P.2.2.2': { title: 'Overages', enabled: true, required: true, files: [] },
                  '3.2.P.2.2.3': { title: 'Physicochemical and Biological Properties', enabled: true, required: true, files: [] }
                }
              },
              '3.2.P.2.3': { title: 'Manufacturing Process Development', enabled: true, required: true, files: [] },
              '3.2.P.2.4': { title: 'Container-Closure System', enabled: true, required: true, files: [] },
              '3.2.P.2.5': { title: 'Microbiological Attributes', enabled: true, required: true, files: [] },
              '3.2.P.2.6': { title: 'Compatibility', enabled: true, required: true, files: [] }
            }
          },
          '3.2.P.3': { 
            title: 'Manufacture',
            enabled: true, 
            required: true, 
            files: [],
            subsections: {
              '3.2.P.3.1': { title: 'Manufacturer(s)', enabled: true, required: true, files: [] },
              '3.2.P.3.2': { title: 'Batch Formula', enabled: true, required: true, files: [] },
              '3.2.P.3.3': { title: 'Description of Manufacturing Process and Process Controls', enabled: true, required: true, files: [] },
              '3.2.P.3.4': { title: 'Controls of Critical Steps and Intermediates', enabled: true, required: true, files: [] },
              '3.2.P.3.5': { title: 'Process Validation and/or Evaluation', enabled: true, required: true, files: [] }
            }
          },
          '3.2.P.4': { 
            title: 'Control of Excipients',
            enabled: true, 
            required: true, 
            files: [],
            subsections: {
              '3.2.P.4.1': { title: 'Specifications', enabled: true, required: true, files: [] },
              '3.2.P.4.2': { title: 'Analytical Procedures', enabled: true, required: true, files: [] },
              '3.2.P.4.3': { title: 'Validation of Analytical Procedures', enabled: true, required: true, files: [] },
              '3.2.P.4.4': { title: 'Justification of Specifications', enabled: true, required: true, files: [] },
              '3.2.P.4.5': { title: 'Excipients of Human or Animal Origin', enabled: true, required: false, files: [] },
              '3.2.P.4.6': { title: 'Novel Excipients', enabled: true, required: false, files: [] }
            }
          },
          '3.2.P.5': { 
            title: 'Control of FPP',
            enabled: true, 
            required: true, 
            files: [],
            subsections: {
              '3.2.P.5.1': { title: 'Specification(s)', enabled: true, required: true, files: [] },
              '3.2.P.5.2': { title: 'Analytical Procedures', enabled: true, required: true, files: [] },
              '3.2.P.5.3': { title: 'Validation of Analytical Procedures', enabled: true, required: true, files: [] },
              '3.2.P.5.4': { title: 'Batch Analyses', enabled: true, required: true, files: [] },
              '3.2.P.5.5': { title: 'Characterization of Impurities', enabled: true, required: true, files: [] },
              '3.2.P.5.6': { title: 'Justification of Specification(s)', enabled: true, required: true, files: [] }
            }
          },
          '3.2.P.6': { title: 'Reference Standards or Materials', enabled: true, required: true, files: [] },
          '3.2.P.7': { title: 'Container-Closure System', enabled: true, required: true, files: [] },
          '3.2.P.8': { 
            title: 'Stability',
            enabled: true, 
            required: true, 
            files: [],
            subsections: {
              '3.2.P.8.1': { title: 'Stability Summary and Conclusions', enabled: true, required: true, files: [] },
              '3.2.P.8.2': { title: 'Post-approval Stability Protocol and Stability Commitment', enabled: true, required: true, files: [] },
              '3.2.P.8.3': { title: 'Stability Data', enabled: true, required: true, files: [] }
            }
          }
        }
      },
      '3.2.A': { 
        title: 'Appendices',
        enabled: true, 
        required: false, 
        files: [],
        subsections: {
          '3.2.A.1': { title: 'Facilities and Equipment (not applicable for non-biotech)', enabled: true, required: false, files: [] },
          '3.2.A.2': { title: 'Adventitious Agent\'s Safety Evaluation', enabled: true, required: false, files: [] },
          '3.2.A.3': { title: 'Novel Excipients (not accepted by NAFDAC)', enabled: true, required: false, files: [] }
        }
      },
      '3.2.R': { 
        title: 'Regional Information',
        enabled: true, 
        required: false, 
        files: [],
        subsections: {
          '3.2.R.1': { 
            title: 'Production Documentation',
            enabled: true, 
            required: false, 
            files: [],
            subsections: {
              '3.2.R.1.1': { title: 'Executed Production Documents', enabled: true, required: false, files: [] },
              '3.2.R.1.2': { title: 'Master Production Documents', enabled: true, required: false, files: [] }
            }
          },
          '3.2.R.2': { title: 'Analytical Procedures and Validation Information', enabled: true, required: false, files: [] }
        }
      },
      '3.3': { title: 'Literature References', enabled: true, required: false, files: [] }
    }
  },
  'Module_4': {
    title: 'Non-clinical Summaries (not required for generics)',
    enabled: true,
    required: false,
    sections: {
      '4.1': { title: 'Table of Contents (Module 4)', enabled: true, required: false, files: [] },
      '4.2': { 
        title: 'Study Reports',
        enabled: true, 
        required: false, 
        files: [],
        subsections: {
          '4.2.1': { 
            title: 'Pharmacology',
            enabled: true, 
            required: false, 
            files: [],
            subsections: {
              '4.2.1.1': { title: 'Primary Pharmacodynamics', enabled: true, required: false, files: [] },
              '4.2.1.2': { title: 'Secondary Pharmacodynamics', enabled: true, required: false, files: [] },
              '4.2.1.3': { title: 'Safety Pharmacology', enabled: true, required: false, files: [] },
              '4.2.1.4': { title: 'Pharmacodynamic Drug Interactions', enabled: true, required: false, files: [] }
            }
          },
          '4.2.2': { 
            title: 'Pharmacokinetics',
            enabled: true, 
            required: false, 
            files: [],
            subsections: {
              '4.2.2.1': { title: 'Analytical Methods and Validation Reports', enabled: true, required: false, files: [] },
              '4.2.2.2': { title: 'Absorption', enabled: true, required: false, files: [] },
              '4.2.2.3': { title: 'Distribution', enabled: true, required: false, files: [] },
              '4.2.2.4': { title: 'Metabolism', enabled: true, required: false, files: [] },
              '4.2.2.5': { title: 'Excretion', enabled: true, required: false, files: [] },
              '4.2.2.6': { title: 'Pharmacokinetic Drug Interactions', enabled: true, required: false, files: [] },
              '4.2.2.7': { title: 'Other Pharmacokinetic Studies', enabled: true, required: false, files: [] }
            }
          },
          '4.2.3': { 
            title: 'Toxicology',
            enabled: true, 
            required: false, 
            files: [],
            subsections: {
              '4.2.3.1': { title: 'Single-Dose Toxicity', enabled: true, required: false, files: [] },
              '4.2.3.2': { title: 'Repeat-Dose Toxicity', enabled: true, required: false, files: [] },
              '4.2.3.3': { 
                title: 'Genotoxicity',
                enabled: true, 
                required: false, 
                files: [],
                subsections: {
                  '4.2.3.3.1': { title: 'In vitro', enabled: true, required: false, files: [] },
                  '4.2.3.3.2': { title: 'In vivo', enabled: true, required: false, files: [] }
                }
              },
              '4.2.3.4': { 
                title: 'Carcinogenicity',
                enabled: true, 
                required: false, 
                files: [],
                subsections: {
                  '4.2.3.4.1': { title: 'Long-term Studies', enabled: true, required: false, files: [] },
                  '4.2.3.4.2': { title: 'Short/Medium-term Studies', enabled: true, required: false, files: [] },
                  '4.2.3.4.3': { title: 'Other Studies', enabled: true, required: false, files: [] }
                }
              },
              '4.2.3.5': { 
                title: 'Reproductive and Developmental Toxicity',
                enabled: true, 
                required: false, 
                files: [],
                subsections: {
                  '4.2.3.5.1': { title: 'Fertility and Early Embryonic Development', enabled: true, required: false, files: [] },
                  '4.2.3.5.2': { title: 'Embryo-fetal Development', enabled: true, required: false, files: [] },
                  '4.2.3.5.3': { title: 'Prenatal and Postnatal Development', enabled: true, required: false, files: [] },
                  '4.2.3.5.4': { title: 'Juvenile Animal Studies', enabled: true, required: false, files: [] }
                }
              },
              '4.2.3.6': { title: 'Local Tolerance', enabled: true, required: false, files: [] },
              '4.2.3.7': { 
                title: 'Other Toxicity Studies',
                enabled: true, 
                required: false, 
                files: [],
                subsections: {
                  '4.2.3.7.1': { title: 'Antigenicity', enabled: true, required: false, files: [] },
                  '4.2.3.7.2': { title: 'Immunotoxicity', enabled: true, required: false, files: [] },
                  '4.2.3.7.3': { title: 'Mechanistic Studies', enabled: true, required: false, files: [] },
                  '4.2.3.7.4': { title: 'Dependence', enabled: true, required: false, files: [] },
                  '4.2.3.7.5': { title: 'Metabolites', enabled: true, required: false, files: [] },
                  '4.2.3.7.6': { title: 'Impurities', enabled: true, required: false, files: [] },
                  '4.2.3.7.7': { title: 'Other', enabled: true, required: false, files: [] }
                }
              }
            }
          }
        }
      },
      '4.3': { title: 'Literature References', enabled: true, required: false, files: [] }
    }
  },
  'Module_5': {
    title: 'Clinical Summaries (bioequivalence/biowaiver for generics)',
    enabled: true,
    required: true,
    sections: {
      '5.1': { title: 'Table of Contents (Module 5)', enabled: true, required: true, files: [] },
      '5.2': { title: 'Tabular Listing of Clinical Studies', enabled: true, required: false, files: [] },
      '5.3': { 
        title: 'Clinical Study Reports', 
        enabled: true,
        required: true, 
        files: [],
        subsections: {
          '5.3.1': { 
            title: 'Reports of Bio-pharmaceutical Studies',
            enabled: true, 
            required: true, 
            files: [],
            subsections: {
              '5.3.1.1': { title: 'Bioavailability (BA) Study Reports', enabled: true, required: false, files: [] },
              '5.3.1.2': { title: 'Comparative Bioavailability (BA) and Bioequivalence (BE) Study Reports', enabled: true, required: true, files: [] },
              '5.3.1.3': { title: 'In vitro-In vivo Correlation Study Reports', enabled: true, required: false, files: [] },
              '5.3.1.4': { title: 'Reports of Bioanalytical and Analytical Methods for Human Studies', enabled: true, required: true, files: [] }
            }
          },
          '5.3.2': { 
            title: 'Reports of Studies Pertinent to Pharmacokinetics using Human Biomaterials',
            enabled: true, 
            required: false, 
            files: [],
            subsections: {
              '5.3.2.1': { title: 'Plasma Protein Binding Study Reports', enabled: true, required: false, files: [] },
              '5.3.2.2': { title: 'Reports of Hepatic Metabolism and Drug Interaction Studies', enabled: true, required: false, files: [] },
              '5.3.2.3': { title: 'Reports of Studies Using Other Human Biomaterials', enabled: true, required: false, files: [] }
            }
          },
          '5.3.3': { 
            title: 'Reports of Human Pharmacokinetic Studies',
            enabled: true, 
            required: false, 
            files: [],
            subsections: {
              '5.3.3.1': { title: 'Healthy Subject PK and Initial Tolerability Study Reports', enabled: true, required: false, files: [] },
              '5.3.3.2': { title: 'Patient PK and Initial Tolerability Study Reports', enabled: true, required: false, files: [] },
              '5.3.3.3': { title: 'Intrinsic Factor PK Study Reports', enabled: true, required: false, files: [] },
              '5.3.3.4': { title: 'Extrinsic Factor PK Study Reports', enabled: true, required: false, files: [] },
              '5.3.3.5': { title: 'Population PK Study Reports', enabled: true, required: false, files: [] }
            }
          },
          '5.3.4': { 
            title: 'Reports of Human Pharmacodynamic Studies',
            enabled: true, 
            required: false, 
            files: [],
            subsections: {
              '5.3.4.1': { title: 'Healthy Subject PD and PK/PD Study Reports', enabled: true, required: false, files: [] },
              '5.3.4.2': { title: 'Patient PD and PK/PD Study Reports', enabled: true, required: false, files: [] }
            }
          },
          '5.3.5': { 
            title: 'Reports of Efficacy and Safety Studies',
            enabled: true, 
            required: false, 
            files: [],
            subsections: {
              '5.3.5.1': { title: 'Study Reports of Controlled Clinical Studies Pertinent to the Claimed Indication', enabled: true, required: false, files: [] },
              '5.3.5.2': { title: 'Study Reports of Uncontrolled Clinical Studies', enabled: true, required: false, files: [] },
              '5.3.5.3': { title: 'Reports of Analyses of Data from Multiple Studies', enabled: true, required: false, files: [] },
              '5.3.5.4': { title: 'Other Clinical Study Reports', enabled: true, required: false, files: [] }
            }
          },
          '5.3.6': { title: 'Reports of Post-marketing Experience', enabled: true, required: false, files: [] },
          '5.3.7': { title: 'Case Report Forms and Individual Patient Listings', enabled: true, required: false, files: [] }
        }
      },
      '5.4': { title: 'Literature References', enabled: true, required: false, files: [] }
    }
  }
};

// Generate CTD structure - Always returns complete tree, users control via enabled property
export const generateCTDStructure = (apiOption, productType = 'generic') => {
  const structure = JSON.parse(JSON.stringify(CTD_STRUCTURE)); // Deep clone
  
  // Set default enabled states based on API option and product type
  // Users can override these by toggling sections on/off
  
  // API-specific defaults
  switch (apiOption) {
    case 'option1': // API Prequalification
      structure.Module_1.sections['1.2'].subsections['1.2.15'].enabled = false;
      structure.Module_1.sections['1.2'].subsections['1.2.16'].enabled = false;
      break;
      
    case 'option2': // CEP
      structure.Module_1.sections['1.2'].subsections['1.2.15'].enabled = true;
      structure.Module_1.sections['1.2'].subsections['1.2.16'].enabled = false;
      break;
      
    case 'option3': // APIMF
      structure.Module_1.sections['1.2'].subsections['1.2.15'].enabled = false;
      structure.Module_1.sections['1.2'].subsections['1.2.16'].enabled = true;
      break;
      
    case 'option4': // Full Details
      structure.Module_1.sections['1.2'].subsections['1.2.15'].enabled = false;
      structure.Module_1.sections['1.2'].subsections['1.2.16'].enabled = false;
      break;
  }
  
  // Product type defaults
  if (productType === 'generic') {
    structure.Module_2.sections['2.4'].enabled = false;
    structure.Module_2.sections['2.5'].enabled = false;
    structure.Module_4.enabled = false;
  }
  
  return structure;
};

// Toggle section enabled state
export const toggleSectionEnabled = (ctdStructure, sectionPath, enabled) => {
  const structure = JSON.parse(JSON.stringify(ctdStructure));
  const pathParts = sectionPath.split('.');
  
  let current = structure;
  for (let i = 0; i < pathParts.length - 1; i++) {
    const part = pathParts[i];
    if (current[part]) {
      current = current[part];
    } else if (current.sections && current.sections[part]) {
      current = current.sections[part];
    } else if (current.subsections && current.subsections[part]) {
      current = current.subsections[part];
    }
  }
  
  const lastPart = pathParts[pathParts.length - 1];
  if (current[lastPart]) {
    current[lastPart].enabled = enabled;
  } else if (current.sections && current.sections[lastPart]) {
    current.sections[lastPart].enabled = enabled;
  } else if (current.subsections && current.subsections[lastPart]) {
    current.subsections[lastPart].enabled = enabled;
  }
  
  return structure;
};

// Calculate completion status - Only counts enabled sections
export const calculateCompletionStatus = (ctdStructure) => {
  let totalEnabled = 0;
  let completed = 0;
  const moduleStatus = {};
  
  const countSection = (section) => {
    let sectionEnabled = 0;
    let sectionCompleted = 0;
    
    if (section.enabled) {
      sectionEnabled++;
      if (section.files && section.files.length > 0) {
        sectionCompleted++;
      }
    }
    
    if (section.subsections) {
      Object.values(section.subsections).forEach(subsection => {
        const [subEnabled, subCompleted] = countSection(subsection);
        sectionEnabled += subEnabled;
        sectionCompleted += subCompleted;
      });
    }
    
    return [sectionEnabled, sectionCompleted];
  };
  
  Object.entries(ctdStructure).forEach(([moduleId, module]) => {
    let moduleEnabled = 0;
    let moduleCompleted = 0;
    
    if (module.enabled) {
      Object.values(module.sections).forEach(section => {
        const [sectionEnabled, sectionCompleted] = countSection(section);
        moduleEnabled += sectionEnabled;
        moduleCompleted += sectionCompleted;
      });
    }
    
    totalEnabled += moduleEnabled;
    completed += moduleCompleted;
    
    moduleStatus[moduleId] = {
      completed: moduleCompleted,
      total: moduleEnabled,
      percentage: moduleEnabled > 0 ? Math.round((moduleCompleted / moduleEnabled) * 100) : 0
    };
  });
  
  return {
    overall: totalEnabled > 0 ? Math.round((completed / totalEnabled) * 100) : 0,
    byModule: moduleStatus,
    completed,
    total: totalEnabled
  };
};

// Map uploaded files to CTD sections
export const mapFilesToCTDSections = (files, ctdStructure) => {
  const mappedStructure = JSON.parse(JSON.stringify(ctdStructure));
  
  // Simple file mapping based on path patterns
  const pathMappings = {
    // Module 1 mappings
    'cover': ['Module_1', '1.0'],
    'toc': ['Module_1', '1.1'],
    'application': ['Module_1', '1.2', '1.2.1'],
    'registration': ['Module_1', '1.2', '1.2.2'],
    'incorporation': ['Module_1', '1.2', '1.2.3'],
    'attorney': ['Module_1', '1.2', '1.2.4'],
    'declaration': ['Module_1', '1.2', '1.2.5'],
    'manufacturing': ['Module_1', '1.2', '1.2.6'],
    'cpp': ['Module_1', '1.2', '1.2.7'],
    'gmp': ['Module_1', '1.2', '1.2.8'],
    'authorization': ['Module_1', '1.2', '1.2.9'],
    'trademark': ['Module_1', '1.2', '1.2.10'],
    'pharmacist': ['Module_1', '1.2', '1.2.11'],
    'premises': ['Module_1', '1.2', '1.2.12'],
    'marketing': ['Module_1', '1.2', '1.2.13'],
    'inspection': ['Module_1', '1.2', '1.2.14'],
    'cep': ['Module_1', '1.2', '1.2.15'],
    'apimf': ['Module_1', '1.2', '1.2.16'],
    'biowaiver': ['Module_1', '1.2', '1.2.17'],
    'smpc': ['Module_1', '1.3', '1.3.1'],
    'label': ['Module_1', '1.3', '1.3.2'],
    'pil': ['Module_1', '1.3', '1.3.3'],
    'qis': ['Module_1', '1.4', '1.4.2'],
    
    // Module 2 mappings
    'qos': ['Module_2', '2.3'],
    'overview': ['Module_2', '2.4'],
    
    // Module 3 mappings
    'api': ['Module_3', '3.2.S'],
    'drug_substance': ['Module_3', '3.2.S'],
    'drug_product': ['Module_3', '3.2.P'],
    'stability': ['Module_3', '3.2.P', '3.2.P.8'],
    'specification': ['Module_3', '3.2.P', '3.2.P.5'],
    
    // Module 5 mappings
    'bioequivalence': ['Module_5', '5.3', '5.3.1'],
    'be_study': ['Module_5', '5.3', '5.3.1'],
    'clinical': ['Module_5', '5.3']
  };
  
  files.forEach(file => {
    const fileName = file.name.toLowerCase();
    const filePath = file.path.toLowerCase();
    
    // Find matching pattern
    for (const [pattern, location] of Object.entries(pathMappings)) {
      if (fileName.includes(pattern) || filePath.includes(pattern)) {
        const [moduleId, sectionId, subsectionId] = location;
        
        if (mappedStructure[moduleId] && mappedStructure[moduleId].sections[sectionId]) {
          if (subsectionId && mappedStructure[moduleId].sections[sectionId].subsections?.[subsectionId]) {
            mappedStructure[moduleId].sections[sectionId].subsections[subsectionId].files.push(file);
          } else {
            mappedStructure[moduleId].sections[sectionId].files.push(file);
          }
        }
        break;
      }
    }
  });
  
  return mappedStructure;
};