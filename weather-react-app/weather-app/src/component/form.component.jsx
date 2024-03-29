import React from "react";
import "./form.style.css";

const Form = props => {
  return (
    <div className="container">
      <form onSubmit={props.loadWeather}>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              name="city"
              autoComplete="off"
              placeholder="city"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              name="country"
              autoComplete="off"
              placeholder="country"
            />
          </div>
          <div className="col-md-3 mt-md-0 py-2 text-md-left"></div>
          <button className="btn btn-warning">Get Weather</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
