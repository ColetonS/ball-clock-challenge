import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      ballArr: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25
      ],
      minuteArr: [],
      fiveMinArr: [],
      hourArr: []
    };
  }

  timer() {
    setInterval(() => {
      let ball = this.state.ballArr.shift();
      return this.state.minuteArr.unshift(ball);
    }, 60000);
  }

  render() {
    return (
      <div className="App">
        <div className='track'>
          <h3>Minute Track</h3>
          <div className='balls'>{this.state.minuteArr.map(ball => {
          return <p>Ball {ball}</p>;
          })}</div>
        </div>
        <div className='track'>
          <h3>Five-Minute Track</h3>
          <div className='balls'>{this.state.fiveMinArr.map(ball => {
          return <p>Ball {ball}</p>;
          })}</div>
        </div>
        <div className='track'>
          <h3>Hour Track</h3>
          <div className='balls'>{this.state.hourArr.map(ball => {
          return <p>Ball {ball}</p>;
          })}</div>
        </div>
        <div className='track'>
          <h3>Bottom Track</h3>
          <div className='balls'>{this.state.ballArr.map(ball => {
          return <p>Ball {ball}</p>;
          })}</div>
        </div>
      </div>
    );
  }
}
