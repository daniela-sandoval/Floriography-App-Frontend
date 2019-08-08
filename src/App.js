import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import './App.css';
import Welcome from './components/welcome'
import FlowerApp from './components/flowerapp'


class App extends React.Component {

  componentDidMount() {
    if(localStorage.token) {
    this.props.history.push("/flowerapp")
    }
  }

  render() {
    return (
      <Switch>
        <Route path='/welcome' component={ Welcome }/>} />
        <Route path='/flowerapp' component={ FlowerApp } />
      </Switch>
    )
  }
}


export default withRouter(App)
