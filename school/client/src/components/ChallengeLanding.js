import React from 'react';
import { challenges } from '../data/challengeData';

const ChallengeLanding = ({ onSelectChallenge }) => {
  const modules = [
    {
      id: 'fundamentals',
      title: 'Programming Fundamentals',
      description: 'Basic programming concepts and problem-solving',
      icon: '🏗️',
      challenges: challenges.filter(c => c.module === 'fundamentals')
    },
    {
      id: 'data-structures',
      title: 'Data Structures',
      description: 'Arrays, lists, dictionaries, and basic operations',
      icon: '📊',
      challenges: challenges.filter(c => c.module === 'data-structures')
    },
    {
      id: 'algorithms',
      title: 'Algorithms',
      description: 'Sorting, searching, and algorithmic thinking',
      icon: '⚡',
      challenges: challenges.filter(c => c.module === 'algorithms')
    },
    {
      id: 'advanced',
      title: 'Advanced Topics',
      description: 'Complex problem-solving and optimization',
      icon: '🚀',
      challenges: challenges.filter(c => c.module === 'advanced')
    }
  ];

  const getDifficultyColor = (tag) => {
    const colors = {
      core: '#0b5ed7',
      extension: '#6ea8fe',
      capstone: '#0a58ca'
    };
    return colors[tag] || '#6b7280';
  };

  return (
    <div className="challenge-landing">
      <div className="landing-header">
        <h1>Programming Challenges</h1>
        <p>Master programming concepts through hands-on practice</p>
      </div>

      <div className="modules-grid">
        {modules.map(module => (
          <div key={module.id} className="module-card">
            <div className="module-header">
              <span className="module-icon">{module.icon}</span>
              <h2>{module.title}</h2>
              <p>{module.description}</p>
            </div>
            
            <div className="challenges-list">
              {module.challenges.map(challenge => (
                <div 
                  key={challenge.id} 
                  className="challenge-item"
                  onClick={() => onSelectChallenge(challenge.id)}
                >
                  <div className="challenge-info">
                    <h3>{challenge.title}</h3>
                    <div className="challenge-meta">
                      <span 
                        className="difficulty-badge"
                        style={{ backgroundColor: getDifficultyColor(challenge.difficultyTag) }}
                      >
                        {challenge.difficultyTag}
                      </span>
                      <span className="time-badge">⏱️ {challenge.estimatedTimeMinutes}min</span>
                    </div>
                    <div className="concepts-tags">
                      {challenge.concepts?.slice(0, 3).map(concept => (
                        <span key={concept} className="concept-tag">{concept}</span>
                      ))}
                    </div>
                  </div>
                  <div className="challenge-arrow">→</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengeLanding;
