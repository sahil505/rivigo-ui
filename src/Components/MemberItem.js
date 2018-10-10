import React, { Component } from 'react';

class MemberItem extends Component {
  render() {
    return (
      <li className="Member">
        {this.props.member.team} : {this.props.member.employees}
      </li>
    );
  }
}

export default MemberItem;
