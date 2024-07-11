import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterPage.css';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage({ users, setUsers, setConnection }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

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
    const getProfilePic = async () => {
        if (!profilePicture) {
            return await convertToBase64('/photos/guest.png');
        }
        return await convertToBase64(profilePicture);
    }
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });

    

    };

    const validateInputs = async () => {
        // Reset validation state


        // Check if all fields are filled
        if (!username || !password || !displayName || !rePassword) {
            setMessage('Invalid input!');
            return;
        }

        // Check if passwords match
        if (password !== rePassword) {
            setMessage('Invalid input!');
            return;
        }


        // Check password complexity
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            setMessage('Invalid input!');
            return;
        }
        const base64Pic = await getProfilePic();
        
        const newUser = {
            username: username,
            password: password,
            displayName: displayName,
            profilePicture: base64Pic,
        };



        const status = registerServer(newUser);


        setMessage('Account Created');
        
        navigate('/login');
    };

    const registerServer = async (data) => {
        try {

            const response = await fetch("http://localhost:12345/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            return response.status;
        } catch (error) {
            console.error(error);

        }
    };

    const handleSubmit = () => {
        validateInputs();

    };

    return (
        <div className="register-container">
            <Link to="/"><div className="youtube-icon"></div></Link>
            <form className="register-form">
                <h2>Sign Up</h2>

                <div className="profile-picture">
                    <img src={profilePicture ? URL.createObjectURL(profilePicture) : ''} alt="" />
                    {!profilePicture && (
                        <label className="custom-file-upload">
                            Choose Profile Picture
                            <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
                        </label>)}
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
                {message && (
                    <div className={message === 'Invalid input!' ? 'invalid-input-message' : 'valid-input-message'}>
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
}

export default RegisterPage;
