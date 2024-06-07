import AddedVideoItem from './addedVideoItem/AddedVideoItem';
import './AddedVideoList.css';

function AddedVideoList({videos}) {
    return (
        <div className="AddedVideoList">
           { 
                videos.map((video, index) =>
                    <AddedVideoItem key={index} video={video} />
                )
            }
        </div>
    );
}

export default AddedVideoList;