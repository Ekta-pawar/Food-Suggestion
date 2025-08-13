import React from 'react';
import './Hero.css';

import bowl from "../../assets/bowle1.png";
import { Link } from 'react-router-dom';



const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        
        <div className="hero-text">
          <h1>Delicious Food Is Waiting for You</h1>
          <p>Freshly prepared meals with love, ready to make your day better.</p>
          
          <div className="hero-buttons">
            <button className="btn-primary">Food Menu</button>
            <button className="btn-secondary">Suggestion</button>
          </div>
        </div>

        <div className="hero-image">
          <img 
            src={bowl}
            alt="Delicious Food" style={{ width: '60%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
