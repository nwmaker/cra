import React from 'react';

const LeftArrow = ({prevSlide}) => {
  return (
    <div onClick={prevSlide} className="slider-left-arrow">
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArrow;
