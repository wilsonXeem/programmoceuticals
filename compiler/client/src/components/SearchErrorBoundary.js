import React from 'react';

class SearchErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Search error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '16px', 
          border: '1px solid #f44336', 
          borderRadius: '4px',
          background: '#ffebee',
          color: '#c62828'
        }}>
          <h4>Search Error</h4>
          <p>Something went wrong with the search functionality.</p>
          <button 
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{ padding: '4px 8px', border: 'none', background: '#f44336', color: 'white', borderRadius: '3px' }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default SearchErrorBoundary;