import React, { Component } from 'react';
import Navbar from './Navbar';

import logo from '../logo.png';

class Header extends Component {
    render() {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar />
        </header>
      );
    }
  }
  
  export default Header;