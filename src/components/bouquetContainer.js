import React, { Component } from 'react';
import { connect } from 'react-redux';
import BouquetDiv from './bouquetDiv'
import { getFavorites } from '../actions/favActions'
import "../Stylesheets/bouquetContainer.scss"

class BouquetContainer extends Component {
  state = {
    favs: false
  }

  handleClick = (userId) => {
    this.setState({favs: true}, () => {
      this.props.getFavorites(userId)
    })
  }
  render() {
    const makeBouquets = () => {
      return this.props.bouquets.map(bouquet => <BouquetDiv key={bouquet.id} {...bouquet}/>)
    }
    return (
      <div className="bouquet-container">
        <button>YOUR BOUQUETS</button>
        <button onClick={event => {this.handleClick(this.props.user_id)}}>YOUR FAVORITES</button>
        <div className="bouquet-box">
          {makeBouquets()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bouquets: state.bouquetReducer.userBouquets,
    user_id: state.userReducer.currentId
  }
}

const mapDispatchToProps = {
  getFavorites: getFavorites
}

export default connect(mapStateToProps, mapDispatchToProps)(BouquetContainer)
