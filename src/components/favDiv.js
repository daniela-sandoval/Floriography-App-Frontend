import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import FlowerCircle from './flowerCircle'
import { deleteFav } from '../actions/favActions'
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import "../Stylesheets/bouquetDiv.scss"

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}


class FavDiv extends Component {

  deleteDiv = () => {
    this.props.deleteFav(this.props.id)
  }

  handleDate = () => {
    let dateToFormat = this.props.created_at
    return <Moment className="time-made" format="LLLL">{dateToFormat}</Moment>
  }

  render() {
    const makeCircles = () => {
      return this.props.bouquet_flowers.map(flower => <FlowerCircle key={flower.id} {...flower}/>)
    }
    return (
      <StyleRoot>
        <div className="bouquet-div" style={styles.fadeIn}>
          <div className="header">{this.props.name}
            <p>made by: {this.props.user.user_name}</p>
          </div>
          <div className="flower-con">
            {makeCircles()}
          </div>
          <footer>
            <button className="footer-btn" onClick={this.deleteDiv}>
              <i className="fa fa-star"></i> Saved!
            </button>
            {this.handleDate()}
          </footer>
        </div>
      </StyleRoot>
    )
  }
}

const mapStateToProps = state => {
  return {
    userFavs: state.favReducer.userFavs
  }
}

const mapDispatchToProps = {
  deleteFav: deleteFav
}

export default connect(mapStateToProps, mapDispatchToProps)(FavDiv)
