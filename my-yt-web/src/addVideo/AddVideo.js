import './AddVideo.css';
import React, { useState } from 'react';
import AddedVideoList from './addedVideoList/AddedVideoList';
import AddVideoForm from './addVideoForm/AddVideoForm';

function AddVideo() {
  const [videos, setVideosList] = useState([]);

  return (
    <div className="add-video">
      <AddVideoForm setVideosList={setVideosList} />
      <div className="AddedVideoList">
        <AddedVideoList videos={videos} setVideosList={setVideosList} />
      </div>
    </div>
  );
}

export default AddVideo;
