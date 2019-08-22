import React, { Component } from 'react';
import { connect } from 'react-redux'
import { newUserFetch } from '../actions/userActions'
import "../Stylesheets/register.scss"

class Register extends Component {
  state = {
    username: "",
    password: "",
    email: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async (event) => {
  event.preventDefault()
  await this.props.newUserFetch(this.state)
  this.props.history.push("/flowerapp/profile")

}

  render () {
    return (
      <div className="register">
        <h1>REGISTER</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="reg_username">Username</label><br/>
          <input onChange={this.handleChange} name="username" id="reg_8username" type="text" placeholder="username" value={this.state.username}/><br/>
          <label htmlFor="reg_password">Password</label><br/>
          <input onChange={this.handleChange} name="password" id="reg_password" type="password" placeholder="password" value={this.state.password}/><br/>
          <label htmlFor="email">Email</label><br/>
          <input onChange={this.handleChange} name="email" id="email" type="text" placeholder="something@mail.com" value={this.state.email}/><br/>
          <input  id="register-btn" type="submit" value="Submit!"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  newUserFetch: newUserFetch
}

export default connect(null, mapDispatchToProps)(Register)
