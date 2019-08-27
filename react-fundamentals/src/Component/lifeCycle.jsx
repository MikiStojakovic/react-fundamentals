import React, { Component } from "react";
import ReactDOM from "react-dom";

class LifeCycle extends Component {
  componentWillMount() {
    console.log("Executed before the component is mounted");
    console.log(ReactDOM.findDOMNode(this));
  }
  componentDidMount() {
    console.log("Executed after the component is mounted");
    console.log(ReactDOM.findDOMNode(this));
  }
  render() {
    return (
      <div className="App">
        <h1>React DOM</h1>
      </div>
    );
  }
}

export default LifeCycle;
