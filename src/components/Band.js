import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <React.Fragment>
        <li>{this.props.name}</li><button onClick={() => this.props.deleteBand(this.props.id)}>X</button>
      </React.Fragment>
    );
  }
};

export default Band;
