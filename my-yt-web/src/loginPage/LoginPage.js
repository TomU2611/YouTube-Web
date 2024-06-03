import React, { useState } from 'react';
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
        <div className="login-container">
            <div className="youtube-icon"></div>
            <form className="login-form" onSubmit={handleSubmit}>
                
                <h2>Sign In</h2>
                <div className="form-group">
                    <span>Username</span>
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="form-group">
                    <span>Password</span>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="form-buttons">
                    <button type="button" onClick={handleSubmit}>Login</button>
                    <div to="/register">
                        <button type="submit">Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;