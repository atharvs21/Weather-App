import React from "react";
import "./detailed-weather.css"; // Import the CSS file for styling

const DetailedWeather = ({ cityData, onClose }) => {
  const { name, country, current } = cityData;

  return (
    <div className="detailed-weather">
      <div className="header">
        <h2>{`${name}, ${country}`}</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <div className="content">
        <p className="description">{current.condition.text}</p>
        <img
          src={current.condition.icon}
          alt="Weather Icon"
          className="weather-icon"
        />
        <p className="temperature">{`${Math.round(current.temp_c)}°C`}</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Humidity:</span>
            <span className="parameter-value">{`${current.humidity}%`}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind:</span>
            <span className="parameter-value">{`${current.wind_kph} km/h`}</span>
          </div>
          {/* Add more weather details as needed */}
        </div>
      </div>
    </div>
  );
};

export default DetailedWeather;
