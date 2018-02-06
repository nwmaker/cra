import React, { Component } from 'react'
import Circle from './Circle'
import './Circle.css'

export default class Show extends Component {
  render() {
    return (
      <div className="circle-container">
        <Circle />
      </div>
    )
  }
}
