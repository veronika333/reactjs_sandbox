import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    likes : 0
  }

  addHandler = () => {
console.log("test");
this.setState({ likes: this.state.likes + 1 });
  };
  render() {
    return (
      <div>
      <h1>Total likes: {this.state.likes}</h1>
      <button onClick={this.addHandler}>Add like</button>
      </div>
    );
  }
}

export default App;
