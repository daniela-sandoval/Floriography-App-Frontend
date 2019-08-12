import React, { Component } from 'react';
import FlowerCircle from './flowerCircle'
import "../Stylesheets/bouquetDiv.scss"
import { connect } from 'react-redux';
import { deleteBouquet } from '../actions/bouquetActions'

class BouquetDiv extends Component {
  state = {
    prompt: false
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
            <div className="flower-con">
              {makeCircles()}
            </div>
            <footer>STUFF</footer>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bouquets: state.bouquetReducer.userBouquets
  }
}

const mapDispatchToProps = {
  deleteBouquet: deleteBouquet
}

export default connect(mapStateToProps, mapDispatchToProps)(BouquetDiv)
