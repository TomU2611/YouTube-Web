import VideoItem from "./videoItem/VideoItem";
import './VideoList.css';
import { Link } from "react-router-dom";

function VideoList({videoList}) {
    
    
    

    return (
        <div className="VideoList">
            {videoList.map((video, key) =>
                <Link className="vid" to={`/watch/${video.index}` } ><VideoItem key={key} {...video}></VideoItem></Link>
                
            )}
        </div>


    );
}

export default VideoList;