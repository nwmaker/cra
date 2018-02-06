import React, { Component } from 'react'
import Slide from './Slide'
import RightArrow from './RightArrow'
import LeftArrow from './LeftArrow'

import binary from '../images/binary.png'
import monarch from '../images/monarch.png'
import snowflake from '../images/snowflake.png'

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      total: 3
    }
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
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
  }

  render() {
    return (
      <div className="slider">
        <div className="slide-container">
          { this.state.index === 0 ? <Slide image={binary} /> : null }
          { this.state.index === 1 ? <Slide image={monarch} /> : null } 
          { this.state.index === 2 ? <Slide image={snowflake} /> : null }
          <LeftArrow prevSlide={this.prevSlide} />
          <RightArrow nextSlide={this.nextSlide} />
        </div>
      </div>
    )
  }
}

export default Slider
