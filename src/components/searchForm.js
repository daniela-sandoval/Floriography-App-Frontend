import React, { Component } from 'react'
import { filterFlowers } from '../actions/flowerActions'
import { connect } from 'react-redux'
import "../Stylesheets/searchForm.scss"

class SearchForm extends Component {
  state = {
    search: ""
  }

  handleChange = (event) => {
    this.setState({search: event.target.value}, () => {
      let filtered = this.props.flowers.filter(flower => (
        flower.name.toLowerCase().includes(this.state.search.toLowerCase())
      ))
      this.props.filterFlowers(filtered)
    })
  }

  handleClick = () => {
    let filtered = this.props.flowers.filter(flower => (
      flower.name.toLowerCase().includes(this.state.search.toLowerCase())
    ))
    this.props.filterFlowers(filtered)
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
