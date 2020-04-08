import React, { Component } from 'react';
import "./App.css";
import Circle from './Circle/Circle';
import GameOver from './GameOver/GameOver';

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

 class App extends Component {
   state = {
     score: 0,
     current: 0,
     showGameOver: false,
     rounds: 0,
   };
   pace = 1500;
   timer = undefined;

next = () => {
if (this.state.rounds >= 2) {
  this.endHandler();
}

let nextActive = undefined;
  do {
    nextActive = getRndInteger(1, 4);
} while (nextActive === this.state.current);
this.setState({
  current: nextActive,
  rounds: this.state.rounds + 1,
});
this.pace *= 0.95;
this.timer = setTimeout(this.next, this.pace);
console.log(this.state.current);
};

   clickHandler = (circleID) => {
     let audio = new Audio("/Button-Sound.mp3");
     console.log('i was clicked -', circleID);
if (this.state.current !== circleID) {
  this.endHandler();
  return;
}
audio.play();
     this.setState({
       score: this.state.score + 1,
       rounds: 0,
     })
   }
   startHandler = () => {
     this.next();
   };
   endHandler = () => {
     let audio_end = new Audio("/game-over-sound-effect.mp3");
     audio_end.loop = false;
     audio_end.play();
     clearTimeout(this.timer);
     this.setState({
showGameOver: true,
   })
   
   };
   
  render() {
    return (
      <div className="container">
        <h1>SPEED TEST</h1>
    <p>Your score is: {this.state.score}</p>
    <main>
      <Circle className="first_circle"
      active={this.state.current === 1}
      buttonColor="#4cb050" click={this.clickHandler.bind(this, 1)} />
      <Circle active={this.state.current === 2} buttonColor="#ffeb3c" click={this.clickHandler.bind(this, 2)} />
      <Circle active={this.state.current === 3} buttonColor="#ea1e63" click={this.clickHandler.bind(this, 3)} />
      <Circle active={this.state.current === 4} buttonColor="#00bcd5" click={this.clickHandler.bind(this, 4)} />
    </main>
    <div>
    <button onClick={this.startHandler}>Start Game</button>
    <button onClick={this.endHandler}>End Game</button>
    </div>
    {this.state.showGameOver && <GameOver score={this.state.score}/>}
      </div>
    );
  }
}
export default App;
