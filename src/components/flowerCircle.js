import React, { Component } from 'react';
import "../Stylesheets/flowerCircle.scss"

class FlowerCircle extends Component {
  state = {
    moreInfo: false
  }

  handleHover = (event) => {
    // console.log(event.target)
    this.setState({moreInfo: !this.state.moreInfo})
  }

  // handleLeave = () => {
  //   this.setState({moreInfo: false})
  // }

  render() {
    return (
      <div className="test">
        <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} style={{backgroundImage: `url(${this.props.img_url})`}} className="flwr-img">
        </div>
        {this.state.moreInfo ?
          <div className="flwr-name">{this.props.name}
            <p>{this.props.meaning}</p>
          </div>
        : null
        }
     </div>
    )
  }
}

export default FlowerCircle
