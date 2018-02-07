import React from 'react'

const SlideBG = ({ image }) => {
  let styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return (
    <div className="slide" style={styles}>
    </div>
  )
}

export default SlideBG
