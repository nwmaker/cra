import React, { Component } from 'react'
import Slide from './Slide'
import Dots from './Dots'

//import RightArrow from './RightArrow'
//import LeftArrow from './LeftArrow'

import binary from '../images/binary.png'
import monarch from '../images/monarch.png'
import snowflake from '../images/snowflake.png'

//import './style.scss'
import './Slider.css'

const images = [
  binary,
  monarch,
  snowflake
]

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      total: images.length
    }

    this.timerID = null;
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.renderSlides = this.renderSlides.bind(this);
  }
  
  prevSlide() {
    let current = this.state.index;
    let prev = current - 1;
    if (prev < 0) {
      prev = this.state.total-1;
    }
    this.setState({index: prev});
  }

  nextSlide() {
    let current = this.state.index;
    let next = current + 1;
    if (next >= this.state.total) {
      next = 0;
    }
    this.setState({index: next});
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => {
        this.nextSlide()
      }, 3000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  renderSlides () {
    return images.map((curr, i) => <Slide key={curr} image={images[i]} />)
  }

  render() {
    return (
      <div className="slider">
        <div className="slide-container">
          <Slide key={this.state.index+1} image={images[this.state.index]} />
        </div>
        <Dots
          index={this.state.index}
          total={this.state.total}
          dotClick={this.handleDotClick} />
      </div>
    )
  }
}

export default Slider
