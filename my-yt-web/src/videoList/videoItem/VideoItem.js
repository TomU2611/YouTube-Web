function VideoItem({ title, author, image, views, date, onVideoSelect, video }) {
    return (
        <div onClick={() => onVideoSelect(video)}>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <img src={image} alt={title} />
            <p>Views: {views}</p>
            <p>Date: {date}</p>
        </div>
    );
}