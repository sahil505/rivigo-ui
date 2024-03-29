import React, { Component } from 'react';
import TeamSuggestions from './TeamSuggestions';
import '../App.css';

class AddTeam extends Component {
  constructor(){
    super();
    this.state = {
      newMember: {},
      query: '',
      results: []
    }
  }

  getInfo() {
    let members = this.props.members;
    let temp = this.props.members;
    let temp2 = this.state.results;
    for(var i = 0; i < members.length; i++) {
      if (temp[i].team.startsWith(this.state.query) && this.state.query) {
        if (this.state.results.indexOf(temp[i].team) === -1) {
          temp2.push(temp[i].team);
        }
      }
    }
    this.setState({results: temp2});
  }

  handleInputChange() {
    this.setState({query: this.refs.addTeam.value}, function(){
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo();
        }
      }
    });
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
    let teamSuggestions;
    if(this.state.results.length > 0) {
      let temp = this.state.results;
      for(var i = 0; i < this.state.results.length; i++) {
        teamSuggestions = temp.map(member => {
          return(
            <TeamSuggestions key={member} member={member} />
          );
        });
      }
    }
    return (
      <div className="addTeamContainer">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="addTeamRow">
            <label className="addTeamLabel" htmlFor="addTeam">Team Name</label>
            <input type="text" className="addTeamInput" list="suggestedTeams" ref="addTeam"
            placeholder="Enter a team to add" onChange={this.handleInputChange.bind(this)} />
            <datalist id="suggestedTeams">
              {teamSuggestions}
            </datalist>
          </div>
          <input type="submit" className="modal-btn" title="Submit to add a new team" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddTeam;
