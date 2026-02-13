import React, { useState, useEffect } from 'react';

const Navigation = ({ currentSlide, visitedSlides, goToSlide, slidesData }) => {
  const [openModules, setOpenModules] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  // Auto-expand module containing current slide
  useEffect(() => {
    const currentSlideData = slidesData.find(slide => slide.id === currentSlide);
    if (currentSlideData) {
      setOpenModules(prev => ({
        ...prev,
        [currentSlideData.moduleId]: true
      }));
    }
  }, [currentSlide, slidesData]);

  const toggleModule = (moduleId) => {
    setOpenModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  // Group slides by module
  const modules = slidesData.reduce((acc, slide) => {
    if (!acc[slide.moduleId]) {
      acc[slide.moduleId] = {
        title: slide.moduleTitle,
        slides: []
      };
    }
    acc[slide.moduleId].slides.push(slide);
    return acc;
  }, {});

  // Sort modules by ID and slides by ID
  const sortedModules = Object.entries(modules)
    .sort(([a], [b]) => parseInt(a) - parseInt(b))
    .map(([moduleId, module]) => ({
      id: moduleId,
      ...module,
      slides: module.slides.sort((a, b) => a.id - b.id)
    }));

  // Filter slides based on search term
  const filteredModules = sortedModules.map(module => ({
    ...module,
    slides: module.slides.filter(slide => 
      slide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slide.id.toString().includes(searchTerm)
    )
  })).filter(module => module.slides.length > 0 || searchTerm === '');

  const handleSlideClick = (slideId) => {
    goToSlide(slideId);
  };

  // Calculate progress based on visited slides
  const getModuleProgress = (module) => {
    const visitedInModule = module.slides.filter(slide => visitedSlides.has(slide.id)).length;
    return (visitedInModule / module.slides.length) * 100;
  };

  const isModuleCompleted = (module) => {
    return module.slides.every(slide => visitedSlides.has(slide.id));
  };

  const getVisitedSlidesCount = () => visitedSlides.size;

  return (
    <nav className="side-nav">
      <div className="nav-header">
        <div className="nav-brand">
          <div>
            <h1 className="nav-title">ProgrammoCeuticals</h1>
            <p className="nav-subtitle">Python Course</p>
          </div>
        </div>
        
        <div className="nav-search">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search slides..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="nav-stats">
          <div className="stat-item">
            <span className="stat-number">{currentSlide}</span>
            <span className="stat-label">Current</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{getVisitedSlidesCount()}</span>
            <span className="stat-label">Visited</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{Math.round((getVisitedSlidesCount() / slidesData.length) * 100)}%</span>
            <span className="stat-label">Progress</span>
          </div>
        </div>
      </div>
      
      <div className="nav-modules">
        {filteredModules.map((module) => {
          const isOpen = openModules[module.id];
          const progress = getModuleProgress(module);
          const completed = isModuleCompleted(module);
          const isCurrentModule = module.slides.some(slide => slide.id === currentSlide);
          const visitedInModule = module.slides.filter(slide => visitedSlides.has(slide.id)).length;
          
          return (
            <div key={module.id} className={`nav-module ${isCurrentModule ? 'current' : ''}`}>
              <button 
                className={`nav-module-title ${completed ? 'completed' : ''}`}
                onClick={() => toggleModule(module.id)}
              >
                <div className="module-header">
                  <div className="module-info">
                    <span className="module-number">Module {module.id}</span>
                    <span 
                      className="module-name" 
                      title={module.title.replace(`Module ${module.id}: `, '')}
                    >
                      {module.title.replace(`Module ${module.id}: `, '')}
                    </span>
                  </div>
                  <div className="module-controls">
                    {completed && <i className="fas fa-check-circle completed-icon"></i>}
                    <span className="slide-count">{visitedInModule}/{module.slides.length}</span>
                    <i className={`fas fa-chevron-${isOpen ? 'down' : 'right'} expand-icon`}></i>
                  </div>
                </div>
                {(isCurrentModule || visitedInModule > 0) && (
                  <div className="module-progress">
                    <div className="progress-bar-mini">
                      <div 
                        className="progress-fill-mini" 
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </button>
              
              <div className={`nav-slides ${isOpen ? 'open' : ''}`}>
                {module.slides.map((slide) => {
                  const isActive = currentSlide === slide.id;
                  const isVisited = visitedSlides.has(slide.id);
                  
                  return (
                    <button
                      key={slide.id}
                      className={`nav-slide ${
                        isActive ? 'active' : isVisited ? 'visited' : ''
                      }`}
                      onClick={() => handleSlideClick(slide.id)}
                      title={slide.title}
                    >
                      <div className="slide-info">
                        <span className="slide-number">{slide.id}</span>
                        <span 
                          className="slide-title" 
                          title={slide.title}
                        >
                          {slide.title}
                        </span>
                      </div>
                      <div className="slide-status">
                        {isVisited && !isActive && <i className="fas fa-check"></i>}
                        {isActive && <i className="fas fa-play"></i>}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      
      {searchTerm && (
        <div className="search-results">
          <p className="search-info">
            Found {filteredModules.reduce((acc, module) => acc + module.slides.length, 0)} slides
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
