import React, { Component } from 'react'
import Slide from './slide'
import Dots from './dots'

import binary from '../images/binary.png'
import monarch from '../images/monarch.png'
import snowflake from '../images/snowflake.png'
import smd from '../images/smd.png'
import ursaminor from '../images/ursaminor.png'

const images = [
  binary,
  monarch,
  ursaminor,
  smd,
  snowflake
]

const messages = [
  'Design',
  'Gift',
  'Experience',
  'Kit',
  'Challenge',
]

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      translateValue: 0,
      total: messages.length
    }

    this.timerID = null;
    this.querySlideWidth = this.querySlideWidth.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
    this.renderSlides = this.renderSlides.bind(this);
  }
  
  nextSlide() {
    let current = this.state.index;
    let next = current + 1;

    let translateV = this.state.translateValue;
    if (next >= this.state.total) {
      next = 0;
      translateV = 0;
    } else {
      translateV = translateV - this.querySlideWidth()
    }
    console.log(next, translateV)
 
    this.setState({
      index: next,
      translateValue: translateV
    });
  }

  querySlideWidth() {
    const slide = document.querySelector('.slide')
    return slide.clientWidth
  }

  handleDotClick (i) {
    console.log(i)

    if (i === this.state.index) {
      return
    }
    if ( i > this.state.index) {
      this.setState({translateValue: -(i * this.querySlideWidth())})      
    } else {
      this.setState({translateValue: this.state.translateValue + (
        (this.state.index-i)*this.querySlideWidth())})
    }
    this.setState({index: i})
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => {
        this.nextSlide()
      }, 3500
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  renderSlides () {
    return messages.map((curr, i) => 
      <Slide key={curr} index={i} msg={messages[i]} image={images[i]} />)
  }

  render() {
    return (
      <div className="container">
        <div className="carousel"
             style={{
               transform: `translateX(${this.state.translateValue}px)`,
               transition: 'transform ease-out 0.45s'
             }}>
          { this.renderSlides() }
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
