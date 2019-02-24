import React, { Component } from 'react';
import ImageLink from './ImageLink';
import './technologies.css';

class Technologies extends Component {
    getTechnologies() {
        return [
            {
              name: 'JavaScript',
              image_url: 'http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/s1600/js.jpg',
              url: 'https://www.javascript.com/'
            },
            {
                name: 'React',
                image_url: 'https://cdn.worldvectorlogo.com/logos/react.svg',
                url: 'https://reactjs.org/'
            },
            {
              name: 'Angular',
              image_url: 'https://angular.io/assets/images/logos/angular/angular.png',
              url: 'https://angular.io/'
            },
            {
              name: 'HTML5',
              image_url: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png',
              url: 'https://en.wikipedia.org/wiki/HTML5'
            },
            {
              name: 'Sass',
              image_url: 'http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
              url: 'http://sass-lang.com/'
            },
            {
              name: 'npm',
              image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2000px-Npm-logo.svg.png',
              url: 'https://www.npmjs.com/'
            },
            {
              name: 'git',
              image_url: 'https://git-for-windows.github.io/img/git_logo.png',
              url: 'https://git-scm.com/'
            },
            {
              name: 'Webpack',
              image_url: 'https://webpack.github.io/assets/logo.png',
              url: 'https://webpack.github.io/'
            },
            {
              name: 'Node',
              image_url: 'https://raygun.com/blog/wp-content/uploads/2016/05/nodejs-logo.png',
              url: 'https://nodejs.org/en/'
            },
            {
              name: 'Express',
              image_url: 'https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67',
              url: 'https://expressjs.com/'
            },
            {
              name: 'Gulp',
              image_url: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png',
              url: 'http://gulpjs.com/'
            },
            {
              name: 'jQuery',
              image_url: 'https://camo.githubusercontent.com/02ed3f6695f288aedec24c2a329c667281efef5f/687474703a2f2f707265636973696f6e2d736f6674776172652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031342f30342f6a5175726572792e676966',
              url: 'https://jquery.com/'
            }
          ];
    }

    render() {
      return (
        <div className="technologies">
            <ul>{ this.getTechnologies().map((item, index) => {
                return <li key={index}><ImageLink {...item}></ImageLink></li>;}) }
            </ul>
        </div>
      );
    }
  }

  export default Technologies;
