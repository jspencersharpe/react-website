import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/';
import Home from './Home/';
import About from './About/';
import Projects from './Projects';

import './App.css';

class App extends Component {
  render() {
    return (
     <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About} /> 
          <Route path='/projects' component={Projects} /> 
        </Switch>
     </div> 
    );
  }
}

export default App;
