import React, { Component } from 'react';

class Music extends Component {
    render() {
      let src = 'https://open.spotify.com/embed/artist/1XCLGH5dZCDmyODPvnIBeG';
      return (
        <div className="Music">
          <p>I am in a band called <a href='http://wedissolvedthecompany.com/' target='_blank'>We Dissolved The Company</a> with my friend Andrew Fraser. We have released 3 songs that you can here in all the places people find music. I also released a solo record in 2009 that I don't want to tell you about.</p>
          <iframe src={src} width='400' height='300' frameborder='0' allowtransparency='true'></iframe>
        </div>
      );
    }
  }
  
  export default Music;