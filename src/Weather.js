import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon:response.data.weather[0].icon,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,  
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }


  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function callingAxios(apiUrl){
    axios.get(apiUrl).then(handleResponse);
}


  function search() {
    const apiKey = "a78ac71707c8cfe476f9948adb35650f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    callingAxios(apiUrl);
  }

  function handlePosition(position){
    let latidude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "a78ac71707c8cfe476f9948adb35650f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latidude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    callingAxios(apiUrl);
}

function handleLocation(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handlePosition);
}
  


  if (weatherData.ready) {
    return (
      <div className="Weather">
        <section className="overlay">
        <div className="row">
        <div className="col-9">
        <form id="search-form"onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a city.."
                autoComplete="off"
                className="city"
                id="search-input"
                onChange={handleCityChange}
              />
        </form>
        </div>
        <div className="col-2">
        <button 
            type="submit"
            className="btn btn-outline-light btn-sm"
            id="location-button"
            onClick={handleLocation}>
            Current location
        </button>
        
        </div>
        </div>
        <WeatherInfo data={weatherData} />
        </section>
        <section className="update">
        <hr className="top"/>
         <span>
            <strong> Updated at: 23:44</strong>
         </span>
        <hr className="bottom" />
      </section>
      <section className="overlay">
      <Forecast city={weatherData.city} />
      </section>
      
      </div>
      
    );
  } else {
    search();
    return "Loading...";
  }
}