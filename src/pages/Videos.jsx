import VideoCard from "../components/VideoCard";
import { useVideoContext } from "../context/VideoContext";

export default function Videos() {
  const { videoList } = useVideoContext();

  if (!videoList) return <h1>Loading.....</h1>;

  return (
    <>
      <h2>All Videos</h2>
      <main className="container">
        {videoList.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </main>
    </>
  );
}
