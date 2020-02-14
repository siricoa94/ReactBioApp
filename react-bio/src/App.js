import React, {Component} from 'react';
import './css/index.css';


class App extends Component {
  render (){
    return (
      <div className="App">
        <nav>
          <h2 class="logo">Warcraft 3 Guide</h2>
          <ul class="nav-menu">
            <li><a class="nav-link" href="">Home</a></li>
            <li><a class="nav-link" href="">Races</a></li>
            <li><a class="nav-link" href="">Heroes</a></li>
            <li><a class="nav-link" href="">Strategy</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
