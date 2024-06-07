import React from 'react';
import TopBar from '../topBar/TopBar'; 
import Dropdown from '../topBar/Dropdown';
import '../homePage/Home.css';
import SideBar from '../sideBar/SideBar';
import VideoList from '../videoList/Videolist';
import WatchVideoScreen from '../VideoScreen/WatchVideoScreen';





function Home({ darkMode, toggleDarkMode }) {
  return (
    <div className={`Home ${darkMode ? 'dark-mode' : ''}`}>
      <TopBar />
      <VideoList />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <SideBar />
          </div>
          <div className="col-sm-9">
            <Dropdown toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;