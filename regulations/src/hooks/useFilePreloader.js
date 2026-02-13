import { useCallback, useRef, useEffect } from 'react';

export const useFilePreloader = (files, loadFileFn, options = {}) => {
  const {
    preloadCount = 3,
    preloadDelay = 500,
    maxConcurrent = 2
  } = options;

  const preloadQueueRef = useRef(new Set());
  const activePreloadsRef = useRef(new Set());
  const preloadedFilesRef = useRef(new Set());

  const preloadFile = useCallback(async (filePath) => {
    if (preloadedFilesRef.current.has(filePath) || 
        activePreloadsRef.current.has(filePath)) {
      return;
    }

    activePreloadsRef.current.add(filePath);
    
    try {
      await loadFileFn(filePath);
      preloadedFilesRef.current.add(filePath);
    } catch (error) {
      console.error('Preload failed:', filePath, error);
    } finally {
      activePreloadsRef.current.delete(filePath);
      preloadQueueRef.current.delete(filePath);
    }
  }, [loadFileFn]);

  const preloadNextFiles = useCallback((currentFilePath) => {
    const currentIndex = files.findIndex(f => f.path === currentFilePath);
    if (currentIndex === -1) return;

    let preloadedCount = 0;
    for (let i = 1; i <= preloadCount && preloadedCount < maxConcurrent; i++) {
      const nextIndex = currentIndex + i;
      if (nextIndex < files.length) {
        const nextFile = files[nextIndex];
        if (!preloadQueueRef.current.has(nextFile.path) && 
            !preloadedFilesRef.current.has(nextFile.path) &&
            !activePreloadsRef.current.has(nextFile.path)) {
          
          preloadQueueRef.current.add(nextFile.path);
          setTimeout(() => preloadFile(nextFile.path), i * preloadDelay);
          preloadedCount++;
        }
      }
    }
  }, [files, preloadCount, maxConcurrent, preloadDelay, preloadFile]);

  const preloadPreviousFiles = useCallback((currentFilePath) => {
    const currentIndex = files.findIndex(f => f.path === currentFilePath);
    if (currentIndex === -1) return;

    let preloadedCount = 0;
    for (let i = 1; i <= Math.min(2, preloadCount) && preloadedCount < maxConcurrent; i++) {
      const prevIndex = currentIndex - i;
      if (prevIndex >= 0) {
        const prevFile = files[prevIndex];
        if (!preloadQueueRef.current.has(prevFile.path) && 
            !preloadedFilesRef.current.has(prevFile.path) &&
            !activePreloadsRef.current.has(prevFile.path)) {
          
          preloadQueueRef.current.add(prevFile.path);
          setTimeout(() => preloadFile(prevFile.path), i * preloadDelay);
          preloadedCount++;
        }
      }
    }
  }, [files, preloadCount, maxConcurrent, preloadDelay, preloadFile]);

  const preloadAdjacentFiles = useCallback((currentFilePath) => {
    preloadNextFiles(currentFilePath);
    preloadPreviousFiles(currentFilePath);
  }, [preloadNextFiles, preloadPreviousFiles]);

  const clearPreloadCache = useCallback(() => {
    preloadQueueRef.current.clear();
    preloadedFilesRef.current.clear();
  }, []);

  const getPreloadStats = useCallback(() => {
    return {
      preloaded: preloadedFilesRef.current.size,
      active: activePreloadsRef.current.size,
      queued: preloadQueueRef.current.size
    };
  }, []);

  return {
    preloadNextFiles,
    preloadAdjacentFiles,
    clearPreloadCache,
    getPreloadStats,
    isPreloaded: (filePath) => preloadedFilesRef.current.has(filePath)
  };
};