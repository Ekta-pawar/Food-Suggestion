import React, { useEffect, useState } from 'react';
import "./Home.css";
import { records } from "./data";
import { getTimePeriod } from "./GetPeriod";
import { fetchWeatherAndRecommend } from "./FetchWeather";
import Hero from './Hero/Hero';
import Banner from './Banner/Banner';

const API_KEY = 'c6c57af27215c02fb999fc9d9586b888';

const Home = () => {
  const [time, setTime] = useState('');
  const [weather, setWeather] = useState('Loading...');
  const [recommendation, setRecommendation] = useState(null);
  const [noMatch, setNoMatch] = useState(false);


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
    fetchWeatherAndRecommend(
      setWeather,
      getTimePeriod,
      records,
      setRecommendation,
      setNoMatch,
      API_KEY
    );
    const interval = setInterval(() => {
      fetchWeatherAndRecommend(
        setWeather,
        getTimePeriod,
        records,
        setRecommendation,
        setNoMatch,
        API_KEY
      );
    }, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (

    <>
      <Hero />
     
      <div className="container">


        <div className="heading-section">
          <h1>Weather & Food Suggestion App</h1>
        </div>


        <div className="widget">
          <h2>{time}</h2>
          <p>{weather}</p>
        </div>

        <div className="result">
          {recommendation ? (
            <>
              <h3>🍽️ Recommended Food:</h3>
              <p>
                <strong>{recommendation.foodName}</strong> from{' '}
                {recommendation.location}
              </p>
              <img
                src={recommendation.image}
                alt={recommendation.foodName}
              />
            </>
          ) : noMatch ? (
            <p>😕 No matching food found for current time and weather.</p>
          ) : (
            <p>⏳ Loading recommendation...</p>
          )}
        </div>


        <div className="card-container">
          {records.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.foodName} />
              <div className="card-content">
                <h3>{item.foodName}</h3>
                <p><strong>Time:</strong> {item.time}</p>
                <p><strong>Location:</strong> {item.location}</p>
                <p><strong>Weather:</strong> {item.weather}</p>
              </div>
            </div>
          ))}
        </div>
 <Banner />
      </div></>
  );
};

export default Home;
