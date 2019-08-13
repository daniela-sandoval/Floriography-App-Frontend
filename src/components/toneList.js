import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTones} from '../actions/adjActions'
import { filterFlowers } from '../actions/flowerActions'
import "../Stylesheets/tonelist.scss"

class ToneList extends Component {

  componentDidMount() {
    this.props.fetchTones()
  }

  dispatchFilter = (event) => {
    let choice = event.target.innerText
    let flowers = this.props.flowers
    let filtered = flowers.filter(flower => (flower.tone.tone_name === choice))
    this.props.filterFlowers(filtered)
  }

  handleClick = () => {
    this.props.filterFlowers(this.props.flowers)
  }

  render() {
    if(this.props.toneList[0]) {
      const makeTones = () => {
        return this.props.toneList.map(tone => <div onClick={this.dispatchFilter} key={tone.id} className="tone-single">{tone.name}</div>)
      }
      return (
        <div className="tone-list">
          <div onClick={this.handleClick} className="tone-single">All</div>
          {makeTones()}
        </div>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = state => {
  return {
    toneList: state.adjReducer.toneList,
    flowers: state.flowerReducer.flowers
  }
}

const mapDispatchToProps = {
  fetchTones: fetchTones,
  filterFlowers: filterFlowers
}

export default connect(mapStateToProps, mapDispatchToProps)(ToneList)
