import { pdfTextExtractionService } from './pdfTextExtractionService';

class DossierInformationExtractor {
  
  async extractProductInformation(dossier, getFileBlob) {
    const results = {
      productName: null,
      manufacturerName: null,
      manufacturerAddress: null,
      foundIn: [],
      confidence: 0
    };

    // Target files for product information
    const targetFiles = this.findRelevantFiles(dossier);
    
    for (const file of targetFiles) {
      try {
        const fileBlob = await getFileBlob(file.path);
        const textData = await pdfTextExtractionService.extractTextFromPDF(fileBlob, file.path);
        
        const extracted = this.extractFromText(textData.fullText, file.name);
        
        if (extracted.productName || extracted.manufacturerName || extracted.manufacturerAddress) {
          results.foundIn.push({
            file: file.name,
            path: file.path,
            ...extracted
          });
          
          // Use highest confidence results
          if (extracted.productName && (!results.productName || extracted.confidence > results.confidence)) {
            results.productName = extracted.productName;
          }
          if (extracted.manufacturerName && (!results.manufacturerName || extracted.confidence > results.confidence)) {
            results.manufacturerName = extracted.manufacturerName;
          }
          if (extracted.manufacturerAddress && (!results.manufacturerAddress || extracted.confidence > results.confidence)) {
            results.manufacturerAddress = extracted.manufacturerAddress;
          }
          
          results.confidence = Math.max(results.confidence, extracted.confidence);
        }
        
      } catch (error) {
        console.error(`Error extracting from ${file.path}:`, error);
      }
    }
    
    return results;
  }

  findRelevantFiles(dossier) {
    const files = [];
    
    const traverse = (node) => {
      if (node.type === 'file' && node.name.toLowerCase().endsWith('.pdf')) {
        const path = node.path.toLowerCase();
        
        // Priority files for product information
        if (
          path.includes('1.3.1') || // SmPC
          path.includes('1.2.2') || // Registration Form
          path.includes('3.2.p.1') || // Description and Composition
          path.includes('module 1') ||
          path.includes('module 3') ||
          node.name.toLowerCase().includes('smpc') ||
          node.name.toLowerCase().includes('registration') ||
          node.name.toLowerCase().includes('application')
        ) {
          files.push(node);
        }
      }
      
      if (node.children) {
        node.children.forEach(traverse);
      }
    };
    
    traverse(dossier.root);
    
    // Sort by priority
    return files.sort((a, b) => {
      const getPriority = (file) => {
        const path = file.path.toLowerCase();
        if (path.includes('1.3.1') || file.name.toLowerCase().includes('smpc')) return 1;
        if (path.includes('1.2.2') || file.name.toLowerCase().includes('registration')) return 2;
        if (path.includes('3.2.p.1')) return 3;
        return 4;
      };
      return getPriority(a) - getPriority(b);
    });
  }

  extractFromText(text, fileName) {
    const results = {
      productName: null,
      manufacturerName: null,
      manufacturerAddress: null,
      confidence: 0
    };

    // Clean and normalize text for better matching
    const normalizedText = text.replace(/\s+/g, ' ').replace(/[\r\n]+/g, '\n');

    // Enhanced product name patterns
    const productPatterns = [
      /(?:product\s+name|trade\s+name|brand\s+name|proprietary\s+name)[\s:,-]*([^\n\r]{1,100})/gi,
      /(?:name\s+of\s+(?:the\s+)?(?:medicinal\s+)?product)[\s:,-]*([^\n\r]{1,100})/gi,
      /(?:active\s+ingredient|generic\s+name)[\s:,-]*([^\n\r]{1,80})/gi,
      /(?:drug\s+name|medicine\s+name)[\s:,-]*([^\n\r]{1,80})/gi,
      // Table-based extraction
      /product[^\n]*\n[^\n]*([A-Z][^\n]{5,80})/gi,
      // After "Name:" or similar
      /name[\s:,-]+([A-Z][^\n\r]{3,80})/gi
    ];

    // Enhanced manufacturer patterns
    const manufacturerPatterns = [
      /(?:manufacturer|marketing\s+authorization\s+holder|mah)[\s:,-]*([^\n\r]{1,100})/gi,
      /(?:manufactured\s+by|produced\s+by|made\s+by)[\s:,-]*([^\n\r]{1,100})/gi,
      /(?:company\s+name|applicant|holder)[\s:,-]*([^\n\r]{1,100})/gi,
      /(?:pharmaceutical\s+company)[\s:,-]*([^\n\r]{1,100})/gi,
      // Common patterns in Module 1
      /(?:ltd|limited|inc|incorporated|corp|corporation|pharma|pharmaceuticals)[^\n]*([A-Z][^\n]{10,100})/gi,
      // After company identifiers
      /([A-Z][^\n]{10,100}(?:ltd|limited|inc|incorporated|corp|corporation|pharma|pharmaceuticals))/gi
    ];

    // Enhanced address patterns
    const addressPatterns = [
      /(?:address|location|site)[\s:,-]*([^\n\r]{10,200})/gi,
      /(?:manufactured\s+at|production\s+site|facility)[\s:,-]*([^\n\r]{10,200})/gi,
      /(?:\d+[^\n\r]*(?:street|road|avenue|drive|lane|way|plaza|building)[^\n\r]{5,150})/gi,
      // Country-based patterns
      /([^\n]{20,150}(?:nigeria|india|china|usa|uk|germany|france|italy|spain))/gi,
      // Postal code patterns
      /([^\n]{20,150}\d{5,6}[^\n]{0,50})/gi
    ];

    let confidence = 0;
    const allMatches = { product: [], manufacturer: [], address: [] };

    // Collect all matches for each category
    productPatterns.forEach(pattern => {
      const matches = [...normalizedText.matchAll(pattern)];
      matches.forEach(match => allMatches.product.push(this.cleanExtractedText(match[1])));
    });

    manufacturerPatterns.forEach(pattern => {
      const matches = [...normalizedText.matchAll(pattern)];
      matches.forEach(match => allMatches.manufacturer.push(this.cleanExtractedText(match[1])));
    });

    addressPatterns.forEach(pattern => {
      const matches = [...normalizedText.matchAll(pattern)];
      matches.forEach(match => allMatches.address.push(this.cleanExtractedText(match[1])));
    });

    // Select best matches (longest, most complete)
    if (allMatches.product.length > 0) {
      results.productName = this.selectBestMatch(allMatches.product);
      confidence += 30;
    }

    if (allMatches.manufacturer.length > 0) {
      results.manufacturerName = this.selectBestMatch(allMatches.manufacturer);
      confidence += 25;
    }

    if (allMatches.address.length > 0) {
      results.manufacturerAddress = this.selectBestMatch(allMatches.address);
      confidence += 20;
    }

    // Boost confidence for high-priority files
    if (fileName.toLowerCase().includes('smpc') || fileName.toLowerCase().includes('1.3.1')) {
      confidence += 15;
    }

    results.confidence = Math.min(confidence, 100);
    return results;
  }

  selectBestMatch(matches) {
    if (matches.length === 0) return null;
    
    // Filter out very short or invalid matches
    const validMatches = matches.filter(match => 
      match && match.length > 3 && !match.match(/^[\d\s\-\.]+$/)
    );
    
    if (validMatches.length === 0) return matches[0];
    
    // Return the longest valid match (usually most complete)
    return validMatches.reduce((best, current) => 
      current.length > best.length ? current : best
    );
  }

  cleanExtractedText(text) {
    if (!text) return '';
    
    return text
      .replace(/\s+/g, ' ')
      .replace(/^[\s\-:,\.]+|[\s\-:,\.]+$/g, '') // Remove leading/trailing punctuation
      .replace(/[^\w\s\-.,()&\/]/g, '')
      .trim()
      .substring(0, 200); // Increased length limit
  }

  compareWithDMS(extractedInfo, dmsInfo) {
    const comparison = {
      productNameMatch: false,
      manufacturerNameMatch: false,
      manufacturerAddressMatch: false,
      overallMatch: false,
      details: []
    };

    // Compare product name
    if (extractedInfo.productName && dmsInfo.productName) {
      const similarity = this.calculateSimilarity(extractedInfo.productName, dmsInfo.productName);
      comparison.productNameMatch = similarity > 0.7; // Lowered threshold
      comparison.details.push({
        field: 'Product Name',
        dms: dmsInfo.productName,
        dossier: extractedInfo.productName,
        similarity: Math.round(similarity * 100),
        match: comparison.productNameMatch
      });
    } else if (dmsInfo.productName) {
      comparison.details.push({
        field: 'Product Name',
        dms: dmsInfo.productName,
        dossier: extractedInfo.productName || 'Not found in dossier',
        similarity: 0,
        match: false
      });
    }

    // Compare manufacturer name
    if (extractedInfo.manufacturerName && dmsInfo.manufacturerName) {
      const similarity = this.calculateSimilarity(extractedInfo.manufacturerName, dmsInfo.manufacturerName);
      comparison.manufacturerNameMatch = similarity > 0.7; // Lowered threshold
      comparison.details.push({
        field: 'Manufacturer Name',
        dms: dmsInfo.manufacturerName,
        dossier: extractedInfo.manufacturerName,
        similarity: Math.round(similarity * 100),
        match: comparison.manufacturerNameMatch
      });
    } else if (dmsInfo.manufacturerName) {
      comparison.details.push({
        field: 'Manufacturer Name',
        dms: dmsInfo.manufacturerName,
        dossier: extractedInfo.manufacturerName || 'Not found in dossier',
        similarity: 0,
        match: false
      });
    }

    // Compare manufacturer address
    if (extractedInfo.manufacturerAddress && dmsInfo.manufacturerAddress) {
      const similarity = this.calculateSimilarity(extractedInfo.manufacturerAddress, dmsInfo.manufacturerAddress);
      comparison.manufacturerAddressMatch = similarity > 0.6; // Lower threshold for addresses
      comparison.details.push({
        field: 'Manufacturer Address',
        dms: dmsInfo.manufacturerAddress,
        dossier: extractedInfo.manufacturerAddress,
        similarity: Math.round(similarity * 100),
        match: comparison.manufacturerAddressMatch
      });
    } else if (dmsInfo.manufacturerAddress) {
      comparison.details.push({
        field: 'Manufacturer Address',
        dms: dmsInfo.manufacturerAddress,
        dossier: extractedInfo.manufacturerAddress || 'Not found in dossier',
        similarity: 0,
        match: false
      });
    }

    // Overall match if at least 2 out of 3 fields match
    const matchCount = [comparison.productNameMatch, comparison.manufacturerNameMatch, comparison.manufacturerAddressMatch].filter(Boolean).length;
    comparison.overallMatch = matchCount >= 2;

    return comparison;
  }

  calculateSimilarity(str1, str2) {
    if (!str1 || !str2) return 0;
    
    // Normalize strings
    const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
    const s1 = normalize(str1);
    const s2 = normalize(str2);
    
    if (s1 === s2) return 1.0;
    if (s1.length === 0 || s2.length === 0) return 0;
    
    // Check for substring matches (high similarity if one contains the other)
    if (s1.includes(s2) || s2.includes(s1)) {
      const shorter = s1.length < s2.length ? s1 : s2;
      const longer = s1.length >= s2.length ? s1 : s2;
      return shorter.length / longer.length * 0.9; // High but not perfect score
    }
    
    // Word-based similarity for better matching
    const words1 = s1.split(' ').filter(w => w.length > 2);
    const words2 = s2.split(' ').filter(w => w.length > 2);
    
    if (words1.length === 0 || words2.length === 0) {
      return this.levenshteinSimilarity(s1, s2);
    }
    
    let matchingWords = 0;
    const totalWords = Math.max(words1.length, words2.length);
    
    words1.forEach(word1 => {
      const bestMatch = Math.max(...words2.map(word2 => this.levenshteinSimilarity(word1, word2)));
      if (bestMatch > 0.8) matchingWords++;
    });
    
    const wordSimilarity = matchingWords / totalWords;
    const charSimilarity = this.levenshteinSimilarity(s1, s2);
    
    // Combine word and character similarity
    return Math.max(wordSimilarity, charSimilarity);
  }
  
  levenshteinSimilarity(str1, str2) {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
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
    
    const maxLen = Math.max(str1.length, str2.length);
    return (maxLen - matrix[str2.length][str1.length]) / maxLen;
  }
}

export const dossierInformationExtractor = new DossierInformationExtractor();