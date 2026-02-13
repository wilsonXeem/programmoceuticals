import { useState, useCallback } from 'react';

export const useSearchState = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [searchFilters, setSearchFilters] = useState({
    fileTypes: [],
    modules: [],
    dateRange: null
  });

  const addToHistory = useCallback((term, type, results) => {
    const entry = {
      term,
      type,
      timestamp: Date.now(),
      resultCount: results.length
    };
    
    setSearchHistory(prev => [entry, ...prev.slice(0, 49)]);
    setRecentSearches(prev => {
      const filtered = prev.filter(item => item.term !== term);
      return [entry, ...filtered.slice(0, 9)];
    });
  }, []);

  const clearHistory = useCallback(() => {
    setSearchHistory([]);
    setRecentSearches([]);
  }, []);

  const updateFilters = useCallback((newFilters) => {
    setSearchFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  return {
    searchHistory,
    recentSearches,
    searchFilters,
    addToHistory,
    clearHistory,
    updateFilters
  };
};