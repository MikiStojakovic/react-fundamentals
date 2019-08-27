import React from "react";

const Box = props => {
  return (
    <div className="d-flex flex-row p-4">
      <span>{Element(1)}</span>
      <span>{Element(2)}</span>
      <span>{Element(3)}</span>
    </div>
  );
};

let Element = value => {
  return (
    <div>
      <span className="border p-3 m-2 bg-light">Element {value}</span>
    </div>
  );
};

export default Box;
