import { Link } from "react-router-dom";
import { useVideoContext } from "../context/VideoContext";

export default function VideoCard(video) {
  const {
    likedVideos,
    watchLaterList,
    addToLiked,
    addToWatchList
  } = useVideoContext();

  const {
    id,
    title,
    description,
    url,
    thumbnail,
    duration,
    showDescription
  } = video;

  return (
    <div className="card">
      <a href={url} target="_blank">
        <img className="img" src={thumbnail} alt={title} />
      </a>
      <p>{title}</p>
      <Link to={`/videos/${id}`}>Watch Here</Link>
      {showDescription ? (
        <div>
          <p>
            <strong>Description: </strong>
            {description}
          </p>
          <p>
            <strong>Duration: </strong>
            {duration}
          </p>
        </div>
      ) : (
        ""
      )}
      <div>
        {likedVideos && likedVideos.find(({ id: vidID }) => vidID === id) ? (
          <button disabled>Added to liked videos</button>
        ) : (
          <button onClick={() => addToLiked(video)}>Like</button>
        )}

        {watchLaterList &&
        watchLaterList.find(({ id: vidID }) => vidID === id) ? (
          <button disabled>Added to watch later</button>
        ) : (
          <button onClick={() => addToWatchList(video)}>Watch later</button>
        )}
      </div>
    </div>
  );
}
