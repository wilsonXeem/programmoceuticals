import React, { useState, useCallback, useMemo } from 'react';
import SearchBar from './SearchBar';
import VirtualizedTree from './VirtualizedTree';
import SearchErrorBoundary from './SearchErrorBoundary';
import { contentSearchService } from '../services/contentSearchService';
import { enhancedSearchService } from '../services/enhancedSearchService';

const SearchableTree = ({ node, activeFilePath, onFileSelected, maxHeight = 400 }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('tree');
  const [contentResults, setContentResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(async (term, type) => {
    setSearchTerm(term);
    setSearchType(type);
    
    if (!term.trim() || type === 'tree') {
      setContentResults([]);
      return;
    }

    setLoading(true);
    try {
      let results = [];
      
      switch (type) {
        case 'content':
          results = await contentSearchService.quickSearch([term]);
          break;
        case 'drug':
          const allFiles = await contentSearchService.getAllDossierFiles();
          results = await contentSearchService.searchForDrugInfo(allFiles, term);
          break;
        case 'regulatory':
          const regFiles = await contentSearchService.getAllDossierFiles();
          results = await contentSearchService.searchForRegulatoryRefs(regFiles);
          break;
      }
      
      setContentResults(results);
    } catch (error) {
      console.error('Search failed:', error);
      setContentResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleClear = useCallback(() => {
    setSearchTerm('');
    setContentResults([]);
  }, []);

  const filteredNode = useMemo(() => {
    if (!searchTerm || searchType !== 'tree') return node;
    
    const filterNode = (n) => {
      if (!n) return null;
      
      const matches = n.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                     n.path.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (n.type === 'file') {
        return matches ? n : null;
      }
      
      const filteredChildren = n.children?.map(filterNode).filter(Boolean) || [];
      
      if (matches || filteredChildren.length > 0) {
        return { ...n, children: filteredChildren };
      }
      
      return null;
    };
    
    return filterNode(node);
  }, [node, searchTerm, searchType]);

  return (
    <SearchErrorBoundary>
    <div>
      <SearchBar 
        onSearch={handleSearch}
        onClear={handleClear}
        placeholder="Search files, content, drugs, or regulatory terms..."
      />
      
      {loading && (
        <div style={{ padding: '4px', textAlign: 'center', color: '#666', fontSize: '0.7rem' }}>
          Searching...
        </div>
      )}
      
      {searchType !== 'tree' && contentResults.length > 0 && (
        <div style={{ 
          maxHeight: '150px', 
          overflow: 'auto', 
          border: '1px solid #ddd', 
          borderRadius: '2px',
          margin: '4px 0',
          background: '#fff'
        }}>
          <div style={{ padding: '4px', background: '#f5f5f5', borderBottom: '1px solid #ddd', fontSize: '0.65rem', fontWeight: 'bold' }}>
            Content Results ({contentResults.length})
          </div>
          {contentResults.map((result, index) => (
            <div key={index} style={{ 
              padding: '4px', 
              borderBottom: '1px solid #eee',
              cursor: 'pointer'
            }}
            onClick={() => onFileSelected({ path: result.filePath, name: result.filePath.split('/').pop(), type: 'file' })}
            >
              <div style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#333' }}>
                📄 {result.filePath.split('/').pop()}
              </div>
              {result.matches?.slice(0, 2).map((match, i) => (
                <div key={i} style={{ fontSize: '0.6rem', color: '#666', marginTop: '2px' }}>
                  "{match.term}": {match.context.substring(0, 80)}...
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      
      <VirtualizedTree
        node={filteredNode || { children: [] }}
        activeFilePath={activeFilePath}
        onFileSelected={onFileSelected}
        maxHeight={maxHeight}
        searchTerm={searchType === 'tree' ? searchTerm : ''}
      />
    </div>
    </SearchErrorBoundary>
  );
};

export default SearchableTree;