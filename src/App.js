import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Colorbox from './ColorBox';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      colors: ["green", "blue", "yellow", "red", "purple", "white", "gray", "orange", "lightblue"]
    }
  };


  render() {
    return (
      <div>
        <Colorbox colors={this.state.colors} Changecolor={this.props.Changecolors} />
      </div>
    );
  }
}

export default App;
