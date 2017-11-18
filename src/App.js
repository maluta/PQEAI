import React, { Component } from 'react';
import logo from './logo.svg';
import PQEAIbutton from './components/pqeai_button'
import PQEAIinput from './components/pqeai_input'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PARA QUE EU APRENDO ISSO?</h1>
        </header>
        <p className="App-intro">
          <PQEAIinput />
          <PQEAIbutton />
        </p>
      </div>
    );
  }
}

export default App;
