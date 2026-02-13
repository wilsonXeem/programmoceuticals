import React from 'react';
import '../styles/LandingPage.css';

function LandingPage({ onLanguageSelect }) {
  const languages = [
    {
      id: 'python',
      name: 'Python',
      description: 'Learn Python programming from basics to advanced topics',
      slides: 200,
      icon: '🐍',
      color: '#3776ab'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      description: 'Master JavaScript for web development and beyond',
      slides: 242,
      icon: '⚡',
      color: '#f7df1e'
    }
  ];

  return (
    <div className="landing-page">
      <div className="landing-container">
        <header className="landing-header">
          <h1>ProgrammoCeuticals</h1>
          <p>Structured Programming Curriculum</p>
        </header>

        <div className="language-grid">
          {languages.map(lang => (
            <div 
              key={lang.id}
              className="language-card"
              onClick={() => onLanguageSelect(lang.id)}
              style={{ '--accent-color': lang.color }}
            >
              <div className="language-icon">{lang.icon}</div>
              <h2>{lang.name}</h2>
              <p>{lang.description}</p>
              <div className="slide-count">{lang.slides} slides</div>
              <button className="start-btn">Start Learning</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
