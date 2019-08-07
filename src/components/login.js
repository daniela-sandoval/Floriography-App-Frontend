import React, { Component } from 'react';

export default class Logn extends Component {
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
    this.makeLogin(this.state)
  }

  makeLogin = (user) => {
    fetch("http://localhost:3000/login", {
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
