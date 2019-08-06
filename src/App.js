import React from 'react';
import './App.css';

export default class App extends React.Component {
  state = {
    text: ""
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: this.state.text
      })
    })
  }


  render() {
    return (
      <div>
        <h1>TEST</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}value={this.state.text} placeholder="enter a phrase!"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
