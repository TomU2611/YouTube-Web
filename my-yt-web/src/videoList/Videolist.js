import VideoItem from "./videoItem/VideoItem";
import './VideoList.css';
import { Link } from "react-router-dom";


function VideoList({videoList, searchQuery}) {
    
    
    

    return (
        <div className="VideoList">
            {videoList.map((video, key) =>
                (  video.title.toLowerCase().includes(searchQuery.toLowerCase())  ) &&
                <Link key={key} className="vid" to={`/watch/${video.index}` } ><VideoItem  {...video}></VideoItem></Link>
                
            )}
        </div>


    );
}

export default VideoList;