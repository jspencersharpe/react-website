import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
      return (
        <footer className="footer">
          <ul>
            <li>
              <a href='https://twitter.com/jspencersharpe' target='_blank'>twitter</a>
            </li>
            <li>
              <a href='https://github.com/jspencersharpe' target='_blank'>github</a>
            </li>
            <li>
              <a href='https://linkedin.com/in/jspencersharpe' target='_blank'>linkedin</a>
            </li>
          </ul>
        </footer>
      );
    }
  }
  
  export default Footer;