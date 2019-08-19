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
    input: false,
    editForm: false,
    username: "",
    email: ""
  }

  async componentDidMount() {
    await this.props.getProfile()
    this.setState({username: this.props.username, email: this.props.email})
  }

  handleClick = event => {
    this.setState({[event.target.className]: !this.state[event.target.className]})
  }

  handleRandom = () => {
    this.props.makeRandomBouquet(this.props.id)
  }

  handleEdit = () => {
    this.setState({editForm: !this.state.editForm})
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  render () {
    return (
      <div className="Profile">
        <div className="SideBar">
          <div className="user-info">
            {this.state.editForm ?
            <form className="edit-user">
              <label htmlFor="username">Username: </label>
              <input onChange={this.handleChange} id="username" type="text" value={this.state.username}/><br/><br/>
              <label htmlFor="email">Your Email: </label>
              <input onChange={this.handleChange} id="email" type="text" value={this.state.email}/>
              <input type="submit"/>
            </form>
            :
            <div>
              <button onClick={this.handleEdit}className="pencil-icon">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <h1>{this.props.username}</h1>
              <p>User Email: {this.props.email}</p>
            </div>
            }
          </div>
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
