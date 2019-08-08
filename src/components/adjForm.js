import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeAdjBouquet } from '../actions/bouquetActions'
import { fetchAdjs } from '../actions/adjActions'
import Adjective from './adjective'

class AdjForm extends Component {
  state = {
    adjList: [],
    title: ""
  }

  componentDidMount() {
    this.props.fetchAdjs()
  }

  handleClick = () => {
    // add some logic if the title is empty...
    if(this.props.adjList.length === 5 ) {
      this.props.makeAdjBouquet(this.props.adjList, this.props.userId, this.state.title)
    } else {
      alert("pls add more adjectives!")
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {

    const makeAdjs = () => {
      return this.props.adjs.map(adj => <Adjective key={adj.id} {...adj}/>)
    }

    return (
      <div>
      <p>pls choose 5 adjectives</p>
        <label htmlFor="title">Your Title: </label>
        <input name="title" id="title" type="text" onChange={this.handleChange}/>
        <div>
          {makeAdjs()}
        </div>
      <button onClick={this.handleClick}>SUBMIT</button>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
  adjs: state.adjReducer.adjs,
  adjList: state.adjReducer.adjList,
  userId: state.userReducer.currentUser.id,
  }
}


const mapDispatchToProps = {
  makeAdjBouquet: makeAdjBouquet,
  fetchAdjs: fetchAdjs
}


export default connect(mapStateToProps, mapDispatchToProps)(AdjForm)
