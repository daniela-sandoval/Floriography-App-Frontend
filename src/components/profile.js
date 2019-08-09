import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputForm from './inputForm'
import AdjForm from './adjForm'
import BouquetContainer from './bouquetContainer'

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
        <AdjForm submitClick={this.handleClick}/>
      :
      null
      }
      {this.state.input ?
        <InputForm submitClick={this.handleClick}/>
      :
      null
      }
      <BouquetContainer submitClick={this.handleClick}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.userReducer.currentUser.username,
    email: state.userReducer.currentUser.email
  }
}

export default connect(mapStateToProps, null)(Profile)
