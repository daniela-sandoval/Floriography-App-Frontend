import React, { Component } from 'react';
import Login from './login'
import Register from './register'

export default class Welcome extends Component {

  render () {
    return (
      <div>
        <Login {...this.props}/>
        <Register {...this.props}/>
      </div>
    )
  }
}
