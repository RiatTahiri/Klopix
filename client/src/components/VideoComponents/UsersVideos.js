import React, { useState, useEffect } from "react";
import { videoApi } from "../../ApiRoutes";

const UsersVideos = () => {
  const [videos, setVideos] = useState("");

  useEffect(() => {
    videoApi
      .get("myVideos", {
        method: "GET",
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return <div></div>;
};

export default UsersVideos;
