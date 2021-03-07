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
      <WeatherIcon className="forecastIcon" code={props.data.weather[0].icon} />  <br /> 
      {temperatureMinMax()} <br /> 
      {props.data.main.humidity} % 💧 <br />
      </div>
    </div>
  );
}