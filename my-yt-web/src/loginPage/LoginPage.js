import React, { useState } from 'react';
import RegisterPage from '../registerPage/RegisterPage';
import {Router, Route, Switch, Link  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css';


function LoginPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

   

    return (
        <div id='m1'>
            <h2 id='title'>Sign In</h2>
            <form onSubmit={handleSubmit}>
                
                <div className="input-group mb-3"> 
                    <span className="input-group-text" >Username</span>
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" value={username} onChange={handleUsernameChange}/>
                </div>
                <div className="input-group mb-3"> 
                    <span className="input-group-text" >Password</span>
                    <input type="text" className="form-control" aria-label="Password" aria-describedby="basic-addon1" value={password} onChange={handlePasswordChange}/>
                </div>

                <div id='buttons'>
                    <button className="btn btn-danger" type="button" onClick={handleSubmit}>Login</button>
                    <button className="btn btn-danger">Register</button>
                    
                </div>
                
            </form>
        </div>
    );
}

export default LoginPage;