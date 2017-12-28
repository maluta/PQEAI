import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: inline-block;
  color: blue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px dashed blue;
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
      <p className="pqeai_input">Para que eu aprendo?</p>
        <Input onChange = { (e) => this.props.trataInput(e) } />
      <p className="pqeai_input">?</p>
      </div>
    );
  }

}

export default PQEAIinput;
