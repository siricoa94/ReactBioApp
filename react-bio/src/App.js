import React, {Component} from 'react';
import './css/index.css';
import Navbar from './components/navbar';
import Home from './components/home';


class App extends Component {
  render (){
    return (
      <div className="App">
        <Navbar title="Mirana's Guide to Warcraft 3"></Navbar>
        <Home title="Warcraft 3 Guide"></Home>
      </div>
    );
  }
}

export default App;
