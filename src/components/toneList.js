import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTones} from '../actions/adjActions'
import "../Stylesheets/tonelist.scss"

class ToneList extends Component {

  componentDidMount() {
    this.props.fetchTones()
  }

  render() {
    if(this.props.toneList[0]) {
      const makeTones = () => {
        return this.props.toneList.map(tone => <div key={tone.id} className="tone-single">{tone.name}</div>)
      }
      return (
        <div className="tone-list">
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
    toneList: state.adjReducer.toneList
  }
}

const mapDispatchToProps = {
  fetchTones: fetchTones
}

export default connect(mapStateToProps, mapDispatchToProps)(ToneList)
