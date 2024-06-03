import VideoItem from "./videoItem/VideoItem";
import videos from "../data/defaultVideos.json";
import { useState } from 'react';
import './VideoList.css';

function VideoList() {
    const [videosList, setVideosList] = useState(videos);
    console.log(videosList)
    var i = 1
    console.log(i)
    i+=1
    console.log(i)

    return (
        <div className="VideoList">
           { 
                videosList.map((video) =>
                    <VideoItem {...video} />
                )
            }
        </div>
      );
}

export default VideoList;