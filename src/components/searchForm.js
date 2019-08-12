import React, { Component } from 'react'
import "../Stylesheets/searchForm.scss"

class SearchForm extends Component {
  render() {
    return (
      <div className="search">
        <input type="text" className="search-box" placeholder="search for a flower!"/>
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
    )
  }
}

export default SearchForm
