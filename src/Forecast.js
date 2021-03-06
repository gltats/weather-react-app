import React, { useState } from "react";
import ForecastPreview from "./ForecastPreview";
import axios from "axios";
import "./Forecast.css";
import Loader from "react-loader-spinner";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast row" id="forecastRow">
        <ForecastPreview data={forecast.list[0]} />
        <ForecastPreview data={forecast.list[1]} />
        <ForecastPreview data={forecast.list[2]} />
        <ForecastPreview data={forecast.list[3]} />
        <ForecastPreview data={forecast.list[4]} />
      </div>
      );
    } else {
      let apiKey = "a78ac71707c8cfe476f9948adb35650f";
      let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
      axios.get(url).then(handleForecast);
  
      return(
        <Loader
          className="loader"
          type="Watch"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      );
    }
  }