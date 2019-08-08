import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './navbar';
import Profile from './profile'
import Feed from './feed'
import Garden from './garden'
import { getProfile } from '../actions/userActions'
import { connect } from 'react-redux'

class FlowerApp extends Component {

  componentDidMount() {
    if(localStorage.token) {
    this.props.getProfile()
  } else {
    this.props.history.push('/welcome')
    }
  }


  render () {
    console.log(this.props)
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

const mapDispatchToProps = {
  getProfile: getProfile
}

export default connect(null, mapDispatchToProps)(FlowerApp)
