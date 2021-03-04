import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
  return (
    <section className="today">
      <h1>
        <span id="city-name">{props.data.city}</span>
        <i className="fas fa-map-marker-alt"></i>
      </h1>
      <div className="row">
        <div className="col-4">
          <div className="grades">
            <strong className="todayTemperature" id="today-temperature">
                <WeatherTemperature celsius={props.data.temperature} />
            </strong>

            <div className="row">
              <div className="col-6">
                Wind: <span id="wind"> {props.data.wind}</span> km/h
              </div>
              <div className="col-6">
                Hum.: <span id="humidity"> {props.data.humidity} </span> %
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
        <WeatherIcon code={props.data.icon} />
        </div>
        <div className="col-4">
          <div className="todayInfo">
            <div id="date">
              <strong className="today">Today</strong>
              <br />
              <FormatedDate date={props.data.date} />
            </div>
            <div className="weatherDescription" id="weather-description">
            {props.data.description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}