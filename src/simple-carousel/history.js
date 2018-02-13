import React from 'react'

export default ({current, items, changeSlide}) => {
  let slides = items.map( (el, index) => {
    let name = (index === current) ? 'active' : ''
      return (
        <li key={index}>
          <button 
            className={name} 
            onClick={ () => changeSlide(current, index) }>
          </button>
        </li>
      )
    }
  )
    
  return (
    <ul>{ slides }</ul>
  )
}

