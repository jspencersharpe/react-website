import React from 'react';
import Navbar from './Navbar';
import logo from '../logo.png';

const Header = () =>{
    return (
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <Navbar />
      </header>
    );
  };

  export default Header;
