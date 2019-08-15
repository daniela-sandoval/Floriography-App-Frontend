import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlowerCircle from './flowerCircle'
import { deleteBouquet } from '../actions/bouquetActions'
import { makeFav, deleteFav, getFavorites } from '../actions/favActions'
import "../Stylesheets/bouquetDiv.scss"

class BouquetDiv extends Component {
  state = {
    prompt: false,
    delete: false
  }

  componentDidMount() {
    this.props.getFavorites(this.props.currentId)
  }

  handleClick = () => {
    this.setState({delete: true})
  }

  buttonClick = () => {
    this.setState({delete: false})
  }

  favClick = () => {
    debugger
    this.props.makeFav(this.props.currentId, this.props.id)
  }

  unfavClick = () => {
    let favId = this.props.userFavs.find(fav => fav.bouquet_id === this.props.id).id
    this.props.deleteFav(favId)
  }

  deleteDiv = () => {
    this.props.deleteBouquet(this.props.id)
  }

  render() {
    const makeCircles = () => {
      return this.props.bouquet_flowers.map(flower => <FlowerCircle key={flower.id} {...flower}/>)
    }
    return (
      <div className="bouquet-div">
        {this.state.delete ?
          <div className="prompt">
            <h3>Are you sure?</h3>
            <button onClick={this.deleteDiv}>Yes</button>
            <button onClick={this.buttonClick}>No</button>
          </div>
          :
          <div>
            <span onClick={this.handleClick} className="close-div">&times;</span>
            <header>{this.props.name}</header>
            <p>Made by: {this.props.username}</p>
            <div className="flower-con">
              {makeCircles()}
            </div>
            <footer>
              <button className="fav">
                {this.props.userFavs.some(fav => fav.bouquet_id === this.props.id) ? <i onClick={this.unfavClick} className="fa fa-star"> Saved!</i> : <i onClick={this.favClick} className="fa fa-star-o"> Favorite</i>}
              </button>
            </footer>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.userReducer.username,
    currentId: state.userReducer.currentId,
    userFavs: state.favReducer.userFavs
  }
}

const mapDispatchToProps = {
  deleteBouquet: deleteBouquet,
  makeFav: makeFav,
  deleteFav: deleteFav,
  getFavorites: getFavorites
}

export default connect(mapStateToProps, mapDispatchToProps)(BouquetDiv)
