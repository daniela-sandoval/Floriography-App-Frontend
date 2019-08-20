import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAdjList, removeAdj } from '../actions/adjActions'
import "../Stylesheets/adjective.scss"

class Adjective extends Component {
  state = {
    clicked: false
  }

  handleClick = (event) => {
    // if it is in the list, remove it
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
    return <div className="adj"
      id={this.props.name}
      onClick={this.handleClick}
      style={ this.state.clicked ? {color: "#03626f"} : null } >{this.props.name}
    </div>
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
