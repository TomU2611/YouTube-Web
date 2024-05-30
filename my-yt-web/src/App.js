// src/App.js
import React from 'react';
import TopBar from './topBar/TopBar'; // Ensure this path is correct
import Dropdown from './topBar/Dropdown'; // Ensure this path is correct
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Dropdown/>
      {/* Other components will go here */}
    </div>
  );
}

export default App;
