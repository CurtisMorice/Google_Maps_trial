import React, { Component } from 'react';

import logo from './logo.svg';
// import DemoApp from '../src/components/Map/Map';
import './App.css';
import MarkerMap from '../src/components/MarkerMap/MarkerMap';
// import MapSearch from '../src/components/MapSearch/MapSearch';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

import SpeechRecognition from 'react-speech-recognition'; //As only one component can be wrapped by SpeechRecognition, 
                                                          //it is recommended that you add it to one of your root React components 
                                                          //such as App. The transcription can then be passed down to child components.

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
        {/* <MapSearch/> */}
        <MarkerMap/>
        {/* <DemoApp/> */}
      </div>
    );
  }
}
library.add(faStroopwafel);
export default SpeechRecognition(App);
