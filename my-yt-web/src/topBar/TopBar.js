// src/topBar/TopBar.js
import React from 'react';
import './TopBar.css';
import logoImg from './logo.png';
//import searchIcon from './logo.png';

const TopBar = () => {

  return (
    <div className="topbar">

      <div className="topbar-right">
      <button type="button" className="buttonSign">
          <i className="bi bi-person icon"></i>
          <span className="buttonText">Sign In</span>
        </button>
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


      <div className="search-url">
        <ul>
          <li>
            <a href=''>Sports</a>
          </li>
          <li>
            <a href=''>Sports</a>
          </li>
          <li>
            <a href=''>Sports</a>
          </li>
          <li>
            <a href=''>Sports</a>
          </li>
          <li>
            <a href=''>Sports</a>
          </li>
          <li>
            <a href=''>Sports</a>
          </li>
          <li>
            <a href=''>Sports</a>
          </li>
          <li>
            <a href=''>Sports</a>
          </li>
          <li>
            <a href=''>Sports</a>
          </li>
          <li>
            <a href=''>Sports</a>
          </li>
          <li>
            <a href=''>Sports</a>
          </li>
        </ul>
      </div>



    </div>
  );
};

export default TopBar;