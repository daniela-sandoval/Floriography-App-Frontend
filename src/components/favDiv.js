import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlowerCircle from './flowerCircle'
import { getFavorites, deleteFav } from '../actions/favActions'
import "../Stylesheets/bouquetDiv.scss"

class FavDiv extends Component {
  state = {
    favorited: false
  }

  componentDidMount() {
    this.props.getFavorites(this.props.currentId)
  }


  deleteDiv = () => {
    let updatedBouquets = this.props.userFavs.filter(fav => !(fav.id === this.props.id))
    this.props.deleteFav(this.props.id, updatedBouquets)
  }

  render() {
    const makeCircles = () => {
      return this.props.bouquet_flowers.map(flower => <FlowerCircle key={flower.id} {...flower}/>)
    }
    return (
      <div className="bouquet-div">
        <header>{this.props.name}</header>
        <p>Made by: {this.props.user.user_name}</p>
        <div className="flower-con">
          {makeCircles()}
        </div>
        <footer>
          <button className="fav">
            {this.props.userFavs.some(fav => fav.id === this.props.id) ? <i onClick={this.deleteDiv} className="fa fa-star"> Saved!</i> : <i onClick={event => {this.favClick(this.props.id)}} className="fa fa-star-o"> Favorite</i>}
          </button>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentId: state.userReducer.currentId,
    userFavs: state.bouquetReducer.userFavs
  }
}

const mapDispatchToProps = {
  getFavorites: getFavorites,
  deleteFav: deleteFav
}

export default connect(mapStateToProps, mapDispatchToProps)(FavDiv)
