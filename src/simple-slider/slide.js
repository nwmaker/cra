import React from 'react'

export default ({index, msg}) => {
  const id = `slide-${index}`
  return (
    <div className='slide' id={id}>
      <span className='msg'>{msg}</span>
    </div>
  )
}
