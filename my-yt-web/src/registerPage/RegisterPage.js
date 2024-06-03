import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterPage.css';

function RegisterPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [isValid, setIsValid] = useState(true);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
    const handleDisplayNameChange = (e) => {
        setDisplayName(e.target.value);
    }

    const handleRePasswordChange = (e) => {
        setRePassword(e.target.value);
    }
    
    const handleProfilePictureChange = (e) => {
        setProfilePicture(e.target.files[0]);
    }

    const validateInputs = () => {
        // Reset validation state
        setIsValid(true);

        // Check if all fields are filled
        if (!username || !password || !displayName || !rePassword || !profilePicture) {
            setIsValid(false);
            return;
        }

        // Check if passwords match
        if (password !== rePassword) {
            setIsValid(false);
            return;
        }

        // Check password complexity
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            setIsValid(false);
            return;
        }
    };

    const handleSubmit = () => {
        validateInputs();
        if (isValid) {
            // Perform account creation logic
            console.log('Account created successfully!');
        }
    };

    return (
        <div className="register-container">
            <div className="youtube-icon"></div>
            <form className="register-form">
                <h2>Sign Up</h2>
                
                <div className="profile-picture">
                    <img src={profilePicture ? URL.createObjectURL(profilePicture) : ''}  />
                    <label className="custom-file-upload">
                        Choose Profile Picture
                        <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
                    </label>
                </div>
                <div className="form-group">
                    <span>Display Name</span>
                    <input type="text" value={displayName} onChange={handleDisplayNameChange} />
                </div>
                <div className="form-group">
                    <span>Username</span>
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="form-group">
                    <span>Password</span>
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder='8 char long of letters and numbers' />
                </div>
                <div className="form-group">
                    <span>Re-enter Password</span>
                    <input type="password" value={rePassword} onChange={handleRePasswordChange} />
                </div>
                <div className="form-buttons">
                    <button type="button" onClick={handleSubmit}>Create Account</button>
                </div>
                {!isValid && <div className="invalid-input-message">Invalid input!</div>}
            </form>
        </div>
    );
}

export default RegisterPage;
