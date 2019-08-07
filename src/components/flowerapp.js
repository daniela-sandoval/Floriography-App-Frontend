import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './navbar';
import Profile from './profile'
import Feed from './feed'
import Garden from './garden'
import Auth from './Auth'

class FlowerApp extends Component {

  componentDidMount() {
    fetch("http://localhost:3000/profile", {
      headers: {
      "Authorization": localStorage.token
      }
    })
    .then(resp => resp.json())
    .then(console.log)
  }

  render () {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route path="/flowerapp/profile" component={ Profile }/>
          <Route path="/flowerapp/feed" component={ Feed }/>
          <Route path="/flowerapp/garden" component={ Garden }/>
        </Switch>
      </div>
    )
  }
}

export default Auth(FlowerApp, localStorage)
