// NAFDAC Variations Screening Checklist
export const VARIATIONS_SCREENING_CHECKLIST = [
  {
    id: 1,
    section: "Previous Submissions",
    question: "Has the same dossier been submitted before for the purpose of registration or prequalification to any of the following?",
    guide: "Check if this dossier has been previously submitted to NAFDAC, WHO PQ, or other regulatory authorities. Verify documentation of previous submissions and outcomes.",
    moduleRef: "Module 1.3.1",
    allowPartial: false
  },
  {
    id: 2,
    section: "Supporting Evidence",
    question: "Has evidence been provided to support the registration/prequalification claimed above?",
    guide: "Verify supporting documentation for any claimed previous registrations or prequalifications. Check certificates, approval letters, or correspondence.",
    moduleRef: "Module 1.3.1",
    allowPartial: false
  },
  {
    id: 3,
    section: "Dossier Format",
    question: "Is the Dossier in CTD format?",
    guide: "Confirm the dossier follows Common Technical Document (CTD) format with proper module organization (Modules 1-5) as per ICH guidelines. Click to run structure check to verify all required modules and files are present.",
    moduleRef: "General Checklist",
    checkGeneralChecklist: true,
    allowPartial: false
  },
  {
    id: 4,
    section: "Quality Documents",
    question: "Has the applicant submitted Quality Overall Summary – Product Dossier (QOS-PD) and Quality Information Summary (QIS) as Word documents and in line with NAFDAC template?",
    guide: "Verify QOS-PD and QIS are submitted in Word format using official NAFDAC templates. Check completeness and format compliance.",
    moduleRef: "Module 2.3 / 1.4.2",
    allowPartial: true
  },
  {
    id: 5,
    section: "Batch Consistency",
    question: "Are the submission batches in the dossier consistent, and at minimum two batches of pilot scale? (2.3.P.2.2.1, 3.2.P.5.4, and 3.2.P.8.3, R.1.1)",
    guide: "Confirm batch consistency across all sections and verify minimum two pilot scale batches are included. Check batch numbers in sections 2.3.P.2.2.1, 3.2.P.5.4, and 3.2.P.8.3.",
    moduleRef: "3.2.P.2 / 3.2.P.5.4 / 3.2.P.8.3 / 3.2.R.1",
    allowPartial: false
  },
  {
    id: 6,
    section: "Batch Manufacturing Records",
    question: "Does the manufacturer include in Section 2.3.R copies of the executed BMR for the biobatch (or representative batch used for comparative dissolution profile) and the proposed blank BMR(s)?",
    guide: "Verify Section 2.3.R contains executed Batch Manufacturing Records (BMR) for biobatch and proposed blank BMRs. Check completeness and signatures.",
    moduleRef: "Module 3.2.R.1.1 / 3.2.R.1.2",
    allowPartial: true
  },
  {
    id: 7,
    section: "Dissolution Profile",
    question: "Is there data on the comparative dissolution profile of the product and the innovator or the reference listed product? (3.2.P.2.2.1d, or 3.2.P.3.5)",
    guide: "Check for comparative dissolution data in sections 3.2.P.2.2.1d or 3.2.P.3.5. Verify comparison with innovator or reference listed product.",
    moduleRef: "Module 3.2.P.2 / 5.3.1.2",
    allowPartial: false
  },
  {
    id: 8,
    section: "Stability Data",
    question: "At the time of submission, is the stability data provided for at least 6 months at the accelerated condition and 12 months at the long-term condition and for at least two pilot scale batches of the FPP? (3.2.P.8.3)",
    guide: "Verify stability data in section 3.2.P.8.3 includes minimum 6 months accelerated and 12 months long-term data for at least two pilot scale batches.",
    moduleRef: "Module 3.2.P.8.3",
    allowPartial: false
  },
  {
    id: 9,
    section: "API Compliance - APIMF",
    question: "For APIMF option, confirm that in addition to the open part of the DMF, the FPP manufacturer provides/submits its own S-part information (Particularly 3.2.S.4, - 3.2 S.7).",
    guide: "If using APIMF option, verify FPP manufacturer provides own S-part information in sections 3.2.S.4 through 3.2.S.7 in addition to open DMF part.",
    moduleRef: "Module 1.2.15 / 3.2.S.4.4",
    allowPartial: false
  },
  {
    id: 10,
    section: "API Compliance - CPQ/CEP",
    question: "If CPQ or CEP is used to present API data, are copies of the CPQ and CEP provided with the declaration of access filled out by the CPQ or CEP holder on behalf of the FPP manufacturer? (Particularly 3.2.S.4, - 3.2 S.7).",
    guide: "For CPQ/CEP submissions, verify copies are provided with proper declaration of access from CPQ/CEP holder. Check sections 3.2.S.4 through 3.2.S.7.",
    moduleRef: "Module 1.2.15 / 3.2.S.4.4",
    allowPartial: false
  },
  {
    id: 11,
    section: "API Compliance - Full Dossier",
    question: "If full dossier option is used to provide API data for an API site, has a complete module 3.2.S been provided? (Particularly 3.2.S.4, - 3.2 S.7).",
    guide: "For full dossier option, verify complete module 3.2.S is provided, particularly sections 3.2.S.4 through 3.2.S.7 for API data.",
    moduleRef: "Module 1.2.15 / 3.2.S.4.4",
    allowPartial: false
  },
  {
    id: 12,
    section: "Manufacturing Process Validation",
    question: "Is data on the manufacturing process validation including media fill results from a recent media fill exercise/study for the aseptic processes at the FPP manufacturing site for a minimum of three consecutive batches provided?",
    guide: "For sterile products: Verify manufacturing process validation data including recent media fill results for aseptic processes. Check minimum three consecutive batches.",
    moduleRef: "Module 3.2.P.3.5",
    conditionalFor: "sterile products",
    allowPartial: true,
    category: "Sterile FPP"
  },
  {
    id: 13,
    section: "SOPs - Sterile Products",
    question: "Are copies of all SOPs pertinent to sterilization of manufacturing equipment, packaging materials and accessories; aseptic procedures + media fill exercises; in-process controls provided?",
    guide: "For sterile products: Verify all relevant SOPs are provided covering sterilization, aseptic procedures, media fill exercises, and in-process controls.",
    moduleRef: "Module 3.2.P.3.5",
    conditionalFor: "sterile products",
    allowPartial: true,
    category: "Sterile FPP"
  },
  {
    id: 14,
    section: "Stability Data - Sterile Products",
    question: "For products where rubber closures are used, is stability data generated using samples stored in inverted orientation provided?",
    guide: "For sterile products with rubber closures: Verify stability data includes samples stored in inverted orientation to assess closure integrity.",
    moduleRef: "Module 3.2.P.7 / 3.2.P.8.3",
    conditionalFor: "sterile products",
    allowPartial: true,
    category: "Sterile FPP"
  },
  {
    id: 15,
    section: "Sterilization Validation",
    question: "Evidence of validation of the conditions/parameters used for the sterilization/depyrogenation of the processing equipment and accessories, filters and packaging components provided? (2.3.P.2.5)",
    guide: "For sterile products: Verify validation evidence for sterilization/depyrogenation parameters in section 2.3.P.2.5. Check equipment, accessories, filters, and packaging components.",
    moduleRef: "Module 3.2.P.3.5",
    conditionalFor: "sterile products",
    allowPartial: true,
    category: "Sterile FPP"
  }
];

export default VARIATIONS_SCREENING_CHECKLIST;