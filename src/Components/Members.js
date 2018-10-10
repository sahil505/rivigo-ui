import React, { Component } from 'react';
import MemberItem from './MemberItem';

class Members extends Component {
  render() {
    let memberItems;
    if(this.props.members) {
      memberItems = this.props.members.map(member => {
        return(
          <MemberItem key={member.team} member={member} />
        );
      });
    }
    return (
      <div className="Members">
        {memberItems}
      </div>
    );
  }
}

export default Members;
