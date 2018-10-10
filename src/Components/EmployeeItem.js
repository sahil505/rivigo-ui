import React, { Component } from 'react';

class EmployeeItem extends Component {
  render() {
    return (
      <option value={this.props.member.team} className="Employee">
        {this.props.member.employees}
      </option>
    );
  }
}

export default EmployeeItem;
