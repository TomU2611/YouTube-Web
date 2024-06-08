import React, { useState, useEffect } from 'react';
import './WatchVideoScreen.css';
import defaultAvatar from './default-avatar.png'; // Assuming there's a default avatar image
import { useParams } from 'react-router-dom';
import videos from "../data/defaultVideos.json";
import VideoList from '../videoList/Videolist';

function WatchVideoScreen({videoList, setVideos}) {

  const { videoID } = useParams();
  const [videoPath, setVideoPath] = useState(videoList[videoID].path);
 
  const [shares, setShares] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [subscribers, setSubscribers] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('Anonymous');
  const [commentAvatar, setCommentAvatar] = useState(defaultAvatar);
  
  
  useEffect(() => {
    setVideoPath(videoList[videoID].path);
  } , [videoID]);

  
  const handleLike = () => {
    const newVideos = [...videoList];
    newVideos[videoID].likes = newVideos[videoID].likes + 1;
    setVideos(newVideos);
  };

  const handleDislike = () => {
    const newVideos = [...videoList];
    newVideos[videoID].dislikes = newVideos[videoID].dislikes + 1;
    setVideos(newVideos);
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
    const newVideos = [...videoList];
    if (commentText.trim() !== '') {
      const newComment = {
        commentID: videoList[videoID].commentsNum,
        author: commentAuthor,
        text: commentText
      };
      const updatedVIdeoList = videoList.map(video => {
        if (video.index == videoID) {
          return {
            ...video,
            commentsNum: video.commentsNum + 1,
            comments: [...video.comments, newComment]
            
          };
        }
        return video;
      });
      setVideos(updatedVIdeoList);
      setCommentText('');
    }
  };

  return (
    <div className='big-container'>
    <div className="watch-video-container">
      <div className="video-player">
        <video  width="100%" src={`/videos/${videoPath}`} type="video/mp4" autoPlay controls></video>
      </div>
      <div className="video-info">
        <div className="button-container">
          <button onClick={handleLike}>Like ({videoList[videoID].likes})</button>
          <button onClick={handleDislike}>Dislike ({videoList[videoID].dislikes})</button>
          <button onClick={handleShare}>Share ({shares})</button>
          <button onClick={handleDownload}>Download ({downloads})</button>
          <button onClick={handleSubscribers}>Subscribers ({subscribers})</button>
        </div>
        <div className="comments-section">
          <h3>{videoList[videoID].commentsNum} Comments</h3>
          <div className="comment-input-container">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment"
            />
            <button onClick={handleComment}>Comment</button>
          </div>
          {videoList[videoID].comments.map((comment, index) => (
            <div key={index} className="comment">
              <img src={comment.avatar} alt="Avatar" />
              <span>{comment.author}</span>: {comment.text}
            </div>
          ))}
        </div>
      </div>
    </div>
     <div className="video-list-container">
      <div className="video-list">
        <VideoList videoList={videoList} />
       </div>
     </div>
     </div>

  );
};

export default WatchVideoScreen;
