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
        <div id='m1'>
            <h2 id='title'>Sign In</h2>
            <form onSubmit={handleSubmit}>
                
                <div className="input-group mb-3 sp1"> 
                    <span className="input-group-text sp" >Username</span>
                    <input type="text" className="form-control sp2" aria-label="Username" aria-describedby="basic-addon1" value={username} onChange={handleUsernameChange}/>
                </div>
                <div className="input-group mb-3 sp1"> 
                    <span className="input-group-text sp" >Password</span>
                    <input type="text" className="form-control sp2" aria-label="Password" aria-describedby="basic-addon1" value={password} onChange={handlePasswordChange}/>
                </div>
                
                <button id='but' className="btn btn-danger" type="button">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;