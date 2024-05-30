// src/topBar/TopBar.js
import React from 'react';
import './TopBar.css';
import logoImg from './logo.png';


const TopBar = () => {

  return (
    <div className="topbar">
      <div className="topbar-left">
        <img src={logoImg} alt="" className="logo" />
      </div>
      <div className="topbar-center">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">
          <i className="fas fa-search fa-lg"></i>
        </button>
        <div className="search-options">
        </div>
      </div>
      <div className="topbar-right">
        <i className="fas fa-video"></i>
        <i className="fas fa-bell"></i>
        <i className="fas fa-user-circle"></i>
      </div>
    </div>
  );
};

export default TopBar;