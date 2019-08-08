import React, { Component } from 'react';
import { connect } from 'react-redux'
import { userLoginFetch } from '../actions/userActions'

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.userLoginFetch(this.state)
  }


  render () {
    return (
      <div>
        <h1>LOGIN</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input onChange={this.handleChange} name="username" id="username" type="text" placeholder="username"/><br/>
          <label htmlFor="password">Password:</label>
          <input onChange={this.handleChange} name="password" id="password" type="password" placeholder="password"/><br/>
          <input type="submit" value="Submit!"/>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = {
  userLoginFetch: userLoginFetch
}

export default connect(null, mapDispatchToProps)(Login)
