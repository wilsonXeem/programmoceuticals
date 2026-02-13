import * as pdfjsLib from 'pdfjs-dist';

class DocumentAnalysisService {
  constructor() {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;
  }

  async extractTextFromPDF(fileUrl) {
    try {
      const pdf = await pdfjsLib.getDocument(fileUrl).promise;
      let fullText = '';
      
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        
        // Preserve line structure for multi-line searches
        let pageText = '';
        let lastY = null;
        
        textContent.items.forEach(item => {
          // Check if we're on a new line based on Y position
          if (lastY !== null && Math.abs(item.transform[5] - lastY) > 5) {
            pageText += '\n';
          } else if (pageText && !pageText.endsWith(' ') && !item.str.startsWith(' ')) {
            pageText += ' ';
          }
          
          pageText += item.str;
          lastY = item.transform[5];
        });
        
        fullText += pageText + '\n';
      }
      
      return fullText;
    } catch (error) {
      console.error('Text extraction failed:', error);
      return '';
    }
  }

  extractPharmaceuticalInfo(text) {
    const info = {};
    
    // Extract batch/lot numbers
    const batchPatterns = [
      /batch\s*(?:no\.?|number)?\s*:?\s*([A-Z0-9\-\/]+)/gi,
      /lot\s*(?:no\.?|number)?\s*:?\s*([A-Z0-9\-\/]+)/gi
    ];
    
    const batches = [];
    batchPatterns.forEach(pattern => {
      const matches = text.matchAll(pattern);
      for (const match of matches) {
        batches.push(match[1]);
      }
    });
    info.batchNumbers = [...new Set(batches)];

    // Extract expiry dates
    const expiryPatterns = [
      /expir(?:y|ation)\s*date\s*:?\s*(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/gi,
      /exp\s*:?\s*(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/gi,
      /use\s*by\s*:?\s*(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/gi
    ];
    
    const expiries = [];
    expiryPatterns.forEach(pattern => {
      const matches = text.matchAll(pattern);
      for (const match of matches) {
        expiries.push(match[1]);
      }
    });
    info.expiryDates = [...new Set(expiries)];

    // Extract API information
    const apiPatterns = [
      /active\s*(?:pharmaceutical\s*)?ingredient\s*:?\s*([A-Za-z\s\-]+?)(?:\n|\.|\d)/gi,
      /API\s*:?\s*([A-Za-z\s\-]+?)(?:\n|\.|\d)/gi
    ];
    
    const apis = [];
    apiPatterns.forEach(pattern => {
      const matches = text.matchAll(pattern);
      for (const match of matches) {
        apis.push(match[1].trim());
      }
    });
    info.activeIngredients = [...new Set(apis)];

    // Extract manufacturer
    const manufacturerPatterns = [
      /manufactur(?:ed|er)\s*(?:by)?\s*:?\s*([A-Za-z\s&\.,\-]+?)(?:\n|address|phone)/gi,
      /company\s*:?\s*([A-Za-z\s&\.,\-]+?)(?:\n|address|phone)/gi
    ];
    
    const manufacturers = [];
    manufacturerPatterns.forEach(pattern => {
      const matches = text.matchAll(pattern);
      for (const match of matches) {
        manufacturers.push(match[1].trim());
      }
    });
    info.manufacturers = [...new Set(manufacturers)];

    // Extract key pharmaceutical terms
    const keyTerms = [
      'GMP', 'Good Manufacturing Practice', 'USP', 'BP', 'Ph.Eur',
      'stability', 'dissolution', 'assay', 'impurity', 'content uniformity',
      'certificate of analysis', 'specification', 'method validation'
    ];
    
    info.foundTerms = keyTerms.filter(term => 
      text.toLowerCase().includes(term.toLowerCase())
    );

    return info;
  }

  async analyzeDocument(fileUrl) {
    const text = await this.extractTextFromPDF(fileUrl);
    const info = this.extractPharmaceuticalInfo(text);
    
    return {
      extractedText: text,
      pharmaceuticalInfo: info,
      analysisDate: new Date().toISOString()
    };
  }

  // Auto-highlight terms for pharmaceutical documents
  getAutoHighlightTerms() {
    return [
      'API', 'Active Pharmaceutical Ingredient', 'batch', 'lot number',
      'expiry', 'expiration', 'manufacturing date', 'shelf life',
      'stability', 'impurity', 'assay', 'dissolution', 'content uniformity',
      'GMP', 'Good Manufacturing Practice', 'specification', 'certificate',
      'analysis', 'method validation', 'reference standard', 'USP', 'BP', 'Ph.Eur',
      'sterility', 'endotoxin', 'bioburden', 'microbial', 'potency'
    ];
  }
}

export const documentAnalysisService = new DocumentAnalysisService();