import React, { Component } from 'react';
import Login from './login'
import Register from './register'

export default class Welcome extends Component {

  componentDidMount() {
    if(localStorage.token) {
      this.props.history.push("/flowerapp")
    }
  }
  
  render () {
    return (
      <div>
        <Login {...this.props}/>
        <Register {...this.props}/>
      </div>
    )
  }
}
