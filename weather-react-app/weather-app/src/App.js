import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { async } from "q";
import Weather from "./component/weather.component";
import Form from "./component/form.component";

const ApiKey = "a02cd43f14960cb92ea6e2b5fce662fc";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: undefined,
      error: false
    };
    this.getWeather();
  }

  convertKelvinToCelsius(temp) {
    let celsius = Math.floor(temp - 273.15);
    return celsius;
  }

  getWeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({ icon: this.weatherIcon.Show });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere });
        break;
      case rangeId == 800:
        this.setState({ icon: this.weatherIcon.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weatherIcon.Clouds });
        break;
      default:
        this.setState({ icon: this.weatherIcon.Clouds });
    }
  }

  getWeather = async e => {
    let city;
    let country;

    if (e) {
      e.preventDefault();
      city = e.target.elements.city.value;
      country = e.target.elements.country.value;
    }

    // const api_call = await fetch(
    //   `http://api.openweathermap.org/data/2.5/weather?q=Novi%20Sad,RS&appId=${ApiKey}`
    // );

    let api_call;
    if (city && country) {
      api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appId=${ApiKey}`
      );
    } else {
      api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=Novi%20Sad,RS&appId=${ApiKey}`
      );
    }

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Show: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };

    const response = await api_call.json();
    console.log(response);

    this.setState({
      city: `${response.name}, ${response.sys.country}`,
      celsius: this.convertKelvinToCelsius(response.main.temp),
      temp_min: this.convertKelvinToCelsius(response.main.temp_min),
      temp_max: this.convertKelvinToCelsius(response.main.temp_max),
      description: response.weather[0].description
    });

    this.getWeatherIcon(this.weatherIcon, response.weather[0].id);
  };

  render() {
    return (
      <div className="App">
        <Form loadWeather={this.getWeather}></Form>
        <Weather
          city={this.state.city}
          country={this.state.country}
          temp_celcius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          weatherIcon={this.state.icon}
        ></Weather>
      </div>
    );
  }
}

export default App;
