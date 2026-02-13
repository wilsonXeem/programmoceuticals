import React, { useState, useEffect } from 'react';
import { challenges } from '../data/challengeData';

const Challenge = ({ challengeId = 1, language: initialLanguage = 'javascript', onBackToChallenges }) => {
  const [currentTask, setCurrentTask] = useState(0);
  const [taskResponses, setTaskResponses] = useState({});
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [testResults, setTestResults] = useState([]);
  const [showHints, setShowHints] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const [showSolutions, setShowSolutions] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(new Set());
  const [language, setLanguage] = useState(initialLanguage);
  const [pyodide, setPyodide] = useState(null);
  const [pyodideLoading, setPyodideLoading] = useState(false);

  const challenge = challenges.find(c => c.id === challengeId);
  const task = challenge?.tasks?.[currentTask];

  useEffect(() => {
    setOutput('');
    setTestResults([]);
  }, [currentTask, language]);

  const loadPyodide = async () => {
    if (pyodide || pyodideLoading) return;
    setPyodideLoading(true);
    try {
      const pyodideInstance = await window.loadPyodide();
      setPyodide(pyodideInstance);
    } catch (error) {
      console.error('Failed to load Pyodide:', error);
    } finally {
      setPyodideLoading(false);
    }
  };
  
  if (!challenge) {
    return (
      <div className="challenge-container">
        <div className="error-message">
          <h2>Challenge not found</h2>
          <p>Challenge with ID {challengeId} does not exist.</p>
        </div>
      </div>
    );
  }
  
  if (!task) {
    return (
      <div className="challenge-container">
        <div className="error-message">
          <h2>No tasks available</h2>
          <p>This challenge does not have any tasks configured.</p>
        </div>
      </div>
    );
  }

  const runCode = () => {
    if (!code.trim()) return;
    
    const relevantTestCases = challenge.testCases?.filter(tc => tc.language === language) || [];
    
    if (language === 'python') {
      if (!pyodide) {
        loadPyodide();
        setOutput('Loading Python interpreter...');
        return;
      }
      runPythonCode(relevantTestCases);
    } else {
      runJavaScriptCode(relevantTestCases);
    }
  };

  const runPythonCode = (testCases) => {
    try {
      const results = [];
      
      for (const testCase of testCases) {
        try {
          const inputArgs = Array.isArray(testCase.input) 
            ? testCase.input.map(arg => JSON.stringify(arg)).join(', ')
            : JSON.stringify(testCase.input);
            
          pyodide.runPython(`
${code}

if callable(globals().get('solution')):
    result = solution(${inputArgs})
else:
    result = None
          `);
          const result = pyodide.globals.get('result');
          
          const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
          results.push({
            input: testCase.input,
            expected: testCase.expected,
            actual: result,
            passed
          });
        } catch (error) {
          results.push({
            input: testCase.input,
            expected: testCase.expected,
            actual: `Error: ${error.message}`,
            passed: false
          });
        }
      }
      
      setTestResults(results);
      const passedCount = results.filter(r => r.passed).length;
      setOutput(`${passedCount}/${results.length} tests passed`);
      
      if (passedCount === results.length) {
        setCompletedTasks(prev => new Set([...prev, currentTask]));
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
      setTestResults([]);
    }
  };

  const runJavaScriptCode = (testCases) => {
    try {
      const results = [];
      
      for (const testCase of testCases) {
        try {
          // eslint-disable-next-line no-new-func
          const func = new Function('return ' + code)();
          const result = Array.isArray(testCase.input) 
            ? func(...testCase.input) 
            : func(testCase.input);
          
          const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
          results.push({
            input: testCase.input,
            expected: testCase.expected,
            actual: result,
            passed
          });
        } catch (error) {
          results.push({
            input: testCase.input,
            expected: testCase.expected,
            actual: `Error: ${error.message}`,
            passed: false
          });
        }
      }
      
      setTestResults(results);
      const passedCount = results.filter(r => r.passed).length;
      setOutput(`${passedCount}/${results.length} tests passed`);
      
      if (passedCount === results.length) {
        setCompletedTasks(prev => new Set([...prev, currentTask]));
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
      setTestResults([]);
    }
  };

  const saveTextResponse = (response) => {
    setTaskResponses(prev => ({ ...prev, [currentTask]: response }));
    setCompletedTasks(prev => new Set([...prev, currentTask]));
  };

  const nextTask = () => {
    if (currentTask < challenge.tasks.length - 1) {
      setCurrentTask(prev => prev + 1);
    }
  };

  const prevTask = () => {
    if (currentTask > 0) {
      setCurrentTask(prev => prev - 1);
    }
  };

  const getHint = () => {
    if (currentHint < (challenge.hints?.length || 0)) {
      setShowHints(true);
      setCurrentHint(prev => prev + 1);
    }
  };

  const getCapabilityFeedback = () => {
    if (testResults.length === 0) return '';
    
    const passedCount = testResults.filter(r => r.passed).length;
    const total = testResults.length;
    
    if (passedCount === total) {
      if (task.level === 'early') return 'Correct implementation - good foundation!';
      if (task.level === 'intermediate') return 'Optimized solution - excellent work!';
      return 'Well done!';
    } else if (passedCount > 0) {
      return 'Partially correct - you\'re on the right track!';
    } else {
      return 'Keep trying - consider the hints below.';
    }
  };

  const getLevelIcon = (level) => {
    const icons = {
      beginner: '🕰️',
      early: '💻',
      intermediate: '⚡',
      advanced: '📊',
      expert: '🏆'
    };
    return icons[level] || '📝';
  };

  return (
    <div className="challenge-container">
      <div className="challenge-header">
        {onBackToChallenges && (
          <button onClick={onBackToChallenges} className="back-button">
            ← Back to Challenges
          </button>
        )}
        <div className="challenge-header-content">
          <div className="challenge-info">
            <h1>{challenge.title}</h1>
            <div className="challenge-meta">
              <span className={`difficulty-tag ${challenge.difficultyTag}`}>
                {challenge.difficultyTag}
              </span>
              <span className="time-estimate">
                ⏱️ {challenge.estimatedTimeMinutes}min
              </span>
              <div className="concepts">
                {challenge.concepts?.map(concept => (
                  <span key={concept} className="concept-tag">{concept}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="challenge-actions">
            <button onClick={getHint} className="btn btn-secondary">
              <i className="fas fa-lightbulb"></i>
              Hint ({currentHint}/{challenge.hints?.length || 0})
            </button>
            <button onClick={() => setShowSolutions(!showSolutions)} className="btn btn-danger">
              <i className="fas fa-eye"></i>
              Solutions
            </button>
          </div>
        </div>
      </div>

      <div className="challenge-content">
        <div className="problem-panel">
          <div className="panel-header">
            <h3>Problem Statement</h3>
          </div>
          <div className="panel-content">
            <div className="problem-statement">
              <p>{challenge.problem?.statement}</p>
              
              {challenge.problem?.constraints && (
                <div className="constraints-section">
                  <h4>Constraints</h4>
                  <ul>
                    {challenge.problem.constraints.map((constraint, index) => (
                      <li key={index}>{constraint}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {challenge.problem?.clarifications?.length > 0 && (
                <div className="clarifications-section">
                  <h4>Clarifications</h4>
                  <ul>
                    {challenge.problem.clarifications.map((clarification, index) => (
                      <li key={index}>{clarification}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {challenge.examples && challenge.examples.length > 0 && (
              <div className="examples-section">
                <h4>Examples</h4>
                {challenge.examples.map((example, index) => (
                  <div key={index} className="example">
                    <div><strong>Input:</strong> {JSON.stringify(example.input)}</div>
                    <div><strong>Output:</strong> {JSON.stringify(example.output)}</div>
                    <div><strong>Explanation:</strong> {example.explanation}</div>
                  </div>
                ))}
              </div>
            )}
            
            {showHints && challenge.hints && (
              <div className="hints-section">
                <h4>
                  <i className="fas fa-lightbulb"></i>
                  Progressive Hints
                </h4>
                {challenge.hints.slice(0, currentHint).map((hint, index) => (
                  <div key={index} className="hint">
                    <strong>Hint {index + 1}:</strong> {hint.text}
                  </div>
                ))}
              </div>
            )}
            
            {showSolutions && challenge.solutions && (
              <div className="solutions-section">
                <h4>Solution Approaches</h4>
                {challenge.solutions.map((solution, index) => (
                  <div key={index} className="solution-approach">
                    <h5>{solution.approach} - {solution.explanation}</h5>
                    <div className="complexity">
                      Time: {solution.timeComplexity} | Space: {solution.spaceComplexity}
                    </div>
                    <pre className="solution-code">{solution.code?.[language]}</pre>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="solution-panel">
          <div className="panel-header">
            <h3>
              {getLevelIcon(task.level)} {task.level.charAt(0).toUpperCase() + task.level.slice(1)} Task
              {task.required && <span className="required-badge">Required</span>}
            </h3>
          </div>
          <div className="panel-content">
            <div className="current-task">
              <p className="task-description">{task.instruction}</p>
              
              {task.level === 'beginner' || task.level === 'advanced' ? (
                <div className="text-response">
                  <textarea
                    placeholder="Share your thoughts..."
                    value={taskResponses[currentTask] || ''}
                    onChange={(e) => setTaskResponses(prev => ({ ...prev, [currentTask]: e.target.value }))}
                    className="response-textarea"
                  />
                  <button 
                    onClick={() => saveTextResponse(taskResponses[currentTask] || '')}
                    className="btn btn-primary"
                  >
                    Save Response
                  </button>
                </div>
              ) : (
                <div className="code-editor-container">
                  <div className="code-editor-header">
                    <div className="language-selector">
                      <button 
                        onClick={() => setLanguage('python')}
                        className={`lang-btn ${language === 'python' ? 'active' : ''}`}
                      >
                        Python
                      </button>
                      <button 
                        onClick={() => setLanguage('javascript')}
                        className={`lang-btn ${language === 'javascript' ? 'active' : ''}`}
                      >
                        JavaScript
                      </button>
                    </div>
                    <div className="editor-tabs">
                      <div className="editor-tab">solution.{language === 'python' ? 'py' : 'js'}</div>
                    </div>
                    <button onClick={runCode} className="btn btn-primary" disabled={language === 'python' && pyodideLoading}>
                      <i className="fas fa-play"></i>
                      {language === 'python' && pyodideLoading ? 'Loading Python...' : 'Run Tests'}
                    </button>
                  </div>
                  
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="code-editor"
                    placeholder="Write your solution here..."
                  />
                </div>
              )}
              
              {output && (
                <div className="capability-feedback">
                  {getCapabilityFeedback()}
                </div>
              )}
            </div>
            
            <div className="task-navigation">
              <button 
                onClick={prevTask} 
                disabled={currentTask === 0}
                className="btn btn-secondary"
              >
                ← Previous
              </button>
              <div className="task-indicators">
                {challenge.tasks.map((taskItem, index) => (
                  <div 
                    key={index}
                    className={`task-indicator ${
                      index === currentTask ? 'current' : 
                      completedTasks.has(index) ? 'completed' : 'pending'
                    } ${taskItem.required ? 'required' : 'optional'}`}
                    onClick={() => setCurrentTask(index)}
                    title={`${taskItem.level} - ${taskItem.required ? 'Required' : 'Optional'}`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              <button 
                onClick={nextTask}
                disabled={currentTask === challenge.tasks.length - 1}
                className="btn btn-secondary"
              >
                Next →
              </button>
            </div>
            
            {testResults.length > 0 && (
              <div className="test-results">
                <h4>Test Results</h4>
                {testResults.map((result, index) => (
                  <div key={index} className={`test-case ${result.passed ? 'passed' : 'failed'}`}>
                    <div className="test-header">
                      <span className="test-status">
                        {result.passed ? '✅' : '❌'}
                      </span>
                      <span>Test Case {index + 1}</span>
                    </div>
                    <div className="test-details">
                      <div><span className="label">Input:</span> {JSON.stringify(result.input)}</div>
                      <div><span className="label">Expected:</span> {JSON.stringify(result.expected)}</div>
                      <div><span className="label">Actual:</span> {JSON.stringify(result.actual)}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {currentTask === challenge.tasks.length - 1 && challenge.reflection && (
              <div className="reflection-section">
                <h4>🤔 Reflection</h4>
                <p>{challenge.reflection.question}</p>
                <textarea 
                  placeholder="Share your insights..."
                  className="reflection-textarea"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
