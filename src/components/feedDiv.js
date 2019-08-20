import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import FlowerCircle from './flowerCircle'
import { deleteBouquet, updateFeed } from '../actions/bouquetActions'
import { makeFav, getFavorites, deleteFav } from '../actions/favActions'
import "../Stylesheets/feedDiv.scss"

class FeedDiv extends Component {
  state = {
    prompt: false,
    delete: false
  }

  componentDidMount() {
    this.props.getFavorites (this.props.currentId)
  }

  handleDate = () => {
    let dateToFormat = this.props.created_at
    return <Moment className="time-made" format="LLLL">{dateToFormat}</Moment>
  }

  handleClick = () => {
    this.setState({delete: true})
  }

  buttonClick = () => {
    this.setState({delete: false})
  }

  deleteDiv = () => {
    this.props.deleteBouquet(this.props.id)
    this.props.updateFeed(this.props.id)
  }

  favClick = () => {
    this.props.makeFav(this.props.currentId, this.props.id)
  }

  unfavClick = () => {
    debugger
    let favId = this.props.userFavs.find(fav => fav.bouquet_id === this.props.id).id
    this.props.deleteFav(favId)
  }

  render() {
    const makeCircles = () => {
      return this.props.bouquet_flowers.map(flower => <FlowerCircle key={flower.id} {...flower}/>)
    }
    return (
      <div className="bouquet">
        {this.state.delete ?
          <div className="feed-prompt">
            <h3>Are you sure?</h3>
            <button onClick={this.deleteDiv}>Yes</button>
            <button onClick={this.buttonClick}>No</button>
          </div>
          :
          <div className="feed-div">
            {this.props.currentId === this.props.user.user_id ? <span onClick={this.handleClick} className="close-div">&times;</span> : null}
            <div className="header">{this.props.name}
              <p>made by: {this.props.user.user_name}</p>
            </div>
            <div className="flower-con">
              {makeCircles()}
            </div>
            <footer>
              {this.props.userFavs.some(fav => fav.bouquet_id === this.props.id) ?
                <button className="feed-btn" onClick={this.unfavClick}>
                  <i className="fa fa-star"></i> Saved!
                </button>
                :
                <button className="feed-btn" onClick={this.favClick}>
                  <i className="fa fa-star-o"></i> Favorite
                </button>
              }
            {this.handleDate()}
            </footer>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentId: state.userReducer.currentId,
    userFavs: state.favReducer.userFavs
  }
}

const mapDispatchToProps = {
  deleteBouquet: deleteBouquet,
  getFavorites : getFavorites,
  makeFav: makeFav,
  deleteFav: deleteFav,
  updateFeed: updateFeed
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedDiv)
