# NAFDAC CTD Dossier Compiler - Development Plan

## Project Overview

A pay-per-session web application that enables pharmaceutical companies to create, validate, and export NAFDAC-compliant Common Technical Document (CTD) dossiers for drug registration in Nigeria.

### Core Value Proposition
**Pay → Access → Build Dossier → Export** - Simple, focused, no complex user management.

---

## System Requirements Analysis

### NAFDAC CTD Structure Requirements

#### Document Format & Compliance
- **Language**: All submissions in English with certified translations
- **Format**: Electronic submission in searchable PDF (QIS in MS Word)
- **Organization**: ICH CTD format with 5 modules plus appendices
- **Storage Conditions**: 30°C ± 2°C/75% ± 5% RH (Zone IVB)

#### Module Structure
1. **Module 1**: Administrative & Product Information
2. **Module 2**: CTD Summaries (QOS-PD, QIS templates)
3. **Module 3**: Quality (Most complex - 3.2.S Drug Substance, 3.2.P Drug Product)
4. **Module 4**: Non-clinical (Not required for generics)
5. **Module 5**: Clinical (Bioequivalence/biowaiver for generics)

#### Critical Validation Requirements
- API submission options (CEP, APIMF, Full details, Prequalification)
- Cross-module consistency validation
- Batch analysis requirements (minimum 2 pilot-scale batches)
- Stability testing protocols and commitments
- Container-closure system specifications

---

## Development Plan

### Phase 1: Core Foundation (Weeks 1-2)

#### 1.1 Simple User System
**Priority: Critical**
```
Features:
- User registration/login (email + password)
- Session-based payment integration (Stripe/Paystack)
- Session expiry management (24-48 hours after payment)
- Basic user profile (name, email, company)
```

#### 1.2 Dossier Data Model & File Storage
**Priority: Critical**
```javascript
// MongoDB Collections
users: {
  id: ObjectId,
  email: String,
  name: String,
  company: String,
  createdAt: Date
}

sessions: {
  id: ObjectId,
  userId: ObjectId,
  expiresAt: Date,
  paymentId: String,
  active: Boolean
}

dossiers: {
  id: ObjectId,
  userId: ObjectId,
  sessionId: ObjectId,
  title: String,
  productType: String, // 'generic', 'newChemicalEntity', 'biologic'
  apiSubmissionOption: String, // 'option1', 'option2', 'option3', 'option4'
  status: String, // 'draft', 'in_progress', 'validation_pending', 'completed', 'exported'
  completionPercentage: Number,
  
  // Hierarchical module structure matching NAFDAC CTD
  modules: {
    module1: {
      sections: {
        '1.0': { completed: Boolean, data: Object },
        '1.1': { completed: Boolean, data: Object },
        '1.2.1': { completed: Boolean, data: Object, files: [ObjectId] },
        '1.2.2': { completed: Boolean, data: Object, files: [ObjectId] },
        // ... all subsections dynamically generated
        '1.3.1': { completed: Boolean, data: Object, files: [ObjectId] },
        '1.3.2': { completed: Boolean, data: Object, files: [ObjectId] },
        '1.3.3': { completed: Boolean, data: Object, files: [ObjectId] }
      }
    },
    module2: {
      sections: {
        '2.1': { completed: Boolean, data: Object },
        '2.2': { completed: Boolean, data: Object },
        '2.3': { completed: Boolean, data: Object, generatedFile: String },
        '2.4': { completed: Boolean, data: Object, required: Boolean },
        '2.5': { completed: Boolean, data: Object, required: Boolean }
      }
    },
    module3: {
      drugSubstance: {
        submissionOption: String,
        sections: Map // Dynamic based on API option
      },
      drugProduct: {
        sections: Map // All P.1 through P.8 sections
      },
      regionalInfo: {
        sections: Map // R.1.1, R.1.2, R.2
      }
    },
    module4: {
      required: Boolean,
      sections: Map // Dynamic based on product type
    },
    module5: {
      sections: Map // Dynamic based on product type
    }
  },
  
  validationResults: {
    lastValidated: Date,
    errors: [Object],
    warnings: [Object],
    isValid: Boolean
  },
  
  exportHistory: [{
    exportedAt: Date,
    downloadUrl: String,
    expiresAt: Date
  }],
  
  createdAt: Date,
  updatedAt: Date
}

files: {
  id: ObjectId,
  dossierId: ObjectId,
  moduleId: String, // '1.2.1', '3.2.S.4.4', etc.
  filename: String,
  originalName: String,
  fileType: String,
  fileSize: Number,
  cloudinaryUrl: String, // Public URL from Cloudinary
  cloudinaryPublicId: String, // For deletion/management
  uploadedAt: Date,
  metadata: {
    description: String,
    category: String, // 'certificate', 'report', 'specification'
    version: String
  }
}

// Cloudinary Configuration
cloudinaryConfig: {
  folder_structure: 'nafdac-dossiers/{userId}/{dossierId}/{moduleId}',
  allowed_formats: ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png'],
  max_file_size: 50 * 1024 * 1024, // 50MB
  auto_optimize: true,
  secure_urls: true
}
```

### Phase 2: Dossier Builder Core (Weeks 3-4)

#### 2.1 CTD Module Structure
**Priority: Critical**

**Module 1: Administrative & Product Information**
- 1.0 Cover Letter (template with required fields)
- 1.1 Table of Contents (Modules 1-5)
- 1.2 Application Information (18 subsections):
  - 1.2.1 Application Letter
  - 1.2.2 Registration Form
  - 1.2.3 Certificate of Incorporation
  - 1.2.4 Power of Attorney
  - 1.2.5 Notarized Declaration
  - 1.2.6 Contract Manufacturing Agreement
  - 1.2.7 Certificate of Pharmaceutical Product
  - 1.2.8 GMP Certificate
  - 1.2.9 Manufacturing Authorization
  - 1.2.10 Trademark Registration
  - 1.2.11 Pharmacist License
  - 1.2.12 Premises Certificate
  - 1.2.13 Previous Marketing Authorization
  - 1.2.14 GMP Inspection Invitation
  - 1.2.15 CEP Certificate (if applicable)
  - 1.2.16 APIMF Letter of Access (if applicable)
  - 1.2.17 BCS Biowaiver Request (if applicable)
  - 1.2.18 Additional Strength Biowaiver (if applicable)
- 1.3 Product Information:
  - 1.3.1 Summary of Product Characteristics (SmPC)
  - 1.3.2 Labelling (outer & inner labels)
  - 1.3.3 Patient Information Leaflet (PIL)
- 1.4 Regional Summaries:
  - 1.4.1 Bioequivalence Trial Information Form (BTIF)
  - 1.4.2 Quality Information Summary (QIS)
- 1.5 Electronic Review Documents
- 1.6 Product Samples

**Module 2: CTD Summaries**
- 2.1 CTD Table of Contents (Modules 2-5)
- 2.2 CTD Introduction
- 2.3 Quality Overall Summary (QOS-PD)
- 2.4 Nonclinical Overview (not required for generics)
- 2.5 Clinical Overview (not required for generics)
  - 2.5.1 Product Development Rationale
  - 2.5.2 Overview of Biopharmaceutics
  - 2.5.3 Overview of Clinical Pharmacology
  - 2.5.4 Overview of Efficacy
  - 2.5.5 Overview of Safety
  - 2.5.6 Benefits and Risks Conclusions
  - 2.5.7 Literature References
- 2.6 Nonclinical Written and Tabulated Summaries (not required for generics)
- 2.7 Clinical Summary (not required for generics)

**Module 3: Quality (Most Complex)**
- 3.1 Table of Contents (Module 3)
- 3.2.S Drug Substance (API submission options):
  - Option 1: API Prequalification Document
  - Option 2: Certificate of Suitability (CEP)
  - Option 3: Active Pharmaceutical Ingredient Master File (APIMF)
  - Option 4: Full Details in Product Dossier
    - 3.2.S.1 General Information
      - 3.2.S.1.1 Nomenclature
      - 3.2.S.1.2 Structure
      - 3.2.S.1.3 General Properties
    - 3.2.S.2 Manufacture
      - 3.2.S.2.1 Manufacturer(s)
      - 3.2.S.2.2 Description of Manufacturing Process and Process Controls
      - 3.2.S.2.3 Control of Materials
      - 3.2.S.2.4 Controls of Critical Steps and Intermediates
      - 3.2.S.2.5 Process Validation and/or Evaluation
      - 3.2.S.2.6 Manufacturing Process Development
    - 3.2.S.3 Characterisation
      - 3.2.S.3.1 Elucidation of Structure and Other Characteristics
      - 3.2.S.3.2 Impurities
    - 3.2.S.4 Control of Drug Substance
      - 3.2.S.4.1 Specification
      - 3.2.S.4.2 Analytical Procedures
      - 3.2.S.4.3 Validation of Analytical Procedures
      - 3.2.S.4.4 Batch Analyses
      - 3.2.S.4.5 Justification of Specification
    - 3.2.S.5 Reference Standards or Materials
    - 3.2.S.6 Container-Closure System
    - 3.2.S.7 Stability
      - 3.2.S.7.1 Stability Summary and Conclusions
      - 3.2.S.7.2 Post-approval Stability Protocol and Stability Commitment
      - 3.2.S.7.3 Stability Data
- 3.2.P Drug Product (Finished Pharmaceutical Product)
  - 3.2.P.1 Description and Composition of the FPP
  - 3.2.P.2 Pharmaceutical Development
    - 3.2.P.2.1 Components of the FPP
      - 3.2.P.2.1.1 Active Pharmaceutical Ingredient
      - 3.2.P.2.1.2 Excipients
    - 3.2.P.2.2 Finished Pharmaceutical Product
      - 3.2.P.2.2.1 Formulation Development
      - 3.2.P.2.2.2 Overages
      - 3.2.P.2.2.3 Physicochemical and Biological Properties
    - 3.2.P.2.3 Manufacturing Process Development
    - 3.2.P.2.4 Container-Closure System
    - 3.2.P.2.5 Microbiological Attributes
    - 3.2.P.2.6 Compatibility
  - 3.2.P.3 Manufacture
    - 3.2.P.3.1 Manufacturer(s)
    - 3.2.P.3.2 Batch Formula
    - 3.2.P.3.3 Description of Manufacturing Process and Process Controls
    - 3.2.P.3.4 Controls of Critical Steps and Intermediates
    - 3.2.P.3.5 Process Validation and/or Evaluation
  - 3.2.P.4 Control of Excipients
    - 3.2.P.4.1 Specifications
    - 3.2.P.4.2 Analytical Procedures
    - 3.2.P.4.3 Validation of Analytical Procedures
    - 3.2.P.4.4 Justification of Specifications
    - 3.2.P.4.5 Excipients of Human or Animal Origin
    - 3.2.P.4.6 Novel Excipients
  - 3.2.P.5 Control of FPP
    - 3.2.P.5.1 Specification(s)
    - 3.2.P.5.2 Analytical Procedures
    - 3.2.P.5.3 Validation of Analytical Procedures
    - 3.2.P.5.4 Batch Analyses
    - 3.2.P.5.5 Characterization of Impurities
    - 3.2.P.5.6 Justification of Specification(s)
  - 3.2.P.6 Reference Standards or Materials
  - 3.2.P.7 Container-Closure System
  - 3.2.P.8 Stability
    - 3.2.P.8.1 Stability Summary and Conclusions
    - 3.2.P.8.2 Post-approval Stability Protocol and Stability Commitment
    - 3.2.P.8.3 Stability Data
- 3.2.A Appendices
  - 3.2.A.1 Facilities and Equipment (not applicable for non-biotech)
  - 3.2.A.2 Adventitious Agent's Safety Evaluation
  - 3.2.A.3 Novel Excipients (not accepted by NAFDAC)
- 3.2.R Regional Information
  - 3.2.R.1 Production Documentation
    - 3.2.R.1.1 Executed Production Documents
    - 3.2.R.1.2 Master Production Documents
  - 3.2.R.2 Analytical Procedures and Validation Information
- 3.3 Literature References

**Module 4: Non-clinical Summaries (not required for generics)**
- 4.1 Table of Contents (Module 4)
- 4.2 Study Reports
  - 4.2.1 Pharmacology
    - 4.2.1.1 Primary Pharmacodynamics
    - 4.2.1.2 Secondary Pharmacodynamics
    - 4.2.1.3 Safety Pharmacology
    - 4.2.1.4 Pharmacodynamic Drug Interactions
  - 4.2.2 Pharmacokinetics
    - 4.2.2.1 Analytical Methods and Validation Reports
    - 4.2.2.2 Absorption
    - 4.2.2.3 Distribution
    - 4.2.2.4 Metabolism
    - 4.2.2.5 Excretion
    - 4.2.2.6 Pharmacokinetic Drug Interactions
    - 4.2.2.7 Other Pharmacokinetic Studies
  - 4.2.3 Toxicology
    - 4.2.3.1 Single-Dose Toxicity
    - 4.2.3.2 Repeat-Dose Toxicity
    - 4.2.3.3 Genotoxicity
      - 4.2.3.3.1 In vitro
      - 4.2.3.3.2 In vivo
    - 4.2.3.4 Carcinogenicity
      - 4.2.3.4.1 Long-term Studies
      - 4.2.3.4.2 Short/Medium-term Studies
      - 4.2.3.4.3 Other Studies
    - 4.2.3.5 Reproductive and Developmental Toxicity
      - 4.2.3.5.1 Fertility and Early Embryonic Development
      - 4.2.3.5.2 Embryo-fetal Development
      - 4.2.3.5.3 Prenatal and Postnatal Development
      - 4.2.3.5.4 Juvenile Animal Studies
    - 4.2.3.6 Local Tolerance
    - 4.2.3.7 Other Toxicity Studies
      - 4.2.3.7.1 Antigenicity
      - 4.2.3.7.2 Immunotoxicity
      - 4.2.3.7.3 Mechanistic Studies
      - 4.2.3.7.4 Dependence
      - 4.2.3.7.5 Metabolites
      - 4.2.3.7.6 Impurities
      - 4.2.3.7.7 Other
- 4.3 Literature References

**Module 5: Clinical Summaries (bioequivalence/biowaiver for generics)**
- 5.1 Table of Contents (Module 5)
- 5.2 Tabular Listing of Clinical Studies
- 5.3 Clinical Study Reports
  - 5.3.1 Reports of Bio-pharmaceutical Studies
    - 5.3.1.1 Bioavailability (BA) Study Reports
    - 5.3.1.2 Comparative Bioavailability (BA) and Bioequivalence (BE) Study Reports
    - 5.3.1.3 In vitro-In vivo Correlation Study Reports
    - 5.3.1.4 Reports of Bioanalytical and Analytical Methods for Human Studies
  - 5.3.2 Reports of Studies Pertinent to Pharmacokinetics using Human Biomaterials
    - 5.3.2.1 Plasma Protein Binding Study Reports
    - 5.3.2.2 Reports of Hepatic Metabolism and Drug Interaction Studies
    - 5.3.2.3 Reports of Studies Using Other Human Biomaterials
  - 5.3.3 Reports of Human Pharmacokinetic Studies
    - 5.3.3.1 Healthy Subject PK and Initial Tolerability Study Reports
    - 5.3.3.2 Patient PK and Initial Tolerability Study Reports
    - 5.3.3.3 Intrinsic Factor PK Study Reports
    - 5.3.3.4 Extrinsic Factor PK Study Reports
    - 5.3.3.5 Population PK Study Reports
  - 5.3.4 Reports of Human Pharmacodynamic Studies
    - 5.3.4.1 Healthy Subject PD and PK/PD Study Reports
    - 5.3.4.2 Patient PD and PK/PD Study Reports
  - 5.3.5 Reports of Efficacy and Safety Studies
    - 5.3.5.1 Study Reports of Controlled Clinical Studies Pertinent to the Claimed Indication
    - 5.3.5.2 Study Reports of Uncontrolled Clinical Studies
    - 5.3.5.3 Reports of Analyses of Data from Multiple Studies
    - 5.3.5.4 Other Clinical Study Reports
  - 5.3.6 Reports of Post-marketing Experience
  - 5.3.7 Case Report Forms and Individual Patient Listings
- 5.4 Literature References

#### 2.2 Form Builder System
**Priority: High**
```
Features:
- Dynamic forms for each module section
- File upload with drag-and-drop
- Auto-save functionality every 30 seconds
- Progress tracking per module
- Form validation with real-time feedback
```

### Phase 3: Validation Engine (Weeks 5-6)

#### 3.1 NAFDAC Compliance Checker
**Priority: Critical**

**NAFDAC CTD Validation Rules:**
```javascript
const nafdacValidationRules = {
  // Product type determines which modules are required
  productTypes: {
    generic: {
      requiredModules: [1, 2, 3, 5],
      optionalModules: [],
      excludedModules: [4]
    },
    newChemicalEntity: {
      requiredModules: [1, 2, 3, 4, 5],
      optionalModules: [],
      excludedModules: []
    }
  },
  
  // Module-specific validation rules
  modules: {
  module1: {
    required: ['coverLetter', 'tableOfContents'],
    applicationInfo: {
      required: ['applicationLetter', 'registrationForm', 'certificateOfIncorporation', 
                'powerOfAttorney', 'notarizedDeclaration', 'gmpCertificate', 
                'manufacturingAuth'],
      conditional: ['cepCertificate', 'apimfLetterAccess', 'biowaiverRequest']
    },
    productInfo: {
      required: ['smpc', 'labelling', 'pil']
    },
    regionalSummaries: {
      required: ['qis'],
      conditional: ['btif']
    },
    files: ['electronicDocuments', 'productSamples']
  },
  module2: {
    required: ['ctdTableOfContents', 'ctdIntroduction', 'qualityOverallSummary'],

    genericProducts: {
      notRequired: ['nonclinicalOverview', 'clinicalOverview', 'nonclinicalSummaries', 'clinicalSummary']
    },
    clinicalOverview: {
      required: ['productDevelopmentRationale', 'biopharmaceuticsOverview', 'clinicalPharmacologyOverview', 
                'efficacyOverview', 'safetyOverview', 'benefitsRisksConclusions', 'literatureReferences'],
      applicableFor: ['newChemicalEntities', 'biologics']
    },
    crossCheck: ['qosMatchesModule3']
  },
  module3: {
    required: ['tableOfContents', 'drugSubstance', 'drugProduct'],
    apiSubmissionOptions: {
      option1: {
        required: ['prequalificationDocument', 'generalProperties', 'batchAnalysis'],
        conditional: ['sterilizationData', 'polymorphStudies', 'stabilityData']
      },
      option2: {
        required: ['cepCertificate', 'withdrawalCommitment', 'generalProperties', 'batchAnalysis'],
        conditional: ['containerClosure', 'stabilityData']
      },
      option3: {
        required: ['apimfOpenPart', 'letterOfAccess'],
        sections: ['S1_1to3', 'S2', 'S3_1to2', 'S4_1to5', 'S5', 'S6', 'S7_1to3']
      },
      option4: {
        required: ['nomenclature', 'structure', 'generalProperties', 'manufacture', 
                  'characterisation', 'control', 'referenceStandards', 'containerClosure', 'stability'],
        manufacture: {
          required: ['manufacturers', 'manufacturingProcess', 'controlOfMaterials', 'criticalSteps', 'processValidation'],
          optional: ['processDevelopment']
        },
        characterisation: {
          required: ['structureElucidation', 'impurities']
        },
        control: {
          required: ['specification', 'analyticalProcedures', 'validation', 'batchAnalyses', 'justification']
        },
        stability: {
          required: ['stabilitySummary', 'stabilityProtocol', 'stabilityData']
        }
      }
    },
    drugProduct: {
      required: ['description', 'pharmaceuticalDevelopment', 'manufacture', 'excipientControl', 'fppControl', 'stability'],
      pharmaceuticalDevelopment: {
        required: ['components', 'formulation', 'processDevt', 'containerClosure'],
        optional: ['microbiological', 'compatibility']
      },
      manufacture: {
        required: ['manufacturers', 'batchFormula', 'processControls', 'criticalSteps', 'processValidation']
      },
      control: {
        required: ['excipientSpecs', 'fppSpecs', 'analyticalProcedures', 'batchAnalyses']
      },
      stability: {
        required: ['stabilitySummary', 'stabilityProtocol', 'stabilityData']
      }
    },
    regionalInformation: {
      required: ['productionDocumentation', 'analyticalProcedures'],
      productionDocumentation: {
        required: ['executedProductionDocs', 'masterProductionDocs']
      }
    },
    validation: ['batchAnalysis', 'stabilityData', 'specifications', 'crossModuleConsistency']
  },
  module4: {
    applicableFor: ['newChemicalEntities', 'biologics'],
    notRequired: ['generics'],
    required: ['tableOfContents'],
    studyReports: {
      pharmacology: {
        optional: ['primaryPharmacodynamics', 'secondaryPharmacodynamics', 'safetyPharmacology', 'drugInteractions']
      },
      pharmacokinetics: {
        optional: ['analyticalMethods', 'absorption', 'distribution', 'metabolism', 'excretion', 'drugInteractions', 'otherStudies']
      },
      toxicology: {
        optional: ['singleDose', 'repeatDose', 'genotoxicity', 'carcinogenicity', 'reproductiveToxicity', 'localTolerance', 'otherToxicity']
      }
    }
  },
  module5: {
    required: ['tableOfContents'],
    generics: {
      required: ['bioequivalenceStudies'],
      optional: ['biowaiverJustification']
    },
    newChemicalEntities: {
      required: ['tabularListing', 'clinicalStudyReports'],
      biopharmaceuticalStudies: {
        required: ['bioavailability', 'bioequivalence'],
        optional: ['inVitroInVivoCorrelation', 'bioanalyticalMethods']
      },
      pharmacokineticStudies: {
        optional: ['humanBiomaterials', 'humanPK', 'pharmacodynamics']
      },
      efficacySafetyStudies: {
        required: ['controlledStudies'],
        optional: ['uncontrolledStudies', 'metaAnalyses', 'postMarketing']
      }
    }
  }
}
```

**Cross-Module Validation:**
- QOS data matches Module 3 specifications
- API information consistency across modules
- Batch numbers referenced correctly
- Storage conditions alignment

#### 3.2 Real-time Validation
**Priority: Medium**
```
Features:
- Live validation feedback during data entry
- Completion percentage per module
- Error/warning categorization (Critical, Warning, Info)
- Validation summary dashboard
- Export readiness indicator
```

### Phase 4: Export System (Weeks 7-8)

#### 4.1 CTD Package Generator
**Priority: Critical**

**NAFDAC CTD Package Structure:**
```
/NAFDAC_CTD_Package/
├── Module_1_Administrative_Product_Information/
│   ├── 1.0_Cover_Letter/
│   ├── 1.1_Table_of_Contents/
│   ├── 1.2_Application_Information/
│   │   ├── 1.2.1_Application_Letter/
│   │   ├── 1.2.2_Registration_Form/
│   │   ├── 1.2.3_Certificate_of_Incorporation/
│   │   ├── 1.2.4_Power_of_Attorney/
│   │   ├── 1.2.5_Notarized_Declaration/
│   │   ├── 1.2.6_Contract_Manufacturing_Agreement/
│   │   ├── 1.2.7_Certificate_of_Pharmaceutical_Product/
│   │   ├── 1.2.8_GMP_Certificate/
│   │   ├── 1.2.9_Manufacturing_Authorization/
│   │   ├── 1.2.10_Trademark_Registration/
│   │   ├── 1.2.11_Pharmacist_License/
│   │   ├── 1.2.12_Premises_Certificate/
│   │   ├── 1.2.13_Previous_Marketing_Authorization/
│   │   ├── 1.2.14_GMP_Inspection_Invitation/
│   │   ├── 1.2.15_CEP_Certificate/ (if applicable)
│   │   ├── 1.2.16_APIMF_Letter_of_Access/ (if applicable)
│   │   ├── 1.2.17_BCS_Biowaiver_Request/ (if applicable)
│   │   └── 1.2.18_Additional_Strength_Biowaiver/ (if applicable)
│   ├── 1.3_Product_Information/
│   │   ├── 1.3.1_SmPC/
│   │   ├── 1.3.2_Labelling/
│   │   └── 1.3.3_PIL/
│   ├── 1.4_Regional_Summaries/
│   │   ├── 1.4.1_BTIF/ (if applicable)
│   │   └── 1.4.2_QIS/
│   ├── 1.5_Electronic_Review_Documents/
│   └── 1.6_Product_Samples/
├── Module_2_CTD_Summaries/
│   ├── 2.1_CTD_Table_of_Contents/
│   ├── 2.2_CTD_Introduction/
│   ├── 2.3_Quality_Overall_Summary/
│   ├── 2.4_Nonclinical_Overview/ (NCE only)
│   ├── 2.5_Clinical_Overview/ (NCE only)
│   ├── 2.6_Nonclinical_Summaries/ (NCE only)
│   └── 2.7_Clinical_Summary/ (NCE only)
├── Module_3_Quality/
│   ├── 3.1_Table_of_Contents/
│   ├── 3.2.S_Drug_Substance/
│   │   └── [Complete API submission structure based on selected option]
│   ├── 3.2.P_Drug_Product/
│   │   └── [Complete FPP structure with all P.1-P.8 sections]
│   ├── 3.2.A_Appendices/
│   ├── 3.2.R_Regional_Information/
│   │   ├── 3.2.R.1_Production_Documentation/
│   │   └── 3.2.R.2_Analytical_Procedures/
│   └── 3.3_Literature_References/
├── Module_4_Nonclinical/ (NCE/Biologics only)
│   ├── 4.1_Table_of_Contents/
│   ├── 4.2_Study_Reports/
│   │   ├── 4.2.1_Pharmacology/
│   │   ├── 4.2.2_Pharmacokinetics/
│   │   └── 4.2.3_Toxicology/
│   └── 4.3_Literature_References/
└── Module_5_Clinical/
    ├── 5.1_Table_of_Contents/
    ├── 5.2_Tabular_Listing/
    ├── 5.3_Clinical_Study_Reports/
    │   ├── 5.3.1_Biopharmaceutical_Studies/ (Required for generics)
    │   ├── 5.3.2_Human_Biomaterials/ (NCE only)
    │   ├── 5.3.3_Human_PK_Studies/ (NCE only)
    │   ├── 5.3.4_Human_PD_Studies/ (NCE only)
    │   ├── 5.3.5_Efficacy_Safety_Studies/ (NCE only)
    │   ├── 5.3.6_Post_marketing_Experience/ (if applicable)
    │   └── 5.3.7_Case_Report_Forms/ (if applicable)
    └── 5.4_Literature_References/
```

#### 4.2 Dossier Export System
**Priority: High**

**Export Architecture:**
```javascript
// Export service handles complete dossier compilation
const exportService = {
  // Generate complete CTD package
  generateCTDPackage: async (dossierId) => {
    const dossier = await Dossier.findById(dossierId).populate('files')
    const exportJob = await createExportJob(dossierId)
    
    // 1. Create folder structure
    const packageStructure = await createPackageStructure(dossier)
    
    // 2. Generate templates (QOS-PD, QIS, Cover Letter)
    const templates = await generateTemplates(dossier)
    
    // 3. Organize files by module/section
    const organizedFiles = await organizeFilesBySection(dossier.files)
    
    // 4. Create ZIP archive
    const zipBuffer = await createZipArchive(packageStructure, templates, organizedFiles)
    
    // 5. Upload to temporary storage (Cloudinary or S3)
    const downloadUrl = await uploadExportPackage(zipBuffer, dossierId)
    
    // 6. Update export history
    await updateExportHistory(dossierId, downloadUrl)
    
    return { downloadUrl, expiresAt: Date.now() + (24 * 60 * 60 * 1000) }
  },
  
  // Template generation with data population
  generateTemplates: async (dossier) => {
    return {
      qosPD: await generateQOSTemplate(dossier.modules.module2['2.3'].data),
      qis: await generateQISTemplate(dossier.modules.module1['1.4.2'].data),
      coverLetter: await generateCoverLetter(dossier.modules.module1['1.0'].data),
      tableOfContents: await generateMasterTOC(dossier)
    }
  },
  
  // File organization matching NAFDAC structure
  organizeFilesBySection: async (files) => {
    const organized = {}
    
    files.forEach(file => {
      const modulePath = mapModuleIdToPath(file.moduleId)
      if (!organized[modulePath]) organized[modulePath] = []
      organized[modulePath].push({
        filename: file.filename,
        cloudinaryUrl: file.cloudinaryUrl,
        metadata: file.metadata
      })
    })
    
    return organized
  },
  
  // ZIP creation with proper NAFDAC folder structure
  createZipArchive: async (structure, templates, files) => {
    const zip = new JSZip()
    
    // Add folder structure
    Object.keys(structure).forEach(folderPath => {
      zip.folder(folderPath)
    })
    
    // Add generated templates
    Object.entries(templates).forEach(([name, content]) => {
      const path = getTemplatePath(name)
      zip.file(path, content)
    })
    
    // Add user files
    for (const [path, fileList] of Object.entries(files)) {
      for (const file of fileList) {
        const fileBuffer = await downloadFromCloudinary(file.cloudinaryUrl)
        zip.file(`${path}/${file.filename}`, fileBuffer)
      }
    }
    
    return await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' })
  }
}

// Background job processing for large exports
const exportQueue = {
  process: async (job) => {
    const { dossierId, userId } = job.data
    
    try {
      const result = await exportService.generateCTDPackage(dossierId)
      
      // Notify user via email/websocket
      await notifyExportComplete(userId, result.downloadUrl)
      
      return result
    } catch (error) {
      await notifyExportFailed(userId, error.message)
      throw error
    }
  }
}
```

**Template Generation:**
```javascript
// QOS-PD Template with data population
const generateQOSTemplate = async (qosData) => {
  const template = await loadTemplate('QOS-PD-Template.docx')
  
  // Replace placeholders with actual data
  const populated = template
    .replace('{{PRODUCT_NAME}}', qosData.productName)
    .replace('{{API_NAME}}', qosData.apiName)
    .replace('{{MANUFACTURER}}', qosData.manufacturer)
    // ... all QOS fields
  
  return populated
}

// Master Table of Contents generation
const generateMasterTOC = async (dossier) => {
  const toc = []
  
  // Generate TOC based on completed sections
  Object.entries(dossier.modules).forEach(([moduleKey, moduleData]) => {
    if (moduleData.sections) {
      Object.entries(moduleData.sections).forEach(([sectionKey, sectionData]) => {
        if (sectionData.completed) {
          toc.push({
            section: sectionKey,
            title: getSectionTitle(sectionKey),
            page: calculatePageNumber(sectionKey)
          })
        }
      })
    }
  })
  
  return generateTOCDocument(toc)
}
```

### Phase 5: Frontend & UX (Weeks 9-10)

#### 5.1 User Interface
**Priority: High**

**Core Pages:**
```javascript
// React Components Structure
- LandingPage (pricing, features)
- PaymentPage (Stripe integration)
- DossierDashboard (list user's dossiers)
- DossierEditor (main workspace)
  - ModuleTabs (1-5)
  - ModuleForm (dynamic forms)
  - FileUpload (drag-and-drop)
  - ValidationPanel (real-time feedback)
- ExportPage (download options)
```

#### 5.2 User Experience Features
**Priority: Medium**
```
Features:
- Progress indicators for each module
- Validation status display with icons
- Help tooltips with NAFDAC requirements
- Auto-save notifications
- Export/download interface
- Mobile-responsive design
```

---

## Technical Architecture

### Backend API Structure
```javascript
// Core API Endpoints
POST /auth/register
POST /auth/login
POST /auth/logout

POST /payment/create-session
POST /payment/verify
GET /payment/status

GET /dossiers
POST /dossiers
GET /dossiers/:id
PUT /dossiers/:id
DELETE /dossiers/:id

PUT /dossiers/:id/modules/:moduleId
GET /dossiers/:id/validation
POST /dossiers/:id/export

POST /files/upload
GET /files/:id
DELETE /files/:id
```

### Frontend Architecture
```javascript
// React App Structure
src/
├── components/
│   ├── common/
│   ├── forms/
│   ├── modules/
│   └── validation/
├── pages/
│   ├── Landing.jsx
│   ├── Payment.jsx
│   ├── Dashboard.jsx
│   └── Editor.jsx
├── hooks/
├── services/
└── utils/
```

### Database Design
```javascript
// Optimized for simplicity and performance
- MongoDB for document storage
- GridFS for large file storage
- Redis for session management
- Indexes on userId, sessionId, dossierId
```

---

## Payment Model Options

### Option 1: Time-based Sessions (Recommended)
- **Price**: $50 for 48-hour access
- **Features**: Create multiple dossiers during session
- **Expiry**: Automatic session expiration
- **Value**: Best for users with multiple products

### Option 2: Per-Dossier
- **Price**: $30 per dossier compilation
- **Features**: Unlimited time to complete
- **Renewal**: Pay again for new dossier
- **Value**: Best for single product submissions

### Option 3: Credits System
- **Price**: $10 = 1 credit
- **Usage**: 3 credits = 1 complete dossier, 1 credit = export
- **Flexibility**: Buy credits in advance
- **Value**: Best for frequent users

---

## MVP Features (First Release)

### Must Have (Core MVP)
- [x] User registration/login
- [x] Payment integration (Stripe)
- [x] Module 1-3 forms
- [x] File upload system
- [x] Basic validation engine
- [x] CTD export functionality

### Should Have (Enhanced MVP)
- [ ] Auto-save functionality
- [ ] Progress tracking
- [ ] Advanced validation rules
- [ ] Template auto-population
- [ ] Real-time validation feedback

### Could Have (Future Releases)
- [ ] Collaboration features (share dossier)
- [ ] Dossier templates library
- [ ] Bulk import capabilities
- [ ] API access for integrations
- [ ] Advanced analytics

---

## Technology Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens
- **File Upload**: Multer + AWS S3
- **Payment**: Stripe API
- **Background Jobs**: Bull Queue
- **Validation**: Joi/Yup

### Frontend
- **Framework**: React 18 with TypeScript
- **UI Library**: Material-UI v5
- **State Management**: React Query + Context
- **Forms**: React Hook Form
- **File Upload**: React Dropzone
- **PDF Generation**: jsPDF/PDFKit

### Infrastructure
- **Containerization**: Docker
- **Cloud Storage**: AWS S3
- **Caching**: Redis
- **Deployment**: AWS ECS/Vercel
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry

---

## Implementation Timeline

### Week 1-2: Foundation
- [ ] Project setup and configuration
- [ ] Database schema implementation
- [ ] Basic authentication system
- [ ] Payment integration setup

### Week 3-4: Core Features
- [ ] CTD module structure
- [ ] Form builder system
- [ ] File upload functionality
- [ ] Basic validation engine

### Week 5-6: Validation & Logic
- [ ] NAFDAC compliance rules
- [ ] Cross-module validation
- [ ] Real-time validation feedback
- [ ] Progress tracking

### Week 7-8: Export System
- [ ] CTD package generator
- [ ] Template auto-population
- [ ] ZIP/PDF export
- [ ] Download management

### Week 9-10: Frontend & UX
- [ ] Complete UI implementation
- [ ] Mobile responsiveness
- [ ] User experience optimization
- [ ] Testing and bug fixes

---

## Risk Mitigation Strategies

### Technical Risks
1. **Complex Validation Logic**
   - Mitigation: Build incrementally, test extensively
   - Fallback: Manual validation checklist

2. **Large File Handling**
   - Mitigation: Implement chunked uploads, progress indicators
   - Fallback: File size limits, compression

3. **Export Generation Performance**
   - Mitigation: Background job processing, caching
   - Fallback: Email delivery for large exports

### Business Risks
1. **Payment Processing Issues**
   - Mitigation: Multiple payment providers, error handling
   - Fallback: Manual payment verification

2. **NAFDAC Requirement Changes**
   - Mitigation: Modular validation system, easy updates
   - Fallback: Version control for different requirements

---

## Success Metrics

### Technical KPIs
- Page load time < 3 seconds
- File upload success rate > 99%
- Export generation time < 2 minutes
- System uptime > 99.5%

### Business KPIs
- User conversion rate > 15%
- Session completion rate > 80%
- Customer satisfaction > 4.5/5
- Monthly recurring revenue growth

---

## Post-Launch Roadmap

### Phase 2 Features (Months 2-3)
- Advanced validation rules
- Collaboration features
- Dossier templates
- Mobile app

### Phase 3 Features (Months 4-6)
- API integrations
- Bulk operations
- Advanced analytics
- Multi-language support

### Phase 4 Features (Months 7-12)
- AI-assisted form filling
- Regulatory timeline tracking
- Integration with NAFDAC systems
- Enterprise features

---

## Conclusion

This development plan provides a clear roadmap for building a focused, pay-per-session NAFDAC CTD Dossier Compiler. The approach prioritizes core functionality while maintaining simplicity and avoiding complex role-based systems.

The key to success will be:
1. **Focus on core value**: Dossier creation and export
2. **Maintain simplicity**: No unnecessary features
3. **Ensure compliance**: Strict adherence to NAFDAC requirements
4. **Optimize UX**: Make the process as smooth as possible
5. **Reliable payments**: Seamless payment experience

By following this plan, we can deliver a valuable tool that serves the pharmaceutical industry's need for NAFDAC-compliant dossier preparation while maintaining a sustainable business model.