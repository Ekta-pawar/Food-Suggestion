import React from 'react';
import "./login.css"
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div className="hero">
        <div className="side-image left">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png"
            alt="Left Decoration"
          />
        </div>

        <div className="side-image right">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png"
            alt="Right Decoration"
          />
        </div>

        <div className="content">
          <h1>
            Better food for<br /> Smart people
          </h1>
        </div>

        <img
          src="https://b.zmtcdn.com/data/o2_assets/110a09a9d81f0e5305041c1b507d0f391743058910.png"
          className="floating-image float1"
          alt="Float 1"
        />
        <img
          src="https://b.zmtcdn.com/data/o2_assets/b4f62434088b0ddfa9b370991f58ca601743060218.png"
          className="floating-image float2"
          alt="Float 2"
        />
        <img
          src="https://b.zmtcdn.com/data/o2_assets/316495f4ba2a9c9d9aa97fed9fe61cf71743059024.png"
          className="floating-image float3"
          alt="Float 3"
        />

        <div className="stats-container">
          <h2>Sign In</h2>
          <form>
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              pattern="[0-9]{10}"
            />
           
          </form>
           
          <NavLink to="/suggestions" className="get">Get Suggestions</NavLink>
        </div>
      </div>

      <div>
        <div className="TIME_EL"></div>
        <div className="WEATHER_EL"></div>
      </div>
    </div>
  );
};

export default Login;
