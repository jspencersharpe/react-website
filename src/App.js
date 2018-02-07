import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/';
import Footer from './Footer/';
import Home from './Home/';
import About from './About/';
import Code from './Code';
import Music from './Music';

import './App.css';

class App extends Component {
  render() {
    return (
     <div className="App">
      <Header />
      <section class="content">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About} /> 
          <Route path='/code' component={Code} /> 
          <Route path='/music' component={Music} /> 
        </Switch>
      </section>
      <Footer />
     </div> 
    );
  }
}

export default App;
