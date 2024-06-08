import React, { useState } from 'react';
import Home from './homePage/Home'; 
import './App.css';

import { BrowserRouter, Route,Routes, link } from 'react-router-dom';
import LoginPage from './loginPage/LoginPage';
import RegisterPage from './registerPage/RegisterPage';

import usersFile from './data/users';

function App() {
  const [users, setUsers] = useState(usersFile);
  
  const [darkMode, setDarkMode] = useState(false);
  
  const [connection, setConnection] = useState({ isConnected: false, user: '' });
  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage users={users} setConnection={setConnection}/>} />
        <Route path="/register" element={<RegisterPage users={users} setUsers={setUsers} />} />
        <Route path="/*" element={<Home connection={connection} users={users}/>}/>
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
