import { useEffect, useRef, useCallback } from 'react';

export const useIntersectionObserver = (callback, options = {}) => {
  const observerRef = useRef(null);
  const elementsRef = useRef(new Map());

  const observe = useCallback((element, data) => {
    if (!element) return;

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const elementData = elementsRef.current.get(entry.target);
          if (elementData) {
            callback(entry, elementData);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      });
    }

    elementsRef.current.set(element, data);
    observerRef.current.observe(element);
  }, [callback, options]);

  const unobserve = useCallback((element) => {
    if (observerRef.current && element) {
      observerRef.current.unobserve(element);
      elementsRef.current.delete(element);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      elementsRef.current.clear();
    };
  }, []);

  return { observe, unobserve };
};