import React, { Component } from 'react';
import FeedDiv from './feedDiv'
import { connect } from 'react-redux'
import { fetchAllBouquets } from '../actions/bouquetActions'

class BouquetContainer extends Component {

  componentDidMount() {
    this.props.fetchAllBouquets()
  }

  render() {
    if(this.props.bouquets[0]) {
      const makeBouquets = () => {
        return this.props.bouquets.map(bouquet => <FeedDiv key={bouquet.id} {...bouquet}/>)
      }
      return (
        <div className="feed-container">
          <div className="feed-box">
            {makeBouquets()}
          </div>
        </div>
      )
    } else {
    return <div className="nothing">nothing just yet...how about you try making something?</div>
    }
  }
}

const mapStateToProps = state => {
  return {
    bouquets: state.bouquetReducer.allBouquets
  }
}

const mapDispatchToProps = {
  fetchAllBouquets: fetchAllBouquets
}

export default connect(mapStateToProps, mapDispatchToProps)(BouquetContainer)
