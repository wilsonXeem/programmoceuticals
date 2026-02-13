class IntelligentCacheService {
  constructor() {
    this.accessPatterns = new Map();
    this.cacheStrategy = 'lru'; // 'lru', 'lfu', 'adaptive'
    this.maxCacheSize = 50; // Max files to keep in memory
    this.cacheHitThreshold = 3; // Files accessed 3+ times get priority
  }

  recordAccess(filePath) {
    const now = Date.now();
    const existing = this.accessPatterns.get(filePath) || {
      count: 0,
      lastAccess: now,
      firstAccess: now,
      avgTimeBetweenAccess: 0
    };

    existing.count++;
    const timeSinceLastAccess = now - existing.lastAccess;
    existing.avgTimeBetweenAccess = existing.count > 1 
      ? (existing.avgTimeBetweenAccess + timeSinceLastAccess) / 2
      : timeSinceLastAccess;
    existing.lastAccess = now;

    this.accessPatterns.set(filePath, existing);
  }

  shouldPreload(filePath) {
    const pattern = this.accessPatterns.get(filePath);
    if (!pattern) return false;

    // Preload if frequently accessed or recently accessed
    return pattern.count >= this.cacheHitThreshold || 
           (Date.now() - pattern.lastAccess) < 300000; // 5 minutes
  }

  getCacheEvictionCandidates(currentCacheSize) {
    if (currentCacheSize <= this.maxCacheSize) return [];

    const candidates = Array.from(this.accessPatterns.entries())
      .map(([path, pattern]) => ({
        path,
        score: this.calculateEvictionScore(pattern)
      }))
      .sort((a, b) => b.score - a.score) // Higher score = more likely to evict
      .slice(0, currentCacheSize - this.maxCacheSize)
      .map(item => item.path);

    return candidates;
  }

  calculateEvictionScore(pattern) {
    const now = Date.now();
    const timeSinceLastAccess = now - pattern.lastAccess;
    const accessFrequency = pattern.count;
    
    // Higher score = more likely to evict
    // Factors: time since last access (higher = evict), access frequency (lower = evict)
    return (timeSinceLastAccess / 1000) / Math.max(accessFrequency, 1);
  }

  getPreloadPriority(filePath) {
    const pattern = this.accessPatterns.get(filePath);
    if (!pattern) return 0;

    // Higher priority = preload first
    const recency = Math.max(0, 300000 - (Date.now() - pattern.lastAccess)) / 300000;
    const frequency = Math.min(pattern.count / 10, 1);
    
    return (recency * 0.6) + (frequency * 0.4);
  }

  optimizeCacheStrategy(cacheHitRate, avgLoadTime) {
    // Adaptive strategy based on performance metrics
    if (cacheHitRate < 0.3 && avgLoadTime > 1000) {
      this.cacheStrategy = 'lfu'; // Prioritize frequently used files
      this.maxCacheSize = Math.min(this.maxCacheSize + 10, 100);
    } else if (cacheHitRate > 0.8) {
      this.cacheStrategy = 'lru'; // Standard LRU is working well
      this.maxCacheSize = Math.max(this.maxCacheSize - 5, 20);
    }
  }
}

export const intelligentCacheService = new IntelligentCacheService();