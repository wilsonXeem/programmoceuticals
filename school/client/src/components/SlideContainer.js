import React from 'react';
import Slide from './slides/Slide';

const SlideContainer = ({ currentSlide, slidesData, language }) => {
  const currentSlideData = slidesData.find(slide => slide.id === currentSlide);

  if (!currentSlideData) {
    return <div>Slide not found</div>;
  }

  return (
    <div className="slide-page">
      <Slide slideData={currentSlideData} language={language} />
    </div>
  );
};

export default SlideContainer;
