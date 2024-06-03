

// src/App.js
import React from 'react';
import TopBar from './topBar/TopBar'; 
import Dropdown from './topBar/Dropdown'; 
import './App.css';
import SideBar from './sideBar/SideBar';



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

    </div>
  );
}

export default App;
