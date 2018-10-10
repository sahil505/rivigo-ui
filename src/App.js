import React, { Component } from 'react';
import Members from './Components/Members';
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
        Rivigo App
        <Members members={this.state.members} teamName={this.state.teamName}/>
      </div>
    );
  }
}

export default App;
