import React, { useState } from 'react';
import './AddVideo.css';
import AddedVideoList from './addedVideoList/AddedVideoList';
import AddVideoForm from './addVideoForm/AddVideoForm';


function AddVideo() {
  
  return (
    <div className="add-video">
      <AddVideoForm />
      <div className="AddedVideoList">
        <AddedVideoList videos={videos} />
      </div>
    </div>
  );
}

export default AddVideo;
