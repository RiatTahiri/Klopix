import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Navbar";
import "../styles/Profile.css";

import UsersVideos from "../VideoComponents/UsersVideos";

const base = Axios.create({
  baseURL: "http://localhost:4000/user/",
});

const Profile = () => {
  const [channelName, setChannelName] = useState("");
  const [channelPicture, setChannelPicture] = useState("");
  const [channelCreated, setChannelCreated] = useState("");

  const channel = async () => {
    const res = await base
      .get("myChannel", {
        method: "GET",
        withCredentials: true,
      })
      .then((response) => {
        setChannelName(response.data.name);
        setChannelPicture(response.data.profile_picture);
        setChannelCreated(response.data.createdAccount);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(channel);

  return (
    <div id="profile_main">
      <div className="banner">
        <img src="./image.jpg" />
      </div>
      <div className="channel_info">
        <h3>{channelName}</h3>
        <h3>Created Channel: {channelCreated.substr(0, 10)}</h3>
      </div>
      <Link to="/settings">Settings</Link>
      <UsersVideos />
    </div>
  );
};

export default Profile;
