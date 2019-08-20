import React, { Component } from 'react';
import "../Stylesheets/flowerCircle.scss"

class FlowerCircle extends Component {
  // state = {
  //   moreInfo: false,
  //   blur: false
  // }
  //
  // handleHover = (event) => {
  //   // console.log(event.target)
  //   this.setState({moreInfo: !this.state.moreInfo})
  // }

  // handleLeave = () => {
  //   this.setState({moreInfo: false})
  // }

  render() {
    return (
      <div className="box">
        <img src={this.props.img_url} alt="a flower" className="flwr-img"/>
        <div className="middle">
          <div id="flwr-name">{this.props.name}</div>
        </div>
      </div>
    )
  }
}

export default FlowerCircle





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
