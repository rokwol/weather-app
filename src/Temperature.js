import React from "react";
// import "./Temperature.css";

export default function Temperature() {
  let weatherData = {
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/snow-cloud-512.png",
    temperature: 4,
    wind: 2,
    humidity: 68,
    pressure: 999,
  };
  return (
    <div className="Temperature">
      <div className="row">
        <div className="col-sm-6">
          <div className="d-flex justify-content-center currentWeather">
            <div>
              <img src={weatherData.imgUrl} alt="" />
            </div>
            <div className="currentTemp">
              <strong>{weatherData.temperature}</strong>
              <small className="units">
                <a href="/"> °C </a> | <a href="/"> °F </a>
              </small>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="d-flex justify-content-center">
            <ul className="weatherDetails">
              <li>Wind: {weatherData.wind} km/h</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Pressure: {weatherData.pressure} hPA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
