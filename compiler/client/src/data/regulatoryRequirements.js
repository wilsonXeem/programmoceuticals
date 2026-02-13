export const NAFDAC_REQUIREMENTS = {
  "1.0": {
    title: "Cover Letter",
    description: "A formal letter submitted on the applicant's official letterhead introducing the product dossier and stating the intention to register the product with NAFDAC.",
    requirements: [
      "Must be printed on company letterhead with address, email, phone number",
      "Must be signed and dated by an authorized company representative",
      "Cover letter should not contain scientific information",
      "Product name (brand + generic)",
      "Pharmaceutical dosage form & strength",
      "Manufacturer name & complete address",
      "Country of origin",
      "Purpose of submission (new registration, renewal, variation)",
      "List all documents enclosed in the application",
      "Clearly indicate the local applicant/agent (if applicable)",
      "Reference any special conditions (biowaiver request, fast-track request, variation history, GMP inspection request)",
      "Must conform to NAFDAC communication format",
      "Signature must match the authorization in the Power of Attorney (if foreign manufacturer)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.1": {
    title: "Table of Contents (Modules 1–5)",
    description: "A complete index listing all sections and subsections of the dossier as submitted.",
    requirements: [
      "Must reflect WHO-CTD or ICH CTD structure",
      "Page numbers must correspond exactly to the dossier",
      "Must include Module 1 (NAFDAC-specific), Module 2 (CTD summaries), Module 3 (Quality), Module 4 (Non-clinical), Module 5 (Clinical)",
      "Use CTD numbering sequence and section numbering",
      "Should use clear formatting for easy navigation",
      "Should note 'Not Applicable (N/A)' for sections not relevant to the product",
      "NAFDAC may reject dossiers with inconsistent pagination"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.2.1": {
    title: "Application Letter",
    description: "A formal request addressed to NAFDAC seeking product registration.",
    requirements: [
      "Addressed to Director, Drug Registration & Regulatory Affairs (DRR&A)",
      "Must state product name, strength, dosage form",
      "Indicate type of application (new registration/renewal/variation)",
      "State applicant's responsibility for dossier accuracy",
      "Highlight company responsibility for dossier accuracy",
      "Signed by an authorized representative"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.2.4": {
    title: "Power of Attorney",
    description: "Authorization from foreign manufacturer allowing Nigerian representative to act on their behalf.",
    requirements: [
      "Must be notarized in the manufacturer's country",
      "Must be valid for at least 1–2 years",
      "Must authorize: Submission of dossier, Receipt of correspondence, Signing of application forms",
      "Manufacturer's name and address must match GMP and CPP"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    conditionalText: "Required for products manufactured outside Nigeria"
  },

  "1.2.5": {
    title: "Notarized Declaration",
    description: "A legal declaration confirming authenticity of submitted documents.",
    requirements: [
      "Must be notarized by a recognized Notary Public",
      "States that all information is true and no data is withheld",
      "Includes applicant details, product details, signature, and date"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.2.6": {
    title: "Contract Manufacturing Agreement",
    description: "Agreement between product owner and contract manufacturer (if applicable).",
    requirements: [
      "Must state roles/responsibilities",
      "Must include: Manufacturing steps outsourced, Quality assurance responsibilities, GMP compliance statements",
      "Must be valid and signed by both parties"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    conditionalText: "Required only for contract manufacturing arrangements"
  },

  "1.2.7": {
    title: "Certificate of Pharmaceutical Product (CPP)",
    description: "WHO-format certificate indicating the product is authorized in the country of origin.",
    requirements: [
      "Must follow WHO format",
      "Issued by manufacturer's National Regulatory Authority (NRA)",
      "Must state: Marketing authorization status, GMP compliance",
      "Must match product name, strength, and dosage form",
      "Must be original or notarized copy"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.2.8": {
    title: "GMP Certificate",
    description: "Certifies that the manufacturing site complies with GMP standards.",
    requirements: [
      "Issued by the manufacturer's NRA",
      "Must match the production site listed in the dossier",
      "Valid (generally not older than 3 years)",
      "Should include: Scope of GMP, Manufacturing activities, Site address"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.2.9": {
    title: "Manufacturing Authorization",
    description: "License permitting the manufacturer to legally produce pharmaceuticals.",
    requirements: [
      "Issued by the NRA of the manufacturing country",
      "Should match dosage form and production lines used",
      "Must be valid at time of submission"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.2.10": {
    title: "Trademark Registration",
    description: "Documentation proving ownership of brand name.",
    requirements: [
      "Issued by the appropriate intellectual property office",
      "Brand name must match dossier and labeling",
      "Ensures no conflict with existing trademarks"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"]
  },

  "1.2.11": {
    title: "Pharmacist License",
    description: "License for the superintendent pharmacist of the local applicant.",
    requirements: [
      "Issued by PCN (Pharmacists Council of Nigeria)",
      "Must be current (renewed yearly)",
      "Name must match the person stated in the application form"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.2.12": {
    title: "Premises Certificate",
    description: "Certification that the applicant's facility meets regulatory standards.",
    requirements: [
      "Issued by PCN",
      "Must include premises address",
      "Must be valid for the current year"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.2.13": {
    title: "Previous Marketing Authorization",
    description: "For renewals or variations only.",
    requirements: [
      "Include old NAFDAC Registration Number",
      "Attach approval letter or certificate",
      "Show proof of continuous marketing"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    conditionalText: "Required only for renewals and variations"
  },

  "1.2.14": {
    title: "GMP Inspection Invitation",
    description: "If NAFDAC needs to inspect the manufacturer's site.",
    requirements: [
      "Official invitation letter",
      "Must provide: Proposed dates, Contact details, Facility access information, Visa support (if applicable)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.2.15": {
    title: "CEP Certificate",
    description: "Certificate of suitability confirming API compliance with European Pharmacopoeia.",
    requirements: [
      "Issued by EDQM",
      "Must include annexes on impurities and manufacturing process",
      "Provide letter of access and commitment where applicable"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option2"],
    conditionalText: "Required only when using CEP route (Option 2)"
  },

  "1.2.16": {
    title: "APIMF Letter of Access",
    description: "Letter granting NAFDAC access to the confidential part of the API Master File.",
    requirements: [
      "Issued by API manufacturer",
      "Must reference the exact APIMF version"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option3"],
    conditionalText: "Required only when using APIMF procedure (Option 3)"
  },

  "1.2.17": {
    title: "BCS Biowaiver Request",
    description: "For immediate-release solid oral dosage forms eligible under BCS Class I or III.",
    requirements: [
      "Provide justification based on permeability, solubility, dissolution",
      "Provide literature, solubility profile, pKa, dose/solubility volume, etc."
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    conditionalText: "Required only when requesting BCS-based biowaiver"
  },

  "1.2.18": {
    title: "Additional Strength Biowaiver",
    description: "Used when one strength has BE data and others can be waived.",
    requirements: [
      "Show proportional composition",
      "Demonstrate linear PK",
      "Provide dissolution similarity (f2 ≥ 50)"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    conditionalText: "Required only for additional strength applications"
  },

  "3.2.S.1.1": {
    title: "Nomenclature",
    description: "Provide API nomenclature (INN, chemical names, codes, CAS)",
    requirements: [
      "Recommended International Non-proprietary Name (INN)",
      "Compendial names",
      "Chemical name(s)",
      "Company/laboratory code",
      "National names (USAN, JAN, BAN)",
      "CAS registry number",
      "Names must match labeling (SmPC/PIL)",
      "If multiple names exist -> indicate preferred name"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option4"],
    section: "Drug Substance"
  },

  "3.2.S.1.2": {
    title: "Structure",
    description: "Provide the structural formula and stereochemistry of the API",
    requirements: [
      "Structural formula",
      "Relative and absolute stereochemistry",
      "Molecular formula",
      "Molecular weight",
      "If a salt: molecular mass of free base/acid"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option4"],
    section: "Drug Substance"
  },

  "3.2.S.1.3": {
    title: "General Properties",
    description: "Summarize key physical and chemical properties of the API",
    requirements: [
      "Physical description (appearance, color, state)",
      "Solubilities (water, alcohols, dichloromethane, acetone, etc.)",
      "pH-solubility profile (pH 1.2-6.8) at 37C",
      "Dose/solubility volume (BCS classification): Measure solubility at pH 1.2-6.8 at 37C, identify lowest solubility value, calculate: Highest Strength (mg) / Lowest Solubility (mg/mL). If <= 250 mL -> Highly soluble (BCS), If > 250 mL -> Not highly soluble",
      "Polymorphism information",
      "pKa values",
      "UV absorption maxima + molar absorptivity",
      "Melting point",
      "Refractive index (if liquid)",
      "Hygroscopicity",
      "Partition coefficient",
      "Particle size distribution (if relevant to dissolution/bioavailability)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option4"],
    section: "Drug Substance",
    conditionalText: "Ensure polymorphism and particle size information are placed in correct CTD sections: Forms present → 3.2.S.1.3, Manufacturing controls → 3.2.S.2.2, Polymorph screening studies → 3.2.S.3.1, Limits/tests → 3.2.S.4.x"
  },

  "3.2.S.4.1": {
    title: "Specification",
    description: "List of tests, references to analytical procedures, and acceptance criteria. Tests selected must justify quality control of the drug substance.",
    requirements: [
      "Specification is a list of tests, references to analytical procedures, and acceptance criteria",
      "Tests selected must justify quality control of the drug substance",
      "Inclusion/exclusion of tests must be justified",
      "Typical parameters include: Description, Identification, Impurities, Assay, Specific physical tests (particle size, polymorphs) when relevant"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option1", "option2", "option3", "option4"],
    section: "Drug Substance"
  },

  "3.2.S.4.2": {
    title: "Analytical Procedures",
    description: "Analytical procedures used to test the API including compendial and in-house methods",
    requirements: [
      "Provide analytical procedures used to test the API",
      "Should include: Compendial methods (specify pharmacopeia), In-house methods (full method details required)",
      "Analytical procedures must cover: Assay, Identification, Impurities, Physicochemical tests as applicable"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option1", "option2", "option3", "option4"],
    section: "Drug Substance"
  },

  "3.2.S.4.3": {
    title: "Validation of Analytical Procedures",
    description: "Analytical method validation information and summary covering all critical validation parameters",
    requirements: [
      "Provide analytical method validation information and summary",
      "Validation to cover: Assay methods, Identification, Impurity determination, Specific physical tests if applicable",
      "Validation parameters include: Accuracy, Precision, Specificity, Linearity, Range, Detection/quantitation limits, Ruggedness/robustness"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option1", "option2", "option3", "option4"],
    section: "Drug Substance"
  },

  "3.2.S.4.4": {
    title: "Batch Analyses",
    description: "Certificate of Analysis for at least two representative API batches",
    requirements: [
      "Provide Certificate of Analysis (CoA) for at least two batches",
      "One batch used in pharmacokinetics/toxicology studies",
      "One batch used in formulation development",
      "CoA must contain full test results for: Assay, Impurities, Physical characteristics, Other tests in the specification"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option1", "option2", "option3", "option4"],
    section: "Drug Substance"
  },

  "3.2.S.4.5": {
    title: "Justification of Specification",
    description: "Scientific justification for the API release specification",
    requirements: [
      "Justify the specification for releasing the API",
      "Reference: Process parameters, Stability data, Regulatory guidelines",
      "Explain: Range of acceptance criteria, Tests chosen/omitted"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option1", "option2", "option3", "option4"],
    section: "Drug Substance"
  },

  "3.2.S.5": {
    title: "Reference Standards or Materials",
    description: "Information on reference standards used in API analysis",
    requirements: [
      "Summarize reference standard(s) used in analysis",
      "Provide: Source, Characterization, Purity, Qualification data",
      "Applicable for: In-house standards, Working standards, Secondary/tertiary standards"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option3", "option4"],
    section: "Drug Substance"
  },

  "3.2.P.1": {
    title: "Description and Composition of the FPP",
    description: "Complete description and composition information for the finished pharmaceutical product",
    requirements: [
      "Description of Dosage Form: Physical description (color, shape, coating, markings), available strengths, release mechanism (immediate, delayed, extended), distinguishing characteristics (score line, debossing)",
      "Composition of FPP: All components with amount per dosage unit, percentage composition, function (diluent, binder, lubricant), quality standard (BP, USP, Ph.Eur., in-house), grade where applicable (e.g., MCC PH102)",
      "Include: Overages (with justification), components removed during processing (solvents), processing aids (nitrogen), composition of in-house mixtures (coating premix), active ingredient equivalence declaration",
      "Reconstitution Diluent(s): Brief description if diluent already approved, full 3.2.P section for new diluents",
      "Container-Closure System: Brief description (HDPE bottle, blister strip), full details in section 3.2.P.7"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "5.3.1.2": {
    title: "Bioequivalence Study Reports",
    description: "Comparative bioavailability and bioequivalence study reports.",
    requirements: [
      "Comparisons between the product used in clinical studies and the to-be-marketed product",
      "Comparisons between the product used in clinical studies and the product used in stability batches",
      "Comparisons between similar drug products from different manufacturers"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Clinical Studies"
  },

  "1.2.2": {
    title: "Registration Form",
    description: "NAFDAC official form for product registration.",
    requirements: [
      "Completed accurately in all fields",
      "Must match information provided in the dossier",
      "Signed by applicant and local agent",
      "Includes product details, manufacturer information, composition, shelf-life, storage, packaging"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.2.3": {
    title: "Certificate of Incorporation",
    description: "Evidence that the local applicant is legally registered in Nigeria.",
    requirements: [
      "Issued by CAC (Corporate Affairs Commission)",
      "Must be a certified true copy",
      "Must match the applicant company name in all documents"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "3.2.S.2.1": {
    title: "Manufacturer(s)",
    description: "Complete information about API manufacturer and all involved parties",
    requirements: [
      "Name, address, and role of API manufacturer, contractors, sites for production, packaging, testing, storage",
      "Exact production site address (block/unit), not administrative HQ",
      "Contact details",
      "Valid manufacturing authorization",
      "GMP certificate (Module 1)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option3", "option4"],
    section: "Drug Substance"
  },

  "3.2.S.2.2": {
    title: "Description of Manufacturing Process and Process Controls",
    description: "Detailed manufacturing process description with flow diagrams and controls",
    requirements: [
      "Flow Diagram: Synthetic steps with molecular formulas, weights, yields, structures, solvents and reagents, operating conditions (temperature, pressure)",
      "Narrative Description: Quantities of materials, critical steps, process controls, equipment, conditions, alternative processes, reprocessing steps with justification",
      "Recovered materials and solvent recovery controls",
      "Filtrate recycling limits (max holding time + number of recycles)",
      "Polymorphic Form: Must state which form is produced",
      "Particle Size: If critical, describe size-reduction method (e.g., micronization)",
      "Multiple Manufacturing Sites: Provide comparison table of differences between sites",
      "Sterile APIs: Full sterilization validation data must be included",
      "GMP Starting Material Concept: API starting material must be justified (ICH Q7), one-step synthesis only accepted in special cases"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option3", "option4"],
    section: "Drug Substance"
  },

  "3.2.S.3": {
    title: "Characterisation",
    description: "Structural characterization and impurity profiling of the API",
    requirements: [
      "3.2.S.3.1 Elucidation of Structure: Structural characterization, polymorphic forms, spectroscopic data",
      "3.2.S.3.2 Impurities: Impurity profiling and qualification"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option3", "option4"],
    section: "Drug Substance"
  },

  "3.2.S.3.1": {
    title: "Elucidation of Structure and Other Characteristics",
    description: "Complete structural characterization of the API including polymorphism and particle size studies",
    requirements: [
      "Structural formula and molecular weight",
      "Stereochemistry information (relative + absolute)",
      "Polymorphic forms identification",
      "Spectroscopic data (NMR, IR, MS)",
      "Particle size studies (if relevant to dissolution/bioavailability)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option1", "option2", "option3", "option4"],
    section: "Drug Substance",
    conditionalText: "Required for Options 1&2 only if not covered by prequalification/CEP"
  },

  "3.2.P.2.1": {
    title: "Components of the FPP",
    description: "Detailed discussion of API and excipient properties affecting product performance",
    requirements: [
      "3.2.P.2.1.1 Active Pharmaceutical Ingredient: Compatibility with excipients, physicochemical characteristics affecting product (solubility, particle size, polymorphism, water content), FDC API-API compatibility, chromatographic data confirming compatibility",
      "3.2.P.2.1.2 Excipients: Justify choice of excipients, concentration ranges, grade and function, prefer compendial excipients, reference FDA Inactive Ingredient Guide/Handbook of Pharmaceutical Excipients, compatibility studies, justification for antioxidants and antimicrobial preservatives"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.2.1.1": {
    title: "Active Pharmaceutical Ingredient",
    description: "API properties and compatibility considerations for drug product development",
    requirements: [
      "Discuss compatibility with excipients",
      "Physicochemical characteristics affecting the product: Solubility, Particle size, Polymorphism, Water content",
      "For combinations (FDCs), discuss API-API compatibility",
      "Provide chromatographic data confirming compatibility"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.2.1.2": {
    title: "Excipients",
    description: "Excipient selection and justification for drug product formulation",
    requirements: [
      "Justify: Choice of excipients, Concentration ranges, Grade and function",
      "Prefer compendial excipients",
      "Reference sources: FDA Inactive Ingredient Guide, Handbook of Pharmaceutical Excipients",
      "Provide compatibility studies where needed",
      "Provide justification for antioxidants and antimicrobial preservatives"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.2.2": {
    title: "Finished Pharmaceutical Product",
    description: "Formulation development, dissolution studies, overages, and physicochemical properties",
    requirements: [
      "3.2.P.2.2.1 Formulation Development: Rationale for formulation, differences between development/bioequivalence/final formulations, in vitro comparative dissolution, in vivo bioequivalence data, uniformity test on split tablets (for scored tablets)",
      "3.2.P.2.2.2 Overages: Justify any overages with reason for loss during manufacturing, step where loss occurs, assay data (overages to extend shelf-life NOT acceptable)",
      "3.2.P.2.2.3 Physicochemical and Biological Properties: Address properties relevant to performance (pH, dissolution, particle size, polymorphism, aggregation, potency/biological activity)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.2.2.1": {
    title: "Formulation Development",
    description: "Formulation rationale and development studies including dissolution and bioequivalence data",
    requirements: [
      "Summarize: Rationale for formulation, Differences between development, bioequivalence and final formulations",
      "Include: In vitro comparative dissolution, In vivo bioequivalence data (if relevant)",
      "For scored tablets: Conduct uniformity test on split tablets",
      "In vitro Dissolution/Drug Release: Selection of apparatus/speed/medium, sensitivity to formulation/manufacturing changes, multiple time points for IR and MR forms, pH effect studies, comparative profiles for multiple batches"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.2.2.2": {
    title: "Overages",
    description: "Justification for any overages in the formulation",
    requirements: [
      "Justify any overages with: Reason for loss during manufacturing, Step where loss occurs, Assay data",
      "Overages to extend shelf-life are NOT acceptable"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.2.2.3": {
    title: "Physicochemical and Biological Properties",
    description: "Properties relevant to drug product performance",
    requirements: [
      "Address properties relevant to performance: pH, Dissolution, Particle size, Polymorphism, Aggregation, Potency/biological activity"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.2.3": {
    title: "Manufacturing Process Development",
    description: "Manufacturing process rationale and development considerations",
    requirements: [
      "Explain rationale for choosing the process (e.g., wet granulation)",
      "Discuss: Critical process parameters (CPPs), Robustness, Scale-up considerations, Protection against deterioration (moisture, light)",
      "Compare development batches vs. commercial process"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.2.4": {
    title: "Container-Closure System",
    description: "Container-closure system development and suitability assessment",
    requirements: [
      "Discuss suitability regarding: Material selection, Protection from moisture/light, Compatibility and safety",
      "Extractables/leachables (depending on dosage form)",
      "Moisture permeability testing",
      "Light transmission testing (unless product is photostable)",
      "Device dosing accuracy (e.g., oral syringe)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.2.5": {
    title: "Microbiological Attributes",
    description: "Microbiological considerations and preservative effectiveness",
    requirements: [
      "Justify: Need (or lack of need) for microbial limits, Selection of antimicrobial preservatives",
      "Provide preservative-effectiveness studies: On different concentrations, On stability samples",
      "Ensure container-closure integrity for sterile products"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.2.6": {
    title: "Compatibility",
    description: "Compatibility studies with diluents, devices, and co-administered products",
    requirements: [
      "Address: Compatibility with diluents, Compatibility with dosing devices, API precipitation/assay/pH/degradation",
      "For products requiring dilution: Provide compatibility data over proposed shelf-life and temperature conditions",
      "Demonstrate compatibility with: All diluents, All container types (glass, PVC, polyolefin), Co-administered FPPs (if indicated)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.3.1": {
    title: "Manufacturer(s)",
    description: "Information about drug product manufacturer and manufacturing sites",
    requirements: [
      "Name and address of manufacturer",
      "Manufacturing authorization details",
      "GMP certificate",
      "Manufacturing site information"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.3.2": {
    title: "Batch Formula",
    description: "Complete batch formula with quantities and specifications",
    requirements: [
      "Complete batch formula with quantities",
      "All components listed with amounts",
      "Batch size information",
      "Yield calculations"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.3.3": {
    title: "Description of Manufacturing Process and Process Controls",
    description: "Detailed manufacturing process description with flow diagram and controls",
    requirements: [
      "Detailed manufacturing process description",
      "Process flow diagram",
      "Critical process parameters",
      "In-process controls with acceptance criteria",
      "Equipment specifications",
      "Operating conditions"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.3.4": {
    title: "Controls of Critical Steps and Intermediates",
    description: "In-process controls for critical manufacturing steps with dosage form-specific examples",
    requirements: [
      "Critical Steps: Tests and acceptance criteria for all critical steps, justify each test with supporting experimental data",
      "Intermediates: Quality and controls for isolated intermediates",
      "Granulations: Moisture content (range), blend uniformity, bulk/tapped density, particle size distribution",
      "Solid oral forms: Average weight/weight variation, hardness/thickness/friability, disintegration, coating weight gain",
      "Semi-solids: Viscosity, homogeneity, pH",
      "Transdermal patches: Assay of API-adhesive mix, weight per area",
      "Metered-dose inhalers: Fill weight/volume, leak testing, valve delivery",
      "Dry powder inhalers: Blend assay, moisture, weight variation",
      "Liquids: pH, specific gravity, clarity",
      "Parenterals: Appearance/clarity, fill volume, pH, filter integrity, particulate matter, bioburden testing"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.3.5": {
    title: "Process Validation and/or Evaluation",
    description: "Process validation protocol and commitment with statistical validation approach",
    requirements: [
      "Required Submissions: Process Validation Protocol (FPP-specific), Commitment letter to validate 3 consecutive production-scale batches, validation report if already done (sterile products)",
      "Validation Approach: Expanded final testing beyond routine QC, extensive sampling, statistical validation (normality, SD, confidence limits), intermediate stages validation, skip-testing allowable with justification",
      "Batch Size Variation: Show different batch sizes do not affect product quality",
      "Validation Protocol Requirements: Reference to master production document, critical equipment list, CPPs + challenge tests, sampling plan with diagrams, testing parameters + acceptance criteria, analytical methods, data recording/evaluation plan, timeline",
      "Sterile Products: SOPs for container sterilization, equipment preparation, filtration, lyophilization, leaker testing, final inspection, sterilization cycles",
      "Sterilization Requirements: Terminal steam sterilization preferred, F0 range/temperature range/dwell time, justify alternative methods (EO, radiation, dry heat), filter validation (pore size, extractables, adsorption)",
      "Aseptic Processing: Media fill (process simulation) required"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.5.1": {
    title: "Specification(s)",
    description: "Complete release and shelf-life specifications for finished pharmaceutical product",
    requirements: [
      "Must provide release and shelf-life specifications",
      "Must include: Appearance, Identification, Assay, Purity/impurities, Dissolution/performance tests, Physical tests, Microbial tests (if applicable), Uniformity",
      "For FDCs: Distinct methods for each API, degradation product limits by originating API, content uniformity for APIs <5 mg or <5%",
      "Special dosage forms have unique requirements (inhalers, suppositories, transdermal patches)",
      "Typical assay acceptance: 95-105% at release",
      "Skip-testing allowed with justification"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.5.2": {
    title: "Analytical Procedures",
    description: "Analytical procedures for finished product testing",
    requirements: [
      "Provide full copies of in-house methods",
      "Use QOS-PD tables for summarizing"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.5.3": {
    title: "Validation of Analytical Procedures",
    description: "Validation of analytical methods for finished product testing",
    requirements: [
      "Provide full validation reports for all in-house methods",
      "Verify compendial methods for: Specificity, Accuracy, Repeatability",
      "If replacing compendial methods -> demonstrate equivalence"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.5.4": {
    title: "Batch Analyses",
    description: "Batch analysis data for finished product batches",
    requirements: [
      "Provide analyses for: Minimum 2 pilot-scale batches, OR for simple products: 1 pilot + 1 smaller batch",
      "Include: Batch number, Size, Date, Site, Intended use (BA/BE, stability, etc.)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.5.5": {
    title: "Characterization of Impurities",
    description: "Impurity profiling and characterization for finished product",
    requirements: [
      "Impurity profiling and identification",
      "Degradation product characterization",
      "Impurity qualification studies"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.5.6": {
    title: "Justification of Specification(s)",
    description: "Scientific justification for finished product specifications",
    requirements: [
      "Justify: Test inclusion/omission, Acceptance criteria, Deviations from compendial standards",
      "Cross-reference where needed"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.6": {
    title: "Reference Standards or Materials",
    description: "Reference standards used for finished product analysis",
    requirements: [
      "Provide details of reference materials used: Source, Characterization, Certificates of analysis (if not previously supplied)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.7": {
    title: "Container-Closure System",
    description: "Complete container-closure system description and suitability assessment",
    requirements: [
      "Description and materials of container-closure system",
      "Suitability assessment for protection and compatibility",
      "Material specifications and characterization",
      "Extractables/leachables studies (if applicable)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.8": {
    title: "Stability",
    description: "Comprehensive stability evaluation following WHO/ICH guidelines for Zone IVB conditions",
    requirements: [
      "3.2.P.8.1 Stability Summary and Conclusions: Demonstrate quality variation with temperature/humidity/light, WHO TRS 953 compliance, minimum 6 months accelerated (40C/75% RH) and long-term (30C/75% RH) data",
      "3.2.P.8.2 Post-Approval Stability Protocol & Commitment: Primary stability commitment, three production batches per strength/container, ongoing stability programme",
      "3.2.P.8.3 Stability Data: Tabular/graphical/narrative presentation with actual numerical results, method validation, impurity characterization"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.8.1": {
    title: "Stability Summary and Conclusions",
    description: "Demonstrate how API/FPP quality varies with temperature, humidity, light. Evaluate interactions with excipients, container-closure system, packaging materials.",
    requirements: [
      "Purpose: Demonstrate quality variation with temperature/humidity/light, evaluate excipient/container interactions",
      "Required Content: Types of studies conducted, protocols used, results summary, conclusions on storage conditions/shelf-life/in-use storage",
      "Reference Guidelines: WHO TRS 953 Annex 2, ICH Q1A/Q1B/Q1C/Q1D/Q1E/Q3B/Q6A",
      "Stress Testing: Photostability study required for >=1 primary batch unless pharmacopeia states 'protect from light' or container proven light-protective",
      "Additional Stress Tests: Cyclic studies for semi-solids, freeze-thaw for liquids",
      "Climatic Zone Requirements: WHO long-term conditions 30C +/- 2C / 75% +/- 5% RH required, other conditions need strong justification",
      "Container-Type Considerations: Follow WHO guidelines for impermeable/semi-permeable containers, refrigerator/freezer products, below -20C storage",
      "Minimum Data: Accelerated 40C +/- 2C / 75% +/- 5% RH for 6 months, Long-term 30C +/- 2C / 75% +/- 5% RH for 6 months",
      "Intermediate: Not required if long-term at 30/75",
      "Batch Requirements: Two pilot-scale batches OR 1 pilot + 1 smaller batch (25,000-50,000 tablets/capsules) for simple FPPs",
      "Sterile Products: Report sterility at beginning/end of shelf-life, subvisible particles at frequent intervals, bacterial endotoxin initially, weight loss over shelf-life",
      "In-Use Stability: Required for multi-dose, reconstitution, dilution, bulk containers - must provide experimental justification",
      "Results Discussion: Must highlight observed changes, trends, numerical ranges. NOT acceptable: 'meets spec', 'within limits'",
      "Shelf-Life Estimation (ICH Q1E): If 6-month accelerated shows no significant change/little variability, shelf-life may be up to 2x long-term data period but not more than long-term + 12 months"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.8.2": {
    title: "Post-Approval Stability Protocol & Commitment",
    description: "Written commitments for ongoing stability studies and post-approval stability protocols when long-term data don't cover proposed shelf-life.",
    requirements: [
      "Primary Stability Commitment: If long-term data submitted do not cover proposed shelf-life, applicant must commit in writing to continue studies",
      "Commitment Batches: Long-term stability must be conducted on three production batches per strength per container system",
      "If Not Available at Submission: Provide signed, dated stability commitment",
      "Ongoing Stability Programme: At least one batch per year for each strength/container-closure system (unless no batch manufactured that year)",
      "Bracketing/Matrixing: Allowed with proper justification, signed commitment required",
      "Protocol Differences: Any changes between primary batches, commitment batches, and ongoing batches must be scientifically justified"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.8.3": {
    title: "Stability Data",
    description: "Complete presentation of stability data including storage conditions, batch information, test intervals, and actual numerical results.",
    requirements: [
      "Required Presentation Format: Tabular, Graphical, Narrative",
      "Required Information: Analytical methods used, method validation summary, characterization of impurities (cross-reference 3.2.P.5.5), actual stability reports",
      "Information Required in Stability Data Section: Storage conditions, strength, batch numbers, API batch numbers + manufacturer, batch size, container-closure system, orientation (if relevant), test intervals (completed and proposed)",
      "Discussion of Stability Results: Must highlight observed changes, trends, ranges of numerical data",
      "Not Acceptable: Statements like 'meets spec', 'within limits'",
      "Quantitative Tests: Must show actual numbers",
      "Dissolution Results: Provide average and range"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.R.1.2": {
    title: "Master Production Documents",
    description: "Master production documents for each proposed strength, commercial batch size, and manufacturing site with complete manufacturing instructions.",
    requirements: [
      "Provide master production documents for each: Proposed strength, Commercial batch size, Manufacturing site",
      "Master Formula: Complete qualitative and quantitative composition, calculation bases (API adjustment for assay or anhydrous basis)",
      "Detailed Manufacturing Instructions: Dispensing instructions, processing instructions, packaging instructions, all relevant material and operational details",
      "Relevant Calculations: API adjustment based on assay, adjustment on anhydrous basis, other formula recalculations as applicable",
      "Equipment Identification: Type, working capacity, make, model, equipment number (where available)",
      "Process Parameters: Target values and acceptable ranges (mixing time/speed, milling screen size, processing temperature, granulation endpoint, tablet compression speed)",
      "List of In-Process Tests: Appearance, pH, assay, blend uniformity, viscosity, particle size distribution, loss on drying, weight variation, hardness, disintegration, weight-gain during coating, leaker test, minimum fill, clarity, filter integrity checks",
      "Sampling Plan: Sampling points (after drying, lubrication, compression), number of samples, frequency of testing",
      "Quality Precautions: Temperature control, humidity control, maximum holding times, other critical control measures",
      "Sterile Products: Reference to relevant SOPs within document, provide list of all SOPs at end of master document",
      "Yield Information: Theoretical yield, actual yield",
      "GMP Compliance: Must comply fully with cGMP requirements, demonstrate consistency, traceability, and controlled manufacturing"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Regional Information"
  },

  "3.2.A": {
    title: "Appendices",
    description: "Supporting appendix information for facilities, adventitious agents safety, and excipients when applicable.",
    requirements: [
      "3.2.A.1 Facilities and Equipment (if sterile or special facilities are used)",
      "3.2.A.2 Adventitious Agents Safety Evaluation (animal/human origin materials)",
      "3.2.A.3 Excipients (novel or special excipients, if applicable)"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Appendices",
    conditionalText: "Provide only when applicable to the product or manufacturing process."
  },

  "3.2.A.1": {
    title: "Facilities and Equipment",
    description: "Facility and equipment details for sterile products or critical operations.",
    requirements: [
      "Facility layout and critical equipment list for aseptic/sterile operations",
      "Utilities and environmental controls (HVAC, water systems) as applicable",
      "Cleaning, sterilization, and maintenance procedures for critical equipment",
      "Controls to prevent contamination and cross-contamination"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Appendices",
    conditionalText: "Required for sterile or high-risk manufacturing operations."
  },

  "3.2.A.2": {
    title: "Adventitious Agents Safety Evaluation",
    description: "Safety evaluation for materials of animal or human origin.",
    requirements: [
      "Risk assessment for transmissible agents (TSE/viral risk)",
      "Source and testing information for animal/human origin materials",
      "TSE compliance statements or CEPs where available",
      "Evidence of controls to prevent adventitious contamination"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Appendices",
    conditionalText: "Required when materials of animal or human origin are used."
  },

  "3.2.A.3": {
    title: "Excipients",
    description: "Additional information for novel or non-compendial excipients.",
    requirements: [
      "Full excipient characterization and specifications",
      "Safety data and justification for use",
      "Manufacturing process description and controls",
      "Regulatory status or prior use justification"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Appendices",
    conditionalText: "Required for novel or special excipients."
  },

  "3.2.R": {
    title: "Regional Information",
    description: "NAFDAC-specific regional information for Module 3.",
    requirements: [
      "3.2.R.1 Production Documentation",
      "3.2.R.2 Analytical Procedures and Validation Information (QOS-PD tables)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Regional Information"
  },

  "3.2.R.1": {
    title: "Production Documentation",
    description: "Executed and master production documentation for the FPP.",
    requirements: [
      "3.2.R.1.1 Executed Production Documents",
      "3.2.R.1.2 Master Production Documents"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Regional Information"
  },

  "3.2.R.1.1": {
    title: "Executed Production Documents",
    description: "Executed batch production records for representative batches.",
    requirements: [
      "Executed batch records for pilot/production batches",
      "Records include in-process controls, yields, deviations, and reconciliation",
      "Signed and QA-approved documentation"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Regional Information"
  },

  "3.2.R.2": {
    title: "Analytical Procedures and Validation Information",
    description: "Summary tables of analytical methods and validation from API and FPP sections as referenced in QOS-PD Section 2.3.R.2.",
    requirements: [
      "Requirement: Tables in Section 2.3.R.2 of QOS-PD should summarize analytical methods and validation",
      "API Sections to Include: 3.2.S.4.2 (Analytical procedures), 3.2.S.4.3 (Validation), 3.2.S.4.4(c) (Additional method details), 3.2.S.7.3(b) (Impurity analysis where applicable)",
      "FPP Sections to Include: 3.2.P.5.2 (Analytical procedures), 3.2.P.5.3 (Validation)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Regional Information"
  },

  "3.3": {
    title: "Literature References",
    description: "Literature references.",
    requirements: [
      "References to the scientific literature relating to both the API and FPP should be included in this section of the PD when appropriate"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Quality",
    conditionalText: "Provide when literature references are cited."
  },

  "4.1": {
    title: "Table of Contents (Module 4)",
    description: "Table of contents for Module 4.",
    requirements: [
      "Provide the table of contents for Module 4"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Non-clinical"
  },

  "4.2": {
    title: "Study Reports",
    description: "Non-clinical study reports.",
    requirements: [
      "The study reports should be presented in the following order",
      "4.2.1 Pharmacology (4.2.1.1–4.2.1.4)",
      "4.2.2 Pharmacokinetics (4.2.2.1–4.2.2.7)",
      "4.2.3 Toxicology (4.2.3.1–4.2.3.7.7)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Non-clinical"
  },

  "4.2.1": {
    title: "Pharmacology",
    description: "Pharmacology study reports.",
    requirements: [
      "Provide pharmacology study reports in subsections 4.2.1.1–4.2.1.4"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Non-clinical"
  },

  "4.2.1.1": {
    title: "Primary Pharmacodynamics",
    description: "Primary pharmacodynamic study reports supporting the main intended effects.",
    requirements: [
      "Provide primary pharmacodynamic study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.1.2": {
    title: "Secondary Pharmacodynamics",
    description: "Secondary pharmacodynamic study reports.",
    requirements: [
      "Provide secondary pharmacodynamic study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.1.3": {
    title: "Safety Pharmacology",
    description: "Safety pharmacology studies addressing vital organ systems.",
    requirements: [
      "Provide safety pharmacology study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.1.4": {
    title: "Pharmacodynamic Drug Interactions",
    description: "Pharmacodynamic interaction study reports.",
    requirements: [
      "Provide pharmacodynamic interaction study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.2": {
    title: "Pharmacokinetics",
    description: "Pharmacokinetic study reports.",
    requirements: [
      "Provide pharmacokinetic study reports in subsections 4.2.2.1–4.2.2.7"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Non-clinical"
  },

  "4.2.2.1": {
    title: "Analytical Methods and Validation Reports",
    description: "Bioanalytical methods and validation for non-clinical PK studies.",
    requirements: [
      "Provide analytical methods and validation reports (if separate reports are available)"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.2.2": {
    title: "Absorption",
    description: "Non-clinical absorption study reports.",
    requirements: [
      "Provide absorption study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.2.3": {
    title: "Distribution",
    description: "Non-clinical distribution study reports.",
    requirements: [
      "Provide distribution study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.2.4": {
    title: "Metabolism",
    description: "Non-clinical metabolism study reports.",
    requirements: [
      "Provide metabolism study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.2.5": {
    title: "Excretion",
    description: "Non-clinical excretion study reports.",
    requirements: [
      "Provide excretion study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.2.6": {
    title: "Pharmacokinetic Drug Interactions",
    description: "Non-clinical PK drug interaction study reports.",
    requirements: [
      "Provide pharmacokinetic drug interaction study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.2.7": {
    title: "Other Pharmacokinetic Studies",
    description: "Additional non-clinical PK study reports not covered elsewhere.",
    requirements: [
      "Provide other pharmacokinetic study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3": {
    title: "Toxicology",
    description: "Toxicology study reports.",
    requirements: [
      "Provide toxicology study reports in subsections 4.2.3.1–4.2.3.7.7"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Non-clinical"
  },

  "4.2.3.1": {
    title: "Single-Dose Toxicity",
    description: "Single-dose toxicity study reports.",
    requirements: [
      "Single-dose toxicity (in order by species, by route)"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.2": {
    title: "Repeat-Dose Toxicity",
    description: "Repeat-dose toxicity study reports.",
    requirements: [
      "Repeat-dose toxicity (in order by species, by route, by duration; including supportive toxicokinetics evaluations)"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.3": {
    title: "Genotoxicity",
    description: "Genotoxicity study reports including in vitro and in vivo assays.",
    requirements: [
      "Genotoxicity studies"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.3.1": {
    title: "Genotoxicity (In vitro)",
    description: "In vitro genotoxicity study reports.",
    requirements: [
      "In vitro genotoxicity studies"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.3.2": {
    title: "Genotoxicity (In vivo)",
    description: "In vivo genotoxicity study reports.",
    requirements: [
      "In vivo genotoxicity studies (supportive toxicokinetics evaluations)"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.4": {
    title: "Carcinogenicity",
    description: "Carcinogenicity study reports with supportive toxicokinetic data.",
    requirements: [
      "Carcinogenicity (including supportive toxicokinetics evaluations)"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.4.1": {
    title: "Carcinogenicity (Long-term)",
    description: "Long-term carcinogenicity study reports.",
    requirements: [
      "Long-term studies (in order by species; including range-finding studies not appropriate under repeat-dose toxicity or pharmacokinetics)"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.4.2": {
    title: "Carcinogenicity (Short/Medium-term)",
    description: "Short- or medium-term carcinogenicity study reports.",
    requirements: [
      "Short- or medium-term studies (including range-finding studies not appropriate under repeat-dose toxicity or pharmacokinetics)"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.4.3": {
    title: "Carcinogenicity (Other)",
    description: "Other carcinogenicity-related study reports.",
    requirements: [
      "Other carcinogenicity studies"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.5": {
    title: "Reproductive and Developmental Toxicity",
    description: "Reproductive and developmental toxicity study reports.",
    requirements: [
      "Reproductive and developmental toxicity studies"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.5.1": {
    title: "Fertility and Early Embryonic Development",
    description: "Fertility and early embryonic development study reports.",
    requirements: [
      "Provide fertility and early embryonic development study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.5.2": {
    title: "Embryo-fetal Development",
    description: "Embryo-fetal development study reports.",
    requirements: [
      "Provide embryo-fetal development study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.5.3": {
    title: "Prenatal and Postnatal Development",
    description: "Prenatal and postnatal development study reports.",
    requirements: [
      "Prenatal and postnatal development, including maternal function"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.5.4": {
    title: "Juvenile Animal Studies",
    description: "Juvenile animal toxicity study reports.",
    requirements: [
      "Studies in which the offspring (juvenile animals) are dosed and/or further evaluated"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.6": {
    title: "Local Tolerance",
    description: "Local tolerance study reports.",
    requirements: [
      "Provide local tolerance study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.7": {
    title: "Other Toxicity Studies",
    description: "Other toxicity studies not covered in previous sections.",
    requirements: [
      "Other toxicity studies (if available)"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.7.1": {
    title: "Antigenicity",
    description: "Antigenicity study reports.",
    requirements: [
      "Provide antigenicity study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.7.2": {
    title: "Immunotoxicity",
    description: "Immunotoxicity study reports.",
    requirements: [
      "Provide immunotoxicity study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.7.3": {
    title: "Mechanistic Studies",
    description: "Mechanistic toxicity study reports.",
    requirements: [
      "Mechanistic studies (if not included elsewhere)"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.7.4": {
    title: "Dependence",
    description: "Dependence or abuse liability study reports.",
    requirements: [
      "Provide dependence study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.7.5": {
    title: "Metabolites",
    description: "Toxicity study reports related to metabolites.",
    requirements: [
      "Provide metabolite-related toxicity study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.7.6": {
    title: "Impurities",
    description: "Toxicity study reports related to impurities.",
    requirements: [
      "Provide impurity-related toxicity study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.2.3.7.7": {
    title: "Other",
    description: "Other relevant toxicity study reports.",
    requirements: [
      "Provide other relevant toxicity study reports"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Include if studies were conducted"
  },

  "4.3": {
    title: "Literature References",
    description: "Literature references.",
    requirements: [
      "References to scientific literature relating to both the API and FPP should be included in this section of the PD when appropriate"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Non-clinical"
  },

  "module4": {
    title: "Module 4: Non-Clinical Summaries",
    description: "Non-clinical study reports and summaries.",
    requirements: [
      "Not normally needed for multisource (generic) products",
      "Deals with toxicity testing intended to justify stability and safety of the product",
      "Included for completeness to indicate appropriate format and placement of nonclinical data",
      "Refer to ICH M4S (R2) for organization and study design/data content"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Non-clinical",
    conditionalText: "Not required for generic products unless specific toxicity/safety justification needed"
  },

  // Folder-level requirements
  "module1": {
    title: "Module 1: Administrative & Product Information",
    description: "Regional administrative information and product information",
    requirements: [
      "All administrative documents required by NAFDAC",
      "Product information documents (SmPC, PIL, labeling)",
      "Regional summaries (BTIF, QIS)",
      "Electronic review documents and product samples"
    ],
    format: "Various",
    mandatory: true,
    apiOptions: ["all"],
    section: "Administrative"
  },

  "1.2": {
    title: "Application Information",
    description: "Core application documents and certificates",
    requirements: [
      "Application letter",
      "Registration form",
      "Certificate of incorporation",
      "Power of attorney",
      "Notarized declaration of the applicant",
      "Power of attorney/contract manufacturing agreement",
      "Certificate of Pharmaceutical Product (CPP)",
      "Certificate of Good Manufacturing Practice (GMP)",
      "Manufacturing authorization",
      "Evidence of trademark registration",
      "Superintendent pharmacist’s annual licence to practice",
      "Certificate of registration and retention of premises",
      "Evidence of previous marketing authorization (if applicable)",
      "Invitation letter for GMP inspection",
      "Copy of Certificate of Suitability of the European Pharmacopoeia (where applicable)",
      "Letter of access for APIMF(s) (where applicable)",
      "Biowaiver request for BCS-based bioavailability study",
      "Biowaiver request for additional strength bioavailability study"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.3": {
    title: "Product Information",
    description: "Product labeling and information documents",
    requirements: [
      "Summary of Product Characteristics (SmPC)",
      "Patient Information Leaflet (PIL)",
      "Product labeling (inner and outer)",
      "Provide annotated versions of revisions when requested by the authority"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.3.1": {
    title: "Summary of Product Characteristics (SmPC)",
    description: "Full professional information for healthcare use following NAFDAC/WHO SmPC format.",
    requirements: [
      "Provide a copy of the SmPC in this section",
      "Use NAFDAC/WHO SmPC format",
      "Submit an annotated version when revisions are requested",
      "Annotations must identify all changes vs last approved SmPC or authority request"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.3.2": {
    title: "Labelling",
    description: "Outer and inner labels with all required regulatory information.",
    requirements: [
      "Provide all container labels (inner and outer)",
      "Include labels for all strengths, dosage forms, and reconstitution diluents",
      "Submit annotated revised labels when revisions are requested"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.3.3": {
    title: "Patient Information Leaflet (PIL)",
    description: "Consumer-facing information leaflet in clear, readable language.",
    requirements: [
      "Provide a copy of the Patient Information Leaflet (PIL) in this section"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.4": {
    title: "Regional Summaries",
    description: "NAFDAC-specific summary documents",
    requirements: [
      "Bioequivalence Trial Information Form (BTIF)",
      "Quality Information Summary (QIS)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.4.1": {
    title: "Bioequivalence Trial Information Form (BTIF)",
    description: "Summary of BE study following WHO PQ forms.",
    requirements: [
      "Must follow WHO PQ forms",
      "Summary of BE study: sites, subjects, methods, results",
      "Must be signed by Principal Investigator"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    conditionalText: "Required for generic products unless biowaiver granted"
  },

  "1.4.2": {
    title: "Quality Information Summary (QIS)",
    description: "High-level summary of Module 3 (Quality) following WHO PQ forms.",
    requirements: [
      "Complete the QIS using WHO PQ forms/template",
      "High-level summary of Module 3 (Quality)",
      "Includes API details, excipients, control tests, stability summary",
      "Must be consistent with full dossier data"
    ],
    format: "Word",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.5": {
    title: "Electronic Review Documents",
    description: "Electronic copies of all submitted documents for NAFDAC review.",
    requirements: [
      "Provide electronic versions in searchable PDF format",
      "Save electronic documents to CD-ROM",
      "Place all electronic media submitted in this section"
    ],
    format: "Electronic Media",
    mandatory: true,
    apiOptions: ["all"]
  },

  "1.6": {
    title: "Product Samples",
    description: "Physical samples of the product for NAFDAC testing and evaluation.",
    requirements: [
      "Provide a sample in the same packaging intended for commercial purposes",
      "Mock-up packaging may be used if final packaging is not available"
    ],
    format: "Physical Samples",
    mandatory: true,
    apiOptions: ["all"]
  },

  "module2": {
    title: "Module 2: CTD Summaries",
    description: "Module 2 includes CTD summaries that provide overviews of Modules 3–5.",
    requirements: [
      "CTD Table of Contents (Modules 2-5)",
      "CTD Introduction",
      "Quality Overall Summary (QOS-PD)",
      "Non-clinical Overview",
      "Clinical Overview",
      "Non-clinical Written and Tabulated Summaries",
      "Clinical Summary"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Summaries",
    conditionalText: "For multisource (generic) products, Modules 2.4–2.7 are not usually needed"
  },

  "2.1": {
    title: "CTD Table of Contents",
    description: "Table of contents for Module 2 to 5.",
    requirements: [
      "Provide the table of contents for Modules 2 to 5"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "2.2": {
    title: "Introduction",
    description: "Brief introduction describing the product and the contents of Modules 2–5.",
    requirements: [
      "Proprietary name",
      "Non-proprietary name or common name of the drug substance",
      "Company name",
      "Dosage form(s)",
      "Strength(s)",
      "Route of administration",
      "Proposed indication(s)",
      "Brief description of the contents of Modules 2 to 5 with cross-references"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"]
  },

  "2.3": {
    title: "Quality Overall Summary (QOS)",
    description: "Summary that follows the scope and outline of the Body of Data in Module 3.",
    requirements: [
      "Includes API section (2.3.S), FPP section (2.3.P), Appendices (2.3.A), and Regional Information (2.3.R)",
      "Must follow the scope and outline of Module 3",
      "Must not include information, data, or justification not already in Module 3 or other CTD modules",
      "Complete the QOS-PD template and follow ICH M4Q(R1)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.S": {
    title: "Drug Substance Summary",
    description: "Summary of drug substance information for each API.",
    requirements: [
      "For products with more than one drug substance, submit 2.3.S.1–2.3.S.7 for each drug substance",
      "Clearly identify the substance name and manufacturer in the title of each section"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.S.1": {
    title: "General Information",
    description: "General information summary for the drug substance.",
    requirements: [
      "Include information from Module 3.2.S.1"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.S.2": {
    title: "Manufacture",
    description: "Manufacture summary for the drug substance.",
    requirements: [
      "Include information from Module 3.2.S.2",
      "Provide the name, address, and responsibility of each manufacturer, including contractors and proposed production/testing sites",
      "Provide a brief description of the manufacturing process and controls ensuring routine and consistent quality (may be a flow diagram)",
      "Provide a flow diagram as in 3.2.S.2.2",
      "Describe source and starting material and raw materials of biological origin as in 3.2.S.2.3",
      "Highlight critical process intermediates as in 3.2.S.2.4",
      "Describe process validation and/or evaluation as in 3.2.S.2.5"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.S.3": {
    title: "Characterisation",
    description: "Characterisation summary for the drug substance.",
    requirements: [
      "Include a summary of interpretation of evidence of structure and isomerism as in 3.2.S.3.1",
      "Provide a tabulated summary of data in 3.2.S.3.2 with graphical representation where appropriate"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.S.4": {
    title: "Control of Drug Substance",
    description: "Control summary for the drug substance.",
    requirements: [
      "Include a brief summary of specification justification, analytical procedures, and validation",
      "Provide the specification from 3.2.S.4.1",
      "Provide a tabulated summary of batch analyses from 3.2.S.4.4 with graphical representation where appropriate"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.S.5": {
    title: "Reference Standards or Materials",
    description: "Reference standards summary for the drug substance.",
    requirements: [
      "Include information from 3.2.S.5 (tabulated presentation where appropriate)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.S.6": {
    title: "Container Closure System",
    description: "Container closure summary for the drug substance.",
    requirements: [
      "Provide a brief description and discussion of information from 3.2.S.6"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.S.7": {
    title: "Stability",
    description: "Stability summary for the drug substance.",
    requirements: [
      "Summarize studies undertaken (conditions, batches, analytical procedures) and provide a brief discussion of results and conclusions, proposed storage conditions, retest date or shelf-life as described in 3.2.S.7.1",
      "Include the post-approval stability protocol as described in 3.2.S.7.2",
      "Provide a tabulated summary of stability results from 3.2.S.7.3 with graphical representation where appropriate"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.P": {
    title: "Finished Pharmaceutical Product Summary",
    description: "Summary of finished pharmaceutical product information.",
    requirements: [
      "Include 2.3.P.1–2.3.P.8"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.P.1": {
    title: "Description and Composition of the Drug Product",
    description: "Summary of FPP description and composition.",
    requirements: [
      "Provide information from 3.2.P.1",
      "Provide the composition from 3.2.P.1"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.P.2": {
    title: "Pharmaceutical Development",
    description: "Summary of pharmaceutical development for the FPP.",
    requirements: [
      "Provide a discussion of information and data from 3.2.P.2",
      "Provide a tabulated summary of formulations used in clinical trials and dissolution profiles where relevant"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.P.3": {
    title: "Manufacture",
    description: "Summary of FPP manufacture.",
    requirements: [
      "Provide information on the manufacturer",
      "Provide a brief description of the manufacturing process and controls ensuring routine and consistent quality",
      "Provide a flow diagram as in 3.2.P.3.3",
      "Provide a brief description of process validation and/or evaluation as in 3.2.P.3.5"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.P.4": {
    title: "Control of Excipients",
    description: "Summary of excipient control for the FPP.",
    requirements: [
      "Provide a summary of excipient quality as described in 3.2.P.4"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.P.5": {
    title: "Control of Drug Product",
    description: "Summary of FPP control strategy.",
    requirements: [
      "Provide a summary of specification justification, analytical procedures and validation, and characterisation of impurities",
      "Provide specification(s) from 3.2.P.5.1",
      "Provide a tabulated summary of batch analyses from 3.2.P.5.4 with graphical representation where appropriate"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.P.6": {
    title: "Reference Standards or Materials",
    description: "Summary of reference standards for the FPP.",
    requirements: [
      "Include information from 3.2.P.6 (tabulated presentation where appropriate)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.P.7": {
    title: "Container Closure System",
    description: "Summary of the container closure system for the FPP.",
    requirements: [
      "Provide a brief description and discussion of information in 3.2.P.7"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.P.8": {
    title: "Stability",
    description: "Summary of stability studies for the FPP.",
    requirements: [
      "Summarize studies undertaken (conditions, batches, analytical procedures) and provide a brief discussion of results and conclusions with storage conditions and shelf-life (including in-use where applicable)",
      "Provide a tabulated summary of stability results from 3.2.P.8.3 with graphical representation where appropriate",
      "Provide the post-approval stability protocol as described in 3.2.P.8.2"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.A": {
    title: "Appendices",
    description: "Appendices summary.",
    requirements: [
      "Provide appendices summary"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.3.R": {
    title: "Regional Information",
    description: "Regional information summary.",
    requirements: [
      "Provide regional information summary"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Quality"
  },

  "2.4": {
    title: "Non-clinical Overview",
    description: "Integrated overall analysis of the information in Module 4.",
    requirements: [
      "Should not exceed about 30 pages",
      "Present in sequence: Overview of nonclinical testing strategy, Pharmacology, Pharmacokinetics, Toxicology, Integrated overview and conclusions, List of literature references",
      "Integrated overview and conclusions should define characteristics demonstrated by nonclinical studies and support safety for intended clinical use",
      "Discuss implications of nonclinical findings for safe human use (as applicable to labelling)",
      "Refer to ICH M4S (R2) Module 2.4"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    conditionalText: "Not normally required for multisource (generic) products unless safety assessment studies are needed"
  },

  "2.5": {
    title: "Clinical Overview",
    description: "Critical analysis of the clinical data in the CTD.",
    requirements: [
      "Provide conclusions and implications of clinical data; do not recapitulate data",
      "Clinical Summary provides factual summarization; Clinical Overview provides succinct discussion and interpretation",
      "Present in the order: Table of Contents, 2.5.1 Product Development Rationale, 2.5.2 Overview of Biopharmaceutics, 2.5.3 Overview of Clinical Pharmacology, 2.5.4 Overview of Efficacy, 2.5.5 Overview of Safety, 2.5.6 Benefits and Risks Conclusions, 2.5.7 Literature References",
      "Refer to ICH M4E (R1) Module 2.5"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    conditionalText: "Not usually required for multisource (generic) products"
  },

  "2.5.1": {
    title: "Product Development Rationale",
    description: "Clinical overview subsection.",
    requirements: [
      "Provide the product development rationale"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    conditionalText: "Not usually required for multisource (generic) products"
  },

  "2.5.2": {
    title: "Overview of Biopharmaceutics",
    description: "Clinical overview subsection.",
    requirements: [
      "Provide the overview of biopharmaceutics"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    conditionalText: "Not usually required for multisource (generic) products"
  },

  "2.5.3": {
    title: "Overview of Clinical Pharmacology",
    description: "Clinical overview subsection.",
    requirements: [
      "Provide the overview of clinical pharmacology"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    conditionalText: "Not usually required for multisource (generic) products"
  },

  "2.5.4": {
    title: "Overview of Efficacy",
    description: "Clinical overview subsection.",
    requirements: [
      "Provide the overview of efficacy"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    conditionalText: "Not usually required for multisource (generic) products"
  },

  "2.5.5": {
    title: "Overview of Safety",
    description: "Clinical overview subsection.",
    requirements: [
      "Provide the overview of safety"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    conditionalText: "Not usually required for multisource (generic) products"
  },

  "2.5.6": {
    title: "Benefits and Risks Conclusions",
    description: "Clinical overview subsection.",
    requirements: [
      "Provide benefits and risks conclusions"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    conditionalText: "Not usually required for multisource (generic) products"
  },

  "2.5.7": {
    title: "Literature References",
    description: "Clinical overview subsection.",
    requirements: [
      "Provide literature references"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    conditionalText: "Not usually required for multisource (generic) products"
  },

  "2.6": {
    title: "Non-clinical Written and Tabulated Summaries",
    description: "Non-clinical written and tabulated summaries.",
    requirements: [
      "Provide non-clinical written and tabulated summaries"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    conditionalText: "Not usually required for multisource (generic) products"
  },

  "2.7": {
    title: "Clinical Summary",
    description: "Clinical summary.",
    requirements: [
      "Provide a clinical summary"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    conditionalText: "Not usually required for multisource (generic) products"
  },

  "module3": {
    title: "Module 3: Quality",
    description: "The Quality module follows the structure and illustrative explanations outlined in ICH M4Q (R1). Text is duplicated only where emphasis is desired.",
    requirements: [
      "3.1 Table of Contents (Module 3)",
      "3.2.S Body of Data - Drug Substance",
      "3.2.P Drug Product (Finished Pharmaceutical Product)",
      "3.2.A Appendices (if applicable)",
      "3.2.R Regional Information",
      "3.3 Literature References"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "3.1": {
    title: "Table of Contents (Module 3)",
    description: "Table of contents for Module 3.",
    requirements: [
      "The table of contents should give the location of each study report in Module 3"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Quality"
  },

  "3.2.S": {
    title: "Drug Substance (API)",
    description: "Body of Data - Drug Substance.",
    requirements: [
      "Option 1 - Confirmation of API prequalification document",
      "Option 2 - Certificate of Suitability of the European Pharmacopoeia (CEP)",
      "Option 3 - Active Pharmaceutical Ingredient Master File (APIMF) procedure",
      "Option 4 - Full details in the product dossier",
      "For products containing more than one drug substance, submit information for each drug substance",
      "Provide letter of access for the CEP holder in Module 1.2.16 and evidence of WHO prequalification where applicable",
      "Indicate at the beginning of the API section (and in the QOS-PD) how information for each API manufacturer is submitted",
      "Option 1: Provide complete copy of prequalification confirmation in Module 1 with authorization box; include 3.2.S.1.3, 3.2.S.2 (if sterile API), 3.2.S.3.1, 3.2.S.4.1, 3.2.S.4.2/3.2.S.4.3, 3.2.S.4.4, 3.2.S.5, and 3.2.S.7 as applicable",
      "Option 2: Provide complete CEP (with annexes) in Module 1, declaration of access, and written commitment to inform NAFDAC if CEP is withdrawn; include 3.2.S.1.3, 3.2.S.3.1, 3.2.S.4.1, 3.2.S.4.2/3.2.S.4.3, 3.2.S.4.4, 3.2.S.5, 3.2.S.6 (unless CEP specifies container-closure and applicant uses the same), and 3.2.S.7 (unless CEP retest period/storage conditions are the same or longer); include sterilization process validation for sterile APIs",
      "Option 3: API manufacturer submits APIMF to NAFDAC; include Open Part in PD as annex to 3.2.S; complete S.1.1–S.1.3, S.2, S.2.1, S.2.2, S.2.4, S.3.1, S.3.2, S.4.1–S.4.5, S.5, S.6, S.7.1–S.7.3; provide letter of access in Module 1; ensure complete APIMF is supplied to NAFDAC by API manufacturer",
      "Option 4: Submit full details in 3.2.S as outlined in subsequent sections and complete the QOS-PD"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Substance"
  },

  "3.2.P": {
    title: "Drug Product (Finished Pharmaceutical Product)",
    description: "Complete quality information for the finished pharmaceutical product including description, development, manufacturing, and control",
    requirements: [
      "3.2.P.1 Description and Composition of the FPP",
      "3.2.P.2 Pharmaceutical Development (QTPP, CQAs, formulation rationale, compatibility studies)",
      "3.2.P.3 Manufacture (process description, batch formula, validation)",
      "3.2.P.4 Control of Excipients",
      "3.2.P.5 Control of FPP (specifications, analytical procedures, batch analyses)",
      "3.2.P.6 Reference Standards or Materials",
      "3.2.P.7 Container-Closure System",
      "3.2.P.8 Stability (summary, protocol, data)"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.S.1": {
    title: "General Information",
    description: "Basic identifying information for the drug substance including nomenclature, structure, and properties",
    requirements: [
      "3.2.S.1.1 Nomenclature: INN, compendial names, chemical names, company codes, CAS number - names must match labels, SmPC, PIL",
      "3.2.S.1.2 Structure: Structural formula, stereochemistry, molecular formula, molecular mass, free base/acid mass for salts",
      "3.2.S.1.3 General Properties: Physical description, solubilities, pH-solubility profile (pH 1.2-6.8), dose/solubility volume calculation, polymorphism, pKa, UV absorption, hygroscopicity, partition coefficient, melting point, BCS classification"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option3", "option4"],
    section: "Drug Substance"
  },

  "3.2.S.2": {
    title: "Manufacture",
    description: "Complete manufacturing information for the drug substance including process description and controls",
    requirements: [
      "3.2.S.2.1 Manufacturer(s): Name, address, role of API manufacturer, contractors, production sites (exact address, not HQ), contact details, manufacturing authorization, GMP certificate",
      "3.2.S.2.2 Manufacturing Process & Controls: Flow diagram with synthetic steps, molecular formulas, weights, yields, structures, solvents/reagents, operating conditions; narrative description with quantities, critical steps, process controls, equipment; polymorphic form produced; particle size control if critical; multiple site comparisons; sterile API validation; GMP starting material justification per ICH Q7"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option3", "option4"],
    section: "Drug Substance"
  },

  "3.2.S.4": {
    title: "Control of Drug Substance",
    description: "Complete analytical control strategy for API quality assurance",
    requirements: [
      "3.2.S.4.1 Specification: List of tests, analytical procedures, acceptance criteria with justification",
      "3.2.S.4.2 Analytical Procedures: Compendial and in-house methods for assay, identification, impurities, physicochemical tests",
      "3.2.S.4.3 Validation of Analytical Procedures: Method validation covering accuracy, precision, specificity, linearity, range, detection/quantitation limits, ruggedness",
      "3.2.S.4.4 Batch Analyses: CoA for at least two batches (one from PK/tox studies, one from formulation development)",
      "3.2.S.4.5 Justification of Specification: Justify specification based on process parameters, stability data, regulatory guidelines"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option1", "option2", "option3", "option4"],
    section: "Drug Substance"
  },

  "3.2.P.2": {
    title: "Pharmaceutical Development",
    description: "Development studies showing that formulation, process, packaging, microbiology, and instructions are suitable for intended use. Use quality risk management principles (ICH Q8, Q9, Q10).",
    requirements: [
      "Purpose: Explain development studies showing formulation, process, packaging, microbiology, and instructions are suitable for intended use",
      "Key Components: Define Quality Target Product Profile (QTPP), Identify Critical Quality Attributes (CQAs), Discuss API and excipient properties, container-closure selection, manufacturing process considerations",
      "3.2.P.2.1 Components of FPP: API compatibility with excipients, physicochemical characteristics (solubility, particle size, polymorphism, water content), FDC API-API compatibility, excipient justification (choice, concentration, grade, function)",
      "3.2.P.2.2 Finished Pharmaceutical Product: Formulation development rationale, in vitro dissolution/drug release, overages justification, physicochemical and biological properties",
      "3.2.P.2.3 Manufacturing Process Development: Process rationale, critical process parameters (CPPs), robustness, scale-up considerations, protection against deterioration",
      "3.2.P.2.4 Container-Closure System: Material selection, protection properties, compatibility/safety, extractables/leachables, moisture permeability, light transmission testing",
      "3.2.P.2.5 Microbiological Attributes: Microbial limits justification, antimicrobial preservatives selection, preservative-effectiveness studies, container-closure integrity for sterile products",
      "3.2.P.2.6 Compatibility: Compatibility with diluents, dosing devices, API precipitation/assay/pH/degradation, dilution compatibility data over shelf-life and temperature conditions"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.3": {
    title: "Manufacture",
    description: "Complete manufacturing information for the drug product including process description, controls, and validation",
    requirements: [
      "3.2.P.3.1 Manufacturer(s): Name, address, manufacturing authorization, GMP certificate",
      "3.2.P.3.2 Batch Formula: Complete batch formula with quantities",
      "3.2.P.3.3 Description of Manufacturing Process and Process Controls: Detailed process description with flow diagram",
      "3.2.P.3.4 Controls of Critical Steps and Intermediates: In-process controls with acceptance criteria",
      "3.2.P.3.5 Process Validation and/or Evaluation: Validation protocol, commitment letter, statistical validation"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.4": {
    title: "Control of Excipients",
    description: "Specifications and control strategy for all excipients used in the formulation",
    requirements: [
      "3.2.P.4.1 Specifications: Provide specifications for all excipients (even if not in final product), compendial compliance statement, full spec for non-compendial, official monographs only (unless justified)",
      "3.2.P.4.2 Analytical Procedures: Provide analytical procedures unless compendial",
      "3.2.P.4.3 Validation of Analytical Procedures: Usually not required unless using in-house methods",
      "3.2.P.4.4 Justification of Specifications: Justify additional tests beyond compendial standards",
      "3.2.P.4.5 Excipients of Human/Animal Origin: Source, testing, viral safety, TSE compliance (CEP if applicable), avoid animal-origin where possible",
      "3.2.P.4.6 Novel Excipients: Not accepted by NAFDAC"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.4.1": {
    title: "Specifications",
    description: "Excipient specifications with special requirements for natural materials and additives",
    requirements: [
      "Provide specifications for all excipients (even if not in final product)",
      "If compendial standard -> state compliance (no need to reproduce monograph)",
      "Non-compendial -> provide full spec",
      "Only excipients with official monographs allowed (unless justified)",
      "For natural excipients: microbial limits required",
      "For plant oils: demonstrate absence of aflatoxins/biocides",
      "For colours: must comply with accepted regulatory lists",
      "For flavours: qualitative composition + food regulation compliance"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.4.2": {
    title: "Analytical Procedures",
    description: "Analytical procedures for excipient testing",
    requirements: [
      "Provide analytical procedures unless compendial"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.4.3": {
    title: "Validation of Analytical Procedures",
    description: "Validation requirements for excipient analytical methods",
    requirements: [
      "Usually not required unless using in-house methods"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.4.4": {
    title: "Justification of Specifications",
    description: "Justification for excipient specification requirements",
    requirements: [
      "Justify any additional tests beyond compendial standards"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.4.5": {
    title: "Excipients of Human or Animal Origin",
    description: "Special requirements for excipients derived from human or animal sources",
    requirements: [
      "Provide information on: Source, Testing, Viral safety",
      "Provide TSE compliance (e.g., CEP) if applicable",
      "Avoid animal-origin materials where possible"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product",
    conditionalText: "Required only when using excipients of human or animal origin"
  },

  "3.2.P.4.6": {
    title: "Novel Excipients",
    description: "Policy on novel excipients",
    requirements: [
      "Not accepted by NAFDAC"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "3.2.P.5": {
    title: "Control of FPP",
    description: "Complete control strategy for the finished pharmaceutical product",
    requirements: [
      "3.2.P.5.1 Specifications: Release and shelf-life specifications with appearance, identification, assay, purity/impurities, dissolution/performance tests, physical tests, microbial tests, uniformity",
      "3.2.P.5.2 Analytical Procedures: Full copies of in-house methods, QOS-PD tables for summarizing",
      "3.2.P.5.3 Validation of Analytical Procedures: Full validation reports for in-house methods, verify compendial methods for specificity/accuracy/repeatability",
      "3.2.P.5.4 Batch Analyses: Minimum 2 pilot-scale batches OR 1 pilot + 1 smaller batch for simple products",
      "3.2.P.5.5 Characterization of Impurities: Impurity profiling and identification",
      "3.2.P.5.6 Justification of Specifications: Justify test inclusion/omission, acceptance criteria, deviations from compendial standards"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Drug Product"
  },

  "5.1": {
    title: "Table of Contents (Module 5)",
    description: "Table of contents for clinical study reports.",
    requirements: [
      "Provide a table of contents for study reports"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Clinical"
  },

  "5.2": {
    title: "Tabular Listing of Clinical Studies",
    description: "Tabular listing of clinical studies.",
    requirements: [
      "Provide a tabular listing of clinical studies"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Clinical"
  },

  "5.3": {
    title: "Clinical Study Reports",
    description: "Clinical study reports organized per CTD structure.",
    requirements: [
      "Follow ICH E3 for organization of clinical study reports and references",
      "Place each study report in only one section based on the primary objective",
      "Cross-reference studies with multiple objectives in other sections",
      "Provide an explanation such as 'Not applicable' or 'No study conducted' when no report is available",
      "Refer to ICH M4E(R2) for additional organization and data content guidance"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Clinical"
  },

  "5.3.1": {
    title: "Reports of Biopharmaceutical Studies",
    description: "Reports of biopharmaceutic studies.",
    requirements: [
      "Bioavailability studies evaluate rate and extent of release of the active substance from the medicinal product",
      "Comparative BA/BE studies may use PK, PD, clinical, or in vitro dissolution endpoints",
      "Studies may be single-dose or multiple-dose",
      "If the primary purpose is PK but includes BA information, submit in 5.3.1 and cross-reference 5.3.1.1 and/or 5.3.1.2"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Primary requirement for generic products"
  },

  "5.3.1.1": {
    title: "Bioavailability (BA) Study Reports",
    description: "Reports of BA studies for the finished product.",
    requirements: [
      "Studies comparing release and systemic availability from a solid oral dosage form vs intravenous or oral liquid",
      "Dosage form proportionality studies",
      "Food-effect studies"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Include if BA studies were conducted"
  },

  "5.3.1.3": {
    title: "In vitro-In vivo Correlation (IVIVC) Study Reports",
    description: "In vitro-in vivo correlation study reports.",
    requirements: [
      "In vitro dissolution studies providing BA information or correlation with in vivo data",
      "In vitro dissolution tests for batch QC/release belong in Module 3"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Include if IVIVC studies were conducted"
  },

  "5.3.1.4": {
    title: "Bioanalytical/Analytical Methods for Human Studies",
    description: "Bioanalytical and analytical methods for human studies.",
    requirements: [
      "Provide methods in individual study reports where used",
      "If used in multiple studies, include method and validation once in 5.3.1.4 and cross-reference"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Include if human bioanalytical methods were used"
  },

  "5.3.2": {
    title: "Reports of Studies Using Human Biomaterials",
    description: "Reports of studies pertinent to pharmacokinetics using human biomaterials.",
    requirements: [
      "Include reports under subsections 5.3.2.1–5.3.2.3"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical"
  },

  "5.3.2.1": {
    title: "Plasma Protein Binding Study Reports",
    description: "Plasma protein binding study reports.",
    requirements: [
      "Methods and conditions",
      "Results and conclusions"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Include if studies were conducted"
  },

  "5.3.2.2": {
    title: "Hepatic Metabolism and Drug Interaction Studies",
    description: "Hepatic metabolism and interaction study reports.",
    requirements: [
      "Methods and conditions",
      "Results and conclusions"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Include if studies were conducted"
  },

  "5.3.2.3": {
    title: "Studies Using Other Human Biomaterials",
    description: "Studies using other human biomaterials (microsomes, hepatocytes, tissues).",
    requirements: [
      "Methods and conditions",
      "Results and conclusions"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Include if studies were conducted"
  },

  "5.3.3": {
    title: "Reports of Human Pharmacokinetic Studies",
    description: "Reports of human pharmacokinetic studies.",
    requirements: [
      "Include reports under subsections 5.3.3.1–5.3.3.5"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical"
  },

  "5.3.3.1": {
    title: "Healthy Subject PK and Initial Tolerability",
    description: "PK study reports in healthy subjects and initial tolerability.",
    requirements: [
      "Study design and dosing",
      "PK parameters and tolerability findings"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Include if studies were conducted"
  },

  "5.3.3.2": {
    title: "Patient PK and Initial Tolerability",
    description: "PK study reports in patients and initial tolerability.",
    requirements: [
      "Study design and dosing",
      "PK parameters and tolerability findings"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Include if studies were conducted"
  },

  "5.3.3.3": {
    title: "Intrinsic Factor PK Studies",
    description: "PK studies on intrinsic factors such as age, sex, renal or hepatic impairment.",
    requirements: [
      "Study design and endpoints",
      "Results and conclusions"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Include if studies were conducted"
  },

  "5.3.3.4": {
    title: "Extrinsic Factor PK Studies",
    description: "PK studies on extrinsic factors such as food, smoking, or concomitant drugs.",
    requirements: [
      "Study design and endpoints",
      "Results and conclusions"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Include if studies were conducted"
  },

  "5.3.3.5": {
    title: "Population PK Study Reports",
    description: "Population PK study reports.",
    requirements: [
      "Model description and assumptions",
      "Results and conclusions"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Include if studies were conducted"
  },

  "5.3.4": {
    title: "Reports of Human Pharmacodynamic Studies",
    description: "Reports of human pharmacodynamic studies.",
    requirements: [
      "Include reports under subsections 5.3.4.1–5.3.4.2"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical"
  },

  "5.3.4.1": {
    title: "Healthy Subject PD and PK/PD Studies",
    description: "PD and PK/PD study reports in healthy subjects.",
    requirements: [
      "Study design and endpoints",
      "Results and conclusions"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Include if studies were conducted"
  },

  "5.3.4.2": {
    title: "Patient PD and PK/PD Studies",
    description: "PD and PK/PD study reports in patients.",
    requirements: [
      "Study design and endpoints",
      "Results and conclusions"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Include if studies were conducted"
  },

  "5.3.5": {
    title: "Reports of Efficacy and Safety Studies",
    description: "Reports of efficacy and safety studies.",
    requirements: [
      "Include reports under subsections 5.3.5.1–5.3.5.4"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical"
  },

  "5.3.5.1": {
    title: "Controlled Clinical Studies",
    description: "Controlled clinical study reports for the claimed indication.",
    requirements: [
      "Study design, endpoints, and results",
      "Conclusions supporting indication"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Include if studies were conducted"
  },

  "5.3.5.2": {
    title: "Uncontrolled Clinical Studies",
    description: "Uncontrolled clinical study reports (open-label or single-arm).",
    requirements: [
      "Study design, endpoints, and results",
      "Conclusions"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Include if studies were conducted"
  },

  "5.3.5.3": {
    title: "Integrated Analyses / Meta-Analyses",
    description: "Integrated analyses, meta-analyses, and bridging analyses.",
    requirements: [
      "Methods and data sources",
      "Results and conclusions"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Include if analyses were conducted"
  },

  "5.3.5.4": {
    title: "Other Clinical Study Reports",
    description: "Other clinical study reports and special investigations.",
    requirements: [
      "Study design, endpoints, and results",
      "Conclusions"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Include if studies were conducted"
  },

  "5.3.6": {
    title: "Post-Marketing Experience",
    description: "Post-marketing experience reports for marketed products.",
    requirements: [
      "Summaries of marketing experience",
      "Include all significant safety observations"
    ],
    format: "PDF",
    mandatory: false,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Required only for already-marketed products"
  },

  "5.3.7": {
    title: "Case Report Forms & Individual Patient Listings",
    description: "CRFs and individual patient data listings in same sequence as clinical study reports.",
    requirements: [
      "Include CRFs and patient listings described as appendices in ICH/WHO clinical study report guidance",
      "Place in same order as clinical study reports and index by study"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Clinical"
  },

  "5.4": {
    title: "Literature References",
    description: "All published references cited in Clinical Overview, Clinical Summary, and individual clinical study reports.",
    requirements: [
      "Provide copies of references cited in the Clinical Overview",
      "Provide copies of important references cited in the Clinical Summary or technical reports",
      "Only one copy of each reference is required",
      "References not included should be available on request"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Clinical"
  },

  "module5": {
    title: "Module 5: Clinical Summaries",
    description: "Module 5 provides the organization for placement of clinical study reports and related information.",
    requirements: [
      "For multisource (generic) products, only Section 5.3.1 is normally needed",
      "All parts of the module are included for completeness and correct placement",
      "Use ICH E3 and M4E(R2) for organization of study reports and data content",
      "Provide 'Not applicable' or 'No study conducted' where no report is available"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["all"],
    section: "Clinical",
    conditionalText: "Only Section 5.3.1 typically required for generic products"
  },

  "3.2.S.6": {
    title: "Container-Closure System",
    description: "Description and specifications of primary packaging for the API",
    requirements: [
      "Identify primary packaging for the API",
      "Provide: Materials and specifications, Type of container",
      "Information required: Source of packaging components, Specifications/CoA of each component, Characterization of materials"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option2", "option3", "option4"],
    section: "Drug Substance",
    conditionalText: "Required except when CEP defines exact packaging and applicant commits to using same (Option 2)"
  },

  "3.2.S.7": {
    title: "Stability",
    description: "Comprehensive API stability data and conclusions",
    requirements: [
      "3.2.S.7.1 Stability Summary and Conclusions: Provide stability data summary, state conclusions relating to retest period and storage conditions, follow WHO/ICH guidelines",
      "3.2.S.7.2 Post-Approval Stability Protocol and Stability Commitment: Provide post-approval stability protocol, include commitment to continue long-term stability studies, follow approved conditions, update dossier as required",
      "3.2.S.7.3 Stability Data: Complete stability data presentation"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option1", "option3", "option4"],
    section: "Drug Substance",
    conditionalText: "Required when applicant's proposed retest period or storage conditions exceed those in prequalified API (Option 1). Not required if CEP retest period is longer/same as applicant's proposal (Option 2)"
  },

  "3.2.S.7.1": {
    title: "Stability Summary & Conclusions",
    description: "Summary of all stability studies including stress testing, accelerated, and long-term studies under Zone IVB conditions",
    requirements: [
      "Stress Testing: Target 10-30% API degradation, conditions include heat, acid/base hydrolysis, oxidation, photolysis",
      "Accelerated Storage: 40C +/- 2C / 75% +/- 5% RH for minimum 6 months",
      "Long-term Storage: 30C +/- 2C / 75% +/- 5% RH (or 65% +/- 5% if justified) for minimum 6 months",
      "Minimum 3 pilot-scale batches manufactured using final process",
      "Numerical results mandatory (no 'conforms' statements)",
      "Photostability per ICH Q1B (may be waived if packaging proven light-protective)",
      "Literature support from WHOPARs, EPARs, peer-reviewed publications acceptable"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option4"],
    section: "Drug Substance"
  },

  "3.2.S.7.2": {
    title: "Post-approval Stability Protocol & Stability Commitment",
    description: "Signed commitments for ongoing stability studies and post-approval stability protocols",
    requirements: [
      "Primary Stability Commitment: Signed & dated written commitment if long-term data don't cover proposed retest period",
      "Commitment Stability Studies: At least 3 production batches through entire retest period",
      "Full stability protocol: Number of batches, physical/chemical/microbiological tests, acceptance criteria, test methods, container-closure system, testing frequency, storage conditions",
      "Ongoing Stability Programme: At least one production batch per year, test annually, detect trends, control degradation products",
      "Additional batches required in some cases with signed & dated commitment"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option4"],
    section: "Drug Substance"
  },

  "3.2.S.7.3": {
    title: "Stability Data",
    description: "Complete presentation of all stability data including forced degradation, accelerated, long-term, and photostability results",
    requirements: [
      "Forced degradation results with stress conditions",
      "Accelerated results (40C/75% RH, 6 months minimum)",
      "Long-term results (30C/75% RH or 65% RH, 6 months minimum)",
      "Photostability data (if performed per ICH Q1B)",
      "Data format: Tables, graphs, narrative summaries",
      "Analytical procedures described with validation data showing stability-indicating capability",
      "Numerical results mandatory: assay values, individual degradation products, total degradation products",
      "References: ICH Q1A, Q1B, Q1D, Q1E, Q2; WHO TRS 953 Annex 2"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option4"],
    section: "Drug Substance"
  },

  "3.2.S.2.3": {
    title: "Control of Materials",
    description: "Complete control strategy for all materials used in API manufacture",
    requirements: [
      "List of Materials Used: All raw materials, starting materials, solvents, reagents, catalysts, and processing aids with identification of usage step",
      "Quality and Control Information: Specifications demonstrating suitability for intended use, cross-reference to Module 3.2.A.2",
      "API Starting Material (Option 4): Full characterization, justified specifications (identity, assay, impurity profile), manufacturer details, preparation description, unified specification for all manufacturers, notification requirement for changes",
      "Definition of Starting Material: Synthetic precursor >=1 steps prior to final intermediate, isolated/purified/well-characterized, significant structural fragment incorporation",
      "Specifications for All Materials: Starting materials, reagents, solvents, catalysts, recovered materials applicable to all manufacturing sites",
      "Certificate of Analysis: CoA for starting material for synthesis",
      "Carry-Over of Impurities: Assessment of impurity carry-over into final API",
      "TSE Attestation: Letter confirming no risk of transmitting animal spongiform encephalopathy agents, CEP for TSE risk where available"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option3", "option4"],
    section: "Drug Substance",
    conditionalText: "When APIMF is used, cross-reference to Restricted Part is sufficient. Reference: ICH Q6A"
  },

  "3.2.S.2.4": {
    title: "Controls of Critical Steps and Intermediates",
    description: "Control strategy for critical manufacturing steps and isolated intermediates",
    requirements: [
      "Critical Steps: Identification including introduction/removal of significant impurities, creation of essential structural elements (chiral centers), major chemical transformations, steps impacting solid-state properties or homogeneity",
      "Tests and acceptance criteria with justification and supporting experimental data",
      "Intermediates: Specifications for isolated intermediates including identity, purity, assay"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option3", "option4"],
    section: "Drug Substance",
    conditionalText: "APIMF Procedure: Cross-reference to Restricted Part, except for applicant-relevant information. Reference: ICH Q6A"
  },

  "3.2.S.2.5": {
    title: "Process Validation and/or Evaluation",
    description: "Validation studies for API manufacturing process",
    requirements: [
      "Aseptic Processing/Sterilization: Full validation and/or evaluation studies where applicable",
      "Description of aseptic processing and/or sterilization methods",
      "Controls ensuring sterility during storage and transport",
      "Justification for alternative processes"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option3", "option4"],
    section: "Drug Substance",
    conditionalText: "APIMF Procedure: Cross-reference to Restricted Part when APIMF is used"
  },

  "3.2.S.2.6": {
    title: "Manufacturing Process Development",
    description: "Development history and process changes throughout API development",
    requirements: [
      "Description and Discussion of Changes: All significant changes to manufacturing process or site made throughout development",
      "Changes covering: Comparative bioavailability batches, Biowaiver batches, Scale-up batches, Pilot batches, Production-scale batches (if available)",
      "Reference: Link to API data in Section 3.2.S.4.4"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option3", "option4"],
    section: "Drug Substance",
    conditionalText: "APIMF Procedure: Cross-reference to Restricted Part when applicable"
  },

  "3.2.S.3.2": {
    title: "Impurities",
    description: "Comprehensive impurity profiling and control strategy following ICH guidelines",
    requirements: [
      "Impurity Discussion: Potential and actual impurities from synthesis, manufacture, degradation, starting materials, by-products, intermediates, chiral impurities, degradation products with chemical names, structures, and origin",
      "ICH Guidelines: Follow ICH Q3A, Q3B, Q3C principles using highest potential MDD for threshold setting, include maximum hourly dose for parenterals",
      "Semi-Synthetic APIs: Apply ICH impurity principles when multiple chemical steps exist",
      "Identification of Impurities: Apply ICH threshold limits (e.g., NMT 0.10% or 1 mg/day), not limited to pharmacopoeial impurities only",
      "Qualification of Impurities: Pharmacopoeial limits accepted as qualified, comparative impurity profiling versus innovator or PQ-listed FPP, accelerated/stressed impurities cannot be used for qualification",
      "Setting Acceptance Criteria: Justified by identification/qualification thresholds and historical batch data, numerical results required",
      "Residual Solvents: ICH Class II solvents prior to last step may be exempt with justification (<10% of Q3C limit), last-step solvents must always be controlled, Trimethylamine limit: 320 ppm or PDE-based 3.2 mg/day",
      "Genotoxic Impurities: Discussion of absence/limits with justification per EMA/FDA guidance",
      "Metal Catalysts: Residual metal catalysts/reagents must be controlled, not applicable to metals that are deliberate components or excipients"
    ],
    format: "PDF",
    mandatory: true,
    apiOptions: ["option3", "option4"],
    section: "Drug Substance",
    conditionalText: "Reference: ICH Q6A, Q3A, Q3C"
  }
};
