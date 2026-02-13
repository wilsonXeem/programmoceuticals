import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDossier } from "../hooks/useDossier";
import { DOSSIER_CHECKLIST } from "../utils/checklist";
import { INTERNAL_SCREENING_CHECKLIST } from "../utils/internalChecklist";
import { reportService } from "../services/reportService";
import { productExtractionService } from "../services/productExtractionService";
import { checkCeilingList } from "../utils/nafdacCeilingList";
import { checkFivePlusFivePolicy } from "../utils/fivePlusFivePolicy";
import { checkImportProhibitionList } from "../utils/importProhibitionList";
import { checkFDCRegulatoryDirective } from "../utils/fdcRegulatoryDirective";
import {
  hasNarrowTherapeuticIndex,
  getMatchedNTIDrugs,
} from "../utils/narrowTherapeuticIndex";
import { contentBasedScreeningService } from "../services/contentBasedScreeningService";
import { dossierInformationExtractor } from "../services/dossierInformationExtractor";
import { checkQISStructure } from "../services/qisStructureChecker";
import { usePrompt } from "./PromptProvider";

import InlineFilePreview from "./InlineFilePreview";

const Screening = () => {
  const navigate = useNavigate();
  const { dossier, getFileBlob, setDossier } = useDossier();
  const prompt = usePrompt();
  const [results, setResults] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState("internal");
  const getStorageKey = (suffix) => {
    const dossierKey = dossier?.id || dossier?.name || "default";
    return `screening-${suffix}-${dossierKey}`;
  };

  const [internalResponses, setInternalResponses] = useState(new Map());
  const [internalNotes, setInternalNotes] = useState(new Map());

  useEffect(() => {
    if (dossier) {
      const storedResponses = localStorage.getItem(getStorageKey("responses"));
      const storedNotes = localStorage.getItem(getStorageKey("notes"));
      if (storedResponses) {
        setInternalResponses(new Map(JSON.parse(storedResponses)));
      }
      if (storedNotes) {
        setInternalNotes(new Map(JSON.parse(storedNotes)));
      }
    }
  }, [dossier]);
  const [activePreview, setActivePreview] = useState(null);
  const [productInfo, setProductInfo] = useState(null);
  const [productCheckResults, setProductCheckResults] = useState(null);
  const [wordDocResults, setWordDocResults] = useState(null);
  const [dossierType, setDossierType] = useState(null);
  const [contentBasedResults, setContentBasedResults] = useState(null);
  const [isContentScreening, setIsContentScreening] = useState(false);
  const [extractedInfo, setExtractedInfo] = useState(null);
  const [dmsInfo, setDmsInfo] = useState({
    productName: "",
    manufacturerName: "",
    manufacturerAddress: "",
  });
  const [comparisonResults, setComparisonResults] = useState(null);
  const [isExtractingDossierInfo, setIsExtractingDossierInfo] = useState(false);
  const [qisStructureResults, setQisStructureResults] = useState(null);
  const [isCheckingQIS, setIsCheckingQIS] = useState(false);
  const [qisProgress, setQisProgress] = useState('');
  const [isCheckingWordDocs, setIsCheckingWordDocs] = useState(false);
  const [productInputs, setProductInputs] = useState({ productName: "" });
  const [productOrigin, setProductOrigin] = useState(""); // "local" or "imported"
  const [productType, setProductType] = useState(""); // "solid-oral" or "non-solid-oral"

  const checkQISStructure = async () => {
    if (!wordDocResults?.qisWord) {
      prompt.alert("No QIS Word document found. Please check word documents first.");
      return;
    }

    setIsCheckingQIS(true);
    setQisProgress('Initializing QIS structure check...');
    
    try {
      const qisFile = wordDocResults.qisWord;
      const fileBlob = await getFileBlob(qisFile.path);
      
      setQisProgress('Analyzing QIS document structure...');
      const results = await checkQISStructure(fileBlob, qisFile.name);
      
      setQisStructureResults(results);
      
      // Auto-suggest response based on results
      if (results.isCompliant) {
        handleInternalResponse(7, 'yes');
        handleInternalNote(7, 
          `✅ QIS TEMPLATE COMPLIANT: Document follows NAFDAC approved template structure.\n\n` +
          `Completeness: ${results.completeness}%\n` +
          `Found Sections: ${results.foundSections.length}\n` +
          `Template Compliance: ${results.isCompliant ? 'YES' : 'NO'}\n\n` +
          `QIS document structure meets NAFDAC requirements.`
        );
      } else {
        handleInternalResponse(7, 'no');
        handleInternalNote(7, 
          `❌ QIS TEMPLATE NON-COMPLIANT: Document does not follow NAFDAC approved template.\n\n` +
          `Completeness: ${results.completeness}%\n` +
          `Found Sections: ${results.foundSections.length}\n` +
          `Missing Sections: ${results.missingSections.length}\n\n` +
          `Missing: ${results.missingSections.join(', ')}\n\n` +
          `QIS document must be restructured to match NAFDAC template.`
        );
      }
    } catch (error) {
      console.error('QIS structure check error:', error);
      setQisStructureResults(null);
      handleInternalResponse(7, 'no');
      handleInternalNote(7, `❌ QIS CHECK ERROR: ${error.message}`);
    } finally {
      setIsCheckingQIS(false);
      setQisProgress('');
    }
  };

  // Auto-detect dossier type when dossier is loaded
  useEffect(() => {
    if (dossier) {
      if (!dossierType) {
        detectDossierType();
      }
    }
  }, [dossier, dossierType]);

  const flattenFiles = (node, basePath = "") => {
    if (!node) return [];
    let files = [];
    if (node.type === "file") {
      files.push({
        path: node.path,
        name: node.name,
        size: node.size || 0,
        type: node.name?.split(".").pop()?.toLowerCase() || "",
        fullPath: basePath + "/" + node.name,
      });
    }
    if (node.children) {
      node.children.forEach((child) => {
        const childPath = basePath + (node.name ? "/" + node.name : "");
        files = files.concat(flattenFiles(child, childPath));
      });
    }
    return files;
  };

  const calculateSimilarity = (str1, str2) => {
    const s1 = str1.toLowerCase().replace(/[^a-z0-9]/g, "");
    const s2 = str2.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (s1 === s2) return 1.0;
    if (s1.length === 0 || s2.length === 0) return 0;

    const matrix = [];
    for (let i = 0; i <= s2.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= s1.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= s2.length; i++) {
      for (let j = 1; j <= s1.length; j++) {
        if (s2.charAt(i - 1) === s1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }

    const maxLen = Math.max(s1.length, s2.length);
    return (maxLen - matrix[s2.length][s1.length]) / maxLen;
  };

  const extractKeyTerms = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter(
        (term) =>
          term.length > 2 &&
          ![
            "pdf",
            "doc",
            "docx",
            "the",
            "and",
            "for",
            "with",
            "module",
          ].includes(term)
      );
  };

  const findBestMatch = (expectedPath, description, files) => {
    const expectedFileName = expectedPath
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, "");
    const descriptionTerms = extractKeyTerms(description);
    const pathTerms = extractKeyTerms(expectedFileName);
    const allExpectedTerms = [...new Set([...descriptionTerms, ...pathTerms])];

    let bestMatch = null;
    let bestScore = 0;
    let matchType = "none";

    files.forEach((file) => {
      const fileName = file.name.replace(/\.[^/.]+$/, "");
      const fullPath = file.fullPath;
      const fileTerms = extractKeyTerms(fileName + " " + fullPath);

      if (file.fullPath.toLowerCase() === expectedPath.toLowerCase()) {
        bestMatch = file;
        bestScore = 1.0;
        matchType = "exact-path";
        return;
      }

      let termMatches = 0;
      let exactMatches = 0;

      allExpectedTerms.forEach((expectedTerm) => {
        const hasExactMatch = fileTerms.some(
          (fileTerm) => fileTerm === expectedTerm
        );
        const hasFuzzyMatch = fileTerms.some(
          (fileTerm) => calculateSimilarity(fileTerm, expectedTerm) > 0.85
        );

        if (hasExactMatch) {
          exactMatches++;
          termMatches++;
        } else if (hasFuzzyMatch) {
          termMatches += 0.8;
        }
      });

      if (allExpectedTerms.length > 0) {
        const semanticScore = termMatches / allExpectedTerms.length;
        const exactBonus = (exactMatches / allExpectedTerms.length) * 0.2;
        const finalScore = Math.min(semanticScore + exactBonus, 1.0);

        if (finalScore > bestScore && finalScore > 0.4) {
          bestMatch = file;
          bestScore = finalScore;
          matchType = exactMatches > 0 ? "semantic-exact" : "semantic-fuzzy";
        }
      }

      const fileNameSimilarity = calculateSimilarity(
        fileName,
        expectedFileName
      );
      if (fileNameSimilarity > bestScore && fileNameSimilarity > 0.7) {
        bestMatch = file;
        bestScore = fileNameSimilarity;
        matchType = "filename-similar";
      }

      if (bestScore < 0.5) {
        const pathSimilarity = calculateSimilarity(
          fullPath.toLowerCase(),
          expectedPath.toLowerCase()
        );
        if (pathSimilarity > bestScore && pathSimilarity > 0.6) {
          bestMatch = file;
          bestScore = pathSimilarity;
          matchType = "path-similar";
        }
      }
    });

    return { file: bestMatch, score: bestScore, matchType };
  };

  const validateFile = (file, expectedPath) => {
    const issues = [];

    if (expectedPath.toLowerCase().endsWith(".pdf") && file.type !== "pdf") {
      issues.push("Expected PDF file");
    }

    if (file.size === 0) {
      issues.push("File appears to be empty");
    } else if (file.size < 1024) {
      issues.push("File size suspiciously small");
    }

    return issues;
  };

  const detectDossierType = async () => {
    if (!dossier) return;

    const detectedType = await contentBasedScreeningService.detectDossierType(
      dossier
    );
    setDossierType(detectedType);
    return detectedType;
  };

  const runContentBasedScreening = async () => {
    if (!dossier) return;

    setIsContentScreening(true);
    setContentBasedResults(null);

    try {
      const type = await detectDossierType();

      if (type === "consolidated" || type === "mixed") {
        const results =
          await contentBasedScreeningService.screenConsolidatedDossier(
            dossier,
            getFileBlob
          );
        setContentBasedResults(results);
      } else {
        prompt.alert(
          "This appears to be a structured dossier. Using traditional checklist method instead."
        );
        await runChecklist();
      }
    } catch (error) {
      console.error("Content-based screening error:", error);
      prompt.alert(
        "Content-based screening encountered an error. Falling back to traditional checklist."
      );
      await runChecklist();
    } finally {
      setIsContentScreening(false);
    }
  };

  const runChecklist = async () => {
    if (!dossier) return;

    setIsRunning(true);
    await new Promise((resolve) => setTimeout(resolve, 100));

    const allFiles = flattenFiles(dossier.root);

    if (dossierType === "consolidated") {
      // Simple check for Module 1-5 presence for consolidated dossiers
      const modules = [1, 2, 3, 4, 5];
      const checkResults = modules.map((moduleNum) => {
        const hasModule = allFiles.some(
          (file) =>
            file.fullPath.toLowerCase().includes(`module ${moduleNum}`) ||
            file.fullPath.toLowerCase().includes(`module${moduleNum}`)
        );

        return {
          path: `Module ${moduleNum}`,
          description: `Module ${moduleNum} - CTD Module ${moduleNum}`,
          status: hasModule ? "✅ Found" : "❌ Missing",
          confidence: hasModule ? 100 : 0,
          matchType: hasModule ? "exact-path" : "none",
          matchTypeDescription: hasModule ? "Module found" : "Module not found",
          matchedFile: hasModule
            ? allFiles.find(
                (f) =>
                  f.fullPath.toLowerCase().includes(`module ${moduleNum}`) ||
                  f.fullPath.toLowerCase().includes(`module${moduleNum}`)
              )?.fullPath || ""
            : "",
          warnings: [],
          fileSize: 0,
        };
      });

      setResults(checkResults);
    } else {
      // Full structure check for traditional dossiers using DOSSIER_CHECKLIST
      const checkResults = DOSSIER_CHECKLIST.map((item) => {
        const match = findBestMatch(item.path, item.desc, allFiles);
        const validation = match.file
          ? validateFile(match.file, item.path)
          : [];

        return {
          path: item.path,
          description: item.desc,
          status: match.file ? "✅ Found" : "❌ Missing",
          confidence: Math.round(match.score * 100),
          matchType: match.matchType,
          matchTypeDescription:
            match.matchType === "exact-path"
              ? "Exact path match"
              : match.matchType === "semantic-exact"
              ? "Semantic match (exact terms)"
              : match.matchType === "semantic-fuzzy"
              ? "Semantic match (similar terms)"
              : match.matchType === "filename-similar"
              ? "Similar filename"
              : match.matchType === "path-similar"
              ? "Similar path"
              : "No match found",
          matchedFile: match.file?.fullPath || "",
          warnings: validation,
          fileSize: match.file?.size || 0,
        };
      });

      setResults(checkResults);
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsRunning(false);
  };

  const viewReport = () => {
    if (internalResponses.size === 0) {
      prompt.alert("Please answer at least one question before viewing the report.");
      return;
    }

    const reportData = {
      dossierName: dossier.name,
      responses: internalResponses,
      notes: internalNotes,
      checklist: INTERNAL_SCREENING_CHECKLIST,
      generatedAt: new Date().toISOString()
    };

    navigate('/report', { state: { reportData } });
  };

  const handleInternalResponse = (questionId, response) => {
    setInternalResponses((prev) => {
      const newMap = new Map(prev).set(questionId, response);
      localStorage.setItem(getStorageKey("responses"), JSON.stringify([...newMap]));
      return newMap;
    });
  };

  const handleInternalNote = (questionId, note) => {
    setInternalNotes((prev) => {
      const newMap = new Map(prev).set(questionId, note);
      localStorage.setItem(getStorageKey("notes"), JSON.stringify([...newMap]));
      return newMap;
    });
  };

  const clearAllComments = async () => {
    const confirmed = await prompt.confirm(
      "Are you sure you want to reset the entire screening? This will clear all responses and comments and cannot be undone.",
      { title: "Reset Screening", confirmLabel: "Reset" }
    );
    if (confirmed) {
      setInternalResponses(new Map());
      setInternalNotes(new Map());
      localStorage.removeItem(getStorageKey("responses"));
      localStorage.removeItem(getStorageKey("notes"));
      
      // Reset all other state
      setResults([]);
      setProductInfo(null);
      setProductCheckResults(null);
      setWordDocResults(null);
      setContentBasedResults(null);
      setExtractedInfo(null);
      setComparisonResults(null);
      setQisStructureResults(null);
      setProductInputs({ productName: "" });
      setProductOrigin("");
      setProductType("");
      setDmsInfo({
        productName: "",
        manufacturerName: "",
        manufacturerAddress: "",
      });
    }
  };

  const copyComment = (comment) => {
    if (navigator.clipboard && comment.trim()) {
      navigator.clipboard.writeText(comment).then(() => {
        prompt.toast("Comment copied to clipboard.", { tone: "success" });
      }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = comment;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      });
    }
  };

  const checkWordDocuments = async () => {
    if (!dossier) return;

    setIsCheckingWordDocs(true);
    const allFiles = flattenFiles(dossier.root);

    // Check Module 2 for QOS (Quality Overall Summary) Word documents
    const qosWordFiles = allFiles.filter((file) => {
      const path = file.fullPath.toLowerCase();
      const name = file.name.toLowerCase();
      const isWordDoc = name.endsWith(".doc") || name.endsWith(".docx");
      const inModule2 = path.includes("module 2");
      const hasQOS =
        name.includes("qos") ||
        name.includes("quality overall summary") ||
        name.includes("quality overall summury") ||
        (name.includes("quality") &&
          name.includes("overall") &&
          (name.includes("summary") || name.includes("summury")));
      return inModule2 && isWordDoc && hasQOS;
    });

    // Check Module 1 for QIS (Quality Information Summary) Word documents
    const qisWordFiles = allFiles.filter((file) => {
      const path = file.fullPath.toLowerCase();
      const name = file.name.toLowerCase();
      const isWordDoc = name.endsWith(".doc") || name.endsWith(".docx");
      const inModule1 = path.includes("module 1");
      const hasQIS =
        name.includes("qis") || name.includes("quality information summary");
      return inModule1 && isWordDoc && hasQIS;
    });

    const results = {
      qosWord: qosWordFiles.length > 0 ? qosWordFiles[0] : null,
      qisWord: qisWordFiles.length > 0 ? qisWordFiles[0] : null
    };

    setWordDocResults(results);
    setIsCheckingWordDocs(false);

    // Auto-suggest response for question 7 based on document availability only
    if (results.qosWord && results.qisWord) {
      handleInternalResponse(7, "yes");
      handleInternalNote(
        7,
        `✅ APPROVED: Both QOS and QIS Word documents found. QOS: "${results.qosWord.name}" (Module 2), QIS: "${results.qisWord.name}" (Module 1)`
      );
    } else {
      const issues = [];
      if (!results.qosWord) issues.push("QOS file missing in Module 2");
      if (!results.qisWord) issues.push("QIS file missing in Module 1");
      
      handleInternalResponse(7, "no");
      handleInternalNote(
        7,
        `❌ ISSUES FOUND: ${issues.join(", ")}. Both QOS (Module 2) and QIS (Module 1) must be provided in Word format.`
      );
    }
  };



  const extractDossierInformation = async () => {
    if (!dossier) {
      prompt.alert("No dossier loaded.");
      return;
    }

    setIsExtractingDossierInfo(true);
    try {
      const extracted =
        await dossierInformationExtractor.extractProductInformation(
          dossier,
          getFileBlob
        );
      setExtractedInfo(extracted);

      if (
        extracted.productName ||
        extracted.manufacturerName ||
        extracted.manufacturerAddress
      ) {
        handleInternalResponse(1, "yes");
        handleInternalNote(
          1,
          `✅ PRODUCT INFORMATION EXTRACTED:\n\n` +
            `Product Name: ${extracted.productName || "Not found"}\n` +
            `Manufacturer Name: ${
              extracted.manufacturerName || "Not found"
            }\n` +
            `Manufacturer Address: ${
              extracted.manufacturerAddress || "Not found"
            }\n\n` +
            `Confidence: ${
              extracted.confidence
            }% | Found in: ${extracted.foundIn
              .map((f) => f.file)
              .join(", ")}\n\n` +
            `Please verify this information matches the DMS portal data.`
        );
      } else {
        handleInternalResponse(1, "no");
        handleInternalNote(
          1,
          `❌ Could not extract product information from dossier. Manual verification required.`
        );
      }
    } catch (error) {
      console.error("Error extracting dossier information:", error);
      handleInternalResponse(1, "no");
      handleInternalNote(
        1,
        `❌ Error extracting product information: ${error.message}`
      );
    } finally {
      setIsExtractingDossierInfo(false);
    }
  };

  const compareDMSWithDossier = () => {
    if (!extractedInfo) {
      prompt.alert("Please extract dossier information first.");
      return;
    }

    if (
      !dmsInfo.productName &&
      !dmsInfo.manufacturerName &&
      !dmsInfo.manufacturerAddress
    ) {
      prompt.alert("Please enter DMS information first.");
      return;
    }

    const comparison = dossierInformationExtractor.compareWithDMS(
      extractedInfo,
      dmsInfo
    );
    setComparisonResults(comparison);

    // Auto-suggest response based on comparison
    if (comparison.overallMatch) {
      handleInternalResponse(1, "yes");
      handleInternalNote(
        1,
        `✅ VERIFIED: DMS and dossier information match.\n\n` +
          comparison.details
            .map(
              (d) =>
                `${d.field}: ${d.match ? "✅" : "❌"} ${
                  d.similarity
                }% similarity\n` +
                `  DMS: ${d.dms}\n` +
                `  Dossier: ${d.dossier}`
            )
            .join("\n\n")
      );
    } else {
      const matchCount = comparison.details.filter((d) => d.match).length;
      const totalCount = comparison.details.length;

      if (matchCount > 0) {
        handleInternalResponse(1, "partial");
        handleInternalNote(
          1,
          `⚠️ PARTIAL MATCH: ${matchCount}/${totalCount} fields match between DMS and dossier.\n\n` +
            comparison.details
              .map(
                (d) =>
                  `${d.field}: ${d.match ? "✅" : "❌"} ${
                    d.similarity
                  }% similarity\n` +
                  `  DMS: ${d.dms}\n` +
                  `  Dossier: ${d.dossier}`
              )
              .join("\n\n") +
            `\n\n⚠️ Please verify discrepancies manually.`
        );
      } else {
        handleInternalResponse(1, "no");
        handleInternalNote(
          1,
          `❌ NO MATCH: DMS and dossier information do not match.\n\n` +
            comparison.details
              .map(
                (d) =>
                  `${d.field}: ${d.match ? "✅" : "❌"} ${
                    d.similarity
                  }% similarity\n` +
                  `  DMS: ${d.dms}\n` +
                  `  Dossier: ${d.dossier}`
              )
              .join("\n\n") +
            `\n\n❌ Dossier may not match DMS portal information.`
        );
      }
    }
  };

  const checkProductCompliance = () => {
    if (!productInputs.productName) {
      handleInternalNote(2, "⚠️ Please enter generic name.");
      return;
    }

    const genericName = productInputs.productName.trim();
    const extractedInfo = {
      productName: genericName,
      activeIngredients: [genericName],
      strength: "",
      dosageForm: "",
    };

    setProductInfo(extractedInfo);

    // Check against all lists
    const results = {
      ceilingList: checkCeilingList(genericName, genericName),
      fivePlusFive: checkFivePlusFivePolicy(genericName, genericName),
      importProhibition: checkImportProhibitionList(genericName, genericName),
      fdcDirective: checkFDCRegulatoryDirective(genericName, [genericName]),
      ntiCheck: hasNarrowTherapeuticIndex(genericName, [genericName]),
      matchedNTIDrugs: getMatchedNTIDrugs(genericName, [genericName]),
    };

    setProductCheckResults(results);

    // Auto-suggest response for question 2 based on product origin
    if (productOrigin === "local") {
      // For locally manufactured, check if on any list but still approve
      const listChecks = [];
      if (results.ceilingList) listChecks.push("NAFDAC Ceiling List");
      if (results.fivePlusFive) listChecks.push("5+5 Policy");
      
      if (listChecks.length > 0) {
        handleInternalResponse(2, "yes");
        handleInternalNote(
          2,
          `Yes, the product is on the ${listChecks.join(" and affected by the ")}. However, product is manufactured in Nigeria. Therefore, it is not applicable.`
        );
      } else {
        handleInternalResponse(2, "yes");
        handleInternalNote(
          2,
          "Yes, the product is manufactured in Nigeria and is not on any prohibition lists."
        );
      }
    } else {
      // For imported products, check all lists and provide detailed feedback
      const listChecks = [];
      if (results.ceilingList) listChecks.push("NAFDAC Ceiling List");
      if (results.importProhibition) listChecks.push("Federal Government Import Prohibition List");
      if (results.fivePlusFive) listChecks.push("5+5 Policy");
      
      if (listChecks.length > 0) {
        if (results.ceilingList || results.importProhibition) {
          handleInternalResponse(2, "yes");
          const listMessages = [];
          if (results.ceilingList) listMessages.push("NAFDAC Ceiling List");
          if (results.importProhibition) listMessages.push("Federal Government Import Prohibition List");
          if (results.fivePlusFive) listMessages.push("affected by the 5+5 Policy");
          
          handleInternalNote(
            2,
            `Yes, the product is found on ${listMessages.join(", ")}.`
          );
        } else if (results.fivePlusFive) {
          handleInternalResponse(2, "partial");
          handleInternalNote(
            2,
            `Yes, the product is affected by the 5+5 Policy.`
          );
        }
      } else {
        handleInternalResponse(2, "yes");
        handleInternalNote(
          2,
          "Product is neither on the NAFDAC Ceiling list, Federal Government Import Prohibition List nor affected by 5+5 Policy."
        );
      }
    }

    // Auto-suggest response for question 3 (FDC Regulatory Directive)
    // Check if product is single API (not FDC) - assume single API if no "+" or "/" in name
    const isSingleAPI = !genericName.includes("+") && !genericName.includes("/") && !genericName.includes("and");
    
    if (isSingleAPI) {
      handleInternalResponse(3, "no");
      if (productOrigin === "local") {
        handleInternalNote(3, "No, product is not an FDC.");
      } else {
        handleInternalNote(
          3,
          "No, the product is not on the Regulatory Directive on Discontinuation of Registration of some FDCs or Regulatory Directives."
        );
      }
    } else if (results.fdcDirective) {
      handleInternalResponse(3, "yes");
      handleInternalNote(
        3,
        "Yes, the product is on the Regulatory Directive on Discontinuation of Registration of some FDCs or Regulatory Directives."
      );
    } else {
      handleInternalResponse(3, "no");
      handleInternalNote(
        3,
        "No, the product is not on the Regulatory Directive on Discontinuation of Registration of some FDCs or Regulatory Directives."
      );
    }

    // Auto-suggest response for question 10 (NTI Check)
    if (results.ntiCheck) {
      handleInternalResponse(10, "yes");
      handleInternalNote(
        10,
        "Yes, the product has a narrow therapeutic index."
      );
    } else {
      handleInternalResponse(10, "no");
      handleInternalNote(
        10,
        "No, the product does not have a narrow therapeutic index."
      );
    }
  };

  const getInternalSummary = () => {
    const completenessItems = INTERNAL_SCREENING_CHECKLIST.filter(
      (item) => !item.excludeFromCompleteness
    );
    const total = completenessItems.length;
    const completenessResponses = new Map();
    completenessItems.forEach((item) => {
      if (internalResponses.has(item.id)) {
        completenessResponses.set(item.id, internalResponses.get(item.id));
      }
    });
    const answered = completenessResponses.size;
    const yesCount = Array.from(completenessResponses.values()).filter(
      (r) => r === "yes"
    ).length;
    const noCount = Array.from(completenessResponses.values()).filter(
      (r) => r === "no"
    ).length;
    const partialCount = Array.from(completenessResponses.values()).filter(
      (r) => r === "partial"
    ).length;

    return { total, answered, yesCount, noCount, partialCount };
  };

  const findModuleFoldersForQuestion = (questionId, moduleRef) => {
    if (!dossier || !dossier.root) return { found: [], required: 0 };

    const findFoldersRecursively = (node, path = "") => {
      let folders = [];
      if (node.type === "folder") {
        folders.push({ ...node, fullPath: path + "/" + node.name });
      }
      if (node.children) {
        node.children.forEach((child) => {
          const childPath = path + (node.name ? "/" + node.name : "");
          folders = folders.concat(findFoldersRecursively(child, childPath));
        });
      }
      return folders;
    };

    const allFolders = findFoldersRecursively(dossier.root);

    // Question-specific search patterns with required counts
    switch (questionId) {
      case 1: {
        // Module 1 / 3.2.P.1 / 3.2.P.3.1 / 1.2.8 (4 required)
        const patterns = [
          ["module 1", "module1"],
          ["3.2.p.1", "32p1"],
          ["3.2.p.3.1", "32p31"],
          ["1.2.8", "128"],
        ];
        const found = patterns.filter((patternGroup) =>
          allFolders.some((folder) =>
            patternGroup.some((pattern) =>
              folder.fullPath.toLowerCase().includes(pattern)
            )
          )
        );
        return { found: found.map((p) => p[0]), required: 4 };
      }

      case 4: {
        // Module 1.2.15 / 3.2.S.4.4 (2 required)
        const patterns = [
          ["1.2.15", "1215"],
          ["3.2.s.4.4", "32s44"],
        ];
        const found = patterns.filter((patternGroup) =>
          allFolders.some((folder) =>
            patternGroup.some((pattern) =>
              folder.fullPath.toLowerCase().includes(pattern)
            )
          )
        );
        return { found: found.map((p) => p[0]), required: 2 };
      }

      case 5: {
        // Module 1.3.1 (1 required)
        const hasFolder = allFolders.some((folder) => {
          const path = folder.fullPath.toLowerCase();
          return path.includes("1.3.1") || path.includes("131");
        });
        return { found: hasFolder ? ["1.3.1"] : [], required: 1 };
      }

      case 7: {
        // Module 2.3 / 1.4.2 (2 required)
        const patterns = [
          ["2.3", "module 2"],
          ["1.4.2", "142"],
        ];
        const found = patterns.filter((patternGroup) =>
          allFolders.some((folder) =>
            patternGroup.some((pattern) =>
              folder.fullPath.toLowerCase().includes(pattern)
            )
          )
        );
        return { found: found.map((p) => p[0]), required: 2 };
      }

      case 6: {
        // Modules 1-5 for consolidated, complete structure check for traditional
        if (dossierType === "consolidated") {
          // For consolidated dossiers, check only the 5 basic modules
          const modulePatterns = [
            { name: "Module 1", patterns: ["module 1", "module1"] },
            { name: "Module 2", patterns: ["module 2", "module2"] },
            { name: "Module 3", patterns: ["module 3", "module3"] },
            { name: "Module 4", patterns: ["module 4", "module4"] },
            { name: "Module 5", patterns: ["module 5", "module5"] },
          ];

          const found = modulePatterns
            .filter((modulePattern) =>
              allFolders.some((folder) =>
                modulePattern.patterns.some((pattern) =>
                  folder.fullPath.toLowerCase().includes(pattern)
                )
              )
            )
            .map((mp) => mp.name);

          return { found: found, required: 5, details: found };
        } else {
          // For traditional dossiers, check complete structure using general checklist
          const generalResults = results || [];
          const foundFiles = generalResults.filter((r) =>
            r.status.includes("✅")
          );
          const missingFiles = generalResults.filter((r) =>
            r.status.includes("❌")
          );

          return {
            found: foundFiles.map((r) => r.description),
            required: generalResults.length,
            details: {
              foundFiles: foundFiles,
              missingFiles: missingFiles,
              totalFiles: generalResults.length,
              foundCount: foundFiles.length,
              missingCount: missingFiles.length,
            },
          };
        }
      }

      case 8: {
        // Module 3.2.P.5.1 (1 required)
        const hasFolder = allFolders.some((folder) => {
          const path = folder.fullPath.toLowerCase();
          return (
            (path.includes("module 3") &&
              (path.includes("3.2.p.5.1") || path.includes("32p51"))) ||
            path.includes("specification")
          );
        });
        return { found: hasFolder ? ["Module 3.2.P.5.1"] : [], required: 1 };
      }

      case 9: {
        // BE/BW data + BTIF documents
        const allFiles = flattenFiles(dossier.root);

        // BE/BW data check - different logic based on dossier type
        let module5Files;
        if (dossierType === "consolidated") {
          // For consolidated: check any files in Module 5
          module5Files = allFiles.filter((file) => {
            const path = file.fullPath.toLowerCase();
            return path.includes("module 5");
          });
        } else {
          // For traditional: check specifically Module 5.3
          module5Files = allFiles.filter((file) => {
            const path = file.fullPath.toLowerCase();
            return path.includes("module 5") && path.includes("5.3");
          });
        }

        // BTIF check - search for BTIF-specific document names
        const btifBafFiles = allFiles.filter((file) => {
          const path = file.fullPath.toLowerCase();
          const name = file.name.toLowerCase();
          const isWordDoc = name.endsWith(".doc") || name.endsWith(".docx");
          const inModule1 = path.includes("module 1");
          const hasBTIF =
            name.includes("btif") ||
            name.includes("bioequivalence technical information") ||
            name.includes("biowaiver technical information") ||
            name.includes("be technical information") ||
            name.includes("bw technical information") ||
            (name.includes("bioequivalence") && name.includes("technical")) ||
            (name.includes("biowaiver") && name.includes("technical"));
          return isWordDoc && inModule1 && hasBTIF;
        });

        return {
          found: ["Module 5", "BTIF"],
          required: 2,
          details: {
            module5Files: module5Files.length,
            btifBafFiles: btifBafFiles.length,
            module5FileNames: module5Files.map((f) => f.name),
            btifBafFileNames: btifBafFiles.map((f) => f.name),
          },
        };
      }

      case 11: {
        // 3.2.P.2 / 3.2.P.5.4 / 3.2.P.8.3 / 3.2.R.1 (4 required)
        const patterns = [
          ["3.2.p.2", "32p2"],
          ["3.2.p.5.4", "32p54"],
          ["3.2.p.8.3", "32p83"],
          ["3.2.r.1", "32r1"],
        ];
        const found = patterns.filter((patternGroup) =>
          allFolders.some((folder) =>
            patternGroup.some((pattern) =>
              folder.fullPath.toLowerCase().includes(pattern)
            )
          )
        );
        return { found: found.map((p) => p[0]), required: 4 };
      }

      case 12: {
        // Module 3.2.R.1 (all subsections)
        const hasR1 = allFolders.some((folder) => {
          const path = folder.fullPath.toLowerCase();
          return path.includes("3.2.r.1") || path.includes("32r1");
        });
        return { found: hasR1 ? ["3.2.R.1"] : [], required: 1 };
      }

      case 13: {
        // Module 3.2.R.1.2 (1 required)
        const hasFolder = allFolders.some((folder) => {
          const path = folder.fullPath.toLowerCase();
          return (
            path.includes("3.2.r.1.2") ||
            path.includes("32r12") ||
            path.includes("master production")
          );
        });
        return { found: hasFolder ? ["3.2.R.1.2"] : [], required: 1 };
      }

      case 14: {
        // Module 3.2.P.2 / 5.3.1.2 (2 required)
        const patterns = [
          ["3.2.p.2", "32p2"],
          ["5.3.1.2", "5312", "module 5"],
        ];
        const found = patterns.filter((patternGroup) =>
          allFolders.some((folder) =>
            patternGroup.some((pattern) =>
              folder.fullPath.toLowerCase().includes(pattern)
            )
          )
        );
        return { found: found.map((p) => p[0]), required: 2 };
      }

      case 15: {
        // Module 3.2.P.8.3 (1 required)
        const hasFolder = allFolders.some((folder) => {
          const path = folder.fullPath.toLowerCase();
          return path.includes("3.2.p.8.3") || path.includes("32p83");
        });
        return { found: hasFolder ? ["3.2.P.8.3"] : [], required: 1 };
      }

      case 17: {
        // Module 3.2.P.3.5 (1 required)
        const hasFolder = allFolders.some((folder) => {
          const path = folder.fullPath.toLowerCase();
          return path.includes("3.2.p.3.5") || path.includes("32p35");
        });
        return { found: hasFolder ? ["3.2.P.3.5"] : [], required: 1 };
      }

      case 18: {
        // Module 3.2.P.7 / 3.2.P.8.3 (2 required)
        const patterns = [
          ["3.2.p.7", "32p7"],
          ["3.2.p.8.3", "32p83"],
        ];
        const found = patterns.filter((patternGroup) =>
          allFolders.some((folder) =>
            patternGroup.some((pattern) =>
              folder.fullPath.toLowerCase().includes(pattern)
            )
          )
        );
        return { found: found.map((p) => p[0]), required: 2 };
      }

      case 19: {
        // Module 3.2.P.3.5 (1 required)
        const hasFolder = allFolders.some((folder) => {
          const path = folder.fullPath.toLowerCase();
          return path.includes("3.2.p.3.5") || path.includes("32p35");
        });
        return { found: hasFolder ? ["3.2.P.3.5"] : [], required: 1 };
      }

      case 20: {
        // Process Validation Report (1 required)
        const hasFolder = allFolders.some((folder) => {
          const path = folder.fullPath.toLowerCase();
          return (
            path.includes("process validation") ||
            path.includes("validation report") ||
            path.includes("pvr") ||
            (path.includes("module 3") && path.includes("validation"))
          );
        });
        return { found: hasFolder ? ["Process Validation Report"] : [], required: 1 };
      }

      default: {
        const modulePatterns = moduleRef.split("/").map((m) => m.trim());
        const foundFolders = allFolders.filter((folder) => {
          const path = folder.fullPath.toLowerCase();
          return modulePatterns.some((pattern) =>
            path.includes(pattern.toLowerCase())
          );
        });
        return {
          found: foundFolders.map((f) => f.name),
          required: modulePatterns.length,
        };
      }
    }
  };

  const findModuleFiles = (moduleRef) => {
    if (!dossier || !dossier.root) return [];

    const allFiles = flattenFiles(dossier.root);
    const normalize = (value) =>
      (value || "")
        .toLowerCase()
        .replace(/\\/g, "/")
        .replace(/[^a-z0-9./\s_-]/g, "")
        .trim();

    const buildPatterns = (ref) => {
      if (!ref) return [];
      const base = normalize(ref);
      const patterns = new Set();
      const tokens = base
        .split(/[/\s]+/)
        .map((t) => t.trim())
        .filter(Boolean);

      patterns.add(base);
      patterns.add(base.replace(/\./g, ""));
      patterns.add(base.replace(/\./g, " "));
      patterns.add(base.replace(/\./g, "-"));
      patterns.add(base.replace(/\./g, "_"));

      tokens.forEach((token) => {
        patterns.add(token);
        patterns.add(token.replace(/\./g, ""));
        patterns.add(token.replace(/\./g, " "));
      });

      const moduleMatch = base.match(/module\s*(\d+)/i);
      if (moduleMatch) {
        patterns.add(`module ${moduleMatch[1]}`);
        patterns.add(`module${moduleMatch[1]}`);
      }

      const sectionMatches = base.match(/\d+(?:\.\d+)+(?:\.[a-z])?/gi) || [];
      sectionMatches.forEach((section) => {
        const clean = section.toLowerCase();
        patterns.add(clean);
        patterns.add(clean.replace(/\./g, ""));
        patterns.add(clean.replace(/\./g, " "));
      });

      return Array.from(patterns).filter(Boolean);
    };

    const matchesReference = (file, patterns) => {
      const filePath = normalize(file.fullPath || file.path || "");
      const fileName = normalize(file.name || "");
      return patterns.some((pattern) => {
        if (!pattern) return false;
        return filePath.includes(pattern) || fileName.includes(pattern);
      });
    };

    // For consolidated dossiers, map references to parent modules
    if (dossierType === "consolidated") {
      const targetModules = new Set();

      // Extract all module numbers from reference patterns
      if (
        moduleRef.includes("1.2") ||
        moduleRef.includes("1.3") ||
        moduleRef.includes("1.4")
      ) {
        targetModules.add(1);
      }
      if (moduleRef.includes("2.3")) {
        targetModules.add(2);
      }
      if (
        moduleRef.includes("3.2.P") ||
        moduleRef.includes("3.2.S") ||
        moduleRef.includes("3.2.R") ||
        moduleRef.match(/3\.2\.[PSR]/)
      ) {
        targetModules.add(3);
      }
      if (moduleRef.match(/\bModule\s+4\b/i) || moduleRef.match(/^4\./)) {
        targetModules.add(4);
      }
      if (moduleRef.includes("5.3")) {
        targetModules.add(5);
      }

      // Also check for explicit "Module X" patterns
      const moduleMatches = moduleRef.match(/Module\s+(\d+)/gi);
      if (moduleMatches) {
        moduleMatches.forEach((match) => {
          const num = parseInt(match.match(/\d+/)[0]);
          targetModules.add(num);
        });
      }

      if (targetModules.size > 0) {
        return allFiles.filter((file) => {
          const filePath = file.fullPath.toLowerCase();
          const fileName = file.name.toLowerCase();
          const isPdf = fileName.endsWith(".pdf");
          const notMacOSX =
            !filePath.includes("__macosx") && !file.name.startsWith("._");

          const inAnyTargetModule = Array.from(targetModules).some(
            (moduleNum) =>
              filePath.includes(`module ${moduleNum}`) ||
              filePath.includes(`module${moduleNum}`)
          );

          return isPdf && notMacOSX && inAnyTargetModule;
        });
      }
    }

    // Special handling for question 1 - Module 1/1.3.1 and Module 3/3.2.P.1 and 3.2.P.3.1 and 1.2.8
    if (moduleRef === "Module 1 / 3.2.P.1 / 3.2.P.3.1") {
      // First, try to find files in expected modules
      let foundFiles = allFiles.filter((file) => {
        const filePath = file.fullPath.toLowerCase();
        const fileName = file.name.toLowerCase();
        const isPdf = fileName.endsWith(".pdf");
        const notMacOSX =
          !filePath.includes("__macosx") && !file.name.startsWith("._");

        // Check file name for SmPC indicators
        const hasSmPCName = fileName.includes("smpc") ||
                           fileName.includes("summary of product characteristics") ||
                           fileName.includes("1.3.1") ||
                           fileName.includes("131") ||
                           fileName.includes("1.31") ||
                           fileName.includes("13.1");

        // Check Module 1 section 1.3.1 patterns
        const inModule1_131 =
          filePath.includes("module 1") &&
          (filePath.includes("1.3.1") ||
            filePath.includes("1.03.1") ||
            filePath.includes("1.3.01") ||
            filePath.includes("131") ||
            filePath.includes("1.31") ||
            filePath.includes("13.1"));

        // Check Module 1 section 1.2.8 patterns (Certificate of GMP)
        const inModule1_128 =
          filePath.includes("module 1") &&
          (filePath.includes("1.2.8") ||
            filePath.includes("1.02.8") ||
            filePath.includes("1.2.08") ||
            filePath.includes("128") ||
            filePath.includes("1.28") ||
            filePath.includes("12.8"));

        // Check Module 3 section 3.2.P.1 patterns
        const inModule3_32P1 =
          filePath.includes("module 3") && 
          (filePath.includes("3.2.p.1") ||
            filePath.includes("32p1") ||
            filePath.includes("3.2p1") ||
            filePath.includes("3.2.p1"));

        // Check Module 3 section 3.2.P.3.1 patterns
        const inModule3_32P31 =
          filePath.includes("module 3") && 
          (filePath.includes("3.2.p.3.1") ||
            filePath.includes("32p31") ||
            filePath.includes("3.2p31") ||
            filePath.includes("3.2.p31"));

        // For consolidated dossiers, also check if in Module 3 generally
        const inModule3General = dossierType === "consolidated" && filePath.includes("module 3");

        return isPdf && notMacOSX && (hasSmPCName || inModule1_131 || inModule1_128 || inModule3_32P1 || inModule3_32P31 || inModule3General);
      });

      // If no files found in expected modules, search entire dossier by file titles
      if (foundFiles.length === 0) {
        foundFiles = allFiles.filter((file) => {
          const fileName = file.name.toLowerCase();
          const isPdf = fileName.endsWith(".pdf");
          const notMacOSX =
            !file.fullPath.includes("__macosx") && !file.name.startsWith("._");

          // Comprehensive title-based search patterns for Question 1 documents
          const titlePatterns = [
            // SmPC patterns
            "smpc", "summary of product characteristics", "product characteristics",
            // Product information patterns
            "product information", "prescribing information", "package insert",
            // Composition patterns
            "composition", "formulation", "ingredients",
            // Manufacturing patterns  
            "manufacturing", "manufacture", "production", "process",
            // Quality patterns
            "quality", "specification", "analytical",
            // Module reference patterns
            "1.3.1", "131", "3.2.p.1", "32p1", "3.2.p.3.1", "32p31", "1.2.8", "128"
          ];

          const hasRelevantTitle = titlePatterns.some(pattern => 
            fileName.includes(pattern)
          );

          return isPdf && notMacOSX && hasRelevantTitle;
        });
      }

      return foundFiles;
    }

    // Special handling for Question 4 - Module 1.2.15 and 3.2.S.4.4
    if (moduleRef === "Module 1.2.15 / 3.2.S.4.4") {
      return allFiles.filter((file) => {
        const filePath = file.fullPath.toLowerCase();
        const fileName = file.name.toLowerCase();
        const isPdf = fileName.endsWith(".pdf");
        const notMacOSX =
          !filePath.includes("__macosx") && !file.name.startsWith("._");

        // Check filename for certification/API indicators
        const hasCertificationName = fileName.includes("certification") ||
                                   fileName.includes("certificate") ||
                                   fileName.includes("api") ||
                                   fileName.includes("drug substance") ||
                                   fileName.includes("1.2.15") ||
                                   fileName.includes("1215") ||
                                   fileName.includes("3.2.s.4.4") ||
                                   fileName.includes("32s44");

        // Check if in Module 1 section 1.2.15 (handle zero-padding)
        const inModule1_1215 =
          filePath.includes("module 1") &&
          (filePath.includes("1.2.15") ||
            filePath.includes("1215") ||
            filePath.includes("1.2.015") ||
            filePath.includes("1.02.15") ||
            filePath.includes("12.15"));

        // Check if in Module 3 section 3.2.S.4.4
        const inModule3_32S44 =
          filePath.includes("module 3") &&
          (filePath.includes("3.2.s.4.4") ||
            filePath.includes("32s44") ||
            filePath.includes("3.2s44") ||
            filePath.includes("3.2.s44"));

        return isPdf && notMacOSX && (hasCertificationName || inModule1_1215 || inModule3_32S44);
      });
    }

    // Special handling for Question 7 - Only PDFs for QOS and QIS review
    if (moduleRef === "Module 2.3 / 1.4.2") {
      return allFiles.filter((file) => {
        const filePath = file.fullPath.toLowerCase();
        const fileName = file.name.toLowerCase();
        const isPdf = fileName.endsWith(".pdf");
        const notMacOSX =
          !filePath.includes("__macosx") && !file.name.startsWith("._");

        // Check filename for QOS/QIS indicators
        const hasQOSName = fileName.includes("qos") ||
                          fileName.includes("quality overall summary") ||
                          fileName.includes("qos-pd");
        const hasQISName = fileName.includes("qis") ||
                          fileName.includes("quality information summary");

        // Check if in Module 2 section 2.3 (QOS)
        const inModule2_23 =
          filePath.includes("module 2") && 
          (filePath.includes("2.3") ||
            filePath.includes("23") ||
            filePath.includes("2.03") ||
            filePath.includes("02.3"));

        // Check if in Module 1 section 1.4.2 (QIS)
        const inModule1_142 =
          filePath.includes("module 1") && 
          (filePath.includes("1.4.2") ||
            filePath.includes("142") ||
            filePath.includes("1.04.2") ||
            filePath.includes("1.4.02") ||
            filePath.includes("01.4.2"));

        return isPdf && notMacOSX && (hasQOSName || hasQISName || inModule2_23 || inModule1_142);
      });
    }

    // Special handling for Question 8 - Module 3.2.P.5.1 FPP specifications
    if (moduleRef === "Module 3.2.P.5.1") {
      return allFiles.filter((file) => {
        const filePath = file.fullPath.toLowerCase();
        const fileName = file.name.toLowerCase();
        const isPdf = fileName.endsWith(".pdf");
        const notMacOSX =
          !filePath.includes("__macosx") && !file.name.startsWith("._");

        // Check filename for specification indicators
        const hasSpecName = fileName.includes("specification") ||
                           fileName.includes("spec") ||
                           fileName.includes("fpp") ||
                           fileName.includes("finished product") ||
                           fileName.includes("3.2.p.5.1") ||
                           fileName.includes("32p51");

        // Strict check for Module 3 section 3.2.P.5.1 only
        const inModule3_32P51 =
          filePath.includes("module 3") &&
          (filePath.includes("3.2.p.5.1") ||
            filePath.includes("32p51") ||
            filePath.includes("3.2p51") ||
            filePath.includes("3.2.p51") ||
            filePath.includes("32.p.5.1"));

        return isPdf && notMacOSX && (hasSpecName || inModule3_32P51);
      });
    }

    // Special handling for Question 9 - BE/BW data and BTIF/BAF documents
    if (moduleRef === "Module 5 / Module 1-2") {
      const beFiles = allFiles.filter((file) => {
        const filePath = file.fullPath.toLowerCase();
        const fileName = file.name.toLowerCase();
        const isPdf = fileName.endsWith(".pdf");
        const notMacOSX =
          !filePath.includes("__macosx") && !file.name.startsWith("._");

        // Check filename for BE/BW indicators
        const hasBEName = fileName.includes("bioequivalence") ||
                         fileName.includes("biowaiver") ||
                         fileName.includes("be") ||
                         fileName.includes("bw") ||
                         fileName.includes("5.3") ||
                         fileName.includes("53");

        // BE/BW data in Module 5.3 only
        const inModule53 =
          filePath.includes("module 5") && 
          (filePath.includes("5.3") ||
            filePath.includes("53") ||
            filePath.includes("5.03") ||
            filePath.includes("05.3"));

        return isPdf && notMacOSX && (hasBEName || inModule53);
      });

      const btifBafFiles = allFiles.filter((file) => {
        const filePath = file.fullPath.toLowerCase();
        const fileName = file.name.toLowerCase();
        const isDocument =
          fileName.endsWith(".doc") || fileName.endsWith(".docx") || fileName.endsWith(".pdf");
        const notMacOSX =
          !filePath.includes("__macosx") && !file.name.startsWith("._");

        // Check filename for BTIF/BAF indicators
        const hasBTIFName = fileName.includes("btif") ||
                           fileName.includes("baf") ||
                           fileName.includes("bioequivalence technical") ||
                           fileName.includes("biowaiver technical") ||
                           fileName.includes("1.4.1") ||
                           fileName.includes("141");

        const inModule141 = filePath.includes("module 1") && 
                           (filePath.includes("1.4.1") ||
                            filePath.includes("141") ||
                            filePath.includes("1.04.1") ||
                            filePath.includes("1.4.01") ||
                            filePath.includes("01.4.1"));

        return isDocument && notMacOSX && (hasBTIFName || inModule141);
      });

      const biowaiverFiles = allFiles.filter((file) => {
        const filePath = file.fullPath.toLowerCase();
        const fileName = file.name.toLowerCase();
        const isPdf = fileName.endsWith(".pdf");
        const notMacOSX =
          !filePath.includes("__macosx") && !file.name.startsWith("._");

        // Check filename for biowaiver indicators
        const hasBiowaiverName = fileName.includes("biowaiver") ||
                                fileName.includes("1.2.17") ||
                                fileName.includes("1.2.18") ||
                                fileName.includes("1217") ||
                                fileName.includes("1218");

        // Biowaiver modules 1.2.17 and 1.2.18 (handle zero-padding)
        const inModule1217 =
          filePath.includes("module 1") &&
          (filePath.includes("1.2.17") ||
            filePath.includes("1.02.17") ||
            filePath.includes("1.2.017") ||
            filePath.includes("1217") ||
            filePath.includes("12.17"));
        const inModule1218 =
          filePath.includes("module 1") &&
          (filePath.includes("1.2.18") ||
            filePath.includes("1.02.18") ||
            filePath.includes("1.2.018") ||
            filePath.includes("1218") ||
            filePath.includes("12.18"));

        return isPdf && notMacOSX && (hasBiowaiverName || inModule1217 || inModule1218);
      });

      return [...beFiles, ...btifBafFiles, ...biowaiverFiles];
    }

    // Special handling for Question 2 - only SmPC files from Module 1.3.1
    if (moduleRef === "Module 1.3.1") {
      return allFiles.filter((file) => {
        const filePath = file.fullPath.toLowerCase();
        const fileName = file.name.toLowerCase();
        const isPdf = fileName.endsWith(".pdf");
        const notMacOSX =
          !filePath.includes("__macosx") && !file.name.startsWith("._");

        // Check filename for SmPC indicators
        const hasSmPCName = fileName.includes("smpc") ||
                           fileName.includes("summary of product characteristics") ||
                           fileName.includes("1.3.1") ||
                           fileName.includes("131") ||
                           fileName.includes("1.31") ||
                           fileName.includes("13.1");

        const inModule1_131 =
          filePath.includes("module 1") &&
          (filePath.includes("1.3.1") ||
            filePath.includes("1.03.1") ||
            filePath.includes("1.3.01") ||
            filePath.includes("131") ||
            filePath.includes("1.31") ||
            filePath.includes("13.1"));
        return isPdf && notMacOSX && (hasSmPCName || inModule1_131);
      });
    }

    // Special handling for Question 12 & 13 - all files under 3.2.R.1
    if (
      moduleRef === "Module 3.2.R.1.1 / 3.2.R.1.2" ||
      moduleRef === "Module 3.2.R.1.2"
    ) {
      return allFiles.filter((file) => {
        const filePath = file.fullPath.toLowerCase();
        const fileName = file.name.toLowerCase();
        const isPdf = fileName.endsWith(".pdf");
        const notMacOSX =
          !filePath.includes("__macosx") && !file.name.startsWith("._");

        // Check filename for BMR indicators
        const hasBMRName = fileName.includes("bmr") ||
                          fileName.includes("batch manufacturing record") ||
                          fileName.includes("batch record") ||
                          fileName.includes("executed") ||
                          fileName.includes("blank") ||
                          fileName.includes("3.2.r.1") ||
                          fileName.includes("32r1");

        const inModule3_R1 =
          filePath.includes("module 3") &&
          (filePath.includes("3.2.r.1") ||
            filePath.includes("32r1") ||
            filePath.includes("3.2r1") ||
            filePath.includes("3.2.r1") ||
            filePath.includes("32.r.1"));
        return isPdf && notMacOSX && (hasBMRName || inModule3_R1);
      });
    }

    // Special handling for Question 14 - 3.2.P.2 and Module 5.3 variants
    if (moduleRef === "Module 3.2.P.2 / 5.3.1.2") {
      return allFiles.filter((file) => {
        const filePath = file.fullPath.toLowerCase();
        const fileName = file.name.toLowerCase();
        const isPdf = fileName.endsWith(".pdf");
        const notMacOSX =
          !filePath.includes("__macosx") && !file.name.startsWith("._");

        // Check filename for dissolution indicators
        const hasDissolutionName = fileName.includes("dissolution") ||
                                  fileName.includes("comparative") ||
                                  fileName.includes("3.2.p.2") ||
                                  fileName.includes("32p2") ||
                                  fileName.includes("5.3.1.2") ||
                                  fileName.includes("5312");

        const inModule3_P2 =
          filePath.includes("module 3") && 
          (filePath.includes("3.2.p.2") ||
            filePath.includes("32p2") ||
            filePath.includes("3.2p2") ||
            filePath.includes("3.2.p2"));
        const inModule5_53 =
          filePath.includes("module 5") &&
          (filePath.includes("5.3.1.2") ||
            filePath.includes("5.3.1") ||
            filePath.includes("5.3") ||
            filePath.includes("5312") ||
            filePath.includes("531") ||
            filePath.includes("53"));

        return isPdf && notMacOSX && (hasDissolutionName || inModule3_P2 || inModule5_53);
      });
    }

    // Special handling for Question 16 - Module 3.2.P.2 / 3.2.P.3 for sterilization method
    if (moduleRef === "Module 3.2.P.2 / 3.2.P.3") {
      return allFiles.filter((file) => {
        const filePath = file.fullPath.toLowerCase();
        const fileName = file.name.toLowerCase();
        const isPdf = fileName.endsWith(".pdf");
        const notMacOSX =
          !filePath.includes("__macosx") && !file.name.startsWith("._");

        // Check filename for sterilization indicators
        const hasSterilizationName = fileName.includes("sterilization") ||
                                    fileName.includes("sterile") ||
                                    fileName.includes("3.2.p.2") ||
                                    fileName.includes("32p2") ||
                                    fileName.includes("3.2.p.3") ||
                                    fileName.includes("32p3");

        const inModule3_P2 =
          filePath.includes("module 3") &&
          (filePath.includes("3.2.p.2") ||
            filePath.includes("32p2") ||
            filePath.includes("3.2p2") ||
            filePath.includes("3.2.p2"));
        const inModule3_P3 =
          filePath.includes("module 3") &&
          (filePath.includes("3.2.p.3") ||
            filePath.includes("32p3") ||
            filePath.includes("3.2p3") ||
            filePath.includes("3.2.p3"));
        return isPdf && notMacOSX && (hasSterilizationName || inModule3_P2 || inModule3_P3);
      });
    }

    // Special handling for Question 15 - 3.2.P.8.3 stability data with fallback to 3.2.P.8
    if (moduleRef === "Module 3.2.P.8.3") {
      // First try 3.2.P.8.3
      let files = allFiles.filter((file) => {
        const filePath = file.fullPath.toLowerCase();
        const fileName = file.name.toLowerCase();
        const isPdf = fileName.endsWith(".pdf");
        const notMacOSX =
          !filePath.includes("__macosx") && !file.name.startsWith("._");

        // Check filename for stability indicators
        const hasStabilityName = fileName.includes("stability") ||
                                fileName.includes("3.2.p.8.3") ||
                                fileName.includes("32p83") ||
                                fileName.includes("3.2.p.8") ||
                                fileName.includes("32p8");

        const inModule3_P83 =
          filePath.includes("module 3") &&
          (filePath.includes("3.2.p.8.3") ||
            filePath.includes("32p83") ||
            filePath.includes("3.2p83") ||
            filePath.includes("3.2.p83"));
        return isPdf && notMacOSX && (hasStabilityName || inModule3_P83);
      });
      
      // If no files found in 3.2.P.8.3, fallback to 3.2.P.8
      if (files.length === 0) {
        files = allFiles.filter((file) => {
          const filePath = file.fullPath.toLowerCase();
          const fileName = file.name.toLowerCase();
          const isPdf = fileName.endsWith(".pdf");
          const notMacOSX =
            !filePath.includes("__macosx") && !file.name.startsWith("._");
          const inModule3_P8 =
            filePath.includes("module 3") &&
            (filePath.includes("3.2.p.8") || filePath.includes("32p8") ||
             filePath.includes("3.2p8") || filePath.includes("3.2.p8")) &&
            !filePath.includes("3.2.p.8.1") && !filePath.includes("3.2.p.8.2");
          return isPdf && notMacOSX && inModule3_P8;
        });
      }
      
      return files;
    }

    // Special handling for Question 17 & 19 - Module 3.2.P.3.5 process validation
    if (moduleRef === "Module 3.2.P.3.5") {
      return allFiles.filter((file) => {
        const filePath = file.fullPath.toLowerCase();
        const fileName = file.name.toLowerCase();
        const isPdf = fileName.endsWith(".pdf");
        const notMacOSX =
          !filePath.includes("__macosx") && !file.name.startsWith("._");

        // Check filename for process validation indicators
        const hasValidationName = fileName.includes("validation") ||
                                 fileName.includes("process validation") ||
                                 fileName.includes("pvr") ||
                                 fileName.includes("3.2.p.3.5") ||
                                 fileName.includes("32p35");

        const inModule3_P35 =
          filePath.includes("module 3") &&
          (filePath.includes("3.2.p.3.5") ||
            filePath.includes("32p35") ||
            filePath.includes("3.2p35") ||
            filePath.includes("3.2.p35"));
        return isPdf && notMacOSX && (hasValidationName || inModule3_P35);
      });
    }

    // Special handling for Question 18 - Module 3.2.P.7 / 3.2.P.8.3 stability data for sterile products
    if (moduleRef === "Module 3.2.P.7 / 3.2.P.8.3") {
      return allFiles.filter((file) => {
        const filePath = file.fullPath.toLowerCase();
        const fileName = file.name.toLowerCase();
        const isPdf = fileName.endsWith(".pdf");
        const notMacOSX =
          !filePath.includes("__macosx") && !file.name.startsWith("._");

        // Check filename for stability/sterile indicators
        const hasStabilityName = fileName.includes("stability") ||
                                fileName.includes("sterile") ||
                                fileName.includes("inverted") ||
                                fileName.includes("3.2.p.7") ||
                                fileName.includes("32p7") ||
                                fileName.includes("3.2.p.8.3") ||
                                fileName.includes("32p83");

        const inModule3_P7 =
          filePath.includes("module 3") &&
          (filePath.includes("3.2.p.7") ||
            filePath.includes("32p7") ||
            filePath.includes("3.2p7") ||
            filePath.includes("3.2.p7"));
        const inModule3_P83 =
          filePath.includes("module 3") &&
          (filePath.includes("3.2.p.8.3") ||
            filePath.includes("32p83") ||
            filePath.includes("3.2p83") ||
            filePath.includes("3.2.p83"));
        return isPdf && notMacOSX && (hasStabilityName || inModule3_P7 || inModule3_P83);
      });
    }

    // Special handling for Question 20 - Process Validation Report
    if (moduleRef === "Module 3.2.P.3.5") {
      return allFiles.filter((file) => {
        const filePath = file.fullPath.toLowerCase();
        const fileName = file.name.toLowerCase();
        const isPdf = fileName.endsWith(".pdf");
        const notMacOSX =
          !filePath.includes("__macosx") && !file.name.startsWith("._");
        const inModule3_P35 =
          filePath.includes("module 3") &&
          (filePath.includes("3.2.p.3.5") || filePath.includes("32p35"));
        return isPdf && notMacOSX && inModule3_P35;
      });
    }

    // For structured dossiers, use the existing detailed search logic
    const modulePatterns = moduleRef
      .toLowerCase()
      .split("/")
      .map((m) => m.trim());

    const matches = allFiles.filter((file) => {
      const filePath = file.fullPath.toLowerCase();
      const fileName = file.name.toLowerCase();
      const isPdf = fileName.endsWith(".pdf");
      const notMacOSX =
        !filePath.includes("__macosx") && !file.name.startsWith("._");

      if (!isPdf || !notMacOSX) return false;

      return modulePatterns.some((pattern) => {
        if (
          pattern === "general" ||
          pattern === "pre-screening" ||
          pattern === "final decision"
        ) {
          return true;
        }

        if (pattern.startsWith("module")) {
          const moduleNum = pattern.replace(/[^0-9.]/g, "");
          return (
            filePath.includes(`module ${moduleNum}`) ||
            filePath.includes(`module${moduleNum}`)
          );
        }

        if (pattern.includes(".")) {
          const dotPattern = pattern.replace(/\./g, ".");
          const noDotPattern = pattern.replace(/\./g, "");
          const slashPattern = pattern.replace(/\./g, "/");
          const dashPattern = pattern.replace(/\./g, "-");

          // Handle zero-padded versions (e.g., 1.2.01 for 1.2.1)
          const zeroPaddedPattern = pattern.replace(
            /(\d+)(?=\.|$)/g,
            (match) => {
              return match.length === 1 ? "0" + match : match;
            }
          );

          return (
            filePath.includes(dotPattern) ||
            filePath.includes(noDotPattern) ||
            filePath.includes(slashPattern) ||
            filePath.includes(dashPattern) ||
            filePath.includes(zeroPaddedPattern) ||
            filePath.includes(zeroPaddedPattern.replace(/\./g, ""))
          );
        }

        return filePath.includes(pattern) || fileName.includes(pattern);
      });
    });

    if (matches.length > 0) return matches;

    // Fallback: broader matching across full folder using patterns and filenames
    const patterns = buildPatterns(moduleRef);
    return allFiles.filter((file) => {
      const filePath = (file.fullPath || "").toLowerCase();
      const fileName = (file.name || "").toLowerCase();
      const isDocument =
        fileName.endsWith(".pdf") ||
        fileName.endsWith(".doc") ||
        fileName.endsWith(".docx");
      const notMacOSX =
        !filePath.includes("__macosx") && !fileName.startsWith("._");
      if (!isDocument || !notMacOSX) return false;
      return matchesReference(file, patterns);
    });
  };

  const getModuleStatus = (moduleRef, questionId) => {
    const result = findModuleFoldersForQuestion(questionId, moduleRef);
    const foundCount = result.found.length;
    const requiredCount = result.required;

    let status = "Missing";
    if (foundCount === requiredCount) {
      status = "Complete";
    } else if (foundCount > 0) {
      status = "Incomplete";
    }

    return {
      status: status,
      found: foundCount > 0,
      count: foundCount,
      required: requiredCount,
      folders: result.found,
    };
  };

  const navigateToModule = (moduleRef) => {
    window.location.href = "/review";
  };

  const openInlinePreview = (questionId, moduleRefs, title) => {
    // Close any existing preview first
    setActivePreview(null);

    // Small delay to ensure cleanup
    setTimeout(() => {
      const files = findModuleFiles(moduleRefs);
      
      // Check if files exist before opening preview
      if (files.length === 0) {
        prompt.alert(`No supporting documents found for ${moduleRefs}. Please check if the required files exist in the dossier.`);
        return;
      }
      
      const documents = [
        {
          moduleRef: moduleRefs,
          filePath: files.length > 0 ? files[0].path : "",
          files: files,
        },
      ];

      setActivePreview({
        questionId,
        title,
        documents,
      });
    }, 100);
  };

  const previewModuleFiles = (moduleRef) => {
    const files = findModuleFiles(moduleRef);
    if (files.length > 0) {
      const documents = [
        {
          moduleRef: moduleRef,
          filePath: files[0].path,
          files: files,
        },
      ];

      setPreviewData({
        title: `Preview: ${moduleRef}`,
        documents,
      });
      setShowInlinePreview(true);
    } else {
      prompt.alert(`No files found for ${moduleRef}`);
    }
  };

  const isExternalScreening = !dossier;

  // Show screening mode selector when no dossier is loaded
  if (!dossier) {
    return (
      <div className="container">
        <div className="card">
          <h2>Dossier Screening</h2>
          <div style={{
            background: '#f8f9fa',
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Choose Screening Mode</h3>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => window.location.href = '/upload'}
                style={{
                  padding: '1rem 2rem',
                  background: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '500'
                }}
              >
                📁 Upload Dossier & Screen
              </button>
              <button
                onClick={() => {
                  // Set a flag to continue with external screening
                  setDossier({ name: 'External Screening Mode', root: null, isExternal: true });
                }}
                style={{
                  padding: '1rem 2rem',
                  background: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '500'
                }}
              >
                📋 External Dossier Screening
              </button>
            </div>
            <p style={{ marginTop: '1rem', color: '#666', fontSize: '14px' }}>
              External screening allows manual assessment without file upload
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 80px)' }}>
      {/* Side Navigation */}
      <div className="screening-side-nav" style={{
        width: '220px',
        background: 'linear-gradient(180deg, #34495e 0%, #2c3e50 100%)',
        color: 'white',
        position: 'fixed',
        top: '60px',
        left: '0',
        height: 'calc(100vh - 60px - 0.5rem)',
        overflowY: 'auto',
        zIndex: 100,
        padding: '0',
        borderRight: '1px solid #1a252f',
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          padding: '1.5rem 1rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          marginBottom: '0.5rem',
          background: 'rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            margin: '0',
            fontSize: '16px',
            fontWeight: '700',
            textAlign: 'center',
            color: '#ecf0f1',
            letterSpacing: '0.5px'
          }}>
            📋 Questions
          </h3>
        </div>
        
        {INTERNAL_SCREENING_CHECKLIST.map((item) => {
          const response = internalResponses.get(item.id);
          const hasNote = internalNotes.get(item.id)?.trim();
          
          return (
            <div
              key={item.id}
              className="question-item"
              onClick={() => {
                const element = document.getElementById(`question-${item.id}`);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              style={{
                padding: '0.75rem 1rem',
                cursor: 'pointer',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                transition: 'all 0.3s ease',
                background: response ? 
                  (response === 'yes' ? 'rgba(40, 167, 69, 0.15)' : 
                   response === 'no' ? 'rgba(220, 53, 69, 0.15)' : 
                   'rgba(255, 193, 7, 0.15)') : 'transparent',
                borderLeft: response ? 
                  `3px solid ${response === 'yes' ? '#28a745' : 
                   response === 'no' ? '#dc3545' : '#ffc107'}` : '3px solid transparent'
              }}
              onMouseOver={(e) => {
                e.target.style.background = response ? 
                  (response === 'yes' ? 'rgba(40, 167, 69, 0.25)' : 
                   response === 'no' ? 'rgba(220, 53, 69, 0.25)' : 
                   'rgba(255, 193, 7, 0.25)') : 'rgba(255, 255, 255, 0.08)';
                e.target.style.transform = 'translateX(2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = response ? 
                  (response === 'yes' ? 'rgba(40, 167, 69, 0.15)' : 
                   response === 'no' ? 'rgba(220, 53, 69, 0.15)' : 
                   'rgba(255, 193, 7, 0.15)') : 'transparent';
                e.target.style.transform = 'translateX(0)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: response === 'yes' ? '#28a745' : 
                             response === 'no' ? '#dc3545' : 
                             response === 'partial' ? '#ffc107' : '#6c757d',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '600',
                  flexShrink: 0
                }}>
                  {item.id}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="question-text" style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#ecf0f1',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    Q{item.id}
                  </div>
                  {hasNote && (
                    <div style={{
                      fontSize: '10px',
                      color: '#bdc3c7',
                      marginTop: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
                      📝 Note
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyComment(internalNotes.get(item.id));
                        }}
                        style={{
                          background: 'rgba(255,255,255,0.1)',
                          border: 'none',
                          borderRadius: '2px',
                          cursor: 'pointer',
                          fontSize: '8px',
                          padding: '1px 3px',
                          color: '#bdc3c7'
                        }}
                        title="Copy comment"
                      >
                        📋
                      </button>
                    </div>
                  )}
                </div>
                {response && (
                  <div style={{
                    fontSize: '12px',
                    color: response === 'yes' ? '#28a745' : 
                           response === 'no' ? '#dc3545' : '#ffc107'
                  }}>
                    {response === 'yes' ? '✓' : response === 'no' ? '✗' : '⚠'}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        
        {/* Progress Summary */}
        <div className="progress-section" style={{
          padding: '1.5rem 1rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          marginTop: 'auto',
          background: 'rgba(0,0,0,0.1)'
        }}>
          <div style={{
            fontSize: '12px',
            color: '#bdc3c7',
            marginBottom: '0.75rem',
            textAlign: 'center',
            fontWeight: '600',
            letterSpacing: '0.5px'
          }}>
            📈 PROGRESS
          </div>
          <div style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#ecf0f1',
            textAlign: 'center',
            marginBottom: '0.5rem'
          }}>
            {(() => {
              const summary = getInternalSummary();
              return `${summary.answered}/${summary.total}`;
            })()}
          </div>
          <div style={{
            width: '100%',
            height: '6px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '3px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${(() => {
                const summary = getInternalSummary();
                return (summary.answered / summary.total) * 100;
              })()}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #3498db, #2ecc71)',
              borderRadius: '3px',
              transition: 'width 0.3s ease'
            }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="screening-main-content" style={{
        marginLeft: '220px',
        flex: 1,
        padding: '1rem',
        maxWidth: 'calc(100vw - 220px)'
      }}>
      <div className="card" style={{ 
        padding: '2rem', 
        background: 'white', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)', 
        border: '1px solid #ddd'
      }}>
        
            <div style={{ 
              borderBottom: '3px solid #2c3e50',
              paddingBottom: '2rem',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              <h1 style={{ 
                margin: '0 0 1rem 0', 
                fontSize: '14px', 
                fontWeight: '700',
                color: '#2c3e50',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                NAFDAC Dossier Screening System
              </h1>
              <div style={{ 
                fontSize: '14px', 
                color: '#666',
                lineHeight: '1.6'
              }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Dossier Name:</strong> {dossier.name}
                  {dossier.isExternal && (
                    <span style={{
                      marginLeft: '0.5rem',
                      padding: '0.2rem 0.5rem',
                      background: '#28a745',
                      color: 'white',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      EXTERNAL MODE
                    </span>
                  )}
                </div>
                <div>
                  <strong>Screening Started:</strong> {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
                </div>
                {dossier.isExternal && (
                  <div style={{ 
                    marginTop: '1rem',
                    padding: '0.75rem',
                    background: '#fff3cd',
                    border: '1px solid #ffeaa7',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: '#856404'
                  }}>
                    ⚠️ External screening mode: Document-based checks are disabled. Manual assessment required.
                  </div>
                )}
              </div>
            </div>

        {isContentScreening && (
          <div
            style={{ marginTop: "2rem", textAlign: "center", padding: "2rem" }}
          >
            <div style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
              🧠 Running Content-Based Screening...
            </div>
            <div
              style={{
                width: "100%",
                height: "4px",
                background: "#e9ecef",
                borderRadius: "2px",
                overflow: "hidden",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, #e74c3c, #c0392b)",
                  animation: "loading 1.5s ease-in-out infinite",
                }}
              ></div>
            </div>
            <div style={{ color: "#666", fontSize: "0.9rem" }}>
              Analyzing PDF content and detecting CTD sections...
              <br />
              <span style={{ fontSize: "0.8rem", fontStyle: "italic" }}>
                This may take a few moments for large dossiers
              </span>
            </div>
          </div>
        )}

        {false && false && (
          <div>
            <p>
              Run the checklist to verify required documents are present in your
              dossier.
            </p>

            {isRunning && (
              <div
                style={{
                  marginTop: "2rem",
                  textAlign: "center",
                  padding: "2rem",
                }}
              >
                <div style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
                  🔍 Running Checklist...
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "4px",
                    background: "#e9ecef",
                    borderRadius: "2px",
                    overflow: "hidden",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(90deg, #3498db, #2980b9)",
                      animation: "loading 1.5s ease-in-out infinite",
                    }}
                  ></div>
                </div>
                <div style={{ color: "#666", fontSize: "0.9rem" }}>
                  Analyzing {DOSSIER_CHECKLIST.length} required documents...
                </div>
              </div>
            )}

            {results.length > 0 && !isRunning && (
              <div style={{ marginTop: "2rem" }}>
                <h3>Screening Results</h3>
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Required Document</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Matched File</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((item, index) => (
                      <tr key={index}>
                        <td
                          style={{
                            fontSize: "0.8rem",
                            fontFamily: "monospace",
                          }}
                        >
                          {item.path}
                        </td>
                        <td>{item.description}</td>
                        <td
                          className={
                            item.status.includes("✅")
                              ? "status-present"
                              : "status-missing"
                          }
                        >
                          {item.status}
                        </td>
                        <td
                          style={{
                            fontSize: "0.8rem",
                            fontFamily: "monospace",
                          }}
                        >
                          {item.matchedFile || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div
                  style={{
                    marginTop: "1rem",
                    padding: "1rem",
                    background: "#f8f9fa",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                    }}
                  >
                    <div>
                      <strong>Document Status:</strong>
                      <div style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
                        <div>
                          ✅ Found:{" "}
                          {
                            results.filter((r) => r.status.includes("✅"))
                              .length
                          }
                        </div>
                        <div>
                          ❌ Missing:{" "}
                          {
                            results.filter((r) => r.status.includes("❌"))
                              .length
                          }
                        </div>
                        <div>Total: {results.length}</div>
                      </div>
                    </div>
                    <div>
                      <strong>Compliance Analysis:</strong>
                      <div style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
                        <div>
                          Compliance Rate:{" "}
                          {(
                            (results.filter((r) => r.status.includes("✅"))
                              .length /
                              results.length) *
                            100
                          ).toFixed(1)}
                          %
                        </div>
                        <div>
                          High Confidence:{" "}
                          {(
                            (results.filter((r) => r.confidence >= 80).length /
                              results.length) *
                            100
                          ).toFixed(1)}
                          %
                        </div>
                        <div>
                          Avg Match Score:{" "}
                          {results.length > 0
                            ? (
                                results.reduce(
                                  (sum, r) => sum + r.confidence,
                                  0
                                ) / results.length
                              ).toFixed(1)
                            : 0}
                          %
                        </div>
                      </div>
                    </div>
                  </div>
                  {results.filter((r) => r.status.includes("❌")).length >
                    0 && (
                    <div style={{ marginTop: "1rem" }}>
                      <strong>Missing Files:</strong>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          marginTop: "0.5rem",
                          maxHeight: "150px",
                          overflowY: "auto",
                          padding: "0.5rem",
                          background: "#fff",
                          border: "1px solid #dee2e6",
                          borderRadius: "4px",
                        }}
                      >
                        {results
                          .filter((r) => r.status.includes("❌"))
                          .map((item, index) => (
                            <div
                              key={index}
                              style={{
                                marginBottom: "0.25rem",
                                padding: "0.25rem",
                                background: "#fff5f5",
                                borderLeft: "3px solid #dc3545",
                                paddingLeft: "0.5rem",
                              }}
                            >
                              <div
                                style={{ fontWeight: "500", color: "#721c24" }}
                              >
                                {item.description}
                              </div>
                              <div
                                style={{
                                  color: "#666",
                                  fontFamily: "monospace",
                                  fontSize: "0.75rem",
                                }}
                              >
                                {item.path}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                  <div style={{ marginTop: "1rem", textAlign: "center" }}>
                    <span
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "20px",
                        background:
                          results.filter((r) => r.status.includes("✅"))
                            .length === results.length
                            ? "#28a745"
                            : results.filter((r) => r.status.includes("✅"))
                                .length >=
                              results.length * 0.8
                            ? "#ffc107"
                            : "#dc3545",
                        color: "white",
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                      }}
                    >
                      {results.filter((r) => r.status.includes("✅")).length ===
                      results.length
                        ? "COMPLETE"
                        : results.filter((r) => r.status.includes("✅"))
                            .length >=
                          results.length * 0.8
                        ? "MOSTLY COMPLETE"
                        : "INCOMPLETE"}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {true && true && (
          <div>
            <p>
              Screening checklist for NAFDAC reviewers to assess dossier
              compliance and completeness.
            </p>

            {/* Dossier Type Indicator */}
            {dossierType && (
              <div
                style={{
                  background:
                    dossierType === "consolidated"
                      ? "#d1ecf1"
                      : dossierType === "structured"
                      ? "#d4edda"
                      : "#fff3cd",
                  border: `1px solid ${
                    dossierType === "consolidated"
                      ? "#bee5eb"
                      : dossierType === "structured"
                      ? "#c3e6cb"
                      : "#ffeaa7"
                  }`,
                  padding: "0.5rem 0.75rem",
                  borderRadius: "6px",
                  marginBottom: "1rem",
                  fontSize: "0.85rem",
                }}
              >
                <strong>📊 Detected Dossier Type:</strong>
                <span
                  style={{
                    marginLeft: "0.5rem",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "12px",
                    background:
                      dossierType === "consolidated"
                        ? "#0c5460"
                        : dossierType === "structured"
                        ? "#155724"
                        : "#856404",
                    color: "white",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                  }}
                >
                  {dossierType.toUpperCase()}
                </span>
                <div
                  style={{
                    fontSize: "0.8rem",
                    marginTop: "0.25rem",
                    color: "#666",
                  }}
                >
                  {dossierType === "consolidated" &&
                    "Single PDF files per module - streamlined review process"}
                  {dossierType === "structured" &&
                    "Traditional CTD folder structure - detailed file validation"}
                  {dossierType === "mixed" &&
                    "Mixed structure detected - adaptive screening approach"}
                </div>
              </div>
            )}

            {/* Product Classification - Required First */}
            <div
              style={{
                background: "#f8f9fa",
                padding: "1rem",
                border: "1px solid #ddd",
                marginBottom: "2rem",
              }}
            >
              <h2 style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#2c3e50',
                marginBottom: '1rem',
                borderBottom: '2px solid #2c3e50',
                paddingBottom: '0.5rem'
              }}>
                Product Classification (Required First)
              </h2>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr", gap: "1rem", alignItems: "end" }}>
                {/* Product Origin */}
                <div>
                  <label style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    color: "#2c3e50"
                  }}>
                    Origin:
                  </label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <button
                      onClick={() => {
                        setProductOrigin("local");
                        handleInternalResponse(2, "no");
                        handleInternalNote(2, "No, product is locally manufactured.");
                      }}
                      style={{
                        padding: "0.5rem",
                        fontSize: "12px",
                        fontWeight: "500",
                        background: productOrigin === "local" ? "#28a745" : "#f8f9fa",
                        color: productOrigin === "local" ? "white" : "#666",
                        border: "1px solid #ddd",
                        cursor: "pointer",
                        borderRadius: "4px"
                      }}
                    >
                      🏭 Local
                    </button>
                    <button
                      onClick={() => setProductOrigin("imported")}
                      style={{
                        padding: "0.5rem",
                        fontSize: "12px",
                        fontWeight: "500",
                        background: productOrigin === "imported" ? "#28a745" : "#f8f9fa",
                        color: productOrigin === "imported" ? "white" : "#666",
                        border: "1px solid #ddd",
                        cursor: "pointer",
                        borderRadius: "4px"
                      }}
                    >
                      🌍 Imported
                    </button>
                  </div>
                </div>

                {/* Product Type */}
                <div>
                  <label style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    color: "#2c3e50"
                  }}>
                    Dosage Form:
                  </label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <button
                      onClick={() => {
                        setProductType("solid-oral");
                        [16, 17, 18, 19].forEach(questionId => {
                          handleInternalResponse(questionId, "no");
                          handleInternalNote(questionId, "Not applicable, product is solid oral.");
                        });
                      }}
                      style={{
                        padding: "0.5rem",
                        fontSize: "12px",
                        fontWeight: "500",
                        background: productType === "solid-oral" ? "#28a745" : "#f8f9fa",
                        color: productType === "solid-oral" ? "white" : "#666",
                        border: "1px solid #ddd",
                        cursor: "pointer",
                        borderRadius: "4px"
                      }}
                    >
                      💊 Solid Oral
                    </button>
                    <button
                      onClick={() => setProductType("non-solid-oral")}
                      style={{
                        padding: "0.5rem",
                        fontSize: "12px",
                        fontWeight: "500",
                        background: productType === "non-solid-oral" ? "#28a745" : "#f8f9fa",
                        color: productType === "non-solid-oral" ? "white" : "#666",
                        border: "1px solid #ddd",
                        cursor: "pointer",
                        borderRadius: "4px"
                      }}
                    >
                      💉 Non-Solid
                    </button>
                  </div>
                </div>

                {/* Generic Name and Button */}
                <div>
                  <label style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    color: "#2c3e50"
                  }}>
                    Generic Name:
                  </label>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <input
                      type="text"
                      placeholder="e.g., Paracetamol"
                      value={productInputs.productName}
                      onChange={(e) =>
                        setProductInputs((prev) => ({
                          ...prev,
                          productName: e.target.value,
                        }))
                      }
                      style={{
                        flex: 1,
                        padding: "0.5rem",
                        border: "1px solid #ddd",
                        fontSize: "12px",
                        borderRadius: "4px"
                      }}
                    />
                    <button
                      onClick={checkProductCompliance}
                      disabled={!productInputs.productName || !productOrigin || !productType}
                      style={{
                        padding: "0.5rem 1rem",
                        fontSize: "12px",
                        fontWeight: "500",
                        background: (!productInputs.productName || !productOrigin || !productType)
                          ? "#f8f9fa"
                          : "#28a745",
                        color: (!productInputs.productName || !productOrigin || !productType) ? "#666" : "white",
                        border: (!productInputs.productName || !productOrigin || !productType) ? '1px solid #ddd' : 'none',
                        cursor: (!productInputs.productName || !productOrigin || !productType)
                          ? "not-allowed"
                          : "pointer",
                        borderRadius: "4px",
                        whiteSpace: "nowrap"
                      }}
                    >
                      Check Compliance
                    </button>
                  </div>
                </div>
              </div>
              
              {(!productOrigin || !productType) && (
                <div style={{
                  marginTop: "1rem",
                  padding: "0.5rem",
                  background: "#fff3cd",
                  border: "1px solid #ffeaa7",
                  borderRadius: "4px",
                  fontSize: "12px",
                  color: "#856404",
                }}>
                  ⚠️ Please select both product origin and dosage form above before proceeding.
                </div>
              )}
              {productCheckResults && (
                <div
                  style={{
                    marginTop: "1rem",
                    padding: "1rem",
                    background: "white",
                    borderRadius: "6px",
                    border: "1px solid #dee2e6",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      marginBottom: "0.75rem",
                      color: "#2c3e50",
                      borderBottom: "1px solid #dee2e6",
                      paddingBottom: "0.5rem"
                    }}
                  >
                    📋 Compliance Check Results
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem" }}>
                    <div style={{
                      padding: "0.5rem",
                      borderRadius: "4px",
                      background: productCheckResults.ceilingList ? "#fff5f5" : "#f8fff8",
                      border: `1px solid ${productCheckResults.ceilingList ? "#fecaca" : "#bbf7d0"}`
                    }}>
                      <div style={{ fontSize: "11px", fontWeight: "600", color: "#666", marginBottom: "0.25rem" }}>NAFDAC Ceiling List</div>
                      <div style={{ fontSize: "12px", color: productCheckResults.ceilingList ? "#dc2626" : "#16a34a" }}>
                        {productCheckResults.ceilingList ? "❌ Found" : "✅ Clear"}
                      </div>
                    </div>
                    
                    <div style={{
                      padding: "0.5rem",
                      borderRadius: "4px",
                      background: productCheckResults.importProhibition ? "#fff5f5" : "#f8fff8",
                      border: `1px solid ${productCheckResults.importProhibition ? "#fecaca" : "#bbf7d0"}`
                    }}>
                      <div style={{ fontSize: "11px", fontWeight: "600", color: "#666", marginBottom: "0.25rem" }}>Import Prohibition</div>
                      <div style={{ fontSize: "12px", color: productCheckResults.importProhibition ? "#dc2626" : "#16a34a" }}>
                        {productCheckResults.importProhibition ? "❌ Found" : "✅ Clear"}
                      </div>
                    </div>
                    
                    <div style={{
                      padding: "0.5rem",
                      borderRadius: "4px",
                      background: productCheckResults.fivePlusFive ? "#fffbeb" : "#f8fff8",
                      border: `1px solid ${productCheckResults.fivePlusFive ? "#fed7aa" : "#bbf7d0"}`
                    }}>
                      <div style={{ fontSize: "11px", fontWeight: "600", color: "#666", marginBottom: "0.25rem" }}>5+5 Policy</div>
                      <div style={{ fontSize: "12px", color: productCheckResults.fivePlusFive ? "#d97706" : "#16a34a" }}>
                        {productCheckResults.fivePlusFive ? "⚠️ Affected" : "✅ Clear"}
                      </div>
                    </div>
                    
                    <div style={{
                      padding: "0.5rem",
                      borderRadius: "4px",
                      background: productCheckResults.fdcDirective ? "#fff5f5" : "#f8fff8",
                      border: `1px solid ${productCheckResults.fdcDirective ? "#fecaca" : "#bbf7d0"}`
                    }}>
                      <div style={{ fontSize: "11px", fontWeight: "600", color: "#666", marginBottom: "0.25rem" }}>FDC Directive</div>
                      <div style={{ fontSize: "12px", color: productCheckResults.fdcDirective ? "#dc2626" : "#16a34a" }}>
                        {productCheckResults.fdcDirective ? "❌ Found" : "✅ Clear"}
                      </div>
                    </div>
                    
                    <div style={{
                      padding: "0.5rem",
                      borderRadius: "4px",
                      background: productCheckResults.ntiCheck ? "#fffbeb" : "#f8fff8",
                      border: `1px solid ${productCheckResults.ntiCheck ? "#fed7aa" : "#bbf7d0"}`
                    }}>
                      <div style={{ fontSize: "11px", fontWeight: "600", color: "#666", marginBottom: "0.25rem" }}>NTI Status</div>
                      <div style={{ fontSize: "12px", color: productCheckResults.ntiCheck ? "#d97706" : "#16a34a" }}>
                        {productCheckResults.ntiCheck ? "⚠️ NTI Drug" : "✅ Standard"}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              marginBottom: '2rem', 
              justifyContent: 'center',
              paddingBottom: '2rem',
              borderBottom: '1px solid #ddd'
            }}>
              <button
                onClick={viewReport}
                disabled={internalResponses.size === 0}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: internalResponses.size === 0 ? '#f8f9fa' : '#28a745',
                  color: internalResponses.size === 0 ? '#666' : 'white',
                  border: internalResponses.size === 0 ? '1px solid #ddd' : 'none',
                  cursor: internalResponses.size === 0 ? 'not-allowed' : 'pointer',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                View Screening Report
              </button>
              
              <button
                onClick={clearAllComments}
                disabled={internalNotes.size === 0 && internalResponses.size === 0}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: (internalNotes.size === 0 && internalResponses.size === 0) ? '#f8f9fa' : '#dc3545',
                  color: (internalNotes.size === 0 && internalResponses.size === 0) ? '#666' : 'white',
                  border: (internalNotes.size === 0 && internalResponses.size === 0) ? '1px solid #ddd' : 'none',
                  cursor: (internalNotes.size === 0 && internalResponses.size === 0) ? 'not-allowed' : 'pointer',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                Reset All Screening
              </button>
            </div>
            {/* Screening Questions */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ 
                fontSize: '14px',
                fontWeight: '600',
                color: '#2c3e50',
                marginBottom: '1.5rem',
                borderBottom: '2px solid #2c3e50',
                paddingBottom: '0.5rem'
              }}>
                Screening Assessment Questions
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {INTERNAL_SCREENING_CHECKLIST.map((item) => {
                const response = internalResponses.get(item.id);
                const note = internalNotes.get(item.id) || "";
                // Special handling for Question 2 and 6
                let moduleStatus;
                if (item.id === 6) {
                  // Check structure based on dossier type - only if dossier has files
                  if (!dossier.root) {
                    moduleStatus = {
                      status: "Manual Review Required",
                      found: false,
                      count: 0,
                      required: 5,
                      type: "external",
                    };
                  } else {
                    const totalFiles = results.length;
                    const foundFiles = results.filter((r) =>
                      r.status.includes("✅")
                    ).length;
                    const complianceRate =
                      totalFiles > 0 ? (foundFiles / totalFiles) * 100 : 0;

                    if (complianceRate === 100) {
                      moduleStatus = {
                        status: "Complete",
                        found: true,
                        count: foundFiles,
                        required: totalFiles,
                        type:
                          dossierType === "consolidated" ? "modules" : "files",
                      };
                    } else if (complianceRate >= 80) {
                      moduleStatus = {
                        status: "Mostly Complete",
                        found: true,
                        count: foundFiles,
                        required: totalFiles,
                        type:
                          dossierType === "consolidated" ? "modules" : "files",
                      };
                    } else {
                      moduleStatus = {
                        status: "Incomplete",
                        found: false,
                        count: foundFiles,
                        required: totalFiles,
                        type:
                          dossierType === "consolidated" ? "modules" : "files",
                      };
                    }
                  }
                } else if (item.id === 2) {
                  if (productCheckResults) {
                    const hasIssues =
                      productCheckResults.ceilingList ||
                      productCheckResults.importProhibition;
                    if (hasIssues) {
                      moduleStatus = {
                        status: "Rejected",
                        found: true,
                        count: 1,
                        type: "compliance",
                      };
                    } else if (productCheckResults.fivePlusFive) {
                      moduleStatus = {
                        status: "Conditional",
                        found: true,
                        count: 1,
                        type: "compliance",
                      };
                    } else {
                      moduleStatus = {
                        status: "Approved",
                        found: true,
                        count: 1,
                        type: "compliance",
                      };
                    }
                  } else {
                    moduleStatus = {
                      status: "Check Required",
                      found: false,
                      count: 0,
                      type: "compliance",
                    };
                  }
                } else {
                  moduleStatus =
                    item.moduleRef !== "General / Pre-screening" && dossier.root
                      ? getModuleStatus(item.moduleRef, item.id)
                      : { found: false, count: 0, type: "none" };
                }

                return (
                  <div
                    key={item.id}
                    id={`question-${item.id}`}
                    style={{
                      background: 'white',
                      border: '1px solid #ddd',
                      padding: '2rem',
                      marginBottom: '1.5rem',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      scrollMarginTop: '100px'
                    }}
                  >
                    {activePreview && activePreview.questionId === item.id ? (
                      <div
                        className="responsive-file-viewer"
                        style={{ width: "100%", overflow: "hidden" }}
                      >
                        <InlineFilePreview
                          documents={activePreview.documents}
                          title={activePreview.title}
                          onClose={() => setActivePreview(null)}
                        />
                      </div>
                    ) : (
                      <>
                        <div style={{ marginBottom: '1.5rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{
                              background: response === "yes" ? "#28a745" : response === "no" ? "#dc3545" : response === "partial" ? "#ffc107" : "#2c3e50",
                              color: 'white',
                              padding: '0.75rem',
                              fontSize: '14px',
                              minWidth: '50px',
                              height: '50px',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: '700',
                              border: '2px solid #fff',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                            }}>
                              {item.id}
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{
                                fontSize: '12px',
                                fontWeight: '600',
                                color: '#666',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                marginBottom: '0.5rem'
                              }}>
                                Question {item.id}
                              </div>
                              <h3 style={{ 
                                margin: '0', 
                                color: '#2c3e50', 
                                fontSize: '16px',
                                fontWeight: '600',
                                lineHeight: '1.4'
                              }}>
                                {item.question}
                              </h3>
                            </div>
                          </div>
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '1rem',
                            marginBottom: '1.5rem',
                            padding: '1rem',
                            background: '#f8f9fa',
                            border: '1px solid #dee2e6'
                          }}>
                            <div>
                              <div style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '0.25rem' }}>SECTION</div>
                              <div style={{ fontSize: '14px', fontWeight: '500', color: '#2c3e50' }}>{item.section}</div>
                            </div>
                            <div>
                              <div style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '0.25rem' }}>MODULE REFERENCE</div>
                              <div style={{ fontSize: '14px', fontWeight: '500', color: '#2c3e50' }}>{item.moduleRef}</div>
                            </div>
                          </div>
                          {item.moduleRef !== "General / Pre-screening" &&
                          item.moduleRef !== "Final Decision" &&
                          item.moduleRef !== "General Checklist" && 
                          dossier.root && (
                            <div style={{ marginBottom: '1.5rem' }}>
                              <button
                                onClick={() =>
                                  openInlinePreview(
                                    item.id,
                                    item.moduleRef,
                                    `Question ${item.id}: ${item.question}`
                                  )
                                }
                                style={{
                                  background: '#2c3e50',
                                  color: 'white',
                                  border: 'none',
                                  padding: '0.75rem 1.5rem',
                                  cursor: 'pointer',
                                  fontSize: '14px',
                                  fontWeight: '500'
                                }}
                                title={`Preview documents for ${item.moduleRef}`}
                              >
                                View Supporting Documents
                              </button>
                            </div>
                          )}
                          
                          <div style={{
                            background: '#f8f9fa',
                            padding: '1.5rem',
                            border: '1px solid #dee2e6',
                            borderLeft: '4px solid #2c3e50',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#495057',
                            marginBottom: '1.5rem'
                          }}>
                            <div style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase' }}>ASSESSMENT GUIDANCE</div>
                              {item.guide}
                              {item.checkCeilingList && (
                                <span>
                                  {" "}
                                  <button
                                    onClick={() =>
                                      window.open(
                                        "https://www.nafdac.gov.ng/wp-content/uploads/Files/Resources/UPDATED-NAFDAC-CEILING-LIST.pdf",
                                        "_blank"
                                      )
                                    }
                                    style={{
                                      background: "none",
                                      border: "none",
                                      color: "#3498db",
                                      textDecoration: "underline",
                                      fontSize: "0.9rem",
                                      fontStyle: "normal",
                                      cursor: "pointer",
                                      padding: 0,
                                    }}
                                    title="View NAFDAC ceiling list"
                                  >
                                    NAFDAC ceiling list
                                  </button>
                                  {" | "}
                                  <button
                                    onClick={() =>
                                      window.open(
                                        "https://trade.gov.ng/en/custom-pages/prohibited-items-list-during-import",
                                        "_blank"
                                      )
                                    }
                                    style={{
                                      background: "none",
                                      border: "none",
                                      color: "#3498db",
                                      textDecoration: "underline",
                                      fontSize: "0.9rem",
                                      fontStyle: "normal",
                                      cursor: "pointer",
                                      padding: 0,
                                    }}
                                    title="View Federal Government Import Prohibition List"
                                  >
                                    Import prohibition list
                                  </button>
                                  {" | "}
                                  <button
                                    onClick={() =>
                                      window.open(
                                        "https://nafdac.gov.ng/wp-content/uploads/Files/Resources/Note_To_Industry_2024/PRODUCTS-FOR-55-VALIDITY-POLICY.pdf",
                                        "_blank"
                                      )
                                    }
                                    style={{
                                      background: "none",
                                      border: "none",
                                      color: "#3498db",
                                      textDecoration: "underline",
                                      fontSize: "0.9rem",
                                      fontStyle: "normal",
                                      cursor: "pointer",
                                      padding: 0,
                                    }}
                                    title="View 5+5 Policy List"
                                  >
                                    5+5 Policy list
                                  </button>
                                </span>
                              )}
                              {item.checkRegulatoryDirective && (
                                <span>
                                  {" "}
                                  <button
                                    onClick={() =>
                                      window.open(
                                        "https://nafdac.gov.ng/wp-content/uploads/Files/Resources/Regulatory_Directive/new/NAFDAC-Regulatory-Directives-on-the-Discontinuation-of-Some-Fixed-Dose-Combination-FDCs-Drugs.pdf",
                                        "_blank"
                                      )
                                    }
                                    style={{
                                      background: "none",
                                      border: "none",
                                      color: "#3498db",
                                      textDecoration: "underline",
                                      fontSize: "14px",
                                      fontStyle: "normal",
                                      cursor: "pointer",
                                      padding: 0,
                                    }}
                                    title="View NAFDAC Regulatory Directive on FDCs"
                                  >
                                    View FDC regulatory directive
                                  </button>
                                </span>
                              )}
                          </div>

                          <div style={{ 
                            borderTop: '1px solid #dee2e6',
                            paddingTop: '1.5rem',
                            marginTop: '1.5rem'
                          }}>
                            {item.id === 2 ? (
                              <div style={{ marginTop: "1rem" }}>
                                <div
                                  style={{
                                    background: "#f8f9fa",
                                    padding: "1rem",
                                    borderRadius: "8px",
                                    border: "1px solid #e9ecef",
                                    marginBottom: "1rem",
                                  }}
                                >
                                  <h5
                                    style={{
                                      margin: "0 0 0.5rem 0",
                                      color: "#495057",
                                    }}
                                  >
                                    Product Compliance Check
                                  </h5>
                                  <p
                                    style={{
                                      fontSize: "0.9rem",
                                      color: "#666",
                                      margin: "0 0 1rem 0",
                                    }}
                                  >
                                    Generic name entered above will be checked
                                    against regulatory lists.
                                  </p>
                                  {!productInputs.productName ? (
                                    <div
                                      style={{
                                        padding: "0.75rem",
                                        background: "#fff3cd",
                                        border: "1px solid #ffeaa7",
                                        borderRadius: "4px",
                                        fontSize: "0.9rem",
                                        color: "#856404",
                                      }}
                                    >
                                      ⚠️ Please enter generic name in the
                                      section above first.
                                    </div>
                                  ) : (
                                    <button
                                      onClick={checkProductCompliance}
                                      style={{
                                        padding: "0.5rem 1rem",
                                        fontSize: "0.9rem",
                                        background: "#3498db",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                      }}
                                    >
                                      🔍 Re-check Product Compliance
                                    </button>
                                  )}
                                </div>
                                <div style={{ display: "flex", gap: "0.5rem" }}>
                                  <button
                                    className={`btn ${
                                      response === "yes" ? "btn-success" : ""
                                    }`}
                                    onClick={() =>
                                      handleInternalResponse(item.id, "yes")
                                    }
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background:
                                        response === "yes"
                                          ? "#28a745"
                                          : "#f8f9fa",
                                      color:
                                        response === "yes" ? "white" : "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✓ Yes
                                  </button>
                                  <button
                                    className={`btn ${
                                      response === "no" ? "btn-danger" : ""
                                    }`}
                                    onClick={() =>
                                      handleInternalResponse(item.id, "no")
                                    }
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background:
                                        response === "no"
                                          ? "#dc3545"
                                          : "#f8f9fa",
                                      color:
                                        response === "no" ? "white" : "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✗ No
                                  </button>
                                </div>
                              </div>
                            ) : item.id === 1 ? (
                              <div style={{ display: "flex", gap: "0.5rem" }}>
                                <button
                                  className={`btn ${
                                    response === "yes" ? "btn-success" : ""
                                  }`}
                                  onClick={() => {
                                    handleInternalResponse(item.id, "yes");
                                    handleInternalNote(item.id, "Yes. The dossier attached to the application is confirmed in section 3.2.P.1, 3.2.P.3.1 to be the same as that stated on the DMS Portal. The product, ......... manufactured by ........, Located at .............");
                                  }}
                                  style={{
                                    padding: "0.5rem 1rem",
                                    fontSize: "0.8rem",
                                    background:
                                      response === "yes"
                                        ? "#28a745"
                                        : "#f8f9fa",
                                    color:
                                      response === "yes" ? "white" : "#666",
                                    border: "1px solid #ddd",
                                  }}
                                >
                                  ✓ Yes
                                </button>
                                <button
                                  className={`btn ${
                                    response === "no" ? "btn-danger" : ""
                                  }`}
                                  onClick={() => {
                                    handleInternalResponse(item.id, "no");
                                    handleInternalNote(item.id, "No. The dossier attached to the application in section 3.2.P.1, 3.2.P.3.1. The product, ......... manufactured by ........, Located at ............. is not the same as that stated on the DMS Portal. The product, ......... manufactured by ........, Located at .............");
                                  }}
                                  style={{
                                    padding: "0.5rem 1rem",
                                    fontSize: "0.8rem",
                                    background:
                                      response === "no" ? "#dc3545" : "#f8f9fa",
                                    color: response === "no" ? "white" : "#666",
                                    border: "1px solid #ddd",
                                  }}
                                >
                                  ✗ No
                                </button>
                              </div>
                            ) : item.id === 3 ? (
                              <div style={{ marginTop: "1rem" }}>
                                <div
                                  style={{
                                    background: "#f8f9fa",
                                    padding: "1rem",
                                    borderRadius: "8px",
                                    border: "1px solid #e9ecef",
                                    marginBottom: "1rem",
                                  }}
                                >
                                  <h5
                                    style={{
                                      margin: "0 0 0.5rem 0",
                                      color: "#495057",
                                    }}
                                  >
                                    FDC Regulatory Check
                                  </h5>
                                  <p
                                    style={{
                                      fontSize: "0.9rem",
                                      color: "#666",
                                      margin: "0 0 1rem 0",
                                    }}
                                  >
                                    Generic name from above will be checked
                                    against FDC regulatory directive.
                                  </p>
                                  {!productInputs.productName ? (
                                    <div
                                      style={{
                                        padding: "0.75rem",
                                        background: "#fff3cd",
                                        border: "1px solid #ffeaa7",
                                        borderRadius: "4px",
                                        fontSize: "0.9rem",
                                        color: "#856404",
                                      }}
                                    >
                                      ⚠️ Please enter generic name in the
                                      section above first.
                                    </div>
                                  ) : (
                                    <button
                                      onClick={checkProductCompliance}
                                      style={{
                                        padding: "0.5rem 1rem",
                                        fontSize: "0.9rem",
                                        background: "#e74c3c",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                      }}
                                    >
                                      🔍 Re-check FDC Regulatory Directive
                                    </button>
                                  )}
                                </div>
                                <div style={{ display: "flex", gap: "0.5rem" }}>
                                  <button
                                    className={`btn ${
                                      response === "yes" ? "btn-success" : ""
                                    }`}
                                    onClick={() =>
                                      handleInternalResponse(item.id, "yes")
                                    }
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background:
                                        response === "yes"
                                          ? "#28a745"
                                          : "#f8f9fa",
                                      color:
                                        response === "yes" ? "white" : "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✓ Yes
                                  </button>
                                  <button
                                    className={`btn ${
                                      response === "no" ? "btn-danger" : ""
                                    }`}
                                    onClick={() =>
                                      handleInternalResponse(item.id, "no")
                                    }
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background:
                                        response === "no"
                                          ? "#dc3545"
                                          : "#f8f9fa",
                                      color:
                                        response === "no" ? "white" : "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✗ No
                                  </button>
                                </div>
                              </div>
                            ) : item.id === 10 ? (
                              <div style={{ marginTop: "1rem" }}>
                                <div
                                  style={{
                                    background: "#f8f9fa",
                                    padding: "1rem",
                                    borderRadius: "8px",
                                    border: "1px solid #e9ecef",
                                    marginBottom: "1rem",
                                  }}
                                >
                                  <h5
                                    style={{
                                      margin: "0 0 0.5rem 0",
                                      color: "#495057",
                                    }}
                                  >
                                    Narrow Therapeutic Index Check
                                  </h5>
                                  <p
                                    style={{
                                      fontSize: "0.9rem",
                                      color: "#666",
                                      margin: "0 0 1rem 0",
                                    }}
                                  >
                                    Generic name from above will be checked
                                    against NTI drug list.
                                  </p>
                                  {!productInputs.productName ? (
                                    <div
                                      style={{
                                        padding: "0.75rem",
                                        background: "#fff3cd",
                                        border: "1px solid #ffeaa7",
                                        borderRadius: "4px",
                                        fontSize: "0.9rem",
                                        color: "#856404",
                                      }}
                                    >
                                      ⚠️ Please enter generic name in the
                                      section above first.
                                    </div>
                                  ) : (
                                    <button
                                      onClick={checkProductCompliance}
                                      style={{
                                        padding: "0.5rem 1rem",
                                        fontSize: "0.9rem",
                                        background: "#f39c12",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                      }}
                                    >
                                      🔍 Re-check NTI Drug List
                                    </button>
                                  )}
                                </div>
                                <div style={{ display: "flex", gap: "0.5rem" }}>
                                  <button
                                    className={`btn ${
                                      response === "yes" ? "btn-success" : ""
                                    }`}
                                    onClick={() =>
                                      handleInternalResponse(item.id, "yes")
                                    }
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background:
                                        response === "yes"
                                          ? "#28a745"
                                          : "#f8f9fa",
                                      color:
                                        response === "yes" ? "white" : "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✓ Yes
                                  </button>
                                  <button
                                    className={`btn ${
                                      response === "no" ? "btn-danger" : ""
                                    }`}
                                    onClick={() =>
                                      handleInternalResponse(item.id, "no")
                                    }
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background:
                                        response === "no"
                                          ? "#dc3545"
                                          : "#f8f9fa",
                                      color:
                                        response === "no" ? "white" : "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✗ No
                                  </button>
                                </div>
                              </div>
                            ) : item.id === 6 ? (
                              <div style={{ marginTop: "1rem" }}>
                                <div
                                  style={{
                                    background: "#f8f9fa",
                                    padding: "1rem",
                                    borderRadius: "8px",
                                    border: "1px solid #e9ecef",
                                    marginBottom: "1rem",
                                  }}
                                >
                                  <h5
                                    style={{
                                      margin: "0 0 0.5rem 0",
                                      color: "#495057",
                                    }}
                                  >
                                    Module Structure Check
                                  </h5>
                                  <p
                                    style={{
                                      fontSize: "0.9rem",
                                      color: "#666",
                                      margin: "0 0 1rem 0",
                                    }}
                                  >
                                    Click to check that all 5 CTD modules are present and contain files.
                                  </p>
                                  <button
                                    onClick={() => {
                                      if (!dossier.root) {
                                        handleInternalResponse(6, "no");
                                        handleInternalNote(6, "No files uploaded. Cannot verify CTD module structure.");
                                        return;
                                      }
                                      
                                      const allFiles = flattenFiles(dossier.root);
                                      
                                      // Layer 1: Check for all 5 modules
                                      const modules = [1, 2, 3, 4, 5];
                                      const foundModules = modules.filter(moduleNum => {
                                        const moduleFiles = allFiles.filter(file => {
                                          const path = file.fullPath.toLowerCase();
                                          return path.includes(`module ${moduleNum}`) || path.includes(`module${moduleNum}`);
                                        });
                                        return moduleFiles.length > 0;
                                      });

                                      if (foundModules.length !== 5) {
                                        handleInternalResponse(6, "no");
                                        handleInternalNote(6, `No, the dossier is not in ctd format. Only ${foundModules.length} out of 5 modules found: Module ${foundModules.join(", Module ")}.`);
                                        return;
                                      }

                                      // Layer 2: Check Module 3 for A, P, R, S parts
                                      const module3Parts = ['a', 'p', 'r', 's'];
                                      const foundParts = module3Parts.filter(part => {
                                        return allFiles.some(file => {
                                          const path = file.fullPath.toLowerCase();
                                          return path.includes('module 3') && 
                                                 (path.includes(`3.2.${part}`) || 
                                                  path.includes(`3.2${part}`) || 
                                                  path.includes(`32.${part}`) || 
                                                  path.includes(`32${part}`));
                                        });
                                      });

                                      if (foundParts.length !== 4) {
                                        handleInternalResponse(6, "no");
                                        const missingParts = module3Parts.filter(p => !foundParts.includes(p)).map(p => p.toUpperCase());
                                        handleInternalNote(6, `No, Module 3 is incomplete. Missing parts: 3.2.${missingParts.join(", 3.2.")}.`);
                                        return;
                                      }

                                      // Layer 3: Check R part for executed and blank BMR
                                      const hasExecutedBMR = allFiles.some(file => {
                                        const path = file.fullPath.toLowerCase();
                                        return path.includes('module 3') && 
                                               path.includes('3.2.r') && 
                                               (path.includes('3.2.r.1.1') || path.includes('32r11') || 
                                                path.includes('executed') || path.includes('r.1.1'));
                                      });

                                      const hasBlankBMR = allFiles.some(file => {
                                        const path = file.fullPath.toLowerCase();
                                        return path.includes('module 3') && 
                                               path.includes('3.2.r') && 
                                               (path.includes('3.2.r.1.2') || path.includes('32r12') || 
                                                path.includes('blank') || path.includes('r.1.2'));
                                      });

                                      if (!hasExecutedBMR || !hasBlankBMR) {
                                        handleInternalResponse(6, "no");
                                        const missing = [];
                                        if (!hasExecutedBMR) missing.push("Executed BMR (3.2.R.1.1)");
                                        if (!hasBlankBMR) missing.push("Blank BMR (3.2.R.1.2)");
                                        handleInternalNote(6, `No, Module 3.2.R is incomplete. Missing: ${missing.join(", ")}.`);
                                        return;
                                      }

                                      // All checks passed
                                      handleInternalResponse(6, "yes");
                                      handleInternalNote(6, "Yes. The dossier submitted is in CTD format and segregated in modules, folders and sub-folders and dossier is in searchable PDF.");
                                    }}
                                    disabled={isRunning}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.9rem",
                                      background: isRunning
                                        ? "#f8f9fa"
                                        : "#193441",
                                      color: isRunning ? "#666" : "white",
                                      border: "none",
                                      borderRadius: "4px",
                                      cursor: isRunning
                                        ? "not-allowed"
                                        : "pointer",
                                      marginBottom: "1rem",
                                    }}
                                  >
                                    {isRunning
                                      ? "🔍 Checking..."
                                      : "🔍 Check Module Structure"}
                                  </button>
                                </div>
                                <div style={{ display: "flex", gap: "0.5rem" }}>
                                  <button
                                    className={`btn ${
                                      response === "yes" ? "btn-success" : ""
                                    }`}
                                    onClick={() => {
                                      handleInternalResponse(item.id, "yes");
                                      handleInternalNote(item.id, "Yes. The dossier submitted is in CTD format and segregated in modules, folders and sub-folders and dossier is in searchable PDF.");
                                    }}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background:
                                        response === "yes"
                                          ? "#28a745"
                                          : "#f8f9fa",
                                      color:
                                        response === "yes" ? "white" : "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✓ Yes
                                  </button>
                                  <button
                                    className={`btn ${
                                      response === "no" ? "btn-danger" : ""
                                    }`}
                                    onClick={() => {
                                      handleInternalResponse(item.id, "no");
                                      handleInternalNote(item.id, "No, the dossier is not in ctd format.");
                                    }}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background:
                                        response === "no"
                                          ? "#dc3545"
                                          : "#f8f9fa",
                                      color:
                                        response === "no" ? "white" : "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✗ No
                                  </button>
                                </div>
                              </div>
                            ) : item.id === 7 ? (
                              <div style={{ marginTop: "1rem" }}>
                                <div
                                  style={{
                                    background: "#f8f9fa",
                                    padding: "1rem",
                                    borderRadius: "8px",
                                    border: "1px solid #e9ecef",
                                    marginBottom: "1rem",
                                  }}
                                >
                                  <h5
                                    style={{
                                      margin: "0 0 0.5rem 0",
                                      color: "#495057",
                                    }}
                                  >
                                    QIS and QOS-PD Word Documents Check
                                  </h5>
                                  <p
                                    style={{
                                      fontSize: "0.9rem",
                                      color: "#666",
                                      margin: "0 0 1rem 0",
                                    }}
                                  >
                                    Click to check for QIS and QOS-PD Word documents in the dossier.
                                  </p>
                                  <button
                                    onClick={() => {
                                      if (!dossier.root) {
                                        handleInternalResponse(7, "no");
                                        handleInternalNote(7, "No files uploaded. Cannot verify QIS and QOS-PD documents.");
                                        return;
                                      }
                                      
                                      const allFiles = flattenFiles(dossier.root);
                                      
                                      // Check for QIS anywhere in dossier (Word documents)
                                      const qisFiles = allFiles.filter(file => {
                                        const path = file.fullPath.toLowerCase();
                                        const name = file.name.toLowerCase();
                                        const isWordDoc = name.endsWith('.doc') || name.endsWith('.docx');
                                        
                                        // Check file name or folder path for QIS indicators
                                        const hasQIS = name.includes('qis') || 
                                                      name.includes('quality information summary') ||
                                                      path.includes('qis') ||
                                                      path.includes('quality information summary');
                                        
                                        return isWordDoc && hasQIS;
                                      });
                                      
                                      // Check for QOS anywhere in dossier (Word documents)
                                      const qosFiles = allFiles.filter(file => {
                                        const path = file.fullPath.toLowerCase();
                                        const name = file.name.toLowerCase();
                                        const isWordDoc = name.endsWith('.doc') || name.endsWith('.docx');
                                        
                                        // Check file name or folder path for QOS indicators
                                        const hasQOS = name.includes('qos') || 
                                                      name.includes('quality overall summary') ||
                                                      name.includes('qos-pd') ||
                                                      path.includes('qos') ||
                                                      path.includes('quality overall summary');
                                        
                                        return isWordDoc && hasQOS;
                                      });
                                      
                                      const hasQIS = qisFiles.length > 0;
                                      const hasQOS = qosFiles.length > 0;
                                      
                                      if (hasQIS && hasQOS) {
                                        handleInternalResponse(7, "yes");
                                        handleInternalNote(7, "Yes. QIS and QOS-PD were provided in module 1, section 1.4.2 and module 2, section 2.3 respectively in the product dossier in word documents and in line with the NAFDAC template.");
                                      } else if (hasQIS && !hasQOS) {
                                        handleInternalResponse(7, "no");
                                        handleInternalNote(7, "No. QIS was provided in module 1, section 1.4.2 in word document and in line with the NAFDAC template but QOS-PD was not found in module 2, section 2.3.");
                                      } else if (!hasQIS && hasQOS) {
                                        handleInternalResponse(7, "no");
                                        handleInternalNote(7, "No. QOS-PD was provided in module 2, section 2.3 in word document and in line with the NAFDAC template but QIS was not found in module 1, section 1.4.2.");
                                      } else {
                                        handleInternalResponse(7, "no");
                                        handleInternalNote(7, "No. Neither QIS nor QOS-PD word documents were found in their respective sections (module 1, section 1.4.2 and module 2, section 2.3).");
                                      }
                                    }}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.9rem",
                                      background: "#193441",
                                      color: "white",
                                      border: "none",
                                      borderRadius: "4px",
                                      cursor: "pointer",
                                      marginBottom: "1rem",
                                    }}
                                  >
                                    🔍 Check QIS and QOS-PD Documents
                                  </button>
                                </div>
                                <div style={{ display: "flex", gap: "0.5rem" }}>
                                  <button
                                    className={`btn ${
                                      response === "yes" ? "btn-success" : ""
                                    }`}
                                    onClick={() => {
                                      handleInternalResponse(item.id, "yes");
                                      handleInternalNote(item.id, "Yes. QIS and QOS-PD were provided in module 1, section 1.4.2 and module 2, section 2.3 respectively in the product dossier in word documents and in line with the NAFDAC template.");
                                    }}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background:
                                        response === "yes"
                                          ? "#28a745"
                                          : "#f8f9fa",
                                      color:
                                        response === "yes" ? "white" : "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✓ Yes
                                  </button>
                                  <button
                                    className={`btn ${
                                      response === "no" ? "btn-danger" : ""
                                    }`}
                                    onClick={() =>
                                      handleInternalResponse(item.id, "no")
                                    }
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background:
                                        response === "no"
                                          ? "#dc3545"
                                          : "#f8f9fa",
                                      color:
                                        response === "no" ? "white" : "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✗ No
                                  </button>
                                </div>
                              </div>
                            ) : item.id === 9 ? (
                              <div style={{ marginTop: "1rem" }}>
                                <div
                                  style={{
                                    background: "#f8f9fa",
                                    padding: "1rem",
                                    borderRadius: "8px",
                                    border: "1px solid #e9ecef",
                                    marginBottom: "1rem",
                                  }}
                                >
                                  <h5
                                    style={{
                                      margin: "0 0 0.5rem 0",
                                      color: "#495057",
                                    }}
                                  >
                                    BE/BW Data Check
                                  </h5>
                                  <p
                                    style={{
                                      fontSize: "0.9rem",
                                      color: "#666",
                                      margin: "0 0 1rem 0",
                                    }}
                                  >
                                    Click to check for BE/BW data and BTIF documents in the dossier.
                                  </p>
                                  <button
                                    onClick={() => {
                                      if (!dossier.root) {
                                        handleInternalResponse(9, "no");
                                        handleInternalNote(9, "No files uploaded. Cannot verify BE/BW data and BTIF documents.");
                                        return;
                                      }
                                      
                                      const allFiles = flattenFiles(dossier.root);
                                      
                                      // Check for BTIF in module 1.4.1 (Word or PDF)
                                      const btifFiles = allFiles.filter(file => {
                                        const path = file.fullPath.toLowerCase();
                                        const name = file.name.toLowerCase();
                                        const isDocument = name.endsWith('.doc') || name.endsWith('.docx') || name.endsWith('.pdf');
                                        const inModule141 = path.includes('module 1') && path.includes('1.4.1');
                                        return isDocument && inModule141;
                                      });
                                      
                                      // Check for BE/BW data in module 5.3
                                      const beFiles = allFiles.filter(file => {
                                        const path = file.fullPath.toLowerCase();
                                        const name = file.name.toLowerCase();
                                        const isPdf = name.endsWith('.pdf');
                                        const inModule53 = path.includes('module 5') && path.includes('5.3');
                                        return isPdf && inModule53;
                                      });
                                      
                                      const hasBTIF = btifFiles.length > 0;
                                      const hasBE = beFiles.length > 0;
                                      
                                      if (hasBTIF && hasBE) {
                                        handleInternalResponse(9, "yes");
                                        handleInternalNote(9, "Yes, data on BE or Biowaiver was provided in section 5.3 and BTIF or BAF provided in section 1.4.1 of the product dossier.");
                                      } else if (hasBTIF && !hasBE) {
                                        handleInternalResponse(9, "no");
                                        handleInternalNote(9, "No, BTIF was provided in section 1.4.1 but BE/BW data was not found in section 5.3 of the product dossier.");
                                      } else if (!hasBTIF && hasBE) {
                                        handleInternalResponse(9, "no");
                                        handleInternalNote(9, "No, BE/BW data was provided in section 5.3 but BTIF was not found in section 1.4.1 of the product dossier.");
                                      } else {
                                        handleInternalResponse(9, "no");
                                        handleInternalNote(9, "No, neither BE/BW data in section 5.3 nor BTIF in section 1.4.1 were found in the product dossier.");
                                      }
                                    }}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.9rem",
                                      background: "#193441",
                                      color: "white",
                                      border: "none",
                                      borderRadius: "4px",
                                      cursor: "pointer",
                                      marginBottom: "1rem",
                                    }}
                                  >
                                    🔍 Check BE/BW Data and BTIF
                                  </button>
                                </div>
                                <div style={{ display: "flex", gap: "0.5rem" }}>
                                  <button
                                    className={`btn ${
                                      response === "yes" ? "btn-success" : ""
                                    }`}
                                    onClick={() =>
                                      handleInternalResponse(item.id, "yes")
                                    }
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background:
                                        response === "yes"
                                          ? "#28a745"
                                          : "#f8f9fa",
                                      color:
                                        response === "yes" ? "white" : "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✓ Yes
                                  </button>
                                  <button
                                    className={`btn ${
                                      response === "no" ? "btn-danger" : ""
                                    }`}
                                    onClick={() =>
                                      handleInternalResponse(item.id, "no")
                                    }
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background:
                                        response === "no"
                                          ? "#dc3545"
                                          : "#f8f9fa",
                                      color:
                                        response === "no" ? "white" : "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✗ No
                                  </button>
                                </div>
                              </div>
                            ) : item.id === 16 ? (
                              <div style={{ marginTop: "1rem" }}>
                                <div style={{ display: "flex", gap: "0.5rem" }}>
                                  <button
                                    onClick={() => {
                                      handleInternalResponse(item.id, "yes");
                                      handleInternalNote(item.id, "Yes, method of sterilization of the product was by ...... as confirmed in section 3.2.P.3.");
                                    }}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background: "#f8f9fa",
                                      color: "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✓ Yes
                                  </button>
                                  <button
                                    onClick={() => {
                                      handleInternalResponse(item.id, "no");
                                      handleInternalNote(item.id, "No method of sterilization was provided in the product dossier");
                                    }}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background: "#f8f9fa",
                                      color: "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✗ No
                                  </button>
                                </div>
                              </div>
                            ) : item.id === 17 ? (
                              <div style={{ marginTop: "1rem" }}>
                                <div style={{ display: "flex", gap: "0.5rem" }}>
                                  <button
                                    onClick={() => {
                                      handleInternalResponse(item.id, "yes");
                                      handleInternalNote(item.id, "Yes, data on the manufacturing process validation for the three consecutive batches, ....., ..... and ..... was provided in section 3.2.P.3.5 of the product dossier.");
                                    }}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background: "#f8f9fa",
                                      color: "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✓ Yes
                                  </button>
                                  <button
                                    onClick={() => {
                                      handleInternalResponse(item.id, "no");
                                      handleInternalNote(item.id, "no data on the manufacturing process validation for three consecutive batches was provided in section 3.2.P.3.5 of the product dossier.");
                                    }}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background: "#f8f9fa",
                                      color: "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✗ No
                                  </button>
                                </div>
                              </div>
                            ) : item.id === 18 ? (
                              <div style={{ marginTop: "1rem" }}>
                                <div style={{ display: "flex", gap: "0.5rem" }}>
                                  <button
                                    onClick={() => {
                                      handleInternalResponse(item.id, "yes");
                                      handleInternalNote(item.id, "Yes, stability data generated using samples stored in inverted orientation was provided in the product dossier");
                                    }}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background: "#f8f9fa",
                                      color: "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✓ Yes
                                  </button>
                                  <button
                                    onClick={() => {
                                      handleInternalResponse(item.id, "no");
                                      handleInternalNote(item.id, "Not applicable. FPP is an infusion");
                                    }}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background: "#f8f9fa",
                                      color: "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✗ No
                                  </button>
                                </div>
                              </div>
                            ) : item.id === 19 ? (
                              <div style={{ marginTop: "1rem" }}>
                                <div style={{ display: "flex", gap: "0.5rem" }}>
                                  <button
                                    onClick={() => {
                                      handleInternalResponse(item.id, "yes");
                                      handleInternalNote(item.id, "Yes, evidence of validation of the conditions/parameters used for the sterilization/depyrogenation of the processing equipment and accessories, filters and packaging components was provided in section 3.2.P.2 of the product dossier");
                                    }}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background: "#f8f9fa",
                                      color: "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✓ Yes
                                  </button>
                                  <button
                                    onClick={() => {
                                      handleInternalResponse(item.id, "no");
                                      handleInternalNote(item.id, "No, evidence of validation of the conditions/parameters used for the sterilization/depyrogenation of the processing equipment and accessories, filters and packaging components was not provided in section 3.2.P.2 of the product dossier");
                                    }}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background: "#f8f9fa",
                                      color: "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✗ No
                                  </button>
                                </div>
                              </div>
                            ) : item.id === 15 ? (
                              <div style={{ marginTop: "1rem" }}>
                                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                                  <button
                                    onClick={() => {
                                      handleInternalResponse(item.id, "yes");
                                      handleInternalNote(item.id, "Yes, stability data is provided in 3.2.P.8.3 at 6 months accelerated condition (40°C±2°C/RH75%±5%) for batches- ....., ..... and ..... were provided. However, the long term condition (30°C±2°C/RH75%±5%) is not provided for any batch.");
                                    }}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background: "#f8f9fa",
                                      color: "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✓ Yes: 6 Months Only
                                  </button>
                                  <button
                                    onClick={() => {
                                      handleInternalResponse(item.id, "yes");
                                      handleInternalNote(item.id, "Yes, stability data is provided in 3.2.P.8.3 at 12 months long term condition (30°C±2°C/RH75%±5%) for batches- ....., ..... and ..... were provided. However, the 6 months accelerated condition (40°C±2°C/RH75%±5%) is not provided for any batch.");
                                    }}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background: "#f8f9fa",
                                      color: "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✓ Yes: 12 Months Only
                                  </button>
                                  <button
                                    onClick={() => {
                                      handleInternalResponse(item.id, "yes");
                                      handleInternalNote(item.id, "Yes, stability data is provided in 3.2.P.8.3 at 6 months accelerated condition (40°C±2°C/RH75%±5%) and 12 months long term condition (30°C±2°C/RH75%±5%) for batches- ....., ..... and ..... were provided.");
                                    }}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background: "#f8f9fa",
                                      color: "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✓ Yes: Both Conditions
                                  </button>
                                  <button
                                    onClick={() => {
                                      handleInternalResponse(item.id, "no");
                                      handleInternalNote(item.id, "No, neither stability data in 3.2.p.8.3 at 6 months accelerated condition (40°C±2°C/RH75%±5%) nor 12 months long term condition (30°C±2°C/RH75%±5%) were provided.");
                                    }}
                                    style={{
                                      padding: "0.5rem 1rem",
                                      fontSize: "0.8rem",
                                      background: "#f8f9fa",
                                      color: "#666",
                                      border: "1px solid #ddd",
                                    }}
                                  >
                                    ✗ No
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div style={{ display: "flex", gap: "0.5rem" }}>
                                <button
                                  className={`btn ${
                                    response === "yes" ? "btn-success" : ""
                                  }`}
                                  onClick={() => {
                                    if (item.id === 4) {
                                      handleInternalNote(item.id, "Yes, certification was provided by applicant in section 1.2.15 of the dossier for the API's and Certificate of analysis for the drug substances were provided from ..... in section 3.2.S.4.4");
                                    } else if (item.id === 5) {
                                      handleInternalNote(item.id, "Yes, SmPC was provided in section 1.3.1 of the product dossier.");
                                    } else if (item.id === 8) {
                                      handleInternalNote(item.id, "Yes, a signed, dated and version controlled FPP specification with specification number ..... and version ..... with effective date ..... was provided in 3.2.P.5.1 of the product dossier");
                                    } else if (item.id === 9) {
                                      handleInternalNote(item.id, "Yes, BTIF in section 1.4.1 and BE/BW data in section 5.3 were provided in the product dossier.");
                                    } else if (item.id === 11) {
                                      handleInternalNote(item.id, "Yes. In section 3.2.P.5.4 (Batch Analysis), section 3.2.P.8.3 (Stability data), batches ....., ..... and ..... were provided and in section 3.2.R.1.1 (Executed BMR), the batch is ...... Therefore, the submission batches are consistent.");
                                    } else if (item.id === 12) {
                                      handleInternalNote(item.id, "Yes, the executed BMR for the representative batch, ....., with batch size of ..... tablets for the product- ..... from manufacturer, ..... is provided in sections 3.2.R.1.1 and the blank BMR provided in 3.2.R.1.2 of the product dossier.");
                                    } else if (item.id === 13) {
                                      handleInternalNote(item.id, "Yes, the blank BMR was provided and it is in text searchable pdf. Also, the name of the product, batch size and batch formula were included.");
                                    } else if (item.id === 14) {
                                      handleInternalNote(item.id, "Yes, data on comparative dissolution profile is provided in section 3.2.P.2 and section 5.3.1.2 in the product dossier.");
                                    } else if (item.id === 20) {
                                      handleInternalNote(item.id, "Process validation reports for the consecutive batches- ....., ..... and ..... are provided in section 3.2.P.3.5");
                                    }
                                    handleInternalResponse(item.id, "yes");
                                  }}
                                  style={{
                                    padding: "0.5rem 1rem",
                                    fontSize: "0.8rem",
                                    background:
                                      response === "yes"
                                        ? "#28a745"
                                        : moduleStatus.found && !response
                                        ? "#e8f5e8"
                                        : "#f8f9fa",
                                    color:
                                      response === "yes" ? "white" : "#666",
                                    border: "1px solid #ddd",
                                  }}
                                >
                                  ✓ Yes
                                </button>
                                <button
                                  className={`btn ${
                                    response === "no" ? "btn-danger" : ""
                                  }`}
                                  onClick={() => {
                                    handleInternalResponse(item.id, "no");
                                    if (item.id === 4) {
                                      handleInternalNote(item.id, "No certification was provided by applicant in section 1.2.15 of the dossier for the API's nor was data provided to indicate that the API are from one of the approved sources. However, Certificate of analysis for the drug substances were provided from ..... in section 3.2.S.4.4");
                                    } else if (item.id === 5) {
                                      handleInternalNote(item.id, "No. SmPC was not provided in section 1.3.1 of the product dossier.");
                                    } else if (item.id === 11) {
                                      handleInternalNote(item.id, "No. In sections 3.2.P.5.4 (Batch Analysis), 3.2.P.8.3 (Stability data), and 3.2.R.1.1 (Executed BMR), the batches provided are inconsistent or incomplete. Therefore, the submission batches are not consistent.");
                                    } else if (item.id === 12) {
                                      handleInternalNote(item.id, "No, the executed BMR for the representative batch in section 3.2.R.1.1 and/or the proposed blank BMR(s) in section 3.2.R.1.2 were not provided in the product dossier.");
                                    } else if (item.id === 13) {
                                      handleInternalNote(item.id, "No, the blank BMR was not provided for all proposed batch sizes and/or is not text searchable/bookmarked and/or does not include the product name and batch formula.");
                                    } else if (item.id === 14) {
                                      // Check if product is imported and non-solid oral
                                      if (productOrigin === "imported" && productType === "non-solid-oral") {
                                        handleInternalNote(item.id, "No, data on comparative dissolution profile is neither provided in section 3.2.P.2 nor section 5.3.1.2 in the product dossier. However, details on the comparator product was provided in section 3.2.P.2.");
                                      } else {
                                        handleInternalNote(item.id, "No, data on comparative dissolution profile is neither provided in section 3.2.P.2 nor section 5.3.1.2 in the product dossier.");
                                      }
                                    } else if (item.id === 8) {
                                      handleInternalNote(item.id, "No, product specification was not provided in section 3.2.P.5.1");
                                    } else if (item.id === 20) {
                                      handleInternalNote(item.id, "No process validation reports for any batch is provided in sectoin 3.2.P.3.5");
                                    }
                                  }}
                                  style={{
                                    padding: "0.5rem 1rem",
                                    fontSize: "0.8rem",
                                    background:
                                      response === "no"
                                        ? "#dc3545"
                                        : !moduleStatus.found && !response
                                        ? "#fde8e8"
                                        : "#f8f9fa",
                                    color: response === "no" ? "white" : "#666",
                                    border: "1px solid #ddd",
                                  }}
                                >
                                  ✗ No
                                </button>
                              </div>
                            )}
                          </div>
                        </div>

                        <div style={{ position: "relative" }}>
                          <textarea
                            placeholder="Add notes or comments..."
                            value={note}
                            onChange={(e) => {
                              handleInternalNote(item.id, e.target.value);
                              // Auto-resize textarea
                              e.target.style.height = 'auto';
                              e.target.style.height = e.target.scrollHeight + 'px';
                            }}
                            onInput={(e) => {
                              // Auto-resize on input
                              e.target.style.height = 'auto';
                              e.target.style.height = e.target.scrollHeight + 'px';
                            }}
                            className="touch-target"
                            style={{
                              width: "100%",
                              minHeight: "50px",
                              height: note ? 'auto' : '50px',
                              padding: "0.5rem 40px 0.5rem 0.5rem",
                              border: "1px solid #ddd",
                              borderRadius: "4px",
                              fontSize: "0.85rem",
                              resize: "none",
                              overflow: "hidden",
                              lineHeight: "1.4"
                            }}
                            ref={(textarea) => {
                              if (textarea && note) {
                                textarea.style.height = 'auto';
                                textarea.style.height = textarea.scrollHeight + 'px';
                              }
                            }}
                          />
                          {note.trim() && (
                            <button
                              onClick={() => copyComment(note)}
                              style={{
                                position: "absolute",
                                top: "0.5rem",
                                right: "0.5rem",
                                background: "#f8f9fa",
                                border: "1px solid #ddd",
                                borderRadius: "3px",
                                cursor: "pointer",
                                fontSize: "0.7rem",
                                padding: "0.2rem 0.4rem",
                                color: "#666",
                                transition: "all 0.2s"
                              }}
                              onMouseOver={(e) => {
                                e.target.style.background = "#e9ecef";
                                e.target.style.color = "#495057";
                              }}
                              onMouseOut={(e) => {
                                e.target.style.background = "#f8f9fa";
                                e.target.style.color = "#666";
                              }}
                              title="Copy comment to clipboard"
                            >
                              📋
                            </button>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>


            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Screening;
