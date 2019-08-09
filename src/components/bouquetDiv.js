import React, { Component } from 'react';
import FlowerCircle from './flowerCircle'

class BouquetDiv extends Component {


  render() {
    const makeCircles = () => {
      return this.props.bouquet_flowers.map(flower => <li><FlowerCircle key={flower.id} {...flower}/></li>)
    }
    return (
      <div>
        <h5>{this.props.name}</h5>
        <ul>
          {makeCircles()}
        </ul>
      </div>
    )
  }
}

export default BouquetDiv
