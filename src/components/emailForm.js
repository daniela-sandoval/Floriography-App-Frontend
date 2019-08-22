import React, { Component } from 'react';
import { pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import '../Stylesheets/emailForm.scss'

const styles = {
  pulse: {
    animation: 'x 1s',
    animationName: Radium.keyframes(pulse, 'pulse')
  }
}

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
      <StyleRoot>
        <div className="email-modal" style={styles.pulse}>
          <div className="email-content">
            <span className="email-close" onClick={this.props.onSubmit}>&times;</span>
            <h4>Send your bouquet to someone!</h4>
            <div className="email-form">
              <label htmlFor="email">Email</label><br/>
              <input onChange={this.handleChange}type="text"placeholder="example@email.com"/><br/>
              <button id="email-submit" onClick={this.handleSubmit}>SEND</button>
            </div>
          </div>
        </div>
      </StyleRoot>
    )
  }
}

export default EmailForm
