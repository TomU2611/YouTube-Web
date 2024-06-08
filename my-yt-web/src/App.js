import React, { useState } from 'react';
import Home from './homePage/Home'; 
import './App.css';
import WatchVideo from './watchVideo/WatchVideo';

import SideBar from './sideBar/SideBar';
import AddVideo from './addVideo/AddVideo';



function App() {
  return (
    <div className="App">
       <div class="container-fluid">
        <div class="row">
          <div class="col-sm-9-fluid">
          <TopBar />
          </div>
          <div class="col-sm-3-fluid">
          <SideBar/>
          <Dropdown/>
          </div> 
        </div>
      </div>
=======

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <WatchVideo darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
