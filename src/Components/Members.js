import React, { Component } from 'react';
import TeamItem from './TeamItem';
import EmployeeItem from './EmployeeItem';

class Members extends Component {

  teamName(e) {
    if (e.target.value) {
      this.props.teamName(e.target.value);
    }
  }

  render() {
    let teamItems;
    if(this.props.members) {
      teamItems = this.props.members.map(member => {
        return(
          <TeamItem key={member.team} member={member} />
        );
      });
    }
    let employeeItems;
    if(this.props.members && this.props.nteam) {
      let temp = this.props.members;
      for(var i = 0; i < this.props.members.length; i++) {
        if(temp[i].team === this.props.nteam) {
          employeeItems = temp[i].employees.map(member => {
            return(
              <EmployeeItem key={member} member={member} />
            );
          });
        }
      }
    }
    return (
      <div className="Members">
        <select onChange={this.teamName.bind(this)}>
          <option value="">Teams</option>
          {teamItems}
        </select>
        <hr/>
        <select ref="employees">
          <option value="">Employees</option>
          {employeeItems}
        </select>
      </div>
    );
  }
}

export default Members;
