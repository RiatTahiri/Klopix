import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const base = axios.create({
  baseURL: "http://localhost:4000/comment/",
});

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryComments = async () => {
      base
        .get("allComments", { withCredentials: true })
        .then((response) => {
          setComments(response.data);
          setLoading(false);
          console.log(response.data);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
          console.log(error);
        });
    };

    queryComments();
  }, []);

  return (
    <div>
      {loading
        ? "Loading"
        : comments.map((comment) => {
            <ul>
              <li>{comment.comment}</li>
            </ul>;
          })}
    </div>
  );
};

export default CommentList;
