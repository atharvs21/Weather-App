import React, { useState } from "react";
import "./current-weather.css";
import DetailedWeather from "../detailed-weather/detailed-weather"; // Import the DetailedWeather component

const CurrentWeather = ({ data }) => {
  const [showDetail, setShowDetail] = useState(false); // State to toggle showing detailed weather

  // Function to toggle showing detailed weather
  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  if (!data) {
    // If data is undefined, return null or a placeholder
    return null; // or return <div>No data available</div>
  }
  
  const { location, current } = data; // Destructure location and current from data
  const cityData = { name: location?.name, country: location?.country, current }; // Ensure location is not undefined

  return (
    <div className="weather" onClick={toggleDetail}> {/* Add onClick event to the weather div */}
      <div className="top">
        <div>
          <p className="city">{cityData.name}, {cityData.country}</p> {/* Use cityData instead of location directly */}
          <p className="weather-description">{current.condition.text}</p> {/* Use current directly */}
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`${current.condition.icon}`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(current.temp_c)}°C</p> {/* Use current directly */}
        {/* <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{current.humidity}%</span>
          </div>
        </div> */}
      </div>
      {/* Conditionally render DetailedWeather component */}
      {showDetail && <DetailedWeather cityData={cityData} />} {/* Pass cityData to DetailedWeather */}
    </div>
  );
};

export default CurrentWeather;
