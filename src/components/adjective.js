import React, { Component } from 'react'

class Adjective extends Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return <div onClick={this.handleClick} style={ this.state.clicked ? {color: "red"} : null } >{this.props.name}</div>
  }
}

export default Adjective
