import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { searchHistoryService } from '../services/searchHistoryService';

const SearchBar = ({ onSearch, onClear, placeholder = "Search files and content..." }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('tree');
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);
  
  const debouncedSearch = useDebounce(searchTerm, 300);
  
  useEffect(() => {
    setHistory(searchHistoryService.getRecentSearches());
  }, []);
  
  React.useEffect(() => {
    if (debouncedSearch) {
      searchHistoryService.addSearch(debouncedSearch, searchType);
      setHistory(searchHistoryService.getRecentSearches());
    }
    onSearch(debouncedSearch, searchType);
  }, [debouncedSearch, searchType, onSearch]);

  const handleClear = useCallback(() => {
    setSearchTerm('');
    setShowHistory(false);
    onClear();
  }, [onClear]);
  
  const selectHistoryItem = (item) => {
    setSearchTerm(item.term);
    setSearchType(item.type);
    setShowHistory(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ 
        display: 'flex', 
        gap: '4px', 
        padding: '4px', 
        border: '1px solid #ddd', 
        borderRadius: '2px',
        background: '#f9f9f9'
      }}>
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setShowHistory(history.length > 0)}
          onBlur={() => setTimeout(() => setShowHistory(false), 200)}
          placeholder={placeholder}
          style={{
            flex: 1,
            padding: '2px 4px',
            border: '1px solid #ccc',
            borderRadius: '2px',
            fontSize: '0.65rem',
            height: '20px'
          }}
        />
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          style={{ padding: '3px', border: '1px solid #ccc', borderRadius: '2px', fontSize: '0.7rem' }}
        >
          <option value="tree">Tree</option>
          <option value="content">Content</option>
          <option value="drug">Drug Info</option>
          <option value="regulatory">Regulatory</option>
        </select>
        {searchTerm && (
          <button onClick={handleClear} style={{ padding: '3px 6px', border: 'none', background: '#f44336', color: 'white', borderRadius: '2px', fontSize: '0.7rem' }}>
            ✕
          </button>
        )}
      </div>
      
      {showHistory && history.length > 0 && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: '4px',
          right: '4px',
          background: 'white',
          border: '1px solid #ddd',
          borderRadius: '2px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          zIndex: 1000,
          maxHeight: '120px',
          overflow: 'auto'
        }}>
          <div style={{ padding: '4px', fontSize: '0.65rem', color: '#666', borderBottom: '1px solid #eee' }}>
            Recent Searches
          </div>
          {history.map((item, index) => (
            <div
              key={index}
              onClick={() => selectHistoryItem(item)}
              style={{
                padding: '4px 6px',
                cursor: 'pointer',
                borderBottom: index < history.length - 1 ? '1px solid #f0f0f0' : 'none',
                fontSize: '0.7rem'
              }}
              onMouseEnter={(e) => e.target.style.background = '#f5f5f5'}
              onMouseLeave={(e) => e.target.style.background = 'white'}
            >
              <div style={{ fontWeight: '500' }}>{item.term}</div>
              <div style={{ fontSize: '0.65rem', color: '#666' }}>
                {item.type} • {item.results} results
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;