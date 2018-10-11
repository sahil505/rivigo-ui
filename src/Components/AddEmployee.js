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
    // console.log(this.refs);
    if(this.refs.selectedTeam.value === '') {
      alert("Please select a team!");
    } else {
      // console.log(this.refs.selectedTeam.value);
      let temp = this.props.members;
      for (var i = 0; i < this.props.members.length; i++) {
        if (temp[i].team === this.refs.selectedTeam.value){
          temp[i].employees.push(this.refs.addEmployee.value);
        }
      }
      console.log(temp);
      this.setState({newMember:temp}, function() {
        this.refs.selectedTeam.value = '';
        this.refs.addEmployee.value = '';
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
    // console.log(this.props.members);
    return (
      <div>
        <h3>Add Employee</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Select Team</label><br/>
            <select ref="selectedTeam">
              <option value="">Teams</option>
              {teamItems}
            </select><br/><br/>
            <input type="text" ref="addEmployee"/>
          </div><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddEmployee;
