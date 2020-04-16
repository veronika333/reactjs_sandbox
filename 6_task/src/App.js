import React, { Component } from 'react';
import Lecture from "./Lecture/Lecture";
import MapMethod from "./Lecture/MapMethod";

 class App extends Component {
  render() {
    return (
      <div>
        Hello world
        <hr />
        <Lecture />
        <hr />
        <MapMethod />
      </div>
    )
  }
}
export default App;