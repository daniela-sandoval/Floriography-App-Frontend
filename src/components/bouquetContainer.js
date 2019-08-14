import React, { Component } from 'react';
import { connect } from 'react-redux';
import BouquetDiv from './bouquetDiv'
import FeedDiv from './feedDiv'
import { getFavorites } from '../actions/favActions'
import { userBouquets } from '../actions/bouquetActions'
import "../Stylesheets/bouquetContainer.scss"

class BouquetContainer extends Component {

  handleClick = (userId) => {
    this.props.getFavorites(userId)
  }

  getUserBouquets = () => {
    this.props.userBouquets()
  }

  render() {
    const makeBouquets = () => {
      if(this.props.favStatus === false) {
        return this.props.bouquets.map(bouquet => <BouquetDiv key={bouquet.id} {...bouquet}/>)
      } else {
        return this.props.userFavs.map(bouquet => <FeedDiv key={bouquet.id} {...bouquet}/>)
      }
    }
    return (
      <div className="bouquet-container">
        <button onClick={this.getUserBouquets}>YOUR BOUQUETS</button>
        <button onClick={event => {this.handleClick(this.props.user_id)}}>YOUR FAVORITES</button><br/>
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
    user_id: state.userReducer.currentId,
    userFavs: state.bouquetReducer.userFavs,
    favStatus: state.bouquetReducer.favStatus
  }
}

const mapDispatchToProps = {
  getFavorites: getFavorites,
  userBouquets: userBouquets
}

export default connect(mapStateToProps, mapDispatchToProps)(BouquetContainer)
