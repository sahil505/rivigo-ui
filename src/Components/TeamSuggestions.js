import React, { Component } from 'react';

class TeamSuggestions extends Component {
  render() {
    return (
      <option className="teamSuggestions">
        {this.props.member}
      </option>
    );
  }
}

export default TeamSuggestions;
