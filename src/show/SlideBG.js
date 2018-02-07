import React from 'react'

const SlideBG = ({ image }) => {
  let styles = {
    backgroundImage: `url(../images/${image}.png)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    overflow: 'hidden'
  }
  return (
    <div className="slide" style={styles}>
    </div>
  )
}

export default SlideBG
