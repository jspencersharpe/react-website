import React, { Component } from 'react';
import Technologies from './Technologies';

class Code extends Component {
  render() {
    return (
      <div className = "Code" >
        <p>Check out my <a href='http://nba.spencersharpe.com' target='_blank'>NBA Stats Scraper</a> The app scrapes NBA statistics from <a href='http://nba.com' target='_blank'>NBA.com</a> on page load. In accordance to the NBA's terms of service: there is no database, and it saves no statistics.</p>
        <p>The app is built with Node.js, Express, Pug template engine, and <a href='https://cheerio.js.org/' target='_blank'> Cheerio</a>. You can find the code<a href='https://github.com/jspencersharpe/nba-stats-scraper' target='_blank'> here</a>.</p>
        <Technologies / >
      </div>
    );
  }
}

export default Code;