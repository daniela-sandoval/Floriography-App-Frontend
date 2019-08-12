import React, { Component } from 'react';
import "../Stylesheets/flowerCircle.scss"

class FlowerCircle extends Component {
  render() {
    return (
      <div className="flower-circle">
        <img className="flwr-img" src={this.props.img_url} alt='it broke'/>
      </div>
    )
  }
}

export default FlowerCircle
