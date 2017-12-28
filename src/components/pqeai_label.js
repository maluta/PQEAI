import React, { Component } from 'react';

class PQEAIlabel extends Component {
//  constructor(props){
//    super(props);
//  console.log("construtor PQEAIlabel");
//  }
  render() {
    return (
      <div className="pqeai_label">
      <p>
        {this.props.texto_do_label}
      </p>
      </div>
    );
  }
}

export default PQEAIlabel;
