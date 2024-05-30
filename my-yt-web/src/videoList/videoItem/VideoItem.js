function VideoItem({ title, author, views, date}) {
    return (
        <div >
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Views: {views}</p>
            <p>Date: {date}</p>
        </div>
    );
}
export default VideoItem;