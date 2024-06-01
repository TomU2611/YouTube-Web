import React from 'react';
import './VideoItem.css';

function VideoItem({ title, author, views, timeAgo, photo}) {
    const imagePath = `${process.env.PUBLIC_URL}/photos/${photo}`;
    return (
        <div className="VideoItem">
            <img src={imagePath} alt={title} />
            <div>{title}</div>
            <smallText>{author}</smallText>
            <smallText>{views} Views - {timeAgo}</smallText>
        </div>
    );
}

export default VideoItem;