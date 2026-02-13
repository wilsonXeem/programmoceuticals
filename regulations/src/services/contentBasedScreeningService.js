import { DOSSIER_CHECKLIST } from '../utils/checklist';
import { pdfTextExtractionService } from './pdfTextExtractionService';

class ContentBasedScreeningService {
  constructor() {
    this.ctdSections = this.buildCTDSectionMap();
  }

  buildCTDSectionMap() {
    const sections = {};
    
    DOSSIER_CHECKLIST.forEach(item => {
      const pathParts = item.path.split('/');
      const module = pathParts[0];
      const section = pathParts.slice(1).join('/').replace('.pdf', '');
      
      if (!sections[module]) {
        sections[module] = [];
      }
      
      sections[module].push({
        section,
        description: item.desc,
        originalPath: item.path,
        searchTerms: this.generateSearchTerms(item.desc, section)
      });
    });
    
    return sections;
  }

  generateSearchTerms(description, section) {
    const terms = [];
    
    // Add section number patterns
    const sectionMatch = section.match(/(\d+\.\d+(?:\.\d+)*)/);
    if (sectionMatch) {
      terms.push(sectionMatch[1]);
    }
    
    // Add key words from description
    const keyWords = description
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 3 && 
        !['the', 'and', 'for', 'with', 'from', 'that', 'this', 'are', 'have'].includes(word)
      );
    
    terms.push(...keyWords);
    
    // Add specific pharmaceutical terms
    const pharmaTerms = [
      'certificate', 'manufacturing', 'quality', 'specification', 
      'validation', 'stability', 'batch', 'analysis', 'gmp'
    ];
    
    pharmaTerms.forEach(term => {
      if (description.toLowerCase().includes(term)) {
        terms.push(term);
      }
    });
    
    return [...new Set(terms)];
  }

  async detectDossierType(dossier) {
    if (!dossier?.root?.children) return 'unknown';
    
    const moduleNumbers = [1, 2, 3, 4, 5];
    let traditionalCount = 0;
    let consolidatedCount = 0;
    let foundModules = 0;
    
    // Find each of the 5 modules
    for (const moduleNum of moduleNumbers) {
      const moduleFolder = this.findModuleFolder(dossier.root, moduleNum);
      
      if (moduleFolder) {
        foundModules++;
        const hasSubfolders = this.hasSubfolders(moduleFolder);
        
        console.log(`Module ${moduleNum}: hasSubfolders=${hasSubfolders}`);
        
        if (hasSubfolders) {
          traditionalCount++;
        } else {
          consolidatedCount++;
        }
      }
    }
    
    console.log(`Detection: traditional=${traditionalCount}, consolidated=${consolidatedCount}, found=${foundModules}/5`);
    
    if (foundModules < 3) return 'unknown';
    
    const traditionalRatio = traditionalCount / foundModules;
    const consolidatedRatio = consolidatedCount / foundModules;
    
    if (traditionalRatio >= 0.6) return 'structured';
    if (consolidatedRatio >= 0.6) return 'consolidated';
    return 'mixed';
  }

  findModuleFolder(node, moduleNum) {
    if (!node.children) return null;
    
    for (const child of node.children) {
      if (child.type === 'folder') {
        const name = child.name.toLowerCase();
        if (name.includes(`module ${moduleNum}`) || name.includes(`module${moduleNum}`)) {
          return child;
        }
        // Recursively search in subfolders
        const found = this.findModuleFolder(child, moduleNum);
        if (found) return found;
      }
    }
    
    return null;
  }

  hasSubfolders(node) {
    if (!node.children) return false;
    
    return node.children.some(child => child.type === 'folder');
  }



  async screenConsolidatedDossier(dossier, getFileBlob) {
    const results = {
      type: 'consolidated',
      modules: {},
      overallCompliance: 0,
      foundSections: [],
      missingSections: [],
      processingStats: {
        totalFiles: 0,
        processedFiles: 0,
        errors: 0
      }
    };

    for (const module of dossier.root.children) {
      if (module.type === 'folder' && module.name.toLowerCase().includes('module')) {
        try {
          const moduleResults = await this.screenConsolidatedModule(module, getFileBlob);
          results.modules[module.name] = moduleResults;
          results.foundSections.push(...moduleResults.foundSections);
          results.missingSections.push(...moduleResults.missingSections);
          
          results.processingStats.totalFiles += moduleResults.pdfAnalysis.length;
          results.processingStats.processedFiles += moduleResults.pdfAnalysis.filter(p => !p.hasError).length;
          results.processingStats.errors += moduleResults.pdfAnalysis.filter(p => p.hasError).length;
        } catch (error) {
          console.error(`Error processing module ${module.name}:`, error);
          results.modules[module.name] = {
            foundSections: [],
            missingSections: [],
            pdfAnalysis: [],
            error: error.message
          };
        }
      }
    }

    // Calculate overall compliance
    const totalRequired = Object.values(this.ctdSections).flat().length;
    const totalFound = results.foundSections.length;
    results.overallCompliance = Math.round((totalFound / totalRequired) * 100);

    return results;
  }

  async screenConsolidatedModule(moduleNode, getFileBlob) {
    const moduleName = moduleNode.name;
    const expectedSections = this.ctdSections[moduleName] || [];
    
    const results = {
      foundSections: [],
      missingSections: [],
      pdfAnalysis: []
    };

    // Find PDF files in this module
    const pdfFiles = this.findPDFFiles(moduleNode);
    
    for (const pdfFile of pdfFiles) {
      try {
        const fileBlob = await getFileBlob(pdfFile.path);
        const textData = await pdfTextExtractionService.extractTextFromPDF(fileBlob, pdfFile.path);
        
        results.pdfAnalysis.push({
          file: pdfFile.name,
          path: pdfFile.path,
          pageCount: textData.pageCount,
          sections: textData.sections,
          hasError: !!textData.error
        });

        // Search for expected sections in this PDF
        for (const expectedSection of expectedSections) {
          const found = this.searchForSection(textData, expectedSection);
          
          if (found.isFound) {
            results.foundSections.push({
              ...expectedSection,
              foundIn: pdfFile.name,
              evidence: found.evidence
            });
          }
        }
        
      } catch (error) {
        console.error(`Error processing ${pdfFile.path}:`, error);
      }
    }

    // Determine missing sections
    const foundSectionPaths = results.foundSections.map(s => s.originalPath);
    results.missingSections = expectedSections.filter(
      section => !foundSectionPaths.includes(section.originalPath)
    );

    return results;
  }

  findPDFFiles(node, files = []) {
    if (node.type === 'file' && node.name.toLowerCase().endsWith('.pdf')) {
      files.push(node);
    } else if (node.children) {
      for (const child of node.children) {
        this.findPDFFiles(child, files);
      }
    }
    return files;
  }

  searchForSection(textData, expectedSection) {
    const { fullText, sections } = textData;
    const { searchTerms, description, section } = expectedSection;
    
    let confidence = 0;
    const evidence = [];
    
    // Enhanced section number matching
    const sectionNumber = section.match(/(\d+\.\d+(?:\.\d+)*(?:\.[A-Z]+(?:\.\d+)*)?)/)?.[1];
    if (sectionNumber) {
      const sectionRegex = new RegExp(sectionNumber.replace(/\./g, '\\.'), 'gi');
      if (sectionRegex.test(fullText)) {
        confidence += 40;
        evidence.push(`Section number "${sectionNumber}" found`);
      }
    }
    
    // Search for section headings with better matching
    for (const heading of sections) {
      const headingText = heading.heading || heading;
      for (const term of searchTerms) {
        if (headingText.toLowerCase().includes(term.toLowerCase())) {
          confidence += 25;
          evidence.push(`Heading match: "${headingText.substring(0, 50)}..."`);
        }
      }
    }
    
    // Enhanced keyword matching with context
    const keyPhrases = this.extractKeyPhrases(description);
    for (const phrase of keyPhrases) {
      const matches = pdfTextExtractionService.searchInText(fullText, phrase);
      if (matches.length > 0) {
        confidence += Math.min(matches.length * 8, 25);
        evidence.push(`Key phrase "${phrase}" found (${matches.length}x)`);
      }
    }
    
    // Search individual terms
    for (const term of searchTerms) {
      if (term.length > 3) {
        const matches = pdfTextExtractionService.searchInText(fullText, term);
        if (matches.length > 0) {
          confidence += Math.min(matches.length * 3, 15);
          if (evidence.length < 5) {
            evidence.push(`"${term}" (${matches.length}x)`);
          }
        }
      }
    }
    
    return {
      isFound: confidence >= 30, // Adjusted threshold
      confidence: Math.min(confidence, 100),
      evidence: evidence.slice(0, 4)
    };
  }

  extractKeyPhrases(description) {
    const phrases = [];
    
    // Extract multi-word phrases
    const words = description.toLowerCase().split(/\s+/);
    for (let i = 0; i < words.length - 1; i++) {
      const phrase = words.slice(i, i + 2).join(' ');
      if (phrase.length > 6 && !phrase.includes('the') && !phrase.includes('and')) {
        phrases.push(phrase);
      }
    }
    
    // Add specific pharmaceutical phrases
    const pharmaPatterns = [
      'certificate of analysis',
      'manufacturing formula',
      'batch production record',
      'quality specification',
      'stability data',
      'validation report',
      'gmp certificate'
    ];
    
    pharmaPatterns.forEach(pattern => {
      if (description.toLowerCase().includes(pattern)) {
        phrases.push(pattern);
      }
    });
    
    return [...new Set(phrases)];
  }

  async screenStructuredDossier(dossier) {
    // Keep existing structured screening logic
    const results = {
      type: 'structured',
      // ... existing logic
    };
    return results;
  }
}

export const contentBasedScreeningService = new ContentBasedScreeningService();