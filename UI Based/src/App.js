import './App.css';
import Search from './components/search/search';
import { useState, useEffect } from "react";
import CurrentWeather from "./components/current-weather/current-weather";
import DetailedWeather from "./components/detailed-weather/detailed-weather"; // Import the detailed weather component
import axios from 'axios';
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [components, setComponents] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null); // State to track selected city for detailed view

  const handleOnSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    try {
      const response = await axios.get(`${WEATHER_API_URL}?key=${WEATHER_API_KEY}&q=${lat},${lon}`);
      setCurrentWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  };

  const handleAddComponent = () => {
    if (components.length < 4) { // Limit to 4 cities
      setComponents(prevComponents => [
        ...prevComponents,
        {
          id: Date.now(), // Generate unique id for each component
          search: <Search onSearchChange={handleOnSearchChange} />,
          weather: currentWeather && <CurrentWeather data={currentWeather} onSelect={handleSelectCity} />, // Pass onSelect function to CurrentWeather component
        }
      ]);
    }
  };

  const handleDeleteComponent = (id) => {
    setComponents(prevComponents => prevComponents.filter(component => component.id !== id));
  };

  // Function to handle selection of a city for detailed view
  const handleSelectCity = (cityData) => {
    setSelectedCity(cityData);
  };

  // Function to handle closing the detailed view
  const handleCloseDetailedView = () => {
    setSelectedCity(null);
  };

  useEffect(() => {
    if (currentWeather) {
      setComponents(prevComponents => [
        ...prevComponents.slice(0, -1), 
        {
          id: Date.now(), // Generate unique id for each component
          // search: <Search onSearchChange={handleOnSearchChange} />,
          weather: currentWeather && <CurrentWeather data={currentWeather} onSelect={handleSelectCity} />, // Pass onSelect function to CurrentWeather component
        }
      ]);
    }
  }, [currentWeather]);

  return (
    <div className="container">
      <div className='title'>Atharv's weather app</div>

      <button onClick={handleAddComponent} className='button' disabled={components.length >= 4}>Add City</button>
      
      <div className="weather-container">
        {components.map((component, index) => (
          <div className="weather-item" key={component.id}>
            {component.search}
            {component.weather}
            {(index + 1) % 2 === 0 && <div className="row-divider" />}
            <button onClick={() => handleDeleteComponent(component.id)} className='button'>Delete</button>
          </div>
        ))}
      </div>
      
      {/* Conditional rendering for detailed weather view */}
      {selectedCity && (
        <DetailedWeather cityData={selectedCity} onClose={handleCloseDetailedView} />
      )}
    </div>
  );
}

export default App;
