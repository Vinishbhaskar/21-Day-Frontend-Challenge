import React from 'react';

const WeatherHighlights = ({ weatherData }) => {
  if (!weatherData || !weatherData.main || !weatherData.visibility) {
    return null; // Render nothing if data is not available yet
  }

  const humidity = weatherData.main.humidity;
  const visibility = weatherData.visibility;
  const windSpeed = weatherData.wind.speed;
  const cloudiness = weatherData.clouds.all;
  const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();


  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-xl font-semibold mb-4">Today's Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Sunrise</h3>
          <p className="text-lg">{sunrise}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Sunset</h3>
          <p className="text-lg">{sunset}</p>
        </div>
        <div>
        <h3 className="text-lg font-semibold mb-2">Humidity</h3>
          <p className="text-lg">{humidity}%</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Wind Speed</h3>
          <p className="text-lg">{windSpeed} km/h</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Visibility</h3>
          <p className="text-lg">{visibility} km</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Cloudiness</h3>
          <p className="text-lg">{cloudiness}%</p>
        </div>
        {/* <div>
          <h3 className="text-lg font-semibold mb-2">pressure</h3>
          <p className="text-lg">{pressure}hpa</p>
        </div> */}
      </div>
    </div>
  );
};

export default WeatherHighlights;
