import React, { Component } from 'react';
import { connect } from 'react-redux'
import { newUserFetch } from '../actions/userActions'

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

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.newUserFetch(this.state)
  }

  render () {
    return (
      <div>
        <h1>REGISTER</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="reg_username">Username:</label>
          <input onChange={this.handleChange} name="username" id="reg_8username" type="text" placeholder="username" value={this.state.username}/><br/>
          <label htmlFor="reg_password">Password:</label>
          <input onChange={this.handleChange} name="password" id="reg_password" type="password" placeholder="password" value={this.state.password}/><br/>
          <label htmlFor="email">Email:</label>
          <input onChange={this.handleChange} name="email" id="email" type="text" placeholder="something@mail.com" value={this.state.email}/><br/>
          <input type="submit" value="Submit!"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  newUserFetch: newUserFetch
}

export default connect(null, mapDispatchToProps)(Register)