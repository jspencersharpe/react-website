import React from 'react';
import Technologies from './Technologies';
import Heading from '../Heading';

const Code = () => {
  return (
    <div className="code">
      <Heading value='code' />
      <p>Check out my <a href='http://nba.spencersharpe.com' rel="noopener noreferrer" target='_blank'>NBA Stats Scraper</a> The app scrapes NBA statistics from <a href='http://nba.com' rel='noopener noreferrer' target='_blank'>NBA.com</a> on page load. In accordance to the NBA's terms of service: there is no database, and it saves no statistics.
      </p>
      <p>The app is built with Node.js, Express, Pug template engine, and <a href='https://cheerio.js.org/' rel="noopener noreferrer" target='_blank'> Cheerio</a>. You can find the code<a href='https://github.com/jspencersharpe/nba-stats-scraper' rel='noopener noreferrer' target='_blank'> here</a>.</p>
      <p>This website was made with <a href='https://www.npmjs.com/package/create-react-app' rel='noopener noreferrer' target='_blank'>create-react-app</a>.</p>
      <Technologies />
    </div>
  );
};

export default Code;
