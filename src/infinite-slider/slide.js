import React from 'react'

const Slide = ({ index, image, msg }) => {
  return (
    <div className="slide" id={index}>
      <span className="msg">{msg}</span>
      <img src={image} alt="" />
    </div>
  )
}

export default Slide
