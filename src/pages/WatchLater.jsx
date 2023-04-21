import VideoCard from "../components/VideoCard";
import { useVideoContext } from "../context/VideoContext";

export default function WatchLater() {
  const { watchLaterList } = useVideoContext();

  if (!watchLaterList) return <h1>Add some videos to the list</h1>;

  return (
    <>
      <h1>Watchlist</h1>
      <div className="container">
        {watchLaterList.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </>
  );
}
