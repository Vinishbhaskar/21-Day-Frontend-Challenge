import React from 'react';

const WeatherHighlights = ({ weatherData }) => {
  if (!weatherData || !weatherData.main || !weatherData.visibility) {
    return null; // Render nothing if data is not available yet
  }

  const humidity = weatherData.main.humidity;
  const visibility = weatherData.visibility;
  const windSpeed = weatherData.wind.speed;
  const cloudiness = weatherData.clouds.all;
  const pressure = weatherData.main.pressure;
  const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-2">Today's Highlights</h2>
      <p className="text-lg">Humidity: {humidity}%</p>
      <p className="text-lg">Visibility: {visibility} meters</p>
      <p className="text-lg">Wind: {windSpeed} m/s</p>
      <p className="text-lg">Cloudiness: {cloudiness}%</p>
      <p className="text-lg">Pressure: {pressure} hPa</p>
      <p className="text-lg">Sunrise: {sunrise}</p>
      <p className="text-lg">Sunset: {sunset}</p>
    </div>
  );
};
export default WeatherHighlights;
