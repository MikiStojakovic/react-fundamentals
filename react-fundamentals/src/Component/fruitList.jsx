import React, { Component } from "react";

class FruitList extends Component {
  render() {
    return (
      <div className="App">
        <ol>
          {this.props.fruits.map(element => (
            <li>{element}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default FruitList;
