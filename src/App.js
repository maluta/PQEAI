import React, { Component } from 'react';
//import logo from './logo.svg';
import PQEAIbutton from './components/pqeai_button'
import PQEAIinput from './components/pqeai_input'
import PQEAIlabel from './components/pqeai_label'


import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      keyword: '       ',
      final: '        ',
    };

    this.trataInput = this.trataInput.bind(this);
    this.trataClique = this.trataClique.bind(this);

  }

  trataInput(e) {
   e.preventDefault();
   this.setState({ keyword: e.target.value });
  }

  trataClique() {
    this.setState({ final: this.state.keyword });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">R E A C T sandbox</h1>
        </header>

      <div className="App-intro">
        <PQEAIinput trataInput = {this.trataInput} />
        <PQEAIbutton Clique={this.trataClique} theme={{ main: 'darkorange' }} />
        <PQEAIlabel texto_do_label={this.state.final} />
      </div>
      </div>
    );
  }
}

export default App;
