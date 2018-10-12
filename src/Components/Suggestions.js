import React, { Component } from 'react';

// const Suggestions = (props) => {
//   const options = props.results.map(r => (
//     <li key={r}>
//       {r}
//     </li>
//   ))
//   console.log(options);
//   return <ul>{options}</ul>
// }

class Suggestions extends Component {
  render() {
    return (
      <li value={this.props.member} className="Employee">
        {this.props.member}
      </li>
    );
  }
}

export default Suggestions;
