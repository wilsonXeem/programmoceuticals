import mammoth from 'mammoth';
import Fuse from 'fuse.js';
import { documentAnalysisService } from './documentAnalysisService';
import { searchCacheService } from './searchCacheService';

const SEARCHABLE_EXTENSIONS = new Set(['pdf', 'doc', 'docx', 'txt']);
const MAX_INDEXABLE_FILE_SIZE = 75 * 1024 * 1024; // 75MB per document for content extraction
const MAX_INDEXED_TEXT_LENGTH = 250000;
const PDF_INDEX_MAX_PAGES = 50;
const INDEX_BATCH_SIZE = 2;
const MAX_SUGGESTIONS = 10;
const INDEX_SCHEMA_VERSION = 2;

const normalizeText = (value = '') => value.toLowerCase();
const yieldToMainThread = () => new Promise((resolve) => setTimeout(resolve, 0));

class EnhancedSearchService {
  constructor() {
    this.searchIndex = null;
    this.fuzzyIndex = null;
    this.fuzzyThreshold = 0.3;
    this.documents = [];
    this.isIndexing = false;
    this.indexSignature = null;
  }

  getExtension(fileName = '') {
    return fileName.toLowerCase().split('.').pop();
  }

  canIndexContent(file) {
    const extension = this.getExtension(file.name || file.filename);
    if (!SEARCHABLE_EXTENSIONS.has(extension)) {
      return false;
    }

    const fileSize = Number(file.size || 0);
    return fileSize <= MAX_INDEXABLE_FILE_SIZE;
  }

  truncateText(text = '') {
    if (text.length <= MAX_INDEXED_TEXT_LENGTH) {
      return text;
    }

    return text.slice(0, MAX_INDEXED_TEXT_LENGTH);
  }

  async extractTextFromFile(file, fileBlob) {
    const fileName = file.name || file.filename || '';
    const ext = this.getExtension(fileName);

    try {
      switch (ext) {
        case 'pdf': {
          const blobUrl = URL.createObjectURL(fileBlob);
          try {
            const text = await documentAnalysisService.extractTextFromPDF(blobUrl, {
              maxPages: PDF_INDEX_MAX_PAGES,
              maxChars: MAX_INDEXED_TEXT_LENGTH,
            });
            return this.truncateText(text);
          } finally {
            URL.revokeObjectURL(blobUrl);
          }
        }

        case 'docx':
        case 'doc': {
          const result = await mammoth.extractRawText({ arrayBuffer: await fileBlob.arrayBuffer() });
          return this.truncateText(result.value || '');
        }

        case 'txt': {
          const text = await fileBlob.slice(0, MAX_INDEXED_TEXT_LENGTH).text();
          return this.truncateText(text);
        }

        default:
          return '';
      }
    } catch (error) {
      console.error(`Failed to extract text from ${fileName}:`, error);
      return '';
    }
  }

  async getFileText(file, getFileBlob) {
    if (!this.canIndexContent(file)) {
      return '';
    }

    const fileHash = `${INDEX_SCHEMA_VERSION}:${searchCacheService.generateFileHash(file)}`;
    const filePath = file.path || '';
    const normalizedFile = { ...file, name: file.name || file.filename || '' };

    // Try cache first
    let text = null;
    try {
      text = await searchCacheService.getExtractedText(filePath, fileHash);
      if (text !== null) {
        return this.truncateText(text);
      }
    } catch (error) {
      console.warn(`Search cache read failed for ${filePath}:`, error);
    }

    // Extract and cache
    try {
      const fileData = await getFileBlob(filePath);
      if (fileData?.blob) {
        text = await this.extractTextFromFile(normalizedFile, fileData.blob);
        try {
          await searchCacheService.storeExtractedText(filePath, text, fileHash);
        } catch (cacheWriteError) {
          console.warn(`Search cache write failed for ${filePath}:`, cacheWriteError);
        }
        return text;
      }
    } catch (error) {
      console.error(`Failed to get file text for ${filePath}:`, error);
    }

    return '';
  }

  extractModuleFromPath(path) {
    const match = path.toLowerCase().match(/module\s*(\d+)/);
    return match ? `Module ${match[1]}` : 'Unknown';
  }

  getFilesSignature(files) {
    let hash = 2166136261;

    files.forEach((file) => {
      const signaturePart = `${file.path || ''}|${file.size || 0}|${file.lastModified || 0}`;
      for (let i = 0; i < signaturePart.length; i++) {
        hash ^= signaturePart.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
      }
    });

    return `${INDEX_SCHEMA_VERSION}:${files.length}:${hash >>> 0}`;
  }

  createDocumentRecord(file) {
    const filename = file.name || file.filename || '';
    const extension = this.getExtension(filename);
    const path = file.path || '';
    const module = this.extractModuleFromPath(path);

    return {
      id: path,
      filename,
      path,
      module,
      extension,
      size: file.size || 0,
      content: '',
      filenameLower: normalizeText(filename),
      pathLower: normalizeText(path),
      moduleLower: normalizeText(module),
      contentLower: '',
    };
  }

  buildFuzzyIndex(threshold = 0.3) {
    this.fuzzyThreshold = threshold;
    this.fuzzyIndex = new Fuse(this.documents, {
      keys: [
        { name: 'filename', weight: 0.45 },
        { name: 'path', weight: 0.25 },
        { name: 'module', weight: 0.2 },
        { name: 'content', weight: 0.1 },
      ],
      threshold,
      includeScore: true,
      includeMatches: true,
      ignoreLocation: true,
      minMatchCharLength: 2,
    });

    // Keep legacy field name for compatibility where callers check readiness.
    this.searchIndex = this.fuzzyIndex;
  }

  async buildSearchIndex(files, getFileBlob, onProgress) {
    const signature = this.getFilesSignature(files);
    if (this.indexSignature === signature && this.documents.length === files.length) {
      if (onProgress) {
        onProgress({ current: files.length, total: files.length, file: 'Search index reused' });
      }
      return this.searchIndex;
    }

    this.isIndexing = true;
    this.documents = files.map((file) => this.createDocumentRecord(file));
    this.fuzzyIndex = null;

    const indexableDocuments = this.documents.filter((doc) => this.canIndexContent(doc));
    const totalIndexable = indexableDocuments.length;
    let processed = 0;

    if (totalIndexable === 0 && onProgress) {
      onProgress({ current: 0, total: 0, file: '' });
    }

    try {
      for (let i = 0; i < indexableDocuments.length; i += INDEX_BATCH_SIZE) {
        const batch = indexableDocuments.slice(i, i + INDEX_BATCH_SIZE);
        const batchResults = await Promise.all(
          batch.map(async (doc) => {
            const content = await this.getFileText(doc, getFileBlob);
            return { doc, content };
          })
        );

        batchResults.forEach(({ doc, content }) => {
          doc.content = content;
          doc.contentLower = normalizeText(content);
          processed += 1;

          if (onProgress) {
            onProgress({
              current: processed,
              total: totalIndexable,
              file: doc.filename,
            });
          }
        });

        await yieldToMainThread();
      }

      this.buildFuzzyIndex();
      this.indexSignature = signature;
      return this.searchIndex;
    } finally {
      this.isIndexing = false;
    }
  }

  enrichResult(doc, queryLower) {
    const firstMatchIndex = doc.contentLower.indexOf(queryLower);
    let context = '';
    let matchCount = 0;

    if (firstMatchIndex !== -1) {
      let cursor = firstMatchIndex;
      while (cursor !== -1) {
        matchCount += 1;
        cursor = doc.contentLower.indexOf(queryLower, cursor + queryLower.length);
      }

      const start = Math.max(0, firstMatchIndex - 50);
      const end = Math.min(doc.content.length, firstMatchIndex + queryLower.length + 50);
      context = doc.content.slice(start, end);
    }

    return {
      id: doc.id,
      filename: doc.filename,
      path: doc.path,
      module: doc.module,
      extension: doc.extension,
      content: doc.content,
      size: doc.size,
      matchCount,
      context,
      score: doc.score,
      matches: doc.matches,
    };
  }

  searchContent(query, options = {}) {
    const {
      searchType = 'fuzzy', // 'exact', 'fuzzy', 'lunr'
      fuzzyThreshold = 0.3,
      maxResults = 50,
    } = options;

    const queryLower = normalizeText(query.trim());
    if (!queryLower) {
      return [];
    }

    let results = [];

    switch (searchType) {
      case 'fuzzy': {
        if (!this.fuzzyIndex || this.fuzzyThreshold !== fuzzyThreshold) {
          this.buildFuzzyIndex(fuzzyThreshold);
        }

        const fuseResults = this.fuzzyIndex.search(queryLower, { limit: maxResults });
        results = fuseResults.map((result) => ({
          ...result.item,
          score: result.score,
          matches: result.matches,
        }));
        break;
      }

      case 'lunr':
      case 'exact':
      default: {
        const metadataMatches = [];
        const contentMatches = [];

        for (const doc of this.documents) {
          const hasMetadataMatch =
            doc.filenameLower.includes(queryLower) ||
            doc.pathLower.includes(queryLower) ||
            doc.moduleLower.includes(queryLower);
          const hasContentMatch = doc.contentLower.includes(queryLower);

          if (!hasMetadataMatch && !hasContentMatch) {
            continue;
          }

          if (hasMetadataMatch) {
            metadataMatches.push(doc);
          } else {
            contentMatches.push(doc);
          }

          if (metadataMatches.length + contentMatches.length >= maxResults * 3) {
            break;
          }
        }

        results = [...metadataMatches, ...contentMatches].slice(0, maxResults);
        break;
      }
    }

    return results.map((doc) => this.enrichResult(doc, queryLower)).slice(0, maxResults);
  }

  getSearchSuggestions(query) {
    const queryLower = normalizeText(query.trim());
    if (!queryLower || queryLower.length < 2) {
      return [];
    }

    const suggestions = new Set();
    for (const doc of this.documents) {
      if (doc.filenameLower.includes(queryLower)) {
        suggestions.add(doc.filename);
      }

      if (doc.moduleLower.includes(queryLower)) {
        suggestions.add(doc.module);
      }

      if (suggestions.size >= MAX_SUGGESTIONS) {
        break;
      }
    }

    return Array.from(suggestions);
  }

  filterByFileType(results, extensions) {
    if (!extensions || extensions.length === 0) return results;
    return results.filter((doc) => extensions.includes(doc.extension));
  }

  filterByModule(results, modules) {
    if (!modules || modules.length === 0) return results;
    return results.filter((doc) => modules.includes(doc.module));
  }
}

export const enhancedSearchService = new EnhancedSearchService();
