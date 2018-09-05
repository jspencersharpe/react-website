import React from 'react';
import Heading from '../Heading';
import spencer from './spencer.jpg';
import './home.css';

const Home = () => {
  return (
    <div className="home">
        <section>
            <div className='img-container'>
              <img src={spencer} className="spencer" alt="spencer" />
            </div>
            <div className="bio">
                <Heading value='Spencer Sharpe' />
                <h3>Husband, sports fan, developer</h3>
                <h4>Front-End Engineer at 247Sports, a subsidiary of CBS Interactive.</h4>
            </div>
        </section>
    </div>
  );
};

  export default Home;
