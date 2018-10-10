import React, { Component } from 'react';

class ColorBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }

  render() {
    let styles = {
      backgroundColor: this.props.colors[this.state.currentIndex],
      height: 300,
      width: 300,
      fontSize: 50,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',




    }
    console.log(this.props.colors);
    return (
      <header style = {styles}>
      <div onClick={this.Changecolors}>
          {this.props.colors[this.state.currentIndex]}

      </div>
        </header>



    )
  }
  Changecolors = () => {
    let { currentIndex } = this.state
    this.setState({ currentIndex: currentIndex + 1})
  }

}


export default ColorBox;
