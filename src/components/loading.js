import React, { Component } from 'react'
import plant from "../Stylesheets/green-plant.svg"
// import ReactSVG from 'react-svg'
import { connect } from 'react-redux'
import { turnOffLoading, addNewToBouquet } from '../actions/bouquetActions'
import { flash } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import "../Stylesheets/loading.scss"

const styles = {
  flash: {
    animation: 'x 2s',
    animationName: Radium.keyframes(flash, 'flash')
  }
}

class Loading extends Component {
  componentDidMount() {
    setTimeout(() => { this.props.turnOffLoading() }, 2000);
  }

  componentWillUnmount() {
    // RUN MY DISPATCHES
    this.props.addNewToBouquet()
  }

  render () {

    return (
      <StyleRoot>
        <div className="loading-div" style={styles.flash}>
          <img className="the-plant" src={ plant } alt="green-plant"/>
          <p>LOADING PLS WAIT</p>
        </div>
      </StyleRoot>
    )
  }
}

const mapDispatchToProps = {
  turnOffLoading: turnOffLoading,
  addNewToBouquet: addNewToBouquet
}

export default connect(null, mapDispatchToProps)(Loading)

// <ReactSVG className="the-plant" src={ plant } alt="green-plant"/>
// when the component mounts, show it for 3 seconds then turn off the loading and ADD the bouquet to the current user bouquets
