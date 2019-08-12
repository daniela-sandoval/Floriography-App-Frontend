import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeAdjBouquet } from '../actions/bouquetActions'
import { fetchAdjs, clearList } from '../actions/adjActions'
import Adjective from './adjective'
import "../Stylesheets/adjForm.scss"

class AdjForm extends Component {
  state = {
    adjList: [],
    title: ""
  }

  componentDidMount() {
    this.props.fetchAdjs()
  }

  handleClick = (event) => {
    // add some logic if the title is empty...
    if(this.props.adjList.length === 5 ) {
      this.props.makeAdjBouquet(this.props.adjList, this.props.userId, this.state.title)
      this.props.submitClick(event)
    } else {
      alert("pls add more adjectives!")
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClose = (event) => {
    this.props.submitClick(event)
    this.props.clearList()
  }

  render() {
    if(this.props.adjs[0]) {
      const makeAdjs = () => {
        return this.props.adjs.map(adj => <Adjective key={adj.id} {...adj}/>)
      }

      return (
        <div className="modal">
          <div className="modal-content">
            <span className="close" id="adjective" onClick={this.handleClose}>&times;</span>
            <h4>pls choose 5 adjectives</h4>
              <label htmlFor="title">Your Title: </label>
              <input name="title" id="title" type="text" onChange={this.handleChange}/>
              <div className="adj-con">
                {makeAdjs()}
              </div>
            <button id="adjective" onClick={this.handleClick}>SUBMIT</button>
          </div>
        </div>
      )
    } else {
      return null
    }
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
  fetchAdjs: fetchAdjs,
  clearList: clearList
}


export default connect(mapStateToProps, mapDispatchToProps)(AdjForm)
