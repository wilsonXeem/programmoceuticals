import { useCallback, useRef } from 'react';

export const useRequestDeduplication = () => {
  const activeRequestsRef = useRef(new Map());

  const deduplicatedRequest = useCallback(async (key, requestFn) => {
    // If request is already in progress, return existing promise
    if (activeRequestsRef.current.has(key)) {
      return activeRequestsRef.current.get(key);
    }

    // Create new request
    const promise = requestFn().finally(() => {
      activeRequestsRef.current.delete(key);
    });

    activeRequestsRef.current.set(key, promise);
    return promise;
  }, []);

  return { deduplicatedRequest };
};