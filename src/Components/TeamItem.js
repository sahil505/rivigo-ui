import React, { Component } from 'react';

class TeamItem extends Component {
  render() {
    return (
      <option value={this.props.member.team} className="Team">
        {this.props.member.team}
      </option>
    );
  }
}

export default TeamItem;
