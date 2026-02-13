import * as pdfjsLib from 'pdfjs-dist';

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js';

class PDFTextExtractionService {
  constructor() {
    this.cache = new Map();
  }

  async extractTextFromPDF(fileBlob, filePath) {
    // Check cache first
    if (this.cache.has(filePath)) {
      return this.cache.get(filePath);
    }

    try {
      const arrayBuffer = await fileBlob.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      
      let fullText = '';
      const sections = [];
      
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        
        const pageText = textContent.items
          .map(item => item.str)
          .join(' ')
          .replace(/\s+/g, ' ')
          .trim();
        
        fullText += pageText + ' ';
        
        // Extract potential section headings (lines with numbers like 1.2.1, 2.3, etc.)
        const headings = this.extractSectionHeadings(pageText);
        sections.push(...headings.map(heading => ({ heading, page: pageNum })));
      }

      const result = {
        fullText: fullText.trim(),
        sections,
        pageCount: pdf.numPages,
        extractedAt: new Date().toISOString(),
        wordCount: fullText.trim().split(/\s+/).length,
        hasContent: fullText.trim().length > 100
      };

      // Cache the result
      this.cache.set(filePath, result);
      return result;

    } catch (error) {
      console.error(`Error extracting text from ${filePath}:`, error);
      return {
        fullText: '',
        sections: [],
        pageCount: 0,
        error: error.message
      };
    }
  }

  extractSectionHeadings(text) {
    const headings = [];
    
    // Enhanced patterns for CTD section detection
    const sectionPatterns = [
      // CTD section numbers with titles
      /(\d+\.\d+(?:\.\d+)*(?:\.[A-Z]+(?:\.\d+)*)?)\s+([A-Z][^\n]*?)(?=\n|\d+\.\d+|$)/gi,
      // Module headings
      /(Module\s+\d+[^\n]*?)(?=\n|Module\s+\d+|$)/gi,
      // All caps headings (pharmaceutical terms)
      /([A-Z][A-Z\s]{8,}?)(?=\n|[A-Z]{8,}|$)/g,
      // Common pharmaceutical section headings
      /(CERTIFICATE\s+OF\s+ANALYSIS|MANUFACTURING\s+FORMULA|BATCH\s+PRODUCTION|QUALITY\s+SPECIFICATION|STABILITY\s+DATA|VALIDATION\s+REPORT|GMP\s+CERTIFICATE)[^\n]*/gi,
      // Numbered sections without dots
      /^\s*(\d+)\s+([A-Z][^\n]{10,})$/gm
    ];

    sectionPatterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(text)) !== null) {
        const heading = match[0].trim();
        if (heading.length > 5 && heading.length < 200) {
          headings.push({
            heading,
            type: this.classifyHeading(heading)
          });
        }
      }
    });

    return this.deduplicateHeadings(headings);
  }

  classifyHeading(heading) {
    if (/\d+\.\d+/.test(heading)) return 'ctd-section';
    if (/module\s+\d+/i.test(heading)) return 'module';
    if (/^[A-Z\s]+$/.test(heading)) return 'caps-heading';
    if (/certificate|manufacturing|batch|quality|stability|validation|gmp/i.test(heading)) return 'pharma-term';
    return 'general';
  }

  deduplicateHeadings(headings) {
    const seen = new Set();
    return headings.filter(item => {
      const key = item.heading.toLowerCase().replace(/\s+/g, ' ').trim();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  searchInText(text, searchTerms) {
    if (!text || !searchTerms) return [];
    
    const results = [];
    const searchArray = Array.isArray(searchTerms) ? searchTerms : [searchTerms];
    
    searchArray.forEach(term => {
      // Enhanced search with word boundaries for better matching
      const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const patterns = [
        new RegExp(`\\b${escapedTerm}\\b`, 'gi'), // Exact word match
        new RegExp(escapedTerm, 'gi') // Partial match
      ];
      
      patterns.forEach((regex, patternIndex) => {
        let match;
        while ((match = regex.exec(text)) !== null) {
          const start = Math.max(0, match.index - 150);
          const end = Math.min(text.length, match.index + match[0].length + 150);
          
          results.push({
            term,
            match: match[0],
            context: text.substring(start, end).replace(/\s+/g, ' ').trim(),
            position: match.index,
            matchType: patternIndex === 0 ? 'exact' : 'partial',
            confidence: patternIndex === 0 ? 1.0 : 0.7
          });
        }
        
        // Reset regex for next iteration
        regex.lastIndex = 0;
      });
    });
    
    // Sort by confidence and remove duplicates
    return results
      .sort((a, b) => b.confidence - a.confidence)
      .filter((result, index, arr) => 
        index === 0 || 
        Math.abs(result.position - arr[index - 1].position) > 10
      )
      .slice(0, 10); // Limit results
  }

  async extractFromMultipleFiles(files) {
    const results = {};
    
    for (const [filePath, fileBlob] of Object.entries(files)) {
      if (filePath.toLowerCase().endsWith('.pdf')) {
        results[filePath] = await this.extractTextFromPDF(fileBlob, filePath);
      }
    }
    
    return results;
  }

  clearCache() {
    this.cache.clear();
  }
}

export const pdfTextExtractionService = new PDFTextExtractionService();