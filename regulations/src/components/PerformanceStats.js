import React, { useState, useEffect } from 'react';
import { performanceMonitor } from '../services/performanceMonitor';

const PerformanceStats = ({ isVisible, onClose }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (isVisible) {
      const updateStats = () => {
        setStats(performanceMonitor.getStats());
      };
      
      updateStats();
      const interval = setInterval(updateStats, 1000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  if (!isVisible || !stats) return null;

  const formatTime = (ms) => `${ms.toFixed(1)}ms`;
  const formatPercent = (ratio) => `${(ratio * 100).toFixed(1)}%`;
  const formatBytes = (bytes) => {
    if (!bytes) return '0 B';
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      width: '300px',
      background: 'white',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: 1000,
      fontSize: '0.8rem'
    }}>
      <div style={{
        padding: '0.75rem',
        borderBottom: '1px solid #eee',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#f8f9fa',
        borderRadius: '8px 8px 0 0'
      }}>
        <h4 style={{ margin: 0, fontSize: '0.9rem' }}>Performance Stats</h4>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.2rem',
            cursor: 'pointer',
            padding: '0.25rem'
          }}
        >
          ×
        </button>
      </div>
      
      <div style={{ padding: '0.75rem' }}>
        <div style={{ marginBottom: '0.75rem' }}>
          <h5 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>File Loading</h5>
          <div>Total Loads: {stats.fileLoading.totalLoads}</div>
          <div>Avg Load Time: {formatTime(stats.fileLoading.avgLoadTime)}</div>
          <div>Cache Hit Rate: {formatPercent(stats.fileLoading.cacheHitRate)}</div>
          <div>Preloaded Files: {stats.fileLoading.preloadedCount}</div>
        </div>
        
        <div style={{ marginBottom: '0.75rem' }}>
          <h5 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>Search</h5>
          <div>Total Searches: {stats.search.totalSearches}</div>
          <div>Avg Search Time: {formatTime(stats.search.avgSearchTime)}</div>
        </div>
        
        {stats.memory.current && (
          <div>
            <h5 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>Memory</h5>
            <div>Current: {formatBytes(stats.memory.current.used)}</div>
            <div>Peak: {formatBytes(stats.memory.peak.used)}</div>
            <div>Limit: {formatBytes(stats.memory.current.limit)}</div>
          </div>
        )}
        
        <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #eee' }}>
          <button
            onClick={() => {
              performanceMonitor.reset();
              setStats(performanceMonitor.getStats());
            }}
            style={{
              width: '100%',
              padding: '0.5rem',
              background: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            Reset Stats
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceStats;