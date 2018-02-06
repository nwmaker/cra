import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Slider from './slider/Slider';
import Circle from './circle/Circle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-content">
          <Slider />
        </div>
        <Circle />
      </div>
    );
  }
}

export default App;
