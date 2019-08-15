import React, { Component } from 'react';
import { connect } from 'react-redux';
import BouquetDiv from './bouquetDiv'
import FavDiv from './favDiv'
import { getFavorites } from '../actions/favActions'
import { userBouquets } from '../actions/bouquetActions'
import "../Stylesheets/bouquetContainer.scss"

class BouquetContainer extends Component {

  state = {
    user: true,
    favs: false
  }

  handleClick = (userId) => {
    this.setState({user: false, favs: true}, () => this.props.getFavorites(userId))
  }

  getUserBouquets = () => {
    this.setState({user: true, favs: false}, () => this.props.userBouquets())
  }

  render() {
    const makeBouquets = () => {
      if(this.state.user) {
        return this.props.bouquets.map(bouquet => <BouquetDiv key={bouquet.id} {...bouquet}/>)
      } else {
        return this.props.userFavs.map(bouquet => <FavDiv key={bouquet.id} {...bouquet}/>)
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
    userFavs: state.bouquetReducer.userFavs
  }
}

const mapDispatchToProps = {
  getFavorites: getFavorites,
  userBouquets: userBouquets
}

export default connect(mapStateToProps, mapDispatchToProps)(BouquetContainer)
