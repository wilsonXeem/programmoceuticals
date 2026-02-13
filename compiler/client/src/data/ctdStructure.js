export const ctdStructure = {
  name: "CTD Dossier",
  type: "folder",
  path: "/ctd",
  children: [
    {
      name: "Module 1: Administrative & Product Information",
      type: "folder",
      path: "/ctd/module1",
      children: [
        { name: "1.0 Cover Letter", type: "file", path: "/ctd/module1/1.0" },
        { name: "1.1 Table of Contents", type: "file", path: "/ctd/module1/1.1" },
        {
          name: "1.2 Application Information",
          type: "folder",
          path: "/ctd/module1/1.2",
          children: [
            { name: "1.2.1 Application Letter", type: "file", path: "/ctd/module1/1.2/1.2.1" },
            { name: "1.2.2 Registration Form", type: "file", path: "/ctd/module1/1.2/1.2.2" },
            { name: "1.2.3 Certificate of Incorporation", type: "file", path: "/ctd/module1/1.2/1.2.3" },
            { name: "1.2.4 Power of Attorney", type: "file", path: "/ctd/module1/1.2/1.2.4" },
            { name: "1.2.5 Notarized Declaration", type: "file", path: "/ctd/module1/1.2/1.2.5" },
            { name: "1.2.6 Contract Manufacturing Agreement", type: "file", path: "/ctd/module1/1.2/1.2.6" },
            { name: "1.2.7 Certificate of Pharmaceutical Product", type: "file", path: "/ctd/module1/1.2/1.2.7" },
            { name: "1.2.8 GMP Certificate", type: "file", path: "/ctd/module1/1.2/1.2.8" },
            { name: "1.2.9 Manufacturing Authorization", type: "file", path: "/ctd/module1/1.2/1.2.9" },
            { name: "1.2.10 Trademark Registration", type: "file", path: "/ctd/module1/1.2/1.2.10" },
            { name: "1.2.11 Pharmacist License", type: "file", path: "/ctd/module1/1.2/1.2.11" },
            { name: "1.2.12 Premises Certificate", type: "file", path: "/ctd/module1/1.2/1.2.12" },
            { name: "1.2.13 Previous Marketing Authorization", type: "file", path: "/ctd/module1/1.2/1.2.13" },
            { name: "1.2.14 GMP Inspection Invitation", type: "file", path: "/ctd/module1/1.2/1.2.14" },
            { name: "1.2.15 CEP Certificate (if applicable)", type: "file", path: "/ctd/module1/1.2/1.2.15" },
            { name: "1.2.16 APIMF Letter of Access (if applicable)", type: "file", path: "/ctd/module1/1.2/1.2.16" },
            { name: "1.2.17 BCS Biowaiver Request (if applicable)", type: "file", path: "/ctd/module1/1.2/1.2.17" },
            { name: "1.2.18 Additional Strength Biowaiver (if applicable)", type: "file", path: "/ctd/module1/1.2/1.2.18" }
          ]
        },
        {
          name: "1.3 Product Information",
          type: "folder",
          path: "/ctd/module1/1.3",
          children: [
            { name: "1.3.1 Summary of Product Characteristics (SmPC)", type: "file", path: "/ctd/module1/1.3/1.3.1" },
            { name: "1.3.2 Labelling (outer & inner labels)", type: "file", path: "/ctd/module1/1.3/1.3.2" },
            { name: "1.3.3 Patient Information Leaflet (PIL)", type: "file", path: "/ctd/module1/1.3/1.3.3" }
          ]
        },
        {
          name: "1.4 Regional Summaries",
          type: "folder",
          path: "/ctd/module1/1.4",
          children: [
            { name: "1.4.1 Bioequivalence Trial Information Form (BTIF)", type: "file", path: "/ctd/module1/1.4/1.4.1" },
            { name: "1.4.2 Quality Information Summary (QIS)", type: "file", path: "/ctd/module1/1.4/1.4.2" }
          ]
        },
        { name: "1.5 Electronic Review Documents", type: "file", path: "/ctd/module1/1.5" },
        { name: "1.6 Product Samples", type: "file", path: "/ctd/module1/1.6" }
      ]
    },
    {
      name: "Module 2: CTD Summaries",
      type: "folder",
      path: "/ctd/module2",
      children: [
        { name: "2.1 CTD Table of Contents", type: "file", path: "/ctd/module2/2.1" },
        { name: "2.2 CTD Introduction", type: "file", path: "/ctd/module2/2.2" },
        { name: "2.3 Quality Overall Summary (QOS-PD)", type: "file", path: "/ctd/module2/2.3" },
        { name: "2.4 Nonclinical Overview (not required for generics)", type: "file", path: "/ctd/module2/2.4" },
        {
          name: "2.5 Clinical Overview (not required for generics)",
          type: "folder",
          path: "/ctd/module2/2.5",
          children: [
            { name: "2.5.1 Product Development Rationale", type: "file", path: "/ctd/module2/2.5/2.5.1" },
            { name: "2.5.2 Overview of Biopharmaceutics", type: "file", path: "/ctd/module2/2.5/2.5.2" },
            { name: "2.5.3 Overview of Clinical Pharmacology", type: "file", path: "/ctd/module2/2.5/2.5.3" },
            { name: "2.5.4 Overview of Efficacy", type: "file", path: "/ctd/module2/2.5/2.5.4" },
            { name: "2.5.5 Overview of Safety", type: "file", path: "/ctd/module2/2.5/2.5.5" },
            { name: "2.5.6 Benefits and Risks Conclusions", type: "file", path: "/ctd/module2/2.5/2.5.6" },
            { name: "2.5.7 Literature References", type: "file", path: "/ctd/module2/2.5/2.5.7" }
          ]
        },
        { name: "2.6 Nonclinical Written and Tabulated Summaries (not required for generics)", type: "file", path: "/ctd/module2/2.6" },
        { name: "2.7 Clinical Summary (not required for generics)", type: "file", path: "/ctd/module2/2.7" }
      ]
    },
    {
      name: "Module 3: Quality",
      type: "folder",
      path: "/ctd/module3",
      children: [
        { name: "3.1 Table of Contents", type: "file", path: "/ctd/module3/3.1" },
        {
          name: "3.2.S Drug Substance",
          type: "folder",
          path: "/ctd/module3/3.2.S",
          children: [
            {
              name: "3.2.S.1 General Information",
              type: "folder",
              path: "/ctd/module3/3.2.S/3.2.S.1",
              children: [
                { name: "3.2.S.1.1 Nomenclature", type: "file", path: "/ctd/module3/3.2.S/3.2.S.1/3.2.S.1.1" },
                { name: "3.2.S.1.2 Structure", type: "file", path: "/ctd/module3/3.2.S/3.2.S.1/3.2.S.1.2" },
                { name: "3.2.S.1.3 General Properties", type: "file", path: "/ctd/module3/3.2.S/3.2.S.1/3.2.S.1.3" }
              ]
            },
            {
              name: "3.2.S.2 Manufacture",
              type: "folder",
              path: "/ctd/module3/3.2.S/3.2.S.2",
              children: [
                { name: "3.2.S.2.1 Manufacturer(s)", type: "file", path: "/ctd/module3/3.2.S/3.2.S.2/3.2.S.2.1" },
                { name: "3.2.S.2.2 Description of Manufacturing Process and Process Controls", type: "file", path: "/ctd/module3/3.2.S/3.2.S.2/3.2.S.2.2" },
                { name: "3.2.S.2.3 Control of Materials", type: "file", path: "/ctd/module3/3.2.S/3.2.S.2/3.2.S.2.3" },
                { name: "3.2.S.2.4 Controls of Critical Steps and Intermediates", type: "file", path: "/ctd/module3/3.2.S/3.2.S.2/3.2.S.2.4" },
                { name: "3.2.S.2.5 Process Validation and/or Evaluation", type: "file", path: "/ctd/module3/3.2.S/3.2.S.2/3.2.S.2.5" },
                { name: "3.2.S.2.6 Manufacturing Process Development", type: "file", path: "/ctd/module3/3.2.S/3.2.S.2/3.2.S.2.6" }
              ]
            },
            {
              name: "3.2.S.3 Characterisation",
              type: "folder",
              path: "/ctd/module3/3.2.S/3.2.S.3",
              children: [
                { name: "3.2.S.3.1 Elucidation of Structure and Other Characteristics", type: "file", path: "/ctd/module3/3.2.S/3.2.S.3/3.2.S.3.1" },
                { name: "3.2.S.3.2 Impurities", type: "file", path: "/ctd/module3/3.2.S/3.2.S.3/3.2.S.3.2" }
              ]
            },
            {
              name: "3.2.S.4 Control of Drug Substance",
              type: "folder",
              path: "/ctd/module3/3.2.S/3.2.S.4",
              children: [
                { name: "3.2.S.4.1 Specification", type: "file", path: "/ctd/module3/3.2.S/3.2.S.4/3.2.S.4.1" },
                { name: "3.2.S.4.2 Analytical Procedures", type: "file", path: "/ctd/module3/3.2.S/3.2.S.4/3.2.S.4.2" },
                { name: "3.2.S.4.3 Validation of Analytical Procedures", type: "file", path: "/ctd/module3/3.2.S/3.2.S.4/3.2.S.4.3" },
                { name: "3.2.S.4.4 Batch Analyses", type: "file", path: "/ctd/module3/3.2.S/3.2.S.4/3.2.S.4.4" },
                { name: "3.2.S.4.5 Justification of Specification", type: "file", path: "/ctd/module3/3.2.S/3.2.S.4/3.2.S.4.5" }
              ]
            },
            { name: "3.2.S.5 Reference Standards or Materials", type: "file", path: "/ctd/module3/3.2.S/3.2.S.5" },
            { name: "3.2.S.6 Container-Closure System", type: "file", path: "/ctd/module3/3.2.S/3.2.S.6" },
            {
              name: "3.2.S.7 Stability",
              type: "folder",
              path: "/ctd/module3/3.2.S/3.2.S.7",
              children: [
                { name: "3.2.S.7.1 Stability Summary and Conclusions", type: "file", path: "/ctd/module3/3.2.S/3.2.S.7/3.2.S.7.1" },
                { name: "3.2.S.7.2 Post-approval Stability Protocol and Stability Commitment", type: "file", path: "/ctd/module3/3.2.S/3.2.S.7/3.2.S.7.2" },
                { name: "3.2.S.7.3 Stability Data", type: "file", path: "/ctd/module3/3.2.S/3.2.S.7/3.2.S.7.3" }
              ]
            }
          ]
        },
        {
          name: "3.2.P Drug Product",
          type: "folder",
          path: "/ctd/module3/3.2.P",
          children: [
            { name: "3.2.P.1 Description and Composition of the FPP", type: "file", path: "/ctd/module3/3.2.P/3.2.P.1" },
            {
              name: "3.2.P.2 Pharmaceutical Development",
              type: "folder",
              path: "/ctd/module3/3.2.P/3.2.P.2",
              children: [
                {
                  name: "3.2.P.2.1 Components of the FPP",
                  type: "folder",
                  path: "/ctd/module3/3.2.P/3.2.P.2/3.2.P.2.1",
                  children: [
                    { name: "3.2.P.2.1.1 Active Pharmaceutical Ingredient", type: "file", path: "/ctd/module3/3.2.P/3.2.P.2/3.2.P.2.1/3.2.P.2.1.1" },
                    { name: "3.2.P.2.1.2 Excipients", type: "file", path: "/ctd/module3/3.2.P/3.2.P.2/3.2.P.2.1/3.2.P.2.1.2" }
                  ]
                },
                {
                  name: "3.2.P.2.2 Finished Pharmaceutical Product",
                  type: "folder",
                  path: "/ctd/module3/3.2.P/3.2.P.2/3.2.P.2.2",
                  children: [
                    { name: "3.2.P.2.2.1 Formulation Development", type: "file", path: "/ctd/module3/3.2.P/3.2.P.2/3.2.P.2.2/3.2.P.2.2.1" },
                    { name: "3.2.P.2.2.2 Overages", type: "file", path: "/ctd/module3/3.2.P/3.2.P.2/3.2.P.2.2/3.2.P.2.2.2" },
                    { name: "3.2.P.2.2.3 Physicochemical and Biological Properties", type: "file", path: "/ctd/module3/3.2.P/3.2.P.2/3.2.P.2.2/3.2.P.2.2.3" }
                  ]
                },
                { name: "3.2.P.2.3 Manufacturing Process Development", type: "file", path: "/ctd/module3/3.2.P/3.2.P.2/3.2.P.2.3" },
                { name: "3.2.P.2.4 Container-Closure System", type: "file", path: "/ctd/module3/3.2.P/3.2.P.2/3.2.P.2.4" },
                { name: "3.2.P.2.5 Microbiological Attributes", type: "file", path: "/ctd/module3/3.2.P/3.2.P.2/3.2.P.2.5" },
                { name: "3.2.P.2.6 Compatibility", type: "file", path: "/ctd/module3/3.2.P/3.2.P.2/3.2.P.2.6" }
              ]
            },
            {
              name: "3.2.P.3 Manufacture",
              type: "folder",
              path: "/ctd/module3/3.2.P/3.2.P.3",
              children: [
                { name: "3.2.P.3.1 Manufacturer(s)", type: "file", path: "/ctd/module3/3.2.P/3.2.P.3/3.2.P.3.1" },
                { name: "3.2.P.3.2 Batch Formula", type: "file", path: "/ctd/module3/3.2.P/3.2.P.3/3.2.P.3.2" },
                { name: "3.2.P.3.3 Description of Manufacturing Process and Process Controls", type: "file", path: "/ctd/module3/3.2.P/3.2.P.3/3.2.P.3.3" },
                { name: "3.2.P.3.4 Controls of Critical Steps and Intermediates", type: "file", path: "/ctd/module3/3.2.P/3.2.P.3/3.2.P.3.4" },
                { name: "3.2.P.3.5 Process Validation and/or Evaluation", type: "file", path: "/ctd/module3/3.2.P/3.2.P.3/3.2.P.3.5" }
              ]
            },
            {
              name: "3.2.P.4 Control of Excipients",
              type: "folder",
              path: "/ctd/module3/3.2.P/3.2.P.4",
              children: [
                { name: "3.2.P.4.1 Specifications", type: "file", path: "/ctd/module3/3.2.P/3.2.P.4/3.2.P.4.1" },
                { name: "3.2.P.4.2 Analytical Procedures", type: "file", path: "/ctd/module3/3.2.P/3.2.P.4/3.2.P.4.2" },
                { name: "3.2.P.4.3 Validation of Analytical Procedures", type: "file", path: "/ctd/module3/3.2.P/3.2.P.4/3.2.P.4.3" },
                { name: "3.2.P.4.4 Justification of Specifications", type: "file", path: "/ctd/module3/3.2.P/3.2.P.4/3.2.P.4.4" },
                { name: "3.2.P.4.5 Excipients of Human or Animal Origin", type: "file", path: "/ctd/module3/3.2.P/3.2.P.4/3.2.P.4.5" },
                { name: "3.2.P.4.6 Novel Excipients", type: "file", path: "/ctd/module3/3.2.P/3.2.P.4/3.2.P.4.6" }
              ]
            },
            {
              name: "3.2.P.5 Control of FPP",
              type: "folder",
              path: "/ctd/module3/3.2.P/3.2.P.5",
              children: [
                { name: "3.2.P.5.1 Specification(s)", type: "file", path: "/ctd/module3/3.2.P/3.2.P.5/3.2.P.5.1" },
                { name: "3.2.P.5.2 Analytical Procedures", type: "file", path: "/ctd/module3/3.2.P/3.2.P.5/3.2.P.5.2" },
                { name: "3.2.P.5.3 Validation of Analytical Procedures", type: "file", path: "/ctd/module3/3.2.P/3.2.P.5/3.2.P.5.3" },
                { name: "3.2.P.5.4 Batch Analyses", type: "file", path: "/ctd/module3/3.2.P/3.2.P.5/3.2.P.5.4" },
                { name: "3.2.P.5.5 Characterization of Impurities", type: "file", path: "/ctd/module3/3.2.P/3.2.P.5/3.2.P.5.5" },
                { name: "3.2.P.5.6 Justification of Specification(s)", type: "file", path: "/ctd/module3/3.2.P/3.2.P.5/3.2.P.5.6" }
              ]
            },
            { name: "3.2.P.6 Reference Standards or Materials", type: "file", path: "/ctd/module3/3.2.P/3.2.P.6" },
            { name: "3.2.P.7 Container-Closure System", type: "file", path: "/ctd/module3/3.2.P/3.2.P.7" },
            {
              name: "3.2.P.8 Stability",
              type: "folder",
              path: "/ctd/module3/3.2.P/3.2.P.8",
              children: [
                { name: "3.2.P.8.1 Stability Summary and Conclusions", type: "file", path: "/ctd/module3/3.2.P/3.2.P.8/3.2.P.8.1" },
                { name: "3.2.P.8.2 Post-approval Stability Protocol and Stability Commitment", type: "file", path: "/ctd/module3/3.2.P/3.2.P.8/3.2.P.8.2" },
                { name: "3.2.P.8.3 Stability Data", type: "file", path: "/ctd/module3/3.2.P/3.2.P.8/3.2.P.8.3" }
              ]
            }
          ]
        },
        {
          name: "3.2.A Appendices",
          type: "folder",
          path: "/ctd/module3/3.2.A",
          children: [
            { name: "3.2.A.1 Facilities and Equipment (not applicable for non-biotech)", type: "file", path: "/ctd/module3/3.2.A/3.2.A.1" },
            { name: "3.2.A.2 Adventitious Agent's Safety Evaluation", type: "file", path: "/ctd/module3/3.2.A/3.2.A.2" },
            { name: "3.2.A.3 Novel Excipients (not accepted by NAFDAC)", type: "file", path: "/ctd/module3/3.2.A/3.2.A.3" }
          ]
        },
        {
          name: "3.2.R Regional Information",
          type: "folder",
          path: "/ctd/module3/3.2.R",
          children: [
            {
              name: "3.2.R.1 Production Documentation",
              type: "folder",
              path: "/ctd/module3/3.2.R/3.2.R.1",
              children: [
                { name: "3.2.R.1.1 Executed Production Documents", type: "file", path: "/ctd/module3/3.2.R/3.2.R.1/3.2.R.1.1" },
                { name: "3.2.R.1.2 Master Production Documents", type: "file", path: "/ctd/module3/3.2.R/3.2.R.1/3.2.R.1.2" }
              ]
            },
            { name: "3.2.R.2 Analytical Procedures and Validation Information", type: "file", path: "/ctd/module3/3.2.R/3.2.R.2" }
          ]
        },
        { name: "3.3 Literature References", type: "file", path: "/ctd/module3/3.3" }
      ]
    },
    {
      name: "Module 4: Non-clinical Summaries (not required for generics)",
      type: "folder",
      path: "/ctd/module4",
      children: [
        { name: "4.1 Table of Contents", type: "file", path: "/ctd/module4/4.1" },
        {
          name: "4.2 Study Reports",
          type: "folder",
          path: "/ctd/module4/4.2",
          children: [
            {
              name: "4.2.1 Pharmacology",
              type: "folder",
              path: "/ctd/module4/4.2/4.2.1",
              children: [
                { name: "4.2.1.1 Primary Pharmacodynamics", type: "file", path: "/ctd/module4/4.2/4.2.1/4.2.1.1" },
                { name: "4.2.1.2 Secondary Pharmacodynamics", type: "file", path: "/ctd/module4/4.2/4.2.1/4.2.1.2" },
                { name: "4.2.1.3 Safety Pharmacology", type: "file", path: "/ctd/module4/4.2/4.2.1/4.2.1.3" },
                { name: "4.2.1.4 Pharmacodynamic Drug Interactions", type: "file", path: "/ctd/module4/4.2/4.2.1/4.2.1.4" }
              ]
            },
            {
              name: "4.2.2 Pharmacokinetics",
              type: "folder",
              path: "/ctd/module4/4.2/4.2.2",
              children: [
                { name: "4.2.2.1 Analytical Methods and Validation Reports", type: "file", path: "/ctd/module4/4.2/4.2.2/4.2.2.1" },
                { name: "4.2.2.2 Absorption", type: "file", path: "/ctd/module4/4.2/4.2.2/4.2.2.2" },
                { name: "4.2.2.3 Distribution", type: "file", path: "/ctd/module4/4.2/4.2.2/4.2.2.3" },
                { name: "4.2.2.4 Metabolism", type: "file", path: "/ctd/module4/4.2/4.2.2/4.2.2.4" },
                { name: "4.2.2.5 Excretion", type: "file", path: "/ctd/module4/4.2/4.2.2/4.2.2.5" },
                { name: "4.2.2.6 Pharmacokinetic Drug Interactions", type: "file", path: "/ctd/module4/4.2/4.2.2/4.2.2.6" },
                { name: "4.2.2.7 Other Pharmacokinetic Studies", type: "file", path: "/ctd/module4/4.2/4.2.2/4.2.2.7" }
              ]
            },
            {
              name: "4.2.3 Toxicology",
              type: "folder",
              path: "/ctd/module4/4.2/4.2.3",
              children: [
                { name: "4.2.3.1 Single-Dose Toxicity", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.1" },
                { name: "4.2.3.2 Repeat-Dose Toxicity", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.2" },
                {
                  name: "4.2.3.3 Genotoxicity",
                  type: "folder",
                  path: "/ctd/module4/4.2/4.2.3/4.2.3.3",
                  children: [
                    { name: "4.2.3.3.1 In vitro", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.3/4.2.3.3.1" },
                    { name: "4.2.3.3.2 In vivo", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.3/4.2.3.3.2" }
                  ]
                },
                {
                  name: "4.2.3.4 Carcinogenicity",
                  type: "folder",
                  path: "/ctd/module4/4.2/4.2.3/4.2.3.4",
                  children: [
                    { name: "4.2.3.4.1 Long-term Studies", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.4/4.2.3.4.1" },
                    { name: "4.2.3.4.2 Short/Medium-term Studies", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.4/4.2.3.4.2" },
                    { name: "4.2.3.4.3 Other Studies", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.4/4.2.3.4.3" }
                  ]
                },
                {
                  name: "4.2.3.5 Reproductive and Developmental Toxicity",
                  type: "folder",
                  path: "/ctd/module4/4.2/4.2.3/4.2.3.5",
                  children: [
                    { name: "4.2.3.5.1 Fertility and Early Embryonic Development", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.5/4.2.3.5.1" },
                    { name: "4.2.3.5.2 Embryo-fetal Development", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.5/4.2.3.5.2" },
                    { name: "4.2.3.5.3 Prenatal and Postnatal Development", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.5/4.2.3.5.3" },
                    { name: "4.2.3.5.4 Juvenile Animal Studies", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.5/4.2.3.5.4" }
                  ]
                },
                { name: "4.2.3.6 Local Tolerance", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.6" },
                {
                  name: "4.2.3.7 Other Toxicity Studies",
                  type: "folder",
                  path: "/ctd/module4/4.2/4.2.3/4.2.3.7",
                  children: [
                    { name: "4.2.3.7.1 Antigenicity", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.7/4.2.3.7.1" },
                    { name: "4.2.3.7.2 Immunotoxicity", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.7/4.2.3.7.2" },
                    { name: "4.2.3.7.3 Mechanistic Studies", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.7/4.2.3.7.3" },
                    { name: "4.2.3.7.4 Dependence", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.7/4.2.3.7.4" },
                    { name: "4.2.3.7.5 Metabolites", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.7/4.2.3.7.5" },
                    { name: "4.2.3.7.6 Impurities", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.7/4.2.3.7.6" },
                    { name: "4.2.3.7.7 Other", type: "file", path: "/ctd/module4/4.2/4.2.3/4.2.3.7/4.2.3.7.7" }
                  ]
                }
              ]
            }
          ]
        },
        { name: "4.3 Literature References", type: "file", path: "/ctd/module4/4.3" }
      ]
    },
    {
      name: "Module 5: Clinical Summaries (bioequivalence/biowaiver for generics)",
      type: "folder",
      path: "/ctd/module5",
      children: [
        { name: "5.1 Table of Contents", type: "file", path: "/ctd/module5/5.1" },
        { name: "5.2 Tabular Listing of Clinical Studies", type: "file", path: "/ctd/module5/5.2" },
        {
          name: "5.3 Clinical Study Reports",
          type: "folder",
          path: "/ctd/module5/5.3",
          children: [
            {
              name: "5.3.1 Reports of Bio-pharmaceutical Studies",
              type: "folder",
              path: "/ctd/module5/5.3/5.3.1",
              children: [
                { name: "5.3.1.1 Bioavailability (BA) Study Reports", type: "file", path: "/ctd/module5/5.3/5.3.1/5.3.1.1" },
                { name: "5.3.1.2 Comparative Bioavailability (BA) and Bioequivalence (BE) Study Reports", type: "file", path: "/ctd/module5/5.3/5.3.1/5.3.1.2" },
                { name: "5.3.1.3 In vitro-In vivo Correlation Study Reports", type: "file", path: "/ctd/module5/5.3/5.3.1/5.3.1.3" },
                { name: "5.3.1.4 Reports of Bioanalytical and Analytical Methods for Human Studies", type: "file", path: "/ctd/module5/5.3/5.3.1/5.3.1.4" }
              ]
            },
            {
              name: "5.3.2 Reports of Studies Pertinent to Pharmacokinetics using Human Biomaterials",
              type: "folder",
              path: "/ctd/module5/5.3/5.3.2",
              children: [
                { name: "5.3.2.1 Plasma Protein Binding Study Reports", type: "file", path: "/ctd/module5/5.3/5.3.2/5.3.2.1" },
                { name: "5.3.2.2 Reports of Hepatic Metabolism and Drug Interaction Studies", type: "file", path: "/ctd/module5/5.3/5.3.2/5.3.2.2" },
                { name: "5.3.2.3 Reports of Studies Using Other Human Biomaterials", type: "file", path: "/ctd/module5/5.3/5.3.2/5.3.2.3" }
              ]
            },
            {
              name: "5.3.3 Reports of Human Pharmacokinetic Studies",
              type: "folder",
              path: "/ctd/module5/5.3/5.3.3",
              children: [
                { name: "5.3.3.1 Healthy Subject PK and Initial Tolerability Study Reports", type: "file", path: "/ctd/module5/5.3/5.3.3/5.3.3.1" },
                { name: "5.3.3.2 Patient PK and Initial Tolerability Study Reports", type: "file", path: "/ctd/module5/5.3/5.3.3/5.3.3.2" },
                { name: "5.3.3.3 Intrinsic Factor PK Study Reports", type: "file", path: "/ctd/module5/5.3/5.3.3/5.3.3.3" },
                { name: "5.3.3.4 Extrinsic Factor PK Study Reports", type: "file", path: "/ctd/module5/5.3/5.3.3/5.3.3.4" },
                { name: "5.3.3.5 Population PK Study Reports", type: "file", path: "/ctd/module5/5.3/5.3.3/5.3.3.5" }
              ]
            },
            {
              name: "5.3.4 Reports of Human Pharmacodynamic Studies",
              type: "folder",
              path: "/ctd/module5/5.3/5.3.4",
              children: [
                { name: "5.3.4.1 Healthy Subject PD and PK/PD Study Reports", type: "file", path: "/ctd/module5/5.3/5.3.4/5.3.4.1" },
                { name: "5.3.4.2 Patient PD and PK/PD Study Reports", type: "file", path: "/ctd/module5/5.3/5.3.4/5.3.4.2" }
              ]
            },
            {
              name: "5.3.5 Reports of Efficacy and Safety Studies",
              type: "folder",
              path: "/ctd/module5/5.3/5.3.5",
              children: [
                { name: "5.3.5.1 Study Reports of Controlled Clinical Studies Pertinent to the Claimed Indication", type: "file", path: "/ctd/module5/5.3/5.3.5/5.3.5.1" },
                { name: "5.3.5.2 Study Reports of Uncontrolled Clinical Studies", type: "file", path: "/ctd/module5/5.3/5.3.5/5.3.5.2" },
                { name: "5.3.5.3 Reports of Analyses of Data from Multiple Studies", type: "file", path: "/ctd/module5/5.3/5.3.5/5.3.5.3" },
                { name: "5.3.5.4 Other Clinical Study Reports", type: "file", path: "/ctd/module5/5.3/5.3.5/5.3.5.4" }
              ]
            },
            { name: "5.3.6 Reports of Post-marketing Experience", type: "file", path: "/ctd/module5/5.3/5.3.6" },
            { name: "5.3.7 Case Report Forms and Individual Patient Listings", type: "file", path: "/ctd/module5/5.3/5.3.7" }
          ]
        },
        { name: "5.4 Literature References", type: "file", path: "/ctd/module5/5.4" }
      ]
    }
  ]
};