import { useCallback, useRef } from 'react';

export const usePerformanceMonitor = () => {
  const metricsRef = useRef({
    fileLoadTimes: new Map(),
    searchTimes: new Map(),
    memoryUsage: []
  });

  const startTimer = useCallback((operation, key) => {
    const startTime = performance.now();
    return () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      if (!metricsRef.current[operation]) {
        metricsRef.current[operation] = new Map();
      }
      
      metricsRef.current[operation].set(key, duration);
      return duration;
    };
  }, []);

  const recordMemoryUsage = useCallback(() => {
    if (performance.memory) {
      metricsRef.current.memoryUsage.push({
        timestamp: Date.now(),
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit
      });
      
      // Keep only last 100 measurements
      if (metricsRef.current.memoryUsage.length > 100) {
        metricsRef.current.memoryUsage = metricsRef.current.memoryUsage.slice(-100);
      }
    }
  }, []);

  const getMetrics = useCallback(() => {
    return {
      avgFileLoadTime: Array.from(metricsRef.current.fileLoadTimes.values())
        .reduce((sum, time, _, arr) => sum + time / arr.length, 0),
      avgSearchTime: Array.from(metricsRef.current.searchTimes.values())
        .reduce((sum, time, _, arr) => sum + time / arr.length, 0),
      memoryTrend: metricsRef.current.memoryUsage.slice(-10)
    };
  }, []);

  return { startTimer, recordMemoryUsage, getMetrics };
};