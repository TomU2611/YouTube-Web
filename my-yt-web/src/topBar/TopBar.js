// src/topBar/TopBar.js
import React from 'react';
import './TopBar.css';
import logoImg from './logo.png';
import { Link } from 'react-router-dom';
import Dropdown  from './Dropdown';
//import searchIcon from './logo.png';

function TopBar({connection, users} ) {
  const profilePicture = null;
  if (connection.isConnected) {
    const user = users.find(user => user.username == connection.user);
    profilePicture = user.profilePicture;
  }

  return (
    <div>
      <div className="topbar">

        <div className="topbar-right">
          {!connection.isConnected &&
            <Link to="/login">
              <button type="button" className="buttonSign">
                <i className="bi bi-person icon"></i>
                <span className="buttonText">Sign In</span>
              </button>
            </Link>
          }
          {connection.isConnected &&
            <div>
              <div className="profile-picture">
                    <img src={profilePicture  }   />
              </div>

            
              <button type="button" className="buttonSign">
                <span className="buttonText">Sign Out</span>
              </button>
            </div>
          }
        </div>


        <div className="topbar-left">
          <Link to="/"><img src={logoImg} alt="" className="logo" /></Link>
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