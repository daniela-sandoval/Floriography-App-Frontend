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

    handleSubmit = async (event) => {
    event.preventDefault()
    if(!(this.state.username === "") && !(this.state.email === "")) {
      await this.props.userLoginFetch(this.state)
      if (this.props.errorStatus === false) {
        this.props.history.push("/profile")
        this.setState({username: "", password: ""})
      }
    } else {
      alert("Please completely fill out the form!")
    }

  }


  render () {
    return (
      <div className="login">
        <h1>LOGIN</h1>
        <form onSubmit={this.handleSubmit}>
          {this.props.errorStatus ? <p>{this.props.errors}</p> : null}
          <label htmlFor="username">Username</label><br/>
          <input onChange={this.handleChange} name="username" id="username" type="text" placeholder="username"/><br/>
          <label htmlFor="password">Password</label><br/>
          <input onChange={this.handleChange} name="password" id="password" type="password" placeholder="password"/><br/>
          <input id="login-btn" type="submit" value="Submit!"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    errorStatus: state.userReducer.errorStatus,
    errors: state.userReducer.error
  }
}

const mapDispatchToProps = {
  userLoginFetch: userLoginFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
