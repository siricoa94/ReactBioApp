import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/index.css';
import Navbar from './components/navbar';
import Home from './components/home';
import RaceContainer from './components/racesContainer';
import Forum from './components/forum';
import HeroContainer from './components/heroesContainer';
import Auth from './components/auth';


class App extends Component {
  render (){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title="Andrew Sirico"></Navbar>
          <Route exact path="/" render={() => <Auth title="Mirana's Guide to Warcraft 3"/>}/>
          <Route path="/hero" render={() => <HeroContainer title="Hero Guide"/>}/>
          <Route path="/race" render={() => <RaceContainer title="Warcraft Races"/>}/>
          <Route path="/forum" render={() => <Forum/>}/> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
