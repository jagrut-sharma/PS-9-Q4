import VideoCard from "../components/VideoCard";
import { useVideoContext } from "../context/VideoContext";

export default function LikedVideos() {
  const { likedVideos } = useVideoContext();

  if (!likedVideos) return <h1>Add some videos to the list</h1>;

  return (
    <>
      <h1>Liked Videos</h1>
      <div className="container">
        {likedVideos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </>
  );
}
