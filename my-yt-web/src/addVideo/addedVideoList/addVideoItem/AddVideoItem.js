import React from 'react';
import './AddVideoItem.css';

//display the video item
function AddVideoItem({video}) {
    const imagePath = `${process.env.PUBLIC_URL}/photos/${video.photo}`;
    return (
        <div className="AddedVideoItem">
            <img src={imagePath} alt={video.title} />
            <div>{video.title}</div>
            {/* Input the author views and timeAgo */}
            <smallText>{"user"}</smallText>  
            <smallText>{"5"} Views - {"one hour ago"}</smallText>
        </div>
    );
}

export default AddVideoItem;