import React, { Component } from 'react';
import Members from './Components/Members';
import AddTeam from './Components/AddTeam';
import AddEmployee from './Components/AddEmployee';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      teamName: "",
      members: []
    }
  }

  componentWillMount() {
    this.setState({
      teamName: "",
      members: [
        {
          team:  'Engineering',
          employees:  ['Lawana  Fan',  'Larry  Rainer',  'Aman  Juneja',  'Leah  Shumway']
        },
        {
          team:  'Executive',
          employees:  ['Rohan  Gupta',  'Ronda  Dean',  'Robby  Maharaj']
        },
        {
          team:  'Finance',
          employees:  ['Caleb  Brown',  'Carol  Smithson',  'Carl  Sorensen']
        },
        {
          team:  'Sales',
          employees:  ['Ankit  Tiwari',  'Ramesh Kumar']
        }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h3>Rivigo App</h3>
        <hr/>
        <Members members={this.state.members} nteam={this.state.teamName} teamName={this.handleTeamName.bind(this)} />
        <hr/>
        <AddTeam addTeam={this.handleAddTeam.bind(this)} />
        <hr/>
        <AddEmployee addEmployee={this.handleAddEmployee.bind(this)} members={this.state.members} />
      </div>
    );
  }

  handleTeamName(team){
    this.setState({teamName: team});
  }

  handleAddTeam(member) {
    let members = this.state.members;
    members.push(member);
    this.setState({members: members});
  }

  handleAddEmployee(member) {
    let members = this.state.members;
    members.push(member);
    this.setState({members: members});
  }
}

export default App;
