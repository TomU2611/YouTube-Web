import React, { useState } from 'react';
import Home from './homePage/Home'; 
import './App.css';

import { BrowserRouter, Route,Routes, link } from 'react-router-dom';
import LoginPage from './loginPage/LoginPage';
import RegisterPage from './registerPage/RegisterPage';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<Home/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}
/*
function App() {
  
  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <WatchVideo darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}
*/

export default App;
