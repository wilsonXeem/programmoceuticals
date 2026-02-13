import mammoth from 'mammoth';
import Fuse from 'fuse.js';
import lunr from 'lunr';
import { documentAnalysisService } from './documentAnalysisService';
import { searchCacheService } from './searchCacheService';

class EnhancedSearchService {
  constructor() {
    this.searchIndex = null;
    this.documents = [];
    this.isIndexing = false;
  }

  async extractTextFromFile(file, fileBlob) {
    const ext = file.name.toLowerCase().split('.').pop();
    
    try {
      switch (ext) {
        case 'pdf':
          return await documentAnalysisService.extractTextFromPDF(URL.createObjectURL(fileBlob));
        
        case 'docx':
        case 'doc':
          const result = await mammoth.extractRawText({ arrayBuffer: await fileBlob.arrayBuffer() });
          return result.value;
        
        case 'txt':
          return await fileBlob.text();
        
        default:
          return '';
      }
    } catch (error) {
      console.error(`Failed to extract text from ${file.name}:`, error);
      return '';
    }
  }

  async getFileText(file, getFileBlob) {
    const fileHash = searchCacheService.generateFileHash(file);
    
    // Try cache first
    let text = await searchCacheService.getExtractedText(file.path, fileHash);
    if (text !== null) {
      return text;
    }

    // Extract and cache
    try {
      const fileData = await getFileBlob(file.path);
      if (fileData?.blob) {
        text = await this.extractTextFromFile(file, fileData.blob);
        await searchCacheService.storeExtractedText(file.path, text, fileHash);
        return text;
      }
    } catch (error) {
      console.error(`Failed to get file text for ${file.path}:`, error);
    }
    
    return '';
  }

  extractModuleFromPath(path) {
    const match = path.toLowerCase().match(/module\s*(\d+)/);
    return match ? `Module ${match[1]}` : 'Unknown';
  }

  async buildSearchIndex(files, getFileBlob, onProgress) {
    this.isIndexing = true;
    this.documents = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      if (onProgress) {
        onProgress({ current: i + 1, total: files.length, file: file.name });
      }

      const content = await this.getFileText(file, getFileBlob);
      
      const doc = {
        id: file.path,
        filename: file.name,
        path: file.path,
        module: this.extractModuleFromPath(file.path),
        extension: file.name.split('.').pop().toLowerCase(),
        content: content,
        size: file.size || 0
      };
      
      this.documents.push(doc);
    }

    // Build Lunr index
    const documents = this.documents;
    this.searchIndex = lunr(function() {
      this.field('filename', { boost: 10 });
      this.field('path', { boost: 5 });
      this.field('module', { boost: 8 });
      this.field('content');
      this.ref('id');
      
      documents.forEach(doc => this.add(doc));
    });

    this.isIndexing = false;
    return this.searchIndex;
  }

  searchContent(query, options = {}) {
    const {
      searchType = 'fuzzy', // 'exact', 'fuzzy', 'lunr'
      fuzzyThreshold = 0.3,
      maxResults = 50
    } = options;

    if (!query.trim()) return [];

    let results = [];

    switch (searchType) {
      case 'exact':
        results = this.documents.filter(doc => 
          doc.filename.toLowerCase().includes(query.toLowerCase()) ||
          doc.path.toLowerCase().includes(query.toLowerCase()) ||
          doc.content.toLowerCase().includes(query.toLowerCase())
        );
        break;

      case 'fuzzy':
        const fuse = new Fuse(this.documents, {
          keys: [
            { name: 'filename', weight: 0.4 },
            { name: 'path', weight: 0.2 },
            { name: 'module', weight: 0.3 },
            { name: 'content', weight: 0.1 }
          ],
          threshold: fuzzyThreshold,
          includeScore: true,
          includeMatches: true
        });
        
        const fuseResults = fuse.search(query);
        results = fuseResults.map(result => ({
          ...result.item,
          score: result.score,
          matches: result.matches
        }));
        break;

      case 'lunr':
        if (this.searchIndex) {
          const lunrResults = this.searchIndex.search(query);
          results = lunrResults.map(result => {
            const doc = this.documents.find(d => d.id === result.ref);
            return { ...doc, score: result.score };
          });
        }
        break;
    }

    // Add match counts and context
    results = results.map(doc => {
      const content = doc.content.toLowerCase();
      const queryLower = query.toLowerCase();
      const matches = (content.match(new RegExp(queryLower, 'g')) || []).length;
      
      // Extract context snippet
      const index = content.indexOf(queryLower);
      let context = '';
      if (index !== -1) {
        const start = Math.max(0, index - 50);
        const end = Math.min(content.length, index + query.length + 50);
        context = doc.content.substring(start, end);
      }

      return {
        ...doc,
        matchCount: matches,
        context: context
      };
    });

    return results.slice(0, maxResults);
  }

  getSearchSuggestions(query) {
    if (!query.trim() || query.length < 2) return [];

    const suggestions = new Set();
    const queryLower = query.toLowerCase();

    this.documents.forEach(doc => {
      // Add filename suggestions
      if (doc.filename.toLowerCase().includes(queryLower)) {
        suggestions.add(doc.filename);
      }
      
      // Add module suggestions
      if (doc.module.toLowerCase().includes(queryLower)) {
        suggestions.add(doc.module);
      }

      // Add content word suggestions
      const words = doc.content.toLowerCase().split(/\s+/);
      words.forEach(word => {
        if (word.includes(queryLower) && word.length > 3) {
          suggestions.add(word);
        }
      });
    });

    return Array.from(suggestions).slice(0, 10);
  }

  filterByFileType(results, extensions) {
    if (!extensions || extensions.length === 0) return results;
    return results.filter(doc => extensions.includes(doc.extension));
  }

  filterByModule(results, modules) {
    if (!modules || modules.length === 0) return results;
    return results.filter(doc => modules.includes(doc.module));
  }
}

export const enhancedSearchService = new EnhancedSearchService();