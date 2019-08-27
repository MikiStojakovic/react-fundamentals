import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "Click me"
    };
  }

  onClick = () => {
    this.setState({
      counter: this.state.counter + 1,
      message: "Clicked"
    });
  };

  render() {
    return (
      <div className="App">
        <h5>{this.state.counter}</h5>
        <button onClick={this.onClick} className="btn btn-warning">
          {this.state.message}
        </button>
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default Timer;
