import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlowerCircle from './flowerCircle'
import "../Stylesheets/flowerHolder.scss"
import { fetchFlowers } from '../actions/flowerActions'

class FlowerHolder extends Component {

  componentDidMount() {
    this.props.fetchFlowers()
  }

  render() {
    if(this.props.filtered[0]) {
      const makeFlowers = () => {
        return this.props.filtered.map(flower => <FlowerCircle key={flower.id} {...flower}/>)
      }
      return (
        <div className="garden-holder">
          {makeFlowers()}
        </div>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = state => {
  return {
    filtered: state.flowerReducer.filtered
  }
}

const mapDispatchToProps = {
  fetchFlowers: fetchFlowers
}

export default connect(mapStateToProps, mapDispatchToProps)(FlowerHolder)
