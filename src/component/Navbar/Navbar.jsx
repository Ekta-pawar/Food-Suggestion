import React from 'react';
import './Navbar.css'; // Import the CSS file
import { Link, NavLink } from 'react-router-dom';


/*
<BrowserRouter>

<Link to="/" />
<NavLink to="/login" activeClassName="active" />


  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/suggestions" element={<Suggestions />} />
    <Route path="/login" element={<Login />} />
  </Routes>
</BrowserRouter>
*/

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="cont">

        <div className="food">
          <p>FOOD<span>EAT</span></p>
        </div>

        <div className="item">
          <ul>
            <li><NavLink to="/" className={(isActive, isPending) => {
isActive ? "active-link" : isPending ? "pending-link" : undefined
            }}>Home</NavLink></li>
            <li><NavLink to="/suggestions">Suggestion</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
        </div>

        <div className="img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXkm9cY-Ipyw3K7evHgNYtEyyE8BR-UnS_038_nPtW_tMa2vVNLCvUghurggQQ-Vzq0c&usqp=CAU"
            alt="Logo"
          />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
