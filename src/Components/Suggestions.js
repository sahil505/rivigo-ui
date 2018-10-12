import React, { Component } from 'react';

class Suggestions extends Component {
  render() {
    return (
      <option value={this.props.member}>
        {this.props.member}
      </option>
    );
  }
}

export default Suggestions;
