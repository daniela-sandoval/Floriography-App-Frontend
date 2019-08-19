import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputForm from './inputForm'
import AdjForm from './adjForm'
import BouquetContainer from './bouquetContainer'
import { makeRandomBouquet } from "../actions/bouquetActions"
import { getProfile } from '../actions/userActions'
import "../Stylesheets/profile.scss";

class Profile extends Component {
  state = {
    adjective: false,
    input: false
  }

  componentDidMount() {
    this.props.getProfile()
  }
  handleClick = event => {
    this.setState({[event.target.className]: !this.state[event.target.className]})
  }

  handleRandom = () => {
    this.props.makeRandomBouquet(this.props.id)
  }

  render () {
    return (
      <div className="Profile">
        <div className="SideBar">
          <h1>{this.props.username}</h1>
          <p>User Email: {this.props.email}</p>
          <button className="adjective" onClick={this.handleClick}>MAKE ADJ BOUQUET</button><br/>
          <button className="input" onClick={this.handleClick}>MAKE INPUT BOUQUET</button><br/>
          <button className="random" onClick={this.handleRandom}>MAKE RANDOM BOUQUET</button><br/>
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
  makeRandomBouquet: makeRandomBouquet,
  getProfile: getProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
