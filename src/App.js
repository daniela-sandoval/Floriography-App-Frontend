import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Welcome from './components/welcome'
import FlowerApp from './components/flowerapp'


export default class App extends React.Component {
  // state = {
  //   text: ""
  // }
  //
  // handleChange = (event) => {
  //   this.setState({
  //     text: event.target.value
  //   })
  // }
  //
  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   fetch("http://localhost:3000/bouquets", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       text: this.state.text
  //     })
  //   })
  // }


  render() {
    return (
      <Switch>
        <Route path='/welcome' component={ Welcome }/>} />
        <Route path='/flowerapp' component={ FlowerApp } />
      </Switch>
    )
  }
}



// <h1>TEST</h1>
// <form onSubmit={this.handleSubmit}>
//   <input type="text" onChange={this.handleChange}value={this.state.text} placeholder="enter a phrase!"/>
//   <input type="submit"/>
// </form>
