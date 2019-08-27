import React, { Component } from "react";

class Timer extends Component {
  state = {
    date: new Date()
  };

  callMe() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h5>0</h5>
        <button className="btn btn-warning">Click me</button>
      </div>
    );
  }
}

export default Timer;
