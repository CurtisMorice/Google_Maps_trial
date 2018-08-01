 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SpeechRecognition from '../src/components/SpeechRecognition/SpeechRecognition';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


export default SpeechRecognition;