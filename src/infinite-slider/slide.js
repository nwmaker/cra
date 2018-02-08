import React from 'react'

const Slide = ({ index, image }) => {
  return (
    <div className="slide" id={index}>
      <img src={image} alt="" />
    </div>
  )
}

export default Slide
