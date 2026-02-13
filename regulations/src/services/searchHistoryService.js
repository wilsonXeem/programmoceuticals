class SearchHistoryService {
  constructor() {
    this.maxHistory = 20;
    this.storageKey = 'nafdac_search_history';
  }

  getHistory() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    } catch {
      return [];
    }
  }

  addSearch(term, type = 'content', results = 0) {
    if (!term.trim()) return;
    
    const history = this.getHistory();
    const newEntry = {
      term: term.trim(),
      type,
      results,
      timestamp: Date.now()
    };
    
    // Remove duplicates
    const filtered = history.filter(h => h.term !== newEntry.term || h.type !== newEntry.type);
    
    // Add to front and limit size
    const updated = [newEntry, ...filtered].slice(0, this.maxHistory);
    
    localStorage.setItem(this.storageKey, JSON.stringify(updated));
  }

  getRecentSearches(limit = 5) {
    return this.getHistory().slice(0, limit);
  }

  clearHistory() {
    localStorage.removeItem(this.storageKey);
  }
}

export const searchHistoryService = new SearchHistoryService();