import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="con">
      <div className="grid">
        <div className="banner">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Delicious Food"
          />
        </div>
        <div className="space">
          <h1>Food is always Good</h1>
          <p>Freshly prepared meals that bring joy to every bite.</p>
          <h5>$ 2,000</h5>
          <button className="order-btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
