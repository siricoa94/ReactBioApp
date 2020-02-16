import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/index.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Hero from './components/heroes';
import Race from './components/races';
import Strategy from './components/strategy';


class App extends Component {
  render (){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title="Andrew Sirico"></Navbar>
          <Route exact path="/" render={() => <Home title="Mirana's Guide to Warcraft 3"/>}/>
          <Route exact path="/hero" render={() => <Hero title="Hero Guide"/>}/>
          <Route exact path="/race" render={() => <Race/>}/>
          <Route exact path="/strategy" render={() => <Strategy/>}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
