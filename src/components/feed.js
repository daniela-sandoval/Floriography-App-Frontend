import React, { Component } from 'react';
import FeedContainer from './feedContainer'
import '../Stylesheets/feed.scss'

export default class Feed extends Component {


  render() {
    return (
      <div className="feed">
        <h1>🌱 What's Growin? 🌱</h1>
        <FeedContainer />
      </div>
    )
  }
}
