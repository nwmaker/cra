import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import Slider from './slider/Slider';

//import Block from './layout/block'

//import Show from './simple-slider/show'
import Show from './simple-carousel/show'
//import Show from './infinite-slider/show'
//import Show from './infinite-show'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-content">
          <Show />
        </div>
      </div>
    );
  }
}

export default App;
