import React, { useState } from 'react';
import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label >Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button className="btn btn-danger" type="button">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;