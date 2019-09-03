import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { async } from "q";

const ApiKey = "";
// api.openweathermap.org/data/2.5/weather?q=London,uk

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.getWeather();
  }

  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Novi%20Sad,RS&appId=${ApiKey}`
    );

    const response = await api_call.json();
    console.log(response);
  };

  state = {};
  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <h5 className="py-4">
          <i className="wi wi-day-sunny"></i>
        </h5>
      </div>
    );
  }
}

export default App;
