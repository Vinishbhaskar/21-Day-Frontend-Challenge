import React from 'react';

const WeatherToday = ({ weatherData }) => {
  if (!weatherData || !weatherData.main || !weatherData.weather || weatherData.weather.length === 0) {
    return null; // Render nothing if data is not available yet
  }

  const temperature = Math.round(weatherData.main.temp - 273.15);
  const feelsLike = Math.round(weatherData.main.feels_like - 273.15);
  const description = weatherData.weather[0].description;
  const date = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  const time = new Date().toLocaleTimeString();
  const location = weatherData.name;
  const country = weatherData.sys.country;

  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-8">
      <img
        src={require('../assets/01d.png')} // Replace with actual weather icon URL or import from assets folder
        alt="Weather Icon"
        className="w-16 h-16 mr-8"
      />
      <div>
        <h2 className="text-4xl font-bold mb-2">{temperature}°C</h2>
        <p className="text-lg">Feels Like: {feelsLike}°C</p>
        <p className="text-lg">Description: {description}</p>
        <hr className="border-gray-300 my-4" />
        <div className="text-lg">
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <p>Location: {location}, {country}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherToday;
