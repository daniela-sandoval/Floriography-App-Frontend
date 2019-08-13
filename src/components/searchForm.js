import React, { Component } from 'react'
import { filterFlowers } from 'react'
import { connect } from 'react-redux'
import "../Stylesheets/searchForm.scss"

class SearchForm extends Component {
  state = {
    search: ""
  }

  handleChange = (event) => {
    this.setState({search: event.target.value}, () => {
        let array = []
        this.props.flowers.map(flower => {
        flower.name.split(" ").map(word => {
          if (word.includes(this.state.search)) {
            array.push(flower)
          }
      })
      })
      debugger
      // let filtered = this.props.flowers.filter(flower => flower.name.includes(event.target.value))
    })
  }

  handleClick = () => {
    debugger
  }

  render() {
    return (
      <div className="search">
        <input type="text" onChange={this.handleChange} value={this.state.search} className="search-box" placeholder="search for a flower!"/>
        <button onClick={this.handleClick} type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    flowers: state.flowerReducer.flowers
  }
}

const mapDispatchToProps = {
  filterFlowers: filterFlowers
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
