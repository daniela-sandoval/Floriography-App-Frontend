import React, { Component } from 'react';
import "../Stylesheets/flowerCircle.scss"

class FlowerCircle extends Component {
  render() {
    return (
      <div className="flower-circle">{this.props.name}</div>
    )
  }
}

export default FlowerCircle
