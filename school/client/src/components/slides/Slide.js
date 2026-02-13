import React from 'react';
import CodeBlock from '../CodeBlock';

// Python syntax highlighting patterns
const pythonPatterns = [
  { regex: /\b(def|class|if|elif|else|for|while|return|import|from|as|try|except|finally|raise|with|pass|break|continue|and|or|not|in|is|lambda|yield|global|nonlocal|assert|del|True|False|None)\b/g, className: 'keyword' },
  { regex: /"""[\s\S]*?"""|'''[\s\S]*?'''|"[^"]*"|'[^']*'/g, className: 'string' },
  { regex: /\b\d+\.?\d*\b/g, className: 'number' },
  { regex: /#.*$/gm, className: 'comment' },
  { regex: /\b[a-zA-Z_][a-zA-Z0-9_]*(?=\s*\()/g, className: 'func' },
  { regex: /[+\-*/%=<>!&|^~]/g, className: 'operator' },
  { regex: /\b(True|False|None)\b/g, className: 'boolean' },
  { regex: /\b[A-Z][a-zA-Z0-9_]*\b/g, className: 'variable' },
  { regex: /\.[a-zA-Z_][a-zA-Z0-9_]*/g, className: 'property' }
];

// JavaScript syntax highlighting patterns
const jsPatterns = [
  { regex: /\b(const|let|var)\b/g, className: 'declaration' },
  { regex: /\b(function|if|else|for|while|return|class|extends|import|export|from|default|try|catch|finally|throw|new|this|super|static|async|await|yield|break|continue|switch|case|do|with|in|of|typeof|instanceof|delete|void|true|false|null|undefined)\b/g, className: 'keyword' },
  { regex: /"[^"]*"|'[^']*'|`[^`]*`/g, className: 'string' },
  { regex: /\b\d+\.?\d*\b/g, className: 'number' },
  { regex: /\/\/.*$/gm, className: 'comment' },
  { regex: /\/\*[\s\S]*?\*\//g, className: 'comment' },
  { regex: /\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*\()/g, className: 'func' },
  { regex: /[+\-*/%=<>!&|^~?:]/g, className: 'operator' },
  { regex: /\b(true|false)\b/g, className: 'boolean' },
  { regex: /\b(null|undefined)\b/g, className: 'null' },
  { regex: /\.[a-zA-Z_$][a-zA-Z0-9_$]*/g, className: 'property' },
  { regex: /\b[a-zA-Z_$][a-zA-Z0-9_$]*\b/g, className: 'variable' }
];

const Slide = ({ slideData, language = 'python' }) => {
  const { title, type, content } = slideData;
  const jsLanguages = new Set(['javascript', 'react', 'nodejs']);
  const patterns = jsLanguages.has(language) ? jsPatterns : pythonPatterns;

  const renderContent = () => {
    switch (type) {
      case 'hero':
        return (
          <div className="presentation-slide hero-slide">
            <div className="slide-header">
              {content.eyebrow && <span className="slide-eyebrow">{content.eyebrow}</span>}
            </div>
            <div className="slide-content">
              <h1 className="slide-main-title">{title}</h1>
              {content.subtitle && <p className="slide-subtitle">{content.subtitle}</p>}
              {content.bullets && (
                <ul className="slide-bullet-list">
                  {content.bullets.map((item, index) => (
                    <li key={index} className="slide-bullet-item">{item}</li>
                  ))}
                </ul>
              )}
              {content.chips && (
                <div className="slide-tags">
                  {content.chips.map((chip, index) => (
                    <span key={index} className="slide-tag">{chip}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 'title':
        return (
          <div className="full-bg-image">
            <div className="content-overlay">
              <h1>{content.title}</h1>
              {content.subtitle && (
                <p className="subtitle" style={{ fontSize: '28px', marginTop: '20px', color: '#64748b' }}>
                  {content.subtitle}
                </p>
              )}
              {content.description && (
                <p style={{ fontSize: '18px', marginTop: '40px', color: '#64748b' }}>
                  {content.description}
                </p>
              )}
            </div>
          </div>
        );
      
      case 'intro':
        return (
          <div className="full-bg-image" style={{ backgroundImage: `url(${content.backgroundImage})` }}>
            <div className="content-overlay">
              <h1>{content.title}</h1>
              {content.subtitle && (
                <p className="subtitle" style={{ fontSize: '28px', marginTop: '20px', color: '#64748b' }}>
                  {content.subtitle}
                </p>
              )}
              {content.description && (
                <p style={{ fontSize: '18px', marginTop: '40px', color: '#64748b' }}>
                  {content.description}
                </p>
              )}
            </div>
          </div>
        );
      
      case 'code':
        return (
          <>
            <h2 className="slide-title">{title}</h2>
            <div className="content-area">
              {content.title && <h3>{content.title}</h3>}
              {content.code && <CodeBlock code={content.code} patterns={patterns} />}
              {content.explanation && (
                <p style={{ marginTop: '20px', fontSize: '18px', color: '#64748b' }}>
                  {content.explanation}
                </p>
              )}
            </div>
          </>
        );

      case 'code-plus':
        return (
          <div className="presentation-slide code-slide">
            <div className="slide-header">
              <h2 className="slide-title">{title}</h2>
            </div>
            <div className="slide-content">
              <div className="code-plus-layout">
                <div className="code-section">
                  {content.title && <h3 className="code-section-title">{content.title}</h3>}
                  {content.code && (
                    <div className="code-container">
                      <CodeBlock code={content.code} patterns={patterns} />
                    </div>
                  )}
                </div>
                <div className="explanation-section">
                  {content.points && (
                    <div className="key-points">
                      <h4 className="points-title">Key Points:</h4>
                      <ul className="points-list">
                        {content.points.map((point, index) => (
                          <li key={index} className="point-item">{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {content.note && (
                    <div className="code-note">
                      <p>{content.note}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 'two-column':
        return (
          <div className="presentation-slide two-column-slide">
            <div className="slide-header">
              <h2 className="slide-title">{title}</h2>
            </div>
            <div className="slide-content">
              <div className="two-column-layout">
                <div className="column-left">
                  {content.left.title && <h3 className="column-title">{content.left.title}</h3>}
                  {content.left.description && <p className="column-description" dangerouslySetInnerHTML={{ __html: content.left.description }} />}
                  {content.left.items && (
                    <ul className="column-list">
                      {content.left.items.map((item, index) => (
                        <li key={index} className="column-list-item" dangerouslySetInnerHTML={{ __html: item }}></li>
                      ))}
                    </ul>
                  )}
                  {content.left.code && (
                    <div className="column-code">
                      <CodeBlock code={content.left.code} patterns={patterns} />
                    </div>
                  )}
                </div>
                <div className="column-right">
                  {content.right.title && <h3 className="column-title">{content.right.title}</h3>}
                  {content.right.description && <p className="column-description" dangerouslySetInnerHTML={{ __html: content.right.description }} />}
                  {content.right.items && (
                    <ul className="column-list">
                      {content.right.items.map((item, index) => (
                        <li key={index} className="column-list-item" dangerouslySetInnerHTML={{ __html: item }}></li>
                      ))}
                    </ul>
                  )}
                  {content.right.code && (
                    <div className="column-code">
                      <CodeBlock code={content.right.code} patterns={patterns} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 'infographic':
        return (
          <div className="presentation-slide infographic-slide">
            <div className="slide-header">
              <h2 className="slide-title">{title}</h2>
              {content.intro && <p className="slide-intro">{content.intro}</p>}
            </div>
            <div className="slide-content">
              <div className="infographic-grid">
                {content.cards.map((card, index) => (
                  <div key={index} className="info-card">
                    {card.tag && <span className="card-tag">{card.tag}</span>}
                    {card.icon && (
                      <div className="card-icon">
                        <i className={card.icon}></i>
                      </div>
                    )}
                    <h4 className="card-title">{card.title}</h4>
                    {card.description && <p className="card-description">{card.description}</p>}
                    {card.items && (
                      <ul className="card-list">
                        {card.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="card-list-item">{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'steps':
        return (
          <div className="presentation-slide steps-slide">
            <div className="slide-header">
              <h2 className="slide-title">{title}</h2>
              {content.intro && <p className="slide-intro">{content.intro}</p>}
            </div>
            <div className="slide-content">
              <div className="steps-container">
                {content.steps.map((step, index) => (
                  <div key={index} className="step-item">
                    <div className="step-number">{index + 1}</div>
                    <div className="step-content">
                      <h4 className="step-title">{step.title}</h4>
                      {step.description && <p className="step-description">{step.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'diagram':
        return (
          <div className="presentation-slide diagram-slide">
            <div className="slide-header">
              <h2 className="slide-title">{title}</h2>
              {content.intro && <p className="slide-intro">{content.intro}</p>}
            </div>
            <div className="slide-content">
              <div className="diagram-flow">
                {content.nodes.map((node, index) => (
                  <React.Fragment key={index}>
                    <div className="diagram-node">
                      <h4 className="node-title">{node.title}</h4>
                      {node.description && <p className="node-description">{node.description}</p>}
                    </div>
                    {index < content.nodes.length - 1 && (
                      <div className="diagram-arrow">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              {content.footer && <p className="diagram-footer">{content.footer}</p>}
            </div>
          </div>
        );
      
      default:
        return (
          <div className="presentation-slide error-slide">
            <div className="slide-content">
              <h2>Unknown slide type: {type}</h2>
            </div>
          </div>
        );
    }
  };

  return renderContent();
};

export default Slide;
