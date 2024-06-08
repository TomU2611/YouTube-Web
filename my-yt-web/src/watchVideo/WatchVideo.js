import React from 'react';
import TopBar from '../topBar/TopBar'; 
import Dropdown from '../topBar/Dropdown';
import './WatchVideo.css';
import SideBar from '../sideBar/SideBar';
import VideoList from '../videoList/Videolist';
import WatchVideoScreen from '../VideoScreen/WatchVideoScreen';

function WatchVideo({ darkMode, toggleDarkMode }) {
  return (
   
    <div className={`Home ${darkMode ? 'dark-mode' : ''}`}>
      <TopBar darkMode={darkMode} />
      <Dropdown toggleDarkMode={toggleDarkMode} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8"> {/* Adjust column size for larger screens */}
            <WatchVideoScreen />
          </div>
          <div className="col-lg-4"> {/* Adjust column size for larger screens */}
            <div className="video-list-container">
            <div className="video-list">
              <VideoList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default WatchVideo;
