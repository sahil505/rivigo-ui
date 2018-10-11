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
    if(this.refs.addTeam.value === '') {
      alert("Please enter a team name!");
    } else {
      this.setState({newMember:{
        team: this.refs.addTeam.value,
        employees:[]
      }}, function() {
        this.props.addTeam(this.state.newMember);
        this.refs.addTeam.value = '';
        // alert('Team added successfully!');
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
    console.log(this.props.members);
    return (
      <div>
        <h3>Add Employee</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Select Team</label><br/>
            <select>
              {teamItems}
            </select>
            <input type="text" ref="addTeam"/>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddEmployee;
