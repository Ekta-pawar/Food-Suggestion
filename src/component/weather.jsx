import React, { useEffect, useState } from 'react';

const WeatherWidget = () => {
  const API_KEY = 'c6c57af27215c02fb999fc9d9586b888';

  const [time, setTime] = useState('');
  const [weather, setWeather] = useState('🌤️ Loading...');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime('🕰️ ' + now.toLocaleTimeString());
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=28.6139&lon=77.2090&units=metric&appid=${API_KEY}`
        );
        if (!res.ok) throw new Error(res.status);
        const data = await res.json();
        const temp = data.main.temp.toFixed(1);
        const cond = data.weather[0].main;
        setWeather(`🌤️ ${temp}°C, ${cond}`);
      } catch (e) {
        console.error(e);
        setWeather('🌤️ Weather not available');
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 10 * 60 * 1000); 
    return () => clearInterval(interval);
  }, [API_KEY]);

  return (
  <div>
      <h2>{time}</h2>
      <p>{weather}</p>
    </div>
  );
};

export default WeatherWidget;
