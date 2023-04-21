import { createContext, useState, useEffect, useContext } from "react";

import { fakeFetch } from "../API/fakeFetch";

const VideoContext = createContext({
  videoList: [],
  likedVideos: [],
  watchLaterList: []
});

export const VideoProvider = function ({ children }) {
  const [videoList, setVideoList] = useState(null);
  const [likedVideos, setLikedVideos] = useState(null);
  const [watchLaterList, setWatchLaterList] = useState(null);

  const fetchVideoList = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/videos");
      const {
        data: { videos }
      } = res;
      setVideoList(videos);
    } catch (err) {
      console.error(`${err.status}: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchVideoList();
  }, []);

  const addToLiked = (video) => {
    if (!likedVideos) {
      setLikedVideos([video]);
      return;
    }
    setLikedVideos([...likedVideos, video]);
  };

  const addToWatchList = (video) => {
    if (!watchLaterList) {
      setWatchLaterList([video]);
      return;
    }
    setWatchLaterList([...watchLaterList, video]);
  };

  const videoContext = {
    videoList,
    likedVideos,
    watchLaterList,
    addToLiked,
    addToWatchList
  };

  return (
    <VideoContext.Provider value={videoContext}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => useContext(VideoContext);
