import React, { Component } from 'react';

class EmployeeSuggestions extends Component {
  render() {
    return (
      <option className="employeeSuggestion">
        {this.props.member}
      </option>
    );
  }
}

export default EmployeeSuggestions;
