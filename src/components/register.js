import React, { Component } from 'react';

export default class Register extends Component {
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
    this.registerUser(this.state)
  }

  registerUser = (user) => {
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(data => {
      if(data.token) {
        localStorage.token = data.token
        this.props.history.push("/flowerapp")
      }
    })
  }

  render () {
    return (
      <div>
        Hello from register
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="reg_username">Username:</label>
          <input onChange={this.handleChange} name="username" id="reg_8username" type="text" placeholder="username" value={this.state.username}/><br/>
          <label htmlFor="reg_password">Password:</label>
          <input onChange={this.handleChange} name="password" id="reg_password" type="password" placeholder="password" value={this.state.password}/><br/>
          <input type="submit" value="Submit!"/>
        </form>
      </div>
    )
  }
}
