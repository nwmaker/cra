import React from 'react';

const RightArrow = ({nextSlide}) => {
  return (
    <div onClick={nextSlide} className="slider-right-arrow">
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default RightArrow;
