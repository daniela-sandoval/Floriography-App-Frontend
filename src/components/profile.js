import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputForm from './inputForm'
import AdjForm from './adjForm'
import BouquetContainer from './bouquetContainer'
import { makeRandomBouquet } from "../actions/bouquetActions"
import { getProfile, updateUserInfo, deleteAccount } from '../actions/userActions'
import "../Stylesheets/profile.scss";

class Profile extends Component {
  state = {
    adjective: false,
    input: false,
    editForm: false,
    username: "",
    email: "",
    deletePrompt: false
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

  handleSubmit = async(event) => {
    event.preventDefault()
    // have some check to make sure things aren't empty
    if(!(this.state.username === "") && !(this.state.email === "")) {
      await this.props.updateUserInfo(this.state.username, this.state.email, this.props.id)
      this.handleEdit()
    } else {
      alert("pls provide a new username or email...")
    }
  }

  handleDelete = () => {
    this.setState({deletePrompt: !this.state.deletePrompt})
  }

  actuallyDelete = async() => {
    await this.props.deleteAccount(this.props.id)
    this.props.history.push("/welcome")
  }

  render () {
    return (
      <div className="Profile">
        <div className="SideBar">
          <div className="user-info">
            {this.state.editForm ?
            <form onSubmit={this.handleSubmit}className="edit-user">
              <span onClick={this.handleEdit} className="edit-close-btn">&times;</span><br/>
              <h4>Edit Your Profile!</h4>
              <label htmlFor="username">Username: </label>
              <input onChange={this.handleChange} id="username" type="text" value={this.state.username}/><br/><br/>
              <label htmlFor="email">Your Email: </label>
              <input onChange={this.handleChange} id="email" type="text" value={this.state.email}/>
              <input type="submit"/>
            </form>
            :
            <div>
              <button onClick={this.handleEdit} className="pencil-icon">
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <h1>{this.props.username}</h1>
              <p>User Email: {this.props.email}</p>
            </div>
            }
          </div>
          <button id="adj-btn" className="adjective" onClick={this.handleClick}>MAKE ADJ BOUQUET</button><br/>
          <button id="input-btn" className="input" onClick={this.handleClick}>MAKE INPUT BOUQUET</button><br/>
          <button id="random-btn"className="random" onClick={this.handleRandom}>MAKE RANDOM BOUQUET</button><br/>
          <br/>
          <br/>
          {this.state.deletePrompt ?
            <div>
              <p>Are you sure??</p>
              <button onClick={this.actuallyDelete}>YES</button>
              <button onClick={this.handleDelete}>NO</button>
            </div>
            :
            <button id="delete-btn" onClick={this.handleDelete}>Delete Your Account?</button>
          }
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
  getProfile: getProfile,
  updateUserInfo: updateUserInfo,
  deleteAccount: deleteAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
