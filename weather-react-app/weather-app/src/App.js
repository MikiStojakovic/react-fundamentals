import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { async } from "q";
import Weather from "./component/weather.component";

const ApiKey = "a02cd43f14960cb92ea6e2b5fce662fc";
// api.openweathermap.org/data/2.5/weather?q=London,uk

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined
    };
    this.getWeather();
  }

  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Novi%20Sad,RS&appId=${ApiKey}`
    );

    const response = await api_call.json();
    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country
    });
  };

  render() {
    return (
      <div className="App">
        <Weather city={this.state.city} country={this.state.country}></Weather>
      </div>
    );
  }
}

export default App;
