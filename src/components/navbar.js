import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const handleClick = (event) => {
    localStorage.clear()
  }

  return (
    <div className="nav">
      <NavLink className="nav-link" exact to='/flowerapp/profile'>PROFILE</NavLink>
      <NavLink className="nav-link" exact to='/flowerapp/feed'>FEED</NavLink>
      <NavLink className="nav-link" exact to='/flowerapp/garden'>GARDEN</NavLink>
      <NavLink className="nav-link" onClick={handleClick} exact to='/welcome'>LOGOUT</NavLink>
    </div>
  )
}

export default Navbar
