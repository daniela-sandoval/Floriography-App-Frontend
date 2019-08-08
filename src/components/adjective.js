import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAdjList } from '../actions/adjActions'
import { removeAdj } from '../actions/adjActions'

class Adjective extends Component {
  state = {
    clicked: false
  }

  handleClick = (event) => {
    // if it is in the basket, removie it
    // if it is less than 5 change color
    // if it is not included add it

    if(this.props.adjList.includes(event.target.id)) {
      this.setState({ clicked: !this.state.clicked })
      let newList = this.props.adjList.filter(x => !(x === event.target.id))
      this.props.removeAdj(newList)
    } else {
      if(this.props.adjList.length < 5) {
        this.setState({ clicked: !this.state.clicked })
        this.props.addAdjList(event.target.id)
      } else {
        alert("You have more than 5...")
      }
    }

  }

  render() {
    return <div id={this.props.name} onClick={this.handleClick} style={ this.state.clicked ? {color: "red"} : null } >{this.props.name}</div>
  }
}



const mapDispatchToProps = {
  addAdjList: addAdjList,
  removeAdj: removeAdj
}

const mapStateToProps = state => {
  return {
    adjList: state.adjReducer.adjList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adjective)
