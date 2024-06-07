import React from 'react';
import './AddVideoItem.css';

function AddVideoItem({ video, index, deleteVideo }) {
    return (
        <div className="AddedVideoItem">
            <img src={video.photo} className="videoPhoto" />
            <div className="videoDetails">
                <div className="videoTitle">{video.title}</div>
                <div className="videoViews">{"100"}</div>
                <div className="videoTimeAgo">{"1 hour ago"}</div>
                <div className="videoActions">
                    <button className="deleteButton" onClick={() => deleteVideo(index)}>X</button>
                </div>
            </div>
        </div>
    );
}

export default AddVideoItem;
