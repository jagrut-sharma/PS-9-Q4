import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Welcome to video library.</h2>
      <h2>
        To browse all videos, click the below button or go to the videos page
      </h2>
      <button>
        <Link to="videos" className="link">
          Explore Videos
        </Link>
      </button>
    </div>
  );
}
