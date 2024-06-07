import AddedVideoItem from './addVideoItem/AddVideoItem';
import './AddedVideoList.css';

function AddedVideoList({ videos, setVideosList }) {
    const deleteVideo = (index) => {
        setVideosList((prevVideos) => prevVideos.filter((_, i) => i !== index));
    };
    return (
        <div className="AddedVideoList">
            <div className="AddedVideoListHeader">
                        <div className="headerItem">Title</div>
                        <div className="headerItem">Views</div>
                        <div className="headerItem">Time Ago</div>
                    </div>
            { videos.length > 0 ? (
                <>
                    {videos.map((video, index) => (
                        <AddedVideoItem key={index} video={video} index={index} deleteVideo={deleteVideo} />
                    ))}
                </>
            ) : (
                <p>No videos added yet.</p>
            )}
        </div>
    );
}

export default AddedVideoList;
