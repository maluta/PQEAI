import React, { Component } from 'react';

class PQEAIbutton extends Component {
  constructor(props){
    super(props);
    }

    handleClick() {
        (fetch('http://pqeai.herokuapp.com/teste/foo')
        .then((response) => response.json())
        .then(response => console.log(response)));
    }

  render() {
    return (
      <div>
         <button onClick={(e) => this.handleClick(e)}>Check</button>
      </div>
    );
  }
}

export default PQEAIbutton;
