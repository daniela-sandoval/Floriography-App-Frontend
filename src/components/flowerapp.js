import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './navbar';
import Profile from './profile'
import Feed from './feed'
import Garden from './garden'

class FlowerApp extends Component {

  componentDidMount() {
    if(!localStorage.token) {
    this.props.history.push('/welcome')
    }
  }


  render () {
    return (
      <div className="flower-app">
        <Navbar/>
        <Switch>
          <Route path="/profile" component={ Profile }/>
          <Route path="/feed" component={ Feed }/>
          <Route path="/garden" component={ Garden }/>
        </Switch>
      </div>
    )
  }
}


export default FlowerApp
