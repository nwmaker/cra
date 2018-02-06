import React, { Component } from 'react'
import Slide from './Slide'
import RightArrow from './RightArrow'

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
    this.nextSlide = this.nextSlide.bind(this);
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
          <RightArrow nextSlide={this.nextSlide} />
        </div>
      </div>
    )
  }
}

export default Slider
