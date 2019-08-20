import React, { Component } from 'react';
import "../Stylesheets/flowerCircle.scss"

class FlowerCircle extends Component {

  render() {
    return (
      <div className="box">
        <div style={{backgroundImage: `url(${this.props.img_url})`}} className="flwr-img">
        </div>
        <div className="middle">{this.props.name}
            <p>{this.props.meaning}</p>
        </div>
      </div>
    )
  }
}

export default FlowerCircle


// <img src={this.props.img_url} alt="a flower" className="flwr-img"/>


// <div onMouseEnter={this.handleHover} className="box">
//   <div style={{backgroundImage: `url(${this.props.img_url})`}} className="flwr-img">
//   </div>
//   {this.state.moreInfo ?
//     <div onMouseLeave={this.handleHover} className="flwr-name">{this.props.name}
//       <p>{this.props.meaning}</p>
//     </div>
//     : null
//   }
// </div>
