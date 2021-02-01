import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, TextField } from "@material-ui/core/";

import "../styles/Comment.css";

const base = axios.create({
  baseURL: "http://localhost:4000/comment/",
});

const Comment = () => {
  const [comment, setComment] = useState("");
  const { videoID } = useParams();
  let commentedOnVideo = "";

  commentedOnVideo = videoID;

  const postComment = async (e) => {
    e.preventDefault();

    base
      .post("comment", { comment, commentedOnVideo }, { withCredentials: true })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div id="Comment">
      <TextField
        type="text"
        variant="standard"
        label="Comment"
        size="medium"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      ></TextField>
      <br />
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={postComment}
      >
        Comment
      </Button>
    </div>
  );
};

export default Comment;
