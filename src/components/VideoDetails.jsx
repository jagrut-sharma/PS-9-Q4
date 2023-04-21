import { useVideoContext } from "../context/VideoContext";
import { useParams } from "react-router-dom";
import VideoCard from "./VideoCard";

export default function VideoDetails() {
  const { videoID } = useParams();
  const { videoList } = useVideoContext();

  if (!videoList) return <h1>Loading....</h1>;

  const findVideo = (videoList, videoID) => {
    return videoList.find(({ id }) => id === +videoID);
  };

  const video = findVideo(videoList, videoID);

  return (
    <div className="description-card">
      <VideoCard {...video} showDescription />
    </div>
  );
}
