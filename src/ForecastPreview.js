import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastPreview.css";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperatureMinMax() {
    let tempMax = Math.round(props.data.main.temp_max);
    let tempMin = Math.round(props.data.main.temp_min);
    return ` ${tempMax}°/ ${tempMin}°`;
  }

  return (
    <div className="ForecastPreview col">
      <h5 className="forecastHours">{hours()}</h5>
      <div className="forecastInfo">  
      <div id="icon"> <WeatherIcon  code={props.data.weather[0].icon} /></div>
      <div>{temperatureMinMax()} </div>
      <div>{props.data.main.humidity} % 💧 </div>
      </div>
    </div>
  );
}