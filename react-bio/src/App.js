import React, {Component} from 'react';
import './css/index.css';
import Navbar from './components/navbar';


class App extends Component {
  render (){
    return (
      <div className="App">
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
