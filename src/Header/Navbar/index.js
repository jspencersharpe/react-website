import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
    render() {
      return (
        <div className='navbar'>
            <ul>
              <NavLink activeClassName='active-route' exact to='/'>Home</NavLink>
              <NavLink activeClassName='active-route' to='/about'>About</NavLink>
              <NavLink activeClassName='active-route' to='/code'>Code</NavLink>
              <NavLink activeClassName='active-route' to='/music'>Music</NavLink>
            </ul>
        </div>
      );
    }
  }

  export default Navbar;
