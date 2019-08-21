import React, { Component } from 'react';
import { connect } from 'react-redux'
import { userLoginFetch } from '../actions/userActions'
import "../Stylesheets/login.scss"

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

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   this.props.userLoginFetch(this.state)
  //   this.props.history.push("/flowerapp")
  //
  // }

    handleSubmit = async (event) => {
    event.preventDefault()
    await this.props.userLoginFetch(this.state)
    this.props.history.push("/flowerapp")

  }


  render () {
    return (
      <div className="login">
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
