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
    <div className="container mx-auto p-4 bg-slate-100">
      <h1 className="flex justify-center text-4xl font-bold mb-8 mt-8">Weather App</h1>
      <div className="flex flex-col items-center">
        <div className="mb-8">
          <input
            type="text"
            value={location}
            onChange={event => setLocation(event.target.value)}
            className="p-4 border border-gray-400 rounded-l-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter location"
          />
          <button onClick={handleSearch} className="bg-blue-500 text-white rounded-r-lg px-8 py-4 hover:bg-blue-600 transition duration-300 ease-in-out">
            Search
          </button>
        </div>
        {weatherData && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-300 rounded-lg shadow-md p-8">
              <h2 className="text-xl font-semibold mb-4 text-indigo-800">Today's Weather</h2>
              <WeatherToday weatherData={weatherData} />
            </div>
            <div className="bg-gray-300 rounded-lg shadow-md p-8">
              <h2 className="text-xl font-semibold mb-4 text-indigo-800">Today's Highlights</h2>
              <WeatherHighlights weatherData={weatherData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
