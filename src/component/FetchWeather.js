  
export const fetchWeatherAndRecommend = async (setWeather,getTimePeriod,records,setRecommendation,setNoMatch,API_KEY) => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=28.6139&lon=77.2090&units=metric&appid=${API_KEY}`
        );
        if (!res.ok) throw new Error('Weather fetch failed');
        const data = await res.json();
        const temp = data.main.temp.toFixed(1);
        const condition = data.weather[0].main;

        setWeather(`🌤️ ${temp}°C, ${condition}`);

        const timePeriod = getTimePeriod();
        // console.log(timePeriod)
        const matched = records.find(
          item =>
            item.time === timePeriod ||
            item.weather.toLowerCase() === condition.toLowerCase()
        );
        console.log(matched);

        if (matched) {
          setRecommendation(matched);
          setNoMatch(false);
        } else {
          setRecommendation(null);
          setNoMatch(true);
        }
      } catch (err) {
        console.error(err);
        setWeather('🌤️ Weather not available');
        setNoMatch(true);
      }
    };