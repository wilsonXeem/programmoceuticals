import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const isValidCredential = (value) => {
    const normalized = value.toLowerCase().trim();
    return normalized === 'drt';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidCredential(credentials.username) && isValidCredential(credentials.password)) {
      onLogin();
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src="/logo.png" alt="ProgrammoCeuticals Logo" className="login-logo" />
          <h2>DRT - Dossier Review Team</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              required
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="login-button">
            Login to DRT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;