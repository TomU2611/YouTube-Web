import React, { useState } from 'react';
import './AddVideoForm.css';

function AddVideoForm() {
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState(null);
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState([]);

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
  
      setVideos([...videos, newVideo]);
  
      // Clear the form fields
      setTitle('');
      setPhoto(null);
      setVideo(null);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="file" onChange={handlePhotoChange} />
            <input type="file" onChange={handleVideoChange} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddVideoForm;