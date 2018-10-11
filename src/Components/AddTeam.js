import React, { Component } from 'react';

class AddTeam extends Component {
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
        alert('Team added successfully!');
      })
    }
  }

  render() {
    return (
      <div>
        <h3>Add Team</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Enter Team Name</label><br/>
            <input type="text" ref="addTeam"/>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddTeam;
