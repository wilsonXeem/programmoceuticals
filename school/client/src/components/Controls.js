import React from 'react';

const Controls = ({ currentSlide, totalSlides, nextSlide, previousSlide }) => {
  return (
    <div className="nav-controls">
      <button 
        className="nav-btn" 
        onClick={previousSlide}
        disabled={currentSlide === 1}
        title="Previous (←)"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      
      <div className="slide-counter">
        <span>{currentSlide}</span> / <span>{totalSlides}</span>
      </div>
      
      <button 
        className="nav-btn" 
        onClick={nextSlide}
        disabled={currentSlide === totalSlides}
        title="Next (→)"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Controls;