import React, { Component } from 'react';
import FeedContainer from './feedContainer'
import '../Stylesheets/feed.scss'
import HanginFlwr2 from '../Stylesheets/pics/hanging-flwr2.png'


export default class Feed extends Component {

  render() {
    return (
      <div className="feed">
        <h1>🌱 What's Growin? 🌱</h1>
        <img id="hanging-flwr1" src={HanginFlwr2} alt="hanging flowers"/>
        <img id="hanging-flwr2" src={HanginFlwr2} alt="hanging flowers"/>
        <FeedContainer />
      </div>
    )
  }

}
