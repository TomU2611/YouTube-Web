function VideoItem({ title, author, image, views, date, onVideoSelect, video }) {
    return (
        <div >
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Views: {views}</p>
            <p>Date: {date}</p>
        </div>
    );
}