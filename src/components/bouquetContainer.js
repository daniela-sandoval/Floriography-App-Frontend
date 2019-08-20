import React, { Component } from 'react';
import { connect } from 'react-redux';
import BouquetDiv from './bouquetDiv'
import FavDiv from './favDiv'
import Loading from './loading'
import { getFavorites } from '../actions/favActions'
import "../Stylesheets/bouquetContainer.scss"

class BouquetContainer extends Component {

  state = {
    user: true,
    favs: false
  }

  handleClick = () => {
    this.setState({user: false, favs: true}, () => this.props.getFavorites(this.props.user_id))
  }

  getUserBouquets = () => {
    this.setState({user: true, favs: false})
  }

  render() {
    const makeBouquets = () => {
      if(this.state.user) {
        return this.props.bouquets.map(bouquet => <BouquetDiv key={bouquet.id} {...bouquet}/>)
      } else {
        return this.props.userFavs.map(fav => <FavDiv key={fav.id} {...fav}/>)
      }
    }
    return (
      <div className="bouquet-container">
        <div>
          <button className="profile-btns" style={this.state.user ? {color: "#3d407d"} : null} onClick={this.getUserBouquets}>YOUR BOUQUETS</button>
          <button className="profile-btns" style={this.state.favs ? {color: "#3d407d"} : null} onClick={this.handleClick}>YOUR FAVORITES</button>
        </div>
        {this.props.loading ? <Loading /> : null}
        {makeBouquets()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bouquets: state.bouquetReducer.userBouquets,
    user_id: state.userReducer.currentId,
    userFavs: state.favReducer.userFavs,
    loading: state.bouquetReducer.loading
  }
}

const mapDispatchToProps = {
  getFavorites: getFavorites
}

export default connect(mapStateToProps, mapDispatchToProps)(BouquetContainer)
