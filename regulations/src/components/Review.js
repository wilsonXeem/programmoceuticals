import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDossier } from "../hooks/useDossier";
import { useDebounce } from "../hooks/useDebounce";
import { useRequestDeduplication } from "../hooks/useRequestDeduplication";
import { useFilePreloader } from "../hooks/useFilePreloader";
import { useLazyLoading } from "../hooks/useLazyLoading";
import { documentAnalysisService } from '../services/documentAnalysisService';
import { enhancedSearchService } from '../services/enhancedSearchService';
import { searchCacheService } from '../services/searchCacheService';
import { performanceMonitor } from '../services/performanceMonitor';
import { intelligentCacheService } from '../services/intelligentCacheService';
import DossierTree from "./DossierTree";
import EnhancedPDFViewer from './EnhancedPDFViewer';
import VirtualizedFileList from './VirtualizedFileList';
import LazyFileViewer from './LazyFileViewer';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import mammoth from 'mammoth';

const TabContent = ({ activeFile, isLoading, fileUrl, isPdfFile, isDocxFile, getFileIcon, getFileType, wordContent }) => {
  const [wordSearchTerm, setWordSearchTerm] = React.useState("");
  const [wordSearchResults, setWordSearchResults] = React.useState([]);
  const [currentWordMatch, setCurrentWordMatch] = React.useState(0);

  return (
    <div style={{ padding: "1rem" }}>


      {isLoading ? (
        <div style={{
          padding: "2rem",
          textAlign: "center",
          background: "#f8f9fa",
          borderRadius: "8px"
        }}>
          <div style={{
            width: "24px",
            height: "24px",
            border: "3px solid #f3f3f3",
            borderTop: "3px solid #3498db",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "0 auto 0.5rem"
          }}></div>
          <p style={{ fontSize: "0.9rem", color: "#666", margin: 0 }}>Loading...</p>
        </div>
      ) : isPdfFile && fileUrl ? (
        <EnhancedPDFViewer 
          fileUrl={fileUrl} 
          height="calc(95vh - 200px)" 
        />
      ) : isDocxFile && wordContent ? (
        <div style={{ display: "flex", flexDirection: "column", height: "calc(95vh - 200px)" }}>
          {/* Word Search Bar */}
          <div style={{
            padding: "0.5rem",
            borderBottom: "1px solid #e9ecef",
            background: "#f8f9fa",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <input
              type="text"
              placeholder="Search in document..."
              value={wordSearchTerm}
              onChange={(e) => {
                setWordSearchTerm(e.target.value);
                if (e.target.value.trim()) {
                  const text = wordContent.replace(/<[^>]*>/g, ' ').toLowerCase();
                  const searchText = e.target.value.toLowerCase();
                  const matches = [];
                  let index = text.indexOf(searchText);
                  while (index !== -1) {
                    matches.push(index);
                    index = text.indexOf(searchText, index + 1);
                  }
                  setWordSearchResults(matches);
                  setCurrentWordMatch(0);
                } else {
                  setWordSearchResults([]);
                  setCurrentWordMatch(0);
                }
              }}
              style={{
                flex: 1,
                padding: "0.25rem 0.5rem",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "12px"
              }}
            />
            {wordSearchResults.length > 0 && (
              <div style={{ fontSize: "12px", color: "#666" }}>
                {currentWordMatch + 1} of {wordSearchResults.length}
              </div>
            )}
            <button
              onClick={() => setCurrentWordMatch(Math.max(0, currentWordMatch - 1))}
              disabled={wordSearchResults.length === 0 || currentWordMatch === 0}
              style={{
                padding: "0.25rem 0.5rem",
                border: "1px solid #ddd",
                background: "white",
                cursor: wordSearchResults.length === 0 || currentWordMatch === 0 ? "not-allowed" : "pointer",
                fontSize: "12px"
              }}
            >
              ↑
            </button>
            <button
              onClick={() => setCurrentWordMatch(Math.min(wordSearchResults.length - 1, currentWordMatch + 1))}
              disabled={wordSearchResults.length === 0 || currentWordMatch === wordSearchResults.length - 1}
              style={{
                padding: "0.25rem 0.5rem",
                border: "1px solid #ddd",
                background: "white",
                cursor: wordSearchResults.length === 0 || currentWordMatch === wordSearchResults.length - 1 ? "not-allowed" : "pointer",
                fontSize: "12px"
              }}
            >
              ↓
            </button>
          </div>
          
          <div style={{ 
            flex: 1,
            overflow: "auto", 
            background: "white",
            fontSize: "14px",
            lineHeight: "1.6"
          }}>
            <style>{`
              .word-document-content h1 { font-size: 24px; font-weight: bold; margin-bottom: 16px; color: #2c3e50; }
              .word-document-content h2 { font-size: 20px; font-weight: bold; margin-bottom: 14px; color: #34495e; }
              .word-document-content h3 { font-size: 18px; font-weight: bold; margin-bottom: 12px; color: #34495e; }
              .word-document-content p { margin-bottom: 12px; text-align: justify; }
              .word-document-content table { border-collapse: collapse; width: 100%; margin-bottom: 16px; }
              .word-document-content td, .word-document-content th { border: 1px solid #ddd; padding: 8px; text-align: left; }
              .word-document-content th { background-color: #f2f2f2; font-weight: bold; }
              .word-document-content ul, .word-document-content ol { margin-bottom: 12px; padding-left: 20px; }
              .word-document-content li { margin-bottom: 4px; }
              .word-document-content strong { font-weight: bold; }
              .word-document-content em { font-style: italic; }
              .word-document-content img { max-width: 100%; height: auto; margin-bottom: 12px; }
            `}</style>
            <div 
              dangerouslySetInnerHTML={{ 
                __html: wordSearchTerm ? wordContent.replace(
                  new RegExp(`(${wordSearchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'),
                  '<mark style="background: yellow; padding: 1px 2px;">$1</mark>'
                ) : wordContent 
              }}
              className="word-document-content"
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                fontFamily: "'Times New Roman', serif",
                padding: "2rem"
              }}
            />
          </div>
        </div>
      ) : fileUrl ? (
        <div style={{
          padding: "2rem",
          textAlign: "center",
          background: "#f8f9fa",
          borderRadius: "8px"
        }}>
          <p><strong>File:</strong> {activeFile.name}</p>
          <p><strong>Type:</strong> {getFileType(activeFile.name)}</p>
          <a
            href={fileUrl}
            download={activeFile.name}
            className="btn"
            style={{ marginTop: "1rem", textDecoration: "none" }}
          >
            📥 Download File
          </a>
        </div>
      ) : (
        <div style={{
          padding: "2rem",
          textAlign: "center",
          background: "#f8f9fa",
          borderRadius: "8px",
          color: "#666"
        }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            {getFileIcon(activeFile.name)}
          </div>
          <p style={{ fontSize: "1.1rem", fontWeight: "500", margin: "0 0 0.5rem 0" }}>
            {activeFile.name}
          </p>
          <p style={{ fontSize: "0.9rem", margin: "0 0 0.5rem 0" }}>
            {getFileType(activeFile.name)}
          </p>
          <p style={{ fontSize: "0.8rem", color: "#999", margin: 0 }}>
            Click to load content
          </p>
        </div>
      )}
    </div>
  );
};

const Review = () => {
  const { dossier, getFileBlob } = useDossier();
  const getStorageKey = useCallback(
    (suffix) => {
      const dossierKey = dossier?.id || dossier?.name || "default";
      return `review-${suffix}-${dossierKey}`;
    },
    [dossier]
  );
  const [allFiles, setAllFiles] = useState([]);
  const [openTabs, setOpenTabs] = useState([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [fileUrls, setFileUrls] = useState(new Map());
  const [loadedFiles, setLoadedFiles] = useState(new Set());
  const [loadingFiles, setLoadingFiles] = useState(new Set());
  const [wordContent, setWordContent] = useState(new Map());
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchProgress, setSearchProgress] = useState({ current: 0, total: 0, file: '' });
  const [isIndexing, setIsIndexing] = useState(false);
  const [indexProgress, setIndexProgress] = useState({ current: 0, total: 0, file: '' });
  const [searchType, setSearchType] = useState('fuzzy');
  const [searchFilters, setSearchFilters] = useState({ fileTypes: [], modules: [] });
  const [searchSuggestions, setSearchSuggestions] = useState([]);


  const { debouncedCallback: debouncedSearch } = useDebounce((term) => {
    if (term.trim()) {
      performEnhancedSearch(term);
    } else {
      setSearchResults([]);
      setSearchSuggestions([]);
    }
  }, 300);

  const { debouncedCallback: debouncedSuggestions } = useDebounce((term) => {
    if (term.trim() && term.length >= 2) {
      const suggestions = enhancedSearchService.getSearchSuggestions(term);
      setSearchSuggestions(suggestions);
    } else {
      setSearchSuggestions([]);
    }
  }, 200);

  const performEnhancedSearch = async (searchText) => {
    if (!searchText.trim()) {
      setSearchResults([]);
      setSearchSuggestions([]);
      return;
    }
    
    const timer = performanceMonitor.startTimer('search', searchText);
    setIsSearching(true);
    
    try {
      let results = [];
      
      // Check if index is ready
      if (enhancedSearchService.documents.length === 0) {
        console.log('Search index not ready, using simple search');
        // Fallback to simple filename search
        results = allFiles.filter(file => 
          file.name.toLowerCase().includes(searchText.toLowerCase()) ||
          file.path.toLowerCase().includes(searchText.toLowerCase())
        ).map(file => ({ ...file, id: file.path }));
      } else {
        results = enhancedSearchService.searchContent(searchText, {
          searchType: 'exact',
          maxResults: 50
        });
      }
      
      setSearchResults(results);
      
      const duration = performanceMonitor.endTimer(timer);
      performanceMonitor.recordSearch(searchText, duration, results.length);
      
      const suggestions = enhancedSearchService.getSearchSuggestions(searchText);
      setSearchSuggestions(suggestions);
    } catch (error) {
      console.error('Enhanced search failed:', error);
      performanceMonitor.endTimer(timer);
      
      // Fallback to simple search
      const simpleResults = allFiles.filter(file => 
        file.name.toLowerCase().includes(searchText.toLowerCase()) ||
        file.path.toLowerCase().includes(searchText.toLowerCase())
      ).map(file => ({ ...file, id: file.path }));
      setSearchResults(simpleResults);
    } finally {
      setIsSearching(false);
    }
  };





  const observerRef = useRef(null);

  const extractAllFiles = (node, depth = 0, basePath = "") => {
    let files = [];
    
    if (node.children) {
      // Process children in their original tree order - no sorting
      node.children.forEach((child) => {
        if (child.type === "file") {
          files.push({ 
            ...child, 
            depth,
            fullPath: child.path || `${basePath}/${child.name}`.replace(/^\/+/, '')
          });
        } else if (child.type === "folder") {
          // Recursively get files from subfolders
          const childPath = basePath ? `${basePath}/${child.name}` : child.name;
          files = files.concat(extractAllFiles(child, depth + 1, childPath));
        }
      });
    }
    
    // If this is the root call and node itself is a file
    if (node.type === "file" && depth === 0) {
      files.push({ 
        ...node, 
        depth,
        fullPath: node.path || node.name
      });
    }
    
    return files;
  };

  const { deduplicatedRequest } = useRequestDeduplication();
  
  const loadFileUrl = useCallback(
    async (filePath) => {
      return deduplicatedRequest(filePath, async () => {
        const timer = performanceMonitor.startTimer('fileLoad', filePath);
        const isPreloaded = performanceMonitor.metrics.preloadedFiles.has(filePath);
        
        setLoadingFiles((prev) => new Set(prev).add(filePath));

        try {
          const fileData = await getFileBlob(filePath);
          if (fileData && fileData.blob instanceof Blob) {
            const typedBlob = new Blob([fileData.blob], { 
              type: fileData.type || fileData.blob.type || 'application/octet-stream' 
            });
            const blobUrl = URL.createObjectURL(typedBlob);
            setFileUrls((prev) => new Map(prev).set(filePath, blobUrl));
            
            // If it's a Word document, convert to HTML
            const fileName = filePath.split('/').pop().toLowerCase();
            if (fileName.endsWith('.doc') || fileName.endsWith('.docx')) {
              try {
                const arrayBuffer = await fileData.blob.arrayBuffer();
                const result = await mammoth.convertToHtml({ 
                  arrayBuffer,
                  styleMap: [
                    "p[style-name='Heading 1'] => h1:fresh",
                    "p[style-name='Heading 2'] => h2:fresh",
                    "p[style-name='Heading 3'] => h3:fresh",
                    "p[style-name='Title'] => h1.title:fresh",
                    "r[style-name='Strong'] => strong",
                    "r[style-name='Emphasis'] => em"
                  ],
                  includeDefaultStyleMap: true,
                  convertImage: mammoth.images.imgElement(function(image) {
                    return image.read("base64").then(function(imageBuffer) {
                      return {
                        src: "data:" + image.contentType + ";base64," + imageBuffer
                      };
                    });
                  })
                });
                setWordContent(prev => new Map(prev).set(filePath, result.value));
              } catch (wordError) {
                console.error("Failed to convert Word document:", wordError);
              }
            }
            
            const duration = performanceMonitor.endTimer(timer);
            performanceMonitor.recordFileLoad(filePath, duration, isPreloaded);
          }
        } catch (error) {
          console.error("Failed to load file:", filePath, error);
          performanceMonitor.endTimer(timer);
        } finally {
          setLoadingFiles((prev) => {
            const newSet = new Set(prev);
            newSet.delete(filePath);
            return newSet;
          });
        }
      });
    },
    [getFileBlob, deduplicatedRequest]
  );

  const { 
    preloadAdjacentFiles, 
    clearPreloadCache, 
    getPreloadStats,
    isPreloaded 
  } = useFilePreloader(allFiles, loadFileUrl, {
    preloadCount: 3,
    preloadDelay: 300,
    maxConcurrent: 2
  });

  const { loadedItems, loadingItems, setItemRef } = useLazyLoading(
    allFiles,
    (file) => loadFileUrl(file.path),
    { preloadCount: 2 }
  );

  // Save tabs to localStorage whenever they change
  useEffect(() => {
    if (dossier) {
      localStorage.setItem(getStorageKey("openTabs"), JSON.stringify(openTabs));
    }
  }, [openTabs, getStorageKey, dossier]);

  useEffect(() => {
    if (dossier) {
      localStorage.setItem(getStorageKey("activeTabIndex"), activeTabIndex.toString());
    }
  }, [activeTabIndex, getStorageKey, dossier]);

  const filteredFiles = allFiles.filter((file) => {
    // If no search term, show all files
    if (!searchTerm) return true;
    
    // If we have search results, show files that match
    if (Array.isArray(searchResults) && searchResults.length > 0) {
      return searchResults.some(result => 
        result.path === file.path || result.id === file.path
      );
    }
    
    // If no search results yet, show name matches
    return file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           file.path.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    if (dossier) {
      const files = extractAllFiles(dossier.root);
      setAllFiles(files);
      
      // Load saved tabs for this dossier
      const storedTabs = localStorage.getItem(getStorageKey("openTabs"));
      const storedIndex = localStorage.getItem(getStorageKey("activeTabIndex"));
      
      if (storedTabs) {
        try {
          const parsedTabs = JSON.parse(storedTabs);
          setOpenTabs(parsedTabs);
        } catch (e) {
          setOpenTabs([]);
        }
      } else {
        setOpenTabs([]);
      }
      
      if (storedIndex) {
        try {
          setActiveTabIndex(parseInt(storedIndex, 10));
        } catch (e) {
          setActiveTabIndex(0);
        }
      } else {
        setActiveTabIndex(0);
      }
      
      // Clear file caches but keep tabs
      setFileUrls(new Map());
      setWordContent(new Map());
      setLoadedFiles(new Set());
      setLoadingFiles(new Set());
      
      // Initialize enhanced search index
      if (files.length > 0) {
        setIsIndexing(true);
        enhancedSearchService.buildSearchIndex(files, getFileBlob, (progress) => {
          setIndexProgress(progress);
        }).finally(() => {
          setIsIndexing(false);
          setIndexProgress({ current: 0, total: 0, file: '' });
        });
      }
    } else {
      setAllFiles([]);
      setOpenTabs([]);
      setActiveTabIndex(0);
      setFileUrls(new Map());
      setWordContent(new Map());
    }
  }, [dossier, getFileBlob, getStorageKey]);

  // Auto-collapse sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsNavCollapsed(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      fileUrls.forEach((url) => {
        if (url.startsWith("blob:")) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [fileUrls]);

  // Enhanced memory management with intelligent caching
  useEffect(() => {
    const cleanup = () => {
      // Record memory usage
      performanceMonitor.recordMemoryUsage();
      
      // Get intelligent cache eviction candidates
      const evictionCandidates = intelligentCacheService.getCacheEvictionCandidates(fileUrls.size);
      const activeFilePaths = new Set(openTabs.map(tab => tab.path));
      
      // Cleanup unused blob URLs with intelligent prioritization
      fileUrls.forEach((url, path) => {
        const shouldEvict = !activeFilePaths.has(path) && 
                           (evictionCandidates.includes(path) || !intelligentCacheService.shouldPreload(path));
        
        if (shouldEvict && url.startsWith("blob:")) {
          URL.revokeObjectURL(url);
          setFileUrls(prev => {
            const newMap = new Map(prev);
            newMap.delete(path);
            return newMap;
          });
        }
      });
      
      // Optimize cache strategy based on performance
      const stats = performanceMonitor.getStats();
      intelligentCacheService.optimizeCacheStrategy(
        stats.fileLoading.cacheHitRate,
        stats.fileLoading.avgLoadTime
      );
      
      // Force garbage collection of unused PDF resources
      setTimeout(() => {
        if (window.gc) window.gc();
        performanceMonitor.recordMemoryUsage();
      }, 100);
    };
    cleanup();
  }, [activeTabIndex, openTabs, fileUrls]);



  const openFileInTab = (file) => {
    // Record access pattern for intelligent caching
    intelligentCacheService.recordAccess(file.path);
    
    const existingTabIndex = openTabs.findIndex(tab => tab.path === file.path);
    if (existingTabIndex >= 0) {
      setActiveTabIndex(existingTabIndex);
    } else {
      setOpenTabs(prev => [...prev, file]);
      setActiveTabIndex(openTabs.length);
    }
    // Always load the file when opening/switching
    loadFileUrl(file.path);
    // Preload adjacent files for faster navigation
    preloadAdjacentFiles(file.path);
  };

  const closeTab = (index) => {
    const newTabs = openTabs.filter((_, i) => i !== index);
    setOpenTabs(newTabs);
    if (activeTabIndex >= newTabs.length) {
      setActiveTabIndex(Math.max(0, newTabs.length - 1));
    } else if (activeTabIndex > index) {
      setActiveTabIndex(activeTabIndex - 1);
    }
  };

  const getActiveFile = () => {
    return openTabs[activeTabIndex] || null;
  };

  const getFileId = (path) => {
    return "file-" + path.replace(/[^a-zA-Z0-9]/g, "-");
  };

  const isPdf = (fileName) => {
    return fileName.toLowerCase().endsWith(".pdf");
  };

  const isDocx = (fileName) => {
    const ext = fileName.toLowerCase();
    return ext.endsWith('.docx') || ext.endsWith('.doc');
  };

  const isPdfPath = (path) => {
    return path.toLowerCase().endsWith(".pdf");
  };

  const getFileType = (fileName) => {
    const ext = fileName.toLowerCase().split(".").pop();
    const types = {
      pdf: "PDF Document",
      doc: "Word Document",
      docx: "Word Document",
      xls: "Excel Spreadsheet",
      xlsx: "Excel Spreadsheet",
      txt: "Text File",
      html: "HTML Document",
      xml: "XML Document",
      jpg: "JPEG Image",
      png: "PNG Image",
    };
    return types[ext] || "Unknown File Type";
  };

  const getFileIcon = (fileName) => {
    const ext = fileName.toLowerCase().split(".").pop();
    const icons = {
      pdf: "📄",
      doc: "📝", docx: "📝",
      xls: "📊", xlsx: "📊",
      txt: "📄",
      html: "🌐", xml: "🌐",
      jpg: "🖼️", jpeg: "🖼️", png: "🖼️", gif: "🖼️",
      zip: "📦", rar: "📦"
    };
    return icons[ext] || "📄";
  };

  const navigateFiles = (direction) => {
    if (openTabs.length === 0) return;
    
    const newIndex = direction === "next"
      ? Math.min(openTabs.length - 1, activeTabIndex + 1)
      : Math.max(0, activeTabIndex - 1);
    
    if (newIndex !== activeTabIndex) {
      setActiveTabIndex(newIndex);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.target.tagName === "INPUT") return;

      switch (e.key) {
        case "ArrowLeft":
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            navigateFiles("prev");
          }
          break;
        case "ArrowRight":
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            navigateFiles("next");
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [activeTabIndex, openTabs]);

  if (!dossier) {
    return (
      <div className="container">
        <div className="card">
          <h2>Document Review</h2>
          <p>No dossier loaded. Please upload a dossier first.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="review-container" style={{ position: "fixed", top: "80px", left: "0", right: "0", bottom: "0", display: "flex", overflow: "hidden" }}>
      {/* Floating Collapse Button */}
      <button
        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        style={{
          position: "absolute",
          left: isNavCollapsed ? "38px" : "308px",
          top: "20px",
          zIndex: 9999,
          width: "24px",
          height: "24px",
          backgroundColor: "#193441",
          border: "1px solid #193441",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "10px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          transition: "all 0.2s ease"
        }}
      >
        {isNavCollapsed ? "→" : "←"}
      </button>
      
      <div
        style={{
          width: isNavCollapsed ? "50px" : window.innerWidth <= 768 ? "100%" : "320px",
          borderRight: window.innerWidth <= 768 ? "none" : "1px solid #e5e7eb",
          backgroundColor: "white",
          transition: "width 0.3s ease",
          height: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column"
        }}
      >
        
        <div
          style={{
            padding: "0.75rem",
            borderBottom: "1px solid #e5e7eb",
            background: "white",
            color: "#2c3e50"
          }}
        >
          {!isNavCollapsed && (
            <h3 style={{ 
              margin: "0 0 0.75rem 0", 
              fontSize: "0.7rem",
              fontWeight: "600",
              color: "#2c3e50",
              letterSpacing: "0.5px",
              textTransform: "uppercase"
            }}>
              DOCUMENTS ({filteredFiles.length}/{allFiles.length})
            </h3>
          )}

          {!isNavCollapsed && (
            <div>
              <div style={{ position: "relative", marginBottom: "0.5rem" }}>
                <input
                  type="text"
                  placeholder="Search files and content..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    debouncedSearch(e.target.value);
                  }}
                  style={{
                    width: "100%",
                    padding: "0.4rem 2rem 0.4rem 0.6rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "4px",
                    fontSize: "0.7rem",
                    outline: "none",
                    transition: "border-color 0.2s",
                    height: "28px"
                  }}
                />
                {searchTerm && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSearchResults([]);
                      setSearchSuggestions([]);
                    }}
                    style={{
                      position: "absolute",
                      right: "0.5rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                      color: "#999",
                      padding: "0.2rem"
                    }}
                  >
                    ×
                  </button>
                )}
              </div>
              {isIndexing && (
                <div style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  marginTop: "0.75rem",
                  padding: "0.5rem 0.75rem",
                  background: "#fef3c7",
                  border: "1px solid #fbbf24",
                  borderRadius: "6px"
                }}>
                  📚 Building search index... ({indexProgress.current}/{indexProgress.total})
                  <div style={{
                    width: "100%",
                    height: "4px",
                    background: "#e0e0e0",
                    borderRadius: "2px",
                    marginTop: "0.25rem",
                    overflow: "hidden"
                  }}>
                    <div style={{
                      width: `${indexProgress.total > 0 ? (indexProgress.current / indexProgress.total) * 100 : 0}%`,
                      height: "100%",
                      background: "#ff9800",
                      transition: "width 0.3s ease"
                    }} />
                  </div>
                </div>
              )}
              {isSearching && (
                <div style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  marginTop: "0.75rem",
                  padding: "0.5rem 0.75rem",
                  background: "#dbeafe",
                  border: "1px solid #60a5fa",
                  borderRadius: "6px"
                }}>
                  🔍 Searching content... ({searchProgress.current}/{Math.min(searchProgress.total, 5)}) - Limited to smaller files
                  <div style={{
                    width: "100%",
                    height: "4px",
                    background: "#e0e0e0",
                    borderRadius: "2px",
                    marginTop: "0.25rem",
                    overflow: "hidden"
                  }}>
                    <div style={{
                      width: `${searchProgress.total > 0 ? (searchProgress.current / searchProgress.total) * 100 : 0}%`,
                      height: "100%",
                      background: "#2196f3",
                      transition: "width 0.3s ease"
                    }} />
                  </div>
                </div>
              )}

              {searchTerm && (
                <div style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: filteredFiles.length > 0 ? "#059669" : "#dc2626",
                  marginTop: "0.75rem",
                  padding: "0.5rem 0.75rem",
                  background: filteredFiles.length > 0 ? "#d1fae5" : "#fee2e2",
                  borderRadius: "6px",
                  border: `1px solid ${filteredFiles.length > 0 ? "#34d399" : "#fca5a5"}`
                }}>
                  {filteredFiles.length > 0 
                    ? `Found ${filteredFiles.length} file${filteredFiles.length > 1 ? 's' : ''}${(Array.isArray(searchResults) ? searchResults.length : searchResults.size) > 0 ? ` (${Array.isArray(searchResults) ? searchResults.length : searchResults.size} with content matches)` : ''}`
                    : '❌ Not found - No files match your search'
                  }
                </div>
              )}
            </div>
          )}
        </div>

        {!isNavCollapsed && dossier.root && (
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "1rem 0.5rem 0 0.5rem"
            }}
          >
            {searchTerm ? (
              // Show virtualized search results
              <VirtualizedFileList
                files={filteredFiles}
                activeFilePath={getActiveFile()?.path || ""}
                onFileSelected={openFileInTab}
                getFileIcon={getFileIcon}
                getFileType={getFileType}
                height={Math.min(500, window.innerHeight - 300)}
              />
            ) : (
              // Show normal tree view
              (() => {
                const actualDossier = dossier.root.children?.find(child => 
                  child.type === 'folder' && child.name !== '__MACOSX' && child.name !== '_MACOSX'
                );
                
                return actualDossier ? (
                  <DossierTree
                    node={actualDossier}
                    activeFilePath={getActiveFile()?.path || ""}
                    onFileSelected={openFileInTab}
                    level={0}
                  />
                ) : (
                  <DossierTree
                    node={dossier.root}
                    activeFilePath={getActiveFile()?.path || ""}
                    onFileSelected={openFileInTab}
                  />
                );
              })()
            )}
          </div>
        )}
      </div>

      <div className="file-viewer" style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Tab Bar */}
        {openTabs.length > 0 && (
          <div className="tab-bar" style={{
            display: "flex",
            background: "white",
            borderBottom: "1px solid #e5e7eb",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            overflowX: "auto",
            minHeight: window.innerWidth <= 768 ? "40px" : "36px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            position: "sticky",
            top: "0",
            zIndex: 100
          }}>
            {openTabs.map((tab, index) => (
              <div
                key={tab.path}
                className="tab-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: window.innerWidth <= 768 ? "0.25rem 0.75rem" : "0.25rem 0.75rem",
                  background: index === activeTabIndex ? "#f8f9fa" : "transparent",
                  borderBottom: index === activeTabIndex ? "3px solid #193441" : "3px solid transparent",
                  cursor: "pointer",
                  minWidth: window.innerWidth <= 768 ? "160px" : "180px",
                  maxWidth: window.innerWidth <= 768 ? "220px" : "280px",
                  flexShrink: 0,
                  borderRight: "1px solid #e5e7eb",
                  minHeight: window.innerWidth <= 768 ? "28px" : "24px",
                  touchAction: "manipulation",
                  transition: "all 0.2s ease"
                }}
                onClick={() => {
                  setActiveTabIndex(index);
                  loadFileUrl(tab.path);
                  // Preload adjacent files when switching tabs
                  preloadAdjacentFiles(tab.path);
                }}
              >
                <span style={{ fontSize: "1rem", marginRight: "0.5rem" }}>
                  {getFileIcon(tab.name)}
                </span>
                <span style={{
                  flex: 1,
                  fontSize: "12px",
                  fontWeight: index === activeTabIndex ? "600" : "400",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  color: index === activeTabIndex ? "#2c3e50" : "#6b7280"
                }}>
                  {tab.name}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeTab(index);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: window.innerWidth <= 768 ? "16px" : "14px",
                    cursor: "pointer",
                    padding: window.innerWidth <= 768 ? "0.5rem" : "0.25rem",
                    marginLeft: "0.75rem",
                    color: "#6b7280",
                    borderRadius: "4px",
                    minWidth: window.innerWidth <= 768 ? "32px" : "24px",
                    minHeight: window.innerWidth <= 768 ? "32px" : "24px",
                    touchAction: "manipulation",
                    transition: "all 0.2s ease"
                  }}
                  onMouseOver={(e) => e.target.style.background = "#f3f4f6"}
                  onMouseOut={(e) => e.target.style.background = "none"}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
        
        {/* Tab Content */}
        <div style={{ 
          flex: 1, 
          overflowY: "auto",
          WebkitOverflowScrolling: "touch"
        }}>
          {openTabs.length === 0 ? (
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              color: "#6b7280",
              fontSize: "14px",
              background: "#f9fafb",
              padding: "2rem"
            }}>
              📁 Select a file from the sidebar to open it in a tab
            </div>
          ) : (
            getActiveFile() && (
              <TabContent 
                activeFile={getActiveFile()}
                isLoading={loadingFiles.has(getActiveFile().path)}
                fileUrl={fileUrls.get(getActiveFile().path)}
                isPdfFile={isPdf(getActiveFile().name)}
                isDocxFile={isDocx(getActiveFile().name)}
                wordContent={wordContent.get(getActiveFile().path)}
                getFileIcon={getFileIcon}
                getFileType={getFileType}
              />
            )
          )}
        </div>

      </div>
    </div>
  );
};

export default Review;
