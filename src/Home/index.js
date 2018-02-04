import React, { Component } from 'react';
import spencer from './spencer.jpg';
import './home.css';

class Home extends Component {
    render() {
      const header = '// Spencer Sharpe';
        
      return (
        <div className="Home">
            <section>
                <img src={spencer} className="spencer" alt="spencer" />        
                <div className="bio">
                    <h1>{header}</h1>
                    <h4>I'm a Front-End Engineer at 247Sports, a subsidiary of CBS Interactive.</h4>
                </div>
            </section>
        </div>
      );
    }
  }
  
  export default Home;