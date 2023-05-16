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

  // Add appropriate image/icon element for weather condition
  // You can import the image from your assets folder or use a CDN link
  // const weatherIcon = <img src={require('../assets/weather-icon.png')} alt="Weather Icon" />;
  // Replace 'weather-icon.png' with the actual filename or CDN link for the weather icon

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200 p-4">
        <div>
          {/* Add weather icon element */}
          {/* {weatherIcon} */}
          <h2 className="text-4xl font-bold">{temperature}°C</h2>
          <p className="text-lg">Feels Like: {feelsLike}°C</p>
          <p className="text-lg">Description: {description}</p>
        </div>
        <hr className="border-gray-300 my-4" />
        <div className="text-lg">
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <p>Location: {location}, {country}</p>
        </div>
      </div>
      <div className="w-3/4 p-4">
        {/* Other content or components */}
      </div>
    </div>
  );
};

export default WeatherToday;
