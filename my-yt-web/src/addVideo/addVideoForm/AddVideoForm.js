import React, { useState } from 'react';
import './AddVideoForm.css';

function AddVideoForm({ setVideosList }) {
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState(null);
  const [video, setVideo] = useState(null);

    const handlePhotoChange = (event) => {
      setPhoto(event.target.files[0]);
    };
  
    const handleVideoChange = (event) => {
      setVideo(event.target.files[0]);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (!title || !photo || !video) {
        alert('Please fill out all fields and upload both photo and video.');
        return;
      }
  
      const newVideo = {
        title,
        photo: URL.createObjectURL(photo),
        video: URL.createObjectURL(video)
      };
      // Add the new video to the list of videos in the AddVideo list
      setVideosList(prevVideos => [...prevVideos, newVideo]);
  
      // Clear the form fields
      setTitle('');
      setPhoto(null);
      setVideo(null);
    };
    return (
      <form onSubmit={handleSubmit} className="AddVideoForm">
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Photo:
        <input type="file" onChange={handlePhotoChange} />
      </label>
      <label>
        Video:
        <input type="file" onChange={handleVideoChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddVideoForm;