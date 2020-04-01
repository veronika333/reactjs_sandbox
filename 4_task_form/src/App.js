import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }*/
  

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      phone: null,
      message: '',
    };
  };

changeHandler = event => {
  let nam = event.target.name;
  let val = event.target.value;
  this.setState({[nam]: val});
};

  render() {
    return (
      <div>
        <form>
        <h1>Input Form</h1>
        <label>
    First Name:</label>
    <input type="text" name="first_name" onChange={this.changeHandler} />
  <br />
  <label>
    Last Name:</label>
    <input type="text" name="last_name" onChange={this.changeHandler} />
  <br />
  <label>
    Phone:</label>
    <input type="number" name="phone" onChange={this.changeHandler} />
  <br />
  <label>
    Message:</label>
    <input type="text" name="message" onChange={this.changeHandler} />
  <br />
  </form>
  <main>
        <h2>This is your input</h2>
    <label>First name: </label><p>{this.state.first_name}</p><br />
    <label>Last name: </label><p>{this.state.last_name}</p><br />
    <label>Phone: </label><p>{this.state.phone}</p><br />
    <label>Message: </label><p>{this.state.message}</p><br />
    </main>
      </div>
    )
  }
}


export default App;
