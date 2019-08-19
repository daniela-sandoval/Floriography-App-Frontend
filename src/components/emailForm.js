import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Stylesheets/emailForm.scss'

class EmailForm extends Component {
  state = {
    recipient: ""
  }

  handleChange = (event) => {
    this.setState({recipient: event.target.value})
  }

  handleSubmit = () => {
    if(!(this.state.recipient === "")) {
      this.props.sendEmail(this.state.recipient)
    } else {
      alert("pls enter an email!")
    }
  }

  render() {
    return (
      <div className="email-modal">
        <div className="email-content">
          <span className="email-close" onClick={this.props.onSubmit}>&times;</span>
          <h4>EMAIL FORM</h4>
          <p>Enter someone's email to send your bouquet to!</p>
          <label htmlFor="email">Send to? </label>
          <input onChange={this.handleChange}type="text"placeholder="example@email.com"/><br/>
          <button onClick={this.handleSubmit}>SEND</button>
        </div>
      </div>
    )
  }
}

export default EmailForm
