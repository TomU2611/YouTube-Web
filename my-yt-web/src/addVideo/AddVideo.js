import './AddVideo.css';
import React, { useState } from 'react';
import AddedVideoList from './addedVideoList/AddedVideoList';
import AddVideoForm from './addVideoForm/AddVideoForm';

function AddVideo() {
  const [videos, setVideosList] = useState([]);

  return (
    <div className="add-video-container">
      <div className="add-video-form-container">
        <AddVideoForm setVideosList={setVideosList} />
      </div>
      <div className="added-video-list-container">
        <AddedVideoList videos={videos} />
      </div>
    </div>
  );
}

export default AddVideo;
