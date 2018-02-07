import React, { Component } from 'react'
//import Slide from './Slide'
import SlideBG from './SlideBG'
import Dots from './Dots'

/*
import binary from '../images/binary.png'
import monarch from '../images/monarch.png'
import snowflake from '../images/snowflake.png'

const images = [
  binary,
  monarch,
  snowflake
]
*/

const images = [
  "binary",
  "monarch",
  "snowflake"
]

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      translateValue: 0,
      slideWidth: 800,
      total: images.length
    }

    this.timerID = null;
    this.querySlideWidth = this.querySlideWidth.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
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
      this.setState({translateValue: -(i * this.state.slideWidth)})      
    } else {
      this.setState({translateValue: this.state.translateValue + (
        (this.state.index-i)*this.state.slideWidth)})
    }
    this.setState({index: i})
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
    return images.map((curr, i) => <SlideBG key={curr} image={images[i]} />)
  }

  render() {
    return (
      <div className="slider">
        <div className="slide-container"
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
