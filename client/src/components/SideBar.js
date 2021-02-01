import React from "react";
import { Link } from "react-router-dom";

import "./styles/SideBar.css";

const SideBar = () => {
  return (
    <div id="sidebar">
      <ul className="sidebar_ul">
        <li className="sidebar_li">Home</li>
        <li className="sidebar_li">Followers</li>
        <li className="sidebar_li">Trending Videos</li>
        <li className="sidebar_li">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
