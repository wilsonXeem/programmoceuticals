import JSZip from 'jszip';
import { saveAs } from 'file-saver';

class TemplateGeneratorService {
  constructor() {
    this.templates = {
      'coverLetter': this.generateCoverLetterTemplate,
      'applicationLetter': this.generateApplicationLetterTemplate,
      'qosPD': this.generateQOSPDTemplate,
      'qis': this.generateQISTemplate,
      'smpc': this.generateSmPCTemplate,
      'pil': this.generatePILTemplate,
      'masterTOC': this.generateMasterTOCTemplate
    };
  }

  async generateTemplate(templateType, productInfo, apiOption) {
    if (!this.templates[templateType]) {
      throw new Error(`Template type ${templateType} not supported`);
    }

    return this.templates[templateType](productInfo, apiOption);
  }

  generateCoverLetterTemplate(productInfo, apiOption) {
    const apiOptionText = {
      option1: 'API Prequalification Document',
      option2: 'Certificate of Suitability (CEP)',
      option3: 'APIMF (Active Pharmaceutical Ingredient Master File)',
      option4: 'Full Details in Product Dossier'
    };

    const template = `COVER LETTER

To: National Agency for Food and Drug Administration and Control (NAFDAC)
    Plot 2032, Olusegun Obasanjo Way
    Zone 7, Wuse District
    Abuja, Nigeria

From: [APPLICANT COMPANY NAME]
      [COMPANY ADDRESS]
      [CITY, STATE, COUNTRY]
      [PHONE NUMBER]
      [EMAIL ADDRESS]

Date: ${new Date().toLocaleDateString()}

Subject: Marketing Authorization Application - ${productInfo.productName || '[PRODUCT NAME]'}

Dear NAFDAC Review Team,

We hereby submit our application for marketing authorization for ${productInfo.productName || '[PRODUCT NAME]'} in the Common Technical Document (CTD) format as per NAFDAC guidelines DR&R-GDL-018-01.

APPLICATION DETAILS:
- Product Name: ${productInfo.productName || '[PRODUCT NAME]'}
- Strength(s): [STRENGTH(S)]
- Dosage Form: [DOSAGE FORM]
- Route of Administration: [ROUTE]
- API Submission Type: ${apiOptionText[apiOption] || '[API OPTION]'}
- Application Type: New Marketing Authorization
- Submission Date: ${new Date().toLocaleDateString()}
- NMRA Application Number: [TO BE ASSIGNED]

MANUFACTURER INFORMATION:
- Manufacturing Site: [MANUFACTURING SITE NAME]
- Manufacturing Address: [MANUFACTURING ADDRESS]
- GMP Certificate Number: [GMP CERTIFICATE NUMBER]
- GMP Issuing Authority: [ISSUING AUTHORITY]

APPLICANT INFORMATION:
- Applicant Company: [APPLICANT COMPANY NAME]
- Local Representative: [LOCAL REPRESENTATIVE NAME]
- Contact Person: [CONTACT PERSON NAME]
- Phone: [PHONE NUMBER]
- Email: [EMAIL ADDRESS]

This submission includes all required modules and documents as specified in the NAFDAC CTD guidelines:

MODULE 1: Administrative and Product Information
- Complete application documentation
- Product information (SmPC, Labels, PIL)
- Regional summaries (QIS, BTIF if applicable)

MODULE 2: CTD Summaries
- Quality Overall Summary (QOS-PD)
- CTD Introduction and Table of Contents

MODULE 3: Quality
- ${apiOptionText[apiOption] || 'API information per selected option'}
- Complete drug product information
- Manufacturing and control data

MODULE 5: Clinical Study Reports
- Bioequivalence study report (if applicable)
- Supporting clinical documentation

We confirm that:
1. All information provided is accurate and complete to the best of our knowledge
2. The product is manufactured in compliance with GMP standards
3. We have the legal right to market this product in Nigeria
4. We will comply with all NAFDAC requirements and regulations

We respectfully request your favorable consideration of this application and look forward to your response.

Thank you for your attention to this matter.

Sincerely,

_________________________
[AUTHORIZED SIGNATORY NAME]
[TITLE]
[COMPANY NAME]
[DATE]

_________________________
[COMPANY SEAL]

Attachments: CTD Modules 1-5 as per NAFDAC requirements`;

    return new Blob([template], { type: 'text/plain' });
  }

  generateApplicationLetterTemplate(productInfo, apiOption) {
    const template = `APPLICATION LETTER

Date: ${new Date().toLocaleDateString()}

To: The Director General
    National Agency for Food and Drug Administration and Control (NAFDAC)
    Plot 2032, Olusegun Obasanjo Way
    Zone 7, Wuse District
    Abuja, Nigeria

Subject: Application for Marketing Authorization - ${productInfo.productName || '[PRODUCT NAME]'}

Dear Sir/Madam,

We, [APPLICANT COMPANY NAME], hereby formally apply for marketing authorization for our pharmaceutical product detailed below:

PRODUCT INFORMATION:
- Product Name: ${productInfo.productName || '[PRODUCT NAME]'}
- Generic Name (INN): [INTERNATIONAL NON-PROPRIETARY NAME]
- Strength(s): [STRENGTH(S)]
- Pharmaceutical Form: [DOSAGE FORM]
- Route of Administration: [ROUTE OF ADMINISTRATION]
- Therapeutic Classification: [ATC CODE AND CLASSIFICATION]
- Intended Use: [THERAPEUTIC INDICATION]

REGULATORY PATHWAY:
This application follows the generic drug pathway as outlined in NAFDAC guidelines, with bioequivalence demonstration to the reference product [REFERENCE PRODUCT NAME].

MANUFACTURING INFORMATION:
- Manufacturer: [MANUFACTURER NAME]
- Manufacturing Site: [MANUFACTURING ADDRESS]
- Manufacturing License Number: [LICENSE NUMBER]
- GMP Certificate: [CERTIFICATE NUMBER] issued by [ISSUING AUTHORITY]

APPLICANT INFORMATION:
- Applicant: [APPLICANT COMPANY NAME]
- Business Address: [BUSINESS ADDRESS]
- Registration Number: [COMPANY REGISTRATION NUMBER]
- Local Representative: [LOCAL REPRESENTATIVE NAME]
- Responsible Pharmacist: [PHARMACIST NAME] (License No: [LICENSE NUMBER])

SUBMISSION DETAILS:
This application is submitted in CTD format and includes:
- Module 1: Administrative and Product Information
- Module 2: CTD Summaries including QOS-PD
- Module 3: Quality documentation
- Module 5: Clinical study reports (bioequivalence)

We confirm that this product:
1. Is manufactured according to GMP standards
2. Meets all quality specifications
3. Has demonstrated bioequivalence to the reference product
4. Is safe and efficacious for its intended use

We undertake to:
1. Comply with all NAFDAC regulations and requirements
2. Report any adverse events or safety concerns
3. Maintain product quality throughout its lifecycle
4. Submit variations for any changes as required

We respectfully request your favorable consideration and approval of this marketing authorization application.

Thank you for your attention.

Yours faithfully,

_________________________
[AUTHORIZED SIGNATORY NAME]
[TITLE]
[COMPANY NAME]
[DATE]

_________________________
[COMPANY SEAL]`;

    return new Blob([template], { type: 'text/plain' });
  }

  generateQOSPDTemplate(productInfo, apiOption) {
    const apiSectionContent = {
      option1: `2.3.S DRUG SUBSTANCE (API PREQUALIFICATION ROUTE)

2.3.S.1 General Information
The drug substance [API NAME] is covered by WHO prequalification document [DOCUMENT NUMBER]. Complete prequalification documentation is provided in Module 3.2.S.

2.3.S.2 Manufacture
Manufacturing details are provided in the WHO prequalification document. Additional information specific to batches used in this product is provided in Module 3.2.S.2.

2.3.S.3 Characterisation
Characterisation data is included in the prequalification document with additional physicochemical properties provided in Module 3.2.S.3.

2.3.S.4 Control of Drug Substance
Specifications and analytical procedures are as per prequalification document with additional batch analysis data provided in Module 3.2.S.4.`,

      option2: `2.3.S DRUG SUBSTANCE (CEP ROUTE)

2.3.S.1 General Information
The drug substance [API NAME] is covered by Certificate of Suitability (CEP) number [CEP NUMBER] issued by EDQM. Complete CEP documentation is provided in Module 3.2.S.

2.3.S.2 Manufacture
Manufacturing information is covered by the CEP. Letter of access from CEP holder is provided in Module 1.2.15.

2.3.S.3 Characterisation
Characterisation is covered by the CEP with additional data provided as necessary.

2.3.S.4 Control of Drug Substance
Control strategy is as per CEP with additional specifications provided in Module 3.2.S.4 where applicable.`,

      option3: `2.3.S DRUG SUBSTANCE (APIMF ROUTE)

2.3.S.1 General Information
The drug substance [API NAME] is covered by APIMF [APIMF NUMBER]. Open part of APIMF and letter of access are provided in Module 3.2.S.

2.3.S.2 Manufacture
Manufacturing information is provided in the APIMF closed part. Open part information is included in Module 3.2.S.2.

2.3.S.3 Characterisation
Characterisation data from APIMF open part is provided in Module 3.2.S.3.

2.3.S.4 Control of Drug Substance
Control strategy from APIMF is supplemented with additional data in Module 3.2.S.4.`,

      option4: `2.3.S DRUG SUBSTANCE (FULL DETAILS)

2.3.S.1 General Information
Complete general information for [API NAME] including nomenclature, structure, and general properties is provided in Module 3.2.S.1.

2.3.S.2 Manufacture
Full manufacturing process, controls, and validation data are provided in Module 3.2.S.2.

2.3.S.3 Characterisation
Complete characterisation including structure elucidation and impurity profile is provided in Module 3.2.S.3.

2.3.S.4 Control of Drug Substance
Comprehensive control strategy including specifications, analytical procedures, and validation is provided in Module 3.2.S.4.`
    };

    const template = `QUALITY OVERALL SUMMARY - PRODUCT DOSSIER (QOS-PD)

Product Name: ${productInfo.productName || '[PRODUCT NAME]'}
Applicant: [APPLICANT NAME]
Date: ${new Date().toLocaleDateString()}

1. INTRODUCTION

This Quality Overall Summary provides an overview of the quality aspects of ${productInfo.productName || '[PRODUCT NAME]'}, [STRENGTH] [DOSAGE FORM]. This summary covers the drug substance and drug product information contained in Module 3 of this CTD submission.

The product is a generic version of [REFERENCE PRODUCT NAME] and is intended for [THERAPEUTIC INDICATION]. This submission follows the ${apiOption} route for API documentation.

${apiSectionContent[apiOption] || apiSectionContent.option4}

2.3.P DRUG PRODUCT

2.3.P.1 Description and Composition
${productInfo.productName || '[PRODUCT NAME]'} is formulated as [DOSAGE FORM] containing [STRENGTH] of [API NAME] per [UNIT]. Complete composition including all excipients is provided in Module 3.2.P.1.

The formulation is designed to provide [RELEASE CHARACTERISTICS] and is bioequivalent to the reference product [REFERENCE PRODUCT NAME].

2.3.P.2 Pharmaceutical Development
The pharmaceutical development program focused on developing a bioequivalent formulation to the reference product. Key development activities included:
- Formulation optimization studies
- Process development and scale-up
- Analytical method development
- Stability studies
- Bioequivalence study

Complete development data is provided in Module 3.2.P.2.

2.3.P.3 Manufacture
The product is manufactured by [MANUFACTURER NAME] at [MANUFACTURING SITE]. The manufacturing process consists of [BRIEF PROCESS DESCRIPTION]. Complete manufacturing information including batch formula, process description, and controls is provided in Module 3.2.P.3.

2.3.P.4 Control of Excipients
All excipients used in the formulation comply with compendial standards. Specifications and certificates of analysis are provided in Module 3.2.P.4.

2.3.P.5 Control of Drug Product
The drug product specification includes tests for [LIST KEY TESTS]. All analytical procedures are validated according to ICH guidelines. Batch analysis data for [NUMBER] batches is provided in Module 3.2.P.5.

2.3.P.6 Reference Standards or Materials
Reference standards used for testing are described in Module 3.2.P.6.

2.3.P.7 Container Closure System
The product is packaged in [CONTAINER DESCRIPTION]. Container closure system qualification data is provided in Module 3.2.P.7.

2.3.P.8 Stability
Stability studies have been conducted according to ICH guidelines. The proposed shelf life is [SHELF LIFE] when stored at [STORAGE CONDITIONS]. Complete stability data is provided in Module 3.2.P.8.

3. CONCLUSION

The quality data presented in this dossier demonstrates that ${productInfo.productName || '[PRODUCT NAME]'} is manufactured to appropriate quality standards and is suitable for its intended use. The product has been shown to be bioequivalent to the reference product and meets all quality requirements for marketing authorization.

Prepared by: [PREPARER NAME]
Date: ${new Date().toLocaleDateString()}
Reviewed by: [REVIEWER NAME]
Approved by: [APPROVER NAME]`;

    return new Blob([template], { type: 'text/plain' });
  }

  generateQISTemplate(productInfo) {
    const template = `QUALITY INFORMATION SUMMARY (QIS)

Product Name: ${productInfo.productName || '[PRODUCT NAME]'}
Applicant: [APPLICANT NAME]
Date: ${new Date().toLocaleDateString()}

1. PRODUCT INFORMATION

1.1 Product Identification
- Product Name: ${productInfo.productName || '[PRODUCT NAME]'}
- Generic Name (INN): [INTERNATIONAL NON-PROPRIETARY NAME]
- Strength(s): [STRENGTH(S)]
- Dosage Form: [DOSAGE FORM]
- Route of Administration: [ROUTE]
- ATC Code: [ATC CODE]

1.2 Therapeutic Classification
- Therapeutic Class: [THERAPEUTIC CLASS]
- Pharmacological Class: [PHARMACOLOGICAL CLASS]
- Indication: [THERAPEUTIC INDICATION]

2. COMPOSITION

2.1 Qualitative and Quantitative Composition
[TABLE OF COMPOSITION]

Component                    | Function        | Quantity per unit
[API NAME]                  | Active ingredient| [QUANTITY] mg
[EXCIPIENT 1]              | [FUNCTION]      | [QUANTITY] mg
[EXCIPIENT 2]              | [FUNCTION]      | [QUANTITY] mg
...

2.2 Overages
[DESCRIBE ANY OVERAGES AND JUSTIFICATION]

3. MANUFACTURING INFORMATION

3.1 Manufacturer Details
- Manufacturer Name: [MANUFACTURER NAME]
- Manufacturing Site: [COMPLETE ADDRESS]
- Manufacturing License: [LICENSE NUMBER]
- GMP Certificate: [CERTIFICATE NUMBER] issued by [AUTHORITY]

3.2 Manufacturing Process
- Process Type: [PROCESS TYPE]
- Key Manufacturing Steps: [BRIEF DESCRIPTION]
- Batch Size: [BATCH SIZE]
- Manufacturing Equipment: [KEY EQUIPMENT]

4. QUALITY SPECIFICATIONS

4.1 Drug Substance Specification
- Appearance: [SPECIFICATION]
- Identification: [TESTS]
- Assay: [LIMITS]
- Impurities: [LIMITS]
- Water Content: [LIMITS]
- Particle Size: [SPECIFICATION]

4.2 Drug Product Specification
- Appearance: [SPECIFICATION]
- Identification: [TESTS]
- Assay: [LIMITS]
- Dissolution: [SPECIFICATION]
- Uniformity: [SPECIFICATION]
- Impurities: [LIMITS]

5. STABILITY DATA

5.1 Storage Conditions
- Recommended Storage: [STORAGE CONDITIONS]
- Container Closure: [CONTAINER DESCRIPTION]

5.2 Shelf Life
- Proposed Shelf Life: [SHELF LIFE]
- Justification: Based on [DURATION] stability data

5.3 Stability Summary
[SUMMARY OF STABILITY RESULTS]

6. BIOEQUIVALENCE INFORMATION

6.1 Reference Product
- Reference Product: [REFERENCE PRODUCT NAME]
- Manufacturer: [REFERENCE MANUFACTURER]
- Batch Number: [BATCH NUMBER]

6.2 Bioequivalence Study
- Study Design: [STUDY DESIGN]
- Number of Subjects: [NUMBER]
- Bioequivalence Conclusion: [CONCLUSION]

7. REGULATORY STATUS

7.1 Marketing Authorization
- Countries where approved: [LIST COUNTRIES]
- Reference regulatory authority: [AUTHORITY]

7.2 GMP Status
- GMP inspection status: [STATUS]
- Last inspection date: [DATE]

Prepared by: [PREPARER NAME]
Position: [POSITION]
Date: ${new Date().toLocaleDateString()}

Reviewed by: [REVIEWER NAME]
Position: [POSITION]
Date: [DATE]

Approved by: [APPROVER NAME]
Position: [POSITION]
Date: [DATE]`;

    return new Blob([template], { type: 'text/plain' });
  }

  generateSmPCTemplate(productInfo) {
    const template = `SUMMARY OF PRODUCT CHARACTERISTICS (SmPC)

1. NAME OF THE MEDICINAL PRODUCT

${productInfo.productName || '[PRODUCT NAME]'} [STRENGTH] [DOSAGE FORM]

2. QUALITATIVE AND QUANTITATIVE COMPOSITION

Each [UNIT] contains:
Active ingredient: [API NAME] [STRENGTH]

For the full list of excipients, see section 6.1.

3. PHARMACEUTICAL FORM

[DOSAGE FORM]
[DESCRIPTION OF APPEARANCE]

4. CLINICAL PARTICULARS

4.1 Therapeutic indications
[THERAPEUTIC INDICATIONS]

4.2 Posology and method of administration
Posology:
[DOSAGE INSTRUCTIONS]

Method of administration:
[ROUTE OF ADMINISTRATION]

4.3 Contraindications
[CONTRAINDICATIONS]

4.4 Special warnings and precautions for use
[WARNINGS AND PRECAUTIONS]

4.5 Interaction with other medicinal products and other forms of interaction
[DRUG INTERACTIONS]

4.6 Fertility, pregnancy and lactation
Pregnancy: [PREGNANCY INFORMATION]
Breast-feeding: [LACTATION INFORMATION]
Fertility: [FERTILITY INFORMATION]

4.7 Effects on ability to drive and use machines
[EFFECTS ON DRIVING]

4.8 Undesirable effects
[ADVERSE REACTIONS]

4.9 Overdose
[OVERDOSE INFORMATION]

5. PHARMACOLOGICAL PROPERTIES

5.1 Pharmacodynamic properties
Pharmacotherapeutic group: [ATC CODE AND DESCRIPTION]
Mechanism of action: [MECHANISM]

5.2 Pharmacokinetic properties
Absorption: [ABSORPTION DATA]
Distribution: [DISTRIBUTION DATA]
Metabolism: [METABOLISM DATA]
Elimination: [ELIMINATION DATA]

5.3 Preclinical safety data
[PRECLINICAL DATA]

6. PHARMACEUTICAL PARTICULARS

6.1 List of excipients
[LIST OF EXCIPIENTS]

6.2 Incompatibilities
[INCOMPATIBILITIES]

6.3 Shelf life
[SHELF LIFE]

6.4 Special precautions for storage
[STORAGE CONDITIONS]

6.5 Nature and contents of container
[CONTAINER DESCRIPTION]

6.6 Special precautions for disposal and other handling
[DISPOSAL INSTRUCTIONS]

7. MARKETING AUTHORISATION HOLDER

[COMPANY NAME]
[ADDRESS]
[COUNTRY]

8. MARKETING AUTHORISATION NUMBER(S)

[TO BE ASSIGNED BY NAFDAC]

9. DATE OF FIRST AUTHORISATION/RENEWAL OF THE AUTHORISATION

[TO BE ASSIGNED BY NAFDAC]

10. DATE OF REVISION OF THE TEXT

${new Date().toLocaleDateString()}`;

    return new Blob([template], { type: 'text/plain' });
  }

  generatePILTemplate(productInfo) {
    const template = `PATIENT INFORMATION LEAFLET

${productInfo.productName || '[PRODUCT NAME]'} [STRENGTH] [DOSAGE FORM]
[API NAME]

Read all of this leaflet carefully before you start taking this medicine because it contains important information for you.
- Keep this leaflet. You may need to read it again.
- If you have any further questions, ask your doctor or pharmacist.
- This medicine has been prescribed for you only. Do not pass it on to others.
- If you get any side effects, talk to your doctor or pharmacist. This includes any possible side effects not listed in this leaflet.

What is in this leaflet:
1. What ${productInfo.productName || '[PRODUCT NAME]'} is and what it is used for
2. What you need to know before you take ${productInfo.productName || '[PRODUCT NAME]'}
3. How to take ${productInfo.productName || '[PRODUCT NAME]'}
4. Possible side effects
5. How to store ${productInfo.productName || '[PRODUCT NAME]'}
6. Contents of the pack and other information

1. WHAT ${productInfo.productName?.toUpperCase() || '[PRODUCT NAME]'} IS AND WHAT IT IS USED FOR

${productInfo.productName || '[PRODUCT NAME]'} contains the active substance [API NAME].

${productInfo.productName || '[PRODUCT NAME]'} is used to treat [INDICATION].

2. WHAT YOU NEED TO KNOW BEFORE YOU TAKE ${productInfo.productName?.toUpperCase() || '[PRODUCT NAME]'}

Do not take ${productInfo.productName || '[PRODUCT NAME]'} if:
- You are allergic to [API NAME] or any of the other ingredients of this medicine
- [OTHER CONTRAINDICATIONS]

Warnings and precautions:
Talk to your doctor or pharmacist before taking ${productInfo.productName || '[PRODUCT NAME]'} if:
- [WARNINGS AND PRECAUTIONS]

Other medicines and ${productInfo.productName || '[PRODUCT NAME]'}:
Tell your doctor or pharmacist if you are taking, have recently taken or might take any other medicines.
[DRUG INTERACTIONS]

Pregnancy and breast-feeding:
If you are pregnant or breast-feeding, think you may be pregnant or are planning to have a baby, ask your doctor or pharmacist for advice before taking this medicine.
[PREGNANCY AND LACTATION INFORMATION]

Driving and using machines:
[EFFECTS ON DRIVING]

3. HOW TO TAKE ${productInfo.productName?.toUpperCase() || '[PRODUCT NAME]'}

Always take this medicine exactly as your doctor has told you. Check with your doctor or pharmacist if you are not sure.

The recommended dose is [DOSAGE].

Method of administration: [ADMINISTRATION INSTRUCTIONS]

If you take more ${productInfo.productName || '[PRODUCT NAME]'} than you should:
[OVERDOSE INSTRUCTIONS]

If you forget to take ${productInfo.productName || '[PRODUCT NAME]'}:
[MISSED DOSE INSTRUCTIONS]

If you stop taking ${productInfo.productName || '[PRODUCT NAME]'}:
[DISCONTINUATION INSTRUCTIONS]

4. POSSIBLE SIDE EFFECTS

Like all medicines, this medicine can cause side effects, although not everybody gets them.

[SIDE EFFECTS INFORMATION]

Reporting of side effects:
If you get any side effects, talk to your doctor or pharmacist. You can also report side effects directly via NAFDAC at www.nafdac.gov.ng or pharmacovigilance@nafdac.gov.ng.

5. HOW TO STORE ${productInfo.productName?.toUpperCase() || '[PRODUCT NAME]'}

Keep this medicine out of the sight and reach of children.

Do not use this medicine after the expiry date which is stated on the [CONTAINER]. The expiry date refers to the last day of that month.

Storage conditions: [STORAGE CONDITIONS]

Do not throw away any medicines via wastewater or household waste. Ask your pharmacist how to throw away medicines you no longer use.

6. CONTENTS OF THE PACK AND OTHER INFORMATION

What ${productInfo.productName || '[PRODUCT NAME]'} contains:
- The active substance is [API NAME]. Each [UNIT] contains [STRENGTH] of [API NAME].
- The other ingredients are: [LIST OF EXCIPIENTS]

What ${productInfo.productName || '[PRODUCT NAME]'} looks like and contents of the pack:
[DESCRIPTION AND PACK SIZES]

Marketing Authorisation Holder:
[COMPANY NAME]
[ADDRESS]

Manufacturer:
[MANUFACTURER NAME]
[MANUFACTURING ADDRESS]

This leaflet was last revised in ${new Date().toLocaleDateString()}.`;

    return new Blob([template], { type: 'text/plain' });
  }

  generateMasterTOCTemplate(productInfo) {
    const template = `MASTER TABLE OF CONTENTS

${productInfo.productName || '[PRODUCT NAME]'} - NAFDAC CTD Submission

Applicant: [APPLICANT NAME]
Date: ${new Date().toLocaleDateString()}

MODULE 1: ADMINISTRATIVE AND PRODUCT INFORMATION

1.0 Cover Letter
1.1 Table of Contents (Modules 1-5)
1.2 Application Information
    1.2.1 Application Letter
    1.2.2 Registration Form (NAFDAC Form 001)
    1.2.3 Certificate of Incorporation
    1.2.4 Power of Attorney
    1.2.5 Notarized Declaration
    1.2.6 Contract Manufacturing Agreement
    1.2.7 Certificate of Pharmaceutical Product
    1.2.8 GMP Certificate
    1.2.9 Manufacturing Authorization
    1.2.10 Trademark Registration (if applicable)
    1.2.11 Pharmacist License
    1.2.12 Premises Registration Certificate
    1.2.13 Previous Marketing Authorization (if applicable)
    1.2.14 GMP Inspection Invitation Letter
    1.2.15 CEP Certificate (if applicable)
    1.2.16 APIMF Letter of Access (if applicable)
    1.2.17 BCS Biowaiver Request (if applicable)
    1.2.18 Additional Strength Biowaiver (if applicable)
1.3 Product Information
    1.3.1 Summary of Product Characteristics (SmPC)
    1.3.2 Labelling (Outer and Inner Labels)
    1.3.3 Patient Information Leaflet (PIL)
1.4 Regional Summaries
    1.4.1 Bioequivalence Trial Information Form (BTIF)
    1.4.2 Quality Information Summary (QIS)
1.5 Electronic Review Documents
1.6 Product Samples Documentation

MODULE 2: CTD SUMMARIES

2.1 CTD Table of Contents (Modules 2-5)
2.2 CTD Introduction
2.3 Quality Overall Summary (QOS-PD)
    2.3.S Drug Substance Summary
    2.3.P Drug Product Summary
2.4 Non-Clinical Overview (not required for generics)
2.5 Clinical Overview (not required for generics)
2.6 Non-Clinical Written and Tabulated Summaries (not required for generics)
2.7 Clinical Summary (not required for generics)

MODULE 3: QUALITY

3.1 Table of Contents (Module 3)
3.2.S Drug Substance
    3.2.S.1 General Information
        3.2.S.1.1 Nomenclature
        3.2.S.1.2 Structure
        3.2.S.1.3 General Properties
    3.2.S.2 Manufacture
    3.2.S.3 Characterisation
    3.2.S.4 Control of Drug Substance
        3.2.S.4.1 Specification
        3.2.S.4.2 Analytical Procedures
        3.2.S.4.3 Validation of Analytical Procedures
        3.2.S.4.4 Batch Analyses
        3.2.S.4.5 Justification of Specification
    3.2.S.5 Reference Standards or Materials
    3.2.S.6 Container Closure System
    3.2.S.7 Stability
3.2.P Drug Product
    3.2.P.1 Description and Composition of the Drug Product
    3.2.P.2 Pharmaceutical Development
    3.2.P.3 Manufacture
    3.2.P.4 Control of Excipients
    3.2.P.5 Control of Drug Product
        3.2.P.5.1 Specification(s)
        3.2.P.5.2 Analytical Procedures
        3.2.P.5.3 Validation of Analytical Procedures
        3.2.P.5.4 Batch Analyses
        3.2.P.5.5 Characterization of Impurities
        3.2.P.5.6 Justification of Specification(s)
    3.2.P.6 Reference Standards or Materials
    3.2.P.7 Container Closure System
    3.2.P.8 Stability
3.3 Literature References

MODULE 4: NON-CLINICAL STUDY REPORTS (not required for generics)

4.1 Table of Contents (Module 4)
4.2 Study Reports
4.3 Literature References

MODULE 5: CLINICAL STUDY REPORTS

5.1 Table of Contents (Module 5)
5.2 Tabular Listing of Clinical Studies
5.3 Clinical Study Reports
    5.3.1 Reports of Biopharmaceutical Studies
        5.3.1.1 Bioavailability (BA) Study Reports
        5.3.1.2 Comparative Bioavailability (BA) and Bioequivalence (BE) Study Reports
        5.3.1.3 In vitro-In vivo Correlation Study Reports
        5.3.1.4 Reports of Bioanalytical and Analytical Methods for Human Studies
5.4 Literature References

END OF TABLE OF CONTENTS

Total Modules: 5 (Modules 1, 2, 3, 5 - Module 4 not required for generic products)
Submission Type: Generic Drug Application
API Route: [API OPTION]
Date Prepared: ${new Date().toLocaleDateString()}`;

    return new Blob([template], { type: 'text/plain' });
  }

  async generateTemplatePackage(productInfo, apiOption, selectedTemplates = []) {
    const zip = new JSZip();
    const templatesFolder = zip.folder(`${productInfo.productName || 'Product'}_Templates`);

    // Generate selected templates or all if none specified
    const templatesToGenerate = selectedTemplates.length > 0 ? selectedTemplates : Object.keys(this.templates);

    for (const templateType of templatesToGenerate) {
      try {
        const template = await this.generateTemplate(templateType, productInfo, apiOption);
        const fileName = this.getTemplateFileName(templateType);
        templatesFolder.file(fileName, template);
      } catch (error) {
        console.error(`Failed to generate template ${templateType}:`, error);
      }
    }

    // Generate instructions file
    const instructions = this.generateInstructions(productInfo, apiOption);
    templatesFolder.file('README_Instructions.txt', instructions);

    const zipBlob = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 }
    });

    const fileName = `${productInfo.productName || 'Product'}_NAFDAC_Templates_${new Date().toISOString().split('T')[0]}.zip`;
    saveAs(zipBlob, fileName);

    return { fileName, templatesGenerated: templatesToGenerate.length };
  }

  getTemplateFileName(templateType) {
    const fileNames = {
      'coverLetter': '00_Cover_Letter_Template.txt',
      'applicationLetter': '1.2.1_Application_Letter_Template.txt',
      'qosPD': '2.3_QOS-PD_Template.txt',
      'qis': '1.4.2_QIS_Template.txt',
      'smpc': '1.3.1_SmPC_Template.txt',
      'pil': '1.3.3_PIL_Template.txt',
      'masterTOC': '01_Master_TOC_Template.txt'
    };
    return fileNames[templateType] || `${templateType}_Template.txt`;
  }

  generateInstructions(productInfo, apiOption) {
    return `NAFDAC CTD TEMPLATE INSTRUCTIONS

Product: ${productInfo.productName || '[PRODUCT NAME]'}
API Option: ${apiOption}
Generated: ${new Date().toLocaleDateString()}

INSTRUCTIONS FOR USING THESE TEMPLATES:

1. GENERAL GUIDELINES:
   - Replace all placeholder text in [BRACKETS] with actual information
   - Ensure all information is accurate and complete
   - Follow NAFDAC formatting requirements
   - Use official letterhead where applicable

2. TEMPLATE DESCRIPTIONS:

   Cover Letter Template:
   - Use for Module 1.0 submission
   - Include all required product and company information
   - Must be signed by authorized representative

   Application Letter Template:
   - Use for Module 1.2.1
   - Formal request for marketing authorization
   - Include complete product details

   QOS-PD Template:
   - Use for Module 2.3
   - Summarizes quality information from Module 3
   - Adapt content based on your API option

   QIS Template:
   - Use for Module 1.4.2
   - NAFDAC-specific quality summary
   - Include all required sections

   SmPC Template:
   - Use for Module 1.3.1
   - Follow NAFDAC SmPC format
   - Include all mandatory sections

   PIL Template:
   - Use for Module 1.3.3
   - Patient-friendly language
   - Include all safety information

   Master TOC Template:
   - Use for Module 1.1
   - Complete table of contents for entire submission
   - Update page numbers after final compilation

3. IMPORTANT NOTES:
   - All documents must be in English
   - Use PDF format for final submission
   - Include page numbers and document control
   - Ensure consistency across all documents
   - Review NAFDAC guidelines before finalizing

4. NEXT STEPS:
   - Complete all placeholder information
   - Review with regulatory team
   - Obtain necessary approvals and signatures
   - Convert to PDF format
   - Upload to CTD Compiler for final dossier assembly

For questions or support, refer to NAFDAC guidelines DR&R-GDL-018-01.

Generated by ProgrammoCeuticals CTD Compiler
${new Date().toLocaleDateString()}`;
  }
}

export const templateGeneratorService = new TemplateGeneratorService();