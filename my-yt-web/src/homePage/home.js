import React from 'react';
import TopBar from '../topBar/TopBar'; 
import Dropdown from '../topBar/Dropdown';
import '../homePage/Home.css';
import SideBar from '../sideBar/SideBar';
import VideoList from '../videoList/Videolist';
import WatchVideoScreen from '../VideoScreen/WatchVideoScreen';
import { Routes, Route } from 'react-router-dom';
import AddVideo from '../addVideo/AddVideo';
import videos from '../data/defaultVideos.json';
import { useState } from 'react';




function Home({ darkMode, toggleDarkMode, connection}) {
  const [videoList, setVideos] = useState(videos);


  return (
    <div className={`Home ${darkMode ? 'dark-mode' : ''}`}>
      <TopBar connection={connection} />
      <Routes>
        <Route path="/" element={
          <div>
            <VideoList videoList={videoList}/>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-3">
                  <SideBar />
                </div>
              </div>
            </div>
          </div>
        } />
        <Route path="/watch/:videoID" element={
          <div className='videoScreen'>
            <WatchVideoScreen className='watchVideo' videoList={videoList} setVideos={setVideos}/>
            
          </div>
        } />
        <Route path="/add" element={<AddVideo />} />
      </Routes>


    </div>
  );
}


export default Home;