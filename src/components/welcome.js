import React, { Component } from 'react';
import Login from './login'
import Register from './register'
import "../Stylesheets/welcome.scss"
import { pulse, fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
// import BannerLeaves from '../Stylesheets/pics/hills1.jpg'
import BannerLeaves from '../Stylesheets/pics/hills3.png'

const styles = {
  pulse: {
    animation: 'x 2s',
    animationName: Radium.keyframes(pulse, 'pulse'),
  },
  fadeIn: {
    animation: 'x 4s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  }
}

export default class Welcome extends Component {

  render () {
    return (
      <StyleRoot>
      <div className="wrapper">
        <img id="leave-banner" src={BannerLeaves} alt="leaf banner" style={styles.fadeIn}/>
          <div className="welcome" style={styles.pulse}>
            <h1 id="title">Floriography</h1>
            <div className="user-forms">
              <Login {...this.props}/>
              <Register {...this.props}/>
            </div>
          </div>
      </div>
    </StyleRoot>
    )
  }
}
