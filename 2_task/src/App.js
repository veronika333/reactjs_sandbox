import React, {Component} from 'react';

import './App.css';
import Person from './Person/Person';
class App extends Component {
state = {
persons: [
  { name: 'Veronika', age: 33},
  { name: 'Elena', age: 38},
  { name: 'Sveta', age: 34},
  {name: 'Nadia', age: 35},
  {name: 'Lesik', age: 34},
]
};





  render () {
    return (
      <div>
      <h1>Hello, World!</h1>
      <p>Hello, World!</p>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
      <Person name={this.state.persons[4].name} age={this.state.persons[4].age} />
    </div>
    )
  }
}


export default App;
