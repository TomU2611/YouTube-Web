import React from 'react';
import TopBar from '../topBar/TopBar'; 
import Dropdown from '../topBar/Dropdown';
import '../homePage/Home.css';
import SideBar from '../sideBar/SideBar';
import VideoList from '../videoList/Videolist';
import WatchVideoScreen from '../VideoScreen/WatchVideoScreen';
import { Routes, Route } from 'react-router-dom';
import AddVideo from '../addVideo/AddVideo';





function Home({ darkMode, toggleDarkMode }) {
  return (
    <div className={`Home ${darkMode ? 'dark-mode' : ''}`}>
      <TopBar />
      <Routes>
        <Route path="/" element={
          <div>
            <VideoList />
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-3">
                  <SideBar />
                </div>
              </div>
            </div>
          </div>
        } />
        <Route path="/watch/:videoPath" element={
          <div>
            <WatchVideoScreen />
            <VideoList />
          </div>
        } />
        <Route path="/add" element={<AddVideo />} />
      </Routes>


    </div>
  );
}


export default Home;