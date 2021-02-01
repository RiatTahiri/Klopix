import React, { useState, useEffect } from "react";
import axios from "axios";

import "../styles/VideoList.css";

const base = axios.create({
  baseURL: "http://localhost:4000/video/",
});

const config = {
  withCredentials: true,
};

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const queryVideos = async () => {
      const res = await base
        .get("/videos", config)
        .then((result) => {
          setVideos(result.data);
          console.log(result.data[0]);
        })
        .catch((error) => {
          setError(error);
          console.log(error);
        });
    };
    queryVideos();
  }, []);

  return (
    <div id="VideoList">
      <h3>Videos</h3>
      <h3>More Videos</h3>

      {/* {videos.map((video) => {
        <ul>{<li>{video[0]}</li>}</ul>;
        console.log(video.videos);
      })} */}

      {console.log(videos[0])}

      {videos.map((video) => {
        <ul>
          <li>{video.videoLikes}</li>
        </ul>;
      })}

      {/* <p>Error: {error}</p> */}
    </div>
  );
};

export default VideoList;
