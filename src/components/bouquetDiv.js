import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlowerCircle from './flowerCircle'
import { deleteBouquet } from '../actions/bouquetActions'
import { makeFav } from '../actions/favActions'
import "../Stylesheets/bouquetDiv.scss"

class BouquetDiv extends Component {
  state = {
    prompt: false,
    favorited: false,
    delete: false
  }

  handleClick = () => {
    this.setState({delete: true})
  }

  buttonClick = () => {
    this.setState({delete: false})
  }

  deleteDiv = () => {
    debugger
    let updatedBouquets = this.props.bouquets.filter(bouquet => !(bouquet.id === this.props.id))
    this.props.deleteBouquet(this.props.id, updatedBouquets)
  }

  favClick = (bouquetId) => {
    this.setState({favorited: true}, () => {
      this.props.makeFav(this.props.currentId, bouquetId)
    })
  }

  unfavClick = () => {
    this.setState({favorited: false})
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
                {this.props.userFavs.some(fav => fav.bouquet_id === this.props.id) ? <i onClick={this.unfavClick} className="fa fa-star"> Saved!</i> : <i onClick={event => {this.favClick(this.props.id)}} className="fa fa-star-o"> Favorite</i>}
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
    bouquets: state.bouquetReducer.userBouquets,
    username: state.userReducer.username,
    currentId: state.userReducer.currentId,
    userFavs: state.bouquetReducer.userFavs
  }
}

const mapDispatchToProps = {
  deleteBouquet: deleteBouquet,
  makeFav: makeFav
}

export default connect(mapStateToProps, mapDispatchToProps)(BouquetDiv)
