import React, { Component } from 'react'
import Slider from './slider'

import binary from '../images/binary.png'
import monarch from '../images/binary.png'
import smd from '../images/binary.png'
import ursaminor from '../images/binary.png'
import snowflake from '../images/binary.png'

const images = [
  binary,
  monarch,
  smd,
  ursaminor,
  snowflake
]

export default class Play extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
    
  }
  render() {
    return (
      <div className="play">
        <Slider images={imagesName} index={this.state.index} />
      </div>
    )
  }
}
