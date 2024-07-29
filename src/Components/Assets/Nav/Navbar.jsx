import React from 'react';
import './navB.css';

const Navbar = ({ user, logout }) => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <img src='./Pics/airtel.png' alt='logo' />
        <div className="nav-list">
          <ul className="options">
            <li className="nav-items">
              <div className="dropdown">
                <button className="dropbtn">Prepaid</button>
                <div className="dropdown-content">
                  <a href="#recharge">Recharge</a>
                  <a href="#plan">View Plan</a>
                  <a href="#pay-bill">Pay Bill</a>
                  <a href="#new">New Prepaid Sim</a>
                  <a href="#international">International Roaming</a>
                  <a href="#switch">Switch Prepaid to Postpaid</a>
                </div>
              </div>
            </li>
            <li className="nav-items">
              <div className="dropdown">
                <button className="dropbtn">Postpaid</button>
                <div className="dropdown-content">
                  <a href="#recharge">Recharge</a>
                  <a href="#new-sim">New Prepaid Sim</a>
                  <a href="#view-plans">View Plans</a>
                  <a href="#roaming">International Roaming</a>
                  <a href="#switch">Switch Prepaid to Postpaid</a>
                  <a href="#port">Port to Airtel Prepaid</a>
                </div>
              </div>
            </li>
            <li className="nav-items">
              {user ? (
                <div className="profile-dropdown">
                  <button className="dropbtn">{user.name}</button>
                  <div className="dropdown-content">
                    <a href="#profile">Profile</a>
                    <a href="#logout" onClick={logout}>Logout</a>
                  </div>
                </div>
              ) : (
                <a href="/login" className="login-btn">Login</a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
