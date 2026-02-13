class SmartCacheService {
  constructor(maxSize = 50) {
    this.cache = new Map();
    this.maxSize = maxSize;
    this.accessOrder = new Map(); // Track access order for LRU
  }

  get(key) {
    if (this.cache.has(key)) {
      // Update access time for LRU
      this.accessOrder.set(key, Date.now());
      return this.cache.get(key);
    }
    return null;
  }

  set(key, value) {
    // If at capacity, remove least recently used
    if (this.cache.size >= this.maxSize && !this.cache.has(key)) {
      this.evictLRU();
    }

    this.cache.set(key, value);
    this.accessOrder.set(key, Date.now());
  }

  evictLRU() {
    let oldestKey = null;
    let oldestTime = Infinity;

    for (const [key, time] of this.accessOrder) {
      if (time < oldestTime) {
        oldestTime = time;
        oldestKey = key;
      }
    }

    if (oldestKey) {
      this.delete(oldestKey);
    }
  }

  delete(key) {
    const value = this.cache.get(key);
    if (value && typeof value === 'string' && value.startsWith('blob:')) {
      URL.revokeObjectURL(value);
    }
    this.cache.delete(key);
    this.accessOrder.delete(key);
  }

  clear() {
    // Clean up blob URLs
    for (const [key, value] of this.cache) {
      if (typeof value === 'string' && value.startsWith('blob:')) {
        URL.revokeObjectURL(value);
      }
    }
    this.cache.clear();
    this.accessOrder.clear();
  }

  size() {
    return this.cache.size;
  }

  getStats() {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      keys: Array.from(this.cache.keys())
    };
  }
}

export const smartCacheService = new SmartCacheService();