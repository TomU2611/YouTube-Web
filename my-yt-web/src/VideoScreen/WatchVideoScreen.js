import React, { useState, useEffect } from 'react';
import './WatchVideoScreen.css';
import defaultAvatar from './default-avatar.png'; // Assuming there's a default avatar image
import { useParams } from 'react-router-dom';


function WatchVideoScreen() {
  const { videoPath } = useParams();
  const [currentVideoPath, setCurrentVideoPath] = useState(videoPath);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [shares, setShares] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [subscribers, setSubscribers] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('Anonymous');
  const [commentAvatar, setCommentAvatar] = useState(defaultAvatar);

  useEffect(() => {
    setCurrentVideoPath(videoPath);
  }, [videoPath]);

  
  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  const handleDownload = () => {
    setDownloads(downloads + 1);
  };

  const handleSubscribers = () => {
    setSubscribers(subscribers + 1);
  };

  const handleComment = () => {
    if (commentText.trim() !== '') {
      const newComment = {
        text: commentText,
        author: commentAuthor,
        avatar: commentAvatar
      };
      setComments([...comments, newComment]);
      setCommentText('');
    }
  };

  return (

    <div className="watch-video-container">
      <div className="video-player">
        <video controls width="100%">
          <source src={`/videos/${currentVideoPath}`} type="video/mp4" />
        </video>
      </div>
      <div className="video-info">
        <div className="button-container">
          <button onClick={handleLike}>Like ({likes})</button>
          <button onClick={handleDislike}>Dislike ({dislikes})</button>
          <button onClick={handleShare}>Share ({shares})</button>
          <button onClick={handleDownload}>Download ({downloads})</button>
          <button onClick={handleSubscribers}>Subscribers ({subscribers})</button>
        </div>
        <div className="comments-section">
          <h3>{comments.length} Comments</h3>
          <div className="comment-input-container">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment"
            />
            <button onClick={handleComment}>Comment</button>
          </div>
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <img src={comment.avatar} alt="Avatar" />
              <span>{comment.author}</span>: {comment.text}
            </div>
          ))}
        </div>
      </div>
    </div>


  );
};

export default WatchVideoScreen;
