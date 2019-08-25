import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import './Stylesheets/App.css';
import Welcome from './components/welcome'
import FlowerApp from './components/flowerapp'


class App extends React.Component {

  componentDidMount() {
    if(localStorage.token) {
      this.props.history.push("/profile")
    } else {
      this.props.history.push("/welcome")
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path='/welcome' component={ Welcome }/>} />
        <Route path='/' component={ FlowerApp } />
      </Switch>
    )
  }
}


export default withRouter(App)
