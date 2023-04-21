import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import VideoDetails from "./components/VideoDetails";
import Home from "./pages/Home";
import LikedVideos from "./pages/LikedVideos";
import Videos from "./pages/Videos";
import WatchLater from "./pages/WatchLater";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/likedVideos" element={<LikedVideos />} />
        <Route path="/watchLater" element={<WatchLater />} />
        <Route path="/videos/:videoID" element={<VideoDetails />} />
      </Routes>
    </div>
  );
}
