// src/topBar/TopBar.js
import React from 'react';
import './TopBar.css';
import logoImg from './logo.png';
import { Link } from 'react-router-dom';
import Dropdown  from './Dropdown';
//import searchIcon from './logo.png';

const TopBar = () => {

  return (
    <div>
      <div className="topbar">

        <div className="topbar-right">
          <Link to="/login">
            <button type="button" className="buttonSign">
              <i className="bi bi-person icon"></i>
              <span className="buttonText">Sign In</span>
            </button>
          </Link>
        </div>


        <div className="topbar-left">
          <img src={logoImg} alt="" className="logo" />
        </div>


        <div className="topbar-center">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">
            <i class="bi bi-search"></i>
          </button>
        </div>

      </div>
      <Dropdown />
    </div>
  );
};

export default TopBar;