import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "Click me"
    };
    console.log("Timer constructor called");
  }

  componentWillUpdate(newProps, newState) {
    console.log("Called before the render Method()");
    console.log("NewProps", newProps);
    console.log("NewState", newState);
  }

  componentDidUpdate(preProps, preState) {
    console.log("Called after the render Method()");
    console.log("preProps", preProps);
    console.log("preState", preState);
  }

  componentWillUnmount() {
    console.log("Component will unmount");
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
        <h6>
          <Logger time={this.state.counter} />
        </h6>
      </div>
    );
  }
}

export default Timer;

class Logger extends Component {
  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps is triggered");
    console.log("New Props", newProps);
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate is triggered");
    console.log("New Props", newProps);
    console.log("New State", newState);
    return false;
  }
  render() {
    return this.props.time;
  }
}
