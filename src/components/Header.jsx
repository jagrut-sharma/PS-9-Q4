import { NavLink } from "react-router-dom";

export default function Header() {
  const getClass = ({ isActive }) => {
    return isActive ? "active-link link" : "link";
  };

  return (
    <div>
      <NavLink to="/" className={getClass}>
        Home
      </NavLink>{" "}
      <NavLink to="/videos" className={getClass}>
        Videos
      </NavLink>{" "}
      <NavLink to="/likedVideos" className={getClass}>
        Liked Videos
      </NavLink>{" "}
      <NavLink to="/watchLater" className={getClass}>
        Watch Later
      </NavLink>
    </div>
  );
}
