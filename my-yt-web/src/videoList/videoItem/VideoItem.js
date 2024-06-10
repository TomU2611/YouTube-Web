import React from 'react';
import './VideoItem.css';

//display the video item
function VideoItem({ title, author, views, timeAgo, photo}) {
    
    
    return (
        <div className="VideoItem">
        <img src={photo} alt={title} />
            <div>{title}</div>
            <p>{author}</p>
            <p>{views} Views - {timeAgo}</p>
        </div>
    );
}

export default VideoItem;