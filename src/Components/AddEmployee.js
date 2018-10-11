import React, { Component } from 'react';
import TeamItem from './TeamItem';

class AddEmployee extends Component {
  constructor(){
    super();
    this.state = {
      newMember: {}
    }
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
    return (
      <div>
        <h3>Add Employee to a team</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Select Team</label><br/>
            <select ref="selectedTeam">
              <option value="">Teams</option>
              {teamItems}
            </select><br/><br/>
            <label>Enter Employee name</label><br/>
            <input type="text" ref="addEmployee"/>
          </div><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddEmployee;
