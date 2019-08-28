import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.handlerMe = this.Handler.bind(this);
  }

  Handler(event) {
    console.log(this, event.target);
  }

  render() {
    return (
      <div className="App">
        <div className="child">
          <p onMouseOver={event => console.log("onMouse over " + event.target)}>
            Hover me
          </p>
        </div>
      </div>
    );
  }
}

export default Button;
