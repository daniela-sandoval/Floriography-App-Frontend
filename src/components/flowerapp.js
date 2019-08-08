import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './navbar';
import Profile from './profile'
import Feed from './feed'
import Garden from './garden'
import { connect } from 'react-redux'
import { getProfile } from '../actions/userActions'

class FlowerApp extends Component {

  componentDidMount() {
    if(!localStorage.token) {
      debugger
    this.props.history.push("/welcome")
    } else {
    this.props.getProfile()
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

const mapStateToProps = state => {
  return {
    logIn: state.userReducer.signIn
  }
}

const mapDispatchToProps = {
  getProfile: getProfile
}


export default connect(mapStateToProps, mapDispatchToProps)(FlowerApp)
