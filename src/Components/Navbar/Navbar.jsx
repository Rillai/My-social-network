import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <NavLink className="nav_a" to="/profile"> <img src={require('./nav_img/profile.png')}/>Profile</NavLink>
      <NavLink className="nav_a" to="/dialogs"> <img src={require('./nav_img/profile.png')}/>Messeges</NavLink>
      <NavLink className="nav_a" to="/users"> <img src={require('./nav_img/profile.png')}/>Users</NavLink>
      <NavLink className="nav_a" to="/news"><img src={require('./nav_img/profile.png')}/>News</NavLink>
      <NavLink className="nav_a" to="/music"><img src={require('./nav_img/profile.png')}/>Music</NavLink>
      <NavLink className="nav_a" to="/settings"><img src={require('./nav_img/profile.png')}/>Settings</NavLink>
    </nav>
  )
}

export default Navbar;