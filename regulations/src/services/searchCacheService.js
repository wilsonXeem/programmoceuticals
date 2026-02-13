import { openDB } from 'idb';

class SearchCacheService {
  constructor() {
    this.dbName = 'nafdac-search-cache';
    this.version = 1;
    this.db = null;
  }

  async init() {
    if (this.db) return this.db;
    
    this.db = await openDB(this.dbName, this.version, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('textCache')) {
          const store = db.createObjectStore('textCache', { keyPath: 'filePath' });
          store.createIndex('timestamp', 'timestamp');
        }
      },
    });
    
    return this.db;
  }

  async storeExtractedText(filePath, text, fileHash) {
    await this.init();
    await this.db.put('textCache', {
      filePath,
      text,
      fileHash,
      timestamp: Date.now()
    });
  }

  async getExtractedText(filePath, fileHash) {
    await this.init();
    const cached = await this.db.get('textCache', filePath);
    return cached?.fileHash === fileHash ? cached.text : null;
  }

  async clearOldCache(maxAge = 7 * 24 * 60 * 60 * 1000) { // 7 days
    await this.init();
    const cutoff = Date.now() - maxAge;
    const tx = this.db.transaction('textCache', 'readwrite');
    const index = tx.store.index('timestamp');
    
    for await (const cursor of index.iterate(IDBKeyRange.upperBound(cutoff))) {
      cursor.delete();
    }
  }

  generateFileHash(file) {
    return `${file.path}-${file.size || 0}-${file.lastModified || 0}`;
  }
}

export const searchCacheService = new SearchCacheService();