import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function displayFahrenheitTemperature(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsiusTemperature(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={displayFahrenheitTemperature}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={displayCelsiusTemperature}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}