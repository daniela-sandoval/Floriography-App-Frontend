import React, { Component } from 'react';
import Login from './login'
import Register from './register'
import "../Stylesheets/welcome.scss"

export default class Welcome extends Component {

  render () {
    return (
      <div className="wrapper">
        <div className="welcome">
          <h1>Flwr App</h1>
          <div className="user-forms">
            <Login {...this.props}/>
            <Register {...this.props}/>
          </div>
        </div>
      </div>
    )
  }
}
