import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends Component {
  state = {
    likes : 0
  }

  addHandler = () => {
console.log("test");
this.setState({ likes: this.state.likes + 1 });
  };

  removeHandler = () => {
    console.log("test2");
    this.setState({ likes: this.state.likes - 1 });
  };
  resetHandler = () => {
    console.log("test3");
    this.setState({ likes: this.state.likes = 0 });
  };
  render() {
    return (
      <div>
        <Header />
        <main>
      <h1 className={this.state.likes === 0 ? "likes" : this.state.likes % 2 === 0 ? "likes even" : "likes odd"}>Total likes: {this.state.likes}</h1>
      <button onClick={this.addHandler}>Add like</button>
      <button onClick={this.removeHandler}>Decrease likes</button>
      <button onClick={this.resetHandler}>Reset likes</button>
      </main>
     <Footer />
      </div>
    );
  }
}

export default App;
