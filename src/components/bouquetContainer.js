import React, { Component } from 'react';
import { connect } from 'react-redux';
import BouquetDiv from './bouquetDiv'
import "../Stylesheets/bouquetContainer.scss"

class BouquetContainer extends Component {


  render() {
    const makeBouquets = () => {
      return this.props.bouquets.map(bouquet => <BouquetDiv key={bouquet.id} {...bouquet}/>)
    }
    return (
      <div className="bouquet-container">
        <h4>YOUR BOUQUETS: </h4>
        <div className="bouquet-box">
          {makeBouquets()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bouquets: state.bouquetReducer.userBouquets
  }
}

export default connect(mapStateToProps, null)(BouquetContainer)
