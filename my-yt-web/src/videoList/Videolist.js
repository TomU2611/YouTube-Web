import VideoItem from "./videoItem/VideoItem";
import videos from "../data/videos";
import { useState } from 'react';

function Videolist() {
    
    const [videosList, setVideosList] = useState(videos);
    console.log(videosList)
    var i = 1
    console.log(i)
    i+=1
    console.log(i)

    return (
        <div className="Videolist">
           { 
                videosList.map((video) =>
                    <video {...video} />
                )
            }
        </div>
      );
}