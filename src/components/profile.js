import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputForm from './inputForm'
import AdjForm from './adjForm'
import BouquetContainer from './bouquetContainer'
import { makeRandomBouquet } from "../actions/bouquetActions"
import "../Stylesheets/profile.scss";

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
    this.props.makeRandomBouquet(this.props.id)
  }

  render () {
    return (
      <div className="Profile">
        <div className="SideBar">
          <h1>{this.props.username}</h1>
          <button id="adjective" onClick={this.handleClick}>MAKE ADJ BOUQUET</button><br/>
          <button id="input" onClick={this.handleClick}>MAKE INPUT BOUQUET</button><br/>
          <button id="random" onClick={this.handleRandom}>MAKE RANDOM BOUQUET</button><br/>
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
        </div>
      <BouquetContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.userReducer.currentUser.username,
    email: state.userReducer.currentUser.email,
    id: state.userReducer.currentUser.id
  }
}

const mapDispatchToProps = {
  makeRandomBouquet: makeRandomBouquet
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
