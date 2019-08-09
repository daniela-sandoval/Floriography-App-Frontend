import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputForm from './inputForm'
import AdjForm from './adjForm'

class Profile extends Component {
  state = {
    adjective: false,
    input: false,
    random: false
  }

  handleClick = event => {
    this.setState({[event.target.id]: !this.state[event.target.id]})
  }

  handleRandom = () => {
    debugger
  }

  render () {
    return (
      <div>
      <h1>{this.props.username}</h1>
      <button id="adjective" onClick={this.handleClick}>MAKE ADJ BOUQUET</button>
      <button id="input" onClick={this.handleClick}>MAKE INPUT BOUQUET</button>
      <button id="random" onClick={this.handleRandom}>MAKE RANDOM BOUQUET</button>
      {this.state.adjective ?
        <AdjForm/>
      :
      null
      }
      {this.state.input ?
        <InputForm/>
      :
      null
      }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.userReducer.currentUser.username,
    email: state.userReducer.currentUser.email,
    bouquets: state.userReducer.currentUser.bouquets
  }
}

export default connect(mapStateToProps, null)(Profile)
