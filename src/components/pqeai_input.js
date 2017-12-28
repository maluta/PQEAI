import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: inline-block;
  color: blue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;
class PQEAIinput extends Component {
//  constructor(props){
//    super(props);
//  console.log("construtor PQEAIinput");
//  }
  render() {
    return (
      <div>
      <p>
        Para que eu aprendo <Input onChange = { (e) => this.props.trataInput(e) } /> ?
      </p>
      </div>
    );
  }

}

export default PQEAIinput;
