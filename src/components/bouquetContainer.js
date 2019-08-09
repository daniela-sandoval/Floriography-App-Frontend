import React, { Component } from 'react';
import { connect } from 'react-redux';
import BouquetDiv from './bouquetDiv'

class BouquetContainer extends Component {


  render() {
    const makeBouquets = () => {
      return this.props.bouquets.map(bouquet => <BouquetDiv key={bouquet.id} {...bouquet}/>)
    }
    return (
      <div>
      <h4>HERE ARE ALL YOUR BOUQUETS: </h4>
      {makeBouquets()}
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
