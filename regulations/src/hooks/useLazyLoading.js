import { useState, useCallback, useRef, useEffect } from 'react';

export const useLazyLoading = (items, loadFn, options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    preloadCount = 2
  } = options;

  const [loadedItems, setLoadedItems] = useState(new Set());
  const [loadingItems, setLoadingItems] = useState(new Set());
  const observerRef = useRef(null);
  const itemRefs = useRef(new Map());

  const loadItem = useCallback(async (item) => {
    if (loadedItems.has(item.id) || loadingItems.has(item.id)) return;

    setLoadingItems(prev => new Set(prev).add(item.id));
    
    try {
      await loadFn(item);
      setLoadedItems(prev => new Set(prev).add(item.id));
    } catch (error) {
      console.error('Failed to load item:', item.id, error);
    } finally {
      setLoadingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(item.id);
        return newSet;
      });
    }
  }, [loadFn, loadedItems, loadingItems]);

  const preloadNearbyItems = useCallback((currentIndex) => {
    for (let i = 1; i <= preloadCount; i++) {
      const nextIndex = currentIndex + i;
      if (nextIndex < items.length) {
        const item = items[nextIndex];
        if (!loadedItems.has(item.id) && !loadingItems.has(item.id)) {
          setTimeout(() => loadItem(item), i * 100);
        }
      }
    }
  }, [items, loadItem, loadedItems, loadingItems, preloadCount]);

  const setItemRef = useCallback((element, item, index) => {
    if (element) {
      itemRefs.current.set(item.id, { element, item, index });
    } else {
      itemRefs.current.delete(item.id);
    }
  }, []);

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const itemData = Array.from(itemRefs.current.values())
                .find(({ element }) => element === entry.target);
              
              if (itemData) {
                loadItem(itemData.item);
                preloadNearbyItems(itemData.index);
              }
            }
          });
        },
        { threshold, rootMargin }
      );
    }

    const observer = observerRef.current;
    itemRefs.current.forEach(({ element }) => {
      observer.observe(element);
    });

    return () => {
      itemRefs.current.forEach(({ element }) => {
        observer.unobserve(element);
      });
    };
  }, [loadItem, preloadNearbyItems, threshold, rootMargin]);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return {
    loadedItems,
    loadingItems,
    setItemRef,
    loadItem
  };
};