import React, { Component } from 'react';
import Modal from './Components/Modal';
import Members from './Components/Members';
import AddTeam from './Components/AddTeam';
import AddEmployee from './Components/AddEmployee';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      teamName: "",
      members: []
    }
  }

  componentWillMount() {
    this.setState({
      show: false,
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

  showModal() {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
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

  render() {
    return (
      <div className="App">
        <h3 className="main-heading">Rivigo Team Management</h3>
        <input type="button" className="manageTeam-btn" title="Dynamically view/add teams & employees"
        onClick={this.showModal.bind(this)} value="Manage Team"/>
        <Modal show={this.state.show} onClose={this.showModal.bind(this)}>
          <h3 className="viewTeamHead"><span>View Team & Employees</span></h3>
          <Members members={this.state.members} nteam={this.state.teamName}
          teamName={this.handleTeamName.bind(this)} />
          <h3 className="addTeamHead"><span>Add Team</span></h3>
          <AddTeam addTeam={this.handleAddTeam.bind(this)} members={this.state.members} />
          <h3 className="addEmployeeHead"><span>Add Employee</span></h3>
          <AddEmployee addEmployee={this.handleAddEmployee.bind(this)} members={this.state.members} />
        </Modal>
      </div>
    );
  }
}

export default App;
