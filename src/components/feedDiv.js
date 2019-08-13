import React, { Component } from 'react';
import FlowerCircle from './flowerCircle'
import "../Stylesheets/bouquetDiv.scss"
import { connect } from 'react-redux';
import { deleteBouquet } from '../actions/bouquetActions'
import { makeFav } from '../actions/favActions'

class FeedDiv extends Component {
  state = {
    prompt: false,
    favorited: false
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

  favClick = () => {
    this.setState({favorited: true})
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
            {this.props.currentId === this.props.user.user_id ? <span onClick={this.handleClick} className="close-div">&times;</span> : null}
            <header>{this.props.name}</header>
            <p>Made by: {this.props.user.user_name}</p>
            <div className="flower-con">
              {makeCircles()}
            </div>
            <footer>
              <button className="fav">
                {this.state.favorited ? <i onClick={this.unfavClick} className="fa fa-star"> Saved!</i> : <i onClick={this.favClick} className="fa fa-star-o"> Favorite</i>}
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
    currentId: state.userReducer.currentId
  }
}

const mapDispatchToProps = {
  deleteBouquet: deleteBouquet,
  makeFav: makeFav
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedDiv)
