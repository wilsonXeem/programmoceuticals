class PerformanceMonitor {
  constructor() {
    this.metrics = {
      fileLoadTimes: new Map(),
      searchTimes: new Map(),
      cacheHits: 0,
      cacheMisses: 0,
      preloadedFiles: new Set(),
      memoryUsage: []
    };
  }

  startTimer(operation, key) {
    const timerKey = `${operation}-${key}`;
    performance.mark(`${timerKey}-start`);
    return timerKey;
  }

  endTimer(timerKey) {
    performance.mark(`${timerKey}-end`);
    performance.measure(timerKey, `${timerKey}-start`, `${timerKey}-end`);
    
    const measure = performance.getEntriesByName(timerKey)[0];
    const duration = measure ? measure.duration : 0;
    
    // Clean up marks
    performance.clearMarks(`${timerKey}-start`);
    performance.clearMarks(`${timerKey}-end`);
    performance.clearMeasures(timerKey);
    
    return duration;
  }

  recordFileLoad(filePath, duration, fromCache = false) {
    this.metrics.fileLoadTimes.set(filePath, {
      duration,
      fromCache,
      timestamp: Date.now()
    });
    
    if (fromCache) {
      this.metrics.cacheHits++;
    } else {
      this.metrics.cacheMisses++;
    }
  }

  recordSearch(query, duration, resultCount) {
    this.metrics.searchTimes.set(query, {
      duration,
      resultCount,
      timestamp: Date.now()
    });
  }

  recordPreload(filePath) {
    this.metrics.preloadedFiles.add(filePath);
  }

  recordMemoryUsage() {
    if (performance.memory) {
      this.metrics.memoryUsage.push({
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit,
        timestamp: Date.now()
      });
      
      // Keep only last 100 measurements
      if (this.metrics.memoryUsage.length > 100) {
        this.metrics.memoryUsage = this.metrics.memoryUsage.slice(-100);
      }
    }
  }

  getStats() {
    const fileLoads = Array.from(this.metrics.fileLoadTimes.values());
    const searches = Array.from(this.metrics.searchTimes.values());
    
    return {
      fileLoading: {
        totalLoads: fileLoads.length,
        avgLoadTime: fileLoads.reduce((sum, load) => sum + load.duration, 0) / fileLoads.length || 0,
        cacheHitRate: this.metrics.cacheHits / (this.metrics.cacheHits + this.metrics.cacheMisses) || 0,
        preloadedCount: this.metrics.preloadedFiles.size
      },
      search: {
        totalSearches: searches.length,
        avgSearchTime: searches.reduce((sum, search) => sum + search.duration, 0) / searches.length || 0
      },
      memory: {
        current: this.metrics.memoryUsage[this.metrics.memoryUsage.length - 1],
        peak: this.metrics.memoryUsage.reduce((max, usage) => 
          usage.used > max.used ? usage : max, { used: 0 })
      }
    };
  }

  reset() {
    this.metrics = {
      fileLoadTimes: new Map(),
      searchTimes: new Map(),
      cacheHits: 0,
      cacheMisses: 0,
      preloadedFiles: new Set(),
      memoryUsage: []
    };
  }
}

export const performanceMonitor = new PerformanceMonitor();