import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherToday from './WeatherToday';
import WeatherHighlights from './WeatherHighlights';

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch location based on IP address
    const fetchLocation = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        const data = response.data;
        setLocation(data.city);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchLocation();
  }, []);

  const handleSearch = async () => {
    try {
      // Fetch weather data for the entered location
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a5bb4718b30b6f58f58697997567fffa`);
      const data = response.data;
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Weather App</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={location}
          onChange={event => setLocation(event.target.value)}
          className="p-2 border border-gray-400 rounded mr-2"
        />
        <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded">Search</button>
      </div>

      {weatherData && (
        <div>
          <WeatherToday weatherData={weatherData} />
          <WeatherHighlights weatherData={weatherData} />
        </div>
      )}
    </div>
  );
};

export default WeatherApp;