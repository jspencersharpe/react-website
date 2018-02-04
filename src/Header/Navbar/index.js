import React, { Component } from 'react';

import './navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
      return (
        <div className="Navbar">
            <ul>
              <Link to='./'>Home</Link>
              <Link to='./about'>About</Link>
              <Link to='./code'>Code</Link>
              <Link to='./music'>Music</Link>
            </ul>
        </div>
      );
    }
  }
  
  export default Navbar;