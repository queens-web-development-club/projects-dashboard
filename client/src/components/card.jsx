import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="project-card" onClick={this.props.handleClick}>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
//functions

export default Card;
