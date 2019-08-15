import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOutUser } from '../actions/userActions'
import "../Stylesheets/navbar.scss";

const Navbar = (props) => {

  const handleClick = (event) => {
    props.logOutUser()
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

const mapDispatchToProps = {
  logOutUser: logOutUser
}

export default connect(null, mapDispatchToProps)(Navbar)
