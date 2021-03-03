import React from "react";
import Weather from "./Weather";
import "./App.css";




export default function App() {
  return (
  <div className="App">
    <div className="container">
        <Weather defaultCity="Warsaw" />
    
    <footer>
    <a href="https://github.com/gltats/weather-react-app"
    target="_blank">
      Open-source code
    </a>
    {" "}by Tatiana Gomes
    </footer>
    
    </div>
    </div>
    );
}


