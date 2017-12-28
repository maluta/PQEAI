import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  color: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`;

class PQEAIbutton extends Component {
  constructor(props){
    super(props);
    console.log("construtor PQEAIbutton");
    }

  render() {
    return (
      <div>
        <Button onClick={ this.props.Clique }>Me ajuda</Button>
      </div>
    );
  }
}

export default PQEAIbutton;
