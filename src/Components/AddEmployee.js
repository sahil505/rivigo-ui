import React, { Component } from 'react';
import TeamItem from './TeamItem';
import EmployeeSuggestions from './EmployeeSuggestions';

class AddEmployee extends Component {

  constructor() {
    super();
    this.state = {
      newMember: {},
      query: '',
      results: []
    }
  }

  getInfo() {
    let members = this.props.members;
    let temp = this.state.results;
    for(var i = 0; i < members.length; i++) {
      if (members[i].team === this.refs.selectedTeam.value) {
        for (var j = 0; j < members[i].employees.length; j++) {
          if (members[i].employees[j].startsWith(this.state.query) && this.state.query) {
            if (this.state.results.indexOf(members[i].employees[j]) === -1) {
              temp.push(members[i].employees[j]);
            }
          }
        }
      }
    }
    this.setState({results: temp});
  }

  handleInputChange() {
    this.setState({query: this.refs.addEmployee.value}, function(){
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo();
        }
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.refs.selectedTeam.value === '' && this.refs.addEmployee.value === '') {
      alert("Please select a team & enter employee name!");
    }
    else if(this.refs.selectedTeam.value === '') {
      alert("Please select a team!");
    }
    else if (this.refs.addEmployee.value === '') {
      alert("Please enter employee name!");
    } else {
      let temp = this.props.members;
      for (var i = 0; i < this.props.members.length; i++) {
        if (temp[i].team === this.refs.selectedTeam.value){
          temp[i].employees.push(this.refs.addEmployee.value);
        }
      }
      this.setState({newMember:temp}, function() {
        this.refs.selectedTeam.value = '';
        this.refs.addEmployee.value = '';
        alert("Employee added successfully!");
      })
    }
  }

  render() {
    let teamItems;;
    if(this.props.members) {
      teamItems = this.props.members.map(member => {
        return(
          <TeamItem key={member.team} member={member} />
        );
      });
    }
    let employeeSuggestions;
    if(this.state.results.length > 0) {
      let temp = this.state.results;
      for(var i = 0; i < this.state.results.length; i++) {
        employeeSuggestions = temp.map(member => {
          return(
            <EmployeeSuggestions key={member} member={member} />
          );
        });
      }
    }
    return (
      <div className="addEmployeeContainer">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="addEmployeeRow">
            <select className="viewTeams" ref="selectedTeam"
            title="Select a team in which you want to add an employee" onChange={this.getInfo.bind(this)}>
              <option value="">Select a Team</option>
              {teamItems}
            </select>
            <label className="addTeamLabel" htmlFor="addEmployee">Employee name</label>
            <input type="text" className="addEmployeeInput" list="suggestedEmployees" ref="addEmployee"
            placeholder="Enter the employee name to add" onChange={this.handleInputChange.bind(this)} />
            <datalist id="suggestedEmployees">
              {employeeSuggestions}
            </datalist>
          </div>
          <input type="submit" className="modal-btn" title="Submit to add a new employee" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddEmployee;
