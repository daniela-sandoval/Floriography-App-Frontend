import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputForm from './inputForm'

class Profile extends Component {
  state = {
    makeFlower: false
  }

  handleClick = () => {
    this.setState({makeFlower: !this.state.makeFlower})
  }

  render () {
    return (
      <div>
      <h1>{this.props.username}</h1>
      <button onClick={this.handleClick}>MAKE A BOUQUET</button>
      {this.state.makeFlower ?
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
