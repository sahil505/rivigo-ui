import React, { Component } from 'react';

class EmployeeItem extends Component {
  render() {
    // console.log(this.props.member);
    return (
      <option value={this.props.member.team} className="Employee">
        {this.props.member}
      </option>
    );
  }
}

export default EmployeeItem;
