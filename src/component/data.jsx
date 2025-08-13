 import React from 'react';
 import './data.css' 
  export const records = [
  { image: 'https://media.istockphoto.com/id/1314329942/photo/goal-gappa-or-pani-puri.jpg?s=612x612&w=0&k=20&c=l6akiKMfTLE9nR4VonhiOZpZGDY4aEjimAN-BSskF-A=', time: 'Evening',   location: 'City-1',      weather: 'Sunny',        foodName: 'Panipuri' },
  { image: 'https://t3.ftcdn.net/jpg/01/14/51/60/360_F_114516029_Z2B6FO30AB6ZR3v9WHXjpXmJScaiLtzk.jpg', time: 'Afternoon', location: 'City-2',      weather: 'Cloudy',       foodName: 'Biryani' },
  { image: 'https://thumbs.dreamstime.com/b/dahi-puri-dahi-papdi-spicy-indian-snack-called-87627868.jpg', time: 'Evening',   location: 'City-3',      weather: 'Rainy',        foodName: 'Dahi puri' },
  { image: 'https://www.unileverfoodsolutions.com.my/dam/global-ufs/mcos/SEA/calcmenu/recipes/MY-recipes/chicken-&-other-poultry-dishes/satay-ayam/main-header.jpg', time: 'Night',     location: 'City-4',      weather: 'Windy',        foodName: 'Satay' },
  { image: 'https://media.istockphoto.com/id/1329213718/photo/vada-pav.jpg?s=612x612&w=0&k=20&c=Yy3pm53KrPAnZXL9weCJDzXjxa2My34oVFx7RBCPmZ8=', time: 'Morning',   location: 'Mumbai',      weather: 'Sunny',        foodName: 'Vada Pav' },
  { image: 'https://i.ytimg.com/vi/csfIOfMnRGg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6GPMx72TdT-BQh86wkTA3VKBRpQ', time: 'Afternoon', location: 'Delhi',       weather: 'Cloudy',       foodName: 'Chole Bhature' },
  { image: 'https://i.pinimg.com/564x/18/7e/4e/187e4e16566213db56b8d4da059b2831.jpg', time: 'Evening',   location: 'Kolkata',     weather: 'Rainy',        foodName: 'Kathi Roll' },
  { image: 'https://www.ndtv.com/cooks/images/Haleem%282%29.jpg', time: 'Night',     location: 'Hyderabad',   weather: 'Windy',        foodName: 'Haleem' },
  { image: 'https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg', time: 'Morning',   location: 'Chennai',     weather: 'Humid',        foodName: 'Idli Sambhar' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKrAyTUTVPe0pNKb0lPRWbMPn9H6lzOOUpA&s', time: 'Afternoon',location: 'Jaipur',      weather: 'Hot',          foodName: 'Mirchi Bada' },
  { image: 'https://t4.ftcdn.net/jpg/10/41/99/53/360_F_1041995329_Y948A29Hru2TXn8JgkWMwJmIVauyQ9jq.jpg', time: 'Evening',  location: 'Ahmedabad',   weather: 'Dry',          foodName: 'Dhokla' },
  { image: 'https://i.ndtvimg.com/i/2017-09/kebab_625x350_71504248496.jpg', time: 'Morning',  location: 'Lucknow',     weather: 'Foggy',        foodName: 'Tunday Kebab' },

];

const FoodCards = () => {
  return (
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
  );
};

export default FoodCards;