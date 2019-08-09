import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeInputBouquet } from '../actions/bouquetActions'

class inputForm extends Component {
  state = {
    title: "",
    sentence: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.makeInputBouquet(this.props.userId, this.state)
    this.props.submitClick(event)
  }

  render() {
    return (
    <div>
      <h4>pls type a sentence</h4>
      <form id="input" onSubmit={this.handleSubmit}>
        <label htmlFor="title">Your Title: </label>
        <input name="title" id="title" type="text" onChange={this.handleChange} value={this.state.title} placeholder="enter a phrase!"/><br/>

        <label htmlFor="sentence">Your Sentence: </label>
        <input name="sentence" id="sentence" type="text" onChange={this.handleChange} value={this.state.sentence} placeholder="enter a phrase!"/>

        <input type="submit"/>
      </form>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.userReducer.currentUser.id,
  }
}

const mapDispatchToProps = {
  makeInputBouquet: makeInputBouquet
}

export default connect(mapStateToProps, mapDispatchToProps)(inputForm)
