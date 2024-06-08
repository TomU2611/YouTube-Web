import VideoItem from "./videoItem/VideoItem";
import videos from "../data/defaultVideos.json";
import { useState } from 'react';
import './VideoList.css';
import { Link } from "react-router-dom";

function VideoList() {
    const [videosList, setVideosList] = useState(videos);
    
    

    return (
        <div className="VideoList">
            {videosList.map((video) =>
                <Link className="vid" to={`/watch/${video.video}` } ><VideoItem  {...video}></VideoItem></Link>
                
            )}
        </div>


    );
}

export default VideoList;