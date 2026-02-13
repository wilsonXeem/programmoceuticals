// CTD Template Generation Service
class CTDTemplateService {
  generateSmPCTemplate(productInfo) {
    const template = `
SUMMARY OF PRODUCT CHARACTERISTICS (SmPC)
${productInfo.productName || '[Product Name]'}

1. NAME OF THE MEDICINAL PRODUCT
${productInfo.productName || '[Product Name]'} ${productInfo.strength || '[Strength]'} ${productInfo.dosageForm || '[Dosage Form]'}

2. QUALITATIVE AND QUANTITATIVE COMPOSITION
Each ${productInfo.dosageForm || '[dosage unit]'} contains:
Active ingredient: ${productInfo.activeIngredient || '[Active Ingredient]'} ${productInfo.strength || '[Strength]'}
[Complete composition to be filled]

3. PHARMACEUTICAL FORM
${productInfo.dosageForm || '[Dosage Form]'}
[Description of appearance]

4. CLINICAL PARTICULARS
4.1 Therapeutic indications
[To be completed based on approved indications]

4.2 Posology and method of administration
[To be completed]

4.3 Contraindications
[To be completed]

4.4 Special warnings and precautions for use
[To be completed]

4.5 Interaction with other medicinal products and other forms of interaction
[To be completed]

4.6 Fertility, pregnancy and lactation
[To be completed]

4.7 Effects on ability to drive and use machines
[To be completed]

4.8 Undesirable effects
[To be completed]

4.9 Overdose
[To be completed]

5. PHARMACOLOGICAL PROPERTIES
5.1 Pharmacodynamic properties
[To be completed]

5.2 Pharmacokinetic properties
[To be completed]

5.3 Preclinical safety data
[To be completed]

6. PHARMACEUTICAL PARTICULARS
6.1 List of excipients
[To be completed]

6.2 Incompatibilities
[To be completed]

6.3 Shelf life
${productInfo.shelfLife || '[Shelf Life]'}

6.4 Special precautions for storage
${productInfo.storageConditions || '[Storage Conditions]'}

6.5 Nature and contents of container
[To be completed]

6.6 Special precautions for disposal and other handling
[To be completed]

7. MARKETING AUTHORISATION HOLDER
${productInfo.applicantName || '[Applicant Name]'}
${productInfo.applicantAddress || '[Applicant Address]'}

8. MARKETING AUTHORISATION NUMBER(S)
[To be assigned by NAFDAC]

9. DATE OF FIRST AUTHORISATION/RENEWAL OF THE AUTHORISATION
[To be assigned by NAFDAC]

10. DATE OF REVISION OF THE TEXT
${new Date().toLocaleDateString()}
`;

    return new Blob([template], { type: 'text/plain' });
  }

  generateQISTemplate(productInfo, ctdStructure) {
    const template = `
QUALITY INFORMATION SUMMARY (QIS)
${productInfo.productName || '[Product Name]'}

SECTION A: ADMINISTRATIVE INFORMATION
A1. Product Name: ${productInfo.productName || '[Product Name]'}
A2. Strength(s): ${productInfo.strength || '[Strength]'}
A3. Dosage Form: ${productInfo.dosageForm || '[Dosage Form]'}
A4. Route of Administration: ${productInfo.routeOfAdmin || '[Route]'}
A5. Applicant: ${productInfo.applicantName || '[Applicant Name]'}
A6. Manufacturer: ${productInfo.manufacturerName || '[Manufacturer Name]'}
A7. Manufacturing Site: ${productInfo.manufacturingSite || '[Manufacturing Site]'}

SECTION B: COMPOSITION
B1. Quantitative Composition per ${productInfo.dosageForm || 'unit'}:
Active Pharmaceutical Ingredient:
- ${productInfo.activeIngredient || '[API Name]'}: ${productInfo.strength || '[Amount]'}

Excipients:
[List all excipients with quantities]

SECTION C: PHARMACEUTICAL DEVELOPMENT
C1. Formulation Development: [Summary of development rationale]
C2. Manufacturing Process: [Brief description]
C3. Container-Closure System: [Description]

SECTION D: CONTROL OF MATERIALS
D1. Drug Substance Control:
- Specification: [Key parameters]
- Analytical Methods: [Brief description]
- Batch Analysis: [Summary of 3 batches minimum]

D2. Drug Product Control:
- Specification: [Key parameters]
- Analytical Methods: [Brief description]
- Batch Analysis: [Summary of 3 batches minimum]

SECTION E: STABILITY
E1. Drug Substance Stability:
- Storage Conditions: [Conditions tested]
- Shelf Life: [Proposed shelf life]

E2. Drug Product Stability:
- Storage Conditions: ${productInfo.storageConditions || '[Storage Conditions]'}
- Shelf Life: ${productInfo.shelfLife || '[Shelf Life]'}
- Packaging: [Container-closure system]

SECTION F: BIOEQUIVALENCE (if applicable)
F1. Reference Product: [Reference product details]
F2. Study Design: [BE study design]
F3. Results: [Summary of BE results]

SECTION G: CONCLUSION
This QIS demonstrates that ${productInfo.productName || '[Product Name]'} meets the required quality standards for marketing authorization in Nigeria.

Prepared by: [Name and Title]
Date: ${new Date().toLocaleDateString()}
Signature: _________________
`;

    return new Blob([template], { type: 'text/plain' });
  }

  generateApplicationLetter(productInfo) {
    const template = `
APPLICATION LETTER FOR MARKETING AUTHORIZATION

Date: ${new Date().toLocaleDateString()}

To: The Director General
National Agency for Food and Drug Administration and Control (NAFDAC)
Plot 2032, Olusegun Obasanjo Way
Wuse Zone 7, Abuja
Nigeria

Subject: Application for Marketing Authorization - ${productInfo.productName || '[Product Name]'}

Dear Sir/Madam,

We, ${productInfo.applicantName || '[Applicant Company Name]'}, hereby submit our application for marketing authorization for the pharmaceutical product detailed below:

PRODUCT DETAILS:
- Product Name: ${productInfo.productName || '[Product Name]'}
- Generic Name: ${productInfo.activeIngredient || '[Generic Name]'}
- Strength: ${productInfo.strength || '[Strength]'}
- Dosage Form: ${productInfo.dosageForm || '[Dosage Form]'}
- Route of Administration: ${productInfo.routeOfAdmin || '[Route of Administration]'}
- Therapeutic Category: ${productInfo.therapeuticCategory || '[Therapeutic Category]'}
- Manufacturer: ${productInfo.manufacturerName || '[Manufacturer Name]'}
- Manufacturing Site: ${productInfo.manufacturingSite || '[Manufacturing Site Address]'}

API SUBMISSION ROUTE:
We are submitting the Active Pharmaceutical Ingredient (API) information via ${productInfo.apiOption || '[API Option]'}.

DOSSIER SUBMISSION:
This application is submitted in the Common Technical Document (CTD) format as per NAFDAC guidelines (DR&R-GDL-018-01) and includes:
- Module 1: Administrative and Product Information
- Module 2: CTD Summaries  
- Module 3: Quality Documentation
- Module 5: Clinical Study Reports (Bioequivalence)

REGULATORY STATUS:
${productInfo.regulatoryStatus || '[Provide regulatory status in other countries if applicable]'}

DECLARATION:
We hereby declare that:
1. All information provided in this application is true, complete, and accurate
2. The product will be manufactured in accordance with Good Manufacturing Practices (GMP)
3. We will comply with all NAFDAC regulations and guidelines
4. We will notify NAFDAC of any changes to the product or manufacturing process

We respectfully request your favorable consideration of this application and look forward to your response.

Thank you for your attention to this matter.

Yours faithfully,

_______________________
${productInfo.signatoryName || '[Signatory Name]'}
${productInfo.signatoryTitle || '[Title]'}
${productInfo.applicantName || '[Company Name]'}

Contact Information:
Address: ${productInfo.applicantAddress || '[Company Address]'}
Phone: ${productInfo.phone || '[Phone Number]'}
Email: ${productInfo.email || '[Email Address]'}

Attachments: Complete CTD Dossier (Modules 1-5)
`;

    return new Blob([template], { type: 'text/plain' });
  }

  generateCoverLetter(productInfo) {
    const template = `
COVER LETTER

${new Date().toLocaleDateString()}

The Director General
National Agency for Food and Drug Administration and Control (NAFDAC)
Plot 2032, Olusegun Obasanjo Way
Wuse Zone 7, Abuja
Nigeria

Re: Marketing Authorization Application - ${productInfo.productName || '[Product Name]'}

Dear Director General,

${productInfo.applicantName || '[Applicant Company Name]'} respectfully submits this application for marketing authorization of ${productInfo.productName || '[Product Name]'} in Nigeria.

SUBMISSION SUMMARY:
Product: ${productInfo.productName || '[Product Name]'} ${productInfo.strength || '[Strength]'} ${productInfo.dosageForm || '[Dosage Form]'}
Application Type: New Marketing Authorization
Submission Format: Common Technical Document (CTD)
API Route: ${productInfo.apiOption || '[API Submission Option]'}
Submission Date: ${new Date().toLocaleDateString()}

This submission contains all required documentation as per NAFDAC CTD guidelines and includes comprehensive quality, safety, and efficacy data supporting the marketing authorization request.

We confirm our commitment to compliance with all NAFDAC regulations and look forward to your review.

Respectfully submitted,

_______________________
${productInfo.signatoryName || '[Authorized Signatory]'}
${productInfo.signatoryTitle || '[Title]'}
${productInfo.applicantName || '[Company Name]'}
`;

    return new Blob([template], { type: 'text/plain' });
  }

  generateMasterTOC(ctdStructure, productInfo) {
    let toc = `
MASTER TABLE OF CONTENTS
${productInfo.productName || '[Product Name]'} - NAFDAC CTD Submission

Generated: ${new Date().toLocaleDateString()}
Applicant: ${productInfo.applicantName || '[Applicant Name]'}

`;

    Object.entries(ctdStructure).forEach(([moduleId, module]) => {
      if (!module.sections) return;
      
      toc += `\n${moduleId.toUpperCase()}: ${module.title}\n`;
      toc += '='.repeat(60) + '\n';
      
      Object.entries(module.sections).forEach(([sectionId, section]) => {
        toc += `  ${sectionId} ${section.title}\n`;
        
        if (section.subsections) {
          Object.entries(section.subsections).forEach(([subId, subsection]) => {
            toc += `    ${subId} ${subsection.title}\n`;
          });
        }
      });
    });

    return new Blob([toc], { type: 'text/plain' });
  }

  async generateAllTemplates(productInfo, ctdStructure) {
    const templates = {
      coverLetter: this.generateCoverLetter(productInfo),
      applicationLetter: this.generateApplicationLetter(productInfo),
      masterTOC: this.generateMasterTOC(ctdStructure, productInfo),
      smpc: this.generateSmPCTemplate(productInfo),
      qis: this.generateQISTemplate(productInfo, ctdStructure)
    };

    return templates;
  }
}

export const ctdTemplateService = new CTDTemplateService();