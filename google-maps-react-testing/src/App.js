import React, { Component } from 'react';
import logo from './logo.svg';
// import DemoApp from '../src/components/Map/Map';
import './App.css';
import MarkerMap from '../src/components/MarkerMap/MarkerMap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
    
        <p className="App-intro">
          
        </p>
        <MarkerMap/>
        {/* <DemoApp/> */}
      </div>
    );
  }
}
library.add(faStroopwafel);
export default App;
