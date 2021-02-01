import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Player } from "video-react";
// import Cookies from "js-cookie";

import { AiFillLike, AiFillDislike } from "react-icons/ai";

// Styles
import "../styles/Video.css";

// Components Import
import Comment from "../User/Comment";
import CommentList from "../CommentComponents/CommentList";

import axios from "axios";

const base = axios.create({
  baseURL: "http://localhost:4000/video/",
});

const Video = () => {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDesc, setVideoDesc] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [released, setReleased] = useState("");
  const [videoLikes, setVideoLikes] = useState(0);
  const [videoDislikes, setVideoDislikes] = useState(0);
  const [videoViews, setVideoViews] = useState(0);
  const [videoBy, setVideoBy] = useState("");
  const [videoPostedBy, setVideoPostedBy] = useState("");
  const [PostedByPicture, setPostedByPicture] = useState("");

  const { videoID } = useParams();

  useEffect(() => {
    const getVideo = () => {
      base
        .get(`watchVideo/${videoID}`, { withCredentials: true })
        .then((result) => {
          setVideoTitle(result.data.videoName);
          setVideoDesc(result.data.videoDescription);
          setReleased(result.data.videoCreatedOn);
          setVideoUrl(result.data.videoUrl);
          setVideoLikes(result.data.videoLikes);
          setVideoDislikes(result.data.videoDislikes);
          setVideoViews(result.data.views);
          setVideoBy(result.data.videoBy);
          console.log(result.data);
        })
        .catch((err) => console.log(err));
    };

    const getUser = () => {
      axios
        .get(`http://localhost:4000/user/videoPostedBy/${videoBy}`, {
          withCredentials: true,
        })
        .then((result) => {
          setVideoPostedBy(result.data.name);
          setPostedByPicture(result.data.profile_picture);
        })
        .catch((error) => console.log(error));
    };

    const getComments = () => {
      axios.get("http://localhost:4000/comment/");
    };

    getVideo();
    getUser();
  });

  return (
    <div id="Video">
      <div className="real_video">
        <Player
          playsInline
          fluid={false}
          width={950}
          height={600}
          src={videoUrl}
        ></Player>
      </div>

      <div className="video_info">
        <p id="video_title">{videoTitle}</p>
        <p id="video_desc">{videoDesc}</p>
        <strong id="video_release_date">
          Released : {released.substr(0, 10)}
        </strong>
        <div className="like_dislike_div">
          <p>
            <AiFillLike /> {videoLikes}
          </p>
          <p>
            <AiFillDislike /> {videoDislikes}
          </p>
          <p className="video_views">{videoViews} views</p>
          <p>By : {videoPostedBy}</p>
          <img src={PostedByPicture}></img>
        </div>
      </div>

      <div className="comment_div">
        <Comment />
      </div>

      <div className="comments_div">
        <strong>123,4 Comments - Sort By</strong>
        <CommentList />
      </div>
    </div>
  );
};

export default Video;
