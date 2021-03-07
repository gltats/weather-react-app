import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <section className="today">
      <h1 id="city-name">
        {props.data.city}
      </h1>
      <div className="row">
        <div className="col-4">
          <div className="grades">
            <strong className="todayTemperature">
                <WeatherTemperature celsius={props.data.temperature} />
            </strong>

            <div className="row">
              <div className="col-6">
                <span className="WindHum">Wind: <br /> {props.data.wind}km/h 🌬</span>
              </div>
              <div className="col-6">
                 <span className="WindHum">Hum.: <br />  {props.data.humidity}%💧</span> 
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
              <FormatedDate date={props.data.date} />
            </div>
            <div className="weatherDescription">
            {props.data.description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}