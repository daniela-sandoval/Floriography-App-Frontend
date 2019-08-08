import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeAdjBouquet } from '../actions/bouquetActions'
import { fetchAdjs } from '../actions/adjActions'
import Adjective from './adjective'

class AdjForm extends Component {
  state = {
    adjList: [],
  }

  componentDidMount() {
    this.props.fetchAdjs()
  }


  render() {

    const makeAdjs = () => {
      let y = this.props.adjs
      return this.props.adjs.map(adj => <Adjective key={adj.id} {...adj}/>)
    }
    return (
      <div>
      <p>pls choose 5 adjectives</p>
        <div>
          {makeAdjs()}
        </div>
      <button>SUBMIT</button>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {adjs: state.adjReducer.adjs}
}

const mapDispatchToProps = {
  makeAdjBouquet: makeAdjBouquet,
  fetchAdjs: fetchAdjs
}


export default connect(mapStateToProps, mapDispatchToProps)(AdjForm)
