import React, { Component } from 'react';
import SearchForm from './searchForm'
import ToneList from './toneList'
import FlowerHolder from './flowerHolder'
import "../Stylesheets/garden.scss"
import GardenBox from '../Stylesheets/pics/garden-box.png'

export default class Garden extends Component {
  render() {
    return (
      <div className="garden">
        <div className="header">
          <img id="garden-box" src={GardenBox} alt="hanging flowers"/>
          <h1>Explore Our Flowers!</h1>
        </div>
        <SearchForm />
        <ToneList />
        <FlowerHolder />
      </div>
    )
  }
}
