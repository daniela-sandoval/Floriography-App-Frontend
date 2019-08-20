import React, { Component } from 'react';
import SearchForm from './searchForm'
import ToneList from './toneList'
import FlowerHolder from './flowerHolder'
import "../Stylesheets/garden.scss"

export default class Garden extends Component {
  render() {
    return (
      <div className="garden">
        <h1>Explore Our Flowers!</h1>
        <SearchForm />
        <ToneList />
        <FlowerHolder />
      </div>
    )
  }
}
